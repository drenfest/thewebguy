import http from "node:http";
import process from "node:process";
import { handler } from "./build/handler.js";

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

const longLivedAsset = /^\/(?:_app\/immutable\/|fonts\/|images\/|icons\/|favicon(?:-\d+x\d+)?\.(?:ico|png|svg)|apple-touch-icon\.png|site\.webmanifest)/;

function cleanEnv(name) {
  return String(process.env[name] || "").trim();
}

function contactEmailProvider() {
  const provider = cleanEnv("CONTACT_EMAIL_PROVIDER").toLowerCase();
  if (["gmail", "gmail-api", "google"].includes(provider)) return "gmail";
  if (["smtp", "mail"].includes(provider)) return "smtp";
  return "";
}

function setupLinkBase() {
  const configured = cleanEnv("PUBLIC_SITE_URL").replace(/\/+$/, "");
  if (configured) return configured;
  return `http://${host}:${port}`;
}

function logGmailOauthSetupLink() {
  if (contactEmailProvider() !== "gmail") return;
  if (cleanEnv("GMAIL_REFRESH_TOKEN")) return;

  const setupKey = cleanEnv("CONTACT_OAUTH_SETUP_KEY");
  if (!setupKey) {
    console.warn("Gmail OAuth setup is unavailable because CONTACT_OAUTH_SETUP_KEY is not set.");
    return;
  }

  const setupUrl = new URL("/api/admin/gmail-oauth/start", `${setupLinkBase()}/`);
  setupUrl.searchParams.set("key", setupKey);
  console.warn(`Gmail OAuth setup required. Open this URL to create a refresh token: ${setupUrl.href}`);
}

function applyAssetCacheHeaders(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") return;

  let pathname = "/";
  try {
    pathname = new URL(req.url || "/", "http://localhost").pathname;
  } catch {
    return;
  }

  if (longLivedAsset.test(pathname)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
}

const server = http.createServer((req, res) => {
  applyAssetCacheHeaders(req, res);

  handler(req, res, (error) => {
    if (error) {
      res.statusCode = error.status || 500;
      res.end(error.message || "Internal Server Error");
      return;
    }

    res.statusCode = 404;
    res.end("Not found");
  });
});

server.listen({ host, port }, () => {
  console.log(`Listening on http://${host}:${port}`);
  logGmailOauthSetupLink();
});

function shutdown() {
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
