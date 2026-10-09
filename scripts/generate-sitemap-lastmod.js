import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { aiDevelopmentPages, aiDevelopmentUrl } from "../src/lib/data/ai-development.js";

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
  sitesForSale,
  siteForSaleUrl,
  skillPages,
  skillUrl
} = contentModule;

const registryPath = resolve(root, "src/lib/data/content-dates.json");
const generatedPath = resolve(root, "src/lib/data/sitemap-lastmod.json");
const today = new Date().toISOString().slice(0, 10);
const existingRegistry = existsSync(registryPath)
  ? JSON.parse(readFileSync(registryPath, "utf8"))
  : {};
const registry = {};

function gitDates(paths = [], search = "") {
  try {
    const args = ["log", "--format=%ad", "--date=short", "--reverse"];
    if (search) args.push("-S", search);
    args.push("--", ...paths.filter(Boolean));
    const dates = execFileSync("git", args, { cwd: root, encoding: "utf8" })
      .split(/\r?\n/)
      .map((value) => value.trim())
      .filter(Boolean);
    return dates.length ? { published: dates[0], updated: dates.at(-1) } : null;
  } catch {
    return null;
  }
}

function add(url, { paths = [], search = "", published = "", updated = "" } = {}) {
  const existing = existingRegistry[url];
  if (existing?.published && existing?.updated) {
    registry[url] = existing;
    return;
  }

  const history = gitDates(paths, search);
  const publishedDate = published || existing?.published || history?.published || today;
  registry[url] = {
    published: publishedDate,
    updated: updated || existing?.updated || history?.updated || publishedDate
  };
}

const coreServicesDataPath = "src/lib/data/services.js";
const keywordServicesDataPath = "src/lib/data/keyword-services.js";
const blogDataPath = "src/lib/data/blog.js";
const fixNotesDataPath = "src/lib/data/fix-notes.js";
const skillsDataPath = "src/lib/data/skills.js";
const locationsDataPath = "src/lib/data/locations.js";
const sitesForSaleDataPath = "src/lib/data/sites-for-sale.js";
const coreServiceSlugs = new Set(coreServicePages.map((service) => service.slug));
const keywordServiceSlugs = new Set(keywordServicePages.map((service) => service.slug));

add("/", { paths: ["src/routes/+page.svelte"] });
add("/services/", { paths: ["src/routes/services/+page.svelte"] });
add("/ai-development-oversight/", { paths: ["src/routes/ai-development-oversight/+page.svelte"] });
add("/blog/", { paths: ["src/routes/blog/+page.svelte"] });
add("/fix-notes/", { paths: ["src/routes/fix-notes/+page.svelte"] });
add("/sites-for-sale/", { paths: ["src/routes/sites-for-sale/+page.svelte"] });
add("/skills/", { paths: ["src/routes/skills/+page.svelte"] });
add("/locations/", { paths: ["src/routes/locations/+page.svelte"] });
for (const route of ["about", "rate", "contact", "faq", "privacy", "terms"]) {
  add(`/${route}/`, { paths: [`src/routes/${route}/+page.svelte`] });
}

for (const page of aiDevelopmentPages) {
  add(aiDevelopmentUrl(page.slug), { paths: ["src/lib/data/ai-development.js"], search: page.slug });
}

for (const service of servicePages) {
  const dataPath = coreServiceSlugs.has(service.slug)
    ? coreServicesDataPath
    : keywordServiceSlugs.has(service.slug)
      ? keywordServicesDataPath
      : coreServicesDataPath;
  add(serviceUrl(service.slug), { paths: [dataPath], search: service.slug });
}

for (const post of blogPosts) {
  add(blogUrl(post.slug), { paths: [blogDataPath], search: post.slug });
}

for (const category of blogCategories) {
  add(blogCategoryUrl(category.slug), { paths: [blogDataPath], search: category.slug });
}

for (const tag of blogTags) {
  add(blogTagUrl(tag.slug), { paths: [blogDataPath], search: tag.slug });
}

for (const note of fixNotes) {
  add(fixNoteUrl(note.slug), {
    paths: [fixNotesDataPath],
    search: note.slug,
    published: note.date,
    updated: note.lastUpdated || note.date
  });
}

for (const category of fixNoteCategories) {
  add(fixNoteCategoryUrl(category.slug), { paths: [fixNotesDataPath], search: category.slug });
}

for (const site of sitesForSale) {
  add(siteForSaleUrl(site.slug), { paths: [sitesForSaleDataPath], search: site.slug });
}

for (const skill of skillPages) {
  add(skillUrl(skill.slug), { paths: [skillsDataPath], search: skill.slug });
}

for (const location of locationPages) {
  add(locationUrl(location.slug), { paths: [locationsDataPath], search: location.slug });
}

const lastmod = Object.fromEntries(
  Object.entries(registry).map(([url, dates]) => [url, dates.updated])
);

mkdirSync(dirname(registryPath), { recursive: true });
writeFileSync(registryPath, `${JSON.stringify(registry, null, 2)}\n`);
writeFileSync(generatedPath, `${JSON.stringify(lastmod, null, 2)}\n`);

console.log(`Stored publication and update dates for ${Object.keys(registry).length} URLs.`);
