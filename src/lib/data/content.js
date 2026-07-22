import { coreServicePages } from "./services.js";
import { keywordServicePages } from "./keyword-services.js";

export { coreServicePages, serviceUrl } from "./services.js";
export { keywordLandingSpecs, buildKeywordLandingPage, keywordServicePages } from "./keyword-services.js";
export { faqs } from "./faqs.js";
export {
  practicalExamples,
  blogCategoryDefinitions,
  blogCategories,
  blogCategoryMap,
  blogCategoryUrl,
  blogPosts,
  blogMap,
  blogTagDefinitions,
  blogTags,
  blogTagMap,
  blogTagUrl,
  blogUrl,
  somethingBrokePosts
} from "./blog.js";
export {
  fixNoteCategories,
  fixNoteCategoryDefinitions,
  fixNoteCategoryMap,
  fixNoteCategorySlug,
  fixNoteCategoryUrl,
  fixNoteDisplayDate,
  fixNoteLastUpdatedDate,
  fixNotes,
  fixNotesDescription,
  fixNoteMap,
  fixNoteUrl,
  getFixNotes,
  getRelatedFixNotes,
  sortedFixNotes
} from "./fix-notes.js";
export { skillPages, skillMap, skillUrl, serviceSkillMap } from "./skills.js";
export { locationPages, locationMap, locationUrl } from "./locations.js";
export { sitesForSale, siteForSaleMap, siteForSaleUrl } from "./sites-for-sale.js";

export const servicePages = [...coreServicePages, ...keywordServicePages];
export const serviceMap = Object.fromEntries(servicePages.map((service) => [service.slug, service]));

export const mainPages = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["Sites For Sale", "/sites-for-sale/"],
  ["Blog", "/blog/"],
  ["Fix Notes", "/fix-notes/"],
  ["Skills", "/skills/"],
  ["Locations", "/locations/"],
  ["Rate", "/rate/"],
  ["About", "/about/"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact/"]
];
