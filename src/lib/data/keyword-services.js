import { coreServicePages } from "./services.js";

export const keywordLandingSpecs = [
  {
    slug: "wordpress-help",
    title: "WordPress Help at $55/hr | The Web Guy",
    meta: "Get practical WordPress help for broken pages, plugin issues, Elementor cleanup, forms, theme edits, and small website tasks.",
    h1: "WordPress Help at $55/hr",
    eyebrow: "WordPress Help",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "general WordPress help when the issue is not cleanly scoped yet",
    problems: ["A WordPress page changed or broke", "A plugin, theme, form, or page builder is acting strange", "The task list is too technical for a nontechnical site owner"],
    tasks: ["Review the WordPress issue", "Trace likely theme, plugin, builder, CSS, JavaScript, or hosting causes", "Make practical fixes or document the next move"],
    related: ["wordpress-support", "website-fixes", "ongoing-webmaster-support", "wordpress-troubleshooting"],
    skills: ["wordpress-theme-development", "wordpress-plugin-development", "production-debugging"]
  },
  {
    slug: "wordpress-website-support",
    title: "WordPress Website Support at $55/hr | The Web Guy",
    meta: "Hourly WordPress website support for existing business sites, page edits, plugin issues, forms, SEO implementation, cleanup, and recurring tasks.",
    h1: "WordPress Website Support at $55/hr",
    eyebrow: "WordPress Website Support",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "support for existing WordPress business sites that need steady technical attention",
    problems: ["The site needs regular updates and fixes", "Small WordPress tasks keep piling up", "The site needs someone technical who can work inside the existing setup"],
    tasks: ["Handle WordPress page and content updates", "Fix forms, layouts, plugins, and theme issues", "Support SEO, tracking, speed, and recurring cleanup tasks"],
    related: ["wordpress-support", "ongoing-webmaster-support", "website-maintenance-for-agencies", "website-fixes"],
    skills: ["wordpress-theme-development", "ga4-gtm-measurement-integrity", "performance-engineering"]
  },
  {
    slug: "wordpress-maintenance",
    title: "WordPress Maintenance Help at $55/hr | The Web Guy",
    meta: "Get practical WordPress maintenance help for updates, backups context, plugin checks, content changes, security cleanup, and recurring website support.",
    h1: "WordPress Maintenance Help at $55/hr",
    eyebrow: "WordPress Maintenance",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "maintenance tasks that keep an existing WordPress site stable and easier to manage",
    problems: ["Plugins, themes, and content need regular attention", "Maintenance tasks are mixed with bug fixes and small edits", "Updates need review instead of blind automatic changes"],
    tasks: ["Review plugin, theme, and content-update needs", "Handle practical maintenance tasks and small fixes", "Identify risks around backups, staging, cache, forms, and tracking"],
    related: ["ongoing-webmaster-support", "wordpress-support", "security-hosting-reliability", "site-speed-performance"],
    skills: ["wordpress-plugin-development", "cloudflare-dns-ssl", "performance-engineering"]
  },
  {
    slug: "wordpress-troubleshooting",
    title: "WordPress Troubleshooting at $55/hr | The Web Guy",
    meta: "Troubleshoot WordPress problems including plugin conflicts, broken layouts, Elementor issues, forms, PHP errors, scripts, and update problems.",
    h1: "WordPress Troubleshooting at $55/hr",
    eyebrow: "WordPress Troubleshooting",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "WordPress issues that need diagnosis before the right fix is obvious",
    problems: ["The symptom is visible but the cause is unclear", "The problem started after updates, cache changes, or content edits", "WordPress admin settings do not match front-end behavior"],
    tasks: ["Reproduce the issue", "Inspect plugin, theme, builder, cache, console, and server clues", "Fix the issue or narrow it to the right technical layer"],
    related: ["wordpress-support", "website-fixes", "fix-wordpress-issue", "wordpress-plugin-conflict-help"],
    skills: ["production-debugging", "wordpress-plugin-development", "wordpress-theme-development"]
  },
  {
    slug: "fix-wordpress-issue",
    title: "Fix a WordPress Issue at $55/hr | The Web Guy",
    meta: "Need to fix a WordPress issue? Get hourly help with broken pages, forms, plugins, Elementor, theme behavior, scripts, and site errors.",
    h1: "Fix a WordPress Issue at $55/hr",
    eyebrow: "Fix WordPress Issue",
    cluster: "WordPress support",
    anchorSlug: "website-fixes",
    intent: "one-off WordPress problems that need a practical fix path",
    problems: ["Something on the WordPress site stopped working", "A page, form, menu, plugin, or layout is broken", "The site owner needs help without a full support plan"],
    tasks: ["Start with the URL and symptom", "Find the likely WordPress layer", "Apply the fix or explain the blocker clearly"],
    related: ["website-fixes", "wordpress-support", "wordpress-troubleshooting", "fix-broken-wordpress-site"],
    skills: ["production-debugging", "wordpress-theme-development", "wordpress-plugin-development"]
  },
  {
    slug: "fix-broken-wordpress-site",
    title: "Fix a Broken WordPress Site at $55/hr | The Web Guy",
    meta: "Get help fixing a broken WordPress site, including visible layout issues, plugin conflicts, white screens, failed forms, scripts, and urgent site behavior.",
    h1: "Fix a Broken WordPress Site at $55/hr",
    eyebrow: "Broken WordPress Site",
    cluster: "WordPress support",
    anchorSlug: "website-fixes",
    intent: "broken WordPress sites where a visible or functional problem needs triage",
    intro:
      "Help for WordPress sites that suddenly show broken layouts, failed forms, white screens, plugin conflicts, checkout trouble, PHP errors, script problems, or other visible issues that need careful triage.",
    cta: "Get Broken WordPress Help",
    audience:
      "This page is for site owners, agencies, and teams with a WordPress problem that needs someone to reproduce the symptom, check recent changes, inspect the likely layer, and make or recommend the safest next fix.",
    audienceHeading: "WordPress problems that need triage",
    problems: ["A WordPress page or feature broke", "The site shows errors or blank screens", "A business-critical form, checkout, or page is affected"],
    tasks: ["Triage the broken behavior", "Check recent changes, plugins, themes, PHP, cache, and scripts", "Stabilize the issue or define the safest next step"],
    sections: [
      {
        h2: "Broken WordPress problems this page targets",
        body:
          "Use this page when a WordPress site has a visible or functional failure and the first job is to understand what changed. The problem might be a plugin update, theme conflict, cache issue, PHP error, form failure, broken layout, checkout problem, or script conflict.",
        bullets: ["A page, form, menu, checkout, or key feature stopped working", "The site shows errors, blank screens, or strange front-end behavior", "A recent plugin, theme, PHP, content, or cache change may be involved", "The safest next step is not obvious yet"]
      },
      {
        h2: "What can be checked first",
        cards: [
          ["Recent changes", "Review plugin, theme, WordPress, PHP, cache, content, hosting, or deployment changes near the time the site broke."],
          ["Front-end symptoms", "Check broken layouts, missing assets, JavaScript errors, failed forms, console warnings, and mobile-specific behavior."],
          ["WordPress layers", "Inspect plugin conflicts, theme output, page builder sections, shortcodes, PHP notices, admin behavior, and cache mismatches."],
          ["Recovery path", "Stabilize what can be fixed safely, identify access or hosting blockers, and document when backup restore, staging, or developer-level repair is the better move."]
        ]
      },
      {
        h2: "Related broken WordPress support paths",
        cards: [
          ["Website Fixes", "Use this when the WordPress problem appears as a broken layout, failed script, bad form, mobile issue, or visible website bug.", "/services/website-fixes/", "View Website Fixes"],
          ["WordPress Support", "Use this when the fix belongs in themes, plugins, Elementor, page builders, content, admin settings, or recurring WordPress cleanup.", "/services/wordpress-support/", "View WordPress Support"],
          ["WordPress Emergency Support", "Use this when a key page, checkout, form, or public feature is down and needs triage before a longer cleanup plan.", "/services/wordpress-emergency-support/", "View Emergency Support"],
          ["White Screen Fix", "Use this when the site or admin is blank, fatal errors are likely, or recovery needs extra caution.", "/services/wordpress-white-screen-of-death-fix/", "View White Screen Help"]
        ]
      },
      {
        h2: "How to hand off broken WordPress work",
        body:
          "Send the URL, what broke, what should happen, when it started, recent plugin/theme/content/hosting changes, screenshots, and any access notes. If the issue affects leads, checkout, SEO, tracking, or a live campaign, include that priority up front."
      }
    ],
    related: ["website-fixes", "wordpress-support", "wordpress-emergency-support", "wordpress-white-screen-of-death-fix"],
    skills: ["production-debugging", "cloudflare-dns-ssl", "wordpress-plugin-development"]
  },
  {
    slug: "wordpress-emergency-support",
    title: "WordPress Emergency Support at $55/hr | The Web Guy",
    meta: "WordPress emergency support for broken pages, white screens, failed forms, checkout issues, plugin conflicts, and urgent website problems.",
    h1: "WordPress Emergency Support at $55/hr",
    eyebrow: "WordPress Emergency Support",
    cluster: "WordPress support",
    anchorSlug: "website-fixes",
    intent: "urgent WordPress problems where the first useful move matters more than a long proposal",
    problems: ["A public page, lead form, checkout, or key feature is broken", "The site changed suddenly after an update or deployment", "The issue needs fast triage and plain communication"],
    tasks: ["Assess severity and affected pages", "Look for recent changes and obvious failure points", "Fix what is safe or document what access/support is needed"],
    related: ["website-fixes", "fix-broken-wordpress-site", "wordpress-support", "security-hosting-reliability"],
    skills: ["production-debugging", "cloudflare-dns-ssl", "wordpress-plugin-development"]
  },
  {
    slug: "wordpress-white-screen-of-death-fix",
    title: "WordPress White Screen of Death Fix Help | The Web Guy",
    meta: "Get help with WordPress white screen of death issues, fatal errors, plugin conflicts, PHP problems, theme issues, and recovery planning.",
    h1: "WordPress White Screen of Death Fix Help at $55/hr",
    eyebrow: "White Screen Fix",
    cluster: "WordPress support",
    anchorSlug: "website-fixes",
    intent: "WordPress white screen or fatal-error situations that need careful troubleshooting",
    problems: ["The site or admin loads as a blank screen", "A plugin, theme, PHP version, or update may have triggered a fatal error", "The site needs recovery without making the problem worse"],
    tasks: ["Review the failure context", "Check likely plugin, theme, PHP, and hosting causes", "Recover access or define the safest restoration path"],
    related: ["wordpress-emergency-support", "fix-broken-wordpress-site", "wordpress-troubleshooting", "security-hosting-reliability"],
    skills: ["production-debugging", "wordpress-plugin-development", "cloudflare-dns-ssl"]
  },
  {
    slug: "woocommerce-checkout-error-fix",
    title: "WooCommerce Checkout Error Fix Help | The Web Guy",
    meta: "Fix WooCommerce checkout errors, payment/shipping issues, broken cart behavior, plugin conflicts, tracking problems, and checkout page bugs.",
    h1: "WooCommerce Checkout Error Fix Help at $55/hr",
    eyebrow: "WooCommerce Checkout Fix",
    cluster: "Ecommerce support",
    anchorSlug: "ecommerce-support",
    intent: "WooCommerce checkout failures that can block revenue or corrupt ecommerce tracking",
    intro:
      "Help for WooCommerce checkout problems that affect orders, payments, shipping, taxes, coupons, cart behavior, purchase tracking, or customer trust. The work starts by reproducing the checkout path and narrowing the issue before changing production.",
    cta: "Fix WooCommerce Checkout",
    audience:
      "This page is for WooCommerce stores, agencies, and ecommerce teams dealing with checkout failures, stuck loading states, payment errors, shipping/tax problems, plugin conflicts, tracking mismatches, or cart behavior that blocks purchases.",
    audienceHeading: "Revenue-blocking WooCommerce checkout problems",
    problems: ["Checkout fails, reloads, or shows confusing errors", "Payment, shipping, tax, coupon, or cart behavior is broken", "Purchase tracking does not match orders"],
    tasks: ["Reproduce the checkout path", "Check WooCommerce plugins, payment settings, scripts, and conflicts", "Verify order flow and tracking after changes"],
    sections: [
      {
        h2: "WooCommerce checkout symptoms this page targets",
        body:
          "Checkout problems are high-priority because they can stop revenue and corrupt reporting at the same time. The useful first step is to name the exact failure: the button spins, checkout reloads, payment fails, cart empties, shipping never calculates, coupon logic breaks, or the order succeeds but tracking does not match.",
        bullets: [
          "Checkout button spins, does nothing, or never completes",
          "Payment gateway errors, declined-payment confusion, or missing payment methods",
          "Checkout redirects to an empty cart or reloads without creating an order",
          "Shipping, tax, coupon, or address validation blocks legitimate customers",
          "JavaScript errors, AJAX failures, plugin conflicts, or cache/session problems",
          "Purchase events, revenue, or product data do not match real WooCommerce orders"
        ]
      },
      {
        h2: "What gets checked first",
        cards: [
          ["Reproduce the checkout path", "Test product, cart, checkout, payment option, shipping/tax calculation, order creation, thank-you state, and customer/admin notifications."],
          ["Inspect JavaScript and network errors", "Check console errors, failed AJAX requests, blocked scripts, plugin assets, checkout fragments, and theme or optimization conflicts."],
          ["Review plugin and gateway context", "Look at recent WooCommerce, payment gateway, shipping, tax, coupon, cache, security, and checkout plugin changes."],
          ["Check cache and session behavior", "Review cache exclusions, checkout/cart cookies, CDN behavior, optimization plugins, and stale checkout assets."],
          ["Verify tracking after the fix", "Confirm GA4/GTM purchase events, pixels, revenue, transaction IDs, and product data after checkout works again."],
          ["Document production risk", "Flag when staging, backups, gateway support, hosting logs, or vendor escalation are safer than blind production changes."]
        ]
      },
      {
        h2: "Related WooCommerce checkout support paths",
        cards: [
          ["WooCommerce Support", "Use this when checkout trouble is part of a broader WooCommerce store cleanup involving products, templates, plugins, speed, or WordPress behavior.", "/services/woocommerce-support/", "View WooCommerce Support"],
          ["Ecommerce Support", "Use this when checkout issues overlap with product data, schema, ecommerce tracking, storefront UX, feeds, or integrations.", "/services/ecommerce-support/", "View Ecommerce Support"],
          ["Conversion Tracking Troubleshooting", "Use this when orders are completing but GA4, GTM, pixels, Google Ads, or ecommerce reports do not match revenue.", "/services/conversion-tracking-troubleshooting/", "View Conversion Tracking"],
          ["WordPress Plugin Conflict Help", "Use this when a plugin update, cache plugin, payment plugin, security plugin, or checkout extension appears to trigger the failure.", "/services/wordpress-plugin-conflict-help/", "View Plugin Conflict Help"],
          ["Production Debugging", "Use this when the issue only appears on the live checkout flow, under a real browser, or after a recent deployment or plugin update.", "/skills/production-debugging/", "View Production Debugging"]
        ]
      },
      {
        h2: "How to hand off WooCommerce checkout work",
        body:
          "Send the store URL, affected product or cart path, exact checkout error, payment/shipping method involved, recent plugin/theme/cache changes, whether orders are being created, and whether tracking or revenue reports disagree. Do not send live payment details in the first message."
      }
    ],
    related: ["ecommerce-support", "woocommerce-support", "wordpress-support", "conversion-tracking-troubleshooting"],
    skills: ["ga4-gtm-measurement-integrity", "wordpress-plugin-development", "production-debugging"]
  },
  {
    slug: "contact-form-not-working-wordpress",
    title: "Contact Form Not Working in WordPress? | The Web Guy",
    meta: "Fix WordPress contact forms that do not send, submit, redirect, track, or pass leads into email, CRM, GA4, or Google Tag Manager.",
    h1: "Contact Form Not Working in WordPress?",
    eyebrow: "WordPress Form Fixes",
    cluster: "WordPress support",
    anchorSlug: "website-fixes",
    intent: "WordPress form problems where leads, notifications, redirects, or tracking fail",
    problems: ["The form says success but no lead arrives", "Notifications, SMTP, spam protection, or CRM handoffs are failing", "GA4 or GTM does not record the form conversion correctly"],
    tasks: ["Test the full form path", "Check form plugin settings, mail delivery, scripts, redirects, and tracking", "Verify the lead destination and conversion event"],
    related: ["website-fixes", "analytics-tracking", "wordpress-support", "conversion-tracking-troubleshooting"],
    skills: ["ga4-gtm-measurement-integrity", "production-debugging", "rest-api-webhook-integrations"]
  },
  {
    slug: "elementor-layout-broken",
    title: "Elementor Layout Broken? WordPress Help | The Web Guy",
    meta: "Get help fixing broken Elementor layouts, mobile spacing, overlapping sections, CSS conflicts, page builder issues, and WordPress template problems.",
    h1: "Elementor Layout Broken? WordPress Help at $55/hr",
    eyebrow: "Elementor Layout Help",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "Elementor and page-builder layouts that look wrong after edits, updates, or responsive changes",
    problems: ["Sections overlap or spacing looks wrong", "The mobile layout no longer matches the intended design", "Theme CSS, widgets, cache, or builder settings are fighting the page"],
    tasks: ["Inspect the affected Elementor sections", "Check responsive settings, CSS, theme output, cache, and plugin behavior", "Clean up the layout without rebuilding the whole site by default"],
    related: ["wordpress-support", "website-fixes", "wordpress-troubleshooting", "wordpress-website-support"],
    skills: ["wordpress-theme-development", "production-debugging", "performance-engineering"]
  },
  {
    slug: "wordpress-plugin-conflict-help",
    title: "WordPress Plugin Conflict Help | The Web Guy",
    meta: "Troubleshoot WordPress plugin conflicts affecting forms, layouts, checkout, admin behavior, scripts, performance, or site stability.",
    h1: "WordPress Plugin Conflict Help at $55/hr",
    eyebrow: "Plugin Conflict Help",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "plugin conflicts where updates or overlapping plugins break site behavior",
    problems: ["A plugin update changed behavior", "Two plugins appear to fight over scripts, styles, forms, checkout, or admin features", "Disabling plugins randomly is too risky"],
    tasks: ["Review the affected behavior and recent updates", "Isolate likely plugin, theme, cache, or script conflicts", "Fix settings, code, or handoff notes where practical"],
    related: ["wordpress-support", "wordpress-troubleshooting", "fix-wordpress-issue", "woocommerce-checkout-error-fix"],
    skills: ["wordpress-plugin-development", "production-debugging", "wordpress-theme-development"]
  },
  {
    slug: "wordpress-developer-for-small-tasks",
    title: "WordPress Developer for Small Tasks | The Web Guy",
    meta: "Hire hourly WordPress help for small tasks, page edits, plugin fixes, Elementor cleanup, forms, SEO implementation, and technical website updates.",
    h1: "WordPress Developer for Small Tasks at $55/hr",
    eyebrow: "Small WordPress Tasks",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "small WordPress tasks that need a developer but not a large project",
    problems: ["The task is too technical for the site owner", "The agency or team has small WordPress tickets piling up", "A full rebuild or package would be overkill"],
    tasks: ["Handle focused WordPress edits", "Fix small theme, plugin, layout, form, and content issues", "Provide plain status updates and next steps"],
    related: ["hourly-wordpress-developer", "wordpress-support", "ongoing-webmaster-support", "agency-overflow"],
    skills: ["wordpress-theme-development", "wordpress-plugin-development", "production-debugging"]
  },
  {
    slug: "hourly-wordpress-developer",
    title: "Hourly WordPress Developer at $55/hr | The Web Guy",
    meta: "Hourly WordPress developer support for existing sites, small tasks, technical fixes, SEO implementation, page cleanup, plugins, and agency overflow.",
    h1: "Hourly WordPress Developer at $55/hr",
    eyebrow: "Hourly WordPress Developer",
    cluster: "WordPress support",
    anchorSlug: "wordpress-support",
    intent: "hourly WordPress development support when task-based help is a better fit than a package",
    problems: ["You need WordPress work without a large project wrapper", "Tasks vary across pages, plugins, themes, SEO, tracking, and fixes", "You want clear hourly execution and plain updates"],
    tasks: ["Review and prioritize the task list", "Work through WordPress fixes, updates, cleanup, and implementation tasks", "Document what changed, what was found, and what remains"],
    related: ["wordpress-developer-for-small-tasks", "wordpress-support", "agency-overflow-developer", "ongoing-webmaster-support"],
    skills: ["wordpress-theme-development", "wordpress-plugin-development", "ga4-gtm-measurement-integrity"]
  },
  {
    slug: "seo-audit-implementation",
    title: "SEO Audit Implementation at $55/hr | The Web Guy",
    meta: "Turn SEO audit recommendations into live website changes: metadata, headings, schema, redirects, internal links, crawl fixes, and technical QA.",
    h1: "SEO Audit Implementation at $55/hr",
    eyebrow: "SEO Audit Implementation",
    cluster: "Technical SEO",
    anchorSlug: "technical-seo-implementation",
    intent: "SEO audit notes that need implementation inside the actual site",
    problems: ["The audit is done but the fixes are not live", "The spreadsheet includes technical tasks the marketing team cannot safely do", "Recommendations need CMS, template, redirect, schema, or tracking work"],
    tasks: ["Review audit notes and priority URLs", "Implement metadata, headings, internal links, schema, redirects, and crawl fixes", "Verify changes where practical"],
    related: ["technical-seo-implementation", "technical-seo-developer", "schema-implementation-service", "agency-overflow"],
    skills: ["schema-structured-data", "crawl-analysis-internal-linking", "programmatic-seo"]
  },
  {
    slug: "technical-seo-developer",
    title: "Technical SEO Developer at $55/hr | The Web Guy",
    meta: "Technical SEO developer help for schema, crawl fixes, redirects, metadata, internal links, JavaScript rendering issues, WordPress, Shopify, and templates.",
    h1: "Technical SEO Developer at $55/hr",
    eyebrow: "Technical SEO Developer",
    cluster: "Technical SEO",
    anchorSlug: "technical-seo-implementation",
    intent: "technical SEO tasks that require code, CMS, templates, redirects, or structured data support",
    problems: ["SEO recommendations require developer-level changes", "Templates, JavaScript, schema, redirects, or crawl paths need cleanup", "The SEO team needs implementation help instead of another audit"],
    tasks: ["Translate SEO recommendations into technical tasks", "Implement practical site, template, schema, redirect, and internal-link changes", "Document constraints and verification steps"],
    related: ["technical-seo-implementation", "seo-audit-implementation", "schema-implementation-service", "agency-overflow-developer"],
    skills: ["schema-structured-data", "crawl-analysis-internal-linking", "production-debugging"]
  },
  {
    slug: "schema-implementation-service",
    title: "Schema Implementation Service at $55/hr | The Web Guy",
    meta: "Get schema implementation help for service pages, FAQs, articles, products, local pages, organization markup, WordPress, Shopify, and technical SEO.",
    h1: "Schema Implementation Service at $55/hr",
    eyebrow: "Schema Implementation",
    cluster: "Technical SEO",
    anchorSlug: "technical-seo-implementation",
    intent: "structured data recommendations that need to be added, cleaned up, or validated",
    problems: ["Schema is missing, duplicated, outdated, or mismatched", "SEO notes mention FAQ, service, local, product, article, or organization markup", "Plugin output needs review or template-level schema needs implementation"],
    tasks: ["Review current structured data output", "Implement practical schema that matches visible page content", "Validate and document structured data changes"],
    related: ["technical-seo-implementation", "seo-audit-implementation", "ecommerce-support", "technical-seo-developer"],
    skills: ["schema-structured-data", "google-merchant-center-product-data", "programmatic-seo"]
  },
  {
    slug: "ga4-gtm-setup-help",
    title: "GA4 and GTM Setup Help at $55/hr | The Web Guy",
    meta: "Get GA4 and Google Tag Manager setup help for form events, conversions, pixels, ecommerce tracking, button clicks, and measurement verification.",
    h1: "GA4 and GTM Setup Help at $55/hr",
    eyebrow: "GA4 / GTM Setup Help",
    cluster: "Analytics and tracking",
    anchorSlug: "analytics-tracking",
    intent: "GA4 and Google Tag Manager setup that needs practical implementation and testing",
    intro:
      "GA4 and Google Tag Manager setup help for websites that need practical event tracking, form tracking, conversion setup, ecommerce measurement, pixels, and verification instead of a container full of untested tags.",
    cta: "Set Up GA4 and GTM",
    audience:
      "This page is for site owners, agencies, and marketing teams that need GA4/GTM events implemented and tested for real actions: form submissions, phone clicks, CTA clicks, thank-you pages, ecommerce events, pixels, and campaign landing pages.",
    audienceHeading: "GA4 and GTM setup that needs verification",
    problems: ["GA4 or GTM is installed but events are missing or unclear", "Forms, buttons, phone clicks, ecommerce, or pixels need tracking", "The business needs reporting it can trust"],
    tasks: ["Review the current GA4/GTM setup", "Create or clean up practical events and conversions", "Test user actions and document what fires"],
    sections: [
      {
        h2: "GA4 and GTM setup tasks this page targets",
        body:
          "A tracking setup is not finished when the tag is installed. It is finished when the important user actions fire once, send the right parameters, avoid duplicate events, and can be checked in GA4, GTM preview mode, DebugView, ad platforms, or reporting dashboards.",
        bullets: [
          "GA4 event setup and conversion/key event configuration",
          "Google Tag Manager tags, triggers, variables, and container cleanup",
          "Form submission tracking for standard, AJAX, embedded, and CRM forms",
          "Phone clicks, email clicks, CTA clicks, downloads, and thank-you page events",
          "Google Ads, Meta, and other pixel placement where appropriate",
          "Ecommerce events, purchase data, transaction IDs, and product parameters"
        ]
      },
      {
        h2: "Common form and conversion tracking setups",
        cards: [
          ["Standard form submissions", "Use GTM form triggers when the form fires a real submit event and validation can be checked safely."],
          ["AJAX and embedded forms", "Use success messages, custom events, data layer pushes, postMessage listeners, or DOM visibility checks when the form does not reload the page."],
          ["Thank-you pages", "Use URL-based conversion events when the site reliably redirects after a successful lead or purchase action."],
          ["WordPress form plugins", "Track Contact Form 7, Gravity Forms, Elementor forms, WPForms, WooCommerce events, or other plugin behavior based on how the actual page fires."],
          ["CRM and third-party forms", "Handle HubSpot, Zoho, GoHighLevel, Typeform, Calendly, booking widgets, and other embedded tools when the event does not live inside ordinary page markup."],
          ["Campaign pages", "Check UTMs, hidden fields, landing page events, button clicks, form success states, and ad-platform conversion tags before launch."]
        ]
      },
      {
        h2: "GA4 and GTM setup support paths",
        cards: [
          ["Analytics & Tracking", "Use the main tracking service when the request includes broader analytics cleanup, campaign tracking, pixels, or reporting QA.", "/services/analytics-tracking/", "View Analytics & Tracking"],
          ["Conversion Tracking Troubleshooting", "Use this when events are missing, duplicated, firing on the wrong action, or not matching real leads or orders.", "/services/conversion-tracking-troubleshooting/", "View Conversion Troubleshooting"],
          ["Contact Form Not Working", "Use this when the form itself is failing, not sending leads, not redirecting, or not handing data to a CRM or inbox.", "/services/contact-form-not-working-wordpress/", "View WordPress Form Fixes"],
          ["GA4/GTM Measurement Integrity", "Use this skill path when the issue needs deeper event QA, container cleanup, DebugView checks, or documentation of what fires.", "/skills/ga4-gtm-measurement-integrity/", "View Measurement Integrity"],
          ["Landing Pages", "Use this when tracking needs to be part of a new service page, campaign page, paid traffic page, or lead-generation launch.", "/services/landing-pages/", "View Landing Pages"]
        ]
      },
      {
        h2: "How to hand off GA4 and GTM setup work",
        body:
          "Send the website URL, the actions that should count as conversions, any GA4/GTM access notes, forms or buttons to track, ad platforms involved, existing measurement problems, and whether there is a thank-you page, success message, CRM handoff, or ecommerce checkout flow."
      }
    ],
    related: ["analytics-tracking", "conversion-tracking-troubleshooting", "contact-form-not-working-wordpress", "ecommerce-support"],
    skills: ["ga4-gtm-measurement-integrity", "production-debugging", "rest-api-webhook-integrations"]
  },
  {
    slug: "conversion-tracking-troubleshooting",
    title: "Conversion Tracking Troubleshooting | The Web Guy",
    meta: "Troubleshoot conversion tracking problems in GA4, GTM, forms, pixels, ecommerce events, thank-you pages, CRMs, and reporting dashboards.",
    h1: "Conversion Tracking Troubleshooting at $55/hr",
    eyebrow: "Conversion Tracking Troubleshooting",
    cluster: "Analytics and tracking",
    anchorSlug: "analytics-tracking",
    intent: "tracking setups where conversions are missing, duplicated, or untrustworthy",
    intro:
      "Troubleshooting for conversion tracking that does not match reality: missing GA4 events, duplicate GTM tags, broken Google Ads conversions, unreliable pixels, ecommerce mismatches, forms that submit without events, and reports nobody trusts.",
    cta: "Troubleshoot Conversions",
    audience:
      "This page is for businesses and agencies that already have tracking installed but cannot trust the numbers. The work maps the user action, tests what fires, checks what data is sent, and identifies why reports disagree with real leads or orders.",
    audienceHeading: "Conversion data that does not match real actions",
    problems: ["Conversions do not match real leads or orders", "GA4, GTM, pixels, forms, or ecommerce events are missing or duplicated", "Reports disagree with what users actually did"],
    tasks: ["Map the conversion path", "Test tags, triggers, forms, thank-you pages, pixels, and ecommerce events", "Document what fires, what fails, and what should change"],
    sections: [
      {
        h2: "Conversion tracking symptoms this page targets",
        body:
          "Conversion tracking can fail while the website appears to work. The form submits, the checkout completes, or the button is clicked, but GA4, GTM, Google Ads, Meta, a CRM, or a reporting dashboard does not show the same story.",
        bullets: [
          "GA4 conversions/key events are missing, duplicated, or assigned to the wrong action",
          "Google Ads conversions show zero, delayed, or inconsistent results",
          "GTM preview mode shows tags firing too often, too late, or not at all",
          "Form submissions do not match CRM records, inbox leads, or thank-you states",
          "Pixels fire on page view instead of real conversion actions",
          "Ecommerce revenue, product data, or transaction IDs do not match orders"
        ]
      },
      {
        h2: "What conversion troubleshooting checks",
        cards: [
          ["The actual user path", "Map the route from landing page to action: form submit, click, phone call, checkout, thank-you page, CRM record, or ad platform event."],
          ["GTM tags and triggers", "Review tag firing rules, trigger conditions, variables, event names, duplicate containers, hard-coded snippets, and publish state."],
          ["GA4 event data", "Check event names, parameters, DebugView, key event configuration, attribution context, and whether the action is visible in realtime testing."],
          ["Google Ads and pixels", "Check conversion IDs, labels, conversion linker, redirect timing, imported GA4 events, duplicate pixels, and platform-specific tag behavior."],
          ["Forms and hidden fields", "Test whether the form actually submits, captures source data, redirects correctly, and passes data to inboxes, CRMs, or webhooks."],
          ["Ecommerce purchase data", "Verify transaction IDs, revenue, currency, item arrays, checkout events, order confirmation behavior, and duplicate purchase prevention."]
        ]
      },
      {
        h2: "Related conversion troubleshooting paths",
        cards: [
          ["Analytics & Tracking", "Use the main service when the issue includes broader GA4, GTM, pixel, campaign, or ecommerce tracking cleanup.", "/services/analytics-tracking/", "View Analytics & Tracking"],
          ["GA4 and GTM Setup Help", "Use this when tracking needs to be created or rebuilt, not just debugged.", "/services/ga4-gtm-setup-help/", "View GA4/GTM Setup"],
          ["Contact Form Not Working", "Use this when the conversion issue may actually be a broken form, failed notification, SMTP issue, CRM handoff, or redirect problem.", "/services/contact-form-not-working-wordpress/", "View Form Fixes"],
          ["WooCommerce Checkout Error Fix", "Use this when purchase tracking problems are tied to a checkout flow, gateway issue, cart behavior, or WooCommerce order path.", "/services/woocommerce-checkout-error-fix/", "View Checkout Fixes"],
          ["GA4/GTM Measurement Integrity", "Use this skill path when the work needs careful event QA, DebugView review, and documentation of what fires where.", "/skills/ga4-gtm-measurement-integrity/", "View Measurement Integrity"]
        ]
      },
      {
        h2: "How to hand off conversion tracking troubleshooting",
        body:
          "Send the URL, the conversion action, the platform where it looks wrong, what real-world lead or order count you expect, recent form/page/checkout changes, and any GA4, GTM, Google Ads, Meta, CRM, or ecommerce access notes."
      }
    ],
    related: ["analytics-tracking", "ga4-gtm-setup-help", "contact-form-not-working-wordpress", "woocommerce-checkout-error-fix"],
    skills: ["ga4-gtm-measurement-integrity", "production-debugging", "rest-api-webhook-integrations"]
  },
  {
    slug: "agency-overflow-developer",
    title: "Agency Overflow Developer at $55/hr | The Web Guy",
    meta: "Hourly agency overflow developer help for WordPress tasks, SEO implementation, landing pages, QA cleanup, tracking fixes, ecommerce, and client-site support.",
    h1: "Agency Overflow Developer at $55/hr",
    eyebrow: "Agency Overflow Developer",
    cluster: "Agency support",
    anchorSlug: "agency-overflow",
    intent: "agency production backlogs that need a technical developer without hiring full-time",
    intro:
      "Hourly overflow developer help for agencies with client-site tickets that need practical execution: WordPress production, SEO implementation, landing pages, QA fixes, tracking cleanup, ecommerce support, and small technical tasks.",
    cta: "Add Overflow Developer Help",
    audience:
      "This page is for agencies, consultants, and small web or SEO teams that already have strategy, clients, and task lists, but need a technical person to move implementation work through the queue without hiring full-time.",
    audienceHeading: "Agency production work that needs another technical pair of hands",
    problems: ["Client-site tickets are backing up", "SEO, WordPress, tracking, QA, and landing page tasks need technical execution", "The agency needs someone who can take a clear task and move it forward"],
    tasks: ["Work from the agency task queue", "Handle WordPress, SEO, tracking, page, ecommerce, and QA tasks", "Return plain handoff notes and blockers"],
    sections: [
      {
        h2: "Agency overflow developer tasks this page targets",
        body:
          "Overflow work is strongest when the agency already knows the client goal and needs implementation help. The work can start from tickets, spreadsheet rows, screenshots, audit notes, Loom videos, CMS access, staging links, or a prioritized task list.",
        bullets: [
          "WordPress page edits, theme cleanup, plugin troubleshooting, and page builder fixes",
          "SEO audit implementation: metadata, headings, schema, redirects, internal links, and crawl cleanup",
          "Landing page buildout, campaign page edits, form setup, and launch QA",
          "GA4/GTM tracking checks, conversion events, pixels, and reporting cleanup",
          "Ecommerce support for WooCommerce, Shopify, product templates, feeds, and checkout-adjacent issues",
          "Client-site QA fixes, broken layouts, mobile issues, scripts, embeds, and production debugging"
        ]
      },
      {
        h2: "How the agency handoff works best",
        cards: [
          ["Clear ticket or task list", "Provide the URL, desired outcome, priority, affected page, acceptance notes, and any client constraints."],
          ["Access and environment notes", "Clarify CMS, hosting, staging, deployment, cache, Git, plugin, agency tool, or approval workflow before production changes."],
          ["Plain status updates", "Expect concise notes on what changed, what was found, what is blocked, and what needs review."],
          ["Review-ready output", "Return changes in a state the agency can review, approve, hand off, or translate into client-facing language."],
          ["White-label-friendly boundaries", "Work can stay behind the agency process when communication, ownership, and client visibility are clear."],
          ["No fake unlimited support", "Hourly overflow works for defined production tasks, not unbounded scope hidden inside a support bucket."]
        ]
      },
      {
        h2: "Agency overflow developer support paths",
        cards: [
          ["Agency Overflow", "Use the main service page for broader overflow support across WordPress, SEO, landing pages, tracking, QA, and cleanup.", "/services/agency-overflow/", "View Agency Overflow"],
          ["White Label WordPress Support", "Use this when the work is WordPress-heavy and needs to stay inside agency communication boundaries.", "/services/white-label-wordpress-support/", "View White Label WordPress"],
          ["Website Support for Agencies", "Use this when the agency backlog spans many platforms, tasks, client sites, and technical symptoms.", "/services/website-support-for-agencies/", "View Website Support for Agencies"],
          ["Hourly WordPress Developer", "Use this when the work is mostly WordPress execution without a large project wrapper.", "/services/hourly-wordpress-developer/", "View Hourly WordPress Developer"],
          ["Technical SEO Implementation", "Use this when the agency needs crawl, schema, metadata, redirects, or internal-link recommendations implemented.", "/services/technical-seo-implementation/", "View Technical SEO"]
        ]
      },
      {
        h2: "What to send before assigning overflow work",
        body:
          "Send the task list, client-site URLs, priority order, access process, staging or production rules, deadline, approval workflow, and the level of notes needed after each task. If the work is white-label, state the communication boundary up front."
      }
    ],
    related: ["agency-overflow", "white-label-wordpress-support", "website-support-for-agencies", "hourly-wordpress-developer"],
    skills: ["production-debugging", "wordpress-theme-development", "ga4-gtm-measurement-integrity"]
  },
  {
    slug: "white-label-wordpress-support",
    title: "White Label WordPress Support at $55/hr | The Web Guy",
    meta: "White-label friendly WordPress support for agencies needing client-site fixes, updates, page edits, plugin troubleshooting, SEO implementation, and QA cleanup.",
    h1: "White Label WordPress Support at $55/hr",
    eyebrow: "White Label WordPress Support",
    cluster: "Agency support",
    anchorSlug: "agency-overflow",
    intent: "agency-friendly WordPress support where communication, scope, and ownership need to stay clear",
    intro:
      "White-label-friendly WordPress support for agencies that need client-site updates, fixes, plugin troubleshooting, SEO implementation, form work, QA cleanup, and plain handoff notes without adding a full-time developer.",
    cta: "Add White Label WordPress Help",
    audience:
      "This page is for agencies that own the client relationship and need WordPress production help behind the scenes. It works best when scope, access, review expectations, and communication boundaries are clear.",
    audienceHeading: "Behind-the-scenes WordPress support for agency client sites",
    problems: ["The agency needs WordPress execution without exposing process mess to the client", "Client sites need updates, fixes, SEO implementation, or cleanup", "White-label boundaries and handoff notes matter"],
    tasks: ["Follow agency scope and communication expectations", "Handle WordPress support tasks quietly and clearly", "Provide concise status, blockers, and implementation notes"],
    sections: [
      {
        h2: "White-label WordPress tasks this page targets",
        body:
          "White-label WordPress support is useful when the agency needs production execution while keeping ownership, communication, and client context inside the agency relationship.",
        bullets: [
          "WordPress updates, page edits, content changes, and builder cleanup",
          "Theme, child theme, CSS, JavaScript, PHP template, and layout fixes",
          "Plugin conflicts, broken forms, shortcodes, admin issues, and odd front-end behavior",
          "SEO implementation inside WordPress: metadata, headings, schema, redirects, and internal links",
          "GA4/GTM tracking checks, form events, pixels, and conversion QA",
          "Maintenance-style tasks, recurring updates, small fixes, and client-site cleanup"
        ]
      },
      {
        h2: "White-label boundaries that should be clear",
        cards: [
          ["Who owns client communication", "The agency should define whether The Web Guy stays fully behind the scenes or can communicate in limited technical contexts."],
          ["What notes are needed", "Handoff notes can be short technical notes, agency-facing status updates, or review bullets that the agency rewrites for the client."],
          ["What counts as done", "Define acceptance criteria before work starts: visible fix, CMS update, event firing, page published, staging review, or client approval."],
          ["Where work happens", "Clarify staging, production, Git, backups, hosting, cache, and plugin update expectations before changing client sites."],
          ["What is out of scope", "Separate quick WordPress support from redesigns, emergency breach response, unlimited maintenance, or strategy work the agency owns."],
          ["How urgent work is handled", "Triage depends on access, risk, availability, and whether a public page, lead form, checkout, or campaign is affected."]
        ]
      },
      {
        h2: "Related white-label WordPress support paths",
        cards: [
          ["Agency Overflow", "Use the main agency page when work spans SEO, landing pages, tracking, ecommerce, QA, and website fixes beyond WordPress.", "/services/agency-overflow/", "View Agency Overflow"],
          ["Agency Overflow Developer", "Use this when the agency needs a technical developer for mixed implementation tasks across client websites.", "/services/agency-overflow-developer/", "View Overflow Developer"],
          ["Website Maintenance for Agencies", "Use this when recurring support, updates, checks, and smaller client-site tasks need a steady technical owner.", "/services/website-maintenance-for-agencies/", "View Agency Maintenance"],
          ["WordPress Support", "Use the main WordPress service page when the request does not need white-label boundaries or agency-specific handoff.", "/services/wordpress-support/", "View WordPress Support"],
          ["Technical SEO Implementation", "Use this when agency SEO recommendations need WordPress implementation instead of another report.", "/services/technical-seo-implementation/", "View SEO Implementation"]
        ]
      },
      {
        h2: "How to hand off white-label WordPress work",
        body:
          "Send the client-site URL, task list, agency expectations, access notes, staging or production rules, screenshots or audit notes, deadline, and how you want blockers and completion notes returned. State any NDA, white-label, or client-contact boundary before work starts."
      }
    ],
    related: ["agency-overflow", "agency-overflow-developer", "website-maintenance-for-agencies", "wordpress-support"],
    skills: ["wordpress-theme-development", "wordpress-plugin-development", "production-debugging"]
  },
  {
    slug: "website-maintenance-for-agencies",
    title: "Website Maintenance for Agencies | The Web Guy",
    meta: "Agency website maintenance support for WordPress updates, client-site fixes, QA cleanup, SEO implementation, tracking checks, and recurring technical tasks.",
    h1: "Website Maintenance for Agencies at $55/hr",
    eyebrow: "Agency Website Maintenance",
    cluster: "Agency support",
    anchorSlug: "agency-overflow",
    intent: "recurring agency maintenance tasks across client websites",
    problems: ["Maintenance work is interrupting strategy and client management", "Updates, small fixes, tracking checks, and cleanup tasks need a steady technical owner", "The agency needs practical support without adding payroll"],
    tasks: ["Work through recurring maintenance and support tasks", "Review updates, forms, tracking, pages, and client-site issues", "Flag risks, blockers, and larger repairs"],
    related: ["agency-overflow", "website-support-for-agencies", "white-label-wordpress-support", "ongoing-webmaster-support"],
    skills: ["wordpress-theme-development", "ga4-gtm-measurement-integrity", "cloudflare-dns-ssl"]
  },
  {
    slug: "website-support-for-agencies",
    title: "Website Support for Agencies at $55/hr | The Web Guy",
    meta: "Website support for agencies that need help with WordPress, SEO implementation, tracking, ecommerce, landing pages, QA, and client-site fixes.",
    h1: "Website Support for Agencies at $55/hr",
    eyebrow: "Website Support for Agencies",
    cluster: "Agency support",
    anchorSlug: "agency-overflow",
    intent: "technical website support for agencies with mixed client-site backlogs",
    problems: ["The agency backlog mixes WordPress, SEO, tracking, ecommerce, and QA tasks", "Client work needs implementation support without a full project kickoff", "A technical helper needs to understand the handoff and move"],
    tasks: ["Sort tasks by platform, symptom, and priority", "Implement practical fixes and updates", "Provide agency-friendly notes for review or client handoff"],
    related: ["agency-overflow", "agency-overflow-developer", "website-maintenance-for-agencies", "technical-seo-implementation"],
    skills: ["production-debugging", "ga4-gtm-measurement-integrity", "crawl-analysis-internal-linking"]
  },
  {
    slug: "shopify-liquid-support",
    title: "Shopify Liquid Support at $55/hr | The Web Guy",
    meta: "Get Shopify Liquid support for theme edits, product templates, collection pages, schema, tracking, app cleanup, storefront fixes, and ecommerce support.",
    h1: "Shopify Liquid Support at $55/hr",
    eyebrow: "Shopify Liquid Support",
    cluster: "Ecommerce support",
    anchorSlug: "ecommerce-support",
    intent: "Shopify storefront and Liquid tasks that need technical implementation",
    problems: ["A Shopify theme or Liquid section needs edits", "Product or collection templates need cleanup", "Tracking, schema, apps, or storefront behavior needs technical review"],
    tasks: ["Review Shopify theme and Liquid context", "Support product, collection, section, schema, and tracking tasks", "Fix practical storefront issues without bloating the theme"],
    related: ["ecommerce-support", "analytics-tracking", "site-speed-performance", "technical-seo-implementation"],
    skills: ["shopify-plus-liquid", "ga4-gtm-measurement-integrity", "schema-structured-data"]
  },
  {
    slug: "woocommerce-support",
    title: "WooCommerce Support at $55/hr | The Web Guy",
    meta: "WooCommerce support for checkout issues, product pages, plugin conflicts, tracking, schema, product data, performance, and WordPress ecommerce cleanup.",
    h1: "WooCommerce Support at $55/hr",
    eyebrow: "WooCommerce Support",
    cluster: "Ecommerce support",
    anchorSlug: "ecommerce-support",
    intent: "WooCommerce sites that need ecommerce cleanup inside WordPress",
    problems: ["WooCommerce checkout, cart, product, or order behavior is unreliable", "Plugins, templates, tracking, schema, or performance issues are affecting the store", "The store needs WordPress and ecommerce support at the same time"],
    tasks: ["Review WooCommerce symptoms and affected URLs", "Troubleshoot plugins, templates, checkout, tracking, and product data", "Coordinate fixes with WordPress support and ecommerce measurement"],
    related: ["ecommerce-support", "woocommerce-checkout-error-fix", "wordpress-support", "conversion-tracking-troubleshooting"],
    skills: ["wordpress-plugin-development", "ga4-gtm-measurement-integrity", "schema-structured-data"]
  }
];

