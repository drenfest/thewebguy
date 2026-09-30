import { env } from "$env/dynamic/private";
import { siteOrigin } from "$lib/config/site.js";
import { aiDevelopmentRedirects } from "$lib/data/ai-development.js";

let setupLinkLogged = false;

function clean(value) {
  return String(value || "").trim();
}

function contactEmailProvider() {
  const provider = clean(env.CONTACT_EMAIL_PROVIDER).toLowerCase();
  if (["gmail", "gmail-api", "google"].includes(provider)) return "gmail";
  if (["smtp", "mail"].includes(provider)) return "smtp";
  return "";
}

function logGmailOauthSetupLink() {
  if (setupLinkLogged) return;
  setupLinkLogged = true;

  if (contactEmailProvider() !== "gmail") return;
  if (clean(env.GMAIL_REFRESH_TOKEN)) return;

  const setupKey = clean(env.CONTACT_OAUTH_SETUP_KEY);
  if (!setupKey) {
    console.warn("Gmail OAuth setup is unavailable because CONTACT_OAUTH_SETUP_KEY is not set.");
    return;
  }

  const setupUrl = new URL("/api/admin/gmail-oauth/start", `${siteOrigin}/`);
  setupUrl.searchParams.set("key", setupKey);
  console.warn(`Gmail OAuth setup required. Open this URL to create a refresh token: ${setupUrl.href}`);
}

logGmailOauthSetupLink();

export async function handle({ event, resolve }) {
  const legacyPath = `${event.url.pathname.replace(/\/+$/, "")}/`;
  const canonicalPath = aiDevelopmentRedirects[legacyPath];
  if (canonicalPath) {
    return new Response(null, { status: 301, headers: { location: `${canonicalPath}${event.url.search}` } });
  }
  return resolve(event);
}
