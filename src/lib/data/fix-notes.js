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
  },
  {
    slug: "security-hosting",
    label: "Security & Hosting",
    description: "Malware cleanup, suspicious users, file hardening, recovery staging, DNS, mail, hosting, and cache layers."
  },
  {
    slug: "automation-internal-tools",
    label: "Automation & Internal Tools",
    description: "Dashboards, utility scripts, admin workflows, import helpers, static-safe forms, and operational tooling."
  }
];

export const fixNotes = [
  {
    title: "Built an Admin-Only WordPress CRM for Estimate Intake",
    slug: "built-admin-only-wordpress-crm-estimate-intake",
    date: "2026-07-13",
    displayDate: "July 13, 2026",
    lastUpdated: null,
    category: "API Integrations",
    serviceSlug: "api-integrations",
    excerpt: "A WordPress integration note about building an admin-only CRM and estimate form flow that captured lead context, UTM data, and follow-up details without exposing CRM language on the public site.",
    problemSummary: "The handyman site needed a request-estimate workflow that stayed simple for visitors but saved enough lead detail for real follow-up, source tracking, and internal status management.",
    whatIChecked: [
      "Public estimate form fields and required intake details",
      "Lead source, landing-page, and referrer capture needs",
      "UTM field handling and follow-up requirements",
      "Admin-side lead views, notes, and export needs",
      "Spam protection, thank-you routing, and owner notifications"
    ],
    whatIChanged: [
      "Built an admin-only CRM plugin for estimate leads and follow-up workflows",
      "Saved lead source, landing page, referring URL, and UTM fields with each submission",
      "Added nonce protection, sanitization, honeypot filtering, and local lead-table storage to the form flow",
      "Set the form to redirect to `/thank-you/` when available and send owner notifications when configured",
      "Added dashboard views, lead detail screens, status updates, reminders, and CSV export"
    ],
    resultSummary: "The site gained a cleaner estimate intake path that stayed visitor-friendly while giving the business usable lead context and follow-up controls inside WordPress.",
    whatToWatchNext: [
      "Whether owner notification settings stay configured after future plugin or hosting changes",
      "Whether uploaded photo handling and lead-table growth need maintenance rules later",
      "Whether UTM naming stays consistent across traffic sources and campaigns"
    ],
    toolsUsed: ["WordPress", "Custom plugin development", "Gutenberg blocks", "CSV export tooling"],
    tags: ["WordPress", "CRM", "Estimate Form", "Lead Tracking"],
    relatedServices: ["api-integrations", "analytics-tracking", "wordpress-support"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Estimate CRM Intake Fix Note | The Web Guy",
    metaDescription: "Short API integration note about building an admin-only WordPress CRM and estimate intake flow with UTM capture and follow-up controls."
  },
  {
    title: "Built a Local-First Workflow App With Session Continuity",
    slug: "built-local-first-workflow-app-session-continuity",
    date: "2026-07-17",
    displayDate: "July 17, 2026",
    lastUpdated: null,
    category: "Automation & Internal Tools",
    serviceSlug: "api-integrations",
    excerpt: "An internal tools note about building a private mode-based workflow app with timers, session continuity, device-local attachments, and export controls instead of depending on a cloud-synced task stack.",
    problemSummary: "The project needed a private workflow system that could separate operating modes, keep continuity between sessions, and store notes and attachments locally without pushing sensitive data into a hosted service.",
    whatIChecked: [
      "Mode definitions and session rules",
      "Focus and recovery timer requirements",
      "Microtask and reset-flow behavior",
      "Local browser storage and attachment handling",
      "Export, deletion, and recurring-block controls"
    ],
    whatIChanged: [
      "Built the first release around predefined modes instead of one large undifferentiated backlog",
      "Added focus and recovery timers plus one active microtask per session",
      "Added a reset flow, last-session continuity, and timeline-style session tracking",
      "Stored session records in local browser storage and kept attachments in IndexedDB",
      "Added recurring mode blocks, private reports, export, and deletion controls"
    ],
    resultSummary: "The app became a practical private operating system for focused work blocks, with enough local persistence to resume sessions without adding cloud-account overhead.",
    whatToWatchNext: [
      "Whether local-storage schema changes need migration handling as the app grows",
      "Whether export formats stay useful if reports or attachment metadata expand",
      "Whether very large local attachments affect browser performance over time"
    ],
    toolsUsed: ["Next.js", "React", "IndexedDB", "Local browser storage"],
    tags: ["Internal Tools", "Workflow App", "Local-First", "Session Tracking"],
    relatedServices: ["api-integrations", "production-debugging", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Local-First Workflow App Fix Note | The Web Guy",
    metaDescription: "Short internal tools note about building a local-first workflow app with timers, session continuity, and device-local attachments."
  },
  {
    title: "Structured Client-Facing HTML Invoices for Detailed Work Blocks",
    slug: "structured-client-facing-html-invoices-detailed-work-blocks",
    date: "2026-07-15",
    displayDate: "July 15, 2026",
    lastUpdated: null,
    category: "Automation & Internal Tools",
    serviceSlug: "api-integrations",
    excerpt: "An internal operations note about maintaining project-specific HTML invoices that made hours, rates, totals, and technical work descriptions easier for clients to review line by line.",
    problemSummary: "The billing workflow needed a repeatable invoice format that could show real technical work in plain language, stay browser-friendly, and print cleanly without depending on a third-party invoice builder.",
    whatIChecked: [
      "Invoice layout structure and metadata fields",
      "Line-item readability for technical work summaries",
      "Hours, rate, subtotal, and total-due presentation",
      "Print styling and browser rendering behavior",
      "Per-project file organization for invoice history"
    ],
    whatIChanged: [
      "Standardized a reusable HTML and CSS invoice shell with clear branding, metadata, and totals sections",
      "Organized invoice history under project-specific folders so each billing trail stayed easy to review",
      "Expanded line-item descriptions so technical work blocks were understandable without extra translation",
      "Kept the layout print-friendly for browser export while still reading cleanly on screen",
      "Used the invoice files as a durable client-facing record of hours, scope, and completed work"
    ],
    resultSummary: "The invoice workflow became easier to reuse and gave each billing block enough context that a client could audit the work without chasing separate notes.",
    whatToWatchNext: [
      "Whether totals should eventually be generated from structured data instead of manual HTML edits",
      "Whether PDF export or shared partials would reduce repetition across projects",
      "Whether longer invoice histories should move into a more formal internal template system"
    ],
    toolsUsed: ["HTML", "CSS", "Browser print preview", "Project file organization"],
    tags: ["Invoices", "Internal Tools", "Client Reporting", "Documentation"],
    relatedServices: ["api-integrations", "analytics-tracking", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "HTML Invoice Workflow Fix Note | The Web Guy",
    metaDescription: "Short internal tools note about structuring client-facing HTML invoices with detailed work blocks and print-clean totals."
  },
  {
    title: "Rebuilt a WordPress Site From a Crawl Into Reusable Blocks",
    slug: "rebuilt-wordpress-site-from-crawl-into-reusable-blocks",
    date: "2026-06-29",
    displayDate: "June 29, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress rebuild note about taking a live-site crawl and turning it into a custom theme architecture with reusable Gutenberg blocks, custom post types, and a Vite-based asset pipeline.",
    problemSummary: "The site needed a rebuild path that preserved imported content but moved it into an editable WordPress structure instead of freezing the whole design into one-off hardcoded templates.",
    whatIChecked: [
      "Crawled live-site content and page inventory",
      "Theme architecture needed for reusable sections",
      "Custom post type and taxonomy requirements",
      "Dynamic block opportunities for page sections and galleries",
      "Frontend asset build and deployment constraints"
    ],
    whatIChanged: [
      "Built a custom WordPress theme shell with PHP templates, shared components, and Vite-managed frontend assets",
      "Registered custom post types and taxonomies for offers, projects, reviews, jobs, and imported content organization",
      "Added dynamic Gutenberg blocks for page heroes, breadcrumbs, offers, brands, galleries, maps, and reviews",
      "Set up crawl, import, seed, and modernization scripts so imported content could be moved into the new structure",
      "Kept the homepage template-part driven and interior pages block-based so the site stayed easier to evolve"
    ],
    resultSummary: "The rebuild created a more maintainable WordPress content model where reusable sections, imported media, and future page changes could live inside the theme instead of scattered hardcoded layouts.",
    whatToWatchNext: [
      "Whether imported media and crawl-generated content stay aligned with the new content model",
      "Whether dynamic block render callbacks need regression checks after WordPress updates",
      "Whether the Vite manifest and built assets are refreshed consistently before deployment"
    ],
    toolsUsed: ["WordPress", "PHP", "Gutenberg blocks", "Vite", "WP-CLI"],
    tags: ["WordPress", "Theme Rebuild", "Gutenberg", "Content Migration"],
    relatedServices: ["wordpress-support", "landing-pages", "technical-seo-implementation"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Rebuild From Crawl Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about rebuilding a site from a crawl into reusable Gutenberg blocks and a custom theme architecture."
  },
  {
    title: "Optimized a Shopify Theme for Page Speed and Core Web Vitals",
    slug: "optimized-shopify-theme-page-speed-core-web-vitals",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "Page Speed",
    serviceSlug: "ecommerce-support",
    excerpt: "A Shopify performance note about auditing theme files, app embeds, LCP behavior, and third-party scripts before applying staging-theme speed improvements.",
    problemSummary: "The storefront had performance friction from theme assets, app embeds, render-blocking resources, product-page scripts, and third-party support widgets that needed a careful staging pass.",
    whatIChecked: [
      "Shopify theme source files and Liquid layout",
      "App embeds and third-party script loading",
      "JavaScript bundles and CSS delivery",
      "Image and LCP behavior",
      "Product and cart behavior tied to delivery fields"
    ],
    whatIChanged: [
      "Deferred non-critical third-party and support-app loaders",
      "Adjusted stylesheet loading so key page rendering was less blocked",
      "Added priority hints for the likely LCP image path",
      "Scoped delivery-related scripts more tightly to the sections that needed them",
      "Verified product and cart behavior after the performance changes"
    ],
    resultSummary: "The staging theme had clearer performance wins without breaking product, cart, or delivery-field behavior.",
    whatToWatchNext: [
      "Whether new app embeds add blocking scripts later",
      "Whether image swaps keep LCP dimensions and priority intact",
      "Whether checkout-adjacent scripts still behave after theme updates"
    ],
    toolsUsed: ["Shopify", "Liquid", "Lighthouse", "Real-browser testing"],
    tags: ["Shopify", "Page Speed", "Core Web Vitals", "Third-Party Scripts"],
    relatedServices: ["ecommerce-support", "site-speed-performance", "technical-seo-implementation"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Shopify Page Speed Fix Note | The Web Guy",
    metaDescription: "Short fix note about optimizing a Shopify staging theme for page speed, Core Web Vitals, and safer third-party script loading."
  },
  {
    title: "Cleaned a WordPress Install and Database After Malware",
    slug: "cleaned-wordpress-install-database-after-malware",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A WordPress security note about scanning files and database records, packaging clean deployable files, and removing a malicious user from the database.",
    problemSummary: "The site needed a malware cleanup pass that covered both the downloaded WordPress files and the database records where persistence could hide.",
    whatIChecked: [
      "Downloaded WordPress file copy",
      "Database user and usermeta records",
      "Suspicious PHP and upload-folder executables",
      "Redirect rules and hidden persistence patterns",
      "Old backup, staging, cache, and dump folders"
    ],
    whatIChanged: [
      "Scanned files for common backdoor and malware patterns",
      "Built clean deployable core and content packages while preserving required active assets",
      "Excluded stale backup, staging, cache, and runtime dump folders from the clean package",
      "Used a temporary cleanup tool to inspect and remove a malicious database user",
      "Documented cleanup findings and remaining follow-up steps"
    ],
    resultSummary: "The recovery path separated active production assets from risky leftovers and removed the confirmed malicious user from the database.",
    whatToWatchNext: [
      "Whether administrator passwords and salts are rotated after cleanup",
      "Whether stale backups return through future uploads",
      "Whether security scans stay clean after redeployment"
    ],
    toolsUsed: ["WordPress", "Database review", "File scanning", "Cleanup tooling"],
    tags: ["WordPress", "Malware Cleanup", "Database", "Security"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Malware Database Cleanup Fix Note | The Web Guy",
    metaDescription: "Short fix note about cleaning a WordPress install and database after malware, including file scanning and malicious user removal."
  },
  {
    title: "Traced a Live WordPress Display Problem to Host Cache",
    slug: "traced-live-wordpress-display-problem-host-cache",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "Production Debugging",
    serviceSlug: "production-debugging",
    excerpt: "A production debugging note about plugin updates, frontend display checks, and a live-site mismatch caused by cache beyond WordPress.",
    problemSummary: "The site looked corrected in the local copy after updates, but the public page still served older processed assets.",
    whatIChecked: [
      "Updated WordPress plugins",
      "Frontend display after the update pass",
      "Available WordPress cache controls",
      "Client-side CSS and JavaScript optimization settings",
      "Local output compared with the live site"
    ],
    whatIChanged: [
      "Retested the affected frontend display after plugin updates",
      "Cleared or disabled the cache and optimization controls available inside WordPress",
      "Confirmed the corrected site output worked outside the live cache layer",
      "Documented that hosting, CDN, or server-side optimization cache still needed purged"
    ],
    resultSummary: "The issue was narrowed to an upstream cache layer, which kept the work focused on cache purging instead of unnecessary template edits.",
    whatToWatchNext: [
      "Whether hosting has a reliable purge process",
      "Whether CDN and server optimization tools are documented",
      "Whether future plugin updates should be checked from an uncached path"
    ],
    toolsUsed: ["WordPress", "Browser testing", "Cache review", "Local comparison"],
    tags: ["WordPress", "Cache", "Production Debugging", "Plugin Updates"],
    relatedServices: ["production-debugging", "wordpress-support", "security-hosting-reliability"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Host Cache Debugging Fix Note | The Web Guy",
    metaDescription: "Short production debugging note about tracing a live WordPress display issue to a host or CDN cache layer."
  },
  {
    title: "Fixed Contact Form Email Delivery With Authenticated Sending",
    slug: "fixed-contact-form-email-delivery-authenticated-sending",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress support note about a contact form that appeared to submit but failed notification delivery until authenticated mail sending was configured.",
    problemSummary: "The frontend form showed an error after submission, and testing pointed toward server mail delivery rather than page caching or spam filtering.",
    whatIChecked: [
      "Reported frontend form behavior",
      "Live form submission flow",
      "Cache and spam-filtering assumptions",
      "Server mail delivery path",
      "Backend mail test results"
    ],
    whatIChanged: [
      "Added and configured a mail delivery plugin",
      "Connected an authenticated API-based sending path",
      "Ran backend mail delivery tests",
      "Verified the frontend form returned successful submissions after the change"
    ],
    resultSummary: "The contact form could send successfully through an authenticated mail route instead of depending on unreliable default server mail.",
    whatToWatchNext: [
      "Whether API credentials or account permissions expire",
      "Whether form plugin updates change notification behavior",
      "Whether SPF, DKIM, or DMARC should be tightened later"
    ],
    toolsUsed: ["WordPress", "Mail delivery plugin", "Gmail API", "Form testing"],
    tags: ["WordPress", "Forms", "Email Delivery", "SMTP"],
    relatedServices: ["wordpress-support", "website-fixes", "analytics-tracking"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Contact Form Email Delivery Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about fixing contact form email delivery with authenticated sending."
  },
  {
    title: "Resolved an Unused Instagram Feed Plugin Issue",
    slug: "resolved-unused-instagram-feed-plugin-issue",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress plugin note about updating an Instagram feed plugin, tracing the remaining issue to authentication, and removing it when the feed was no longer needed.",
    problemSummary: "An Instagram feed plugin still had a display or connection issue after updating because the integration needed to be reauthorized.",
    whatIChecked: [
      "Instagram feed plugin version",
      "Frontend display behavior",
      "Plugin connection and authentication state",
      "Whether the feed was still part of the current site workflow"
    ],
    whatIChanged: [
      "Updated the affected plugin",
      "Confirmed the remaining issue was tied to reinitializing the Instagram connection",
      "Verified the feed was no longer being used",
      "Deactivated the plugin instead of keeping an unused integration active"
    ],
    resultSummary: "The site avoided carrying a broken, unused social feed integration and reduced one more plugin maintenance surface.",
    whatToWatchNext: [
      "Whether the feed should be rebuilt before being reactivated",
      "Whether unused plugins are reviewed during future maintenance",
      "Whether social API token changes affect other integrations"
    ],
    toolsUsed: ["WordPress", "Plugin review", "Frontend testing", "Integration settings"],
    tags: ["WordPress", "Plugin Cleanup", "Instagram", "Maintenance"],
    relatedServices: ["wordpress-support", "website-fixes", "ongoing-webmaster-support"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Instagram Plugin Cleanup Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about resolving an unused Instagram feed plugin issue by updating, checking authentication, and deactivating it."
  },
  {
    title: "Added Floating Click-to-Call and Review Badge Support",
    slug: "added-floating-click-to-call-review-badge-support",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "Tracking & Analytics",
    serviceSlug: "analytics-tracking",
    excerpt: "A site support note about adding a persistent phone CTA, review badges, cached rating data, and click tracking inside a static export workflow.",
    problemSummary: "The site needed easier phone access and stronger review proof without breaking the existing static route setup.",
    whatIChecked: [
      "Shared layout shell",
      "Mobile and desktop CTA placement",
      "Review badge display areas",
      "Cached rating and review-count behavior",
      "Static export compatibility"
    ],
    whatIChanged: [
      "Added a floating click-to-call button across the site",
      "Wired the phone CTA into the shared layout so it appeared consistently",
      "Set up homepage and footer review badge support",
      "Added cached fallback handling for review rating and count data",
      "Verified phone-click tracking within the static export flow"
    ],
    resultSummary: "Visitors had a more persistent phone path and the site could show review proof while keeping the static build stable.",
    whatToWatchNext: [
      "Whether review API credentials are configured on the server side",
      "Whether phone-click events remain visible in analytics",
      "Whether mobile CTA placement conflicts with future widgets"
    ],
    toolsUsed: ["Next.js", "GA4", "Google Places API", "Yelp API"],
    tags: ["Tracking", "CTA", "Reviews", "Static Site"],
    relatedServices: ["analytics-tracking", "landing-pages", "react-static-sites"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Click-to-Call and Review Badge Fix Note | The Web Guy",
    metaDescription: "Short support note about adding a floating phone CTA, review badge support, cached review data, and tracking to a static site."
  },
  {
    title: "Fixed Mobile Bio Popup Scrolling and Project Image Quality",
    slug: "fixed-mobile-bio-popup-scrolling-project-image-quality",
    date: "2026-07-01",
    displayDate: "July 1, 2026",
    lastUpdated: null,
    category: "Website Fixes",
    serviceSlug: "website-fixes",
    excerpt: "A frontend fix note about repairing a mobile popup scroll issue, adding a project card, and correcting blurry responsive image output.",
    problemSummary: "The page had a bio popup that showed scrollbars but would not scroll properly on affected views, and new project imagery exposed a responsive image sizing problem.",
    whatIChecked: [
      "Mobile and laptop popup behavior",
      "Lightbox content scrolling",
      "Panel positioning and overflow rules",
      "Project card listing output",
      "Responsive image sizes compared with viewport width"
    ],
    whatIChanged: [
      "Adjusted mobile CSS so the popup content could scroll normally",
      "Added the requested project card and matching detail page",
      "Removed an unrelated extra card from the listing",
      "Reoptimized affected project images",
      "Added a larger default image size for cleaner card and project display"
    ],
    resultSummary: "The popup became usable on smaller views and project images loaded at a size that better matched their display area.",
    whatToWatchNext: [
      "Whether future popup content exceeds the available mobile height",
      "Whether new project images include appropriate generated sizes",
      "Whether builder or lightbox updates change overflow behavior"
    ],
    toolsUsed: ["WordPress", "CSS review", "GLightbox", "Responsive image testing"],
    tags: ["Mobile Layout", "CSS", "Images", "WordPress"],
    relatedServices: ["website-fixes", "wordpress-support", "landing-pages"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Mobile Popup and Image Quality Fix Note | The Web Guy",
    metaDescription: "Short website fix note about repairing mobile popup scrolling and correcting blurry responsive project images."
  },
  {
    title: "Built a Static-Site Lead Handler and Contact Popup Flow",
    slug: "built-static-site-lead-handler-contact-popup-flow",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "API Integrations",
    serviceSlug: "api-integrations",
    excerpt: "An integration note about building a standalone lead submission service, documenting deployment settings, and later routing requests through an embedded CRM popup.",
    problemSummary: "The static site needed a lead handling path that could support form posts, validation, email delivery, attachments, and a fallback CRM-oriented contact flow.",
    whatIChecked: [
      "Static site form requirements",
      "CORS origin needs",
      "JSON, form, and multipart submission behavior",
      "Transactional email delivery requirements",
      "Existing CRM popup and tracking expectations"
    ],
    whatIChanged: [
      "Created a standalone Node and Express lead submission service",
      "Added validation, honeypot handling, CORS allowlisting, file attachment support, and a health route",
      "Documented local setup, environment variables, deployment settings, endpoint usage, and security notes",
      "Restored a third-party CRM form inside a popup modal",
      "Tracked the sticky contact click and verified the static export still built successfully"
    ],
    resultSummary: "The site had both a documented custom lead handler and a practical CRM popup route while keeping static deployment intact.",
    whatToWatchNext: [
      "Whether the custom lead endpoint remains needed if CRM routing owns the flow",
      "Whether CORS origins stay current after domain changes",
      "Whether analytics still separates popup opens from completed leads"
    ],
    toolsUsed: ["Node.js", "Express", "Next.js", "GA4"],
    tags: ["API Integrations", "Forms", "Static Site", "CRM"],
    relatedServices: ["api-integrations", "analytics-tracking", "react-static-sites"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Static Site Lead Handler Fix Note | The Web Guy",
    metaDescription: "Short API integration note about building a static-site lead handler and contact popup flow."
  },
  {
    title: "Cleaned Up FAQ Sections Across WordPress Pages",
    slug: "cleaned-up-faq-sections-across-wordpress-pages",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress content cleanup note about reviewing affected pages, fixing FAQ sections, and tightening visible layout details.",
    problemSummary: "Several pages had FAQ areas and surrounding page sections that were inconsistent or did not match the expected presentation.",
    whatIChecked: [
      "Affected page set",
      "FAQ section content",
      "Visible layout consistency",
      "Page areas that did not look correct",
      "Frontend output after edits"
    ],
    whatIChanged: [
      "Reviewed the pages that needed FAQ cleanup",
      "Fixed FAQ sections across the affected pages",
      "Adjusted visible content and layout details",
      "Retested the updated page output for consistency"
    ],
    resultSummary: "The FAQ sections and nearby content blocks read more consistently across the affected WordPress pages.",
    whatToWatchNext: [
      "Whether new FAQs follow the same structure",
      "Whether schema output should be checked after content edits",
      "Whether page builder updates alter spacing again"
    ],
    toolsUsed: ["WordPress", "Page review", "Content cleanup", "Frontend QA"],
    tags: ["WordPress", "FAQ", "Content Cleanup", "Page Layout"],
    relatedServices: ["wordpress-support", "landing-pages", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress FAQ Cleanup Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about cleaning up FAQ sections and visible page layout details."
  },
  {
    title: "Staged and Cleaned a WordPress Recovery Backup Locally",
    slug: "staged-cleaned-wordpress-recovery-backup-locally",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A WordPress recovery note about staging an original backup locally, cleaning import files, refreshing core, and quarantining suspicious inactive assets.",
    problemSummary: "The recovery needed to preserve active production content while separating the working site from stale, risky, or malware-like files.",
    whatIChecked: [
      "Original site backup and database dump",
      "Local WordPress configuration",
      "Active themes, plugins, uploads, and security rules",
      "Old staging, backup, cache, and platform artifact folders",
      "Suspicious top-level PHP and displaced plugin or theme files"
    ],
    whatIChanged: [
      "Staged the backup and database dump in a local WordPress environment",
      "Cleaned the SQL dump into import-ready database files",
      "Configured local database connection and import tooling",
      "Refreshed core WordPress files while preserving active content",
      "Created quarantine areas for inactive, stale, risky, and malware-like files"
    ],
    resultSummary: "The recovery environment became easier to inspect because active site assets were preserved while questionable leftovers were isolated.",
    whatToWatchNext: [
      "Whether quarantined files are needed before final removal",
      "Whether production upload limits and security rules need mirrored during deployment",
      "Whether fresh scans stay clean after restoring the cleaned package"
    ],
    toolsUsed: ["XAMPP", "WordPress", "SQL cleanup", "File quarantine"],
    tags: ["WordPress", "Recovery", "Malware Cleanup", "Local Staging"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Backup Recovery Fix Note | The Web Guy",
    metaDescription: "Short WordPress recovery note about staging a backup locally, cleaning database imports, refreshing core files, and quarantining suspicious assets."
  },
  {
    title: "Built a Role-Aware Operations Dashboard Prototype",
    slug: "built-role-aware-operations-dashboard-prototype",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Automation & Internal Tools",
    serviceSlug: "automation-internal-tools",
    excerpt: "An internal tools note about building a dashboard prototype with role-aware views, activity data, charts, map previews, and installation documentation.",
    problemSummary: "The project needed a reviewable dashboard prototype that could show field activity, approvals, users, settings, admin views, and public-facing embed behavior.",
    whatIChecked: [
      "Dashboard and public page structure",
      "Role-specific access expectations",
      "Activity data fields and location metadata",
      "Responsive behavior across desktop, tablet, and mobile",
      "Build readiness and documentation coverage"
    ],
    whatIChanged: [
      "Built public pages, dashboard pages, admin views, API routes, mock data, and shared components",
      "Added role-aware behavior for admins, owners, team members, and workers",
      "Created activity views with filters, date ranges, charts, map previews, and installation snippets",
      "Added install and embed documentation",
      "Verified responsive layout and production build behavior"
    ],
    resultSummary: "The prototype gave stakeholders a realistic way to review the operational workflow before connecting the dashboard to live data.",
    whatToWatchNext: [
      "Whether mock roles map cleanly to real auth rules",
      "Whether installation snippets need versioning",
      "Whether chart and map data should be paginated as volume grows"
    ],
    toolsUsed: ["Next.js", "Database schema", "Charts", "Responsive QA"],
    tags: ["Internal Tools", "Dashboard", "Next.js", "Prototype"],
    relatedServices: ["automation-internal-tools", "api-integrations", "react-static-sites"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Operations Dashboard Prototype Fix Note | The Web Guy",
    metaDescription: "Short internal tools note about building a role-aware operations dashboard prototype."
  },
  {
    title: "Completed Requested Site Modifications and Output Review",
    slug: "completed-requested-site-modifications-output-review",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Website Fixes",
    serviceSlug: "website-fixes",
    excerpt: "A small support note about completing requested site edits and reviewing the updated page output afterward.",
    problemSummary: "The site needed a focused set of requested modifications and a quick review to confirm the edits appeared correctly.",
    whatIChecked: [
      "Requested modification list",
      "Affected page output",
      "Visible presentation after edits",
      "Basic browser behavior"
    ],
    whatIChanged: [
      "Completed the requested site modifications",
      "Reviewed the updated page output",
      "Confirmed the visible changes were applied correctly"
    ],
    resultSummary: "The requested changes were applied and checked against the updated frontend output.",
    whatToWatchNext: [
      "Whether additional follow-up edits are grouped into a clearer task list",
      "Whether future changes need screenshots before and after",
      "Whether any cache layer delays the visible update"
    ],
    toolsUsed: ["Browser testing", "Frontend review", "Site editor"],
    tags: ["Website Fixes", "Frontend QA", "Content Updates", "Support"],
    relatedServices: ["website-fixes", "ongoing-webmaster-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Site Modification Review Fix Note | The Web Guy",
    metaDescription: "Short website support note about completing requested site modifications and reviewing the updated output."
  },
  {
    title: "Refactored a Next.js Site for Static Hosting",
    slug: "refactored-nextjs-site-static-hosting",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Production Debugging",
    serviceSlug: "react-static-sites",
    excerpt: "A static-site deployment note about converting a Next.js app for static export, removing server-only integrations, and preserving form and analytics behavior.",
    problemSummary: "The app needed to move toward static hosting, but it still contained server-only routes, private-key integrations, and deployment assumptions that would not work in a static export.",
    whatIChecked: [
      "Next.js export configuration",
      "Old API routes and server-only packages",
      "Form submission paths",
      "Analytics and conversion snippets",
      "Sitemap, robots, and hosting configuration"
    ],
    whatIChanged: [
      "Configured static export and verified the build output directory",
      "Removed old API routes and unused server-only dependencies",
      "Replaced forms with a shared static-safe form system",
      "Added a public lead endpoint configuration and clear missing-endpoint errors",
      "Added GA4 support for successful submissions and contact clicks"
    ],
    resultSummary: "The project became deployable as a static site while keeping lead capture and analytics behavior explicit.",
    whatToWatchNext: [
      "Whether the external lead endpoint is monitored",
      "Whether old server-only integrations are reintroduced",
      "Whether deployment docs stay aligned with the actual hosting target"
    ],
    toolsUsed: ["Next.js", "Render", "GA4", "Static export"],
    tags: ["Next.js", "Static Site", "Deployment", "Forms"],
    relatedServices: ["react-static-sites", "api-integrations", "analytics-tracking"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Next.js Static Hosting Refactor Fix Note | The Web Guy",
    metaDescription: "Short fix note about refactoring a Next.js app for static hosting while preserving forms and analytics."
  },
  {
    title: "Removed WordPress Backdoors and Hardened File Access",
    slug: "removed-wordpress-backdoors-hardened-file-access",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A WordPress security note about removing malicious plugin directories, injected theme code, cache payloads, and hardening sensitive file access.",
    problemSummary: "The affected WordPress sites shared malware patterns across plugin directories, theme files, cache artifacts, and hard-coded admin persistence.",
    whatIChecked: [
      "Malicious plugin-like directories",
      "Theme payload files",
      "Cache artifacts containing malware payloads",
      "Injected script tags and admin backdoor logic",
      "File access rules and WordPress configuration hardening"
    ],
    whatIChanged: [
      "Removed malicious plugin directories and related injected files",
      "Cleaned modified theme files by removing injected scripts and backdoor code",
      "Cleared malicious cache artifacts",
      "Updated access rules to restrict sensitive files, executable upload paths, backup files, logs, XML-RPC, and direct access to sensitive paths",
      "Updated WordPress configuration hardening settings"
    ],
    resultSummary: "The cleanup removed confirmed backdoors and added file-level hardening to reduce the same compromise paths from staying exposed.",
    whatToWatchNext: [
      "Whether all administrator accounts and passwords are reset",
      "Whether plugin and theme updates close the original entry point",
      "Whether future scans detect the same payload family"
    ],
    toolsUsed: ["WordPress", "File review", ".htaccess", "Security scanning"],
    tags: ["WordPress", "Malware Cleanup", "Hardening", "Backdoors"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Backdoor Cleanup Fix Note | The Web Guy",
    metaDescription: "Short security fix note about removing WordPress backdoors, malware payloads, and hardening sensitive file access."
  },
  {
    title: "Updated a Static Promotion Page and Chat Script",
    slug: "updated-static-promotion-page-chat-script",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "Landing Pages",
    serviceSlug: "landing-pages",
    excerpt: "A static-site update note about replacing an old promotion, fixing print-page routing, updating share copy, and adding a chat script behind cookie approval.",
    problemSummary: "The static site needed a new promotion to replace an older offer, plus chat support that depended on cookie/script approval before firing publicly.",
    whatIChecked: [
      "Promotion listing order",
      "Print-page route behavior",
      "Text and email share copy",
      "Static HTML pages that needed the chat script",
      "Cookie approval requirements for the chat provider"
    ],
    whatIChanged: [
      "Added the new promotion in the requested position",
      "Removed the old promotion and matching print page",
      "Fixed the print link by routing it through the static print redirect map",
      "Updated promo, print, text, and email share wording",
      "Added the chat script across the static HTML site and documented the remaining cookie approval step"
    ],
    resultSummary: "The promotion flow and print route matched the new offer, and the chat script was installed pending public cookie-script approval.",
    whatToWatchNext: [
      "Whether cookie consent settings allow the chat script to load",
      "Whether old promotion URLs need redirects",
      "Whether future offers update print and share copy together"
    ],
    toolsUsed: ["Static HTML", "Browser testing", "Cookie consent review", "Routing review"],
    tags: ["Landing Pages", "Static Site", "Promotions", "Chat Script"],
    relatedServices: ["landing-pages", "website-fixes", "react-static-sites"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Static Promotion Page Fix Note | The Web Guy",
    metaDescription: "Short landing page fix note about updating a static promotion page, print route, share copy, and chat script."
  },
  {
    title: "Repaired Custom Permalinks for Location-Based Service Pages",
    slug: "repaired-custom-permalinks-location-based-service-pages",
    date: "2026-06-15",
    displayDate: "June 15, 2026",
    lastUpdated: null,
    category: "WordPress Support",
    serviceSlug: "wordpress-support",
    excerpt: "A WordPress note about investigating location-based page hierarchy, building an admin linking utility, and resolving custom permalink 404s.",
    problemSummary: "New location-based service pages needed to resolve through a custom URL structure, but normal page parent fields did not explain or repair the relationship.",
    whatIChecked: [
      "WordPress dashboard page settings",
      "Elementor page settings",
      "Custom post type entries and ACF fields",
      "SEO plugin settings, snippets, child theme files, and plugin-accessible files",
      "REST API data for working pages"
    ],
    whatIChanged: [
      "Confirmed the builder was not controlling the parent and page hierarchy",
      "Identified that normal pages were linked to location records through their parent value",
      "Built a custom admin utility to match unparented pages with the right location records",
      "Added rewrite and request-resolution logic for the custom URL format",
      "Updated location pages to link visitors to the new child service pages"
    ],
    resultSummary: "Previously failing custom service URLs resolved correctly, and future pages could be linked to their location parent from a safer dashboard tool.",
    whatToWatchNext: [
      "Whether new location pages follow the same parent-linking workflow",
      "Whether rewrite rules need flushed after deployment",
      "Whether canonical URLs and internal links stay aligned"
    ],
    toolsUsed: ["WordPress", "Elementor", "ACF", "REST API"],
    tags: ["WordPress", "Permalinks", "Custom Post Types", "Elementor"],
    relatedServices: ["wordpress-support", "technical-seo-implementation", "landing-pages"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Custom Permalink Fix Note | The Web Guy",
    metaDescription: "Short WordPress support note about repairing custom permalinks for location-based service pages."
  },
  {
    title: "Reviewed Builder-Based Site Performance and Design Constraints",
    slug: "reviewed-builder-based-site-performance-design-constraints",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Page Speed",
    serviceSlug: "site-speed-performance",
    excerpt: "A performance review note about auditing a builder-based WordPress site, tightening visible spacing, and documenting deeper structural speed limits.",
    problemSummary: "The site had design and performance concerns tied to builder output, theme architecture, repeated assets, and main-thread constraints.",
    whatIChecked: [
      "Theme and plugin architecture",
      "Builder-driven layout behavior",
      "Loaded assets and repeated background images",
      "Lighthouse performance and accessibility audit results",
      "Frontend spacing, sizing, and visual consistency"
    ],
    whatIChanged: [
      "Tightened homepage spacing and sizing for a more consistent layout",
      "Identified repeated oversized background image usage",
      "Reviewed main-thread performance constraints",
      "Documented which gains were limited by the current builder and theme structure",
      "Outlined that major Lighthouse improvements would require deeper structural rebuilding"
    ],
    resultSummary: "The immediate layout polish improved while the larger performance limits were documented before overpromising small theme tweaks.",
    whatToWatchNext: [
      "Whether repeated background assets can be replaced or resized",
      "Whether critical pages deserve a lighter rebuild",
      "Whether plugin updates add more global assets"
    ],
    toolsUsed: ["Lighthouse", "WordPress", "Blocksy", "Frontend review"],
    tags: ["Page Speed", "WordPress", "Builder Cleanup", "Performance Review"],
    relatedServices: ["site-speed-performance", "wordpress-support", "website-fixes"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Builder-Based Performance Review Fix Note | The Web Guy",
    metaDescription: "Short page speed note about reviewing a builder-based WordPress site and documenting structural performance constraints."
  },
  {
    title: "Prepared Bulk Location Page Imports and Elementor Templates",
    slug: "prepared-bulk-location-page-imports-elementor-templates",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Landing Pages",
    serviceSlug: "landing-pages",
    excerpt: "A WordPress implementation note about preparing draft location-page imports, metadata, schema, map embeds, and Elementor template JSON for review.",
    problemSummary: "A multi-location page set needed safer import tooling that could create draft pages, preserve metadata, avoid overwriting live slugs, and prepare builder-ready content.",
    whatIChecked: [
      "WordPress export files",
      "Local service and location HTML folders",
      "Available PHP and Node.js import options",
      "Existing live slugs and parent path mappings",
      "Elementor template structure"
    ],
    whatIChanged: [
      "Shifted import tooling to Node.js after PHP access was ruled out",
      "Built draft-only import workflows to avoid overwriting live pages",
      "Generated metadata-only draft imports with schema, map embeds, SEO fields, image IDs, source tracking, and parent IDs",
      "Converted service HTML content into Elementor-compatible JSON outputs",
      "Uploaded generated drafts and reviewed pages individually in the builder"
    ],
    resultSummary: "The location page import became safer and more reviewable, with generated drafts and builder templates prepared before final internal linking and image updates.",
    whatToWatchNext: [
      "Whether generated pages receive final internal links",
      "Whether images are replaced before launch",
      "Whether future imports keep draft-only safeguards"
    ],
    toolsUsed: ["WordPress", "Elementor", "Node.js", "Schema validation"],
    tags: ["WordPress", "Elementor", "Landing Pages", "Bulk Import"],
    relatedServices: ["landing-pages", "wordpress-support", "technical-seo-implementation"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Location Page Import Fix Note | The Web Guy",
    metaDescription: "Short WordPress implementation note about preparing bulk location page imports and Elementor templates."
  },
  {
    title: "Uploaded and Structured Blog Posts With Schema Output",
    slug: "uploaded-structured-blog-posts-schema-output",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Technical SEO",
    serviceSlug: "technical-seo-implementation",
    excerpt: "A WordPress content note about uploading blog posts, matching formatting, configuring metadata, and validating schema output.",
    problemSummary: "The provided blog content needed to be imported into WordPress with consistent formatting, indexable metadata, and working structured data.",
    whatIChecked: [
      "Provided HTML and content package",
      "Existing blog formatting",
      "Slug and canonical requirements",
      "Author, category, and indexation settings",
      "Schema output behavior"
    ],
    whatIChanged: [
      "Uploaded and formatted the blog posts",
      "Matched the existing blog presentation",
      "Configured slugs and canonicals from the provided file naming",
      "Added Open Graph and meta considerations",
      "Resolved schema injection issues by moving schema output through a controlled field and validating it"
    ],
    resultSummary: "The posts were published in a consistent format with metadata and schema output that could be checked cleanly.",
    whatToWatchNext: [
      "Whether future content packages keep consistent naming",
      "Whether schema fields are filled before publishing",
      "Whether indexation settings match the content plan"
    ],
    toolsUsed: ["WordPress", "ACF", "Schema validator", "Content QA"],
    tags: ["Technical SEO", "WordPress", "Schema", "Blog Content"],
    relatedServices: ["technical-seo-implementation", "wordpress-support", "landing-pages"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Blog Schema Upload Fix Note | The Web Guy",
    metaDescription: "Short technical SEO note about uploading WordPress blog content and validating schema output."
  },
  {
    title: "Audited a WordPress Site for Remaining Malware Indicators",
    slug: "audited-wordpress-site-remaining-malware-indicators",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A security audit note about scanning for infected pages, reviewing malware indicators, and identifying where deeper filesystem access was still needed.",
    problemSummary: "After earlier cleanup work, the site still needed a pass for unresolved malware signs and a clear boundary around what could be verified without deeper access.",
    whatIChecked: [
      "Still-infected page indicators",
      "Injected content patterns",
      "Remaining malware signals",
      "Available WordPress-level evidence",
      "Need for deeper filesystem verification"
    ],
    whatIChanged: [
      "Scanned for pages that still appeared infected",
      "Reviewed remaining malware indicators",
      "Checked for unresolved injected content",
      "Documented that FTP or filesystem access was required for a deeper verification pass"
    ],
    resultSummary: "The audit clarified what looked clean from available access and what still required filesystem-level review.",
    whatToWatchNext: [
      "Whether FTP access is available for the next pass",
      "Whether security scans stay quiet after cache clears",
      "Whether suspicious files return after cleanup"
    ],
    toolsUsed: ["WordPress", "Security audit", "Malware scan", "Access review"],
    tags: ["WordPress", "Malware Audit", "Security", "Filesystem Access"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Malware Audit Fix Note | The Web Guy",
    metaDescription: "Short security note about auditing a WordPress site for remaining malware indicators and access needs."
  },
  {
    title: "Migrated Site Content Between Domains Without a Rebuild",
    slug: "migrated-site-content-between-domains-without-rebuild",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Website Fixes",
    serviceSlug: "website-fixes",
    excerpt: "A small migration note about transferring requested site content from an older domain to a newer one and verifying the move.",
    problemSummary: "Content needed to move from one domain to another without turning a small migration request into a larger rebuild.",
    whatIChecked: [
      "Source content on the old domain",
      "Destination page content",
      "Requested transfer scope",
      "Visible output after migration"
    ],
    whatIChanged: [
      "Moved the requested content to the new domain",
      "Checked the destination output",
      "Verified the requested content transfer was complete"
    ],
    resultSummary: "The content moved cleanly and the destination page reflected the requested transfer.",
    whatToWatchNext: [
      "Whether redirects are needed from the old URLs",
      "Whether internal links point to the new domain",
      "Whether metadata should be updated after the content move"
    ],
    toolsUsed: ["Content review", "Browser testing", "Migration QA"],
    tags: ["Website Fixes", "Content Migration", "Domain Move", "QA"],
    relatedServices: ["website-fixes", "landing-pages", "technical-seo-implementation"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Small Content Migration Fix Note | The Web Guy",
    metaDescription: "Short website fix note about migrating content between domains and verifying the transfer."
  },
  {
    title: "Reviewed a WordPress Site for Suspicious Plugin-Like Files",
    slug: "reviewed-wordpress-site-suspicious-plugin-like-files",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A WordPress security note about reviewing a compromised-looking site from dashboard access only and outlining the deeper cleanup path.",
    problemSummary: "The initial access was limited to wp-admin, but suspicious files and theme compromise indicators still needed to be reviewed and documented.",
    whatIChecked: [
      "Available WordPress admin access",
      "Backup plugin export options",
      "Security scan results",
      "Suspicious plugin-like files with misleading names",
      "Active theme compromise indicators"
    ],
    whatIChanged: [
      "Downloaded the available backup for offline review",
      "Started security scanning from the dashboard",
      "Identified suspicious injected files using misleading names",
      "Reviewed active theme compromise indicators",
      "Outlined the clean-file replacement path for core, themes, plugins, permissions, database, and users"
    ],
    resultSummary: "The review established the likely compromise pattern and made clear which cleanup work required FTP or full filesystem access.",
    whatToWatchNext: [
      "Whether full filesystem access is provided",
      "Whether clean core, theme, and plugin copies can replace modified files",
      "Whether user access and database records are reviewed after file cleanup"
    ],
    toolsUsed: ["WordPress", "WPVivid", "Wordfence", "Security review"],
    tags: ["WordPress", "Security Review", "Malware", "Access Limits"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Suspicious WordPress File Review Fix Note | The Web Guy",
    metaDescription: "Short WordPress security note about reviewing suspicious plugin-like files with limited dashboard access."
  },
  {
    title: "Recovered Multiple WordPress Sites After Malware Injection",
    slug: "recovered-multiple-wordpress-sites-after-malware-injection",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Security & Hosting",
    serviceSlug: "security-hosting-reliability",
    excerpt: "A malware recovery note about restoring down sites, removing injected scripts, reviewing suspicious users, replacing core files, and starting hardening.",
    problemSummary: "Multiple WordPress sites were affected by active injection scripts, suspicious admin users, compromised files, and at least one visible down or error state.",
    whatIChecked: [
      "Active injection scripts",
      "Suspicious WordPress administrator users",
      "Modified theme and core files",
      "Downloaded site files scanned locally",
      "Database malware patterns and live security scan results"
    ],
    whatIChanged: [
      "Restored an affected site from a down or error state back to live status",
      "Removed unknown backup or administrator access after review",
      "Replaced compromised WordPress core directories with clean copies where needed",
      "Cleaned injected code patterns from files and database records",
      "Updated a supporting plugin and resolved a related chat widget display issue"
    ],
    resultSummary: "The urgent recovery work brought the affected sites back into a cleaner, usable state and started the post-cleanup hardening path.",
    whatToWatchNext: [
      "Whether all credentials and security salts are rotated",
      "Whether remaining plugins and themes are fully updated",
      "Whether scheduled scans confirm no reinfection"
    ],
    toolsUsed: ["WordPress", "Wordfence", "Local file scanning", "Database scan"],
    tags: ["WordPress", "Malware Recovery", "Security", "Database Cleanup"],
    relatedServices: ["security-hosting-reliability", "wordpress-support", "production-debugging"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "WordPress Malware Recovery Fix Note | The Web Guy",
    metaDescription: "Short security fix note about recovering multiple WordPress sites after malware injection."
  },
  {
    title: "Added Location-Specific Proof Content to Service Pages",
    slug: "added-location-specific-proof-content-service-pages",
    date: "2026-05-26",
    displayDate: "May 26, 2026",
    lastUpdated: null,
    category: "Landing Pages",
    serviceSlug: "landing-pages",
    excerpt: "A landing page implementation note about adding location-specific proof content so the right local item could render on the right pages.",
    problemSummary: "Location pages needed supporting proof content, but the content had to be placed so the correct local item appeared only where it belonged.",
    whatIChecked: [
      "Location page placement requirements",
      "Proof content fields",
      "Page and location matching logic",
      "Frontend rendering expectations"
    ],
    whatIChanged: [
      "Added the requested local proof content",
      "Matched content to the appropriate location pages",
      "Reviewed placement so unrelated locations would not show the wrong proof",
      "Checked that the integration content could render through the existing page setup"
    ],
    resultSummary: "The location pages had targeted proof content ready to support the local page experience.",
    whatToWatchNext: [
      "Whether new locations get matching proof content",
      "Whether empty widget sections stay hidden when no content exists",
      "Whether location matching rules still work after page changes"
    ],
    toolsUsed: ["WordPress", "Widget content review", "Location page QA"],
    tags: ["Landing Pages", "Local Pages", "Proof Content", "Content Setup"],
    relatedServices: ["landing-pages", "wordpress-support", "technical-seo-implementation"],
    screenshot: null,
    screenshotAlt: null,
    metaTitle: "Location Proof Content Fix Note | The Web Guy",
    metaDescription: "Short landing page note about adding location-specific proof content to service pages."
  },
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
