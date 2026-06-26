#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const GMAIL_SEND_SCOPE = "https://www.googleapis.com/auth/gmail.send";

function clean(value, limit = 4000) {
  return String(value || "").trim().slice(0, limit);
}

function loadEnvFile(path) {
  if (!existsSync(path)) return;

  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match) continue;

    const [, key, rawValue] = match;
    if (process.env[key]) continue;

    let value = rawValue.trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function extractEmail(value) {
  const text = clean(value, 500);
  const bracketed = text.match(/<([^<>@\s]+@[^<>\s]+)>/);
  if (bracketed) return bracketed[1];

  const plain = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return plain ? plain[0] : "";
}

function envValue(name) {
  return clean(process.env[name], 2000);
}

function missingEnv(names) {
  return names.filter((name) => !envValue(name));
}

function preferredProvider() {
  const provider = envValue("CONTACT_EMAIL_PROVIDER").toLowerCase();
  if (["gmail", "gmail-api", "google"].includes(provider)) return "gmail";
  if (["smtp", "mail"].includes(provider)) return "smtp";
  return "";
}

async function verifyGmailApi() {
  const requiredBeforeRefreshToken = [
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
    "GMAIL_CLIENT_ID",
    "GMAIL_CLIENT_SECRET"
  ];
  const missing = missingEnv(requiredBeforeRefreshToken);

  if (missing.length) {
    throw new Error(`Missing Gmail API contact email env vars: ${missing.join(", ")}`);
  }

  if (!extractEmail(envValue("CONTACT_TO_EMAIL"))) {
    throw new Error("CONTACT_TO_EMAIL must contain a valid email address.");
  }

  if (!extractEmail(envValue("CONTACT_FROM_EMAIL"))) {
    throw new Error("CONTACT_FROM_EMAIL must contain a valid sender email address.");
  }

  if (!envValue("GMAIL_REFRESH_TOKEN")) {
    if (!envValue("CONTACT_OAUTH_SETUP_KEY")) {
      throw new Error("Missing Gmail API contact email env vars: GMAIL_REFRESH_TOKEN. Set CONTACT_OAUTH_SETUP_KEY if you need to deploy the OAuth setup route first.");
    }

    const setupUrl = new URL("/api/admin/gmail-oauth/start", `${envValue("PUBLIC_SITE_URL") || "https://thewebguy.app"}/`);
    setupUrl.searchParams.set("key", envValue("CONTACT_OAUTH_SETUP_KEY"));
    console.warn("GMAIL_REFRESH_TOKEN is missing. Deploy will continue because CONTACT_OAUTH_SETUP_KEY is set.");
    console.warn(`Open this setup URL after deploy to create the Gmail refresh token: ${setupUrl.href}`);
    if (!envValue("RENDER_API_KEY")) {
      console.warn("RENDER_API_KEY is not set, so the setup callback will show a copyable token instead of updating Render automatically.");
    }
    return;
  }

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: envValue("GMAIL_CLIENT_ID"),
      client_secret: envValue("GMAIL_CLIENT_SECRET"),
      refresh_token: envValue("GMAIL_REFRESH_TOKEN"),
      grant_type: "refresh_token"
    })
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok || !payload.access_token) {
    throw new Error(`Gmail OAuth token refresh failed (${response.status}): ${payload.error_description || payload.error || response.statusText}`);
  }

  if (payload.scope && !payload.scope.split(/\s+/).includes(GMAIL_SEND_SCOPE)) {
    throw new Error(`Gmail OAuth token is missing required scope: ${GMAIL_SEND_SCOPE}`);
  }

  console.log("Contact email Gmail API configuration verified.");
}

function verifySmtp() {
  const required = [
    "CONTACT_TO_EMAIL",
    "CONTACT_FROM_EMAIL",
    "SMTP_HOST",
    "SMTP_USER",
    "SMTP_PASSWORD"
  ];
  const missing = missingEnv(required);

  if (missing.length) {
    throw new Error(`Missing SMTP contact email env vars: ${missing.join(", ")}`);
  }

  if (!extractEmail(envValue("CONTACT_TO_EMAIL"))) {
    throw new Error("CONTACT_TO_EMAIL must contain a valid email address.");
  }

  if (!extractEmail(envValue("CONTACT_FROM_EMAIL"))) {
    throw new Error("CONTACT_FROM_EMAIL must contain a valid sender email address.");
  }

  const port = Number(envValue("SMTP_PORT") || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid TCP port.");
  }

  console.log("Contact email SMTP configuration is present.");
}

loadEnvFile(resolve(".env.local"));
loadEnvFile(resolve(".env"));

try {
  const provider = preferredProvider();

  if (provider === "gmail") {
    await verifyGmailApi();
  } else if (provider === "smtp") {
    verifySmtp();
  } else {
    throw new Error("CONTACT_EMAIL_PROVIDER must be set to gmail or smtp.");
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
