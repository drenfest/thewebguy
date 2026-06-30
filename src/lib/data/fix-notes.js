export const fixNotesDescription = "Short work notes from related cleanup, debugging, implementation, and support tasks.";

export const fixNoteCategoryDefinitions = [
  {
    slug: "website-fixes",
    label: "Website Fixes",
    description: "Broken layouts, CSS issues, JavaScript behavior, forms, embeds, and visible site problems."
  },
  {
    slug: "page-speed",
    label: "Page Speed",
    description: "Practical cleanup for heavy assets, images, scripts, caching, and mobile performance friction."
  },
  {
    slug: "technical-seo",
    label: "Technical SEO",
    description: "Crawl paths, metadata, headings, schema, indexation checks, and internal linking implementation."
  },
  {
    slug: "wordpress-support",
    label: "WordPress Support",
    description: "WordPress themes, plugins, page builders, form behavior, users, and maintenance cleanup."
  },
  {
    slug: "ai-website-cleanup",
    label: "AI Website Cleanup",
    description: "Generated pages cleaned up for structure, mobile behavior, content hierarchy, and maintainability."
  },
  {
    slug: "tracking-analytics",
    label: "Tracking & Analytics",
    description: "GA4, GTM, form events, hidden fields, lead paths, pixels, and measurement cleanup."
  },
  {
    slug: "api-integrations",
    label: "API Integrations",
    description: "Forms, CRMs, webhook payloads, API handoffs, field mapping, and integration verification."
  },
  {
    slug: "ecommerce-support",
    label: "Ecommerce Support",
    description: "Shopify, WooCommerce, product templates, checkout-adjacent issues, and storefront cleanup."
  },
  {
    slug: "landing-pages",
    label: "Landing Pages",
    description: "Service pages, local pages, campaign pages, conversion paths, and content hierarchy cleanup."
  },
  {
    slug: "production-debugging",
    label: "Production Debugging",
    description: "Live-site behavior, cache confusion, browser checks, deployment issues, and hard-to-reproduce bugs."
  }
];

