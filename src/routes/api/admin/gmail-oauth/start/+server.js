import crypto from "node:crypto";
import { redirect, text } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

const GMAIL_SEND_SCOPE = "https://www.googleapis.com/auth/gmail.send";
const STATE_MAX_AGE_MS = 10 * 60 * 1000;

function clean(value, limit = 2000) {
  return String(value || "").trim().slice(0, limit);
}

function base64Url(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function setupKeyMatches(value) {
  const setupKey = clean(env.CONTACT_OAUTH_SETUP_KEY, 500);
  return Boolean(setupKey && value && safeEqual(value, setupKey));
}

function callbackUrl(url) {
  const configured = clean(env.GMAIL_REDIRECT_URI, 1000);
  if (configured) return configured;
  return new URL("/api/admin/gmail-oauth/callback", url.origin).href;
}

function buildState() {
  const setupKey = clean(env.CONTACT_OAUTH_SETUP_KEY, 500);
  const payload = base64Url(JSON.stringify({
    exp: Date.now() + STATE_MAX_AGE_MS,
    nonce: crypto.randomBytes(18).toString("base64url")
  }));
  return `${payload}.${sign(payload, setupKey)}`;
}

export function GET({ url }) {
  const key = clean(url.searchParams.get("key"), 500);
  if (!setupKeyMatches(key)) {
    return text("Not found", { status: 404 });
  }

  const clientId = clean(env.GMAIL_CLIENT_ID, 1000);
  if (!clientId) {
    return text("GMAIL_CLIENT_ID is required before starting Gmail OAuth setup.", { status: 503 });
  }

  const oauthUrl = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  oauthUrl.searchParams.set("client_id", clientId);
  oauthUrl.searchParams.set("redirect_uri", callbackUrl(url));
  oauthUrl.searchParams.set("response_type", "code");
  oauthUrl.searchParams.set("scope", GMAIL_SEND_SCOPE);
  oauthUrl.searchParams.set("access_type", "offline");
  oauthUrl.searchParams.set("prompt", "consent");
  oauthUrl.searchParams.set("include_granted_scopes", "true");
  oauthUrl.searchParams.set("state", buildState());

  throw redirect(302, oauthUrl.href);
}
