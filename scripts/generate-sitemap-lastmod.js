import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const contentModule = await import(pathToFileURL(resolve(root, "src/lib/data/content.js")).href);
const {
  coreServicePages,
  blogCategories,
  blogCategoryUrl,
  blogPosts,
  blogTags,
  blogTagUrl,
  blogUrl,
  fixNoteCategories,
  fixNoteCategoryUrl,
  fixNotes,
  fixNoteUrl,
  keywordServicePages,
  locationPages,
  locationUrl,
  servicePages,
  serviceUrl,
  skillPages,
  skillUrl
} = contentModule;

const generatedPath = resolve(root, "src/lib/data/sitemap-lastmod.json");
const coreServicesDataPath = "src/lib/data/services.js";
const keywordServicesDataPath = "src/lib/data/keyword-services.js";
const blogDataPath = "src/lib/data/blog.js";
const fixNotesDataPath = "src/lib/data/fix-notes.js";
const skillsDataPath = "src/lib/data/skills.js";
const locationsDataPath = "src/lib/data/locations.js";
const coreServiceSlugs = new Set(coreServicePages.map((service) => service.slug));
const keywordServiceSlugs = new Set(keywordServicePages.map((service) => service.slug));

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

add(lastmod, "/", ["src/routes/+page.svelte", coreServicesDataPath]);
add(lastmod, "/services/", ["src/routes/services/+page.svelte", coreServicesDataPath, keywordServicesDataPath]);
add(lastmod, "/blog/", ["src/routes/blog/+page.svelte", blogDataPath]);
add(lastmod, "/fix-notes/", ["src/routes/fix-notes/+page.svelte", fixNotesDataPath]);
add(lastmod, "/skills/", ["src/routes/skills/+page.svelte", skillsDataPath]);
add(lastmod, "/locations/", ["src/routes/locations/+page.svelte", locationsDataPath]);
add(lastmod, "/about/", ["src/routes/about/+page.svelte"]);
add(lastmod, "/rate/", ["src/routes/rate/+page.svelte"]);
add(lastmod, "/contact/", ["src/routes/contact/+page.svelte"]);
add(lastmod, "/faq/", ["src/routes/faq/+page.svelte"]);
add(lastmod, "/privacy/", ["src/routes/privacy/+page.svelte"]);
add(lastmod, "/terms/", ["src/routes/terms/+page.svelte"]);

for (const service of servicePages) {
  const serviceDataPath = coreServiceSlugs.has(service.slug)
    ? coreServicesDataPath
    : keywordServiceSlugs.has(service.slug)
      ? keywordServicesDataPath
      : null;

  add(lastmod, serviceUrl(service.slug), [
    "src/routes/services/[slug]/+page.svelte",
    "src/routes/services/[slug]/+page.js",
    serviceDataPath
  ]);
}

for (const post of blogPosts) {
  add(lastmod, blogUrl(post.slug), [
    "src/routes/blog/[slug]/+page.svelte",
    "src/routes/blog/[slug]/+page.js",
    blogDataPath
  ]);
}

for (const category of blogCategories) {
  add(lastmod, blogCategoryUrl(category.slug), [
    "src/routes/blog/category/[slug]/+page.svelte",
    "src/routes/blog/category/[slug]/+page.server.js",
    blogDataPath
  ]);
}

for (const tag of blogTags) {
  add(lastmod, blogTagUrl(tag.slug), [
    "src/routes/blog/tag/[slug]/+page.svelte",
    "src/routes/blog/tag/[slug]/+page.server.js",
    blogDataPath
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
    skillsDataPath
  ]);
}

for (const location of locationPages) {
  add(lastmod, locationUrl(location.slug), [
    "src/routes/locations/[slug]/+page.svelte",
    "src/routes/locations/[slug]/+page.js",
    locationsDataPath
  ]);
}

mkdirSync(dirname(generatedPath), { recursive: true });
writeFileSync(generatedPath, `${JSON.stringify(lastmod, null, 2)}\n`);

console.log(`Generated sitemap lastmod data for ${Object.keys(lastmod).length} URLs.`);
