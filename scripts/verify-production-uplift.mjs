import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { classifyIndexingResult, describeDiscoveryAssociations } from "../src/lib/server/search-console/indexing-state.js";
import { targetedServicePatches } from "../src/lib/data/production-uplift.js";
import { fixNoteUplifts } from "../src/lib/data/fix-note-uplift.js";

const origin = process.argv[2] || "http://127.0.0.1:4198";
assert(["localhost", "127.0.0.1", "[::1]"].includes(new URL(origin).hostname), "Use a local verification server");

const primary = {
  "/services/contact-form-not-working-wordpress/": ["WordPress Contact Form Repair | The Web Guy", "#form-fix-examples", ["/services/website-integration-help/", "/services/wordpress-troubleshooting/", "/services/conversion-tracking-troubleshooting/", "/rate/"], ["fixed-contact-form-email-delivery-authenticated-sending", "repaired-recaptcha-loading-without-disabling-page-optimization"]],
  "/services/website-integration-help/": ["Website Integration Troubleshooting | The Web Guy", "#integration-repair-examples", ["/services/api-integrations/", "/services/conversion-tracking-troubleshooting/"], ["verified-form-to-crm-api-handoff-dropping-fields", "added-call-tracking-tag-management-site-verification-static-site"]],
  "/services/api-integrations/": ["API Integration Development | The Web Guy", "#integration-build-examples", ["/services/website-integration-help/"], ["replaced-oversized-booking-embed-validated-lead-form", "built-admin-only-wordpress-crm-estimate-intake"]],
  "/services/wordpress-troubleshooting/": ["WordPress Troubleshooting Service | The Web Guy", "#wordpress-repair-examples", ["/services/contact-form-not-working-wordpress/", "/services/wordpress-plugin-conflict-help/", "/services/wordpress-support/"], ["repaired-recaptcha-loading-without-disabling-page-optimization", "allowed-form-embed-wordpress-security-without-broad-bypass"]]
};

for (const [path, [title, anchor, links, notes]] of Object.entries(primary)) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path}: HTTP 200`);
  const html = await response.text();
  assert(html.includes(`<title>${title}</title>`), `${path}: intended title`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one H1`);
  assert(html.includes(`rel="canonical" href="https://thewebguy.app${path}"`), `${path}: self canonical`);
  assert(html.includes(`id="${anchor.slice(1)}"`), `${path}: proof anchor`);
  assert(!html.includes("/images/heroes/service-"), `${path}: no service hero image request`);
  for (const href of links) assert(html.includes(`href="${href}"`), `${path}: contextual link ${href}`);
  for (const slug of notes) assert(html.includes(`/fix-notes/${slug}/`), `${path}: curated proof ${slug}`);
  assert(!/\b(?:S0[1-9]|N0[1-9]|PUBLISH|IMPLEMENTATION)\b/.test(html), `${path}: no authoring labels`);
}

for (const [slug, patch] of Object.entries(targetedServicePatches)) {
  const html = await (await fetch(`${origin}/services/${slug}/`)).text();
  assert(html.includes(patch.faq[0]), `${slug}: targeted FAQ`);
  for (const part of patch.paragraph) {
    if (typeof part === "object") assert(html.includes(`href="${part.href}"`), `${slug}: targeted contextual link`);
  }
}

for (const [slug, uplift] of Object.entries(fixNoteUplifts)) {
  const html = await (await fetch(`${origin}/fix-notes/${slug}/`)).text();
  assert(html.includes(uplift.intro), `${slug}: concise introduction`);
  assert(html.includes("How this relates to your project"), `${slug}: customer bridge heading`);
  for (const part of uplift.bridge) {
    if (typeof part === "object") assert(html.includes(`href="${part.href}"`), `${slug}: service bridge link`);
  }
}

const contact = await (await fetch(`${origin}/contact/`)).text();
assert(contact.includes("Your quote is free. Engineering review, diagnostics, and implementation are paid work"), "Contact paid-work boundary");
assert(contact.includes("Request My Free Quote"), "Contact submit label");
const contactSource = await readFile(new URL("../src/routes/contact/+page.svelte", import.meta.url), "utf8");
assert(contactSource.includes("Your request could not be submitted. Your details are still here"), "Contact recoverable error copy");

const neutral = classifyIndexingResult({ verdict: "NEUTRAL", coverageState: "Crawled - currently not indexed", pageFetchState: "SUCCESSFUL" });
assert.equal(neutral.key, "crawled_not_indexed");
assert.match(neutral.explanation, /reason is not established/i);
const associations = describeDiscoveryAssociations({ referringUrls: [], sitemap: [] });
assert.equal(associations.label, "Associations not reported");
assert.match(associations.explanation, /Check live discovery paths/i);

console.log(`PASS: ${Object.keys(primary).length} primary routes, ${Object.keys(targetedServicePatches).length} targeted services, ${Object.keys(fixNoteUplifts).length} Fix Notes, contact boundary, and dashboard classification wording.`);
