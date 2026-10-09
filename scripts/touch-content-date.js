import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const registryPath = resolve("src/lib/data/content-dates.json");
const [url, suppliedDate] = process.argv.slice(2);
const date = suppliedDate || new Date().toISOString().slice(0, 10);

if (!url || !/^\/.+\/$/.test(url)) {
  throw new Error("Usage: npm run content:touch -- /path/ [YYYY-MM-DD]");
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  throw new Error("Date must use YYYY-MM-DD format.");
}
if (!existsSync(registryPath)) {
  throw new Error("Run npm run generate:sitemap-lastmod before touching a content date.");
}

const registry = JSON.parse(readFileSync(registryPath, "utf8"));
const existing = registry[url];
if (!existing) {
  throw new Error(`Unknown content URL: ${url}`);
}

registry[url] = { ...existing, updated: date };
writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
console.log(`Updated ${url} to ${date}.`);
