#!/usr/bin/env node

import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const envPath = resolve(".env.local");
const queryArg = process.argv.slice(2).join(" ").trim();
const query = queryArg || 'newer_than:1d (Clutch OR Alignable OR Yelp OR "verification code" OR "verify your email")';

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

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing ${name} in .env.local or environment.`);
  }
  return value;
}

async function getAccessToken() {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: requireEnv("GMAIL_CLIENT_ID"),
      client_secret: requireEnv("GMAIL_CLIENT_SECRET"),
      refresh_token: requireEnv("GMAIL_REFRESH_TOKEN"),
      grant_type: "refresh_token"
    })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`OAuth token refresh failed: ${response.status} ${payload.error || response.statusText}`);
  }

  return payload.access_token;
}

async function gmailRequest(accessToken, path, params = {}) {
  const userId = process.env.GMAIL_USER_ID?.trim() || "me";
  const url = new URL(`https://gmail.googleapis.com/gmail/v1/users/${encodeURIComponent(userId)}${path}`);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, {
    headers: { authorization: `Bearer ${accessToken}` }
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Gmail request failed: ${response.status} ${payload.error?.message || response.statusText}`);
  }

  return payload;
}

function header(headers = [], name) {
  return headers.find((item) => item.name?.toLowerCase() === name.toLowerCase())?.value || "";
}

function extractCodes(text = "") {
  return [...new Set(
    text
      .match(/\b\d{4,8}\b/g)
      ?.filter((code) => !/^20\d{2}$/.test(code))
      .slice(0, 8) || []
  )];
}

loadEnvFile(envPath);

try {
  const accessToken = await getAccessToken();
  const list = await gmailRequest(accessToken, "/messages", {
    q: query,
    maxResults: "10"
  });

  const messages = list.messages || [];
  if (!messages.length) {
    console.log(`No messages found for query: ${query}`);
    process.exit(0);
  }

  const results = [];
  for (const message of messages) {
    const detail = await gmailRequest(accessToken, `/messages/${message.id}`, {
      format: "metadata",
      metadataHeaders: "From",
      metadataHeaders: "Subject",
      metadataHeaders: "Date"
    });

    const headers = detail.payload?.headers || [];
    const text = `${header(headers, "Subject")} ${detail.snippet || ""}`;
    results.push({
      date: header(headers, "Date"),
      from: header(headers, "From"),
      subject: header(headers, "Subject"),
      codes: extractCodes(text),
      snippet: detail.snippet
    });
  }

  console.log(JSON.stringify({ query, results }, null, 2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