export const fixNotes = [
  {
    title: "Cleaned Up WordPress Assets Slowing Down a Service Page",
    slug: "cleaned-up-wordpress-assets-slowing-down-service-page",
    date: "2026-06-28",
    displayDate: "June 28, 2026",
    lastUpdated: null,
    category: "Page Speed",
    serviceSlug: "site-speed-performance",
    excerpt: "A short performance cleanup note about theme and plugin assets that were making a WordPress service page heavier than it needed to be.",
    problemSummary: "The page looked acceptable after it loaded, but the front end was carrying global theme and plugin assets that were not needed for that page type.",
    whatIChecked: [
      "Lighthouse report",
      "Chrome DevTools coverage",
      "Loaded CSS and JavaScript files",
      "Image dimensions and lazy-loading behavior",
      "Plugin asset loading after cache clearing"
    ],
    whatIChanged: [
      "Delayed non-critical scripts where the page did not need them immediately",
      "Reduced unnecessary assets from the service page template path",
      "Adjusted image loading behavior for below-the-fold media",
      "Retested the page after clearing the site and browser cache"
    ],
    resultSummary: "The page became lighter, easier to load on mobile, and cleaner to maintain without changing the visible offer.",
    whatToWatchNext: [
      "Whether plugin updates reintroduce broad global assets",
      "Whether future tracking scripts add new mobile weight",
      "Whether images added later keep stable dimensions"
    ],
    toolsUsed: ["Lighthouse", "Chrome DevTools", "WordPress", "Caching/plugin review"],
    tags: ["WordPress", "Page Speed", "JavaScript", "Performance"],
    relatedServices: ["site-speed-performance", "wordpress-support", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Asset Cleanup Fix Note | The Web Guy",
    metaDescription: "Short website fix note about cleaning up WordPress assets on a service page, what was checked, and what was changed."
  },
  {
    title: "Fixed a Mobile Layout That Broke Below Tablet Width",
    slug: "fixed-mobile-layout-below-tablet-width",
    date: "2026-06-21",
    displayDate: "June 21, 2026",
    lastUpdated: null,
    category: "Website Fixes",
    serviceSlug: "website-fixes",
    excerpt: "A responsive layout note about a page that looked fine on desktop but started overflowing and stacking badly on smaller screens.",
    problemSummary: "The desktop layout hid the issue, but below tablet width the page had text wrapping, image sizing, and spacing rules that pushed content outside the viewport.",
    whatIChecked: [
      "Responsive breakpoints from desktop down to narrow mobile",
      "Hero layout rules",
      "Flex and grid behavior",
      "Image sizing and max-width rules",
      "Horizontal overflow in browser dev tools"
    ],
    whatIChanged: [
      "Adjusted the breakpoint where the columns collapse",
      "Added safer width constraints for images and content blocks",
      "Reduced mobile spacing in the affected section",
      "Retested the page across several viewport widths"
    ],
    resultSummary: "The page stacked cleanly on mobile and no longer forced side scrolling or crowded content blocks.",
    whatToWatchNext: [
      "Future image swaps that ignore the mobile size constraints",
      "New section copy that creates long unbroken lines",
      "Builder or theme updates that override the responsive rules"
    ],
    toolsUsed: ["Chrome DevTools", "Responsive viewport testing", "CSS review"],
    tags: ["Mobile Layout", "CSS", "Responsive Design", "Website Fixes"],
    relatedServices: ["website-fixes", "landing-pages", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Mobile Layout Fix Note | The Web Guy",
    metaDescription: "Short website fix note about repairing a mobile layout that broke below tablet width."
  },
  {
    title: "Cleaned Up Crawl Paths for Pages Google Was Slow to Index",
    slug: "cleaned-up-crawl-paths-google-slow-to-index",
    date: "2026-06-14",
    displayDate: "June 14, 2026",
    lastUpdated: null,
    category: "Technical SEO",
    serviceSlug: "technical-seo-implementation",
    excerpt: "A technical SEO note about pages discovered by Google but not getting strong crawl or impression signals.",
    problemSummary: "Important pages existed on the site, but their internal links, sitemap signals, and page structure did not make them feel important enough.",
    whatIChecked: [
      "XML sitemap status",
      "Search Console URL inspection notes",
      "Canonical tags",
      "Internal links into the affected pages",
      "Page quality and repeated boilerplate"
    ],
    whatIChanged: [
      "Added contextual links from related service and support pages",
      "Checked that the sitemap included the target URLs",
      "Tightened titles and headings where the page topic was vague",
      "Reduced thin repeated copy that made pages feel interchangeable"
    ],
    resultSummary: "The pages had clearer crawl paths and stronger internal support from related sections of the site.",
    whatToWatchNext: [
      "Whether Search Console impressions begin to appear over time",
      "Whether future pages get linked from relevant service pages",
      "Whether sitemap dates stay accurate after updates"
    ],
    toolsUsed: ["Google Search Console", "Sitemap review", "Internal link review", "Technical SEO checklist"],
    tags: ["Technical SEO", "Indexing", "Internal Links", "Crawlability"],
    relatedServices: ["technical-seo-implementation", "website-fixes", "ongoing-webmaster-support"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Crawl Path Cleanup Fix Note | The Web Guy",
    metaDescription: "Short technical SEO fix note about improving crawl paths for pages Google was slow to index."
  },
  {
    title: "Improved Internal Links Between Service Pages and Supporting Content",
    slug: "improved-internal-links-service-pages-supporting-content",
    date: "2026-06-07",
    displayDate: "June 7, 2026",
    lastUpdated: null,
    category: "Technical SEO",
    serviceSlug: "technical-seo-implementation",
    excerpt: "A practical internal-linking note about making service pages, supporting pages, and proof content connect more clearly.",
    problemSummary: "The site had useful pages, but the relationships between core services, supporting topics, and practical proof notes were too easy to miss.",
    whatIChecked: [
      "Main service page links",
      "Supporting content clusters",
      "Navigation and body-level internal links",
      "HTML sitemap and XML sitemap support",
      "Pages that had useful context but weak inbound links"
    ],
    whatIChanged: [
      "Added contextual links from service pages to related support content",
      "Linked proof-style notes back to the service pages they support",
      "Grouped related pages by practical task instead of broad marketing labels",
      "Checked that important pages were not only reachable through navigation"
    ],
    resultSummary: "Visitors and crawlers had clearer paths between the commercial service pages and the supporting content around them.",
    whatToWatchNext: [
      "Whether new support pages get linked from their closest service page",
      "Whether body links stay specific instead of becoming generic",
      "Whether older pages need another pass as the content library grows"
    ],
    toolsUsed: ["Crawl review", "Internal link map", "Sitemap review", "Content inventory"],
    tags: ["Technical SEO", "Internal Links", "Service Pages", "Content Support"],
    relatedServices: ["technical-seo-implementation", "website-fixes", "ongoing-webmaster-support"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Internal Linking Cleanup Fix Note | The Web Guy",
    metaDescription: "Short fix note about improving internal links between service pages and supporting content."
  },
  {
    title: "Fixed Lead Tracking for a Contact Form That Was Hard to Measure",
    slug: "fixed-lead-tracking-contact-form-hard-to-measure",
    date: "2026-05-31",
    displayDate: "May 31, 2026",
    lastUpdated: null,
    category: "Tracking & Analytics",
    serviceSlug: "analytics-tracking",
    excerpt: "A tracking cleanup note about separating broad contact intent from the final lead event in GA4.",
    problemSummary: "The contact path was visible on the site, but the analytics setup did not clearly separate button clicks, form starts, and completed lead submissions.",
    whatIChecked: [
      "GA4 event names",
      "Google Tag Manager triggers",
      "Form submit behavior",
      "Thank-you state behavior",
      "Button clicks that looked like contact intent but were not leads"
    ],
    whatIChanged: [
      "Separated contact intent events from final lead events",
      "Adjusted the form trigger so it matched the real submit behavior",
      "Checked the thank-you behavior after a test submission",
      "Documented the difference between broad clicks and completed leads"
    ],
    resultSummary: "The lead path became easier to understand in reporting because the events better matched what visitors actually did.",
    whatToWatchNext: [
      "Whether form markup changes break the trigger",
      "Whether campaign pages need the same event definitions",
      "Whether duplicate tracking snippets appear later"
    ],
    toolsUsed: ["GA4", "Google Tag Manager", "DebugView", "Browser testing"],
    tags: ["GA4", "GTM", "Forms", "Conversion Tracking"],
    relatedServices: ["analytics-tracking", "technical-seo-implementation", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Contact Form Lead Tracking Fix Note | The Web Guy",
    metaDescription: "Short tracking fix note about measuring a contact form lead path more clearly in GA4."
  },
  {
    title: "Stabilized Contact Form Email Sending Without Overcomplicating the Setup",
    slug: "stabilized-contact-form-email-sending-without-overcomplicating",
    date: "2026-05-24",
    displayDate: "May 24, 2026",
    lastUpdated: "2026-06-03",
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress support note about making contact form notifications testable when email delivery was unreliable.",
    problemSummary: "The form appeared to submit, but notification emails were not reliable and the available DNS or SMTP access made the setup more annoying than it needed to be.",
    whatIChecked: [
      "Form plugin notification settings",
      "Recipient and sender addresses",
      "Available SMTP or API mail options",
      "Spam and inbox behavior after test submissions",
      "Whether submissions were saved inside WordPress"
    ],
    whatIChanged: [
      "Used a practical mail-sending route that matched the available access",
      "Adjusted sender and reply-to settings so notifications were less fragile",
      "Sent test submissions through the live form",
      "Documented the remaining DNS or provider steps if stronger authentication was needed later"
    ],
    resultSummary: "The form notification path became testable and less fragile without turning a small form issue into a large infrastructure project.",
    whatToWatchNext: [
      "Whether DNS authentication should be tightened when account access is available",
      "Whether spam filtering changes affect delivery",
      "Whether form submissions should also be stored or routed to a CRM"
    ],
    toolsUsed: ["WordPress", "Form plugin review", "SMTP/plugin settings", "Email delivery testing"],
    tags: ["WordPress", "Forms", "Email Deliverability", "SMTP"],
    relatedServices: ["wordpress-support", "website-fixes", "analytics-tracking"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Contact Form Email Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about stabilizing contact form email notifications without overcomplicating the setup."
  },
  {
    title: "Tracked a Live-Site Display Issue Back to Server-Side Cache",
    slug: "tracked-live-site-display-issue-server-side-cache",
    date: "2026-05-18",
    displayDate: "May 18, 2026",
    lastUpdated: null,
    category: "Production Debugging",
    serviceSlug: "production-debugging",
    excerpt: "A production debugging note about a page that looked correct locally but kept showing stale output on the live domain.",
    problemSummary: "The local and expected output were correct, but the live site kept serving an older version after normal browser refreshes and theme-level cache clearing.",
    whatIChecked: [
      "Local output compared with live output",
      "Browser cache behavior",
      "Plugin cache settings",
      "Server-side cache layer",
      "Response headers that hinted at upstream cache behavior"
    ],
    whatIChanged: [
      "Confirmed the theme/code output was not the source of the stale display",
      "Cleared the cache layers that were available from the site",
      "Identified the hosting cache as the likely remaining layer",
      "Retested after the upstream cache refreshed"
    ],
    resultSummary: "The issue was narrowed from a theme or code bug to a live hosting cache problem, which kept the fix path from drifting into unnecessary template edits.",
    whatToWatchNext: [
      "Whether the host cache needs a clearer purge process",
      "Whether future changes should be checked in an uncached preview path",
      "Whether CDN or proxy rules are also involved"
    ],
    toolsUsed: ["Browser testing", "Cache review", "Response header checks", "WordPress"],
    tags: ["Production Debugging", "Cache", "Hosting", "WordPress"],
    relatedServices: ["website-fixes", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Server Cache Display Issue Fix Note | The Web Guy",
    metaDescription: "Short production debugging note about tracing a live-site display issue back to server-side cache behavior."
  },
  {
    title: "Cleaned Up an AI-Built Page So It Was Easier to Use and Maintain",
    slug: "cleaned-up-ai-built-page-easier-to-use-maintain",
    date: "2026-05-09",
    displayDate: "May 9, 2026",
    lastUpdated: null,
    category: "AI Website Cleanup",
    serviceSlug: "ai-built-website-cleanup",
    excerpt: "An AI website cleanup note about turning generated output into a clearer page system without rebuilding everything from scratch.",
    problemSummary: "The generated page worked in pieces, but the structure, mobile layout, headings, internal links, and reusable sections needed cleanup before it felt maintainable.",
    whatIChecked: [
      "Heading hierarchy",
      "Mobile stacking behavior",
      "Repeated sections and duplicate content",
      "Internal links to service pages",
      "Component or section patterns that would be reused later"
    ],
    whatIChanged: [
      "Simplified the page structure around the main visitor task",
      "Cleaned up headings and supporting copy",
      "Adjusted mobile spacing and section order",
      "Added internal links to the service paths the page supported"
    ],
    resultSummary: "The page kept the useful parts of the generated output while becoming easier to scan, edit, and connect to the rest of the site.",
    whatToWatchNext: [
      "Whether future generated sections repeat the same hierarchy problems",
      "Whether tracking and forms are verified before launch",
      "Whether reusable components should replace one-off page blocks"
    ],
    toolsUsed: ["SvelteKit", "CSS review", "Content hierarchy review", "Internal link review"],
    tags: ["AI Website Cleanup", "Mobile Layout", "Content Structure", "Internal Links"],
    relatedServices: ["ai-built-website-cleanup", "website-fixes", "landing-pages"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "AI-Built Page Cleanup Fix Note | The Web Guy",
    metaDescription: "Short AI website cleanup note about improving structure, mobile layout, links, and maintainability."
  },
  {
    title: "Cleaned Up a Mobile Page That Had Too Many Competing Sections",
    slug: "cleaned-up-mobile-page-too-many-competing-sections",
    date: "2026-04-30",
    displayDate: "April 30, 2026",
    lastUpdated: null,
    category: "Landing Pages",
    serviceSlug: "landing-pages",
    excerpt: "A landing page cleanup note about reducing mobile clutter and making the main page easier to scan.",
    problemSummary: "The mobile page felt like a stacked billboard because too many sections were competing for attention before the visitor reached the primary action.",
    whatIChecked: [
      "Mobile section order",
      "CTA placement",
      "Repeated proof and feature blocks",
      "Content that deserved its own supporting page",
      "Scroll depth before the first practical action"
    ],
    whatIChanged: [
      "Kept the main page focused on the primary visitor decision",
      "Moved deeper supporting topics into linked sections where appropriate",
      "Collapsed repeated content into shorter summaries",
      "Adjusted mobile spacing so each section had a clearer job"
    ],
    resultSummary: "The page became more focused on mobile and supported deeper reading through links instead of forcing every topic onto one screen.",
    whatToWatchNext: [
      "Whether new sections are added because they are useful or just available",
      "Whether supporting topics deserve standalone pages",
      "Whether mobile visitors reach the main CTA without excessive scanning"
    ],
    toolsUsed: ["Mobile QA", "Content hierarchy review", "Internal link review", "CSS cleanup"],
    tags: ["Landing Pages", "Mobile UX", "Content Hierarchy", "Internal Links"],
    relatedServices: ["landing-pages", "website-fixes", "ai-built-website-cleanup"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Mobile Landing Page Cleanup Fix Note | The Web Guy",
    metaDescription: "Short landing page fix note about cleaning up a mobile page with too many competing sections."
  },
  {
    title: "Reviewed Shopify Theme Files Before Making Template Changes",
    slug: "reviewed-shopify-theme-files-before-template-changes",
    date: "2026-04-24",
    displayDate: "April 24, 2026",
    lastUpdated: null,
    category: "Ecommerce Support",
    serviceSlug: "ecommerce-support",
    excerpt: "An ecommerce support note about reviewing active Shopify theme files before editing product or template behavior.",
    problemSummary: "The requested storefront change touched theme templates, so the first useful step was to inspect and save the relevant theme files instead of editing blind.",
    whatIChecked: [
      "Active theme status",
      "Liquid templates and sections related to the affected page",
      "Theme assets and snippets",
      "Existing customization patterns",
      "Whether a safe copy existed before changes"
    ],
    whatIChanged: [
      "Downloaded the relevant theme files for review",
      "Identified the templates and snippets most likely to control the change",
      "Kept a safer reference copy before editing",
      "Outlined the smallest template changes needed for the next pass"
    ],
    resultSummary: "The storefront change had a clearer starting point and a safer reference before any Liquid or asset edits were made.",
    whatToWatchNext: [
      "Whether changes should happen in a duplicate theme first",
      "Whether app blocks or theme settings override the template",
      "Whether analytics or product schema needs retested after edits"
    ],
    toolsUsed: ["Shopify", "Liquid review", "Theme file export", "Asset review"],
    tags: ["Shopify", "Liquid", "Ecommerce", "Theme Files"],
    relatedServices: ["ecommerce-support", "website-fixes", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Shopify Theme File Review Fix Note | The Web Guy",
    metaDescription: "Short ecommerce fix note about reviewing Shopify theme files before making template changes."
  },
  {
    title: "Checked for Suspicious WordPress Users After a Site Compromise",
    slug: "checked-suspicious-wordpress-users-after-site-compromise",
    date: "2026-04-17",
    displayDate: "April 17, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress support note about carefully checking suspicious users and removing temporary cleanup tooling afterward.",
    problemSummary: "After a possible compromise, the site needed a careful user review without leaving extra diagnostic files or tools hanging around afterward.",
    whatIChecked: [
      "WordPress user accounts",
      "User roles and permissions",
      "Suspicious admin-level records",
      "Database access needed to inspect records safely",
      "Temporary cleanup files or tools"
    ],
    whatIChanged: [
      "Reviewed user records for suspicious accounts",
      "Removed accounts that did not belong after confirmation",
      "Checked permissions on remaining accounts",
      "Removed temporary files after the inspection work was complete"
    ],
    resultSummary: "The suspicious account path was reviewed and cleaned up without leaving temporary investigation tooling behind.",
    whatToWatchNext: [
      "Whether admin passwords and salts should be rotated",
      "Whether plugins, themes, or hosting logs reveal the entry point",
      "Whether backups and security monitoring need stronger review"
    ],
    toolsUsed: ["WordPress", "Database review", "User role review", "Temporary cleanup tooling"],
    tags: ["WordPress", "Security Cleanup", "Users", "Production Debugging"],
    relatedServices: ["wordpress-support", "website-fixes", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Suspicious WordPress User Cleanup Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about checking suspicious users after a possible site compromise."
  },
  {
    title: "Verified a Form-to-CRM API Handoff That Was Dropping Fields",
    slug: "verified-form-to-crm-api-handoff-dropping-fields",
    date: "2026-04-09",
    displayDate: "April 9, 2026",
    lastUpdated: null,
    category: "API Integrations",
    serviceSlug: "api-integrations",
    excerpt: "An API integration note about checking a form handoff where submissions arrived but important fields were missing downstream.",
    problemSummary: "The website form appeared to submit, but the receiving CRM did not consistently show the expected field values after the handoff.",
    whatIChecked: [
      "Form field names and hidden fields",
      "Payload sent from the website",
      "CRM field mapping",
      "Webhook or API response behavior",
      "Test submissions with controlled sample data"
    ],
    whatIChanged: [
      "Aligned the field names used by the form and the receiving system",
      "Adjusted the payload so optional fields were still sent consistently",
      "Retested with sample submissions that covered the missing fields",
      "Documented which fields were required for the next integration pass"
    ],
    resultSummary: "The handoff became easier to verify because the expected fields lined up between the form payload and the receiving system.",
    whatToWatchNext: [
      "Whether CRM fields change names later",
      "Whether validation rules reject partial submissions",
      "Whether failed handoffs need logging or alerts"
    ],
    toolsUsed: ["Browser network panel", "Webhook review", "CRM field mapping", "Test submissions"],
    tags: ["API Integrations", "Forms", "CRM", "Webhooks"],
    relatedServices: ["api-integrations", "analytics-tracking", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Form-to-CRM API Handoff Fix Note | The Web Guy",
    metaDescription: "Short API integration fix note about verifying a form-to-CRM handoff that was dropping fields."
  }
];

function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeCategory(value = "") {
  const slug = slugify(value);
  const category = fixNoteCategoryDefinitions.find((item) => item.slug === slug || slugify(item.label) === slug);
  return category?.label || value;
}

function categoryForNote(note) {
  return fixNoteCategoryDefinitions.find((category) => category.label === normalizeCategory(note.category));
}

function sortByNewest(a, b) {
  const dateSort = b.date.localeCompare(a.date);
  if (dateSort) return dateSort;
  return a.title.localeCompare(b.title);
}

function intersects(left = [], right = []) {
  const rightSet = new Set(right.map((value) => String(value).toLowerCase()));
  return left.some((value) => rightSet.has(String(value).toLowerCase()));
}

function overlapCount(left = [], right = []) {
  const rightSet = new Set(right.map((value) => String(value).toLowerCase()));
  return left.reduce((count, value) => count + (rightSet.has(String(value).toLowerCase()) ? 1 : 0), 0);
}

function matchesService(note, serviceSlug = "") {
  if (!serviceSlug) return true;
  return note.serviceSlug === serviceSlug || (note.relatedServices || []).includes(serviceSlug);
}

export const sortedFixNotes = [...fixNotes].sort(sortByNewest);

export const fixNoteMap = Object.fromEntries(fixNotes.map((note) => [note.slug, note]));

export const fixNoteCategoryMap = Object.fromEntries(fixNoteCategoryDefinitions.map((category) => [category.slug, category]));

export const fixNoteCategories = fixNoteCategoryDefinitions.map((category) => ({
  ...category,
  notes: sortedFixNotes.filter((note) => fixNoteCategorySlug(note.category) === category.slug)
}));

export function fixNoteUrl(slug) {
  return `/fix-notes/${slug}/`;
}

export function fixNoteCategoryUrl(slug) {
  return `/fix-notes/category/${slug}/`;
}

export function fixNoteCategorySlug(category) {
  return categoryForNote({ category })?.slug || slugify(category);
}

export function fixNoteDisplayDate(note) {
  if (note.displayDate) return note.displayDate;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${note.date}T00:00:00Z`));
}

export function fixNoteLastUpdatedDate(note) {
  if (!note.lastUpdated) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${note.lastUpdated}T00:00:00Z`));
}

export function getFixNotes({ category = "", serviceSlug = "", limit = 3, fallback = true } = {}) {
  const categoryLabel = category ? normalizeCategory(category) : "";
  let notes = sortedFixNotes.filter((note) => {
    const categoryMatches = !categoryLabel || note.category === categoryLabel;
    const serviceMatches = !serviceSlug || matchesService(note, serviceSlug);
    return categoryMatches && serviceMatches;
  });

  if (!notes.length && categoryLabel) {
    notes = sortedFixNotes.filter((note) => note.category === categoryLabel);
  }

  if (!notes.length && serviceSlug) {
    notes = sortedFixNotes.filter((note) => matchesService(note, serviceSlug));
  }

  if (!notes.length && fallback) {
    notes = sortedFixNotes;
  }

  return typeof limit === "number" ? notes.slice(0, limit) : notes;
}

export function getRelatedFixNotes(note, limit = 3) {
  const related = sortedFixNotes
    .filter((item) => item.slug !== note.slug)
    .map((item) => {
      const score =
        (item.category === note.category ? 6 : 0) +
        (item.serviceSlug === note.serviceSlug ? 4 : 0) +
        (intersects(item.relatedServices, note.relatedServices) ? 3 : 0) +
        overlapCount(item.tags, note.tags);

      return { item, score };
    })
    .sort((a, b) => b.score - a.score || sortByNewest(a.item, b.item))
    .map(({ item }) => item);

  return related.slice(0, limit);
}
