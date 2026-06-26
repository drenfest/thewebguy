import crypto from "node:crypto";
import { env } from "$env/dynamic/private";

const GMAIL_SEND_SCOPE = "https://www.googleapis.com/auth/gmail.send";
const RENDER_API_BASE = "https://api.render.com/v1";

function clean(value, limit = 4000) {
  return String(value || "").trim().slice(0, limit);
}

function escapeHtml(value) {
  return clean(value, 10000)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function decodeBase64Url(value) {
  const padded = `${value}${"=".repeat((4 - (value.length % 4)) % 4)}`;
  return Buffer.from(padded.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
}

function validateState(value) {
  const setupKey = clean(env.CONTACT_OAUTH_SETUP_KEY, 500);
  if (!setupKey || !value) return false;

  const [payload, signature] = value.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload, setupKey);
  if (!safeEqual(signature, expected)) return false;

  try {
    const parsed = JSON.parse(decodeBase64Url(payload));
    return Number(parsed.exp) > Date.now();
  } catch {
    return false;
  }
}

function callbackUrl(url) {
  const configured = clean(env.GMAIL_REDIRECT_URI, 1000);
  if (configured) return configured;
  return new URL("/api/admin/gmail-oauth/callback", url.origin).href;
}

function htmlResponse(body, status = 200) {
  return new Response(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Gmail OAuth Setup</title>
    <style>
      body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; max-width: 760px; margin: 48px auto; padding: 0 20px; line-height: 1.55; color: #14213d; background: #f7f5ef; }
      main { background: #fff; border: 1px solid #ded8c9; border-radius: 8px; padding: 28px; box-shadow: 0 18px 50px rgba(20, 33, 61, 0.12); }
      h1 { margin-top: 0; font-size: 1.55rem; }
      code, textarea { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; }
      textarea { box-sizing: border-box; width: 100%; min-height: 140px; padding: 12px; border: 1px solid #b7c0d4; border-radius: 6px; }
      .ok { color: #087f5b; }
      .warn { color: #9a3412; }
      .muted { color: #5f6677; }
    </style>
  </head>
  <body>
    <main>${body}</main>
  </body>
</html>`, {
    status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" }
  });
}

async function exchangeCodeForTokens({ code, redirectUri }) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clean(env.GMAIL_CLIENT_ID, 1000),
      client_secret: clean(env.GMAIL_CLIENT_SECRET, 1000),
      code,
      redirect_uri: redirectUri,
      grant_type: "authorization_code"
    })
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Google token exchange failed (${response.status}): ${payload.error_description || payload.error || response.statusText}`);
  }

  return payload;
}

async function updateRenderEnvVar({ key, value }) {
  const apiKey = clean(env.RENDER_API_KEY, 2000);
  const serviceId = clean(env.CONTACT_OAUTH_RENDER_SERVICE_ID || env.RENDER_SERVICE_ID, 200);
  if (!apiKey || !serviceId) {
    return { updated: false, reason: "missing_render_api_config" };
  }

  const response = await fetch(`${RENDER_API_BASE}/services/${encodeURIComponent(serviceId)}/env-vars/${encodeURIComponent(key)}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ value })
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Render env var update failed (${response.status}): ${payload.message || payload.error || response.statusText}`);
  }

  return { updated: true };
}

async function triggerRenderDeploy() {
  const apiKey = clean(env.RENDER_API_KEY, 2000);
  const serviceId = clean(env.CONTACT_OAUTH_RENDER_SERVICE_ID || env.RENDER_SERVICE_ID, 200);
  if (!apiKey || !serviceId) return { triggered: false };
  if (clean(env.CONTACT_OAUTH_TRIGGER_DEPLOY, 20).toLowerCase() === "false") return { triggered: false };

  const response = await fetch(`${RENDER_API_BASE}/services/${encodeURIComponent(serviceId)}/deploys`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({ clearCache: "do_not_clear" })
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(`Render deploy trigger failed (${response.status}): ${payload.message || payload.error || response.statusText}`);
  }

  return { triggered: true };
}

function tokenFallbackHtml(refreshToken, message = "") {
  return `
    <h1 class="warn">Gmail refresh token created</h1>
    ${message ? `<p>${escapeHtml(message)}</p>` : ""}
    <p>Render API auto-update is not configured, so copy this value into <code>GMAIL_REFRESH_TOKEN</code> for the Render service, then redeploy.</p>
    <textarea readonly>${escapeHtml(refreshToken)}</textarea>
    <p class="muted">Treat this token like a password. Close this page after updating Render.</p>
  `;
}

export async function GET({ url }) {
  if (!validateState(clean(url.searchParams.get("state"), 3000))) {
    return htmlResponse("<h1>OAuth setup link expired</h1><p>Start again from the latest Gmail OAuth setup link in the Render logs.</p>", 400);
  }

  const error = clean(url.searchParams.get("error"), 500);
  if (error) {
    return htmlResponse(`<h1>Google OAuth was not approved</h1><p>${escapeHtml(error)}</p>`, 400);
  }

  const code = clean(url.searchParams.get("code"), 5000);
  if (!code) {
    return htmlResponse("<h1>Missing authorization code</h1><p>Google did not return an authorization code.</p>", 400);
  }

  try {
    const tokens = await exchangeCodeForTokens({ code, redirectUri: callbackUrl(url) });
    const refreshToken = clean(tokens.refresh_token, 4000);

    if (!refreshToken) {
      return htmlResponse(
        "<h1>No refresh token returned</h1><p>Start again from the setup link. If this keeps happening, revoke the app's existing Google account access, then retry so Google shows a fresh consent screen.</p>",
        502
      );
    }

    if (tokens.scope && !tokens.scope.split(/\s+/).includes(GMAIL_SEND_SCOPE)) {
      return htmlResponse(`<h1>Wrong OAuth scope</h1><p>The returned token is missing <code>${GMAIL_SEND_SCOPE}</code>.</p>`, 502);
    }

    try {
      const updateResult = await updateRenderEnvVar({ key: "GMAIL_REFRESH_TOKEN", value: refreshToken });
      if (!updateResult.updated) {
        return htmlResponse(tokenFallbackHtml(refreshToken));
      }

      const deployResult = await triggerRenderDeploy();
      return htmlResponse(`
        <h1 class="ok">Gmail refresh token saved</h1>
        <p><code>GMAIL_REFRESH_TOKEN</code> was updated on the Render service.</p>
        <p>${deployResult.triggered ? "A Render redeploy was triggered so the app can start using the new token." : "Trigger a Render redeploy so the app can start using the new token."}</p>
        <p class="muted">The contact form can refresh Gmail access tokens automatically from this refresh token during send.</p>
      `);
    } catch (renderError) {
      console.error("Gmail OAuth token was created, but Render update failed.", renderError);
      return htmlResponse(tokenFallbackHtml(refreshToken, "Google returned a refresh token, but the app could not update Render automatically."));
    }
  } catch (exchangeError) {
    console.error("Gmail OAuth setup failed.", exchangeError);
    return htmlResponse(`<h1>Gmail OAuth setup failed</h1><p>${escapeHtml(exchangeError.message)}</p>`, 502);
  }
}
