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
export { skillPages, skillMap, skillUrl, serviceSkillMap } from "./skills.js";
export { locationPages, locationMap, locationUrl } from "./locations.js";

export const servicePages = [...coreServicePages, ...keywordServicePages];
export const serviceMap = Object.fromEntries(servicePages.map((service) => [service.slug, service]));

export const mainPages = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["Blog", "/blog/"],
  ["Skills", "/skills/"],
  ["Locations", "/locations/"],
  ["Rate", "/rate/"],
  ["About", "/about/"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact/"]
];
