export const skillPages = [
  {
    slug: "shopify-plus-liquid",
    title: "Shopify Plus & Liquid Contractor | The Web Guy",
    meta: "Get practical Shopify Plus and Shopify Liquid support for storefront fixes, product templates, schema, tracking, performance, and ecommerce cleanup.",
    h1: "Shopify Plus & Liquid Support at $55/hr",
    eyebrow: "Shopify Plus & Liquid",
    intro: "Shopify support for stores that need practical Liquid/front-end work, product template cleanup, tracking fixes, product data support, schema, and technical ecommerce troubleshooting.",
    problems: ["Product pages do not show the right data", "Liquid templates need cleanup", "Tracking or ecommerce events are missing", "Product schema or Merchant Center visibility is off", "Storefront scripts are slowing pages down"],
    tasks: ["Edit Liquid templates and sections", "Clean up product and collection layouts", "Support product schema and structured data", "Troubleshoot GA4/GTM ecommerce tracking", "Review script bloat and storefront performance", "Help with Shopify Plus production tasks"],
    connection: "This skill usually supports ecommerce cleanup, analytics and tracking, API integration work, technical SEO, and site speed cleanup.",
    contextCards: [
      ["Ecommerce support", "Shopify Liquid work usually sits inside broader ecommerce cleanup: product templates, schema, storefront UX, feeds, and checkout-adjacent issues.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Analytics and tracking", "Storefront changes often need GA4/GTM ecommerce events, pixels, and conversion checks before the work is considered done.", "/services/analytics-tracking/", "View tracking support", "analytics-tracking"],
      ["Product data", "Product attributes, schema, feed visibility, and Merchant Center issues often overlap with Shopify template work.", "/skills/google-merchant-center-product-data/", "View product data help", "ecommerce-support"],
      ["Performance cleanup", "Liquid sections, apps, scripts, and product media can drag storefront performance down and need practical speed review.", "/services/site-speed-performance/", "View speed cleanup", "site-speed-performance"]
    ],
    relatedServices: ["ecommerce-support", "analytics-tracking", "api-integrations", "site-speed-performance"],
    relatedSkills: ["google-merchant-center-product-data", "ga4-gtm-measurement-integrity", "rest-api-webhook-integrations", "performance-engineering"],
    faqs: [
      ["Can The Web Guy work inside Shopify Liquid?", "Yes. Liquid template edits, product page cleanup, sections, schema support, and front-end fixes are a good fit."],
      ["Is this full ecommerce consulting?", "No. This is practical technical support for storefront, tracking, schema, data, and integration issues."],
      ["Can Shopify tracking be checked?", "Yes. GA4, GTM, ecommerce events, pixels, and conversion flow can be reviewed and debugged."],
      ["Can this help Shopify Plus teams?", "Yes, especially for overflow production work, Liquid cleanup, product data issues, and implementation tasks."]
    ]
  },
  {
    slug: "wordpress-plugin-development",
    title: "WordPress Plugin Developer | Custom Plugin Development",
    meta: "Hire a WordPress plugin developer for custom plugin development, existing plugin modification, APIs, WooCommerce extensions, admin tools, automation, debugging, and maintenance.",
    h1: "WordPress Plugin Developer for Custom Features and Integrations",
    eyebrow: "WordPress Plugin Development",
    intro: "WordPress plugin developer help for custom plugin development, existing plugin modification, API integrations, WooCommerce extensions, admin tools, automation, shortcodes, and site-specific functionality that should not be buried in a theme file.",
    problems: ["A plugin almost does what the site needs but not quite", "Admin workflows are manual or fragile", "WordPress needs to connect to an API, webhook, CRM, or internal system", "WooCommerce or form functionality needs custom behavior", "Shortcodes, hooks, scheduled tasks, or plugin data are breaking", "Code is buried in theme files where it should be owned by a plugin"],
    tasks: ["Build small custom WordPress plugins", "Modify existing plugin behavior with hooks, filters, shortcodes, and safe extension points", "Create admin screens, custom post types, settings, scheduled tasks, and database-backed workflows", "Connect REST APIs, webhooks, authentication, and external data sources", "Build WooCommerce extensions or site-specific commerce logic", "Test compatibility, security assumptions, permissions, and update-safe behavior"],
    connection: "Plugin development connects directly to WordPress support, plugin conflict repair, API integrations, WooCommerce, automation, technical SEO, and ongoing webmaster support when custom functionality has to survive updates.",
    contextCards: [
      ["Custom plugin or theme code?", "Use custom plugin development when the feature owns data, admin behavior, scheduled work, integrations, permissions, or reusable functionality. Use theme code when the change is mostly presentation.", "/skills/wordpress-theme-development/", "Compare theme development", "wordpress-support"],
      ["Existing plugin modification", "Use a WordPress plugin developer when an existing plugin needs hooks, filters, templates, API adjustments, or safer extension work instead of direct vendor-file edits.", "/services/wordpress-plugin-conflict-help/", "View plugin troubleshooting", "wordpress-support"],
      ["API integrations", "Custom WordPress plugins often need REST API calls, webhook handlers, authentication, payload cleanup, retries, and reliable data handoff between tools.", "/services/api-integrations/", "View API integrations", "api-integrations"],
      ["WooCommerce extensions", "WooCommerce plugin work can cover checkout rules, product data, order handling, admin workflow, fulfillment data, and compatibility with other extensions.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Admin tools and automation", "Internal WordPress dashboards, importers, scheduled checks, reporting helpers, and workflow tools often become lightweight custom plugin projects.", "/services/automation-internal-tools/", "View automation help", "automation-internal-tools"],
      ["Plugin development examples", "Examples include a CRM handoff plugin with webhook retries, a WooCommerce order-status helper, and an admin reporting tool built around custom post types and scheduled syncs.", "/contact/", "Discuss a custom plugin", "wordpress-support"]
    ],
    relatedServices: ["wordpress-support", "api-integrations", "automation-internal-tools", "technical-seo-implementation"],
    relatedSkills: ["php-javascript-node", "rest-api-webhook-integrations", "automation-dashboards-reporting", "wordpress-theme-development"],
    faqs: [
      ["What does a WordPress plugin developer build?", "Common work includes custom plugins, existing plugin modifications, admin tools, custom post types, settings screens, scheduled tasks, WooCommerce extensions, shortcodes, REST APIs, webhooks, and database-backed workflows."],
      ["Can you modify an existing plugin?", "Often yes, when the plugin exposes hooks, filters, templates, APIs, or documented extension points. Directly editing vendor plugin files is usually avoided because updates overwrite those changes."],
      ["Can plugin code connect to APIs?", "Yes. REST APIs, webhooks, authentication, JSON payloads, retries, logging, and WordPress-side data handling are a strong fit."],
      ["How long does a custom plugin take?", "Small plugins can sometimes be scoped in hours. Larger integrations depend on requirements, third-party API behavior, data model, testing needs, and compatibility risk."],
      ["Who owns the custom plugin code?", "Project ownership should be clear before work starts. For site-specific plugin work, the practical goal is usually code the site owner can keep using and maintain."],
      ["Why not put code in functions.php?", "Small presentation snippets can be fine, but durable site-specific functionality usually belongs in a small plugin so it is not tied to a theme change."]
    ]
  },
  {
    slug: "wordpress-theme-development",
    title: "WordPress Theme Development Services | The Web Guy",
    meta: "Custom WordPress theme development services for child themes, block themes, WooCommerce templates, design-to-WordPress builds, responsive layouts, performance, accessibility, and theme maintenance.",
    h1: "Custom WordPress Theme Development",
    eyebrow: "WordPress Themes",
    intro: "Custom WordPress theme development for existing and new WordPress sites: custom themes from designs, child themes, block themes, WooCommerce templates, reusable components, performance-minded templates, accessibility cleanup, and ongoing theme work.",
    problems: ["A custom WordPress theme needs to match a real design without page-builder bloat", "A child theme or existing theme needs safer template changes", "WooCommerce templates, archive pages, or custom fields need better output", "Mobile layouts, accessibility, or Core Web Vitals suffer because of theme structure", "SEO recommendations require template-level headings, schema placement, or internal links", "The site needs reusable components instead of one-off page hacks"],
    tasks: ["Build custom WordPress themes from designs or existing page structures", "Create child themes, block themes, template parts, and reusable component systems", "Develop WooCommerce theme templates and product/archive layouts", "Connect custom fields, post types, Gutenberg blocks, and plugin output to front-end templates", "Improve responsive layout, accessibility, Core Web Vitals, CSS, JavaScript, and template performance", "Debug and maintain existing themes without defaulting to a full rebuild"],
    connection: "Theme work supports WordPress support, landing pages, WooCommerce, technical SEO implementation, site speed cleanup, Gutenberg/block editing, plugin output, and website fixes.",
    contextCards: [
      ["WordPress themes I build", "Custom themes from Figma or existing designs, Gutenberg/block themes, child themes, WooCommerce theme development, existing-theme rebuilds, and reusable component systems.", "/contact/", "Discuss a WordPress theme", "wordpress-support"],
      ["Design to WordPress", "Theme work can turn approved layouts into responsive PHP templates, block patterns, custom fields, reusable sections, and editable content areas.", "/services/landing-pages/", "View landing page help", "landing-pages"],
      ["Custom theme, child theme, or builder?", "A custom theme fits durable structure, a child theme fits safer changes to an existing theme, and a page builder fits teams that need visual editing more than template control.", "/services/wordpress-support/", "Compare WordPress support", "wordpress-support"],
      ["WooCommerce templates", "Product, archive, cart-adjacent, and store templates often need theme-level changes for layout, product data, schema, speed, and conversion cleanup.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Technical SEO", "Template headings, internal links, schema placement, crawlable content, and Core Web Vitals often connect custom WordPress theme development to SEO implementation.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Theme repair examples", "Examples include mobile layout repair after a theme update, WooCommerce template cleanup for product data, and reusable service-page components built from custom fields.", "/blog/broken-layouts-mobile-website-fixes/", "Read layout repair guide", "website-fixes"]
    ],
    relatedServices: ["wordpress-support", "landing-pages", "technical-seo-implementation", "website-fixes"],
    relatedSkills: ["wordpress-plugin-development", "performance-engineering", "schema-structured-data", "php-javascript-node"],
    faqs: [
      ["Do you build custom WordPress themes?", "Yes. Custom WordPress theme development can include design-to-WordPress builds, block themes, child themes, template parts, custom fields, WooCommerce templates, and reusable components."],
      ["Can you work with child themes?", "Yes. Child theme edits, template overrides, and safer theme-level changes are a good fit when the existing parent theme should remain in place."],
      ["Can you clean up Elementor or page-builder pages?", "Yes. Builder spacing, mobile layout problems, duplicated sections, and content cleanup fit this work, though some issues are better solved in templates than in the builder UI."],
      ["Can theme work help SEO?", "Yes. Headings, template markup, internal links, schema placement, crawlable content, performance, accessibility, and page structure often affect SEO implementation."],
      ["Should I use a custom theme, child theme, or page builder?", "Use a custom theme for durable structure, a child theme for safer changes on an existing theme, and a page builder when visual editing flexibility matters more than strict template control."],
      ["Do you rebuild entire themes?", "Full rebuilds can be scoped when there is a clear reason. Many existing sites only need practical theme support, cleanup, or a focused child-theme/template change."]
    ]
  },
  {
    slug: "performance-engineering",
    title: "Website Performance Engineering Diagnostics | The Web Guy",
    meta: "Get technical performance diagnostics for Core Web Vitals, Lighthouse, script bloat, bundle analysis, hydration issues, caching behavior, layout shift, and front-end optimization.",
    h1: "Website Performance Engineering Diagnostics at $55/hr",
    eyebrow: "Performance Engineering",
    intro: "Technical diagnostics for performance problems that need more than a plugin setting: Core Web Vitals, Lighthouse findings, render-blocking scripts, bundle weight, hydration behavior, caching headers, layout shift, and front-end optimization tradeoffs.",
    problems: ["Lighthouse or PageSpeed points to scripts, images, layout shift, or render delay", "A Svelte, React, Shopify, or WordPress page feels heavy after real browser inspection", "Bundle weight, hydration, third-party tags, or duplicated assets need review", "Caching helps some pages but creates stale or inconsistent behavior", "The team needs proof of what is actually slowing the page before changing production"],
    tasks: ["Run Lighthouse and browser diagnostics against key pages", "Trace render-blocking scripts, third-party tags, and network weight", "Review bundle output, hydration behavior, and front-end asset loading", "Investigate Cumulative Layout Shift and unstable page elements", "Check cache headers, Cloudflare behavior, compression, and hosting constraints", "Document the practical fixes, tradeoffs, and limits"],
    connection: "Performance engineering is the deeper diagnostic capability behind site speed cleanup, WordPress support, ecommerce support, platform reliability, and Core Web Vitals work.",
    contextCards: [
      ["Site speed cleanup", "Use the service page for buyer-facing speed cleanup on important pages; use this skill when the work needs diagnostics, tooling, and technical proof.", "/services/site-speed-performance/", "View speed cleanup", "site-speed-performance"],
      ["WordPress support", "Plugin bloat, page builders, images, caching, and theme output often make performance work a WordPress support issue.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
      ["Ecommerce support", "Product pages, collection pages, apps, tracking, and media-heavy templates can make ecommerce performance especially fragile.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Cloudflare and DNS", "Caching, proxy behavior, SSL settings, headers, and hosting limits often affect whether performance fixes stick.", "/skills/cloudflare-dns-ssl/", "View Cloudflare help", "security-hosting-reliability"]
    ],
    relatedServices: ["site-speed-performance", "wordpress-support", "ecommerce-support", "security-hosting-reliability"],
    relatedSkills: ["core-web-vitals-lighthouse", "platform-reliability", "cloudflare-dns-ssl", "production-debugging"],
    faqs: [
      ["Can you guarantee perfect speed scores?", "No. Performance depends on hosting, themes, plugins, scripts, and business requirements. The work focuses on practical improvement."],
      ["Can you work from Lighthouse notes?", "Yes. Lighthouse and PageSpeed reports are useful diagnostics when paired with browser inspection, network traces, and page-specific context."],
      ["Can third-party scripts be fixed?", "Some can be deferred, cleaned up, or moved. Some are business requirements and need tradeoffs explained."],
      ["Does performance work help SEO?", "It can support SEO and conversions, especially when slow pages, layout shift, poor mobile UX, or Core Web Vitals issues are part of the problem."]
    ]
  },
  {
    slug: "production-debugging",
    title: "Production Website Debugging and Live-Site Debug Help | The Web Guy",
    meta: "Debug production website issues including broken layouts, JavaScript errors, forms, APIs, tracking, CMS issues, integrations, cache, and unstable live-site behavior.",
    h1: "Production Website Debugging at $55/hr",
    eyebrow: "Production Debugging",
    intro: "Debugging support for real production websites when something is broken, weird, unstable, or hard to trace across the CMS, front end, scripts, APIs, hosting, tracking, cache, and third-party tools.",
    problems: ["A form submits but leads do not arrive", "A script works on one page and fails on another", "An API or webhook changed behavior", "Tracking is missing or duplicated", "A CMS update broke visible layouts", "A bug only appears on the live site"],
    tasks: ["Inspect browser console and network errors", "Trace form and script behavior", "Test API payloads in Postman", "Review CMS/theme/plugin interactions", "Check tracking events and pixels", "Compare cache, live markup, and deployment behavior", "Document what changed and what still needs attention"],
    connection: "Production debugging supports website fixes, API integrations, analytics cleanup, security/hosting reliability, and agency overflow work.",
    contextCards: [
      ["Website fixes", "Visible bugs, broken layouts, failed forms, and script conflicts usually need production debugging before the fix is obvious.", "/services/website-fixes/", "View website fixes", "website-fixes"],
      ["API integrations", "Payload errors, failed webhooks, bad responses, and missing logs often connect debugging to integration work.", "/services/api-integrations/", "View API integrations", "api-integrations"],
      ["Analytics and tracking", "Missing events, duplicate tags, broken pixels, and unreliable form data often need debugging inside the live page flow.", "/services/analytics-tracking/", "View tracking support", "analytics-tracking"],
      ["Reliability support", "Redirect loops, SSL issues, cache behavior, and hosting errors can make a production bug a stability problem.", "/services/security-hosting-reliability/", "View reliability support", "security-hosting-reliability"]
    ],
    relatedServices: ["website-fixes", "api-integrations", "analytics-tracking", "security-hosting-reliability"],
    relatedSkills: ["rest-api-webhook-integrations", "ga4-gtm-measurement-integrity", "php-javascript-node", "platform-reliability"],
    faqs: [
      ["What should I send for debugging?", "Send the URL, what should happen, what happens instead, screenshots if useful, and what changed recently."],
      ["Can you debug live production issues?", "Yes, when access and scope are clear. Some urgent work depends on availability."],
      ["How do you debug in production without making it worse?", "Start by reproducing the issue, capturing evidence, checking browser and network clues, understanding rollback options, and making the smallest practical change that can be verified."],
      ["Can you debug APIs and webhooks?", "Yes. Payloads, responses, logs, and Postman checks can help trace integration issues."],
      ["Can you debug tracking problems?", "Yes. GA4/GTM events, pixels, duplicated tags, and missing conversions are common debugging tasks."]
    ]
  },
  {
    slug: "ga4-gtm-measurement-integrity",
    title: "GA4 & GTM Measurement Integrity Help | The Web Guy",
    meta: "Get GA4 and Google Tag Manager measurement integrity help for form tracking, conversion events, ecommerce tracking, pixels, campaign data, and verification.",
    h1: "GA4 & GTM Measurement Integrity at $55/hr",
    eyebrow: "GA4 / GTM",
    intro: "Measurement integrity support for GA4, Google Tag Manager, form events, conversions, pixels, campaign tracking, ecommerce events, duplicate tags, and data that needs verification.",
    problems: ["Conversions are missing or duplicated", "GTM has tags nobody trusts", "Forms changed and tracking did not", "Campaign data is inconsistent", "Ecommerce events are incomplete"],
    tasks: ["Review GA4 events and conversions", "Clean up GTM tags/triggers/variables", "Verify forms and thank-you flows", "Check pixels and campaign scripts", "Debug ecommerce measurement", "Document what fires and where"],
    connection: "Measurement integrity supports analytics tracking, landing pages, ecommerce support, technical SEO, and agency reporting work.",
    contextCards: [
      ["Analytics and tracking", "GA4/GTM measurement integrity is the core skill behind tracking cleanup, event verification, and conversion QA.", "/services/analytics-tracking/", "View tracking support", "analytics-tracking"],
      ["Landing pages", "Campaign and service pages need form events, click tracking, paid traffic parameters, and conversion checks before launch.", "/services/landing-pages/", "View landing page help", "landing-pages"],
      ["Ecommerce support", "Purchase events, product data, checkout steps, and revenue mismatch issues often move measurement work into ecommerce cleanup.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Production debugging", "Tracking issues often hide in scripts, DOM changes, redirects, consent behavior, and real browser event flow.", "/skills/production-debugging/", "View debugging help", "website-fixes"]
    ],
    relatedServices: ["analytics-tracking", "landing-pages", "ecommerce-support", "technical-seo-implementation"],
    relatedSkills: ["shopify-plus-liquid", "production-debugging", "google-merchant-center-product-data", "crawl-analysis-internal-linking"],
    faqs: [
      ["Can you set up GA4 events?", "Yes. Events, conversions, form interactions, click tracking, and ecommerce signals can be implemented and checked."],
      ["Can you clean up GTM?", "Yes. Tags, triggers, variables, duplicate scripts, and preview-mode testing are a good fit."],
      ["Can you verify tracking accuracy?", "Yes. The goal is to confirm what fires, where it fires, and what data is sent."],
      ["Can this help agencies?", "Yes. Agencies often need tracking QA before campaigns, reports, or landing pages go live."]
    ]
  },
  {
    slug: "rest-api-webhook-integrations",
    title: "REST API and Webhook Integration Help | The Web Guy",
    meta: "Need to know whether an API supports REST and webhooks? Get REST API and webhook integration help for forms, CRMs, CMS platforms, ecommerce systems, background jobs, Postman testing, payloads, and data cleanup.",
    h1: "REST API and Webhook Integration Help at $55/hr",
    eyebrow: "APIs & Webhooks",
    intro: "Need to know whether an API supports REST and webhooks, or whether a website handoff should use one, the other, or both? This page covers API and webhook support for forms, CRMs, CMS platforms, ecommerce systems, data workflows, background jobs, and automation without becoming fragile.",
    problems: ["You need to confirm whether the API supports REST, webhooks, or both", "A webhook is firing but the receiving system is failing", "A form needs to send lead data somewhere useful", "API payloads need tested before launch", "Product or customer data needs cleanup", "Background jobs fail silently"],
    tasks: ["Test REST API requests in Postman", "Review JSON payloads and responses", "Debug webhook delivery issues", "Connect forms to CRMs or email workflows", "Support ecommerce/CMS integrations", "Add practical error handling and logging"],
    connection: "API and webhook work supports API integrations, automation tools, ecommerce support, analytics tracking, and WordPress plugin development.",
    contextCards: [
      ["API integrations", "REST API and webhook skills usually support practical website integration work for forms, CRMs, CMS tools, and ecommerce systems.", "/services/api-integrations/", "View API integrations", "api-integrations"],
      ["Automation tools", "Webhook handlers, scheduled jobs, payload cleanup, and recurring data checks often become lightweight internal automation.", "/services/automation-internal-tools/", "View automation help", "automation-internal-tools"],
      ["Ecommerce support", "Product feeds, order workflows, checkout data, and catalog updates often depend on reliable API or webhook behavior.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Production debugging", "Failed requests, authentication errors, timeouts, and bad payloads need live debugging before integrations can be trusted.", "/skills/production-debugging/", "View debugging help", "website-fixes"]
    ],
    relatedServices: ["api-integrations", "automation-internal-tools", "ecommerce-support", "analytics-tracking"],
    relatedSkills: ["wordpress-plugin-development", "php-javascript-node", "data-cleanup-json-csv", "production-debugging"],
    faqs: [
      ["Does the API support REST and webhooks?", "That depends on the platform, but many website integrations use REST APIs for request/response work and webhooks for event-based handoffs. The practical task is confirming endpoint docs, auth, payload shape, response behavior, and retry/logging support."],
      ["Can you connect forms to another system?", "Yes. CRM, email, webhook, and API handoff work is a common fit."],
      ["Do you use Postman?", "Yes. Postman-style testing is useful for payloads, auth, responses, and debugging."],
      ["Can you build enterprise integrations?", "The public offer is practical website integration work, not large enterprise platform architecture."],
      ["Can you help with webhooks?", "Yes. Delivery issues, payload formats, endpoint behavior, and failure handling can be reviewed."]
    ]
  },
  {
    slug: "programmatic-seo",
    title: "Programmatic SEO Developer Contractor | The Web Guy",
    meta: "Get programmatic SEO support for scalable page structure, templates, internal links, schema, crawl cleanup, data workflows, and technical implementation.",
    h1: "Programmatic SEO Support at $55/hr",
    eyebrow: "Programmatic SEO",
    intro: "Programmatic SEO support for teams that need scalable page structures, templates, internal links, schema, crawl control, data cleanup, and implementation work that does not turn into thin duplicate pages.",
    problems: ["Location or service pages need a real structure", "Product/category pages need scalable metadata", "Internal links are weak or inconsistent", "Data sources are messy", "Programmatic pages risk becoming thin doorway content"],
    tasks: ["Plan reusable page structures", "Support metadata and schema patterns", "Review internal link architecture", "Clean JSON/CSV data inputs", "Help generate useful page content frameworks", "Check crawlability and indexation risks"],
    connection: "Programmatic SEO supports technical SEO implementation, automation, schema work, crawl analysis, and location/service page expansion.",
    contextCards: [
      ["Technical SEO implementation", "Programmatic SEO work still needs implementation discipline: metadata, headings, schema, crawl paths, and indexation cleanup.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Automation tools", "Scalable pages, exports, QA checks, data cleanup, and page generation patterns often need lightweight automation.", "/services/automation-internal-tools/", "View automation support", "automation-internal-tools"],
      ["Schema support", "Data-driven service, product, location, and article pages often need structured data patterns that match real page content.", "/skills/schema-structured-data/", "View schema help", "technical-seo-implementation"],
      ["Crawl and internal links", "Programmatic pages need crawlable paths, useful hubs, internal links, and safeguards against thin isolated URLs.", "/skills/crawl-analysis-internal-linking/", "View crawl help", "technical-seo-implementation"]
    ],
    relatedServices: ["technical-seo-implementation", "automation-internal-tools", "landing-pages", "api-integrations"],
    relatedSkills: ["schema-structured-data", "crawl-analysis-internal-linking", "automation-dashboards-reporting", "data-cleanup-json-csv"],
    faqs: [
      ["Do you create doorway pages?", "No. Programmatic SEO should create useful pages with real value, not city or keyword swaps."],
      ["Can you help with page templates?", "Yes. Templates, metadata patterns, schema, internal links, and data structures are a good fit."],
      ["Can this work with location pages?", "Yes, when local pages include useful, unique context and real service relevance."],
      ["Can you help clean source data?", "Yes. JSON/CSV cleanup and data normalization often support scalable SEO pages."]
    ]
  },
  {
    slug: "schema-structured-data",
    title: "Schema & Structured Data Implementation | The Web Guy",
    meta: "Get schema and structured data implementation help for WordPress, ecommerce, service pages, local pages, FAQs, products, and technical SEO cleanup.",
    h1: "Schema & Structured Data Implementation at $55/hr",
    eyebrow: "Schema & Structured Data",
    intro: "Structured data support for teams that need schema added, cleaned up, validated, or connected to real page templates across WordPress, ecommerce, service pages, local pages, FAQs, and technical SEO work.",
    problems: ["Schema exists but does not match the page", "Product data is incomplete or inconsistent", "FAQ, local, service, or product markup needs implementation", "SEO recommendations mention schema but nobody has added it", "Templates output duplicate or outdated structured data"],
    tasks: ["Review existing structured data output", "Implement practical schema patterns", "Support FAQ, service, local, product, and organization markup", "Clean duplicate schema from plugins or themes", "Coordinate schema with product data and page content", "Validate structured data after changes"],
    connection: "Schema work supports technical SEO implementation, ecommerce support, programmatic SEO, crawl cleanup, WordPress theme work, and product data visibility.",
    contextCards: [
      ["Technical SEO implementation", "Schema belongs with the rest of technical SEO: metadata, headings, crawl cleanup, redirects, and page structure.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Ecommerce support", "Product schema, offers, identifiers, Merchant Center visibility, and catalog data often connect schema to ecommerce cleanup.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Product data", "Structured data is only useful when product attributes, feeds, and page content agree with the data being output.", "/skills/google-merchant-center-product-data/", "View product data help", "ecommerce-support"],
      ["WordPress support", "Schema may come from SEO plugins, themes, blocks, custom code, or templates inside an existing WordPress site.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"]
    ],
    relatedServices: ["technical-seo-implementation", "ecommerce-support", "wordpress-support", "landing-pages"],
    relatedSkills: ["programmatic-seo", "crawl-analysis-internal-linking", "google-merchant-center-product-data", "wordpress-theme-development"],
    faqs: [
      ["Can schema be added to WordPress?", "Yes. Schema may come from an SEO plugin, theme template, custom code, or a site-specific implementation depending on the setup."],
      ["Can schema help ecommerce pages?", "Yes. Product schema, offer data, review data where valid, breadcrumbs, and product identifiers can support ecommerce visibility."],
      ["Do you guarantee rich results?", "No. Structured data can make pages eligible for certain search features, but search engines decide what appears."],
      ["Can duplicate schema be cleaned up?", "Yes. Duplicate or conflicting output from themes, plugins, and ecommerce templates can be reviewed and cleaned where access allows."]
    ]
  },
  {
    slug: "crawl-analysis-internal-linking",
    title: "Crawl Analysis & Internal Linking Help | The Web Guy",
    meta: "Get crawl analysis and internal linking implementation help for broken links, orphaned pages, crawl paths, redirects, indexation cleanup, and SEO audits.",
    h1: "Crawl Analysis & Internal Linking Support at $55/hr",
    eyebrow: "Crawl Analysis & Internal Linking",
    intro: "Practical crawl and internal linking support for sites with broken links, orphaned pages, weak crawl paths, redirect issues, duplicate pages, thin sections, and SEO audit notes that need implementation.",
    problems: ["Important pages are hard to reach", "Crawl exports show broken links or redirect chains", "SEO pages are orphaned or weakly linked", "Internal links are inconsistent across templates", "Indexation cleanup needs careful implementation"],
    tasks: ["Review crawl exports and URL patterns", "Identify broken links, redirect chains, and orphaned pages", "Improve internal links between services, posts, locations, and products", "Support crawl-aware page templates", "Help clean indexation and duplicate-page issues", "Document practical next steps after crawl review"],
    connection: "Crawl analysis and internal linking support technical SEO implementation, programmatic SEO, landing pages, ecommerce category/product work, and site architecture cleanup.",
    contextCards: [
      ["Technical SEO implementation", "Crawl findings usually need implementation: redirects, broken links, canonical cleanup, headings, schema, and internal links.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Ecommerce support", "Product and category pages often need crawl path cleanup, internal product links, duplicate handling, and schema alignment.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Programmatic SEO", "Scalable page sets need crawl-aware templates, internal link modules, and safeguards against thin orphaned pages.", "/skills/programmatic-seo/", "View programmatic SEO", "technical-seo-implementation"],
      ["Agency overflow", "Crawl exports and internal link edits are common agency implementation tasks that can be handed off hourly.", "/services/agency-overflow/", "View agency overflow", "agency-overflow"]
    ],
    relatedServices: ["technical-seo-implementation", "landing-pages", "ecommerce-support", "agency-overflow"],
    relatedSkills: ["programmatic-seo", "schema-structured-data", "ga4-gtm-measurement-integrity", "performance-engineering"],
    faqs: [
      ["Can you work from a crawl export?", "Yes. Screaming Frog-style exports, audit spreadsheets, URL lists, and crawl notes are useful starting points."],
      ["Can internal links be added inside WordPress?", "Yes. Internal link updates can happen in content, page builders, menus, templates, related modules, or reusable blocks."],
      ["Can crawl analysis help ecommerce sites?", "Yes. Ecommerce sites often need cleaner category paths, product links, faceted navigation review, and duplicate-page cleanup."],
      ["Is this a full SEO strategy?", "No. This is implementation-focused support for crawl findings, internal links, redirects, and site-structure cleanup."]
    ]
  },
  {
    slug: "google-merchant-center-product-data",
    title: "Google Merchant Center & Product Data Help | The Web Guy",
    meta: "Get Google Merchant Center and product data support for ecommerce feeds, product schema, catalog cleanup, tracking, Shopify, WooCommerce, and BigCommerce.",
    h1: "Google Merchant Center & Product Data Support at $55/hr",
    eyebrow: "Merchant Center",
    intro: "Product data support for ecommerce stores dealing with Merchant Center issues, product schema, feeds, missing attributes, catalog cleanup, product relationships, and tracking gaps.",
    problems: ["Products are disapproved or missing data", "Product schema does not match the page", "Catalog data is inconsistent", "Feeds need cleanup before campaigns", "Tracking and product visibility do not line up"],
    tasks: ["Review product schema and structured data", "Support feed visibility and product attributes", "Clean up product CSV/data issues", "Help trace Shopify/WooCommerce/BigCommerce catalog problems", "Check product page SEO and internal links", "Coordinate tracking and product data QA"],
    connection: "Merchant Center and product data work supports ecommerce support, analytics tracking, technical SEO, schema, and Shopify/Liquid cleanup.",
    contextCards: [
      ["Ecommerce support", "Merchant Center and product data issues usually sit inside broader ecommerce cleanup across templates, feeds, schema, and tracking.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Schema support", "Product structured data needs to match visible product details, feed fields, identifiers, prices, availability, and page content.", "/skills/schema-structured-data/", "View schema help", "technical-seo-implementation"],
      ["Analytics and tracking", "Product visibility problems often need ecommerce events, revenue data, product IDs, and campaign reporting checked too.", "/services/analytics-tracking/", "View tracking support", "analytics-tracking"],
      ["API integrations", "Feeds, product exports, catalog syncs, and cleanup scripts can require API integration or data workflow support.", "/services/api-integrations/", "View API support", "api-integrations"]
    ],
    relatedServices: ["ecommerce-support", "analytics-tracking", "technical-seo-implementation", "api-integrations"],
    relatedSkills: ["shopify-plus-liquid", "schema-structured-data", "data-cleanup-json-csv", "ga4-gtm-measurement-integrity"],
    faqs: [
      ["Can you fix every Merchant Center issue?", "No one should promise that without reviewing the account and feed, but technical product data and schema issues can be investigated."],
      ["Can you help with Shopify product data?", "Yes. Shopify product data, Liquid templates, schema, and tracking all connect to this work."],
      ["Can CSV cleanup help?", "Often. Product data issues frequently start with inconsistent attributes, missing fields, or messy exports."],
      ["Does this include product schema?", "Yes. Product schema and structured data are a common part of ecommerce visibility cleanup."]
    ]
  },
  {
    slug: "cloudflare-dns-ssl",
    title: "Cloudflare, DNS & SSL Website Support | The Web Guy",
    meta: "Get Cloudflare, DNS, and SSL support for website stability, redirects, caching, SSL/TLS issues, domain launches, and practical reliability fixes.",
    h1: "Cloudflare, DNS & SSL Support at $55/hr",
    eyebrow: "Cloudflare / DNS / SSL",
    intro: "Practical support for DNS records, SSL/TLS issues, Cloudflare settings, redirects, cache behavior, domain changes, launch checks, and reliability problems that sit below the visible page.",
    problems: ["SSL warnings appear after a domain or hosting change", "Cloudflare caching is hiding updates or breaking behavior", "DNS records are confusing or duplicated", "Redirects are looping or inconsistent", "A launch needs careful domain and SSL checks"],
    tasks: ["Review DNS records", "Troubleshoot SSL/TLS settings", "Check Cloudflare proxy/cache behavior", "Review redirects and headers", "Support domain launches and migrations", "Document reliability risks and next steps"],
    connection: "Cloudflare, DNS, and SSL work supports security/hosting reliability, site speed, platform reliability, website fixes, and ongoing webmaster support.",
    contextCards: [
      ["Reliability support", "Cloudflare, DNS, and SSL work is the technical layer behind practical website security, hosting, and reliability support.", "/services/security-hosting-reliability/", "View reliability support", "security-hosting-reliability"],
      ["Site speed cleanup", "Cloudflare cache, proxy behavior, headers, and hosting limits can affect whether performance improvements actually hold.", "/services/site-speed-performance/", "View speed cleanup", "site-speed-performance"],
      ["Website fixes", "SSL warnings, redirect loops, cache conflicts, mixed content, and DNS changes often surface as broken website behavior.", "/services/website-fixes/", "View website fixes", "website-fixes"],
      ["Ongoing support", "DNS, SSL, cache rules, hosting checks, and launch reliability are recurring webmaster support needs.", "/services/ongoing-webmaster-support/", "View webmaster support", "ongoing-webmaster-support"]
    ],
    relatedServices: ["security-hosting-reliability", "site-speed-performance", "website-fixes", "ongoing-webmaster-support"],
    relatedSkills: ["platform-reliability", "security-hardening", "linux-hosting-server-support", "performance-engineering"],
    faqs: [
      ["Can you help with DNS records?", "Yes. DNS cleanup, record review, launches, and troubleshooting are a good fit."],
      ["Can you fix SSL issues?", "SSL/TLS problems can be reviewed and often corrected depending on hosting and domain access."],
      ["Can Cloudflare affect speed?", "Yes. Cloudflare can help performance, but cache and proxy settings can also create confusion if misconfigured."],
      ["Is this cybersecurity work?", "This is practical website reliability and hardening support, not enterprise cybersecurity consulting."]
    ]
  }
];

export const skillMap = Object.fromEntries(skillPages.map((skill) => [skill.slug, skill]));

export function skillUrl(slug) {
  return `/skills/${slug}/`;
}

export const serviceSkillMap = {
  "wordpress-support": ["wordpress-plugin-development", "wordpress-theme-development", "performance-engineering"],
  "technical-seo-implementation": ["programmatic-seo", "schema-structured-data", "crawl-analysis-internal-linking"],
  "landing-pages": ["ga4-gtm-measurement-integrity", "performance-engineering", "programmatic-seo"],
  "site-speed-performance": ["performance-engineering", "cloudflare-dns-ssl", "production-debugging"],
  "website-fixes": ["production-debugging", "php-javascript-node", "cloudflare-dns-ssl"],
  "ai-built-website-cleanup": ["production-debugging", "performance-engineering", "rest-api-webhook-integrations"],
  "agency-overflow": ["production-debugging", "wordpress-theme-development", "automation-dashboards-reporting"],
  "ecommerce-support": ["shopify-plus-liquid", "google-merchant-center-product-data", "ga4-gtm-measurement-integrity"],
  "analytics-tracking": ["ga4-gtm-measurement-integrity", "production-debugging", "google-merchant-center-product-data"],
  "api-integrations": ["rest-api-webhook-integrations", "wordpress-plugin-development", "production-debugging"],
  "security-hosting-reliability": ["cloudflare-dns-ssl", "production-debugging", "performance-engineering"],
  "automation-internal-tools": ["rest-api-webhook-integrations", "programmatic-seo", "wordpress-plugin-development"],
  "ongoing-webmaster-support": ["wordpress-theme-development", "cloudflare-dns-ssl", "ga4-gtm-measurement-integrity"],
  "react-static-sites": ["performance-engineering", "ga4-gtm-measurement-integrity", "programmatic-seo"]
};