export function buildKeywordLandingPage(spec) {
  const anchor = coreServicePages.find((service) => service.slug === spec.anchorSlug) || coreServicePages[0];
  const related = [...new Set((spec.related || [anchor.slug]).filter((slug) => slug !== spec.slug))];
  return {
    slug: spec.slug,
    title: spec.title,
    meta: spec.meta,
    h1: spec.h1,
    eyebrow: spec.eyebrow,
    intro: spec.intro || `${spec.eyebrow} help for ${spec.intent}. Start with the URL, the symptom, what should happen instead, and any recent changes; the work routes back to ${anchor.eyebrow.toLowerCase()} if the request becomes broader.`,
    cta: spec.cta || "Send the Website Problem",
    audience: spec.audience || `This page is for businesses, agencies, and site owners who know the symptom or task but need practical technical help. The work is billed hourly at $55/hr and starts with the URL, context, access limits, and the outcome you want.`,
    audienceHeading: spec.audienceHeading || `${spec.eyebrow} fit`,
    showInHub: false,
    heroImageSlug: spec.heroImageSlug || anchor.slug,
    keywordCluster: spec.cluster,
    clusterAnchor: anchor.slug,
    clusterLinks: related,
    sections: spec.sections || [
      {
        h2: `${spec.eyebrow} problems this page targets`,
        body: `Use this page when the problem is more specific than the main ${anchor.eyebrow.toLowerCase()} page. The goal is to name the issue clearly, route it into the right service path, and avoid turning a small technical task into an oversized project.`,
        bullets: spec.problems
      },
      {
        h2: `${spec.eyebrow} tasks`,
        cards: spec.tasks.map((task) => [task, `${task} as part of practical hourly website support. The exact fix depends on the site, access, platform, and what can be reproduced safely.`])
      },
      {
        h2: `${spec.eyebrow} related support paths`,
        cards: [
          [anchor.eyebrow, `The main service page for this topic is ${anchor.eyebrow}. Use it when the request is broader than this exact task.`, `/services/${anchor.slug}/`, `View ${anchor.eyebrow}`],
          ...(related.slice(0, 5).map((slug) => {
            const relatedService = coreServicePages.find((service) => service.slug === slug) || keywordLandingSpecs.find((item) => item.slug === slug);
            const title = relatedService?.eyebrow || slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
            return [title, `${spec.eyebrow} often overlaps with ${title.toLowerCase()} when one site issue touches more than one layer.`, `/services/${slug}/`, `View ${title}`];
          }))
        ]
      },
      {
        h2: `How to hand off ${spec.eyebrow.toLowerCase()} work`,
        body: `Send the URL, the exact symptom or task, what should happen, what happens now, when it started, and any relevant access notes. If this came from an audit, ticket, screenshot, Loom, crawl export, GA4/GTM issue, or client request, include that context up front.`
      }
    ],
    related,
    skillSlugs: spec.skills || [],
    faqs: [
      [`Is ${spec.eyebrow.toLowerCase()} different from ${anchor.eyebrow.toLowerCase()}?`, `This page targets a narrower search. If the task expands, it routes back into ${anchor.eyebrow}.`],
      ["Can this be a one-off task?", "Yes. One-off fixes and small task lists are a strong fit when the issue is clear enough to start hourly."],
      ["What should I send first?", "Send the URL, symptom, expected behavior, recent changes, screenshots or notes, and any access constraints."],
      ["What does it cost?", "The Web Guy bills this work at $55/hr when the scope, access, and next step are clear."]
    ]
  };
}

export const keywordServicePages = keywordLandingSpecs.map(buildKeywordLandingPage);
