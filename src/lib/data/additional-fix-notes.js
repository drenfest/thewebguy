// Anonymized work summaries from itemized billing records. Dates are note publication dates.
export const additionalFixNotes = [
  {
    "title": "Aligned Conversion Pixels With Different Form Confirmations",
    "slug": "aligned-conversion-pixels-with-different-form-confirmations",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "Tracking needed to account for inline confirmations, thank-you pages and an off-site quote path across separate sites.",
    "problemSummary": "Tracking needed to account for inline confirmations, thank-you pages and an off-site quote path across separate sites.",
    "whatIChecked": [
      "Global pixel placement",
      "Form confirmation types",
      "Script-delay settings and pixel identifiers"
    ],
    "whatIChanged": [
      "Updated pixel placement and identifiers",
      "Connected events to the available confirmation or quote-click behavior",
      "Adjusted delayed-script handling where necessary"
    ],
    "resultSummary": "The billed setup and follow-up work aligned tracking with the available interaction points. An outbound quote click was an intent signal, not proof of an off-site completed lead.",
    "whatToWatchNext": [
      "Keep quote clicks separate from confirmed submissions",
      "Recheck behavior after form or optimization changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Event tracking",
      "Script loading"
    ],
    "tags": [
      "WordPress",
      "Event tracking",
      "Script loading"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Aligned Conversion Pixels With Different Form Confirmations | The Web Guy",
    "metaDescription": "Tracking needed to account for inline confirmations, thank-you pages and an off-site quote path across separate sites."
  },
  {
    "title": "Clarified a Duplicated Homepage Hero Heading",
    "slug": "clarified-duplicated-homepage-hero-heading",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A homepage heading repeated the brand directly below its logo instead of explaining the service.",
    "problemSummary": "A homepage heading repeated the brand directly below its logo instead of explaining the service.",
    "whatIChecked": [
      "Existing hero copy",
      "Requested positioning options"
    ],
    "whatIChanged": [
      "Replaced the repetitive heading with the agreed service-focused wording"
    ],
    "resultSummary": "The homepage opening communicated the service more directly.",
    "whatToWatchNext": [
      "Keep future hero revisions aligned with the actual offer"
    ],
    "toolsUsed": [
      "Content updates"
    ],
    "tags": [
      "Content updates"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Clarified a Duplicated Homepage Hero Heading | The Web Guy",
    "metaDescription": "A homepage heading repeated the brand directly below its logo instead of explaining the service."
  },
  {
    "title": "Unblocked Mobile Hero Actions Covered by Overlays",
    "slug": "unblocked-mobile-hero-actions-covered-by-overlays",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "Cookie and chat overlays intermittently blocked taps on the mobile homepage actions.",
    "problemSummary": "Cookie and chat overlays intermittently blocked taps on the mobile homepage actions.",
    "whatIChecked": [
      "Mobile overlay positions",
      "Hero action tap targets",
      "Follow-up desktop heading presentation"
    ],
    "whatIChanged": [
      "Adjusted the mobile cookie-notice position",
      "Limited the conflicting launcher on the affected view",
      "Completed the related heading-layout follow-up"
    ],
    "resultSummary": "The mobile actions were checked after the overlap repair, with the related desktop adjustment included in the billed follow-up.",
    "whatToWatchNext": [
      "Retest when cookie or chat tools change"
    ],
    "toolsUsed": [
      "WordPress",
      "CSS",
      "Mobile layout"
    ],
    "tags": [
      "WordPress",
      "CSS",
      "Mobile layout"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Unblocked Mobile Hero Actions Covered by Overlays | The Web Guy",
    "metaDescription": "Cookie and chat overlays intermittently blocked taps on the mobile homepage actions."
  },
  {
    "title": "Updated Page Headings and Search Metadata",
    "slug": "updated-page-headings-and-search-metadata",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Home and service pages needed coordinated heading and metadata updates.",
    "problemSummary": "Home and service pages needed coordinated heading and metadata updates.",
    "whatIChecked": [
      "Heading hierarchy",
      "Page metadata",
      "Reported page-editor behavior"
    ],
    "whatIChanged": [
      "Applied the requested heading and metadata revisions",
      "Investigated the editor issue encountered during the work"
    ],
    "resultSummary": "The requested search-facing and visible page updates were completed.",
    "whatToWatchNext": [
      "Review newly edited pages for consistent headings"
    ],
    "toolsUsed": [
      "WordPress",
      "Metadata"
    ],
    "tags": [
      "WordPress",
      "Metadata"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Page Headings and Search Metadata | The Web Guy",
    "metaDescription": "Home and service pages needed coordinated heading and metadata updates."
  },
  {
    "title": "Prevented Missing Gallery Images From Crashing a Page",
    "slug": "prevented-null-gallery-images-from-crashing-page",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "A page returned a white screen when its gallery tried to read a missing image URL.",
    "problemSummary": "A page returned a white screen when its gallery tried to read a missing image URL.",
    "whatIChecked": [
      "Gallery data",
      "Missing image values",
      "Fallback-image behavior"
    ],
    "whatIChanged": [
      "Added guards for invalid gallery entries",
      "Limited fallback handling to missing items"
    ],
    "resultSummary": "The null-image failure was repaired without replacing valid gallery images.",
    "whatToWatchNext": [
      "Check future CMS entries with missing media"
    ],
    "toolsUsed": [
      "CMS",
      "JavaScript",
      "Defensive rendering"
    ],
    "tags": [
      "CMS",
      "JavaScript",
      "Defensive rendering"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Prevented Missing Gallery Images From Crashing a Page | The Web Guy",
    "metaDescription": "A page returned a white screen when its gallery tried to read a missing image URL."
  },
  {
    "title": "Reviewed Embedded-Form Spam Controls and Platform Handoff",
    "slug": "reviewed-embedded-form-spam-controls-and-platform-handoff",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "An embedded form needed spam controls while respecting the form platform’s own delivery and validation behavior.",
    "problemSummary": "An embedded form needed spam controls while respecting the form platform’s own delivery and validation behavior.",
    "whatIChecked": [
      "Spam patterns",
      "Embedded-form constraints",
      "Platform-provided CAPTCHA support"
    ],
    "whatIChanged": [
      "Added the initial client-side protection and field handling",
      "Returned to the platform embed after platform-side protection became available"
    ],
    "resultSummary": "The work ended with platform-managed protection rather than maintaining a competing client-side form layer. It did not establish that all spam was eliminated.",
    "whatToWatchNext": [
      "Monitor legitimate submissions and spam after platform changes"
    ],
    "toolsUsed": [
      "Embedded forms",
      "Validation"
    ],
    "tags": [
      "Embedded forms",
      "Validation"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Reviewed Embedded-Form Spam Controls and Platform Handoff | The Web Guy",
    "metaDescription": "An embedded form needed spam controls while respecting the form platform’s own delivery and validation behavior."
  },
  {
    "title": "Added a Form Success Redirect and Confirmation Page",
    "slug": "added-form-success-redirect-and-confirmation-page",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "Successful form submissions needed a clearer confirmation destination and measurement path.",
    "problemSummary": "Successful form submissions needed a clearer confirmation destination and measurement path.",
    "whatIChecked": [
      "Submission completion flow",
      "Existing site presentation"
    ],
    "whatIChanged": [
      "Added the success redirect after tracking",
      "Matched the confirmation page to the site"
    ],
    "resultSummary": "The form flow gained a dedicated confirmation destination.",
    "whatToWatchNext": [
      "Keep success events tied to actual successful submission"
    ],
    "toolsUsed": [
      "Forms",
      "Conversion tracking"
    ],
    "tags": [
      "Forms",
      "Conversion tracking"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added a Form Success Redirect and Confirmation Page | The Web Guy",
    "metaDescription": "Successful form submissions needed a clearer confirmation destination and measurement path."
  },
  {
    "title": "Built a Service Page From an Existing Template and Review Notes",
    "slug": "built-service-page-from-existing-template-and-review-notes",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A new service page needed clearer scope, suitable imagery and a usable estimate path.",
    "problemSummary": "A new service page needed clearer scope, suitable imagery and a usable estimate path.",
    "whatIChecked": [
      "Existing template",
      "Requested service boundaries",
      "Imagery and form placement"
    ],
    "whatIChanged": [
      "Built the service, process and FAQ sections",
      "Improved imagery and removed redundant blocks",
      "Revised the copy after scope clarification"
    ],
    "resultSummary": "The page work incorporated the requested focus and follow-up revisions.",
    "whatToWatchNext": [
      "Keep future revisions within the approved service scope"
    ],
    "toolsUsed": [
      "WordPress",
      "Page templates",
      "Content"
    ],
    "tags": [
      "WordPress",
      "Page templates",
      "Content"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Built a Service Page From an Existing Template and Review Notes | The Web Guy",
    "metaDescription": "A new service page needed clearer scope, suitable imagery and a usable estimate path."
  },
  {
    "title": "Added an Owner Message to Homepage Content",
    "slug": "added-owner-message-to-homepage-content",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A homepage needed an approved owner message and supporting image placed within its existing content flow.",
    "problemSummary": "A homepage needed an approved owner message and supporting image placed within its existing content flow.",
    "whatIChecked": [
      "Provided message and image reference",
      "Requested insertion point"
    ],
    "whatIChanged": [
      "Added the supplied content section",
      "Preserved the surrounding calls to action"
    ],
    "resultSummary": "The approved content was added to the requested homepage position.",
    "whatToWatchNext": [
      "Review message accuracy when the business changes"
    ],
    "toolsUsed": [
      "Content updates"
    ],
    "tags": [
      "Content updates"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added an Owner Message to Homepage Content | The Web Guy",
    "metaDescription": "A homepage needed an approved owner message and supporting image placed within its existing content flow."
  },
  {
    "title": "Connected a Form Webhook With Campaign-Source Mapping",
    "slug": "connected-form-webhook-with-campaign-source-mapping",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "A form needed to send its fields and campaign-source classification to a receiving system.",
    "problemSummary": "A form needed to send its fields and campaign-source classification to a receiving system.",
    "whatIChecked": [
      "Form webhook settings",
      "Required authentication and payload fields",
      "License dependency"
    ],
    "whatIChanged": [
      "Configured the authenticated webhook",
      "Mapped paid-traffic source values and the default source",
      "Completed setup after the license blocker was resolved"
    ],
    "resultSummary": "The requested form-webhook configuration and source mapping were completed.",
    "whatToWatchNext": [
      "Verify destination records when fields or source rules change"
    ],
    "toolsUsed": [
      "WordPress",
      "Webhooks",
      "Field mapping"
    ],
    "tags": [
      "WordPress",
      "Webhooks",
      "Field mapping"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Connected a Form Webhook With Campaign-Source Mapping | The Web Guy",
    "metaDescription": "A form needed to send its fields and campaign-source classification to a receiving system."
  },
  {
    "title": "Completed a Follow-Up Shopify Performance and Local-Page Review",
    "slug": "completed-follow-up-shopify-performance-and-local-page-review",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Page Speed",
    "serviceSlug": "ecommerce-support",
    "excerpt": "A storefront needed further support after separate accessibility changes and earlier speed work.",
    "problemSummary": "A storefront needed further support after separate accessibility changes and earlier speed work.",
    "whatIChecked": [
      "Updated theme and accessibility context",
      "Local-page behavior",
      "Remaining storefront performance concerns"
    ],
    "whatIChanged": [
      "Completed the follow-up investigation and support block"
    ],
    "resultSummary": "The additional support was billed separately from initial staging optimization and later merge work.",
    "whatToWatchNext": [
      "Recheck store behavior after subsequent theme changes"
    ],
    "toolsUsed": [
      "Shopify",
      "Performance review"
    ],
    "tags": [
      "Shopify",
      "Performance review"
    ],
    "relatedServices": [
      "ecommerce-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Completed a Follow-Up Shopify Performance and Local-Page Review | The Web Guy",
    "metaDescription": "A storefront needed further support after separate accessibility changes and earlier speed work."
  },
  {
    "title": "Restored Homepage Rendering After a Loading Failure",
    "slug": "restored-homepage-rendering-after-loading-failure",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Production Debugging",
    "serviceSlug": "website-fixes",
    "excerpt": "A homepage was not rendering correctly in the affected browser.",
    "problemSummary": "A homepage was not rendering correctly in the affected browser.",
    "whatIChecked": [
      "Live page state",
      "Front-end output",
      "Reported loading behavior"
    ],
    "whatIChanged": [
      "Investigated and cleared the visible loading failure",
      "Retested the homepage"
    ],
    "resultSummary": "The homepage loaded correctly after the repair.",
    "whatToWatchNext": [
      "Monitor recurrence and retain reproduction details"
    ],
    "toolsUsed": [
      "Browser debugging",
      "WordPress"
    ],
    "tags": [
      "Browser debugging",
      "WordPress"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Restored Homepage Rendering After a Loading Failure | The Web Guy",
    "metaDescription": "A homepage was not rendering correctly in the affected browser."
  },
  {
    "title": "Corrected Sitewide Phone Copy Without Overwriting Local Data",
    "slug": "corrected-sitewide-phone-copy-without-overwriting-local-data",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "The general contact number was inconsistent while some local profile references needed to remain unchanged.",
    "problemSummary": "The general contact number was inconsistent while some local profile references needed to remain unchanged.",
    "whatIChecked": [
      "Page content",
      "Metadata",
      "Context-specific local references"
    ],
    "whatIChanged": [
      "Corrected the general phone references",
      "Preserved appropriate local data",
      "Noted the search recrawl follow-up"
    ],
    "resultSummary": "The affected general phone references were updated without blindly replacing local profile values.",
    "whatToWatchNext": [
      "Check search snippets after recrawling"
    ],
    "toolsUsed": [
      "WordPress",
      "Metadata",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Metadata",
      "Content audit"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Corrected Sitewide Phone Copy Without Overwriting Local Data | The Web Guy",
    "metaDescription": "The general contact number was inconsistent while some local profile references needed to remain unchanged."
  },
  {
    "title": "Replaced Outdated Plan Sections Across Location Pages",
    "slug": "replaced-outdated-plan-sections-across-location-pages",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Location pages still displayed an older service-plan layout.",
    "problemSummary": "Location pages still displayed an older service-plan layout.",
    "whatIChecked": [
      "Current approved plan design",
      "Affected page sections"
    ],
    "whatIChanged": [
      "Replaced the outdated sections with the current layout",
      "Reviewed the affected pages"
    ],
    "resultSummary": "The location pages used the updated plan presentation.",
    "whatToWatchNext": [
      "Update shared sections when plans change"
    ],
    "toolsUsed": [
      "WordPress",
      "Page templates"
    ],
    "tags": [
      "WordPress",
      "Page templates"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Replaced Outdated Plan Sections Across Location Pages | The Web Guy",
    "metaDescription": "Location pages still displayed an older service-plan layout."
  },
  {
    "title": "Updated Office-Visit Details Across Site Content",
    "slug": "updated-office-visit-details-across-site-content",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Homepage and location content needed revised office-visit information.",
    "problemSummary": "Homepage and location content needed revised office-visit information.",
    "whatIChecked": [
      "Supplied office list",
      "Existing contact content",
      "Template output"
    ],
    "whatIChanged": [
      "Corrected the relevant contact details",
      "Prepared the theme and template changes for review"
    ],
    "resultSummary": "The requested contact-information changes were prepared for review.",
    "whatToWatchNext": [
      "Confirm approval before treating prepared changes as published"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Office-Visit Details Across Site Content | The Web Guy",
    "metaDescription": "Homepage and location content needed revised office-visit information."
  },
  {
    "title": "Updated Service Navigation and Booking Actions",
    "slug": "updated-service-navigation-and-booking-actions",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "A service navigation menu and booking paths needed coordinated changes.",
    "problemSummary": "A service navigation menu and booking paths needed coordinated changes.",
    "whatIChecked": [
      "Existing dropdown links",
      "Parent-page navigation",
      "Embedded booking and custom-button behavior"
    ],
    "whatIChanged": [
      "Adjusted the service menu",
      "Replaced a booking embed with a button",
      "Added the requested service sections and links"
    ],
    "resultSummary": "The requested navigation and booking changes were completed as one support block.",
    "whatToWatchNext": [
      "Retest booking actions after widget changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Navigation",
      "Forms"
    ],
    "tags": [
      "WordPress",
      "Navigation",
      "Forms"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Service Navigation and Booking Actions | The Web Guy",
    "metaDescription": "A service navigation menu and booking paths needed coordinated changes."
  },
  {
    "title": "Reset Scroll on Navigation and Updated a Homepage Section",
    "slug": "reset-scroll-on-navigation-and-updated-homepage-section",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Production Debugging",
    "serviceSlug": "react-static-sites",
    "excerpt": "Menu navigation retained the previous page’s scroll position instead of starting the new page at the top.",
    "problemSummary": "Menu navigation retained the previous page’s scroll position instead of starting the new page at the top.",
    "whatIChecked": [
      "Router scroll behavior",
      "Fragment URLs",
      "Related homepage section placement"
    ],
    "whatIChanged": [
      "Applied a centralized scroll reset",
      "Completed the requested homepage section move"
    ],
    "resultSummary": "Navigation behavior was repaired and the related content placement was updated.",
    "whatToWatchNext": [
      "Recheck browser back navigation and future route changes"
    ],
    "toolsUsed": [
      "Routing",
      "JavaScript"
    ],
    "tags": [
      "Routing",
      "JavaScript"
    ],
    "relatedServices": [
      "react-static-sites"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Reset Scroll on Navigation and Updated a Homepage Section | The Web Guy",
    "metaDescription": "Menu navigation retained the previous page’s scroll position instead of starting the new page at the top."
  },
  {
    "title": "Restored Access After a Hosting Takedown",
    "slug": "restored-access-after-hosting-takedown",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "Related websites were inaccessible following a hosting action.",
    "problemSummary": "Related websites were inaccessible following a hosting action.",
    "whatIChecked": [
      "Affected hosting state",
      "Website availability"
    ],
    "whatIChanged": [
      "Restored access to the affected sites",
      "Checked that they were reachable again"
    ],
    "resultSummary": "Access was restored. The billing entry does not establish a broader security investigation.",
    "whatToWatchNext": [
      "Review the hosting incident separately if it recurs"
    ],
    "toolsUsed": [
      "Hosting",
      "WordPress"
    ],
    "tags": [
      "Hosting",
      "WordPress"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Restored Access After a Hosting Takedown | The Web Guy",
    "metaDescription": "Related websites were inaccessible following a hosting action."
  },
  {
    "title": "Updated an Embedded Instant-Quote Flow",
    "slug": "updated-embedded-instant-quote-flow",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "An instant-quote flow needed to match the established CRM lead-capture setup.",
    "problemSummary": "An instant-quote flow needed to match the established CRM lead-capture setup.",
    "whatIChecked": [
      "Embedded quote form",
      "Lead-field handling",
      "Static-site form behavior"
    ],
    "whatIChanged": [
      "Updated the quote flow and related field handling"
    ],
    "resultSummary": "The form behavior was aligned with the existing lead-capture setup.",
    "whatToWatchNext": [
      "Verify destination records after future field changes"
    ],
    "toolsUsed": [
      "Embedded forms",
      "Static site"
    ],
    "tags": [
      "Embedded forms",
      "Static site"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated an Embedded Instant-Quote Flow | The Web Guy",
    "metaDescription": "An instant-quote flow needed to match the established CRM lead-capture setup."
  },
  {
    "title": "Refreshed Project Photography and Portfolio Pages",
    "slug": "refreshed-project-photography-and-portfolio-pages",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "The site needed more relevant project imagery and a clearer portfolio presentation.",
    "problemSummary": "The site needed more relevant project imagery and a clearer portfolio presentation.",
    "whatIChecked": [
      "Provided photographs",
      "Service-card imagery",
      "Location-gallery layouts"
    ],
    "whatIChanged": [
      "Optimized and placed approved photographs",
      "Built the portfolio gallery",
      "Updated responsive imagery across the affected pages"
    ],
    "resultSummary": "The requested photography and portfolio refresh was completed.",
    "whatToWatchNext": [
      "Keep image descriptions and galleries current"
    ],
    "toolsUsed": [
      "Image optimization",
      "Responsive galleries"
    ],
    "tags": [
      "Image optimization",
      "Responsive galleries"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Refreshed Project Photography and Portfolio Pages | The Web Guy",
    "metaDescription": "The site needed more relevant project imagery and a clearer portfolio presentation."
  },
  {
    "title": "Added Missing Image Descriptions in a Media Library",
    "slug": "added-missing-image-descriptions-in-media-library",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Uploaded media included images without useful descriptions.",
    "problemSummary": "Uploaded media included images without useful descriptions.",
    "whatIChecked": [
      "Existing media assets",
      "Missing alternative text"
    ],
    "whatIChanged": [
      "Reviewed the media library",
      "Added descriptions to the images missing them"
    ],
    "resultSummary": "The reviewed assets gained descriptive text. No ranking improvement is inferred.",
    "whatToWatchNext": [
      "Keep decorative images and meaningful content images distinct"
    ],
    "toolsUsed": [
      "WordPress",
      "Image accessibility"
    ],
    "tags": [
      "WordPress",
      "Image accessibility"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added Missing Image Descriptions in a Media Library | The Web Guy",
    "metaDescription": "Uploaded media included images without useful descriptions."
  },
  {
    "title": "Completed Separate WordPress Maintenance Update Passes",
    "slug": "completed-separate-wordpress-maintenance-update-passes",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-maintenance",
    "excerpt": "Several separate WordPress installations needed requested update and cache follow-up work.",
    "problemSummary": "Several separate WordPress installations needed requested update and cache follow-up work.",
    "whatIChecked": [
      "Requested plugin/core updates",
      "Reported editor errors on an affected site",
      "Remaining host-cache dependencies"
    ],
    "whatIChanged": [
      "Completed the recorded update passes",
      "Cleared cache where included",
      "Documented cache follow-up where still needed"
    ],
    "resultSummary": "The separate maintenance entries were completed; the aggregate is not a per-site plan price.",
    "whatToWatchNext": [
      "Retest important site functions after future updates"
    ],
    "toolsUsed": [
      "WordPress",
      "Plugin updates"
    ],
    "tags": [
      "WordPress",
      "Plugin updates"
    ],
    "relatedServices": [
      "wordpress-maintenance"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Completed Separate WordPress Maintenance Update Passes | The Web Guy",
    "metaDescription": "Several separate WordPress installations needed requested update and cache follow-up work."
  },
  {
    "title": "Matched Service Photography and Refreshed Trust Badges",
    "slug": "matched-service-photography-and-refreshed-trust-badges",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "Service pages reused unsuitable photography and a homepage proof section needed updating.",
    "problemSummary": "Service pages reused unsuitable photography and a homepage proof section needed updating.",
    "whatIChecked": [
      "Provided photographs",
      "Service-page context",
      "Existing trust badges"
    ],
    "whatIChanged": [
      "Placed photographs by service relevance",
      "Updated the approved proof items",
      "Removed an outdated badge"
    ],
    "resultSummary": "The requested photography and proof-section changes were completed.",
    "whatToWatchNext": [
      "Review badge accuracy and image relevance over time"
    ],
    "toolsUsed": [
      "WordPress",
      "Images",
      "Content"
    ],
    "tags": [
      "WordPress",
      "Images",
      "Content"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Matched Service Photography and Refreshed Trust Badges | The Web Guy",
    "metaDescription": "Service pages reused unsuitable photography and a homepage proof section needed updating."
  },
  {
    "title": "Updated Footer Service Links Through CMS Settings",
    "slug": "updated-footer-service-links-through-cms-settings",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Footer service-area labels and destinations needed changes without a hardcoded duplicate list.",
    "problemSummary": "Footer service-area labels and destinations needed changes without a hardcoded duplicate list.",
    "whatIChecked": [
      "CMS footer settings",
      "Existing labels and destinations"
    ],
    "whatIChanged": [
      "Updated the footer data",
      "Applied narrowly scoped label handling"
    ],
    "resultSummary": "The footer used the requested service-area names and destinations.",
    "whatToWatchNext": [
      "Keep footer links aligned with current service coverage"
    ],
    "toolsUsed": [
      "CMS",
      "Internal links"
    ],
    "tags": [
      "CMS",
      "Internal links"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Footer Service Links Through CMS Settings | The Web Guy",
    "metaDescription": "Footer service-area labels and destinations needed changes without a hardcoded duplicate list."
  },
  {
    "title": "Published an Additional Location and Service-Page Set",
    "slug": "published-additional-location-and-service-page-set",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "An additional location needed its associated service pages assembled and reviewed.",
    "problemSummary": "An additional location needed its associated service pages assembled and reviewed.",
    "whatIChecked": [
      "Requested location/service set",
      "Page readiness before handoff"
    ],
    "whatIChanged": [
      "Added the requested pages",
      "Completed the final review pass"
    ],
    "resultSummary": "The recorded page set was live and ready at handoff.",
    "whatToWatchNext": [
      "Verify future related-page links when adding locations"
    ],
    "toolsUsed": [
      "WordPress",
      "Location pages"
    ],
    "tags": [
      "WordPress",
      "Location pages"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published an Additional Location and Service-Page Set | The Web Guy",
    "metaDescription": "An additional location needed its associated service pages assembled and reviewed."
  },
  {
    "title": "Reviewed a Page-Builder License Blocking the Blog Workflow",
    "slug": "reviewed-page-builder-license-blocking-blog-workflow",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "The blog workflow was blocked by a page-builder license mismatch and outdated plugins.",
    "problemSummary": "The blog workflow was blocked by a page-builder license mismatch and outdated plugins.",
    "whatIChecked": [
      "License state",
      "Plugin versions",
      "Blog-widget availability"
    ],
    "whatIChanged": [
      "Updated the outdated plugins",
      "Identified the purchasing-account reactivation dependency",
      "Requested workflow recheck"
    ],
    "resultSummary": "Plugin updates were completed; license reactivation still depended on the purchasing account.",
    "whatToWatchNext": [
      "Confirm the license and workflow after account access is restored"
    ],
    "toolsUsed": [
      "WordPress",
      "Page builder"
    ],
    "tags": [
      "WordPress",
      "Page builder"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Reviewed a Page-Builder License Blocking the Blog Workflow | The Web Guy",
    "metaDescription": "The blog workflow was blocked by a page-builder license mismatch and outdated plugins."
  },
  {
    "title": "Updated Service-Area Pages and Their Replacement-URL Plan",
    "slug": "updated-service-area-pages-and-replacement-url-plan",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Existing service-area pages needed different coverage and a plan for their former URLs.",
    "problemSummary": "Existing service-area pages needed different coverage and a plan for their former URLs.",
    "whatIChecked": [
      "Existing page targets",
      "Replacement content",
      "Indexed URL and internal-link context"
    ],
    "whatIChanged": [
      "Updated the requested page content",
      "Reviewed URL replacement and internal-link handling"
    ],
    "resultSummary": "The content work was completed and the replacement approach was reviewed; the invoice does not independently confirm every redirect was deployed.",
    "whatToWatchNext": [
      "Verify redirect implementation before retiring old URLs"
    ],
    "toolsUsed": [
      "WordPress",
      "Internal links"
    ],
    "tags": [
      "WordPress",
      "Internal links"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Service-Area Pages and Their Replacement-URL Plan | The Web Guy",
    "metaDescription": "Existing service-area pages needed different coverage and a plan for their former URLs."
  },
  {
    "title": "Updated Form Recipients and Exported Submission History",
    "slug": "updated-form-recipients-and-exported-submission-history",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "Form recipients needed correction and recent stored submissions were requested for review.",
    "problemSummary": "Form recipients needed correction and recent stored submissions were requested for review.",
    "whatIChecked": [
      "Existing contact email",
      "Notification recipients",
      "Stored submission history"
    ],
    "whatIChanged": [
      "Updated the approved recipients",
      "Removed unapproved addresses",
      "Exported the requested history privately"
    ],
    "resultSummary": "The recipient configuration and submission-history export were completed.",
    "whatToWatchNext": [
      "Check notifications after recipient changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Forms"
    ],
    "tags": [
      "WordPress",
      "Forms"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Form Recipients and Exported Submission History | The Web Guy",
    "metaDescription": "Form recipients needed correction and recent stored submissions were requested for review."
  },
  {
    "title": "Updated a Sticky Header and Brand Display",
    "slug": "updated-sticky-header-and-brand-display",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "The header needed persistent visibility and a stronger approved logo presentation.",
    "problemSummary": "The header needed persistent visibility and a stronger approved logo presentation.",
    "whatIChecked": [
      "Header scroll behavior",
      "Logo display"
    ],
    "whatIChanged": [
      "Updated sticky-header behavior",
      "Adjusted the logo presentation"
    ],
    "resultSummary": "The requested header and branding changes were completed.",
    "whatToWatchNext": [
      "Retest menu and content overlap on small screens"
    ],
    "toolsUsed": [
      "CSS",
      "Static site"
    ],
    "tags": [
      "CSS",
      "Static site"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated a Sticky Header and Brand Display | The Web Guy",
    "metaDescription": "The header needed persistent visibility and a stronger approved logo presentation."
  },
  {
    "title": "Limited a Location Widget to Its Intended Page",
    "slug": "limited-location-widget-to-its-intended-page",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A map-and-review widget was appearing more broadly than intended.",
    "problemSummary": "A map-and-review widget was appearing more broadly than intended.",
    "whatIChecked": [
      "Page-pattern rules",
      "Homepage widget output"
    ],
    "whatIChanged": [
      "Adjusted the affected pattern",
      "Kept the map limited to the intended location",
      "Restored the homepage review-only presentation"
    ],
    "resultSummary": "The widget rules reflected the requested page-specific behavior.",
    "whatToWatchNext": [
      "Review rules when duplicating location templates"
    ],
    "toolsUsed": [
      "WordPress",
      "Widget rules"
    ],
    "tags": [
      "WordPress",
      "Widget rules"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Limited a Location Widget to Its Intended Page | The Web Guy",
    "metaDescription": "A map-and-review widget was appearing more broadly than intended."
  },
  {
    "title": "Added and Refined Cookie-Notice Copy",
    "slug": "added-and-refined-cookie-notice-copy",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "The website needed the requested cookie notice and a shorter approved message.",
    "problemSummary": "The website needed the requested cookie notice and a shorter approved message.",
    "whatIChecked": [
      "Requested notice behavior",
      "Follow-up copy instructions"
    ],
    "whatIChanged": [
      "Added the notice",
      "Revised its wording after review"
    ],
    "resultSummary": "The requested notice was added. This work alone is not a compliance certification.",
    "whatToWatchNext": [
      "Review actual consent behavior separately from banner wording"
    ],
    "toolsUsed": [
      "WordPress",
      "Site notice"
    ],
    "tags": [
      "WordPress",
      "Site notice"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added and Refined Cookie-Notice Copy | The Web Guy",
    "metaDescription": "The website needed the requested cookie notice and a shorter approved message."
  },
  {
    "title": "Removed an Unwanted Security-Style Message From a Quote Path",
    "slug": "removed-unwanted-security-style-message-from-quote-path",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "Visitors trying to request a quote encountered an unwanted security-style message.",
    "problemSummary": "Visitors trying to request a quote encountered an unwanted security-style message.",
    "whatIChecked": [
      "Reported quote flow",
      "Malware/security symptom"
    ],
    "whatIChanged": [
      "Removed the recorded issue",
      "Reviewed the customer-reported path afterward"
    ],
    "resultSummary": "The reported issue was resolved in the reviewed flow.",
    "whatToWatchNext": [
      "Monitor recurrence and investigate related indicators if needed"
    ],
    "toolsUsed": [
      "WordPress",
      "Quote flow"
    ],
    "tags": [
      "WordPress",
      "Quote flow"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Removed an Unwanted Security-Style Message From a Quote Path | The Web Guy",
    "metaDescription": "Visitors trying to request a quote encountered an unwanted security-style message."
  },
  {
    "title": "Verified a Favicon Before Requesting Search Recrawl",
    "slug": "verified-favicon-before-requesting-search-recrawl",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "A search-result icon appeared wrong even though the site might already serve the correct favicon.",
    "problemSummary": "A search-result icon appeared wrong even though the site might already serve the correct favicon.",
    "whatIChecked": [
      "Provided icon asset",
      "Site-served favicon"
    ],
    "whatIChanged": [
      "Verified the favicon setup",
      "Identified recrawling as the remaining follow-up rather than another site change"
    ],
    "resultSummary": "The site-side icon was confirmed; the search-result appearance remained outside immediate site control.",
    "whatToWatchNext": [
      "Review search appearance after recrawling"
    ],
    "toolsUsed": [
      "Favicon",
      "Search review"
    ],
    "tags": [
      "Favicon",
      "Search review"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Verified a Favicon Before Requesting Search Recrawl | The Web Guy",
    "metaDescription": "A search-result icon appeared wrong even though the site might already serve the correct favicon."
  },
  {
    "title": "Traced Missing Form Notifications to an Email Setting",
    "slug": "traced-missing-form-notifications-to-email-setting",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "Form submissions were reportedly missing from the recipient inbox.",
    "problemSummary": "Form submissions were reportedly missing from the recipient inbox.",
    "whatIChecked": [
      "Notification settings",
      "Configured email value"
    ],
    "whatIChanged": [
      "Identified the improper notification email value"
    ],
    "resultSummary": "The investigation located the configuration issue; the entry does not record a full delivery-verification result.",
    "whatToWatchNext": [
      "Test actual receipt after correcting the setting"
    ],
    "toolsUsed": [
      "WordPress",
      "Forms"
    ],
    "tags": [
      "WordPress",
      "Forms"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Traced Missing Form Notifications to an Email Setting | The Web Guy",
    "metaDescription": "Form submissions were reportedly missing from the recipient inbox."
  },
  {
    "title": "Created Linked Service-Area Pages From an Existing Layout",
    "slug": "created-linked-service-area-pages-from-existing-layout",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "New service-area pages needed to fit the existing layout and be discoverable from the parent page.",
    "problemSummary": "New service-area pages needed to fit the existing layout and be discoverable from the parent page.",
    "whatIChecked": [
      "Existing reference layout",
      "Requested service areas",
      "Parent-page links"
    ],
    "whatIChanged": [
      "Created the requested pages",
      "Linked them from the service-area hub"
    ],
    "resultSummary": "The requested page and linking work was completed.",
    "whatToWatchNext": [
      "Keep new pages distinct and linked from relevant content"
    ],
    "toolsUsed": [
      "WordPress",
      "Page templates"
    ],
    "tags": [
      "WordPress",
      "Page templates"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Created Linked Service-Area Pages From an Existing Layout | The Web Guy",
    "metaDescription": "New service-area pages needed to fit the existing layout and be discoverable from the parent page."
  },
  {
    "title": "Repaired Form Notifications and Added an Address Field",
    "slug": "repaired-form-notifications-and-added-address-field",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "Missing form notifications and a missing address field were disrupting inquiry handling.",
    "problemSummary": "Missing form notifications and a missing address field were disrupting inquiry handling.",
    "whatIChecked": [
      "Requested recipient",
      "Form delivery",
      "Address-field requirements"
    ],
    "whatIChanged": [
      "Tested notification delivery",
      "Added the address field",
      "Confirmed submissions were arriving without the reported spam placement"
    ],
    "resultSummary": "The receiving team confirmed the submissions were coming through after the work.",
    "whatToWatchNext": [
      "Continue monitoring receipt and spam filtering"
    ],
    "toolsUsed": [
      "WordPress",
      "Forms"
    ],
    "tags": [
      "WordPress",
      "Forms"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Repaired Form Notifications and Added an Address Field | The Web Guy",
    "metaDescription": "Missing form notifications and a missing address field were disrupting inquiry handling."
  },
  {
    "title": "Investigated Form Events With Incomplete Analytics Access",
    "slug": "investigated-form-events-with-incomplete-analytics-access",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "Submitted forms were not appearing in the analytics property.",
    "problemSummary": "Submitted forms were not appearing in the analytics property.",
    "whatIChecked": [
      "Provided tag-manager access",
      "Form-event path",
      "Missing property access"
    ],
    "whatIChanged": [
      "Investigated the tag setup",
      "Documented that property access was needed for deeper verification"
    ],
    "resultSummary": "The issue remained unverified at the analytics destination; this was paid investigation, not a confirmed conversion-tracking repair.",
    "whatToWatchNext": [
      "Resume verification after property access is provided"
    ],
    "toolsUsed": [
      "GTM",
      "GA4"
    ],
    "tags": [
      "GTM",
      "GA4"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Investigated Form Events With Incomplete Analytics Access | The Web Guy",
    "metaDescription": "Submitted forms were not appearing in the analytics property."
  },
  {
    "title": "Merged Shopify Speed and Accessibility Workstreams",
    "slug": "merged-shopify-speed-and-accessibility-workstreams",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Page Speed",
    "serviceSlug": "ecommerce-support",
    "excerpt": "Separate theme changes risked overwriting performance and accessibility fixes.",
    "problemSummary": "Separate theme changes risked overwriting performance and accessibility fixes.",
    "whatIChecked": [
      "Active theme changes",
      "Conflicts between workstreams",
      "Remaining reported errors"
    ],
    "whatIChanged": [
      "Merged the separate workstreams",
      "Resolved the recorded conflicts",
      "Completed follow-up speed/accessibility adjustments"
    ],
    "resultSummary": "The merge and follow-up work were completed as separate billed blocks, without claiming a new performance score.",
    "whatToWatchNext": [
      "Compare future merges against the approved changes"
    ],
    "toolsUsed": [
      "Shopify",
      "Theme merge",
      "Performance"
    ],
    "tags": [
      "Shopify",
      "Theme merge",
      "Performance"
    ],
    "relatedServices": [
      "ecommerce-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Merged Shopify Speed and Accessibility Workstreams | The Web Guy",
    "metaDescription": "Separate theme changes risked overwriting performance and accessibility fixes."
  },
  {
    "title": "Styled an Embedded Proof Section to Match Its Page",
    "slug": "styled-embedded-proof-section-to-match-page",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "An embedded proof widget needed to fit the existing page design.",
    "problemSummary": "An embedded proof widget needed to fit the existing page design.",
    "whatIChecked": [
      "Existing section style",
      "Widget placement"
    ],
    "whatIChanged": [
      "Added and styled the requested widget section"
    ],
    "resultSummary": "The embed fit the surrounding page presentation.",
    "whatToWatchNext": [
      "Retest after widget markup changes"
    ],
    "toolsUsed": [
      "CSS",
      "Embeds"
    ],
    "tags": [
      "CSS",
      "Embeds"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Styled an Embedded Proof Section to Match Its Page | The Web Guy",
    "metaDescription": "An embedded proof widget needed to fit the existing page design."
  },
  {
    "title": "Combined Page-Speed Cleanup With Content Updates",
    "slug": "combined-page-speed-cleanup-with-content-updates",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Page Speed",
    "serviceSlug": "site-speed-performance",
    "excerpt": "A site needed performance cleanup alongside requested content changes.",
    "problemSummary": "A site needed performance cleanup alongside requested content changes.",
    "whatIChecked": [
      "Page-speed concerns",
      "Requested content modifications"
    ],
    "whatIChanged": [
      "Completed the performance and front-end content support block"
    ],
    "resultSummary": "The requested work was completed. The billing entry does not support a specific score or traffic claim.",
    "whatToWatchNext": [
      "Measure future performance changes under comparable conditions"
    ],
    "toolsUsed": [
      "Performance",
      "Content"
    ],
    "tags": [
      "Performance",
      "Content"
    ],
    "relatedServices": [
      "site-speed-performance"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Combined Page-Speed Cleanup With Content Updates | The Web Guy",
    "metaDescription": "A site needed performance cleanup alongside requested content changes."
  },
  {
    "title": "Completed a Follow-Up Static-Site Support Pass",
    "slug": "completed-follow-up-static-site-support-pass",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "ongoing-webmaster-support",
    "excerpt": "A previously built site needed a separate follow-up support pass.",
    "problemSummary": "A previously built site needed a separate follow-up support pass.",
    "whatIChecked": [
      "Requested follow-up changes"
    ],
    "whatIChanged": [
      "Completed the recorded website updates"
    ],
    "resultSummary": "The follow-up work was billed separately from the earlier build. The invoice does not itemize individual edits.",
    "whatToWatchNext": [
      "Keep later requests and scope recorded separately"
    ],
    "toolsUsed": [
      "Static site"
    ],
    "tags": [
      "Static site"
    ],
    "relatedServices": [
      "ongoing-webmaster-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Completed a Follow-Up Static-Site Support Pass | The Web Guy",
    "metaDescription": "A previously built site needed a separate follow-up support pass."
  },
  {
    "title": "Updated Plugins and Site Email References",
    "slug": "updated-plugins-and-site-email-references",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "A website needed plugin maintenance and replacement of an old contact email.",
    "problemSummary": "A website needed plugin maintenance and replacement of an old contact email.",
    "whatIChecked": [
      "Plugin updates",
      "Visible email references",
      "Footer output"
    ],
    "whatIChanged": [
      "Updated the plugins",
      "Changed the approved contact email",
      "Corrected the footer after follow-up review"
    ],
    "resultSummary": "The update and contact-reference work was completed.",
    "whatToWatchNext": [
      "Check shared templates when contact details change"
    ],
    "toolsUsed": [
      "WordPress",
      "Plugin updates"
    ],
    "tags": [
      "WordPress",
      "Plugin updates"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Plugins and Site Email References | The Web Guy",
    "metaDescription": "A website needed plugin maintenance and replacement of an old contact email."
  },
  {
    "title": "Installed a Supplied GA4 Tag on a Static Site",
    "slug": "installed-supplied-ga4-tag-on-static-site",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "ga4-gtm-setup-help",
    "excerpt": "A site needed its supplied analytics tag installed.",
    "problemSummary": "A site needed its supplied analytics tag installed.",
    "whatIChecked": [
      "Provided tag identifier",
      "Existing site setup"
    ],
    "whatIChanged": [
      "Installed the supplied tag",
      "Confirmed setup was in place"
    ],
    "resultSummary": "The tag setup was completed; this is not a full event or attribution audit.",
    "whatToWatchNext": [
      "Verify needed events and consent behavior separately"
    ],
    "toolsUsed": [
      "GA4",
      "Static site"
    ],
    "tags": [
      "GA4",
      "Static site"
    ],
    "relatedServices": [
      "ga4-gtm-setup-help"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Installed a Supplied GA4 Tag on a Static Site | The Web Guy",
    "metaDescription": "A site needed its supplied analytics tag installed."
  },
  {
    "title": "Connected a Site to Its Supplied Analytics Property",
    "slug": "connected-site-to-supplied-analytics-property",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "A website needed connection to an existing analytics property.",
    "problemSummary": "A website needed connection to an existing analytics property.",
    "whatIChecked": [
      "Provided analytics script",
      "Site implementation"
    ],
    "whatIChanged": [
      "Added the supplied analytics setup",
      "Verified readiness for collection"
    ],
    "resultSummary": "The recorded analytics setup was completed without claiming historic data recovery.",
    "whatToWatchNext": [
      "Review collected data after deployment"
    ],
    "toolsUsed": [
      "GA4",
      "JavaScript"
    ],
    "tags": [
      "GA4",
      "JavaScript"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Connected a Site to Its Supplied Analytics Property | The Web Guy",
    "metaDescription": "A website needed connection to an existing analytics property."
  },
  {
    "title": "Expanded a Form to Accept Multiple Attachments",
    "slug": "expanded-form-to-accept-multiple-attachments",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "A form needed to accept several uploaded files in one submission.",
    "problemSummary": "A form needed to accept several uploaded files in one submission.",
    "whatIChecked": [
      "Attachment-field behavior",
      "Requested minimum file count"
    ],
    "whatIChanged": [
      "Updated the attachment support",
      "Verified the form accepted the requested multiple-file behavior"
    ],
    "resultSummary": "The form supported the requested attachment use case.",
    "whatToWatchNext": [
      "Review upload size and allowed file types as requirements change"
    ],
    "toolsUsed": [
      "WordPress",
      "File uploads"
    ],
    "tags": [
      "WordPress",
      "File uploads"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Expanded a Form to Accept Multiple Attachments | The Web Guy",
    "metaDescription": "A form needed to accept several uploaded files in one submission."
  },
  {
    "title": "Added a Linked Author Profile to an Existing Team Section",
    "slug": "added-linked-author-profile-to-existing-team-section",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "An approved author profile needed a dedicated page and a link from the existing team section.",
    "problemSummary": "An approved author profile needed a dedicated page and a link from the existing team section.",
    "whatIChecked": [
      "Existing author-page structure",
      "Provided profile content",
      "Team-page link placement"
    ],
    "whatIChanged": [
      "Created the profile page",
      "Connected it from the existing team listing"
    ],
    "resultSummary": "The requested profile page and internal link were added.",
    "whatToWatchNext": [
      "Keep approved profile facts current"
    ],
    "toolsUsed": [
      "WordPress",
      "Internal links"
    ],
    "tags": [
      "WordPress",
      "Internal links"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added a Linked Author Profile to an Existing Team Section | The Web Guy",
    "metaDescription": "An approved author profile needed a dedicated page and a link from the existing team section."
  },
  {
    "title": "Added a Project Page and Connected Its Portfolio Listing",
    "slug": "added-project-page-and-connected-portfolio-listing",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A new portfolio project needed to follow the existing project template and appear in the listing.",
    "problemSummary": "A new portfolio project needed to follow the existing project template and appear in the listing.",
    "whatIChecked": [
      "Existing project template",
      "Supplied assets",
      "Portfolio listing"
    ],
    "whatIChanged": [
      "Built the project page",
      "Added the supplied assets",
      "Connected the listing entry"
    ],
    "resultSummary": "The project was added through the existing portfolio structure.",
    "whatToWatchNext": [
      "Review images and links when editing the portfolio"
    ],
    "toolsUsed": [
      "WordPress",
      "Portfolio pages"
    ],
    "tags": [
      "WordPress",
      "Portfolio pages"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added a Project Page and Connected Its Portfolio Listing | The Web Guy",
    "metaDescription": "A new portfolio project needed to follow the existing project template and appear in the listing."
  },
  {
    "title": "Updated Sitewide Phone and Approved Service Pricing",
    "slug": "updated-sitewide-phone-and-approved-service-pricing",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Contact references and listed service prices needed to match the latest approved business information.",
    "problemSummary": "Contact references and listed service prices needed to match the latest approved business information.",
    "whatIChecked": [
      "Existing phone references",
      "Supplied pricing instructions"
    ],
    "whatIChanged": [
      "Updated the phone references",
      "Revised the requested pricing copy"
    ],
    "resultSummary": "The requested contact and pricing updates were completed.",
    "whatToWatchNext": [
      "Review pricing copy when business rates change"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Sitewide Phone and Approved Service Pricing | The Web Guy",
    "metaDescription": "Contact references and listed service prices needed to match the latest approved business information."
  },
  {
    "title": "Added reCAPTCHA After Reviewing Form-Spam Patterns",
    "slug": "added-recaptcha-after-reviewing-form-spam-patterns",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "contact-form-not-working-wordpress",
    "excerpt": "A website’s forms were receiving unwanted automated submissions.",
    "problemSummary": "A website’s forms were receiving unwanted automated submissions.",
    "whatIChecked": [
      "Spam patterns",
      "Existing form configuration"
    ],
    "whatIChanged": [
      "Prepared filtering guidance",
      "Configured reCAPTCHA across the forms"
    ],
    "resultSummary": "The protection was configured; no claim of complete spam elimination is made.",
    "whatToWatchNext": [
      "Monitor false positives and continuing spam"
    ],
    "toolsUsed": [
      "WordPress",
      "reCAPTCHA"
    ],
    "tags": [
      "WordPress",
      "reCAPTCHA"
    ],
    "relatedServices": [
      "contact-form-not-working-wordpress"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added reCAPTCHA After Reviewing Form-Spam Patterns | The Web Guy",
    "metaDescription": "A website’s forms were receiving unwanted automated submissions."
  },
  {
    "title": "Implemented Approved Audit Fixes With Clear Exclusions",
    "slug": "implemented-approved-audit-fixes-with-clear-exclusions",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "seo-audit-implementation",
    "excerpt": "An audit spreadsheet included actionable URL repairs and recommendations that were not approved for implementation.",
    "problemSummary": "An audit spreadsheet included actionable URL repairs and recommendations that were not approved for implementation.",
    "whatIChecked": [
      "Audit spreadsheet",
      "404 and redirect items",
      "Scope decisions"
    ],
    "whatIChanged": [
      "Completed the approved URL cleanup",
      "Evaluated the excluded recommendations without applying them"
    ],
    "resultSummary": "The agreed audit work was implemented while preserving the explicit exclusions.",
    "whatToWatchNext": [
      "Verify new redirect destinations as content changes"
    ],
    "toolsUsed": [
      "Audit implementation",
      "Redirects"
    ],
    "tags": [
      "Audit implementation",
      "Redirects"
    ],
    "relatedServices": [
      "seo-audit-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Implemented Approved Audit Fixes With Clear Exclusions | The Web Guy",
    "metaDescription": "An audit spreadsheet included actionable URL repairs and recommendations that were not approved for implementation."
  },
  {
    "title": "Corrected Repetitive Shopify Collection Titles",
    "slug": "corrected-repetitive-shopify-collection-titles",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Collection titles needed cleanup after repetitive output appeared in reporting.",
    "problemSummary": "Collection titles needed cleanup after repetitive output appeared in reporting.",
    "whatIChecked": [
      "Affected collection URLs",
      "Theme/editor title output"
    ],
    "whatIChanged": [
      "Updated the repetitive titles",
      "Verified the corrected values in the content output"
    ],
    "resultSummary": "The requested title changes were restored and checked.",
    "whatToWatchNext": [
      "Check theme updates for title regressions"
    ],
    "toolsUsed": [
      "Shopify",
      "Metadata"
    ],
    "tags": [
      "Shopify",
      "Metadata"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Corrected Repetitive Shopify Collection Titles | The Web Guy",
    "metaDescription": "Collection titles needed cleanup after repetitive output appeared in reporting."
  },
  {
    "title": "Updated a Phone Reference and Cleared Page Cache",
    "slug": "updated-phone-reference-and-cleared-page-cache",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "A contact-number change needed to appear on the correct site after cache clearing.",
    "problemSummary": "A contact-number change needed to appear on the correct site after cache clearing.",
    "whatIChecked": [
      "Target site",
      "Requested contact changes",
      "Cached output"
    ],
    "whatIChanged": [
      "Applied the contact updates",
      "Cleared the page cache",
      "Verified the visible change"
    ],
    "resultSummary": "The requested phone update was visible after cache refresh.",
    "whatToWatchNext": [
      "Check cached templates after shared contact edits"
    ],
    "toolsUsed": [
      "WordPress",
      "Caching"
    ],
    "tags": [
      "WordPress",
      "Caching"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated a Phone Reference and Cleared Page Cache | The Web Guy",
    "metaDescription": "A contact-number change needed to appear on the correct site after cache clearing."
  },
  {
    "title": "Prepared Theme-Review Tool Access and Handoff",
    "slug": "prepared-theme-review-tool-access-and-handoff",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Ecommerce Support",
    "serviceSlug": "ecommerce-support",
    "excerpt": "A team needed access to theme-change review tools and guidance on store activity logs.",
    "problemSummary": "A team needed access to theme-change review tools and guidance on store activity logs.",
    "whatIChecked": [
      "Required access level",
      "Tool and activity-log locations"
    ],
    "whatIChanged": [
      "Prepared the requested access",
      "Documented where the team could review theme changes and logs"
    ],
    "resultSummary": "The access and handoff work was completed.",
    "whatToWatchNext": [
      "Review account permissions periodically"
    ],
    "toolsUsed": [
      "Shopify",
      "Theme review"
    ],
    "tags": [
      "Shopify",
      "Theme review"
    ],
    "relatedServices": [
      "ecommerce-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Prepared Theme-Review Tool Access and Handoff | The Web Guy",
    "metaDescription": "A team needed access to theme-change review tools and guidance on store activity logs."
  },
  {
    "title": "Swept Sitemap Pages for Outdated Phone References",
    "slug": "swept-sitemap-pages-for-outdated-phone-references",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "The same outdated phone number appeared across a website.",
    "problemSummary": "The same outdated phone number appeared across a website.",
    "whatIChecked": [
      "Sitemap page inventory",
      "Visible phone references"
    ],
    "whatIChanged": [
      "Reviewed the sitemap pages",
      "Updated the requested phone references"
    ],
    "resultSummary": "The recorded sitewide phone sweep was completed.",
    "whatToWatchNext": [
      "Keep shared contact values centralized where possible"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Swept Sitemap Pages for Outdated Phone References | The Web Guy",
    "metaDescription": "The same outdated phone number appeared across a website."
  },
  {
    "title": "Repaired a Footer After Compromised-Theme Cleanup",
    "slug": "repaired-footer-after-compromised-theme-cleanup",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "Removal of compromised theme files left a footer presentation issue.",
    "problemSummary": "Removal of compromised theme files left a footer presentation issue.",
    "whatIChecked": [
      "Affected footer styling",
      "Post-cleanup output"
    ],
    "whatIChanged": [
      "Repaired and cleaned up the footer styling"
    ],
    "resultSummary": "The affected presentation was restored for review.",
    "whatToWatchNext": [
      "Review shared layout after replacing theme files"
    ],
    "toolsUsed": [
      "WordPress",
      "CSS"
    ],
    "tags": [
      "WordPress",
      "CSS"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Repaired a Footer After Compromised-Theme Cleanup | The Web Guy",
    "metaDescription": "Removal of compromised theme files left a footer presentation issue."
  },
  {
    "title": "Updated Service Copy, Footer Details and a Retired URL",
    "slug": "updated-service-copy-footer-details-and-retired-url",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "Homepage and footer information needed revision alongside retirement of an obsolete location page.",
    "problemSummary": "Homepage and footer information needed revision alongside retirement of an obsolete location page.",
    "whatIChecked": [
      "Homepage heading",
      "Footer information",
      "Obsolete page link"
    ],
    "whatIChanged": [
      "Updated the requested copy and details",
      "Removed the obsolete link",
      "Added the requested permanent redirect"
    ],
    "resultSummary": "The copy, link and redirect changes were completed together.",
    "whatToWatchNext": [
      "Review redirects when coverage changes again"
    ],
    "toolsUsed": [
      "WordPress",
      "Redirects",
      "Content"
    ],
    "tags": [
      "WordPress",
      "Redirects",
      "Content"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Service Copy, Footer Details and a Retired URL | The Web Guy",
    "metaDescription": "Homepage and footer information needed revision alongside retirement of an obsolete location page."
  },
  {
    "title": "Installed Tag Manager Without a Duplicate Analytics Property",
    "slug": "installed-tag-manager-without-duplicate-analytics-property",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "ga4-gtm-setup-help",
    "excerpt": "A site needed tag-manager installation while keeping a single intended analytics property.",
    "problemSummary": "A site needed tag-manager installation while keeping a single intended analytics property.",
    "whatIChecked": [
      "Existing analytics tags",
      "Head and body insertion points"
    ],
    "whatIChanged": [
      "Installed the container and fallback",
      "Audited the analytics setup for the intended property"
    ],
    "resultSummary": "The requested setup was added with the property configuration checked.",
    "whatToWatchNext": [
      "Recheck for duplicate tags when plugins change"
    ],
    "toolsUsed": [
      "GTM",
      "GA4"
    ],
    "tags": [
      "GTM",
      "GA4"
    ],
    "relatedServices": [
      "ga4-gtm-setup-help"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Installed Tag Manager Without a Duplicate Analytics Property | The Web Guy",
    "metaDescription": "A site needed tag-manager installation while keeping a single intended analytics property."
  },
  {
    "title": "Reconciled Company History in Copy and Schema",
    "slug": "reconciled-company-history-in-copy-and-schema",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "A company-history value disagreed between page content and structured data.",
    "problemSummary": "A company-history value disagreed between page content and structured data.",
    "whatIChecked": [
      "Database and page content",
      "Structured-data history field"
    ],
    "whatIChanged": [
      "Corrected the approved history value",
      "Updated the affected page content"
    ],
    "resultSummary": "The reviewed references were made consistent.",
    "whatToWatchNext": [
      "Use a shared source for repeated business facts"
    ],
    "toolsUsed": [
      "WordPress",
      "Schema",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Schema",
      "Content audit"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Reconciled Company History in Copy and Schema | The Web Guy",
    "metaDescription": "A company-history value disagreed between page content and structured data."
  },
  {
    "title": "Added an Approved Business Address to a Footer",
    "slug": "added-approved-business-address-to-footer",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "The website footer needed an approved business-address update.",
    "problemSummary": "The website footer needed an approved business-address update.",
    "whatIChecked": [
      "Footer contact output"
    ],
    "whatIChanged": [
      "Added the requested address",
      "Verified the visible update"
    ],
    "resultSummary": "The footer showed the approved contact information.",
    "whatToWatchNext": [
      "Review structured data separately if its address is maintained elsewhere"
    ],
    "toolsUsed": [
      "Static site",
      "Content updates"
    ],
    "tags": [
      "Static site",
      "Content updates"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added an Approved Business Address to a Footer | The Web Guy",
    "metaDescription": "The website footer needed an approved business-address update."
  },
  {
    "title": "Implemented Supplied FAQ Revisions Through a Repository",
    "slug": "implemented-supplied-faq-revisions-through-repository",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "An existing site needed approved FAQ content implemented through its code workflow.",
    "problemSummary": "An existing site needed approved FAQ content implemented through its code workflow.",
    "whatIChecked": [
      "Supplied FAQ content",
      "Existing site repository"
    ],
    "whatIChanged": [
      "Applied the requested FAQ revisions",
      "Pushed the completed changes for deployment"
    ],
    "resultSummary": "Implementation reached the repository; this entry does not independently establish live deployment verification.",
    "whatToWatchNext": [
      "Verify the production page after deployment"
    ],
    "toolsUsed": [
      "FAQ content",
      "Git"
    ],
    "tags": [
      "FAQ content",
      "Git"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Implemented Supplied FAQ Revisions Through a Repository | The Web Guy",
    "metaDescription": "An existing site needed approved FAQ content implemented through its code workflow."
  },
  {
    "title": "Prepared a Supplied Article With SEO Fields for Review",
    "slug": "prepared-supplied-article-with-seo-fields-for-review",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "An approved article needed implementation with its search title, description and route.",
    "problemSummary": "An approved article needed implementation with its search title, description and route.",
    "whatIChecked": [
      "Supplied article and metadata",
      "Existing article system"
    ],
    "whatIChanged": [
      "Implemented the article and metadata",
      "Prepared the repository build for review"
    ],
    "resultSummary": "The article implementation was prepared for review rather than described as a verified live publication.",
    "whatToWatchNext": [
      "Confirm review and publication status before promotion"
    ],
    "toolsUsed": [
      "Static site",
      "Article publishing"
    ],
    "tags": [
      "Static site",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Prepared a Supplied Article With SEO Fields for Review | The Web Guy",
    "metaDescription": "An approved article needed implementation with its search title, description and route."
  },
  {
    "title": "Aligned Sitewide Phone Copy With an Approved Profile Number",
    "slug": "aligned-sitewide-phone-with-approved-profile-number",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Website phone references needed to match the approved business-profile number.",
    "problemSummary": "Website phone references needed to match the approved business-profile number.",
    "whatIChecked": [
      "Existing site phone references",
      "Approved replacement"
    ],
    "whatIChanged": [
      "Updated the website phone references",
      "Verified the sitewide change for review"
    ],
    "resultSummary": "The requested phone alignment was completed for review.",
    "whatToWatchNext": [
      "Check new templates for outdated hardcoded numbers"
    ],
    "toolsUsed": [
      "Content audit"
    ],
    "tags": [
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Aligned Sitewide Phone Copy With an Approved Profile Number | The Web Guy",
    "metaDescription": "Website phone references needed to match the approved business-profile number."
  },
  {
    "title": "Installed a Lead-Tracking Script in a Shared Header",
    "slug": "installed-lead-tracking-script-in-shared-header",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "A supplied tracking script needed consistent sitewide loading.",
    "problemSummary": "A supplied tracking script needed consistent sitewide loading.",
    "whatIChecked": [
      "Global header",
      "Supplied script"
    ],
    "whatIChanged": [
      "Added the tracking code to the shared header",
      "Verified the implementation for review"
    ],
    "resultSummary": "The supplied script was installed sitewide; this is not proof of every downstream conversion event.",
    "whatToWatchNext": [
      "Test required events and consent behavior separately"
    ],
    "toolsUsed": [
      "JavaScript",
      "Tracking"
    ],
    "tags": [
      "JavaScript",
      "Tracking"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Installed a Lead-Tracking Script in a Shared Header | The Web Guy",
    "metaDescription": "A supplied tracking script needed consistent sitewide loading."
  },
  {
    "title": "Implemented an Author Page and Related Onsite SEO Work",
    "slug": "implemented-author-page-and-related-onsite-seo-work",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "An author profile and related approved onsite search work needed repository implementation.",
    "problemSummary": "An author profile and related approved onsite search work needed repository implementation.",
    "whatIChecked": [
      "Supplied profile content",
      "Approved metadata",
      "Related onsite instructions"
    ],
    "whatIChanged": [
      "Implemented the author page and metadata",
      "Completed the associated onsite changes",
      "Prepared the repository work for review"
    ],
    "resultSummary": "The requested implementation was prepared for review.",
    "whatToWatchNext": [
      "Verify published output when the review is complete"
    ],
    "toolsUsed": [
      "Static site",
      "Metadata"
    ],
    "tags": [
      "Static site",
      "Metadata"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Implemented an Author Page and Related Onsite SEO Work | The Web Guy",
    "metaDescription": "An author profile and related approved onsite search work needed repository implementation."
  },
  {
    "title": "Updated a Business Address Throughout Site Content",
    "slug": "updated-business-address-throughout-site-content",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "A business-address change needed consistent site content.",
    "problemSummary": "A business-address change needed consistent site content.",
    "whatIChecked": [
      "Affected site references",
      "Approved replacement address"
    ],
    "whatIChanged": [
      "Updated the requested address",
      "Reviewed affected content for consistency"
    ],
    "resultSummary": "The site address update was completed.",
    "whatToWatchNext": [
      "Check new content for old contact details"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated a Business Address Throughout Site Content | The Web Guy",
    "metaDescription": "A business-address change needed consistent site content."
  },
  {
    "title": "Updated Navigation and Reviewed Mobile Performance",
    "slug": "updated-navigation-and-reviewed-mobile-performance",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Page Speed",
    "serviceSlug": "site-speed-performance",
    "excerpt": "A site needed a navigation adjustment and performance work based on the correct mobile report.",
    "problemSummary": "A site needed a navigation adjustment and performance work based on the correct mobile report.",
    "whatIChecked": [
      "Existing navigation",
      "Relevant mobile performance report"
    ],
    "whatIChanged": [
      "Moved the requested navigation item",
      "Audited and optimized the site against the supplied mobile report"
    ],
    "resultSummary": "The recorded navigation and performance work was completed without claiming an unsupported score change.",
    "whatToWatchNext": [
      "Use the correct URL and device profile for future comparisons"
    ],
    "toolsUsed": [
      "WordPress",
      "Performance"
    ],
    "tags": [
      "WordPress",
      "Performance"
    ],
    "relatedServices": [
      "site-speed-performance"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Navigation and Reviewed Mobile Performance | The Web Guy",
    "metaDescription": "A site needed a navigation adjustment and performance work based on the correct mobile report."
  },
  {
    "title": "Deployed a Root-Level Domain-Verification File",
    "slug": "deployed-root-level-domain-verification-file",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "An account-verification request failed because its public file URL returned 404.",
    "problemSummary": "An account-verification request failed because its public file URL returned 404.",
    "whatIChecked": [
      "Required verification URL",
      "Public document root",
      "Hosting access"
    ],
    "whatIChanged": [
      "Placed the supplied verification file in the correct public root"
    ],
    "resultSummary": "The file was deployed for the external provider to review; approval was not claimed.",
    "whatToWatchNext": [
      "Confirm provider review separately from file deployment"
    ],
    "toolsUsed": [
      "SFTP",
      "Domain verification"
    ],
    "tags": [
      "SFTP",
      "Domain verification"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Deployed a Root-Level Domain-Verification File | The Web Guy",
    "metaDescription": "An account-verification request failed because its public file URL returned 404."
  },
  {
    "title": "Implemented a Supplied Owner Profile in a Static Site",
    "slug": "implemented-supplied-owner-profile-in-static-site",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "An approved long-form profile needed to fit the existing static website.",
    "problemSummary": "An approved long-form profile needed to fit the existing static website.",
    "whatIChecked": [
      "Supplied profile content",
      "Existing site format",
      "Requested links and call to action"
    ],
    "whatIChanged": [
      "Formatted the profile into a dedicated page",
      "Included the approved supporting links and service action"
    ],
    "resultSummary": "The requested profile implementation was recorded; no additional live verification is inferred.",
    "whatToWatchNext": [
      "Keep approved profile facts and links current"
    ],
    "toolsUsed": [
      "Static site",
      "Content publishing"
    ],
    "tags": [
      "Static site",
      "Content publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Implemented a Supplied Owner Profile in a Static Site | The Web Guy",
    "metaDescription": "An approved long-form profile needed to fit the existing static website."
  },
  {
    "title": "Restored Form Notifications With an Authenticated Mail API",
    "slug": "restored-form-notifications-with-authenticated-mail-api",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "contact-form-not-working-wordpress",
    "excerpt": "Form notifications failed with an unclear sending-quota error.",
    "problemSummary": "Form notifications failed with an unclear sending-quota error.",
    "whatIChecked": [
      "Form notification errors",
      "Mail plugin configuration",
      "Authenticated sending setup"
    ],
    "whatIChanged": [
      "Configured the mail plugin",
      "Connected authenticated API-based sending",
      "Tested the completed mail setup"
    ],
    "resultSummary": "The recorded notification tests sent successfully. This is separate from guaranteeing every recipient inbox placement.",
    "whatToWatchNext": [
      "Monitor authentication and provider delivery logs"
    ],
    "toolsUsed": [
      "WordPress",
      "Mail API"
    ],
    "tags": [
      "WordPress",
      "Mail API"
    ],
    "relatedServices": [
      "contact-form-not-working-wordpress"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Restored Form Notifications With an Authenticated Mail API | The Web Guy",
    "metaDescription": "Form notifications failed with an unclear sending-quota error."
  },
  {
    "title": "Updated Shared Trust Badges and Credential Links",
    "slug": "updated-shared-trust-badges-and-credential-links",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Shared header and footer proof elements needed accurate disclosures and links.",
    "problemSummary": "Shared header and footer proof elements needed accurate disclosures and links.",
    "whatIChecked": [
      "Existing badges",
      "Requested credentials",
      "External links and image text"
    ],
    "whatIChanged": [
      "Removed an obsolete badge placement",
      "Updated the approved credential links and disclosures",
      "Verified shared-template output"
    ],
    "resultSummary": "The requested shared proof elements were updated without publishing the private credential details in this note.",
    "whatToWatchNext": [
      "Review badges and disclosures when credentials change"
    ],
    "toolsUsed": [
      "WordPress",
      "Shared templates"
    ],
    "tags": [
      "WordPress",
      "Shared templates"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Updated Shared Trust Badges and Credential Links | The Web Guy",
    "metaDescription": "Shared header and footer proof elements needed accurate disclosures and links."
  },
  {
    "title": "Included Article and FAQ Schema in Static Build Output",
    "slug": "included-article-and-faq-schema-in-static-build-output",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "schema-implementation-service",
    "excerpt": "An article needed page-specific structured data without duplicate Article output.",
    "problemSummary": "An article needed page-specific structured data without duplicate Article output.",
    "whatIChecked": [
      "Existing schema generation",
      "SEO component",
      "Build-time HTML output"
    ],
    "whatIChanged": [
      "Added a reusable schema module",
      "Extended multiple-schema rendering",
      "Validated the generated output and uncached live page"
    ],
    "resultSummary": "The live article contained the intended structured-data types without the recorded duplication issue.",
    "whatToWatchNext": [
      "Recheck markup after shared SEO-component changes"
    ],
    "toolsUsed": [
      "JSON-LD",
      "Static generation"
    ],
    "tags": [
      "JSON-LD",
      "Static generation"
    ],
    "relatedServices": [
      "schema-implementation-service"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Included Article and FAQ Schema in Static Build Output | The Web Guy",
    "metaDescription": "An article needed page-specific structured data without duplicate Article output."
  },
  {
    "title": "Rebuilt a Location Directory and Shared Header Presentation",
    "slug": "rebuilt-location-directory-and-shared-header-presentation",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "New location content and a cluttered directory/header needed coordinated presentation changes.",
    "problemSummary": "New location content and a cluttered directory/header needed coordinated presentation changes.",
    "whatIChecked": [
      "Existing location layout",
      "Directory structure",
      "Shared header and inner-page spacing"
    ],
    "whatIChanged": [
      "Added the new location content",
      "Built reusable directory cards and filtering",
      "Reworked the trust area while preserving navigation",
      "Checked the affected layouts"
    ],
    "resultSummary": "The requested page, directory and header work was completed. The billed amount excluded additional organization time noted in the invoice.",
    "whatToWatchNext": [
      "Keep directory records and appointment instructions current"
    ],
    "toolsUsed": [
      "WordPress",
      "Location pages",
      "Responsive layout"
    ],
    "tags": [
      "WordPress",
      "Location pages",
      "Responsive layout"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Rebuilt a Location Directory and Shared Header Presentation | The Web Guy",
    "metaDescription": "New location content and a cluttered directory/header needed coordinated presentation changes."
  },
  {
    "title": "Hardened WordPress Endpoints and Protected Private Artifacts",
    "slug": "hardened-wordpress-endpoints-and-protected-private-artifacts",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "An installation exposed risky request handlers and private operational artifacts within the public web tree.",
    "problemSummary": "An installation exposed risky request handlers and private operational artifacts within the public web tree.",
    "whatIChecked": [
      "Request handlers and renderers",
      "Publicly stored logs/backups",
      "Plugin integrity and file access"
    ],
    "whatIChanged": [
      "Neutralized the recorded unsafe endpoints",
      "Moved private artifacts outside the public tree",
      "Restricted sensitive files and upload execution",
      "Preserved recoverable originals and verified deployment"
    ],
    "resultSummary": "The documented security changes were deployed; this is not a guarantee that the site cannot be compromised.",
    "whatToWatchNext": [
      "Monitor access and avoid recreating public diagnostic artifacts"
    ],
    "toolsUsed": [
      "WordPress",
      "File hardening",
      "Security review"
    ],
    "tags": [
      "WordPress",
      "File hardening",
      "Security review"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Hardened WordPress Endpoints and Protected Private Artifacts | The Web Guy",
    "metaDescription": "An installation exposed risky request handlers and private operational artifacts within the public web tree."
  },
  {
    "title": "Prepared a WordPress Backup and Hosting Transfer",
    "slug": "prepared-wordpress-backup-and-hosting-transfer",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "A WordPress transfer needed a recoverable backup and restoration of the existing site structure.",
    "problemSummary": "A WordPress transfer needed a recoverable backup and restoration of the existing site structure.",
    "whatIChecked": [
      "Backup contents",
      "Database and configuration",
      "Migration-related loader behavior"
    ],
    "whatIChanged": [
      "Created the backup",
      "Prepared the hosting transfer",
      "Restored the recorded components",
      "Corrected migration-specific overrides"
    ],
    "resultSummary": "Transfer preparation and restoration work was completed; final DNS cutover is not asserted by this entry.",
    "whatToWatchNext": [
      "Verify production routing after any cutover"
    ],
    "toolsUsed": [
      "WordPress",
      "Backup restoration"
    ],
    "tags": [
      "WordPress",
      "Backup restoration"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Prepared a WordPress Backup and Hosting Transfer | The Web Guy",
    "metaDescription": "A WordPress transfer needed a recoverable backup and restoration of the existing site structure."
  },
  {
    "title": "Replaced Legacy Form Shortcodes With a Responsive Embed Plugin",
    "slug": "replaced-legacy-form-shortcodes-with-responsive-embed-plugin",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "Existing form shortcodes needed replacement without destructively rewriting page content.",
    "problemSummary": "Existing form shortcodes needed replacement without destructively rewriting page content.",
    "whatIChecked": [
      "Legacy shortcodes",
      "Page-specific wrapper behavior",
      "Quote and contact interfaces"
    ],
    "whatIChanged": [
      "Built and deployed the replacement plugin",
      "Added responsive embed styling",
      "Verified representative pages and navigation"
    ],
    "resultSummary": "The requested embed replacement was deployed and checked on the recorded pages.",
    "whatToWatchNext": [
      "Retest when the external form changes"
    ],
    "toolsUsed": [
      "WordPress plugin",
      "Embeds"
    ],
    "tags": [
      "WordPress plugin",
      "Embeds"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Replaced Legacy Form Shortcodes With a Responsive Embed Plugin | The Web Guy",
    "metaDescription": "Existing form shortcodes needed replacement without destructively rewriting page content."
  },
  {
    "title": "Aligned a Visible Address and Structured Data",
    "slug": "aligned-visible-address-and-structured-data",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "schema-implementation-service",
    "excerpt": "A changed business address remained inconsistent between visible content and schema.",
    "problemSummary": "A changed business address remained inconsistent between visible content and schema.",
    "whatIChecked": [
      "Global footer",
      "Stored address references",
      "Homepage schema payloads"
    ],
    "whatIChanged": [
      "Updated the approved address in content and markup",
      "Cleared relevant caches",
      "Verified the visible output while preserving unrelated location references"
    ],
    "resultSummary": "The reviewed visible and structured-data address references agreed after the change.",
    "whatToWatchNext": [
      "Centralize repeated business facts where practical"
    ],
    "toolsUsed": [
      "WordPress",
      "JSON-LD",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "JSON-LD",
      "Content audit"
    ],
    "relatedServices": [
      "schema-implementation-service"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Aligned a Visible Address and Structured Data | The Web Guy",
    "metaDescription": "A changed business address remained inconsistent between visible content and schema."
  },
  {
    "title": "Published an Author Profile Through Existing PHP Templates",
    "slug": "published-author-profile-through-existing-php-templates",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "A custom PHP website needed a profile page integrated with its existing navigation, metadata and sitemaps.",
    "problemSummary": "A custom PHP website needed a profile page integrated with its existing navigation, metadata and sitemaps.",
    "whatIChecked": [
      "Existing PHP templates",
      "Provided profile content",
      "Supporting service links"
    ],
    "whatIChanged": [
      "Created and formatted the approved profile",
      "Added metadata and Person schema",
      "Connected internal links and sitemaps",
      "Backed up and deployed the changed files"
    ],
    "resultSummary": "The profile, metadata, links and structured data were verified live.",
    "whatToWatchNext": [
      "Keep profile content and supporting links current"
    ],
    "toolsUsed": [
      "PHP",
      "SFTP",
      "JSON-LD"
    ],
    "tags": [
      "PHP",
      "SFTP",
      "JSON-LD"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published an Author Profile Through Existing PHP Templates | The Web Guy",
    "metaDescription": "A custom PHP website needed a profile page integrated with its existing navigation, metadata and sitemaps."
  },
  {
    "title": "Published a Supplied Article With Optimized Imagery and Tests",
    "slug": "published-supplied-article-with-optimized-imagery-and-tests",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A supplied article needed a complete web presentation and integration with the existing content system.",
    "problemSummary": "A supplied article needed a complete web presentation and integration with the existing content system.",
    "whatIChecked": [
      "Source article",
      "Existing CMS and listing",
      "Image and metadata requirements"
    ],
    "whatIChanged": [
      "Structured the article and FAQs",
      "Created optimized accessible imagery",
      "Added metadata and listing links",
      "Completed the recorded checks and repository publication"
    ],
    "resultSummary": "The article was published in the recorded workflow. A later rebuild for a different implementation is documented separately.",
    "whatToWatchNext": [
      "Recheck URLs and listings when the hosting workflow changes"
    ],
    "toolsUsed": [
      "CMS",
      "WebP",
      "Article publishing"
    ],
    "tags": [
      "CMS",
      "WebP",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published a Supplied Article With Optimized Imagery and Tests | The Web Guy",
    "metaDescription": "A supplied article needed a complete web presentation and integration with the existing content system."
  },
  {
    "title": "Added a Secondary Form Recipient With an Account Dependency",
    "slug": "added-secondary-form-recipient-with-account-dependency",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "A form needed an additional notification recipient without creating a duplicate form or account.",
    "problemSummary": "A form needed an additional notification recipient without creating a duplicate form or account.",
    "whatIChecked": [
      "Active form provider",
      "Existing form implementation",
      "Provider support for secondary recipients"
    ],
    "whatIChanged": [
      "Added the documented secondary-recipient field",
      "Built and synchronized the site changes"
    ],
    "resultSummary": "The implementation was completed; secondary delivery remained dependent on the provider account’s eligible subscription.",
    "whatToWatchNext": [
      "Verify account eligibility and actual receipt before treating the extra delivery as live"
    ],
    "toolsUsed": [
      "Forms",
      "Static site"
    ],
    "tags": [
      "Forms",
      "Static site"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added a Secondary Form Recipient With an Account Dependency | The Web Guy",
    "metaDescription": "A form needed an additional notification recipient without creating a duplicate form or account."
  },
  {
    "title": "Repaired Overlapping Website Content",
    "slug": "repaired-overlapping-website-content",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Website Fixes",
    "serviceSlug": "website-fixes",
    "excerpt": "Overlapping layout elements were obscuring page content.",
    "problemSummary": "Overlapping layout elements were obscuring page content.",
    "whatIChecked": [
      "Reported overlap",
      "Affected rendered content"
    ],
    "whatIChanged": [
      "Corrected the layout overlap",
      "Verified the affected content was no longer obscured"
    ],
    "resultSummary": "The recorded display problem was repaired.",
    "whatToWatchNext": [
      "Check affected breakpoints after layout changes"
    ],
    "toolsUsed": [
      "CSS",
      "Layout debugging"
    ],
    "tags": [
      "CSS",
      "Layout debugging"
    ],
    "relatedServices": [
      "website-fixes"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Repaired Overlapping Website Content | The Web Guy",
    "metaDescription": "Overlapping layout elements were obscuring page content."
  },
  {
    "title": "Published an Illustrated Long-Form Service Guide",
    "slug": "published-illustrated-long-form-service-guide",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A long-form guide needed an organized web layout, supporting visuals and search metadata.",
    "problemSummary": "A long-form guide needed an organized web layout, supporting visuals and search metadata.",
    "whatIChecked": [
      "Article structure",
      "Visual presentation needs",
      "Metadata and responsive behavior"
    ],
    "whatIChanged": [
      "Built the guide with comparison content and FAQs",
      "Created optimized supporting visuals",
      "Extended reusable image/caption components",
      "Completed build and route checks"
    ],
    "resultSummary": "The illustrated guide was published through the recorded repository workflow.",
    "whatToWatchNext": [
      "Keep factual guidance and linked services current"
    ],
    "toolsUsed": [
      "WebP",
      "Structured data",
      "Article publishing"
    ],
    "tags": [
      "WebP",
      "Structured data",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published an Illustrated Long-Form Service Guide | The Web Guy",
    "metaDescription": "A long-form guide needed an organized web layout, supporting visuals and search metadata."
  },
  {
    "title": "Connected a WordPress Form to a Service CRM With Customer Matching",
    "slug": "connected-wordpress-form-to-service-crm-with-customer-matching",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "A lead form needed CRM delivery that handled both new and existing customers.",
    "problemSummary": "A lead form needed CRM delivery that handled both new and existing customers.",
    "whatIChecked": [
      "Form fields and API requirements",
      "Customer matching",
      "Initial error response"
    ],
    "whatIChanged": [
      "Built the integration plugin and private credential settings",
      "Added customer lookup and duplicate protection",
      "Revised the payload after the recorded failure",
      "Completed an approved live submission"
    ],
    "resultSummary": "The approved test created a CRM lead successfully. No submission identifiers or customer data are published here.",
    "whatToWatchNext": [
      "Monitor failed entries and API changes"
    ],
    "toolsUsed": [
      "WordPress plugin",
      "CRM API",
      "Forms"
    ],
    "tags": [
      "WordPress plugin",
      "CRM API",
      "Forms"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Connected a WordPress Form to a Service CRM With Customer Matching | The Web Guy",
    "metaDescription": "A lead form needed CRM delivery that handled both new and existing customers."
  },
  {
    "title": "Moved a Trust Badge From the Footer to the Hero",
    "slug": "moved-trust-badge-from-footer-to-hero",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "An approved trust badge needed a new homepage placement beside an existing review element.",
    "problemSummary": "An approved trust badge needed a new homepage placement beside an existing review element.",
    "whatIChecked": [
      "Footer badge",
      "Hero layout",
      "Existing review proof"
    ],
    "whatIChanged": [
      "Removed the former footer badge",
      "Added and sized the replacement in the hero",
      "Verified the live markup and alignment"
    ],
    "resultSummary": "The approved badge placement was updated and checked live.",
    "whatToWatchNext": [
      "Review alignment on smaller screens when badges change"
    ],
    "toolsUsed": [
      "WordPress",
      "CSS"
    ],
    "tags": [
      "WordPress",
      "CSS"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Moved a Trust Badge From the Footer to the Hero | The Web Guy",
    "metaDescription": "An approved trust badge needed a new homepage placement beside an existing review element."
  },
  {
    "title": "Separated a Database Outage From a Plugin-License Concern",
    "slug": "separated-database-outage-from-plugin-license-concern",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Production Debugging",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "A reported temporary outage was suspected to be related to a plugin license.",
    "problemSummary": "A reported temporary outage was suspected to be related to a plugin license.",
    "whatIChecked": [
      "Captured error",
      "Recovered live site",
      "Plugin inventory and hosting context"
    ],
    "whatIChanged": [
      "Identified the reported error as a database-connection failure",
      "Confirmed the site had recovered",
      "Documented the separate update-registration concern"
    ],
    "resultSummary": "The investigation separated the outage symptom from the license concern; no ongoing root-cause repair was claimed.",
    "whatToWatchNext": [
      "Monitor recurrence and retain host logs if the database error returns"
    ],
    "toolsUsed": [
      "WordPress",
      "Hosting review"
    ],
    "tags": [
      "WordPress",
      "Hosting review"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Separated a Database Outage From a Plugin-License Concern | The Web Guy",
    "metaDescription": "A reported temporary outage was suspected to be related to a plugin license."
  },
  {
    "title": "Completed Follow-Up Malware Containment and Validation",
    "slug": "completed-follow-up-malware-containment-and-validation",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Security & Hosting",
    "serviceSlug": "security-hosting-reliability",
    "excerpt": "A WordPress installation required a further billed security-remediation pass.",
    "problemSummary": "A WordPress installation required a further billed security-remediation pass.",
    "whatIChecked": [
      "Production compromise indicators",
      "Backup and administrator containment needs",
      "Deployment state"
    ],
    "whatIChanged": [
      "Completed the recorded forensic backup and remediation work",
      "Applied account containment and hardening",
      "Performed deployment validation and reporting"
    ],
    "resultSummary": "The recorded follow-up security work was completed without publishing incident identifiers or claiming permanent immunity.",
    "whatToWatchNext": [
      "Continue monitoring and credential review"
    ],
    "toolsUsed": [
      "WordPress",
      "Security hardening"
    ],
    "tags": [
      "WordPress",
      "Security hardening"
    ],
    "relatedServices": [
      "security-hosting-reliability"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Completed Follow-Up Malware Containment and Validation | The Web Guy",
    "metaDescription": "A WordPress installation required a further billed security-remediation pass."
  },
  {
    "title": "Built and Tested Editable Shopify Draft Navigation",
    "slug": "built-and-tested-editable-shopify-draft-navigation",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Ecommerce Support",
    "serviceSlug": "shopify-liquid-support",
    "excerpt": "A storefront needed alternate navigation while keeping the standard live navigation intact.",
    "problemSummary": "A storefront needed alternate navigation while keeping the standard live navigation intact.",
    "whatIChecked": [
      "Existing navigation context",
      "Draft-theme structure",
      "Desktop hover and mobile tap behavior"
    ],
    "whatIChanged": [
      "Prepared recommendations and mockups",
      "Built editable dropdowns and nested links",
      "Corrected link and interaction problems",
      "Verified responsive behavior in the draft"
    ],
    "resultSummary": "The navigation was built and tested in a draft theme; this note does not claim live publication.",
    "whatToWatchNext": [
      "Confirm approval before publishing",
      "Retest hover, tap and scrolling after theme changes"
    ],
    "toolsUsed": [
      "Shopify",
      "Liquid",
      "Responsive navigation"
    ],
    "tags": [
      "Shopify",
      "Liquid",
      "Responsive navigation"
    ],
    "relatedServices": [
      "shopify-liquid-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Built and Tested Editable Shopify Draft Navigation | The Web Guy",
    "metaDescription": "A storefront needed alternate navigation while keeping the standard live navigation intact."
  },
  {
    "title": "Redesigned a Shopify Collection Page in a Draft Theme",
    "slug": "redesigned-shopify-collection-page-in-draft-theme",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Ecommerce Support",
    "serviceSlug": "ecommerce-support",
    "excerpt": "A collection page needed clearer editorial sections, shopping categories and FAQ presentation.",
    "problemSummary": "A collection page needed clearer editorial sections, shopping categories and FAQ presentation.",
    "whatIChecked": [
      "Collection content and handle",
      "Image placement",
      "Draft preview"
    ],
    "whatIChanged": [
      "Reorganized the content",
      "Added visual category navigation and supporting imagery",
      "Built the FAQ presentation",
      "Corrected the collection-handle mismatch"
    ],
    "resultSummary": "The collection redesign was verified in draft preview and remained unpublished pending approval.",
    "whatToWatchNext": [
      "Verify approval and live collection routing before publication"
    ],
    "toolsUsed": [
      "Shopify",
      "Collection templates"
    ],
    "tags": [
      "Shopify",
      "Collection templates"
    ],
    "relatedServices": [
      "ecommerce-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Redesigned a Shopify Collection Page in a Draft Theme | The Web Guy",
    "metaDescription": "A collection page needed clearer editorial sections, shopping categories and FAQ presentation."
  },
  {
    "title": "Implemented a Redirect Map for Reported Broken URLs",
    "slug": "implemented-redirect-map-for-reported-broken-urls",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "seo-audit-implementation",
    "excerpt": "A Search Console report listed many broken URLs with a supplied replacement mapping.",
    "problemSummary": "A Search Console report listed many broken URLs with a supplied replacement mapping.",
    "whatIChecked": [
      "Reported URLs",
      "Existing redirect rules",
      "Destination validity and trailing-slash variants"
    ],
    "whatIChanged": [
      "Preserved the original configuration",
      "Resolved ambiguous mappings",
      "Imported the agreed permanent redirects",
      "Tested representative URL families and retained exports"
    ],
    "resultSummary": "The recorded broken-URL set was covered while preserving the existing rules. Exact URL counts and paths are omitted to protect client identity.",
    "whatToWatchNext": [
      "Monitor redirect chains and destination availability"
    ],
    "toolsUsed": [
      "WordPress",
      "301 redirects",
      "Search Console"
    ],
    "tags": [
      "WordPress",
      "301 redirects",
      "Search Console"
    ],
    "relatedServices": [
      "seo-audit-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Implemented a Redirect Map for Reported Broken URLs | The Web Guy",
    "metaDescription": "A Search Console report listed many broken URLs with a supplied replacement mapping."
  },
  {
    "title": "Published a Sourced Article With Inline Visual Support",
    "slug": "published-sourced-article-with-inline-visual-support",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A supplied article needed publication with relevant visuals and accessible inline figures.",
    "problemSummary": "A supplied article needed publication with relevant visuals and accessible inline figures.",
    "whatIChecked": [
      "Source material and existing article system",
      "Supporting evidence",
      "Image presentation"
    ],
    "whatIChanged": [
      "Published the article and metadata",
      "Optimized photographs and created supporting visuals",
      "Added accessible figure handling",
      "Removed a reviewed chart before release"
    ],
    "resultSummary": "The deployed article and visuals were verified after publication.",
    "whatToWatchNext": [
      "Recheck cited information when revising the guide"
    ],
    "toolsUsed": [
      "Static site",
      "WebP",
      "Article publishing"
    ],
    "tags": [
      "Static site",
      "WebP",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published a Sourced Article With Inline Visual Support | The Web Guy",
    "metaDescription": "A supplied article needed publication with relevant visuals and accessible inline figures."
  },
  {
    "title": "Installed One Call-Tracking Loader and Verified the Number Swap",
    "slug": "installed-single-call-tracking-loader-and-verified-number-swap",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Tracking & Analytics",
    "serviceSlug": "analytics-tracking",
    "excerpt": "A supplied number-swapping script needed installation alongside existing page scripts.",
    "problemSummary": "A supplied number-swapping script needed installation alongside existing page scripts.",
    "whatIChecked": [
      "Body-end script area",
      "Existing tag manager and chat code",
      "Live phone display"
    ],
    "whatIChanged": [
      "Added the supplied loader",
      "Corrected an extra script-closing tag",
      "Republished and verified the loader appeared once"
    ],
    "resultSummary": "The live homepage displayed the expected number swap after installation.",
    "whatToWatchNext": [
      "Check for duplicate loaders after editor changes"
    ],
    "toolsUsed": [
      "Call tracking",
      "JavaScript"
    ],
    "tags": [
      "Call tracking",
      "JavaScript"
    ],
    "relatedServices": [
      "analytics-tracking"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Installed One Call-Tracking Loader and Verified the Number Swap | The Web Guy",
    "metaDescription": "A supplied number-swapping script needed installation alongside existing page scripts."
  },
  {
    "title": "Published a Linked Article Pair With Responsive Images",
    "slug": "published-linked-article-pair-with-responsive-images",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "Two supplied articles needed consistent site presentation, supported claims and connected navigation.",
    "problemSummary": "Two supplied articles needed consistent site presentation, supported claims and connected navigation.",
    "whatIChecked": [
      "Source sections and FAQs",
      "Factual statements needing support",
      "Image and layout requirements"
    ],
    "whatIChanged": [
      "Formatted the articles",
      "Corrected unsupported or unclear guidance",
      "Added optimized accessible imagery",
      "Connected listings, links and metadata",
      "Completed the recorded builds and review"
    ],
    "resultSummary": "The implementation and repository publication were completed; an unrelated existing analytics error was documented separately.",
    "whatToWatchNext": [
      "Verify deployment status and keep sources current"
    ],
    "toolsUsed": [
      "Static site",
      "WebP",
      "Article publishing"
    ],
    "tags": [
      "Static site",
      "WebP",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published a Linked Article Pair With Responsive Images | The Web Guy",
    "metaDescription": "Two supplied articles needed consistent site presentation, supported claims and connected navigation."
  },
  {
    "title": "Integrated Overlapping Website Pull Requests Without Dropping Changes",
    "slug": "integrated-overlapping-website-pull-requests-without-dropping-changes",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Production Debugging",
    "serviceSlug": "react-static-sites",
    "excerpt": "Related pull requests overlapped in shared site data, sitemaps and page content.",
    "problemSummary": "Related pull requests overlapped in shared site data, sitemaps and page content.",
    "whatIChecked": [
      "Open branches and overlapping edits",
      "Shared business and service-area data",
      "Combined page and form behavior"
    ],
    "whatIChanged": [
      "Resolved branch conflicts",
      "Connected dependent content to shared data",
      "Completed build, link, schema and responsive checks",
      "Merged the reviewed requests and synchronized the checkout"
    ],
    "resultSummary": "The reviewed requests were merged and the recorded integration checks passed. No private branch or repository identifiers are included.",
    "whatToWatchNext": [
      "Recheck shared data when new branches overlap"
    ],
    "toolsUsed": [
      "Git",
      "Static site",
      "Integration checks"
    ],
    "tags": [
      "Git",
      "Static site",
      "Integration checks"
    ],
    "relatedServices": [
      "react-static-sites"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Integrated Overlapping Website Pull Requests Without Dropping Changes | The Web Guy",
    "metaDescription": "Related pull requests overlapped in shared site data, sitemaps and page content."
  },
  {
    "title": "Built a Queued Form-to-CRM Plugin Awaiting Credentials",
    "slug": "built-queued-form-to-crm-plugin-awaiting-credentials",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "Existing forms needed CRM forwarding without relying on a paid form-webhook feature.",
    "problemSummary": "Existing forms needed CRM forwarding without relying on a paid form-webhook feature.",
    "whatIChecked": [
      "API requirements",
      "Form-field mappings",
      "Service-category compatibility"
    ],
    "whatIChanged": [
      "Built private credential and mapping controls",
      "Added queued delivery, stable submission identifiers and retries",
      "Completed the recorded syntax and automated checks",
      "Left forwarding paused until credentials and connection checks were available"
    ],
    "resultSummary": "The plugin was installed, but no live CRM delivery was performed. Unsupported service categories remained held for review.",
    "whatToWatchNext": [
      "Enter credentials and verify the connection before enabling",
      "Approve service-category handling"
    ],
    "toolsUsed": [
      "WordPress plugin",
      "CRM API",
      "Delivery queue"
    ],
    "tags": [
      "WordPress plugin",
      "CRM API",
      "Delivery queue"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Built a Queued Form-to-CRM Plugin Awaiting Credentials | The Web Guy",
    "metaDescription": "Existing forms needed CRM forwarding without relying on a paid form-webhook feature."
  },
  {
    "title": "Prepared a Git-Managed Article With Publication Blocked",
    "slug": "prepared-git-managed-article-with-publication-blocked",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "An article had to be prepared through the repository when CMS access was unavailable.",
    "problemSummary": "An article had to be prepared through the repository when CMS access was unavailable.",
    "whatIChecked": [
      "Supplied article",
      "Native article format",
      "Deployment permissions"
    ],
    "whatIChanged": [
      "Adapted content and image references",
      "Added listing and sitemap entries",
      "Completed the recorded build and local checks",
      "Opened the publication pull request"
    ],
    "resultSummary": "The article remained unpublished because the request was unmerged and the deployment preview was blocked.",
    "whatToWatchNext": [
      "Resolve review and deployment access before claiming publication"
    ],
    "toolsUsed": [
      "Git",
      "Static site",
      "Article publishing"
    ],
    "tags": [
      "Git",
      "Static site",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Prepared a Git-Managed Article With Publication Blocked | The Web Guy",
    "metaDescription": "An article had to be prepared through the repository when CMS access was unavailable."
  },
  {
    "title": "Published a PDF Article Through Secure File Transfer",
    "slug": "published-pdf-article-through-secure-file-transfer",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A supplied PDF needed conversion into a web article on an existing file-deployed site.",
    "problemSummary": "A supplied PDF needed conversion into a web article on an existing file-deployed site.",
    "whatIChecked": [
      "Source sections",
      "Existing visual system",
      "Production files and transfer access"
    ],
    "whatIChanged": [
      "Built the article and blog listing",
      "Added optimized accessible visuals and metadata",
      "Backed up affected production files",
      "Recovered from a transfer interruption and verified deployed output"
    ],
    "resultSummary": "The live article, supporting assets, navigation and sitemap were checked after transfer.",
    "whatToWatchNext": [
      "Keep a recoverable backup of later file deployments"
    ],
    "toolsUsed": [
      "SFTP",
      "WebP",
      "Article publishing"
    ],
    "tags": [
      "SFTP",
      "WebP",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published a PDF Article Through Secure File Transfer | The Web Guy",
    "metaDescription": "A supplied PDF needed conversion into a web article on an existing file-deployed site."
  },
  {
    "title": "Published an Image-Rich Article With a Keyboard-Accessible FAQ",
    "slug": "published-image-rich-article-with-keyboard-accessible-faq",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A supplied article needed photography, an accessible FAQ and integration with the existing blog.",
    "problemSummary": "A supplied article needed photography, an accessible FAQ and integration with the existing blog.",
    "whatIChecked": [
      "Source content and FAQs",
      "Photo relevance",
      "Internal links and metadata"
    ],
    "whatIChanged": [
      "Added optimized accessible images",
      "Built the keyboard-operable FAQ",
      "Connected the article to listings and sitemap",
      "Completed build and responsive checks"
    ],
    "resultSummary": "The article, imagery, FAQ and links were verified live after the approved publication.",
    "whatToWatchNext": [
      "Retest FAQ keyboard behavior after shared component edits"
    ],
    "toolsUsed": [
      "WebP",
      "Accessible FAQ",
      "Article publishing"
    ],
    "tags": [
      "WebP",
      "Accessible FAQ",
      "Article publishing"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published an Image-Rich Article With a Keyboard-Accessible FAQ | The Web Guy",
    "metaDescription": "A supplied article needed photography, an accessible FAQ and integration with the existing blog."
  },
  {
    "title": "Rebuilt a Service-Plan Comparison With a Readable Mobile Table",
    "slug": "rebuilt-service-plan-comparison-with-readable-mobile-table",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "A plan page needed clearer differences between offers and a usable comparison table on mobile.",
    "problemSummary": "A plan page needed clearer differences between offers and a usable comparison table on mobile.",
    "whatIChecked": [
      "Supplied plan information",
      "Existing page and backup",
      "Table structure and small-screen layout"
    ],
    "whatIChanged": [
      "Built the approved comparison and supporting sections",
      "Clarified pricing and contract copy",
      "Refined the unified mobile table",
      "Published on the existing URL after backup"
    ],
    "resultSummary": "The live page and mobile table were verified with the old plan copy removed. Client plan names, prices and distinguishing counts are omitted.",
    "whatToWatchNext": [
      "Keep plan terms synchronized with approved business changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Page builder",
      "Responsive tables"
    ],
    "tags": [
      "WordPress",
      "Page builder",
      "Responsive tables"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Rebuilt a Service-Plan Comparison With a Readable Mobile Table | The Web Guy",
    "metaDescription": "A plan page needed clearer differences between offers and a usable comparison table on mobile."
  },
  {
    "title": "Added a Persistent Quote Action and Updated Location Copy",
    "slug": "added-persistent-quote-action-and-updated-location-copy",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "The site needed a persistent quote path and approved changes to location-page content.",
    "problemSummary": "The site needed a persistent quote path and approved changes to location-page content.",
    "whatIChecked": [
      "Existing quote and booking actions",
      "Original page content",
      "Approved location copy"
    ],
    "whatIChanged": [
      "Added the persistent quote button",
      "Updated the booking-action presentation",
      "Published approved location copy and metadata",
      "Verified layouts and links"
    ],
    "resultSummary": "The requested quote and location updates were published and checked.",
    "whatToWatchNext": [
      "Retest shared actions after form or booking changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Mobile CTA",
      "Location pages"
    ],
    "tags": [
      "WordPress",
      "Mobile CTA",
      "Location pages"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Added a Persistent Quote Action and Updated Location Copy | The Web Guy",
    "metaDescription": "The site needed a persistent quote path and approved changes to location-page content."
  },
  {
    "title": "Published an Article Batch and Repaired Shared Hero Spacing",
    "slug": "published-article-batch-and-repaired-shared-hero-spacing",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "New posts needed better imagery and a layout fix for excess space above article heroes.",
    "problemSummary": "New posts needed better imagery and a layout fix for excess space above article heroes.",
    "whatIChecked": [
      "Supplied articles",
      "Blog-specific spacing rule",
      "Hero cropping and mobile order"
    ],
    "whatIChanged": [
      "Published the article batch",
      "Removed the excessive blog-only margin",
      "Rebuilt image/content sections and hero banners",
      "Verified the new posts without changing homepage spacing"
    ],
    "resultSummary": "The published posts had the revised layouts, imagery and metadata after the checks.",
    "whatToWatchNext": [
      "Keep blog-specific styling scoped away from the homepage"
    ],
    "toolsUsed": [
      "WordPress",
      "WebP",
      "Responsive layout"
    ],
    "tags": [
      "WordPress",
      "WebP",
      "Responsive layout"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Published an Article Batch and Repaired Shared Hero Spacing | The Web Guy",
    "metaDescription": "New posts needed better imagery and a layout fix for excess space above article heroes."
  },
  {
    "title": "Ported an Existing Article to a New Format Awaiting Merge",
    "slug": "ported-existing-article-to-new-format-awaiting-merge",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Landing Pages",
    "serviceSlug": "landing-pages",
    "excerpt": "An earlier article needed conversion to the current repository-managed article format.",
    "problemSummary": "An earlier article needed conversion to the current repository-managed article format.",
    "whatIChecked": [
      "Earlier article and source material",
      "Current block format",
      "Existing optimized images"
    ],
    "whatIChanged": [
      "Mapped the content into current blocks",
      "Preserved the URL, links and FAQs",
      "Removed an unverified claim",
      "Completed local/build checks and opened the dependent request"
    ],
    "resultSummary": "The conversion remained in an open dependent pull request with blocked preview access; live publication was not verified.",
    "whatToWatchNext": [
      "Merge dependencies and verify production output before promoting it"
    ],
    "toolsUsed": [
      "Git",
      "Static site",
      "Article migration"
    ],
    "tags": [
      "Git",
      "Static site",
      "Article migration"
    ],
    "relatedServices": [
      "landing-pages"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Ported an Existing Article to a New Format Awaiting Merge | The Web Guy",
    "metaDescription": "An earlier article needed conversion to the current repository-managed article format."
  },
  {
    "title": "Restricted Service-Page Copy to the Current Authorized Offering",
    "slug": "restricted-service-page-copy-to-current-authorized-offering",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "Technical SEO",
    "serviceSlug": "technical-seo-implementation",
    "excerpt": "A location page advertised a service beyond the business’s current approved offering.",
    "problemSummary": "A location page advertised a service beyond the business’s current approved offering.",
    "whatIChecked": [
      "Affected page copy and metadata",
      "Navigation and footer links",
      "Existing form and testimonials"
    ],
    "whatIChanged": [
      "Applied the approved offering restriction",
      "Removed incompatible service links",
      "Added a clear notice near the quote form",
      "Verified the logged-out page after cache clearing"
    ],
    "resultSummary": "The public page reflected the approved temporary restriction. This note omits the jurisdiction and permit details.",
    "whatToWatchNext": [
      "Revisit the restriction when the business authorizes a change"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "technical-seo-implementation"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Restricted Service-Page Copy to the Current Authorized Offering | The Web Guy",
    "metaDescription": "A location page advertised a service beyond the business’s current approved offering."
  },
  {
    "title": "Replaced Sitewide Forms and Corrected HTTPS References",
    "slug": "replaced-sitewide-forms-and-corrected-https-references",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "A WordPress site needed consistent quote forms, dependable mail setup and removal of insecure URL references.",
    "problemSummary": "A WordPress site needed consistent quote forms, dependable mail setup and removal of insecure URL references.",
    "whatIChecked": [
      "Existing forms",
      "Mail notification setup",
      "Stored HTTP and hostname references",
      "Certificate and redirect behavior"
    ],
    "whatIChanged": [
      "Created and styled a shared form",
      "Replaced the existing page forms",
      "Configured authenticated mail delivery",
      "Submitted a labeled test",
      "Corrected stored URL references and refreshed generated assets"
    ],
    "resultSummary": "The test submission succeeded and the mail log recorded sending. HTTPS and redirect checks passed; a remaining browser-profile warning was isolated from the site configuration.",
    "whatToWatchNext": [
      "Check actual recipient receipt separately from sent logs",
      "Recheck cached assets after hostname changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Forms",
      "HTTPS"
    ],
    "tags": [
      "WordPress",
      "Forms",
      "HTTPS"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Replaced Sitewide Forms and Corrected HTTPS References | The Web Guy",
    "metaDescription": "A WordPress site needed consistent quote forms, dependable mail setup and removal of insecure URL references."
  },
  {
    "title": "Removed Unapproved Email References From Stored Site Content",
    "slug": "removed-unapproved-email-references-from-stored-site-content",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "WordPress Support",
    "serviceSlug": "wordpress-support",
    "excerpt": "Stored website content still included email references that should no longer be present.",
    "problemSummary": "Stored website content still included email references that should no longer be present.",
    "whatIChecked": [
      "Site and stored-content email references"
    ],
    "whatIChanged": [
      "Located the unapproved references",
      "Removed the specified addresses"
    ],
    "resultSummary": "The requested email-reference cleanup was completed without publishing any addresses in this note.",
    "whatToWatchNext": [
      "Review templates and stored content after future account changes"
    ],
    "toolsUsed": [
      "WordPress",
      "Content audit"
    ],
    "tags": [
      "WordPress",
      "Content audit"
    ],
    "relatedServices": [
      "wordpress-support"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Removed Unapproved Email References From Stored Site Content | The Web Guy",
    "metaDescription": "Stored website content still included email references that should no longer be present."
  },
  {
    "title": "Built a Sticky Inquiry Form With a Private Mail Handler",
    "slug": "built-sticky-inquiry-form-with-private-mail-handler",
    "date": "2026-10-21",
    "displayDate": "October 21, 2026",
    "lastUpdated": null,
    "category": "API Integrations",
    "serviceSlug": "api-integrations",
    "excerpt": "A sticky inquiry form needed reliable delivery without exposing credentials or relying on an unsuitable initial provider.",
    "problemSummary": "A sticky inquiry form needed reliable delivery without exposing credentials or relying on an unsuitable initial provider.",
    "whatIChecked": [
      "Form fields and responsive behavior",
      "Initial delivery limitations",
      "Server-side credentials and attribution"
    ],
    "whatIChanged": [
      "Built the collapsible form",
      "Deployed a separate authenticated mail handler",
      "Kept the API key server-side",
      "Added successful-submission measurement",
      "Completed the recorded delivery tests and deployment"
    ],
    "resultSummary": "The form and handler were deployed and tested. The hosting plan could introduce a startup delay after inactivity.",
    "whatToWatchNext": [
      "Monitor delivery and cold-start behavior",
      "Keep credentials private and rotate when needed"
    ],
    "toolsUsed": [
      "Forms",
      "Mail API",
      "Conversion tracking"
    ],
    "tags": [
      "Forms",
      "Mail API",
      "Conversion tracking"
    ],
    "relatedServices": [
      "api-integrations"
    ],
    "screenshot": null,
    "screenshotAlt": null,
    "metaTitle": "Built a Sticky Inquiry Form With a Private Mail Handler | The Web Guy",
    "metaDescription": "A sticky inquiry form needed reliable delivery without exposing credentials or relying on an unsuitable initial provider."
  }
];
