// Run against a local dev or preview server: node scripts/verify-quote-routes.mjs http://127.0.0.1:4194
import assert from "node:assert/strict";
import { aiDevelopmentPages, aiDevelopmentUrl, aiDevelopmentRedirects } from "../src/lib/data/ai-development.js";

const origin = process.argv[2] || "http://127.0.0.1:4194";
assert(["localhost", "127.0.0.1", "[::1]"].includes(new URL(origin).hostname), "Use a local verification server");
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const aiPaths = ["/ai-development-oversight/", ...aiDevelopmentPages.map(page => aiDevelopmentUrl(page.slug))];
assert.equal(new Set(paths).size, paths.length, "Duplicate sitemap URLs");
for (const path of aiPaths) assert(paths.includes(path), `Missing sitemap URL: ${path}`);
const failures = [];
const htmlByPath = new Map();
const pending = [...paths];
async function checkPage(path) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path}: HTTP status`);
  const html = await response.text();
  htmlByPath.set(path, html);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${path}: one H1`);
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: title`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${path}: description`);
  assert(html.includes(`rel="canonical" href="https://thewebguy.app${path}"`), `${path}: canonical`);
  assert(!/\$(?:90|55)\s*\/\s*hr|"price"\s*:\s*"90"/.test(html), `${path}: stale service pricing`);
  const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert(graphs.length, `${path}: valid JSON-LD`);
  if (aiPaths.includes(path)) {
    const nodes = graphs.flatMap(graph => graph["@graph"] || [graph]);
    assert(nodes.some(node => node["@type"] === "Service"), `${path}: service schema`);
    assert(nodes.some(node => node["@type"] === "BreadcrumbList"), `${path}: breadcrumbs`);
    assert(nodes.some(node => node["@type"] === "FAQPage"), `${path}: FAQ schema`);
    assert(!nodes.some(node => node.aggregateRating), `${path}: no invented ratings`);
    for (const aiPath of aiPaths) assert(html.includes(`href="${aiPath}"`), `${path}: navigation to ${aiPath}`);
    assert(html.includes("source_path="), `${path}: contextual quote links`);
  }
}
await Promise.all(Array.from({length: 4}, async () => {
  while (pending.length) {
    const path = pending.shift();
    try { await checkPage(path); } catch (error) { failures.push(error.message); }
  }
}));
// Follow internal links from the new section and verify in-page anchors.
const linkTargets = new Set();
for (const path of aiPaths) {
  const html = htmlByPath.get(path) || "";
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href.replaceAll("&amp;", "&"), `${origin}${path}`);
    if (url.hash && url.pathname === path) assert(html.includes(`id="${url.hash.slice(1)}"`), `${path}: missing ${url.hash}`);
    linkTargets.add(url.pathname);
  }
}
for (const path of linkTargets) {
  if (htmlByPath.has(path)) continue;
  const response = await fetch(`${origin}${path}`);
  if (!response.ok) failures.push(`Broken internal link: ${path} (${response.status})`);
}
assert.equal((await fetch(`${origin}/ai-development-oversight/not-a-service/`)).status, 404, "Unknown service must 404");
for (const [oldPath, newPath] of Object.entries(aiDevelopmentRedirects)) {
  assert(!paths.includes(oldPath), `Retired URL in sitemap: ${oldPath}`);
  for (const requestPath of [oldPath, oldPath.slice(0, -1)]) {
    const response = await fetch(`${origin}${requestPath}?utm_source=redirect_test`, {redirect: "manual"});
    assert.equal(response.status, 301, `${requestPath}: permanent redirect`);
    assert.equal(response.headers.get("location"), `${newPath}?utm_source=redirect_test`, `${requestPath}: direct canonical and query preserved`);
  }
}
assert.equal((await fetch(`${origin}/ai-development/not-a-service/`)).status, 404, "Unknown retired service must 404");
for (const route of ["/llms.txt", "/llms-full.txt"]) {
  const body = await (await fetch(`${origin}${route}`)).text();
  assert(body.includes("/ai-development-oversight/ai-code-review/"), `${route}: new section discovery`);
  assert(!/\$(?:90|55)\/hr/.test(body), `${route}: no old rate`);
}
assert.deepEqual(failures, [], "Route verification failed");
console.log(`PASS: ${paths.length} sitemap pages; ${aiPaths.length} AI routes; ${linkTargets.size} internal targets; metadata, JSON-LD, pricing, anchors, discovery files, and unknown-route 404.`);
