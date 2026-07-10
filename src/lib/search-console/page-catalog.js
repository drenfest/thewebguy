import {
  blogPosts,
  blogUrl,
  fixNotes,
  fixNoteUrl,
  locationPages,
  locationUrl,
  servicePages,
  serviceUrl,
  skillPages,
  skillUrl
} from '../data/content.js';
import { normalizePath } from './shared.js';

const siteOrigin = 'https://thewebguy.app';
const serviceSlugSet = new Set(servicePages.map((page) => page.slug));
const skillSlugSet = new Set(skillPages.map((page) => page.slug));

const excludedPaths = new Set([
  '/services/',
  '/blog/',
  '/fix-notes/',
  '/skills/',
  '/locations/',
  '/faq/',
  '/contact/'
]);

const thresholdsByType = {
  Service: { minWords: 260, minSections: 2, minLinks: 1 },
  Blog: { minWords: 320, minSections: 2, minLinks: 1 },
  Skill: { minWords: 220, minSections: 2, minLinks: 1 },
  Location: { minWords: 180, minSections: 1, minLinks: 1 },
  'Fix Note': { minWords: 170, minSections: 1, minLinks: 1 },
  Main: { minWords: 180, minSections: 1, minLinks: 1 }
};

export function buildIndexablePageCatalog() {
  return [
    ...servicePages.map((service) => createCatalogEntry({
      type: 'Service',
      path: serviceUrl(service.slug),
      title: service.h1 || service.title,
      meta: service.meta || service.intro,
      content: [service.eyebrow, service.intro, service.audience, service.tasks, service.sections, service.related, service.faqs],
      sectionCount: Array.isArray(service.sections) ? service.sections.length : 0,
      internalLinkCount: countInternalLinks([service.sections, service.related, service.faqs]),
      source: service
    })),
    ...blogPosts.map((post) => createCatalogEntry({
      type: 'Blog',
      path: blogUrl(post.slug),
      title: post.h1 || post.title,
      meta: post.meta || post.summary,
      content: [post.eyebrow, post.summary, post.problemType, post.category, post.tags, post.sections, post.faqs, post.links, post.contextCards],
      sectionCount: Array.isArray(post.sections) ? post.sections.length : 0,
      internalLinkCount: countInternalLinks([post.sections, post.faqs, post.links, post.contextCards]),
      source: post
    })),
    ...skillPages.map((skill) => createCatalogEntry({
      type: 'Skill',
      path: skillUrl(skill.slug),
      title: skill.h1 || skill.title,
      meta: skill.meta || skill.intro,
      content: [skill.eyebrow, skill.intro, skill.problems, skill.tasks, skill.connection, skill.contextCards, skill.faqs],
      sectionCount: Array.isArray(skill.problems) ? skill.problems.length : Array.isArray(skill.tasks) ? skill.tasks.length : 0,
      internalLinkCount: countInternalLinks([skill.connection, skill.contextCards, skill.faqs]),
      source: skill
    })),
    ...locationPages.map((location) => createCatalogEntry({
      type: 'Location',
      path: locationUrl(location.slug),
      title: `${location.city}, ${location.state} Website Support`,
      meta: location.meta,
      content: [location.context, location.tasks, location.region, location.relatedServices, location.relatedSkills],
      sectionCount: Array.isArray(location.tasks) ? location.tasks.length : 1,
      internalLinkCount: countInternalLinks([location.relatedServices, location.relatedSkills]),
      source: location
    })),
    ...fixNotes.map((note) => createCatalogEntry({
      type: 'Fix Note',
      path: fixNoteUrl(note.slug),
      title: note.title,
      meta: note.metaDescription || note.excerpt,
      content: [
        note.category,
        note.excerpt,
        note.problemSummary,
        note.whatIChecked,
        note.whatIChanged,
        note.resultSummary,
        note.whatToWatchNext,
        note.toolsUsed,
        note.relatedServices,
        resolveRelatedSupportPaths(note.relatedServices)
      ],
      sectionCount: 4,
      internalLinkCount: countInternalLinks([resolveRelatedSupportPaths(note.relatedServices)]),
      source: note
    }))
  ].map((entry) => ({
    ...entry,
    qualification: assessIndexingQualification(entry)
  }));
}

export function getIndexablePageByPath(pathname) {
  return buildIndexablePageCatalog().find((page) => page.path === normalizePath(pathname)) || null;
}

function createCatalogEntry({ type, path, title, meta, content, sectionCount, internalLinkCount, source }) {
  const body = flatten(content);
  return {
    path: normalizePath(path),
    url: `${siteOrigin}${path === '/' ? '' : normalizePath(path)}`,
    type,
    title,
    meta: meta || '',
    wordCount: countWords([title, meta, body]),
    sectionCount: Math.max(sectionCount || 0, 0),
    internalLinkCount: Math.max(internalLinkCount || 0, 0),
    contentPreview: body.slice(0, 280),
    source
  };
}

export function assessIndexingQualification(page) {
  const blockers = [];
  const strengths = [];
  const thresholds = thresholdsByType[page.type] || thresholdsByType.Service;

  if (excludedPaths.has(page.path)) {
    blockers.push('This is a hub or utility page and is not a priority indexing candidate.');
  }
  if ((page.wordCount || 0) < thresholds.minWords) {
    blockers.push(`The page only exposes about ${page.wordCount} content words; it needs more substantive copy.`);
  } else {
    strengths.push(`Substantive copy is present (${page.wordCount} words).`);
  }
  if ((page.sectionCount || 0) < thresholds.minSections) {
    blockers.push(`The page only has ${page.sectionCount} structured section${page.sectionCount === 1 ? '' : 's'} in local content data.`);
  } else {
    strengths.push(`Structured content depth is present (${page.sectionCount} sections).`);
  }
  if (!page.meta) {
    blockers.push('The page is missing a clear meta description signal in local content data.');
  } else {
    strengths.push('Meta copy exists.');
  }
  if ((page.internalLinkCount || 0) < thresholds.minLinks) {
    blockers.push('The page does not show a strong enough internal-link path in local content data.');
  } else {
    strengths.push(`Internal linking signals exist (${page.internalLinkCount} references).`);
  }

  return {
    qualifies: blockers.length === 0,
    blockers,
    strengths,
    thresholds,
    score: strengths.length - blockers.length
  };
}

function flatten(value) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.map((item) => flatten(item)).join(' ');
  if (typeof value === 'object') return Object.values(value).map((item) => flatten(item)).join(' ');
  return String(value);
}

function countWords(value) {
  return flatten(value)
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean)
    .length;
}

function countInternalLinks(value) {
  const text = flatten(value);
  const matches = text.match(/\/(?:services|blog|skills|locations|fix-notes|about|rate|faq|contact)(?:\/[a-z0-9-]+)?\//gi);
  return matches ? new Set(matches.map((match) => normalizePath(match))).size : 0;
}

function resolveRelatedSupportPaths(slugs = []) {
  return slugs
    .map((slug) => {
      if (serviceSlugSet.has(slug)) return serviceUrl(slug);
      if (skillSlugSet.has(slug)) return skillUrl(slug);
      return null;
    })
    .filter(Boolean);
}
