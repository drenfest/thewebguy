import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentModule = await import(pathToFileURL(resolve(root, "src/lib/data/content.js")).href);
const {
  blogPosts,
  blogUrl,
  fixNoteCategories,
  fixNoteCategoryUrl,
  fixNotes,
  fixNoteUrl,
  locationPages,
  locationUrl,
  servicePages,
  serviceUrl,
  skillPages,
  skillUrl
} = contentModule;

const generatedPath = resolve(root, "src/lib/data/sitemap-lastmod.json");
const contentDataPath = "src/lib/data/content.js";
const fixNotesDataPath = "src/lib/data/fix-notes.js";

function fileDate(path) {
  const fullPath = resolve(root, path);
  if (!existsSync(fullPath)) return 0;
  return statSync(fullPath).mtimeMs;
}

function latestDate(paths = []) {
  const timestamp = Math.max(...paths.map(fileDate).filter(Boolean));
  return timestamp ? new Date(timestamp).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);
}

function add(map, url, paths) {
  map[url] = latestDate(paths);
}

const lastmod = {};

add(lastmod, "/", ["src/routes/+page.svelte", contentDataPath]);
add(lastmod, "/services/", ["src/routes/services/+page.svelte", contentDataPath]);
add(lastmod, "/blog/", ["src/routes/blog/+page.svelte", contentDataPath]);
add(lastmod, "/fix-notes/", ["src/routes/fix-notes/+page.svelte", contentDataPath, fixNotesDataPath]);
add(lastmod, "/skills/", ["src/routes/skills/+page.svelte", contentDataPath]);
add(lastmod, "/locations/", ["src/routes/locations/+page.svelte", contentDataPath]);
add(lastmod, "/about/", ["src/routes/about/+page.svelte"]);
add(lastmod, "/rate/", ["src/routes/rate/+page.svelte", contentDataPath]);
add(lastmod, "/contact/", ["src/routes/contact/+page.svelte"]);
add(lastmod, "/faq/", ["src/routes/faq/+page.svelte", contentDataPath]);
add(lastmod, "/privacy/", ["src/routes/privacy/+page.svelte"]);
add(lastmod, "/terms/", ["src/routes/terms/+page.svelte"]);

for (const service of servicePages) {
  add(lastmod, serviceUrl(service.slug), [
    "src/routes/services/[slug]/+page.svelte",
    "src/routes/services/[slug]/+page.js",
    contentDataPath
  ]);
}

for (const post of blogPosts) {
  add(lastmod, blogUrl(post.slug), [
    "src/routes/blog/[slug]/+page.svelte",
    "src/routes/blog/[slug]/+page.js",
    contentDataPath
  ]);
}

for (const note of fixNotes) {
  add(lastmod, fixNoteUrl(note.slug), [
    "src/routes/fix-notes/[slug]/+page.svelte",
    "src/routes/fix-notes/[slug]/+page.js",
    fixNotesDataPath
  ]);
}

for (const category of fixNoteCategories) {
  add(lastmod, fixNoteCategoryUrl(category.slug), [
    "src/routes/fix-notes/category/[slug]/+page.svelte",
    "src/routes/fix-notes/category/[slug]/+page.js",
    fixNotesDataPath
  ]);
}

for (const skill of skillPages) {
  add(lastmod, skillUrl(skill.slug), [
    "src/routes/skills/[slug]/+page.svelte",
    "src/routes/skills/[slug]/+page.js",
    contentDataPath
  ]);
}

for (const location of locationPages) {
  add(lastmod, locationUrl(location.slug), [
    "src/routes/locations/[slug]/+page.svelte",
    "src/routes/locations/[slug]/+page.js",
    contentDataPath
  ]);
}

mkdirSync(dirname(generatedPath), { recursive: true });
writeFileSync(generatedPath, `${JSON.stringify(lastmod, null, 2)}\n`);

console.log(`Generated sitemap lastmod data for ${Object.keys(lastmod).length} URLs.`);
