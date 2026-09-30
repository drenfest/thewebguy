// Exercise the real contact endpoint with synthetic environment and mocked Gmail delivery.
// No credentials are loaded and no network requests or emails are sent.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { contactHrefWithContext } from "../src/lib/contact-context.js";

const fakeEnv = {
  CONTACT_EMAIL_PROVIDER: "gmail", CONTACT_TO_EMAIL: "recipient@example.test",
  CONTACT_FROM_EMAIL: "sender@example.test", GMAIL_CLIENT_ID: "test-id",
  GMAIL_CLIENT_SECRET: "test-secret", GMAIL_REFRESH_TOKEN: "test-token", GMAIL_USER_ID: "me"
};
let source = readFileSync(new URL("../src/routes/api/contact/+server.js", import.meta.url), "utf8")
  .replace('from "@sveltejs/kit"', `from ${JSON.stringify(import.meta.resolve("@sveltejs/kit"))}`)
  .replace('import { env } from "$env/dynamic/private";', `const env = ${JSON.stringify(fakeEnv)};`);
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
const originalFetch = globalThis.fetch;
let deliveries = [];
let failDelivery = false;
globalThis.fetch = async (url, options) => {
  if (String(url) === "https://oauth2.googleapis.com/token") return Response.json({access_token: "test-access", expires_in: 3600});
  assert.match(String(url), /^https:\/\/gmail.googleapis.com\/gmail\/v1\/users\/me\/messages\/send$/);
  if (failDelivery) return Response.json({error: "Simulated delivery failure"}, {status: 500});
  deliveries.push(JSON.parse(options.body));
  return Response.json({id: "synthetic-message"});
};
const payload = {
  name: "Local QA", email: "qa@example.test", details: "Review the changed form and routing behavior.",
  service: "AI Code Review", sourcePagePath: "/ai-development-oversight/ai-code-review/", sourcePageType: "ai_service_detail",
  sourcePageTitle: "AI Code Review", sourceCta: "Get Your AI Build Reviewed", formLoadedAt: String(Date.now() - 5000)
};
function submit(body, address) {
  return POST({request: new Request("http://localhost/api/contact", {method: "POST", body: JSON.stringify(body), headers: {"content-type": "application/json"}}), getClientAddress: () => address});
}
try {
  const href = contactHrefWithContext("/contact/#request-form", {sourcePath: payload.sourcePagePath, sourceTitle: payload.sourcePageTitle, sourceCta: payload.sourceCta});
  const url = new URL(href, "https://thewebguy.app");
  assert.equal(url.searchParams.get("source_type"), "ai_service_detail");
  assert.equal(url.hash, "#request-form");
  const result = await submit(payload, "test-success");
  assert.equal(result.status, 200);
  const delivered = await result.json();
  assert.equal(delivered.mode, "gmail-api-email");
  assert.equal(delivered.request.service, "AI Code Review");
  assert.equal(delivered.request.sourcePagePath, payload.sourcePagePath);
  assert.equal(deliveries.length, 1);
  const mime = Buffer.from(deliveries[0].raw, "base64url").toString();
  assert(mime.includes("qa@example.test"), "Reply-to included");
  assert(mime.includes("AI Code Review") || mime.includes(Buffer.from("AI Code Review").toString("base64")), "Service context included in email");
  assert.equal((await submit(payload, "test-success")).status, 409, "Duplicate not delivered");
  const filtered = await (await submit({...payload, websiteCompany: "bot"}, "test-bot")).json();
  assert.equal(filtered.mode, "filtered");
  assert.equal(deliveries.length, 1, "Honeypot does not send email");
  assert.equal((await submit({...payload, formLoadedAt: String(Date.now())}, "test-fast")).status, 400);
  assert.equal((await submit({...payload, email: ""}, "test-invalid")).status, 400);
  failDelivery = true;
  const savedError = console.error;
  console.error = () => {};
  try { assert.equal((await submit(payload, "test-retry")).status, 502); } finally { console.error = savedError; }
  failDelivery = false;
  assert.equal((await submit(payload, "test-retry")).status, 200, "Failed delivery can be retried");
  assert.equal(deliveries.length, 2);
  console.log("PASS: AI quote context, mocked email delivery, duplicate protection, honeypot, validation, error, and retry. No real email sent.");
} finally {
  globalThis.fetch = originalFetch;
}

// Verify campaign attribution survives the AI landing page -> quote journey.
const originalWindow = globalThis.window;
const originalDocument = globalThis.document;
const storage = new Map();
globalThis.window = {
  location: new URL("https://thewebguy.app/ai-development-oversight/?utm_source=linkedin&utm_medium=social&utm_campaign=ai_oversight_launch"),
  sessionStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) }
};
globalThis.document = { title: "AI Development Oversight", referrer: "https://www.linkedin.com/" };
try {
  const analyticsSource = readFileSync(new URL("../src/lib/analytics.js", import.meta.url), "utf8")
    .replace('import { browser } from "$app/environment";', "const browser = true;")
    .replace('import { env } from "$env/dynamic/public";', 'const env = { PUBLIC_GA_MEASUREMENT_ID: "G-LOCALTEST" };');
  const analytics = await import(`data:text/javascript;base64,${Buffer.from(analyticsSource).toString("base64")}`);
  analytics.trackPageView(window.location.href, document.title);
  window.location = new URL("https://thewebguy.app/contact/");
  document.title = "Get a Free Quote";
  analytics.trackPageView(window.location.href, document.title);
  analytics.trackEvent("generate_lead", {selected_service: "AI Code Review", source_page_path: "/ai-development-oversight/ai-code-review/"});
  const events = window.dataLayer.map(args => [...args]);
  const pages = events.filter(args => args[1] === "page_view");
  const lead = events.find(args => args[1] === "generate_lead")[2];
  assert.equal(pages.length, 2);
  assert.equal(pages[0][2].page_type, "ai_service_hub");
  assert.equal(pages[1][2].page_type, "contact");
  assert.equal(lead.session_utm_campaign, "ai_oversight_launch");
  assert.equal(lead.landing_page_type, "ai_service_hub");
  assert.equal(lead.source_page_path, "/ai-development-oversight/ai-code-review/");
  assert.equal(lead.selected_service, "AI Code Review");
  console.log("PASS: AI page classification, two route page views, campaign attribution, and lead event context. No analytics network requests sent.");
} finally {
  globalThis.window = originalWindow;
  globalThis.document = originalDocument;
}
