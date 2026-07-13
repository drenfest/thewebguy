export const practicalExamples = [
  ["SEO audit needs implemented", "Send the crawl notes, audit spreadsheet, or priority list. The work can move from recommendations into real site changes."],
  ["WordPress is messy", "Old themes, plugin bloat, Elementor spacing, mobile issues, mystery CSS, and tracking scripts in strange places."],
  ["Tracking cannot be trusted", "GA4 events are duplicated, form leads are not showing, pixels are missing, or campaign data is not lining up."],
  ["Landing page needs launched", "Service pages, local SEO pages, paid campaign pages, CTAs, forms, tracking, and mobile structure."],
  ["Ecommerce needs cleanup", "Shopify Liquid, WooCommerce, BigCommerce, product schema, Merchant Center, feeds, catalog data, and tracking."],
  ["Agency backlog is too full", "Page edits, production tasks, SEO implementation, technical QA, and client-site fixes without hiring full-time."]
];

export const blogCategoryDefinitions = [
  {
    slug: "start-here",
    label: "Start Here",
    description: "Broad diagnostic posts for turning a vague website problem into the right first path.",
    featuredTags: ["website-fixes", "technical-seo", "landing-pages", "analytics-tracking"]
  },
  {
    slug: "front-end-layout",
    label: "Front-End & Layout",
    description: "Visible page problems: layouts, CSS, JavaScript, embeds, widgets, and mobile behavior.",
    featuredTags: ["css", "javascript", "mobile-layout", "embeds-iframes", "site-speed"]
  },
  {
    slug: "forms-tracking-data",
    label: "Forms, Tracking & Data",
    description: "Lead flow, GA4, GTM, pixels, dashboards, APIs, CRMs, and conversion reporting.",
    featuredTags: ["forms", "ga4-gtm", "conversion-tracking", "api-integrations", "dashboards"]
  },
  {
    slug: "wordpress-cms",
    label: "WordPress & CMS",
    description: "WordPress, plugin updates, themes, page builders, admin behavior, and recovery paths.",
    featuredTags: ["wordpress", "plugin-conflicts", "themes", "page-builders", "emergency-support"]
  },
  {
    slug: "seo-pages-ai",
    label: "SEO, Pages & AI Launches",
    description: "SEO implementation, landing pages, AI-built cleanup, internal links, and crawl topology.",
    featuredTags: ["seo-audit", "internal-links", "ai-built", "technical-seo", "crawl-analysis"]
  },
  {
    slug: "ecommerce-checkout",
    label: "Ecommerce & Checkout",
    description: "WooCommerce, checkout failures, product data, purchase tracking, and revenue reporting.",
    featuredTags: ["woocommerce", "checkout", "ecommerce", "conversion-tracking"]
  }
];

export const blogTagDefinitions = [
  { slug: "website-fixes", label: "Website Fixes", description: "General broken-site symptoms and practical website repair paths.", menuGroup: "Troubleshooting Tags" },
  { slug: "css", label: "CSS", description: "Style conflicts, responsive rules, and layout-specific fixes.", menuGroup: "Troubleshooting Tags" },
  { slug: "javascript", label: "JavaScript", description: "Browser errors, script order, broken interactions, and front-end behavior.", menuGroup: "Troubleshooting Tags" },
  { slug: "mobile-layout", label: "Mobile Layout", description: "Responsive layout problems, overlapping sections, and viewport-specific bugs.", menuGroup: "Troubleshooting Tags" },
  { slug: "embeds-iframes", label: "Embeds & Iframes", description: "Maps, widgets, videos, calendars, iframes, and third-party embeds.", menuGroup: "Troubleshooting Tags" },
  { slug: "forms", label: "Forms", description: "Lead forms, validation, notifications, success states, and broken submissions.", menuGroup: "Tracking & Data Tags" },
  { slug: "ga4-gtm", label: "GA4 & GTM", description: "Google Analytics, Google Tag Manager, events, triggers, and DebugView work.", menuGroup: "Tracking & Data Tags" },
  { slug: "conversion-tracking", label: "Conversion Tracking", description: "Missing, duplicated, delayed, or unreliable conversion reporting.", menuGroup: "Tracking & Data Tags" },
  { slug: "analytics-tracking", label: "Analytics & Tracking", description: "Measurement cleanup across forms, pixels, ecommerce events, and reports.", menuGroup: "Tracking & Data Tags" },
  { slug: "api-integrations", label: "APIs & Integrations", description: "Webhooks, CRMs, payloads, dashboards, and data moving between systems.", menuGroup: "Tracking & Data Tags" },
  { slug: "dashboards", label: "Dashboards", description: "Reporting views, source data, definitions, and workflow visibility.", menuGroup: "Tracking & Data Tags" },
  { slug: "wordpress", label: "WordPress", description: "WordPress support, plugin stacks, themes, builders, PHP, CSS, and cleanup.", menuGroup: "Platform Tags" },
  { slug: "plugin-conflicts", label: "Plugin Conflicts", description: "Plugin updates, overlapping behavior, shortcodes, hooks, and compatibility issues.", menuGroup: "Platform Tags" },
  { slug: "themes", label: "Themes", description: "Theme output, child themes, templates, overrides, and layout structure.", menuGroup: "Platform Tags" },
  { slug: "page-builders", label: "Page Builders", description: "Elementor, builder spacing, reusable sections, and CMS-generated layouts.", menuGroup: "Platform Tags" },
  { slug: "woocommerce", label: "WooCommerce", description: "WooCommerce checkout, product data, templates, extensions, and store behavior.", menuGroup: "Platform Tags" },
  { slug: "ecommerce", label: "Ecommerce", description: "Product pages, checkout, product data, revenue tracking, and store cleanup.", menuGroup: "Platform Tags" },
  { slug: "checkout", label: "Checkout", description: "Payment, shipping, tax, cart, session, and purchase-flow failures.", menuGroup: "Platform Tags" },
  { slug: "landing-pages", label: "Landing Pages", description: "Service pages, campaign pages, local pages, forms, CTAs, and launch structure.", menuGroup: "SEO & Launch Tags" },
  { slug: "technical-seo", label: "Technical SEO", description: "Metadata, headings, schema, redirects, crawl cleanup, and implementation.", menuGroup: "SEO & Launch Tags" },
  { slug: "seo-audit", label: "SEO Audit", description: "Audit notes, crawl exports, spreadsheets, and implementation priorities.", menuGroup: "SEO & Launch Tags" },
  { slug: "internal-links", label: "Internal Links", description: "Contextual links, crawl paths, link support, and content graph cleanup.", menuGroup: "SEO & Launch Tags" },
  { slug: "crawl-analysis", label: "Crawl Analysis", description: "Crawl reports, topology, weak pages, and internal-link diagnostics.", menuGroup: "SEO & Launch Tags" },
  { slug: "ai-built", label: "AI-Built Cleanup", description: "Generated sites, launch QA, routing, forms, tracking, SEO, and maintainability.", menuGroup: "SEO & Launch Tags" },
  { slug: "site-speed", label: "Site Speed", description: "Heavy scripts, embeds, images, layout shift, and performance cleanup.", menuGroup: "SEO & Launch Tags" },
  { slug: "automation", label: "Automation", description: "Repeatable crawl checks, reporting helpers, dashboards, and QA workflows.", menuGroup: "SEO & Launch Tags" },
  { slug: "emergency-support", label: "Emergency Support", description: "Public failures, broken WordPress paths, white screens, and recovery planning.", menuGroup: "Platform Tags" }
];

export const blogPosts = [
  {
    slug: "something-broke-on-your-website",
    title: "Something Broke on Your Website | Website Is Broken? Start With the Symptom | The Web Guy",
    h1: "Something Broke on Your Website: Start With the Symptom, Then Check What Changed",
    meta: "Need help when a website is broken? Use this broad broken-website troubleshooting guide for page symptoms, layouts, forms, checkout, scripts, tracking, WordPress issues, cache, hosting, and recent changes.",
    eyebrow: "Something broke",
    summary: "If something broke on your website, start by describing the symptom, checking what changed, and tracing whether the problem is visual, functional, tracking-related, or server-side before the damage spreads.",
    problemType: "Start here",
    relatedService: "website-fixes",
    category: "start-here",
    tags: ["website-fixes", "wordpress", "forms", "analytics-tracking", "ecommerce", "site-speed"],
    heroCta: "Send the Website Problem",
    heroSecondary: "View Website Fixes",
    heroSecondaryHref: "/services/website-fixes/",
    cta: "Send the URL, what broke, and what should happen instead. The first useful move is usually easier to find once the symptom is clear.",
    intro: [
      [
        "If something broke on your website, start with the visible symptom before guessing the platform. Most people search for WordPress help, web developer, or ",
        { text: "website bug help", href: "/services/website-fixes/", title: "View website fixes for broken layouts, scripts, forms, and site bugs" },
        " when what they actually have is a symptom. The page looks wrong. A button disappeared. A form says it submitted but no lead arrived. A mobile layout is doing something strange. Checkout is stuck. A page that worked yesterday suddenly does not load."
      ],
      [
        "That distinction matters because the platform name rarely tells you where the problem lives. A ",
        { text: "broken WordPress site", href: "/services/fix-broken-wordpress-site/", title: "View help for fixing a broken WordPress site" },
        " might be a plugin conflict, a theme template issue, a cache problem, a JavaScript error, a DNS issue, or a third-party script changing behavior. A custom site can break for the same reasons. The label is less useful than the symptom."
      ],
      [
        "A good first pass does not require panic or a full rebuild. It starts with what changed, where the issue appears, whether it is visual or functional, and whether it affects revenue, leads, SEO pages, tracking, or trust. If one page is broken or the visible symptom looks front-end specific, compare this guide with ",
        { text: "CSS and JavaScript website bugs", href: "/blog/css-javascript-errors-website-bugs/", title: "Read the CSS and JavaScript website bug guide" },
        " and ",
        { text: "Fix My Broken Website", href: "/blog/fix-my-broken-website/", title: "Read the focused broken website triage guide" },
        " before changing the wrong layer. Use this parent guide for broad routing. Use the focused child page when you already need the repair order."
      ]
    ],
    sections: [
      {
        heading: "Start with what you can see",
        body: [
          "Visible problems are usually the easiest place to begin because they give you something concrete to describe. A broken layout, overlapping text, missing button, stretched image, shifted page builder section, changed header, or weird mobile view gives a fixer a starting point.",
          "Do not start by assuming the whole site is broken. Identify the exact URL, the exact section, the device where it fails, and what you expected to see. If the homepage is fine but one service page is broken, that points toward page content, a template override, a builder setting, or a script on that page. If every page is broken, the issue is more likely theme, cache, plugin, hosting, DNS, or a global script."
        ],
        listTitle: "Visible symptoms worth documenting",
        checklist: ["Layout broke or columns shifted", "Text overlaps buttons or images", "Mobile view looks different than expected", "Header, footer, or menu changed", "Images are stretched, missing, or too large", "Page builder sections moved or disappeared", "A popup, modal, or embed stopped behaving"],
        calloutTitle: "First rule",
        callout: "Start with the symptom, not the platform. The platform matters after the issue is reproducible."
      },
      {
        heading: "Check whether the problem is visual or functional",
        body: [
          "A visual issue usually points toward CSS, theme files, page builder output, template markup, responsive settings, image sizing, or cached assets. The site may still work, but it looks unprofessional or confusing.",
          "A functional issue means something the user does is failing. Forms, checkout, filters, search, booking widgets, menus, modals, tracking scripts, API calls, and embedded tools are functional pieces. They often require browser console checks, network inspection, plugin review, or a look at the system receiving the data.",
          "There is also a third bucket: measurement. GA4, Google Tag Manager, pixels, conversion events, and CRM handoffs can fail while the page looks normal. That is still a website problem because the business cannot trust the result."
        ],
        listTitle: "Useful buckets",
        checklist: ["Visual: CSS, theme, template, page builder, mobile layout", "Functional: forms, checkout, search, filters, modals, scripts, APIs", "Tracking: GA4, GTM, pixels, event triggers, conversion data", "Server/platform: hosting, DNS, SSL, redirects, cache, plugin conflicts"]
      },
      {
        heading: "The what changed checklist",
        body: [
          "Most sudden website problems follow a change. Sometimes the change is obvious, like a plugin update. Sometimes it is hidden, like a hosting rule, CDN setting, injected script, third-party tool update, browser policy change, or cache refresh that exposed old code.",
          "Before editing production, make a quick timeline. If the issue started after a WordPress update, do not begin by rewriting CSS. If it started after adding a tracking script, do not blame hosting first. If it started after a page edit, check the builder and content before touching DNS."
        ],
        listTitle: "Ask these first",
        checklist: ["Was a plugin, app, or extension updated?", "Was the theme, template, or page builder updated?", "Was WordPress, Shopify, WooCommerce, or the CMS updated?", "Did someone edit the page content or layout?", "Did hosting, cache, CDN, or Cloudflare settings change?", "Did a script, iframe, pixel, widget, or embed get added?", "Did a form, CRM, email, or tracking tool change?", "Did the issue begin after a deployment or migration?"],
        calloutTitle: "Do not skip this",
        callout: "A five-minute change log can save an hour of guessing."
      },
      {
        heading: "Common WordPress breaks",
        body: [
          "WordPress breaks are common because a WordPress site is usually a stack: core, theme, child theme, plugins, page builder, forms, cache, hosting, and custom snippets. Any layer can affect the others.",
          "Plugin conflicts are the obvious one, but they are not the only one. Elementor or another builder can output layout rules that collide with a theme. A theme update can overwrite CSS assumptions. PHP version changes can expose old code. Cache can keep serving old assets. Form plugins can fail after an update, an SMTP change, or a reCAPTCHA issue.",
          "The practical fix path is to isolate the layer. Is the broken piece part of the page content, the builder, the plugin, the theme, the cache, or the server? Once that is known, the fix is usually smaller than the panic makes it feel."
        ],
        listTitle: "WordPress issues to check",
        checklist: ["Plugin conflicts or recently updated plugins", "Elementor or page builder layout settings", "Theme template problems", "PHP warnings or fatal errors", "Cache showing old CSS or JavaScript", "CSS overwritten by theme or plugin updates", "Forms failing after plugin, SMTP, or spam-filter changes"]
      },
      {
        heading: "Common front-end breaks",
        body: [
          "Front-end issues are the problems users see and interact with in the browser. These often involve HTML, CSS, JavaScript, images, iframes, third-party scripts, or responsive rules.",
          "A modal that no longer opens may be a JavaScript error. A button that vanished may be hidden by CSS. An iframe that overflows may need containment. A sticky header covering content may be a z-index or scroll offset issue. A tracking script can also interfere with a form or click handler when scripts load in the wrong order.",
          "Browser developer tools are useful here. Console errors, failed network requests, blocked scripts, missing files, and layout inspection usually reveal whether the problem is code, assets, scripts, browser policy, or a third-party dependency."
        ],
        listTitle: "Front-end failure patterns",
        checklist: ["JavaScript errors", "CSS specificity conflicts", "Broken modals, menus, accordions, or tabs", "Iframe and embed sizing issues", "Responsive layout bugs", "Tracking scripts interfering with behavior", "Missing or blocked assets"]
      },
      {
        heading: "Common hosting, DNS, and SSL problems",
        body: [
          "Some problems look like website bugs but actually live below the page. SSL warnings, redirect loops, mixed content, DNS changes, Cloudflare cache issues, server errors, and domain misconfiguration can make a site feel broken even when the CMS is fine.",
          "These issues usually need a different kind of check: DNS records, SSL/TLS mode, redirect rules, cache behavior, hosting logs, HTTP status codes, and whether the same issue appears from different networks or browsers."
        ],
        listTitle: "Infrastructure symptoms",
        checklist: ["SSL warning or mixed content warning", "Site not loading or loading intermittently", "Redirect loops", "Cloudflare or CDN cache confusion", "DNS records changed or duplicated", "500-level server errors", "Old pages showing after edits"]
      },
      {
        heading: "Forms, tracking, and data can break quietly",
        body: [
          "A form can look fine and still fail. It may validate, show a success message, and still never send email or create the CRM record. Tracking can also appear installed while events are missing, duplicated, or assigned to the wrong action.",
          "When forms or tracking are involved, test the full path. Submit the form. Check the destination inbox or CRM. Inspect the thank-you state. Check GTM preview or GA4 DebugView if tracking matters. Confirm that hidden fields, UTM values, phone clicks, and conversion events are doing what the business expects."
        ],
        listTitle: "Quiet failures to verify",
        checklist: ["Form submits but email does not arrive", "CRM lead is missing fields", "GA4 event fires twice or not at all", "GTM trigger catches the wrong form", "Pixel or conversion script is duplicated", "Thank-you page works but event tracking does not"]
      },
      {
        heading: "Ecommerce and checkout problems need priority",
        body: [
          "If checkout, add-to-cart, shipping, tax, payment, product pages, or order tracking is affected, treat the issue as business-critical. Ecommerce problems can cost money quickly and can also create messy reporting if purchases are missed or duplicated.",
          "Look at the smallest repeatable action. Can a product be added to cart? Does checkout load? Does the payment option appear? Is the order created? Does the purchase event fire? Does revenue match the ecommerce platform? Each step narrows the problem."
        ],
        listTitle: "Ecommerce checks",
        checklist: ["Product page renders correctly", "Add to cart works", "Cart and checkout load", "Payment/shipping/tax options appear", "Order confirmation fires once", "Revenue and product data show correctly in analytics"]
      },
      {
        heading: "What to send a website fixer",
        body: [
          "The best request is specific without trying to diagnose everything. A website fixer needs the URL, what should happen, what happens instead, where you saw it, when it started, and what changed recently.",
          "Screenshots help, but a screen recording can be even better for forms, menus, checkout, or responsive behavior. Access details should only be sent when you are ready to start, but platform names, plugins, and known recent changes can be included right away."
        ],
        listTitle: "Include this",
        checklist: ["URL", "Screenshot or screen recording", "Device and browser", "What should happen", "What is happening instead", "When it started", "Recent updates or edits", "Platform, plugin, builder, or hosting notes", "Login/access details if work is ready to begin"]
      },
      {
        heading: "When the real request is fix my broken website",
        body: [
          [
            "A search like ",
            { text: "fix my broken website", href: "/blog/fix-my-broken-website/", title: "Read the deeper broken website triage guide" },
            " usually means the site owner has moved past curiosity. Something public is failing, the business impact is unclear, and the next step needs to be safer than changing random settings."
          ],
          "The useful split is urgency versus scope. A public lead form, checkout path, paid landing page, or high-value SEO page deserves faster triage than a low-priority design annoyance. But urgency does not mean changing five systems at once. The fix path still starts with reproducing the problem, checking recent changes, protecting the current state, and choosing the smallest repair that can be verified.",
          "If the problem is bigger than one symptom, group the failures by page and behavior. A broken menu, failed form, missing styles, and bad tracking event might share one JavaScript cause. They might also be separate issues exposed by the same update. Grouping keeps the work from becoming a vague rebuild request."
        ],
        listTitle: "Triage before repair",
        checklist: ["Name the page or user path that is broken", "Decide whether leads, checkout, SEO, ads, or trust are affected", "Check recent edits, updates, cache changes, DNS changes, and added scripts", "Capture a screenshot or recording before changing the site", "Fix one reproducible symptom at a time", "Verify the repaired path from the visitor's point of view"],
        calloutTitle: "Good broken-site triage",
        callout: "The first goal is not to prove who caused it. The first goal is to make the failure reproducible, reversible, and fixable."
      },
      {
        heading: "When to stop DIYing it",
        body: [
          "DIY is fine when the issue is low-risk and you know how to undo your work. It gets dangerous when you are guessing in production, changing multiple things at once, or trying fixes from random forum threads without a backup.",
          "Paying for help makes sense when a business-critical page is affected, a lead form is broken, checkout is broken, SEO pages are down, a launch is waiting, you do not have a backup, or the same issue keeps returning after temporary patches."
        ],
        listTitle: "Stop and get help when",
        checklist: ["A lead form or checkout is affected", "A high-value SEO page is broken", "The site is showing SSL or server errors", "You are changing production without a backup", "The issue affects paid traffic or reporting", "The same bug keeps coming back"]
      },
      {
        heading: "Where The Web Guy fits",
        body: [
          "The Web Guy is built for the middle ground between vague advice and a giant agency process. If the issue is visible, urgent, messy, or stuck between WordPress, CSS, JavaScript, hosting, tracking, plugins, ecommerce, or forms, the job is to find the first useful move and get practical work done.",
          [
            "Start with Website Fixes when the symptom is unclear or visible. Start with WordPress Support when the issue is clearly inside WordPress, a page builder, plugins, themes, or PHP/CSS/JavaScript. Start with ",
            { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, forms, and conversions" },
            " when the site works but the data cannot be trusted."
          ]
        ],
        calloutTitle: "Best first message",
        callout: "Send the URL, what broke, what should happen instead, and anything that changed recently."
      }
    ],
    faqs: [
      ["Why did my website suddenly break?", "Most sudden breaks happen after a change: plugin updates, theme updates, page edits, cache changes, hosting changes, added scripts, or third-party tools changing behavior."],
      ["Can a plugin update break a website?", "Yes. Plugin updates can change CSS, JavaScript, database behavior, forms, shortcodes, templates, or compatibility with other plugins and themes."],
      ["Why does my site look fine on desktop but broken on mobile?", "That usually points to responsive CSS, page builder settings, oversized embeds, missing image constraints, or template sections that were not checked at smaller screen sizes."],
      ["What should I send someone to fix my website?", "Send the URL, screenshot, device/browser, what should happen, what happens instead, when it started, and what changed recently."],
      ["Can tracking scripts break website functionality?", "Yes. Poorly placed or duplicated tracking scripts can interfere with forms, modals, performance, events, and other JavaScript behavior."],
      ["Why is my form not sending leads?", "The problem may be the form plugin, validation, SMTP/email delivery, spam filtering, CRM integration, hidden fields, a webhook, or the thank-you state."],
      ["Can cache make a website look broken?", "Yes. Cache can serve old CSS, old JavaScript, stale HTML, or CDN versions that do not match the current page."],
      ["Should I restore a backup immediately?", "Only if you understand what will be overwritten and the backup is clean. Restoring too quickly can erase good updates or hide the real cause."],
      ["How much does it cost to fix a broken website?", "It depends on the issue, access, and platform. The Web Guy handles practical website fixes hourly at $55/hr when the task is clear enough to start."]
    ],
    relatedHeading: "Where this issue usually leads",
    relatedIntro: "Broken-site requests often move into one of these hands-on service areas after the first symptom is clear.",
    links: [
      ["Website Fixes", "/services/website-fixes/", "Start here for broken layouts, forms, modals, embeds, mobile issues, scripts, and bugs that need practical debugging."],
      ["Fix My Broken Website", "/blog/fix-my-broken-website/", "Use this deeper triage guide when the site is already broken and you need to decide what to check, protect, and fix first."],
      ["AI-Built Website Cleanup", "/services/ai-built-website-cleanup/", "Use this when ChatGPT, Codex, Lovable, Bolt, Cursor, Replit, v0, or another AI builder produced something close but fragile, broken, or not ready to launch."],
      ["WordPress Support", "/services/wordpress-support/", "Use this when the issue involves WordPress, plugins, themes, Elementor, PHP, CSS, JavaScript, or page builder cleanup."],
      ["Security, Hosting & Reliability", "/services/security-hosting-reliability/", "Use this when the symptom points toward DNS, SSL, redirects, Cloudflare, caching, hosting, or server reliability."],
      ["Analytics & Tracking", "/services/analytics-tracking/", "Use this when the site appears to work but GA4, GTM, pixels, events, form tracking, or conversions cannot be trusted."],
      ["Ecommerce Support", "/services/ecommerce-support/", "Use this when product pages, checkout, cart behavior, revenue tracking, Shopify, WooCommerce, or product data is involved."],
      ["Contact", "/contact/", "Send the URL, the symptom, the desired outcome, and any recent changes so the first move can be scoped."]
    ],
    contextHeading: "If this is the symptom, use the right fix path",
    contextIntro: "A broken-site request usually gets clearer after the first symptom is sorted. These paths help route visible, functional, tracking, and infrastructure problems into the right kind of hands-on help.",
    contextCards: [
      ["Website Fixes", "Use this for broken layouts, failed forms, modals, embeds, JavaScript errors, CSS issues, and other visible website bugs.", "/services/website-fixes/", "View website fixes for broken layouts, forms, modals, embeds, and website bugs"],
      ["Fix My Broken Website", "Use this when the request is urgent enough that you need triage, risk control, and a practical repair order before touching production.", "/blog/fix-my-broken-website/", "Read the fix my broken website triage guide"],
      ["AI-Built Website Cleanup", "Use this when the broken page or prototype came from an AI builder and now needs routing, code, deployment, tracking, forms, or SEO cleanup.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup"],
      ["WordPress Support", "Use this when the problem lives in WordPress, Elementor, a theme, a plugin update, PHP, page builder settings, or cached assets.", "/services/wordpress-support/", "View WordPress support for plugins, themes, Elementor, PHP, and site cleanup"],
      ["Security, Hosting & Reliability", "Use this when the symptom points to DNS, SSL, redirects, Cloudflare, cache, hosting, downtime, or server-level behavior.", "/services/security-hosting-reliability/", "View hosting, DNS, SSL, cache, and reliability support"],
      ["Analytics & Tracking", "Use this when the site looks okay but forms, GA4, GTM, pixels, conversion events, or CRM handoff cannot be trusted.", "/services/analytics-tracking/", "View analytics and tracking support for GA4, GTM, pixels, forms, and conversions"]
    ],
    otherHeading: "Not the broken-site problem you meant?",
    otherIntro: "These narrower notes route common symptoms into more specific fix paths.",
    otherItems: [
      ["Fix my broken website", "A deeper triage guide for deciding what to check, protect, and fix first when the site is already failing.", "/blog/fix-my-broken-website/", "Read the broken-site triage guide"],
      ["Broken layouts or mobile issues", "Sections overlap, spacing shifts, buttons move, or the mobile view falls apart.", "/blog/broken-layouts-mobile-website-fixes/", "Read the layout post"],
      ["Forms and modals not working", "Interactive pieces stop working, tracking interferes, or third-party widgets behave strangely.", "/blog/forms-modals-not-working/", "Read the forms post"],
      ["Security, hosting, DNS, SSL, and cache", "The site is not loading, redirects loop, SSL warnings show, or Cloudflare/cache behavior is confusing.", "/services/security-hosting-reliability/", "View reliability support"],
      ["WordPress CMS, plugin, or theme weirdness", "Plugins, templates, page builders, updates, or WordPress admin behavior are part of the problem.", "/blog/cms-plugin-theme-weirdness/", "Read the WordPress post"]
    ],
    finalCta: {
      heading: "Something broken on your site?",
      copy: "Send the URL, what broke, what should happen instead, and anything that changed recently. I will trace the symptom and identify the smallest practical next move.",
      label: "Get Help Fixing This",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "fix-my-broken-website",
    title: "Fix My Broken Website | Repair Order for Broken Pages, Forms, Checkout, and WordPress",
    h1: "Fix My Broken Website: What to Check Before You Change Anything",
    meta: "A practical fix my broken website guide covering broken pages, forms, checkout, WordPress, JavaScript, CSS, cache, DNS, hosting, tracking, and the safest repair order before you touch production.",
    eyebrow: "Broken website triage",
    summary: "When the site is already broken, the useful move is to protect the current state, reproduce the symptom, identify the affected business path, and fix the smallest verified cause.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "start-here",
    tags: ["website-fixes", "production-debugging", "wordpress", "javascript", "forms", "ecommerce"],
    heroCta: "Get Broken Website Help",
    heroSecondary: "Start With the Parent Guide",
    heroSecondaryHref: "/blog/something-broke-on-your-website/",
    cta: "Send the broken URL, what should happen, what happens now, when it started, and anything that changed recently.",
    exampleBlock: {
      heading: "Broken-site repair should have an order",
      copy: "The safest path is usually capture, reproduce, isolate, change one thing, verify the user path, then document what still needs watching.",
      href: "/contact/",
      label: "Send the broken website details",
      title: "Open the contact request form for broken website repair help"
    },
    intro: [
      [
        "If you are searching for ",
        { text: "fix my broken website", href: "/services/website-fixes/", title: "View hands-on website fix help" },
        ", fix my web page, or website repair help, the site probably does not need another generic checklist. It needs a careful first move and a safe repair order. The page may look broken, a form may be failing, checkout may be stuck, WordPress may have changed after an update, or a script may be breaking only on one device."
      ],
      "The mistake is treating every broken-site issue like the same problem. A page with missing CSS, a checkout that cannot submit, a lead form that says success but sends nothing, and a site that redirects in a loop all need different checks. They also carry different business risk.",
      [
        "This guide is the focused child of ",
        { text: "Something Broke on Your Website", href: "/blog/something-broke-on-your-website/", title: "Read the broader broken website troubleshooting guide" },
        ". Use the parent guide to understand the broad symptom buckets. Use this page when the exact request is fix my broken website and you need a practical repair order plus a cleaner handoff to a website fixer."
      ]
    ],
    sections: [
      {
        heading: "Protect the current state first",
        body: [
          "Before making changes, capture what is happening now. That does not have to be complicated: take screenshots, record the failed action, copy the exact URL, note the browser and device, and write down the time you saw the issue. If the site has backups, staging, Git, hosting snapshots, or a recent export, identify what restore points exist before editing production.",
          "This matters because broken websites often get worse when people try several fixes at once. A cache purge, plugin rollback, page edit, DNS change, and script removal may each be reasonable in isolation, but together they destroy the trail. When the fix fails, nobody knows which change helped or hurt."
        ],
        listTitle: "Capture before touching the site",
        checklist: ["Exact URL and affected page path", "Screenshot or screen recording", "Device, browser, and logged-in/logged-out state", "Time the issue started or was noticed", "Recent plugin, theme, CMS, hosting, DNS, cache, content, or script changes", "Backup, staging, deployment, or rollback options"],
        calloutTitle: "Production rule",
        callout: "If you cannot explain how to undo the next change, slow down before making it."
      },
      {
        heading: "Separate public risk from annoyance",
        body: [
          "A broken website does not always mean emergency. The right response depends on what the failure affects. A slightly awkward spacing issue on a low-traffic page is not the same as a dead lead form, broken checkout, indexable SEO page returning an error, or paid campaign page with a failed CTA.",
          "Sort the issue by business path first. If the site can still take leads, accept orders, load important pages, and track critical actions, the repair can be calmer. If the failure blocks revenue, paid traffic, organic landing pages, customer trust, or reporting, the first fix should stabilize the path that matters most."
        ],
        listTitle: "Prioritize broken paths",
        checklist: ["Lead form or quote request path", "Checkout, cart, booking, or payment flow", "Homepage or high-value service page", "Paid traffic landing page", "Organic page that earns impressions or clicks", "Tracking, CRM, or reporting handoff", "Visible layout issue that harms trust"]
      },
      {
        heading: "Use the symptom to pick the first tool",
        body: [
          "The first tool depends on the symptom. A layout problem usually starts with CSS inspection, template output, builder settings, and cached assets. A button or menu that does nothing usually starts with browser console errors, JavaScript order, plugin conflicts, or blocked scripts. A form failure starts with submission testing, email or CRM destination checks, validation, redirects, spam protection, and tracking.",
          "Server-level failures need a different lane: HTTP status codes, redirect chains, SSL mode, DNS records, hosting logs, Cloudflare cache, and whether the issue changes by network or device. Pulling a WordPress plugin is not helpful if the real issue is DNS or SSL; changing DNS is not helpful if a page builder section is hiding a button on mobile."
        ],
        listTitle: "Match symptom to diagnostic lane",
        checklist: ["Layout: CSS, template, builder, image constraints, responsive rules", "Interaction: console errors, failed requests, script order, plugins, third-party snippets", "Forms: validation, notifications, SMTP, CRM, webhooks, redirects, thank-you state", "Checkout: cart session, payment gateway, shipping/tax, JavaScript, plugin conflicts", "Tracking: GTM preview, GA4 DebugView, duplicate scripts, event triggers", "Infrastructure: DNS, SSL, redirects, cache, hosting logs, server status"]
      },
      {
        heading: "Check the change timeline",
        body: [
          "Most broken-site repairs get easier when the timeline is honest. What changed within the last day, week, or release cycle? A plugin update can change markup or scripts. A cache plugin can serve mismatched assets. A theme update can overwrite style assumptions. A third-party widget can ship a breaking change without anyone touching your site.",
          "If there is no obvious change, still look for hidden ones: automatic updates, hosting upgrades, expired SSL certificates, browser policy changes, ad or tracking snippets, CRM form edits, DNS changes, or a page builder saving different markup after a small edit."
        ],
        listTitle: "Timeline clues",
        checklist: ["CMS, plugin, theme, app, or extension updates", "Page content, builder, menu, or template edits", "Cache, CDN, Cloudflare, or optimization changes", "Tracking, pixel, chat, widget, iframe, or embed changes", "Hosting, PHP, SSL, DNS, redirect, or deployment changes", "CRM, form, email, payment, shipping, or API changes"]
      },
      {
        heading: "Fix one layer and verify the user path",
        body: [
          "A broken-site fix is not done when the first visible symptom disappears. It is done when the user path works again. If the issue was a form, submit the form and confirm the destination. If it was checkout, test the cart and order path as far as safely possible. If it was a menu, check desktop and mobile. If tracking mattered, verify the event instead of assuming it fired.",
          [
            "This is where ",
            { text: "production debugging", href: "/skills/production-debugging/", title: "View production debugging support" },
            " matters. Browser console errors, network requests, logs, cache behavior, plugin output, and tracking tools can show whether the fix actually reached the live visitor path."
          ]
        ],
        listTitle: "Verification checks",
        checklist: ["Retest the exact URL and action that failed", "Check affected mobile and desktop views", "Confirm forms, checkout, menus, modals, or widgets work end to end", "Clear or bypass cache when stale assets are possible", "Check console and network errors after the fix", "Verify GA4, GTM, pixels, CRM, or email delivery if the business depends on it"],
        calloutTitle: "Do not stop at looks fixed",
        callout: "A page can look repaired while forms, tracking, checkout, or CRM handoff are still broken."
      },
      {
        heading: "What to send when you want help",
        body: [
          "A strong repair request is short, specific, and evidence-based. It does not need a perfect diagnosis. It needs the broken URL, expected behavior, current behavior, affected devices, timeline, recent changes, and why the issue matters.",
          "If the site has sensitive client or customer data, avoid sending credentials in the first message. Start with the public symptom, platform context, and priority. Access can be handled once the repair path is clear enough to begin."
        ],
        listTitle: "Best first message",
        checklist: ["The broken URL", "What should happen", "What happens instead", "Screenshot or recording", "Device and browser", "When it started", "Recent changes", "Business impact", "Platform and known plugins/tools", "Whether staging, backups, or hosting access exist"]
      }
    ],
    faqs: [
      ["How do I fix my broken website first?", "Start by capturing the exact symptom, URL, device, expected behavior, recent changes, and business impact. Then choose the diagnostic lane: layout, interaction, form, checkout, tracking, or infrastructure."],
      ["Should I update plugins to fix a broken site?", "Only if the evidence points there and you know how to roll back. Updating several plugins blindly can hide the cause or create a second problem."],
      ["Should I restore a backup?", "A backup can help, but only after you understand what it will overwrite. If leads, orders, content edits, or database changes happened after the backup, restoring can create new damage."],
      ["Why does my broken website work for me but not visitors?", "That often points to cache, logged-in versus logged-out state, browser differences, device-specific layout, geography/CDN behavior, or a script that loads differently for visitors."],
      ["What is the fastest useful thing to send a website fixer?", "Send the URL, what should happen, what happens now, when it started, recent changes, and a screenshot or recording."],
      ["Can The Web Guy fix a broken website without rebuilding it?", "Often, yes. Many broken-site problems are smaller than a rebuild: CSS, JavaScript, plugin, template, form, cache, tracking, API, or hosting fixes."]
    ],
    links: [
      ["Parent Broken Website Guide", "/blog/something-broke-on-your-website/", "Use the broader guide to compare visual, functional, tracking, and infrastructure symptoms."],
      ["Website Fixes", "/services/website-fixes/", "Use this when the broken site needs hands-on debugging and repair."],
      ["Production Debugging", "/skills/production-debugging/", "Use this when console errors, network failures, live scripts, cache, or real browser behavior need inspection."],
      ["WordPress Support", "/services/wordpress-support/", "Use this when the broken behavior lives inside WordPress, plugins, themes, page builders, or PHP/CSS/JavaScript."],
      ["Security, Hosting & Reliability", "/services/security-hosting-reliability/", "Use this when DNS, SSL, redirects, cache, Cloudflare, hosting, or server behavior may be involved."]
    ],
    contextHeading: "Broken website repair paths",
    contextIntro: "Use the path that matches what failed. Most repairs get easier once the symptom is routed to the right layer.",
    contextCards: [
      ["Website Fixes", "Best fit for broken pages, layouts, CSS, JavaScript, forms, modals, embeds, mobile issues, and visible bugs.", "/services/website-fixes/", "View website fixes"],
      ["Production Debugging", "Best fit when the repair needs console errors, network requests, logs, cache checks, script isolation, and careful live-site verification.", "/skills/production-debugging/", "View production debugging"],
      ["WordPress Plugin Conflict Help", "Best fit when the problem started after a plugin update or two plugins appear to fight over scripts, forms, checkout, styles, or admin behavior.", "/services/wordpress-plugin-conflict-help/", "View plugin conflict help"],
      ["API & Integrations", "Best fit when forms, CRMs, webhooks, ecommerce systems, or data handoffs are part of what broke.", "/services/api-integrations/", "View API integration help"],
      ["Analytics & Tracking", "Best fit when the page looks repaired but GA4, GTM, pixels, conversion events, or reports still cannot be trusted.", "/services/analytics-tracking/", "View analytics and tracking help"]
    ],
    otherHeading: "Related broken-site notes",
    otherIntro: "If the symptom is narrower than a whole broken website, these pages route the issue more precisely.",
    otherItems: [
      ["JavaScript issues on websites", "Menus, buttons, forms, scripts, and interactive pieces that fail because browser JavaScript is broken.", "/blog/javascript-issues-website-troubleshooting/", "Read JavaScript issue troubleshooting"],
      ["CSS and JavaScript bugs", "Front-end bug notes for CSS conflicts, console errors, script order, and browser behavior.", "/blog/css-javascript-errors-website-bugs/", "Read CSS and JavaScript bug help"],
      ["Forms and modals not working", "Lead forms, popups, validation, redirects, hidden fields, and thank-you states that fail.", "/blog/forms-modals-not-working/", "Read forms and modals help"],
      ["Broken layouts or mobile issues", "Responsive layout, overlapping sections, mobile spacing, and visual breakage.", "/blog/broken-layouts-mobile-website-fixes/", "Read layout troubleshooting"]
    ],
    finalCta: {
      heading: "Need a broken website fixed?",
      copy: "Send the broken URL, what should happen, what happens now, when it started, and what changed recently. I will trace the issue in the safest practical order.",
      label: "Get Broken Website Help",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "seo-audit-done-now-implement-it",
    title: "SEO Audit Implementation Help | The Web Guy",
    h1: "SEO Audit Done? Now Implement It on the Website.",
    meta: "Have SEO audit recommendations sitting in a spreadsheet? The Web Guy helps turn technical SEO notes into real website changes at $55/hr.",
    eyebrow: "SEO work is stuck",
    summary: "SEO recommendations do not help much while they sit in a spreadsheet. Technical SEO implementation turns crawl notes, audit tasks, internal link gaps, schema needs, and template fixes into real site changes.",
    problemType: "Start here",
    relatedService: "technical-seo-implementation",
    category: "seo-pages-ai",
    tags: ["technical-seo", "seo-audit", "internal-links", "wordpress", "ecommerce", "analytics-tracking"],
    heroCta: "Send the SEO Audit",
    heroSecondary: "View SEO Implementation",
    heroSecondaryHref: "/services/technical-seo-implementation/",
    cta: "Send the audit, crawl notes, or spreadsheet. The goal is to turn useful recommendations into actual site changes.",
    exampleBlock: {
      heading: "Proof example: audit notes into shipped changes",
      copy: "A useful implementation pass can turn crawl exports, title/meta gaps, heading cleanup, schema notes, redirect issues, and internal-link recommendations into live page and template changes instead of another untouched spreadsheet.",
      href: "/contact/",
      label: "Send the audit or crawl notes",
      title: "Open the contact request form for SEO audit implementation"
    },
    intro: [
      [
        "The ",
        { text: "SEO audit", href: "/services/seo-audit-implementation/", title: "View SEO audit implementation help" },
        " exists. The spreadsheet is full. The crawl export is sitting in a folder. Everyone agrees the recommendations matter, but the website does not change. Next month, the same items appear again."
      ],
      "This is one of the most common places SEO gets stuck. Strategy is written by one person, the site is controlled by another system, the developer is busy, the CMS is messy, and the business owner does not know which recommendation is safe to touch first. The result is a list of good ideas with no implementation path.",
      [
        { text: "Technical SEO implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation services" },
        " is the bridge between the audit and the live website. It is not another strategy deck. It is the practical work of changing metadata, headings, templates, redirects, schema, internal links, tracking, crawl paths, product data, page structure, and CMS settings so the site actually reflects the recommendations."
      ]
    ],
    sections: [
      {
        heading: "SEO gets stuck between strategy and the website",
        body: [
          "The gap is usually not that nobody cares. It is that the person who knows SEO is not always the person who can safely edit templates, redirects, schema, content, page builders, plugins, tracking, or ecommerce data.",
          "Agencies run into this constantly. The SEO lead knows what needs to happen, the account manager has the client waiting, the developer has larger projects in flight, and the production task is too technical for a VA but too small for a full rebuild. That is how audit notes survive untouched for months.",
          "The useful move is to separate strategy from implementation. Keep the strategic direction, then turn the recommendations into scoped production tasks that can be completed inside the real constraints of the CMS, theme, ecommerce platform, plugin stack, or codebase."
        ],
        calloutTitle: "The bottleneck",
        callout: "An SEO audit is only valuable when someone can touch the website without breaking the website."
      },
      {
        heading: "What SEO implementation actually means",
        body: [
          "SEO implementation is the hands-on work that turns recommendations into live changes. Some tasks are page-level edits: title tags, meta descriptions, headings, body copy, internal links, FAQs, image alt text, or content structure. Others are site-level or template-level tasks: schema output, canonical tags, pagination, redirects, crawl paths, indexation controls, navigation modules, and performance cleanup.",
          "A useful contractor does not need to rewrite the strategy to be helpful. If the audit says category pages need better headings, the job is to find where those headings are generated and fix the pattern. If the audit says important pages have weak internal links, the job is to add links in context, not just talk about link equity."
        ],
        listTitle: "Common implementation tasks",
        checklist: ["Update title tags and meta descriptions", "Clean heading structure", "Add internal links", "Update page copy and section structure", "Fix redirects and broken links", "Clean indexation and crawl issues", "Add schema or structured data", "Improve crawl paths and navigation modules", "Reduce duplicate or thin pages", "Update templates that affect many URLs"]
      },
      {
        heading: "Start by sorting the audit into buckets",
        body: [
          "A large audit can feel impossible because it mixes five kinds of work in one sheet. There may be quick edits, strategic decisions, risky technical tasks, platform limitations, and reporting questions all sitting beside each other.",
          "Before implementation starts, sort the recommendations into buckets. This makes the handoff easier, reduces context switching, and helps choose the right order. It also reveals which items can be fixed directly and which need access, staging, approval, or more information."
        ],
        listTitle: "Useful buckets",
        checklist: ["Quick wins", "Template-level fixes", "Page-level edits", "Technical crawl issues", "Content structure", "Internal linking", "Schema and structured data", "Tracking and measurement", "Platform limitations", "Needs strategy decision before implementation"],
        calloutTitle: "Simple sorting test",
        callout: "Ask whether the recommendation affects one URL, many URLs, crawl/indexation, reporting, or conversion. That usually tells you where it belongs."
      },
      {
        heading: "Not every SEO recommendation is equal",
        body: [
          "Some recommendations are technically correct but low-impact. Others are small edits that unlock a lot of value because they affect important pages, template patterns, crawlability, or conversion paths.",
          "Prioritization should consider business impact, search intent, affected pages, technical difficulty, risk, template leverage, conversion value, and crawl or indexation importance. Fixing a low-value meta description on one page may be less important than a heading template that affects 200 pages. Cleaning an internal link path to a money page may matter more than polishing a blog post that gets no qualified traffic.",
          "Good implementation work keeps the SEO goal in view while still respecting the production system. The highest priority task is not always the flashiest task. It is the task that can be completed safely and move the site toward better visibility, crawlability, measurement, or conversion."
        ],
        listTitle: "Prioritize by",
        checklist: ["Business impact", "Search intent and page value", "Number of affected URLs", "Difficulty and risk", "Template leverage", "Conversion value", "Crawl/indexation importance", "Whether the fix can be verified"]
      },
      {
        heading: "WordPress SEO implementation",
        body: [
          [
            { text: "WordPress SEO implementation", href: "/services/wordpress-support/", title: "View WordPress support for SEO implementation, themes, plugins, and builder cleanup" },
            " often involves both content editing and technical cleanup. SEO plugins help, but they do not solve everything. A plugin can store metadata, generate XML sitemaps, manage redirects, or output schema, but the real site may still have broken headings, bloated builder sections, thin service pages, duplicate templates, or internal link gaps."
          ],
          "Page builders add another layer. Elementor, blocks, shortcodes, theme templates, and plugin output can all shape what search engines and users see. A practical implementation pass works with the existing setup, cleans what can be cleaned, and avoids turning every recommendation into a redesign."
        ],
        listTitle: "WordPress tasks",
        checklist: ["SEO plugin settings", "Title tags and meta descriptions", "Heading cleanup", "Internal link edits", "Schema plugin or custom schema support", "Redirect plugin cleanup", "Theme or child-theme template updates", "Content formatting", "Elementor or page builder cleanup"]
      },
      {
        heading: "Ecommerce SEO implementation",
        body: [
          [
            { text: "Ecommerce SEO implementation", href: "/services/ecommerce-support/", title: "View ecommerce support for product pages, category pages, feeds, schema, and tracking" },
            " has extra moving parts because product data, category structure, filters, tracking, schema, and feeds are connected. Product pages may need schema. Category pages may need better copy and internal links. Product attributes may affect Merchant Center visibility. Tracking may need to prove which pages and products actually convert."
          ],
          "The right fix depends on the platform. Shopify, WooCommerce, BigCommerce, and custom ecommerce setups all expose different controls. A useful implementation pass looks at templates, product data, crawl paths, duplicate pages, collection/category pages, and measurement together."
        ],
        listTitle: "Ecommerce tasks",
        checklist: ["Product schema", "Collection/category page structure", "Merchant Center and product data cleanup", "Internal product links", "Faceted navigation concerns", "Duplicate product or category issues", "Tracking and ecommerce events", "Product template cleanup"]
      },
      {
        heading: "Technical SEO tasks that usually need a developer",
        body: [
          "Some SEO work can be handled by a marketer inside a CMS. Other work needs someone comfortable with templates, redirects, code, scripts, schema, server behavior, and front-end performance.",
          "Developer-level SEO tasks are often the items that sit untouched the longest because they are not large enough for a rebuild but not simple enough for a content editor. This is where hourly implementation can be useful. The task may be small, but the person doing it needs to understand the consequences."
        ],
        listTitle: "Often technical",
        checklist: ["Template-level headings", "Schema output", "Redirect rules", "Sitemap and indexation cleanup", "JavaScript-rendered content concerns", "Canonical tags", "Pagination", "Internal linking modules", "Speed and Core Web Vitals cleanup", "Tracking verification after changes"]
      },
      {
        heading: "How to hand off SEO work to a contractor",
        body: [
          "A good handoff does not need to be polished. It needs enough context to avoid guessing. The best starting point is the audit spreadsheet, crawl output, affected URLs, priority notes, target keyword or search intent notes, CMS/platform details, and any known constraints.",
          "If staging exists, include it. If there are plugin restrictions, approval rules, or pages that must not be changed, include those too. The goal is to make the first implementation pass useful instead of spending the first hour reconstructing why the recommendation exists."
        ],
        listTitle: "Send this",
        checklist: ["Audit spreadsheet", "Priority column if available", "Affected URLs", "Target keyword or search intent notes", "CMS access", "Staging access if available", "Plugin/tool notes", "Crawl output", "Known constraints", "Analytics or tracking notes if success must be measured"]
      },
      {
        heading: "What to verify after SEO changes go live",
        body: [
          "Implementation is not done just because a page was edited. The change should be checked in the live HTML, browser, CMS, crawl tool, and tracking setup where relevant.",
          "For page-level changes, confirm metadata, headings, internal links, canonical tags, schema, and visible layout. For template changes, crawl a sample of affected pages. For tracking-related SEO work, check GA4/GTM events or conversion behavior. For redirects and indexation changes, confirm status codes and destination URLs."
        ],
        listTitle: "Post-change checks",
        checklist: ["Live title/meta output", "Heading structure", "Canonical and robots directives", "Schema validation where relevant", "Redirect status and destination", "Internal links visible and crawlable", "Tracking still works", "Mobile layout still looks right"]
      },
      {
        heading: "Where The Web Guy fits",
        body: [
          [
            "The Web Guy fits when the SEO work is already known but not implemented. That includes WordPress SEO fixes, ecommerce cleanup, ",
            { text: "schema and structured data", href: "/services/schema-implementation-service/", title: "View schema implementation service help" },
            ", internal link updates, crawl issue cleanup, template edits, page structure changes, technical QA, and tracking verification."
          ],
          "This is not about selling a giant SEO package. It is practical contract help for agencies, marketing teams, and site owners who have recommendations and need someone technical enough to make the changes inside the actual site."
        ],
        calloutTitle: "Best first message",
        callout: "Send the audit, crawl notes, spreadsheet, affected URLs, platform, and top priorities."
      }
    ],
    faqs: [
      ["What is technical SEO implementation?", "It is the process of turning SEO recommendations into real site changes: metadata, headings, schema, redirects, internal links, crawl fixes, templates, tracking, and related cleanup."],
      ["Can you implement an SEO audit without creating a new strategy?", "Yes. If the strategy and recommendations already exist, the work can focus on implementation rather than a new audit."],
      ["Do SEO fixes require a developer?", "Some do. Metadata and content edits may be simple, but template headings, schema output, redirects, JavaScript issues, internal linking modules, and performance often need technical help."],
      ["Can WordPress SEO issues be fixed hourly?", "Yes. Many WordPress SEO fixes are practical hourly tasks when the recommendations and affected pages are clear."],
      ["What should I include when sending SEO recommendations?", "Send the spreadsheet, priority notes, affected URLs, crawl export, CMS details, target intent notes, and any plugin or platform constraints."],
      ["Can ecommerce SEO issues be fixed without rebuilding the site?", "Often, yes. Product data, schema, collection pages, internal links, tracking, and technical cleanup can often be improved without a full rebuild."],
      ["Can schema be implemented without a plugin?", "Sometimes. It depends on the platform. Schema may come from a plugin, theme template, custom code, ecommerce platform, or a tag-based implementation."],
      ["How should SEO audit tasks be prioritized?", "Sort by business value, search intent, number of affected pages, implementation difficulty, risk, template leverage, conversion value, and crawl/indexation impact."],
      ["Can agencies send overflow SEO implementation work?", "Yes. Agency overflow work is a good fit when recommendations are clear and the team needs production help completing site changes."],
      ["Do SEO implementation changes need tracking QA?", "Often, yes. If changes affect landing pages, forms, ecommerce, events, or conversion paths, tracking should be checked after launch."]
    ],
    relatedHeading: "Where this usually connects",
    relatedIntro: "SEO audit implementation usually touches several service and skill areas once the recommendations are sorted.",
    links: [
      ["Technical SEO Implementation", "/services/technical-seo-implementation/", "For metadata, headings, redirects, schema, crawl cleanup, internal links, templates, and practical SEO production work."],
      ["WordPress Support", "/services/wordpress-support/", "For SEO fixes that need WordPress themes, plugins, builders, templates, PHP, CSS, or content cleanup."],
      ["Ecommerce Support", "/services/ecommerce-support/", "For product pages, category pages, Merchant Center, schema, Shopify, WooCommerce, product data, and ecommerce tracking."],
      ["Analytics & Tracking", "/services/analytics-tracking/", "For GA4, GTM, conversions, event verification, and measurement checks after SEO changes go live."],
      ["Contact", "/contact/", "Send the spreadsheet, crawl notes, URLs, platform, and priority list to start the implementation pass."]
    ],
    contextHeading: "Turn the audit into the right implementation lane",
    contextIntro: "SEO recommendations become useful when they are mapped to actual site work. These are the most common implementation paths after an audit, crawl, or spreadsheet is reviewed.",
    contextCards: [
      ["Technical SEO Implementation", "Use this for metadata, headings, redirects, canonicals, crawl cleanup, internal links, and template-level SEO fixes.", "/services/technical-seo-implementation/", "View technical SEO implementation services"],
      ["Schema & Structured Data", "Use this when the audit calls for product schema, service schema, FAQ schema, local schema, or template-generated structured data.", "/skills/schema-structured-data/", "View schema and structured data implementation support"],
      ["Crawl Analysis & Internal Linking", "Use this for orphaned pages, crawl paths, broken links, internal link modules, indexation issues, and crawl export cleanup.", "/skills/crawl-analysis-internal-linking/", "View crawl analysis and internal linking support"],
      ["Agency Overflow Support", "Use this when an SEO team has the plan but needs production help getting site changes finished without pulling developers off larger work.", "/services/agency-overflow/", "View agency overflow support for SEO implementation work"]
    ],
    otherHeading: "Not the SEO problem you meant?",
    otherIntro: "These routes cover nearby problems that often show up after an audit is reviewed.",
    otherItems: [
      ["Technical SEO Implementation", "Turn audit recommendations into real website changes.", "/services/technical-seo-implementation/", "View the service"],
      ["Programmatic SEO", "Plan scalable page structures without creating thin doorway pages.", "/skills/programmatic-seo/", "View the skill"],
      ["Need a page live fast?", "Use this if the audit revealed missing service, local, or campaign pages.", "/blog/need-a-page-live-fast/", "Read the page post"],
      ["Website data does not match", "Use this if SEO reporting, GA4, GTM, ecommerce data, or dashboards cannot be trusted.", "/blog/website-data-systems-not-connecting/", "Read the data post"]
    ],
    finalCta: {
      heading: "Have SEO work stuck in a spreadsheet?",
      copy: "Send the audit, crawl notes, or priority list. I will help turn the recommendations into practical website changes.",
      label: "Send the SEO Audit",
      secondaryLabel: "View SEO Implementation",
      secondaryHref: "/services/technical-seo-implementation/"
    }
  },
  {
    slug: "need-a-page-live-fast",
    title: "Landing Page Help at $55/hr | The Web Guy",
    h1: "You Need a Page Live Fast. Here’s What It Actually Needs.",
    meta: "Need a landing page, service page, local SEO page, or campaign page built? Learn what it needs and get hourly page build help at $55/hr.",
    eyebrow: "Need a page live",
    summary: "A useful page is not just a headline and a button. It needs a clear job, the right sections, mobile structure, forms, tracking, internal links, and enough polish to launch without turning into a giant process.",
    problemType: "Start here",
    relatedService: "landing-pages",
    category: "seo-pages-ai",
    tags: ["landing-pages", "wordpress", "analytics-tracking", "technical-seo", "site-speed"],
    heroCta: "Send the Page Request",
    heroSecondary: "View Landing Pages",
    heroSecondaryHref: "/services/landing-pages/",
    cta: "Need a page live? Send the goal, platform, deadline, and what the page needs to do.",
    intro: [
      [
        "Someone needs a page live this week. That sounds simple until the request lands as ",
        { text: "build a landing page", href: "/services/landing-pages/", title: "View landing page development help" },
        " and nobody has defined what the page is supposed to accomplish."
      ],
      [
        "A landing page might be a paid traffic page, local SEO page, campaign page, service page, ecommerce promo page, lead magnet page, booking page, or ",
        { text: "lightweight React/static front-end build", href: "/services/react-static-sites/", title: "View React and static site help" },
        ". Each one needs a different structure. A page built for search should not be treated the same as a paid ad page with tight message match. A local service page should not be a city-name swap with no useful context."
      ],
      "The fastest way to launch a page is to define the job first, then build only what the job requires: clear offer, focused sections, CTA, form or next step, mobile layout, metadata, internal links, tracking, and enough QA to avoid obvious breakage."
    ],
    sections: [
      {
        heading: "Start with the page's job",
        body: [
          "A page should have a job before it has a layout. Is it supposed to generate leads, explain a service, support local SEO, capture paid traffic, promote an offer, collect form submissions, sell a product, explain a product, or route visitors to the next step?",
          "That job determines the copy, sections, CTA, links, form fields, tracking events, and level of distraction. A page for paid traffic usually needs tighter message match and fewer exits. A service page can be broader, more evergreen, and more connected to the rest of the site. A local SEO page needs useful local and service context."
        ],
        listTitle: "Common page jobs",
        checklist: ["Generate leads", "Explain a service", "Support local SEO", "Capture paid traffic", "Promote an offer", "Collect form submissions", "Sell or explain a product", "Route users to a next step"],
        calloutTitle: "Start here",
        callout: "If the page goal is vague, the build will be vague. Define the action the page should earn."
      },
      {
        heading: "A page needs more than a headline and button",
        body: [
          "A thin page can go live quickly, but it usually does not perform well. A useful page needs enough structure for a visitor to understand the offer, trust the next step, and act without friction.",
          "At minimum, the page should have a clear H1, the audience, the problem it solves, the offer or service explanation, benefits, process, FAQs, proof where real proof exists, a CTA, a working form or next step, tracking, metadata, and internal links. It should also look intentional on mobile because a page that only works on desktop is not really launched."
        ],
        listTitle: "Core elements",
        checklist: ["Clear H1", "Who it is for", "Problem it solves", "Offer or service explanation", "Benefits", "Process or next steps", "FAQs", "Trust signals where available", "CTA", "Form or contact path", "Tracking", "Internal links"]
      },
      {
        heading: "Service pages vs landing pages",
        body: [
          "A service page is usually broader, SEO-friendly, and evergreen. It should explain the work, who it helps, related services, FAQs, and why the offer is credible. It should also connect to the rest of the site through internal links.",
          "A landing page is often campaign or conversion focused. It may be built for a specific offer, ad group, email campaign, lead magnet, or launch. A local landing page is built around service plus location intent. A paid traffic page needs tight message match, a clear CTA, and less navigation friction.",
          "The wrong page type creates waste. A paid ad page with too many broad SEO sections may distract users. A service page with no internal links, FAQs, or search-intent structure may struggle to earn organic visibility."
        ],
        listTitle: "Use the right format",
        checklist: ["Service page: broader, evergreen, SEO-friendly", "Landing page: campaign or conversion focused", "Local page: service plus location intent", "Paid traffic page: tight message match and fewer distractions"]
      },
      {
        heading: "What to prepare before hiring a page builder",
        body: [
          "A page can move quickly when the inputs are clear. You do not need perfect copy, but you do need enough direction to avoid rebuilding the page three times.",
          "Send the goal, audience, platform, deadline, primary CTA, required form fields, offer details, examples you like, examples you dislike, brand constraints, tracking needs, and any internal links that should be included. If the page is replacing an existing URL, mention redirects, SEO concerns, and whether the old page has traffic."
        ],
        listTitle: "Brief checklist",
        checklist: ["Goal of the page", "Target audience", "Primary CTA", "Offer details", "Required form fields", "Example pages", "Brand/style requirements", "Tracking requirements", "Deadline", "CMS or platform", "Existing URL and redirect concerns if replacing a page"]
      },
      {
        heading: "WordPress landing pages",
        body: [
          [
            { text: "WordPress pages", href: "/services/wordpress-support/", title: "View WordPress support for pages, builders, forms, themes, and cleanup" },
            " are often the fastest path when the site already lives in WordPress and the team needs to keep editing content after launch. The build might use Elementor, blocks, custom fields, theme templates, shortcodes, forms, SEO plugins, or a child theme."
          ],
          "The practical goal is to work with the existing WordPress setup instead of fighting it. That may mean cleaning page builder spacing, creating a reusable section, adding a form, improving metadata, checking mobile layout, and keeping scripts from slowing the page down."
        ],
        listTitle: "WordPress build points",
        checklist: ["Elementor or page builder structure", "Theme template constraints", "Custom blocks or reusable sections", "Forms and email/CRM handoff", "SEO plugin fields", "Tracking scripts", "Speed and script bloat", "Mobile QA"]
      },
      {
        heading: "Static, React, and lightweight front-end pages",
        body: [
          "A static or lightweight front-end page makes sense when the page needs speed, control, component structure, or a focused deploy without a heavy CMS workflow. This can be useful for campaign pages, tools, one-off launches, simple lead capture pages, or pages that need to live outside the existing CMS.",
          "Static does not mean incomplete. A lightweight page can still include forms, embeds, tracking, metadata, structured sections, reusable components, and a simple deployment path. The tradeoff is that editing usually happens through code or a planned content workflow rather than a page builder."
        ],
        listTitle: "Good fit when",
        checklist: ["Speed matters", "The page is focused and self-contained", "The site needs a small tool or interactive component", "The CMS is too heavy for the task", "A component-based build is useful", "Deployment can be handled cleanly"]
      },
      {
        heading: "Local SEO pages",
        body: [
          "Local pages need more than a swapped city name. A useful local page should connect a real service to a real location, answer local search intent, include relevant internal links, and provide enough context to avoid feeling like a doorway page.",
          "That does not mean every local page needs to be long. It means the page should be specific enough to help a visitor. Mention the service area clearly, connect to related services, answer common questions, include contact paths, and avoid duplicating the same page with only a location token changed."
        ],
        listTitle: "Local page ingredients",
        checklist: ["Service plus location intent", "Unique city or service-area context", "Useful local content", "Internal links", "FAQs", "Contact CTAs", "Avoiding doorway-page patterns"]
      },
      {
        heading: "Forms, CTAs, and tracking before launch",
        body: [
          "A landing page is not really live if the form does not send, the CTA points to the wrong place, or conversions cannot be verified. Before launch, test the actions that matter.",
          [
            "Submit the form. Click the phone and email links. Check thank-you behavior. Confirm ",
            { text: "GA4 or GTM events", href: "/services/analytics-tracking/", title: "View analytics and tracking support for launch verification" },
            " if reporting matters. Verify UTM parameters and paid traffic landing URLs. If the page exists for lead generation, the lead flow needs to be tested end to end."
          ]
        ],
        listTitle: "Launch tracking checks",
        checklist: ["GA4 events", "GTM triggers", "Form submissions", "Phone and email clicks", "Paid traffic parameters", "Thank-you state", "CRM or inbox delivery", "Conversion verification"]
      },
      {
        heading: "What makes a page good enough to launch",
        body: [
          "Perfect can wait if the page is useful, accurate, working, and measurable. Good enough to launch means the offer is clear, the mobile layout works, the CTA/form works, metadata is present, tracking is tested, internal links are included, and there are no obvious layout or content errors.",
          "A practical launch can also include a short follow-up list. Maybe the page could use more proof later. Maybe more FAQs should be added after sales questions come in. Maybe images can improve after the first campaign. The key is separating blockers from improvements."
        ],
        listTitle: "Launch criteria",
        checklist: ["Clear offer", "Working CTA or form", "Mobile layout checked", "Page speed acceptable", "Metadata added", "Tracking tested", "Internal links added", "No obvious layout bugs", "No placeholder copy", "Next improvements documented"]
      },
      {
        heading: "Common reasons page builds get stuck",
        body: [
          "Page builds stall when the goal is vague, copy is missing, approvals are unclear, design expectations are undefined, tracking is an afterthought, or the existing site is harder to edit than expected.",
          "The fix is not always a bigger process. Often it is a smaller brief, a first version, a working form, a clear launch checklist, and a practical decision about what can wait."
        ],
        listTitle: "Common blockers",
        checklist: ["No defined page goal", "Missing offer details", "No approved CTA", "Unclear form requirements", "Brand/style expectations are vague", "Tracking is requested after launch", "CMS access is missing", "Existing templates fight the new layout"]
      },
      {
        heading: "Where The Web Guy fits",
        body: [
          "The Web Guy fits when you need a useful page live without turning it into a full agency engagement. That can mean WordPress landing pages, service pages, local SEO pages, React/static pages, paid campaign pages, forms, CTAs, tracking, internal links, and launch QA.",
          "The work is especially useful when a team already knows the page needs to exist but does not have someone available to build it, test it, and connect it to the rest of the site."
        ],
        calloutTitle: "Best first message",
        callout: "Send the goal, platform, deadline, CTA, form needs, tracking needs, and any example pages."
      }
    ],
    faqs: [
      ["How fast can a landing page be built?", "It depends on scope, assets, copy, platform, access, and approval speed. A focused page can move quickly when the goal and content are clear."],
      ["What should I provide before asking for a landing page?", "Send the goal, audience, offer details, CTA, required form fields, examples, platform, tracking needs, and deadline."],
      ["Do landing pages need SEO?", "Many do. Even campaign pages benefit from clean metadata, headings, internal links, readable structure, and crawlable content."],
      ["Can a landing page be built in WordPress?", "Yes. WordPress landing pages can use existing templates, page builders, blocks, forms, SEO plugins, and tracking scripts."],
      ["Should I use a static page or WordPress page?", "Use WordPress when the page needs to live inside an existing CMS workflow. Use static or lightweight front-end work when speed, simplicity, or a focused build matters more."],
      ["Should tracking be set up before the page launches?", "Yes. Forms, click events, paid traffic parameters, and conversions should be checked before the page goes live."],
      ["What is the difference between a service page and a landing page?", "A service page is usually evergreen and SEO-friendly. A landing page is often focused on a specific campaign, audience, offer, or conversion path."],
      ["Can local SEO pages be built without doorway-page problems?", "Yes, when they include useful location and service context instead of only swapping city names into duplicated copy."],
      ["Do I need finished copy before hiring help?", "Finished copy helps, but a clear goal, offer, audience, CTA, and rough notes are often enough to shape a first version."],
      ["Can forms and tracking be included in the build?", "Yes. Forms, CTAs, GA4/GTM events, paid traffic parameters, and conversion checks are part of practical page launch work."]
    ],
    relatedHeading: "Where this page build usually connects",
    relatedIntro: "A page request often touches more than design. These are the service paths that usually matter before launch.",
    links: [
      ["Landing Pages", "/services/landing-pages/", "For service pages, campaign pages, local SEO pages, paid traffic pages, lead-gen pages, and launch-ready page builds."],
      ["React & Static Sites", "/services/react-static-sites/", "For lightweight, component-based pages, static builds, simple deploys, and focused front-end work."],
      ["WordPress Support", "/services/wordpress-support/", "For pages that need to live inside WordPress, Elementor, a theme template, custom blocks, or an existing page builder."],
      ["Analytics & Tracking", "/services/analytics-tracking/", "For GA4, GTM, form events, phone/email clicks, conversion checks, and campaign measurement before launch."],
      ["Technical SEO Implementation", "/services/technical-seo-implementation/", "For metadata, headings, internal links, schema, local SEO structure, redirects, and crawl-aware page setup."],
      ["Contact", "/contact/", "Send the page goal, platform, deadline, CTA, form needs, and examples to start the build request."]
    ],
    contextHeading: "Choose the build path before the page stalls",
    contextIntro: "A new page usually needs more than design. These paths cover the common launch pieces: platform fit, front-end build, SEO basics, forms, and tracking.",
    contextCards: [
      ["Landing Pages", "Use this for service pages, local SEO pages, campaign pages, paid traffic pages, forms, CTAs, and launch-ready structure.", "/services/landing-pages/", "View landing page build support"],
      ["React & Static Sites", "Use this when the page should be lightweight, component-based, fast, or separate from a heavy CMS workflow.", "/services/react-static-sites/", "View React and static site support"],
      ["WordPress Support", "Use this when the page needs to live inside WordPress, Elementor, theme templates, blocks, SEO plugins, or existing builder rules.", "/services/wordpress-support/", "View WordPress page and site support"],
      ["Analytics & Tracking", "Use this when the page needs GA4/GTM events, form tracking, phone clicks, paid traffic parameters, or conversion verification before launch.", "/services/analytics-tracking/", "View analytics and tracking setup support"]
    ],
    otherHeading: "Not the page problem you meant?",
    otherIntro: "These routes cover related launch blockers that often appear once a page build starts.",
    otherItems: [
      ["SEO audit needs implementation", "Use this if the page exists because an SEO audit identified missing or weak pages.", "/blog/seo-audit-done-now-implement-it/", "Read the SEO post"],
      ["Forms or tracking need to work", "Use this if the page is useless unless leads, conversions, or events are measured correctly.", "/blog/website-data-systems-not-connecting/", "Read the data post"],
      ["WordPress support", "Use this if the page must be built inside an existing WordPress theme, plugin stack, or page builder.", "/services/wordpress-support/", "View WordPress support"],
      ["Site speed cleanup", "Use this if the new page is too slow, script-heavy, or held back by existing platform weight.", "/services/site-speed-performance/", "View speed cleanup"]
    ],
    finalCta: {
      heading: "Need a page live on a real site?",
      copy: "Send the goal, platform, deadline, and what the page needs to do. I will help figure out the fastest path to a useful launch.",
      label: "Send the Page Request",
      secondaryLabel: "View Landing Pages",
      secondaryHref: "/services/landing-pages/"
    }
  },
  {
    slug: "website-data-systems-not-connecting",
    title: "Website Tracking & Data Troubleshooting | The Web Guy",
    h1: "Website Data and Systems Not Connecting? Map the Flow First.",
    meta: "Forms, GA4, GTM, ecommerce revenue, APIs, or dashboards not matching reality? Learn how to trace the flow and get hourly help at $55/hr.",
    eyebrow: "Data does not connect",
    summary: "When forms, analytics, ecommerce revenue, APIs, dashboards, and CRMs disagree, the fix starts by tracing the data path from user action to final destination.",
    problemType: "Start here",
    relatedService: "analytics-tracking",
    category: "forms-tracking-data",
    tags: ["analytics-tracking", "ga4-gtm", "forms", "api-integrations", "ecommerce", "dashboards"],
    heroCta: "Send the Tracking Problem",
    heroSecondary: "View Analytics Help",
    heroSecondaryHref: "/services/analytics-tracking/",
    cta: "Send the page, the action, and where the data is supposed to go. The work starts by tracing the broken step.",
    exampleBlock: {
      heading: "Proof example: one action, every handoff",
      copy: "A strong troubleshooting pass follows one real test action from the browser to the form record, GTM trigger, GA4 event, webhook payload, CRM field, ecommerce order, or dashboard metric until the broken handoff is visible.",
      href: "/contact/",
      label: "Send the data-flow problem",
      title: "Open the contact request form for tracking and systems troubleshooting"
    },
    intro: [
      [
        "Leads are missing. ",
        { text: "GA4 numbers", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, and conversions" },
        " look wrong. Google Tag Manager preview is confusing. Forms say they submitted, but no email arrived. Ecommerce revenue does not match the store. CRM records are incomplete. A dashboard says one thing and the platform says another."
      ],
      "These problems are frustrating because nothing looks obviously broken at first. The page may load. The form may show a success message. The order may exist. The chart may refresh. But somewhere between the user action and the final report, one step is missing, duplicated, renamed, blocked, or misunderstood.",
      [
        "The fastest way to troubleshoot website data is to map the flow. Start with the user action, identify every system that should receive or transform the data, then test each step. The problem might be a form plugin, GTM trigger, GA4 event name, webhook payload, ",
        { text: "ecommerce integration", href: "/services/ecommerce-support/", title: "View ecommerce website support for checkout, product data, and tracking issues" },
        ", consent setting, CRM field mapping, or reporting layer."
      ]
    ],
    sections: [
      {
        heading: "Data problems usually start with a broken flow",
        body: [
          "Most tracking and integration problems are not one object called tracking. They are a chain. A visitor takes an action. The browser runs scripts. A form plugin or checkout system handles the action. A CRM, email system, analytics tool, ad platform, webhook, API, or dashboard receives some version of the data.",
          "One broken step can make everything look unreliable. If the form submits but the CRM mapping is wrong, the marketing team sees missing leads. If GTM fires twice, GA4 shows duplicate conversions. If the ecommerce platform records revenue but the purchase event fails, paid reporting looks weak."
        ],
        flow: ["User action", "Browser event", "Form or checkout", "CRM/API/webhook", "GTM/GA4/pixel", "Dashboard/report"],
        calloutTitle: "Debugging principle",
        callout: "Do not start inside the dashboard. Start with the user action and trace the data forward."
      },
      {
        heading: "Start with the user action",
        body: [
          "Tracking and integration work gets easier when the action is specific. A form submission is different from a button click. A checkout start is different from a purchase. A phone click is different from a lead. A booking request may involve an embedded tool, iframe, third-party script, email notification, CRM record, and analytics event.",
          "Define the action, then define what should happen next. If the action is submit contact form, the expected result might be email sent, CRM lead created, GTM event fired, GA4 conversion recorded, and dashboard updated. That gives you a testable path."
        ],
        listTitle: "Common actions",
        checklist: ["Form submission", "Button click", "Phone click", "Checkout", "Purchase", "Product view", "Add to cart", "File download", "Booking request", "Login or account action"]
      },
      {
        heading: "Check the form first",
        body: [
          "If leads are missing, start with the form before blaming analytics. Confirm that the form actually submits, validation works, required fields are accepted, the success state appears, and the destination receives the data.",
          "Email delivery can be separate from form submission. A form can save an entry in WordPress but fail to send an email because SMTP, DNS, spam filtering, or sender settings are wrong. A CRM integration can fail because a required field is missing, a token expired, or a field name changed."
        ],
        listTitle: "Form checks",
        checklist: ["Is the form submitting?", "Is validation working?", "Are emails sending?", "Is spam filtering blocking messages?", "Is the CRM integration working?", "Are hidden fields passing correctly?", "Is the thank-you state reliable?", "Are test submissions saved anywhere?"],
        calloutTitle: "Quiet failure",
        callout: "A success message on the page does not prove the lead reached the inbox, CRM, analytics property, or dashboard."
      },
      {
        heading: "GA4 and GTM problems",
        body: [
          "GA4 and GTM issues usually come down to triggers, event names, duplicate scripts, parameters, consent, cross-domain behavior, or misunderstanding what the event represents.",
          "A GTM trigger may not fire because the form does not submit in a traditional way. It may fire too often because it listens to every click on a page. GA4 may receive the event but not mark it as a conversion. Parameters may be missing, names may be inconsistent, or DebugView may show test traffic that never appears in standard reports the way someone expects."
        ],
        listTitle: "GA4/GTM checks",
        checklist: ["Trigger not firing", "Event name mismatch", "Duplicate events", "Missing parameters", "Consent or cookie settings", "Cross-domain issues", "DebugView verification", "Conversion not marked properly", "Multiple containers or duplicate scripts"]
      },
      {
        heading: "Ecommerce tracking issues",
        body: [
          "Ecommerce tracking is especially easy to distrust because the store, payment processor, ad platform, GA4 property, CRM, and dashboard may all define revenue differently. One tool may include shipping and tax. Another may not. Refunds, canceled orders, duplicate purchase events, attribution windows, and time zones can all create differences.",
          "The technical side still matters. Missing purchase events, duplicate transactions, incomplete product arrays, broken checkout events, product ID mismatches, Merchant Center issues, and Shopify/WooCommerce tracking differences can all create bad data."
        ],
        listTitle: "Ecommerce checks",
        checklist: ["Purchase events missing", "Revenue mismatch", "Duplicate transactions", "Product data missing", "Checkout events failing", "Merchant Center/product data issues", "Shopify or WooCommerce tracking differences", "Refunds, tax, shipping, and time-zone assumptions"]
      },
      {
        heading: "API and webhook issues",
        body: [
          [
            { text: "APIs and webhooks", href: "/services/api-integrations/", title: "View API and website integration help" },
            " usually fail at the boundaries between systems. A form sends a payload, the receiving system expects a different shape, authentication expires, a required field is missing, the endpoint changes, or a rate limit blocks requests."
          ],
          "Good troubleshooting checks payloads, responses, status codes, authentication, retries, logs, and whether failures are visible. Silent failures are the worst kind because the team only notices later when data is missing."
        ],
        listTitle: "Integration checks",
        checklist: ["Failed webhook delivery", "Bad payload format", "Authentication errors", "Rate limits", "Timeout issues", "Missing fields", "Incorrect endpoint", "No retry or logging", "Changed API version or field names"]
      },
      {
        heading: "When reporting dashboards cannot be trusted",
        body: [
          [
            { text: "Dashboards", href: "/services/automation-internal-tools/", title: "View automation and internal web tools for dashboards, scripts, and reporting workflows" },
            " are only as reliable as their source data and definitions. A dashboard can be beautifully designed and still wrong if events are duplicated, source data is inconsistent, spreadsheets are manually edited, names are not standardized, or different systems define the same action differently."
          ],
          "Before rebuilding a dashboard, verify the inputs. What system is the source of truth? How is each metric defined? When does data update? Are test events excluded? Are filters hiding real activity? Is the dashboard mixing platform numbers that were never meant to match exactly?"
        ],
        listTitle: "Dashboard risk factors",
        checklist: ["Bad source data", "Manual spreadsheet errors", "Naming inconsistency", "No verification process", "Silent tracking failures", "Different systems defining the same action differently", "Filters or segments hiding expected data"]
      },
      {
        heading: "How to document the problem before asking for help",
        body: [
          "A useful tracking request describes the expected flow. Start with the action, destination, missing system, timeline, example URL, and any test submissions or order IDs. Screenshots help, but logs, preview screenshots, event names, and exact timestamps are better.",
          "Access matters too. GA4, GTM, CMS, ecommerce platform, CRM, form plugin, hosting, or API credentials may be needed depending on the issue. You do not need to send every login in the first message, but mention which systems are involved."
        ],
        listTitle: "Send this",
        checklist: ["What action should trigger data?", "Where should it go?", "What system is missing it?", "When did it stop?", "Example URL", "Test submission details", "Screenshots or logs", "GA4/GTM access", "CRM/platform access if needed", "Known recent changes"]
      },
      {
        heading: "What not to do when the numbers are wrong",
        body: [
          "Do not add another tracking script just to see if it helps. Do not create duplicate GA4 events with slightly different names. Do not change every GTM trigger at once. Do not rebuild the dashboard before checking whether the source events are correct.",
          "The safer move is to isolate the flow and test one action at a time. Make one change, verify it, document it, then move to the next step. Tracking problems get worse when multiple untracked fixes happen at once."
        ],
        listTitle: "Avoid this",
        checklist: ["Adding duplicate scripts", "Renaming events without a migration note", "Changing multiple triggers at once", "Assuming the dashboard is the source of truth", "Ignoring consent or cookie behavior", "Testing only desktop when mobile traffic matters"]
      },
      {
        heading: "Where The Web Guy fits",
        body: [
          "The Web Guy fits when the issue sits between the website and the systems around it: GA4, GTM, forms, scripts, APIs, webhooks, ecommerce data, product feeds, dashboards, CRMs, pixels, and reporting tools.",
          "The work is practical: trace the flow, test the user action, inspect tags and scripts, review payloads, check form behavior, verify ecommerce events, and fix the step that is breaking or confusing the data."
        ],
        calloutTitle: "Best first message",
        callout: "Send the page, the action, where the data should go, where it is missing, and one real test example."
      }
    ],
    faqs: [
      ["Why does GA4 not match my form submissions?", "GA4 may not match because events are missing, duplicated, blocked by consent settings, named inconsistently, or triggered differently than the form submission record."],
      ["Why are my website leads not showing up in my CRM?", "The form may not be submitting, the CRM integration may have failed, required fields may be missing, spam filtering may be involved, or a webhook/API step may be broken."],
      ["Can Google Tag Manager track form submissions?", "Yes, but it depends on how the form works. Some forms need custom events, thank-you page tracking, data layer events, or trigger cleanup."],
      ["Why does ecommerce revenue not match between platforms?", "Different platforms can count refunds, taxes, shipping, duplicate transactions, time zones, attribution, and purchase events differently."],
      ["What is a webhook and why would it fail?", "A webhook sends data from one system to another when an event happens. It can fail because of endpoint errors, authentication, payload format, timeouts, rate limits, or missing fields."],
      ["How do I verify tracking is working?", "Test the user action, inspect GTM preview or browser/network behavior, check GA4 DebugView where relevant, and confirm the destination system receives the expected data."],
      ["Can forms say submitted but still fail?", "Yes. The front-end success state can appear even when email delivery, CRM handoff, webhook delivery, or tracking fails later in the flow."],
      ["Can tracking scripts break website behavior?", "Yes. Duplicate, outdated, or poorly placed scripts can affect forms, modals, performance, clicks, and other JavaScript behavior."],
      ["What access is usually needed for tracking troubleshooting?", "It depends on the issue, but GA4, GTM, CMS, form plugin, ecommerce platform, CRM, hosting, or API access may be needed."],
      ["Should dashboards be fixed before tracking is fixed?", "Usually no. Verify the source events and data flow first, then clean up the dashboard once the inputs are trustworthy."]
    ],
    relatedHeading: "Where this data issue usually connects",
    relatedIntro: "Tracking and data problems usually touch the website, the platform, and the systems receiving the data.",
    links: [
      ["Analytics & Tracking", "/services/analytics-tracking/", "For GA4, GTM, form events, pixels, conversion tracking, ecommerce events, and measurement cleanup."],
      ["API Integrations", "/services/api-integrations/", "For REST APIs, webhooks, payloads, auth, endpoint issues, form handoffs, and systems that need to connect."],
      ["Ecommerce Support", "/services/ecommerce-support/", "For Shopify, WooCommerce, product data, purchase events, revenue mismatch, checkout tracking, and Merchant Center issues."],
      ["Automation & Internal Tools", "/services/automation-internal-tools/", "For practical workflows, dashboards, crawlers, checkers, scripts, and reporting helpers connected to website data."],
      ["Contact", "/contact/", "Send the page, action, destination system, and test example so the data flow can be traced."]
    ],
    contextHeading: "Trace the data problem through the right system",
    contextIntro: "When numbers do not match reality, the fix depends on where the flow breaks: browser event, tag manager, form, CRM, webhook, ecommerce platform, or dashboard.",
    contextCards: [
      ["Analytics & Tracking", "Use this for GA4, GTM, pixels, form events, conversion checks, duplicate tags, ecommerce events, and measurement cleanup.", "/services/analytics-tracking/", "View analytics and tracking troubleshooting support"],
      ["API Integrations", "Use this when forms, CRMs, webhooks, REST APIs, payloads, auth, or endpoint behavior are where the data stops moving.", "/services/api-integrations/", "View API and webhook integration support"],
      ["AI-Built Website Cleanup", "Use this when generated code created a form, dashboard, prototype, or app flow that does not send data where it should.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for disconnected systems"],
      ["Ecommerce Support", "Use this when purchase events, product data, revenue, checkout, Merchant Center, Shopify, or WooCommerce data does not line up.", "/services/ecommerce-support/", "View ecommerce tracking and product data support"],
      ["GA4/GTM Measurement Integrity", "Use this for trigger cleanup, DebugView checks, event naming, conversion verification, duplicate containers, and reporting QA.", "/skills/ga4-gtm-measurement-integrity/", "View GA4 and Google Tag Manager measurement integrity support"]
    ],
    otherHeading: "Not the data problem you meant?",
    otherIntro: "These troubleshooting pages cover the most common causes behind disconnected website systems.",
    otherItems: [
      ["GA4/GTM Measurement Integrity", "Use this for events, triggers, conversions, pixels, and tracking QA.", "/skills/ga4-gtm-measurement-integrity/", "View the skill"],
      ["API & Webhook Integrations", "Use this when forms, CRMs, ecommerce systems, or webhooks are failing between systems.", "/services/api-integrations/", "View integrations"],
      ["Ecommerce Support", "Use this when revenue, product data, checkout, or purchase events do not line up.", "/services/ecommerce-support/", "View ecommerce help"],
      ["Something broke on your website", "Use this if the tracking issue is part of a larger visible or functional website bug.", "/blog/something-broke-on-your-website/", "Read the troubleshooting post"]
    ],
    finalCta: {
      heading: "Need the numbers to make sense?",
      copy: "Send the page, the action, and where the data is supposed to go. I will help trace the broken step.",
      label: "Send the Tracking Problem",
      secondaryLabel: "View Analytics Help",
      secondaryHref: "/services/analytics-tracking/"
    }
  },
  {
    slug: "broken-layouts-mobile-website-fixes",
    title: "Broken Mobile Website Layout Fix Help | The Web Guy",
    h1: "Broken Mobile Website Layouts: What to Check First",
    meta: "Mobile website layout shifted, sections overlap, buttons drift, or embeds break the page? Get practical broken-layout fix help from The Web Guy.",
    eyebrow: "Broken layouts",
    summary: "Sections overlap, headers act strange, spacing disappears, or the mobile layout falls apart. Start by reproducing the viewport, isolating the broken section, and tracing whether the issue comes from CSS, the builder, an embed, or a theme/plugin change.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "front-end-layout",
    tags: ["website-fixes", "mobile-layout", "css", "page-builders", "wordpress", "ai-built"],
    heroCta: "Send the Broken Layout",
    heroSecondary: "View Website Fixes",
    heroSecondaryHref: "/services/website-fixes/",
    cta: "Send the URL, screenshot, device or browser, and what the layout should do instead.",
    exampleBlock: {
      heading: "Need this fixed instead of guessed at?",
      copy: "A practical layout fix starts by reproducing the bad viewport, inspecting the affected element, checking recent theme, builder, plugin, or content changes, and applying the smallest CSS or template change that holds on mobile.",
      href: "/contact/",
      label: "Send the broken layout",
      title: "Open the contact request form for broken layout help"
    },
    sections: [
      ["Common signs", [
        "The page looks fine in one viewport but breaks in another, ",
        { text: "content overlaps", href: "/services/website-fixes/", title: "View website fixes for broken layouts and visible page bugs" },
        ", sticky headers cover sections, columns stack badly, buttons drift out of place, or images stretch beyond their container."
      ]],
      ["Likely causes", [
        "Most broken layouts come from CSS conflicts, ",
        { text: "page builder spacing", href: "/services/wordpress-support/", title: "View WordPress support for page builder and layout cleanup" },
        ", missing responsive rules, oversized images, uncontained embeds, theme updates, plugin styles, or old custom code fighting newer content."
      ]],
      ["What to send", "Send the URL, device or browser where it breaks, a screenshot, what should happen instead, and whether a theme, plugin, page builder, or content update happened recently."],
      ["Practical fix path", [
        "A useful fix usually starts by reproducing the issue, checking the element styles, isolating the rule or component causing the break, and then applying the smallest durable ",
        { text: "CSS, template, or builder-level change", href: "/services/react-static-sites/", title: "View front-end help for responsive CSS, component layout, and static page cleanup" },
        "."
      ]]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/", "For broken mobile layouts, CSS issues, sticky headers, scripts, forms, embeds, and visible page bugs."],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/", "For generated pages or prototypes that look close but break across devices, routes, assets, or deployment details."],
      ["WordPress Support", "/services/wordpress-support/", "For Elementor, page builders, cached CSS, theme output, plugins, and WordPress layout problems."],
      ["Front-End Help", "/services/react-static-sites/", "For responsive CSS, component layout, static page cleanup, JavaScript behavior, and lightweight front-end fixes."],
      ["Contact", "/contact/", "Send the URL, screenshot, viewport, and what should happen instead so the broken layout can be reproduced."]
    ],
    contextHeading: "Where broken layout work usually goes next",
    contextIntro: "Layout problems are usually visual symptoms with a technical cause. These paths cover the common places the fix lands after the broken section is reproduced.",
    contextCards: [
      ["Website Fixes", "Use this for overlapping sections, broken mobile layouts, drifting buttons, missing images, sticky header problems, and visible page bugs.", "/services/website-fixes/", "View website fixes for broken layouts and visible bugs"],
      ["AI-Built Cleanup", "Use this when the layout came from an AI-generated page, prototype, or app and needs responsive cleanup before launch.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for broken layouts"],
      ["WordPress Support", "Use this when the layout issue is tied to WordPress, Elementor, page builder spacing, theme updates, plugins, or cached CSS.", "/services/wordpress-support/", "View WordPress support for layout and builder issues"],
      ["React & Static Sites", "Use this when the fix needs front-end structure, component cleanup, responsive CSS, JavaScript behavior, or static page work.", "/services/react-static-sites/", "View React and static front-end support"],
      ["Production Debugging", "Use this when the layout bug needs browser inspection, console checks, CSS isolation, deployment review, or a careful production-safe fix.", "/skills/production-debugging/", "View production debugging support for website layout issues"]
    ],
    finalCta: {
      heading: "Need this layout fixed?",
      copy: "Send the URL, screenshot, viewport, and what the layout should do instead. I can reproduce the break and make the smallest practical CSS, template, or builder-level fix.",
      label: "Fix My Website Layout",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "css-javascript-errors-website-bugs",
    title: "JavaScript Issues and CSS Bugs on Websites | Menus, Buttons, Forms, and Layout Bugs",
    h1: "JavaScript Issues and CSS Bugs on Websites: What to Check First",
    meta: "Need help when JavaScript is not working or CSS bugs break a website? Start with broken menus, buttons, forms, layout problems, console errors, script conflicts, and front-end website bugs.",
    eyebrow: "CSS and JavaScript",
    summary: "JavaScript issues, CSS bugs, and front-end website problems can make menus stop opening, buttons fail, forms hang, styles change unexpectedly, or interactive pieces work on one page and fail on another.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "front-end-layout",
    tags: ["website-fixes", "css", "javascript", "plugin-conflicts", "wordpress"],
    heroCta: "Fix the Website Bug",
    heroSecondary: "View Website Fixes",
    heroSecondaryHref: "/services/website-fixes/",
    cta: "Send the URL, what stopped working, what should happen instead, and any recent theme, plugin, script, or deployment changes.",
    intro: [
      "If you are searching for JavaScript issues, CSS bugs, or website bug help because a menu, button, form, layout, or script stopped working, the first useful move is to decide whether you are looking at a JavaScript issue, a CSS bug, or a front-end symptom caused by something else. Start with the exact page, action, and browser behavior instead of blaming the whole theme or platform.",
      [
        "A lot of CSS and JavaScript bug requests begin with a visible symptom: a menu does not open, a class never toggles, a script error freezes the page, a form submit hangs, or an update changed the markup that the CSS expected. If the problem needs hands-on repair on the actual site, start with ",
        { text: "website fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, scripts, forms, modals, and visible bugs" },
        ". Production debugging often overlaps here because the fix usually starts in the browser, not in a generic checklist."
      ],
      [
        "If the browser console already shows errors, or the issue only appears after a plugin, theme, snippet, or deployment change, compare this guide with the deeper ",
        { text: "JavaScript issues troubleshooting guide", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read the JavaScript issues troubleshooting guide" },
        " before changing CSS that may not be the real cause. If the symptom is broader than the front end alone, go back to ",
        { text: "something broke on your website", href: "/blog/something-broke-on-your-website/", title: "Read the broader broken website troubleshooting guide" },
        "."
      ]
    ],
    exampleBlock: {
      heading: "Need this fixed on the real page?",
      copy: "If a menu, button, form, layout, or script stopped working, send the URL and what should happen. I can trace the browser error and make the smallest practical fix.",
      href: "/contact/",
      label: "Send the CSS or JavaScript bug",
      title: "Open the contact request form for CSS and JavaScript bug help"
    },
    sections: [
      ["Common signs", [
        "Dropdowns do not open, sliders freeze, modals fail, buttons stop responding, ",
        { text: "CSS looks different after an update", href: "/services/website-fixes/", title: "View website fixes for CSS, JavaScript, menus, modals, and visible bugs" },
        ", scripts throw console errors, or one page behaves differently than the rest of the site."
      ]],
      ["Likely causes", [
        "JavaScript bugs often come from duplicate libraries, ",
        { text: "plugin updates", href: "/services/wordpress-plugin-conflict-help/", title: "View WordPress plugin conflict help" },
        ", script order, missing dependencies, third-party snippets, minification, cache issues, blocked files, or code written for an old template. CSS bugs often come from specificity conflicts, stale assets, missing wrappers, responsive breakpoints, injected styles, or builder output that changed shape."
      ]],
      ["When it is really a JavaScript issue", [
        "A layout can look like a CSS bug when JavaScript never finished running. If the script that opens a menu, sizes a carousel, validates a form, mounts a widget, or swaps a class fails early, the page may freeze in a half-styled state. For that specific path, use the deeper ",
        { text: "JavaScript issues troubleshooting guide", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read the JavaScript issues troubleshooting guide" },
        " before rewriting CSS."
      ]],
      ["What to send", "Send the page URL, the expected behavior, the broken behavior, recent changes, and screenshots or screen recordings if the bug is interaction-based."],
      ["Practical fix path", [
        "The first step is usually browser console and network inspection, then isolating the failing script, confirming whether the bug is global or page-specific, and applying the smallest ",
        { text: "front-end fix", href: "/services/react-static-sites/", title: "View React and static site help for front-end JavaScript and CSS fixes" },
        " that does not break related behavior."
      ]]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/"],
      ["Something Broke on Your Website", "/blog/something-broke-on-your-website/"],
      ["JavaScript Issue Troubleshooting", "/blog/javascript-issues-website-troubleshooting/"],
      ["Production Debugging", "/skills/production-debugging/"],
      ["WordPress Theme Development", "/skills/wordpress-theme-development/", "Use this when the front-end bug lives in theme templates, child-theme CSS, builder markup, or theme JavaScript."],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/"],
      ["Front-End Help", "/services/react-static-sites/"]
    ],
    contextHeading: "Use the right debugging lane for CSS and JavaScript bugs",
    contextIntro: "Front-end bugs can be visual, functional, script-related, or deployment-related. These pages route the issue based on what is actually failing in the browser.",
    contextCards: [
      ["Website Fixes", "Use this for broken menus, modals, buttons, CSS conflicts, page-specific bugs, and scripts that stop a normal site action.", "/services/website-fixes/", "View website fixes for CSS, JavaScript, menus, modals, and bugs"],
      ["JavaScript Issue Troubleshooting", "Use this when the browser console, failed requests, script order, duplicate libraries, or third-party snippets are likely behind the symptom.", "/blog/javascript-issues-website-troubleshooting/", "Read JavaScript issue troubleshooting"],
      ["Production Debugging", "Use this when the problem needs console errors, network checks, script isolation, cache review, or production-safe troubleshooting.", "/skills/production-debugging/", "View production debugging for CSS and JavaScript website bugs"],
      ["AI-Built Cleanup", "Use this when generated CSS, JavaScript, routing, components, or state logic are close but unreliable on the real site.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for CSS and JavaScript bugs"],
      ["React & Static Sites", "Use this when the bug lives in a component, static build, front-end route, JavaScript behavior, or lightweight site deployment.", "/services/react-static-sites/", "View React and static site front-end support"],
      ["WordPress Support", "Use this when CSS or JavaScript behavior is coming from a WordPress theme, plugin, page builder, shortcode, or injected script.", "/services/wordpress-support/", "View WordPress support for front-end bugs"]
    ],
    finalCta: {
      heading: "Need this CSS or JavaScript bug fixed?",
      copy: "Send the page URL, what stopped working, and what should happen instead. I will check console errors, script conflicts, CSS rules, and recent changes before changing anything.",
      label: "Fix My Website Issue",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "javascript-issues-website-troubleshooting",
    title: "JavaScript Issues on Websites | JavaScript Not Working Troubleshooting",
    h1: "JavaScript Issues on Websites: How to Find the Break Without Guessing",
    meta: "Troubleshoot JavaScript issues on websites when JavaScript is not working, including console errors, failed requests, script order, duplicate libraries, plugins, third-party snippets, forms, menus, and cache.",
    eyebrow: "JavaScript issues",
    summary: "JavaScript issues usually show up when JavaScript is not working: broken menus, dead buttons, forms that never finish, widgets that fail to load, or features that work on one page and fail on another.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "front-end-layout",
    tags: ["javascript", "website-fixes", "production-debugging", "forms", "plugin-conflicts"],
    heroCta: "Fix the JavaScript Issue",
    heroSecondary: "View CSS and JS Bug Help",
    heroSecondaryHref: "/blog/css-javascript-errors-website-bugs/",
    cta: "Send the URL, broken action, expected action, browser/device, console error if available, and anything that changed recently.",
    exampleBlock: {
      heading: "JavaScript issues leave evidence",
      copy: "The browser usually gives clues: console errors, failed network requests, missing files, blocked third-party scripts, duplicate libraries, or event handlers that never attach.",
      href: "/contact/",
      label: "Send the JavaScript issue",
      title: "Open the contact request form for JavaScript troubleshooting help"
    },
    intro: [
      "When JavaScript is not working on a website, the page can still look mostly fine while the important action fails. A menu will not open. A form spins forever. A booking widget never loads. A button looks clickable but does nothing. A checkout step freezes. A tracking event disappears. The visual page is there, but the behavior is broken.",
      [
        "This page is a focused child of ",
        { text: "CSS and JavaScript bug fix help", href: "/blog/css-javascript-errors-website-bugs/", title: "Read the broader CSS and JavaScript bug guide" },
        ". Use that parent page when the issue could be CSS or JavaScript. Use this guide when the symptom points more directly at browser behavior, scripts, events, requests, plugins, or third-party code."
      ],
      "The goal is not to rewrite every script. The goal is to reproduce the broken action, find the first failing layer, and change the smallest piece that restores the user path without creating a second bug."
    ],
    sections: [
      {
        heading: "Start with the action that fails",
        body: [
          "JavaScript troubleshooting should begin with a verb, not a vague page label. What action fails? Open the menu. Submit the form. Click the tab. Add to cart. Load the map. Advance checkout. Fire the tracking event. That action gives you a repeatable test.",
          "Once the action is repeatable, check whether the failure is global or local. If every menu on the site fails, look at global scripts, theme files, cached assets, optimization settings, and shared dependencies. If one page fails, look at page-specific embeds, form markup, builder output, custom snippets, or content that changed."
        ],
        listTitle: "Define the failing action",
        checklist: ["What action should the visitor be able to take?", "What happens instead?", "Does the failure happen on every page or one URL?", "Does it happen on mobile, desktop, or both?", "Does it happen logged out?", "Did the action work before a recent update, edit, deployment, or script change?"],
        calloutTitle: "Useful test",
        callout: "If you cannot repeat the broken action, you cannot confidently verify the repair."
      },
      {
        heading: "Read the browser console carefully",
        body: [
          "The console is not a magic answer, but it is often the fastest clue. A single uncaught error can stop later scripts from running. A missing dependency can prevent a plugin from initializing. A blocked third-party script can break an embedded form or widget. A syntax error can mean minification or deployment changed the file.",
          "Do not copy the first red line and assume it is the root cause. Look for the earliest relevant error on page load and the error that appears when you perform the broken action. Separate harmless warnings from errors that stop execution."
        ],
        listTitle: "Console clues",
        checklist: ["Uncaught TypeError or ReferenceError", "Missing function or undefined variable", "Duplicate library warnings", "Content Security Policy blocks", "Mixed-content blocks", "Syntax errors from minified files", "Third-party script failures", "Errors that appear only after clicking or submitting"]
      },
      {
        heading: "Check network requests and missing assets",
        body: [
          "Many JavaScript issues are not inside the script logic. The browser may be trying to load a file that returns 404, 403, 500, blocked, or the wrong MIME type. A plugin or build system might reference an old hashed filename. A CDN may serve stale JavaScript while the HTML expects a newer version.",
          "Network inspection also helps with forms, APIs, and widgets. If a form never finishes, check whether the request is sent, what response comes back, whether validation fails, and whether a redirect or CORS issue stops the handoff."
        ],
        listTitle: "Network checks",
        checklist: ["404 or 500 JavaScript files", "Blocked scripts or wrong MIME type", "Old cached assets with new HTML", "Failed API or form submission requests", "CORS, authentication, or forbidden responses", "Slow third-party scripts delaying behavior", "Redirects that change the expected endpoint"]
      },
      {
        heading: "Watch for script order and duplicate libraries",
        body: [
          "Script order matters. A custom script that expects jQuery, a slider library, a form object, or a tracking object will fail if it runs before that dependency exists. The reverse can also happen: optimization plugins defer, combine, or move scripts in a way that changes the order that used to work.",
          "Duplicate libraries create quieter failures. Two versions of jQuery, two form scripts, multiple slider bundles, or duplicate tracking snippets can overwrite handlers, reset state, or attach events twice. The page may half-work until a specific interaction exposes the conflict."
        ],
        listTitle: "Order and duplication clues",
        checklist: ["Optimization plugin changed defer/combine settings", "Theme or plugin update moved scripts", "A custom snippet runs before dependencies load", "Two versions of the same library appear", "Duplicate GTM, pixel, chat, or widget snippets exist", "Event handlers fire twice or not at all", "Only pages with a certain embed break"]
      },
      {
        heading: "Separate WordPress/plugin issues from custom code",
        body: [
          [
            "On WordPress sites, JavaScript issues often come from themes, plugins, page builders, shortcodes, cache tools, and snippets interacting. A ",
            { text: "plugin conflict", href: "/services/wordpress-plugin-conflict-help/", title: "View WordPress plugin conflict help" },
            " can break front-end behavior without showing a dramatic error in the admin."
          ],
          "The safer path is to identify the owner of the failing script before changing settings. Is the file from the theme, a plugin, a builder, GTM, a CDN, a custom snippet, or a third-party widget? Once ownership is clear, the fix can be targeted: update a selector, change load order, adjust an optimization exclusion, repair markup, or escalate to the plugin/vendor if the script itself is broken."
        ],
        listTitle: "Find the owner",
        checklist: ["Theme or child theme file", "Plugin asset", "Page builder output", "Custom code snippet", "GTM or pixel script", "CRM, chat, booking, map, video, or widget embed", "CDN or optimization-generated file"]
      },
      {
        heading: "When JavaScript makes CSS look broken",
        body: [
          "Some problems that look like CSS are actually failed JavaScript. Carousels may show all slides stacked because the slider never initialized. Menus may stay hidden because a class was never toggled. Accordions may show collapsed content because the event listener failed. Sticky headers may cover content because scroll calculations did not run.",
          "Before rewriting styles, confirm whether the script that controls state ran successfully. If CSS is only reflecting the wrong state, changing styles can mask the symptom without fixing the broken behavior."
        ],
        listTitle: "JavaScript-controlled layout symptoms",
        checklist: ["Menu state classes never change", "Carousel or slider markup is uninitialized", "Modal is present but never receives an open class", "Accordion buttons do not toggle ARIA or class state", "Form validation never attaches", "Lazy-loaded images or embeds never initialize", "Sticky or scroll behavior fails after a script error"]
      },
      {
        heading: "Verify the repair like a visitor",
        body: [
          "The repair should be checked through the action that failed, not just by refreshing the page once. If the menu failed on mobile, test mobile. If the form failed after submission, submit the form and check the destination. If a script failed only on one service page, test that page and nearby pages that share the same template.",
          [
            "For live-site issues, pair the repair with ",
            { text: "production debugging", href: "/skills/production-debugging/", title: "View production debugging support" },
            " habits: clear the relevant cache, check console and network again, confirm no new errors appeared, and document the exact change that fixed the behavior."
          ]
        ],
        listTitle: "After-fix checks",
        checklist: ["Retest the original action", "Check desktop and mobile where relevant", "Confirm console errors are gone or understood", "Check network requests after the action", "Verify form, checkout, widget, or tracking destination", "Clear/bypass cache when assets were involved", "Document what changed and what still needs monitoring"]
      }
    ],
    faqs: [
      ["What are common JavaScript issues on websites?", "Common issues include console errors, failed network requests, duplicate libraries, script order problems, plugin conflicts, blocked third-party scripts, stale cache, and code that expects old markup."],
      ["Why does a button do nothing when clicked?", "The click handler may not be attached, a script may have failed earlier, another element may cover the button, a plugin may have changed markup, or a third-party script may be blocking behavior."],
      ["Can cache cause JavaScript issues?", "Yes. Cache can serve old JavaScript with new HTML or old HTML with new JavaScript, especially after builds, plugin updates, minification, CDN changes, or optimization settings."],
      ["Can tracking scripts break JavaScript?", "Yes. Duplicated or poorly placed tracking scripts can interfere with events, forms, performance, redirects, and other scripts."],
      ["Should I disable plugins to find a JavaScript issue?", "Only with caution. Disabling plugins randomly on production can create more damage. It is better to identify the script owner and use staging or a controlled troubleshooting path when possible."],
      ["What should I send for JavaScript troubleshooting?", "Send the URL, broken action, expected action, browser/device, screenshots or recording, console error if available, and recent changes."]
    ],
    links: [
      ["CSS and JavaScript Bug Help", "/blog/css-javascript-errors-website-bugs/", "Use the parent page when the issue could be visual CSS, browser JavaScript, or both."],
      ["Website Fixes", "/services/website-fixes/", "Use this when the JavaScript issue needs a hands-on repair on the actual site."],
      ["Production Debugging", "/skills/production-debugging/", "Use this when the issue needs console, network, cache, script, and live behavior inspection."],
      ["WordPress Plugin Conflict Help", "/services/wordpress-plugin-conflict-help/", "Use this when a plugin update or conflict may be breaking front-end scripts."],
      ["API & Integrations", "/services/api-integrations/", "Use this when failed JavaScript requests involve forms, CRMs, webhooks, or third-party data handoffs."]
    ],
    contextHeading: "Where JavaScript troubleshooting usually leads",
    contextIntro: "Script failures can be a front-end bug, a WordPress/plugin issue, an integration problem, or a tracking conflict.",
    contextCards: [
      ["Website Fixes", "Use this for buttons, menus, modals, forms, embeds, and page behavior that needs direct repair.", "/services/website-fixes/", "View website fixes"],
      ["Production Debugging", "Use this for console errors, network inspection, script isolation, cache behavior, and live-site troubleshooting.", "/skills/production-debugging/", "View production debugging"],
      ["WordPress Support", "Use this when the script issue comes from a theme, plugin, page builder, shortcode, optimization plugin, or injected snippet.", "/services/wordpress-support/", "View WordPress support"],
      ["Forms and Modals Not Working", "Use this when JavaScript is breaking lead forms, popups, validation, redirects, or thank-you states.", "/blog/forms-modals-not-working/", "Read forms and modal troubleshooting"],
      ["Tracking Scripts and Pixels", "Use this when GA4, GTM, pixels, or conversion scripts interfere with page behavior or fail to measure it.", "/blog/tracking-scripts-pixels-broken/", "Read tracking script troubleshooting"]
    ],
    finalCta: {
      heading: "Need a JavaScript issue fixed?",
      copy: "Send the URL, broken action, expected action, browser/device, console error if you have it, and recent changes. I will trace the failure before changing code.",
      label: "Fix the JavaScript Issue",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "forms-modals-not-working",
    title: "Forms and Modals Not Working: Where Website Leads Disappear",
    meta: "Troubleshoot website forms, popups, modals, validation, redirects, notifications, hidden fields, and thank-you page issues.",
    eyebrow: "Forms and modals",
    summary: "The form submits but nobody gets the lead, validation fails, a popup will not open, or the thank-you flow no longer tracks correctly.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "forms-tracking-data",
    tags: ["forms", "conversion-tracking", "api-integrations", "analytics-tracking", "wordpress"],
    sections: [
      ["Common signs", [
        "Leads never arrive, ",
        { text: "forms spin forever", href: "/services/contact-form-not-working-wordpress/", title: "View help for contact forms not working in WordPress" },
        ", validation blocks real users, modals do not open, hidden fields disappear, redirects fail, or the thank-you page does not load."
      ]],
      ["Likely causes", [
        "Forms break because of plugin conflicts, changed field names, email delivery issues, spam filters, ",
        { text: "CRM/API failures", href: "/services/api-integrations/", title: "View API and website integration help for forms, CRMs, and webhooks" },
        ", JavaScript errors, redirect changes, caching, or tracking scripts that were never updated after the form changed."
      ]],
      ["What to send", "Send the form URL, where submissions should go, a test submission time, screenshots, CRM or email destination notes, and whether the form uses WordPress, Shopify, a CRM embed, or a third-party service."],
      ["Practical fix path", [
        "The work usually starts by testing the form, checking browser errors, reviewing notifications and redirects, confirming CRM or email handoff, and verifying whether ",
        { text: "conversion tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for form conversions" },
        " still fires."
      ]]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/"],
      ["Analytics & Tracking", "/services/analytics-tracking/"],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/"],
      ["API & Integrations", "/services/api-integrations/"]
    ],
    contextHeading: "Forms and modals usually touch more than the page",
    contextIntro: "A broken form or modal can be a front-end bug, a WordPress/plugin issue, a tracking issue, or a handoff problem between systems.",
    contextCards: [
      ["Website Fixes", "Use this for forms that spin, modals that do not open, validation bugs, redirect problems, hidden fields, and visible interaction failures.", "/services/website-fixes/", "View website fixes for forms, modals, redirects, and interaction bugs"],
      ["Analytics & Tracking", "Use this when form submissions, thank-you states, GA4 events, GTM triggers, pixels, or conversion reporting need to be verified.", "/services/analytics-tracking/", "View analytics and tracking support for forms and conversions"],
      ["AI-Built Cleanup", "Use this when an AI-built form, modal, or lead flow needs validation, email delivery, CRM handoff, tracking, or deployment cleanup.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for forms and modals"],
      ["API Integrations", "Use this when a form should send data to a CRM, webhook, automation, email tool, booking tool, or another system and the handoff fails.", "/services/api-integrations/", "View API integration support for forms, CRMs, and webhooks"],
      ["Production Debugging", "Use this when browser errors, script conflicts, plugins, cache, or third-party embeds are making the form or modal behavior unreliable.", "/skills/production-debugging/", "View production debugging for forms and modal issues"]
    ]
  },
  {
    slug: "embeds-iframes-widgets-breaking-pages",
    title: "Embeds, Iframes, and Widgets Breaking Website Pages",
    meta: "Learn how maps, calendars, videos, chat widgets, CRM embeds, iframes, and third-party scripts can break layouts, speed, tracking, and mobile usability.",
    eyebrow: "Embeds and iframes",
    summary: "Maps, videos, calendars, chat tools, CRM widgets, and iframes are useful until they break layout, slow the page, or fail on mobile.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    category: "front-end-layout",
    tags: ["embeds-iframes", "website-fixes", "mobile-layout", "site-speed", "javascript"],
    sections: [
      ["Common signs", [
        "An ",
        { text: "embed is too wide on mobile", href: "/services/website-fixes/", title: "View website fixes for broken embeds, iframes, widgets, and mobile layout bugs" },
        ", a calendar overlaps content, a video creates layout shift, a map slows the page, or a third-party widget blocks clicks or breaks scrolling."
      ]],
      ["Likely causes", [
        "Third-party embeds often ship with fixed widths, ",
        { text: "heavy scripts", href: "/services/site-speed-performance/", title: "View site speed cleanup for heavy embeds, scripts, and widgets" },
        ", nested iframes, conflicting CSS, delayed loading, missing responsive wrappers, or vendor changes outside the site owner’s control."
      ]],
      ["What to send", "Send the URL, the embed provider, what the embed should do, where it fails, and whether the issue affects desktop, mobile, or both."],
      ["Practical fix path", [
        "The fix may involve ",
        { text: "responsive wrappers", href: "/services/react-static-sites/", title: "View front-end help for responsive wrappers and lightweight embed cleanup" },
        ", script placement, lazy-loading, vendor settings, CSS containment, replacement embeds, or removing duplicate scripts that load the same widget twice."
      ]]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/"],
      ["Site Speed", "/services/site-speed-performance/"],
      ["Front-End Help", "/services/react-static-sites/"]
    ],
    contextHeading: "Where embed and iframe fixes usually connect",
    contextIntro: "Third-party widgets can break layout, slow pages, block clicks, interfere with tracking, or behave differently on mobile. These paths cover the common cleanup work.",
    contextCards: [
      ["Website Fixes", "Use this for iframes that overflow, widgets that block clicks, broken embeds, mobile layout bugs, and third-party script conflicts.", "/services/website-fixes/", "View website fixes for embeds, iframes, widgets, and third-party scripts"],
      ["Site Speed Cleanup", "Use this when maps, videos, chat widgets, calendars, or vendor scripts are causing layout shift, slow pages, or heavy script loading.", "/services/site-speed-performance/", "View site speed cleanup for heavy embeds and widgets"],
      ["React & Static Sites", "Use this when an embed needs front-end containment, responsive wrappers, component cleanup, lazy loading, or a lightweight custom replacement.", "/services/react-static-sites/", "View React and static front-end support for embeds"],
      ["WordPress Support", "Use this when the embed is controlled by WordPress, a page builder, plugin shortcode, theme template, or CMS setting.", "/services/wordpress-support/", "View WordPress support for embedded content and plugin widgets"]
    ]
  },
  {
    slug: "tracking-scripts-pixels-broken",
    title: "Tracking Scripts and Pixels Are Broken: How to Spot the Problem",
    meta: "Troubleshoot broken GA4, Google Tag Manager, pixels, duplicate scripts, missing conversions, and tracking snippets placed in the wrong part of a website.",
    eyebrow: "Tracking scripts",
    summary: "Analytics looks wrong, conversions disappear, tags fire twice, pixels are missing, or a tracking script is pasted in three different places.",
    problemType: "Something broke",
    relatedService: "analytics-tracking",
    category: "forms-tracking-data",
    tags: ["analytics-tracking", "ga4-gtm", "conversion-tracking", "forms", "landing-pages"],
    sections: [
      ["Common signs", [
        { text: "GA4 conversions are missing", href: "/services/conversion-tracking-troubleshooting/", title: "View conversion tracking troubleshooting help" },
        ", GTM preview mode looks messy, events fire twice, ad platforms disagree with form submissions, or campaign landing pages do not show the actions that matter."
      ]],
      ["Likely causes", [
        "Tracking breaks when forms change, thank-you pages disappear, scripts are duplicated, GTM containers overlap with hard-coded snippets, consent tools block tags, or ",
        { text: "ecommerce templates send incomplete data", href: "/services/ecommerce-support/", title: "View ecommerce support for tracking, checkout, product data, and revenue issues" },
        "."
      ]],
      ["What to send", [
        "Send the URL, the conversion or event that should be tracked, the platform involved, GTM/GA4 notes if available, and any recent form, ",
        { text: "landing page", href: "/services/landing-pages/", title: "View landing page support with forms and tracking setup" },
        ", theme, or checkout changes."
      ]],
      ["Practical fix path", "A practical fix checks what fires, where it fires, what data is sent, whether tags are duplicated, and whether the tracked action matches what the business actually cares about."]
    ],
    links: [
      ["Analytics & Tracking", "/services/analytics-tracking/"],
      ["GA4 / GTM", "/skills/ga4-gtm-measurement-integrity/"],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/"],
      ["Landing Pages", "/services/landing-pages/"]
    ],
    contextHeading: "Where tracking script cleanup should route",
    contextIntro: "Broken pixels and duplicated scripts are usually part of a larger measurement problem. These pages cover the service and skill paths that make the data trustworthy again.",
    contextCards: [
      ["Analytics & Tracking", "Use this for GA4, GTM, pixels, conversion events, form tracking, ecommerce tracking, duplicate scripts, and tag cleanup.", "/services/analytics-tracking/", "View analytics and tracking cleanup support"],
      ["GA4/GTM Measurement Integrity", "Use this for trigger QA, DebugView checks, event naming, conversion verification, duplicate containers, consent issues, and reporting confidence.", "/skills/ga4-gtm-measurement-integrity/", "View GA4 and Google Tag Manager measurement integrity support"],
      ["AI-Built Cleanup", "Use this when AI-generated pages need tracking snippets, conversion events, form measurement, or tag placement added before launch.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for tracking scripts"],
      ["Landing Pages", "Use this when tracking needs to launch with a campaign page, paid traffic page, lead form, phone click, or conversion-focused page.", "/services/landing-pages/", "View landing page support with tracking setup"],
      ["Website Data Systems", "Use this when GA4, GTM, forms, ecommerce data, CRMs, dashboards, or APIs disagree and the whole flow needs to be traced.", "/blog/website-data-systems-not-connecting/", "Read the guide to website data and systems not connecting"]
    ]
  },
  {
    slug: "cms-plugin-theme-weirdness",
    title: "CMS, Plugin, and Theme Weirdness: Why Existing Sites Get Strange",
    meta: "A practical guide to WordPress, Shopify, WooCommerce, page builder, plugin, and theme problems that make existing websites behave strangely.",
    eyebrow: "CMS weirdness",
    summary: "The site behaves differently after an update, one page ignores the template, the builder output is strange, or a plugin almost works but not quite.",
    problemType: "Something broke",
    relatedService: "wordpress-support",
    category: "wordpress-cms",
    tags: ["wordpress", "plugin-conflicts", "themes", "page-builders", "site-speed"],
    sections: [
      ["Common signs", [
        "Admin settings do not match the front end, a ",
        { text: "plugin update changes behavior", href: "/services/wordpress-plugin-conflict-help/", title: "View WordPress plugin conflict help" },
        ", a page builder adds strange spacing, a theme override is hard to find, or only one template acts broken."
      ]],
      ["Likely causes", [
        "Existing sites collect layers: old theme code, child theme edits, plugin settings, builder markup, ",
        { text: "cache rules", href: "/services/security-hosting-reliability/", title: "View website security, hosting, cache, and reliability support" },
        ", custom snippets, tracking scripts, and undocumented fixes from previous work."
      ]],
      ["What to send", "Send the URL, CMS/platform, what changed recently, whether updates were run, screenshots of the issue, and any plugin/theme/builder names involved."],
      ["Practical fix path", [
        "The useful path is to identify whether the problem is theme-level, plugin-level, builder-level, cache-related, or content-specific, then use practical ",
        { text: "WordPress support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, builders, PHP, CSS, and site cleanup" },
        " to fix the narrowest layer possible before changing more of the site."
      ]]
    ],
    links: [
      ["WordPress Support", "/services/wordpress-support/"],
      ["Website Fixes", "/services/website-fixes/"],
      ["WordPress Themes", "/skills/wordpress-theme-development/"]
    ],
    contextHeading: "Where CMS, plugin, and theme weirdness usually lands",
    contextIntro: "Existing sites collect layers. The fix depends on whether the weird behavior is coming from the CMS, theme, plugin stack, builder output, cache, or custom code.",
    contextCards: [
      ["WordPress Support", "Use this for plugin conflicts, Elementor weirdness, page builder cleanup, admin/front-end mismatch, PHP issues, and CMS-side troubleshooting.", "/services/wordpress-support/", "View WordPress support for CMS, plugin, theme, and builder issues"],
      ["WordPress Theme Development", "Use this when the problem is tied to templates, child themes, CSS, JavaScript, PHP markup, layout structure, or theme overrides.", "/skills/wordpress-theme-development/", "View WordPress theme development support"],
      ["WordPress Plugin Development", "Use this when site-specific functionality, shortcodes, admin workflows, data capture, hooks, or custom plugin code need repair.", "/skills/wordpress-plugin-development/", "View WordPress plugin development support"],
      ["Security, Hosting & Reliability", "Use this when cache, Cloudflare, SSL, hosting, redirects, or server behavior makes the CMS look broken even when content is correct.", "/services/security-hosting-reliability/", "View hosting, DNS, SSL, cache, and reliability support"]
    ]
  },
  {
    slug: "woocommerce-checkout-not-working",
    title: "WooCommerce Checkout Not Working? Start With the Failure Point",
    h1: "WooCommerce Checkout Not Working? Find the Failure Before Changing Plugins",
    meta: "WooCommerce checkout stuck, reloading, showing payment errors, redirecting to an empty cart, or missing purchase tracking? Learn what to check first.",
    eyebrow: "WooCommerce checkout",
    heroImageSlug: "service-ecommerce-support",
    summary: "A WooCommerce checkout problem can be a payment issue, JavaScript conflict, cache problem, session failure, plugin conflict, shipping/tax setting, or tracking mismatch. The first job is to identify where checkout fails.",
    problemType: "Ecommerce troubleshooting",
    relatedService: "ecommerce-support",
    category: "ecommerce-checkout",
    tags: ["woocommerce", "checkout", "ecommerce", "conversion-tracking", "wordpress"],
    heroCta: "Fix WooCommerce Checkout",
    heroSecondary: "View Checkout Fix Help",
    heroSecondaryHref: "/services/woocommerce-checkout-error-fix/",
    intro: [
      [
        "When ",
        { text: "WooCommerce checkout stops working", href: "/services/woocommerce-checkout-error-fix/", title: "View WooCommerce checkout error fix help" },
        ", the symptom matters more than the first guess. A stuck place order button is different from an empty-cart redirect. A payment gateway error is different from a shipping-zone issue. A successful order with missing GA4 revenue is a tracking problem, not necessarily a checkout problem."
      ],
      "The useful first pass is to test the whole checkout path: product page, add to cart, cart, checkout fields, shipping, tax, payment method, order creation, thank-you page, email notifications, and purchase tracking. Each step narrows the issue before production changes make the store harder to debug."
    ],
    sections: [
      {
        heading: "Name the checkout symptom",
        body: [
          "WooCommerce checkout can fail in several ways. The page may reload without creating an order. The pay button may spin forever. A gateway may return a vague error. Shipping or tax may never calculate. The cart may empty after redirect. The order may complete while tracking fails.",
          "Those symptoms point to different technical layers, so do not start by disabling random plugins in production."
        ],
        listTitle: "Checkout symptoms to document",
        checklist: ["Place order button spins or does nothing", "Checkout redirects to an empty cart", "Payment gateway error appears", "Shipping, tax, coupon, or address validation blocks checkout", "Checkout fields do not update or validate", "Order is created but purchase tracking is missing", "Only mobile or one browser fails"]
      },
      {
        heading: "Check recent changes",
        body: [
          [
            "Many checkout problems follow a recent update. ",
            { text: "WooCommerce", href: "/services/woocommerce-support/", title: "View WooCommerce support for checkout, product data, templates, and tracking" },
            ", payment gateways, checkout field editors, shipping plugins, tax plugins, cache plugins, security plugins, optimization plugins, and themes can all change checkout behavior."
          ],
          "A short change log is often more useful than another generic troubleshooting list."
        ],
        listTitle: "Recent changes worth checking",
        checklist: ["WooCommerce or WordPress update", "Payment gateway update", "Theme or checkout template update", "Cache or optimization setting change", "Security, CAPTCHA, or firewall change", "Shipping, tax, or coupon plugin change", "Tracking script or GTM container update"]
      },
      {
        heading: "Look for script, cache, and session issues",
        body: [
          "Checkout pages rely on JavaScript, AJAX requests, cookies, sessions, and payment gateway scripts. Caching or minification that is fine on a blog post can break checkout.",
          "Browser console errors, failed network requests, stale checkout assets, blocked scripts, and cache exclusions usually reveal whether the problem lives in the browser, plugin stack, or server."
        ],
        listTitle: "Technical checks",
        checklist: ["Browser console errors", "Failed AJAX requests", "Checkout and cart pages excluded from cache", "Payment scripts loading correctly", "Security plugin or CAPTCHA blocking checkout", "Session/cookie behavior", "Optimization plugin script exclusions"]
      },
      {
        heading: "Verify order data and tracking after the fix",
        body: [
          [
            "A checkout fix is incomplete if orders work but reporting is broken. After checkout behavior is stable, check whether ",
            { text: "GA4, GTM, pixels, transaction IDs, revenue, currency, and item data", href: "/services/conversion-tracking-troubleshooting/", title: "View conversion tracking troubleshooting for ecommerce revenue and purchase events" },
            " match the WooCommerce order."
          ],
          "This matters because ecommerce decisions get worse when revenue reports drift away from real orders."
        ],
        listTitle: "Post-fix verification",
        checklist: ["Order created once", "Customer and admin notifications work", "Thank-you page loads", "GA4 purchase event fires once", "Transaction ID is present", "Revenue and currency match", "Product data is complete enough for reporting"]
      }
    ],
    links: [
      ["WooCommerce Checkout Fix", "/services/woocommerce-checkout-error-fix/", "Use this when checkout is stuck, failing, reloading, redirecting, or blocking orders."],
      ["WooCommerce Support", "/services/woocommerce-support/", "Use this when checkout problems are part of broader WooCommerce cleanup."],
      ["Conversion Tracking Troubleshooting", "/services/conversion-tracking-troubleshooting/", "Use this when orders complete but revenue, transaction IDs, or purchase events do not match."],
      ["Ecommerce Support", "/services/ecommerce-support/", "Use this when product data, schema, tracking, templates, or integrations are involved."]
    ],
    contextHeading: "Where WooCommerce checkout problems usually lead",
    contextIntro: "Checkout issues often cross WordPress, WooCommerce, payment gateways, scripts, cache, and tracking.",
    contextCards: [
      ["WooCommerce Checkout Fix", "Use this for revenue-blocking checkout errors, stuck payment flows, empty-cart redirects, and payment/shipping failures.", "/services/woocommerce-checkout-error-fix/", "View WooCommerce checkout error fix help"],
      ["Conversion Tracking Troubleshooting", "Use this when purchase events, revenue, product data, or ad-platform conversions do not match real orders.", "/services/conversion-tracking-troubleshooting/", "View conversion tracking troubleshooting"],
      ["WordPress Plugin Conflict Help", "Use this when a plugin update, checkout extension, cache plugin, security plugin, or gateway plugin appears to trigger the issue.", "/services/wordpress-plugin-conflict-help/", "View WordPress plugin conflict help"]
    ],
    faqs: [
      ["Why does WooCommerce checkout keep spinning?", "Common causes include JavaScript errors, failed AJAX requests, cache or optimization conflicts, payment gateway script issues, or plugin conflicts."],
      ["Why does WooCommerce checkout redirect to an empty cart?", "This can happen because of session, cookie, cache, redirect, security, or cart-fragment issues."],
      ["Should I disable plugins to test checkout?", "Only with caution, ideally on staging or with a backup and clear rollback path. Random production plugin changes can make the problem harder to trace."]
    ]
  },
  {
    slug: "wordpress-site-broken-after-plugin-update",
    title: "WordPress Site Broken After a Plugin Update? What to Check First",
    h1: "WordPress Site Broken After a Plugin Update? Start With the Change Log",
    meta: "A WordPress plugin update can break layouts, forms, checkout, scripts, admin behavior, or the whole site. Learn what to document before fixing it.",
    eyebrow: "Plugin update break",
    heroImageSlug: "blog-cms-plugin-theme-weirdness",
    summary: "When a WordPress site breaks after a plugin update, the goal is to isolate the affected behavior, identify the plugin/theme/cache layer involved, and avoid making production worse.",
    problemType: "WordPress troubleshooting",
    relatedService: "wordpress-support",
    category: "wordpress-cms",
    tags: ["wordpress", "plugin-conflicts", "emergency-support", "page-builders", "themes"],
    heroCta: "Fix Broken WordPress",
    heroSecondary: "View Broken WordPress Help",
    heroSecondaryHref: "/services/fix-broken-wordpress-site/",
    intro: [
      [
        { text: "Plugin updates", href: "/services/wordpress-plugin-conflict-help/", title: "View WordPress plugin conflict help" },
        " can change CSS, JavaScript, database behavior, admin screens, checkout behavior, shortcodes, forms, widgets, and compatibility with the current theme or PHP version."
      ],
      [
        "The mistake is treating every plugin update problem the same way. A white screen needs different handling than a ",
        { text: "broken Elementor layout", href: "/services/elementor-layout-broken/", title: "View Elementor layout broken help" },
        ", a failed form, a missing shortcode, or a checkout error."
      ]
    ],
    sections: [
      {
        heading: "Document what broke",
        body: [
          [
            "Start with the visible symptom. Is the whole site down, only one page broken, the admin inaccessible, a form failing, checkout stuck, or a layout changed? That is the difference between general ",
            { text: "broken WordPress site", href: "/services/fix-broken-wordpress-site/", title: "View help fixing a broken WordPress site" },
            " work and a narrower plugin or layout fix."
          ],
          "The narrower the symptom, the safer the fix path."
        ],
        listTitle: "Useful first notes",
        checklist: ["Affected URL", "Exact plugin updated", "Time update happened", "What should happen", "What happens instead", "Screenshot or screen recording", "Whether admin still works", "Whether backups or staging exist"]
      },
      {
        heading: "Separate visual, functional, and fatal errors",
        body: [
          "A visual break usually points toward CSS, layout output, page builder markup, or cached assets. A functional break points toward JavaScript, forms, APIs, plugin hooks, or settings. A fatal error needs more careful recovery because the site or admin may be inaccessible.",
          "Do not treat a fatal error like a spacing bug."
        ],
        listTitle: "Error buckets",
        checklist: ["Visual layout changed", "Form or button stopped working", "Admin screen fails", "White screen or critical error", "Checkout or cart broken", "Console error appears", "PHP or server log shows a fatal error"]
      },
      {
        heading: "Check plugin, theme, cache, and PHP context",
        body: [
          "Plugins do not run in isolation. A plugin update can conflict with the theme, another plugin, the PHP version, page builder output, cache, or optimization settings.",
          "The fix may be a setting change, rollback, template update, compatibility patch, cache purge, or vendor escalation."
        ],
        listTitle: "Common conflict layers",
        checklist: ["Theme or child theme compatibility", "Page builder output", "Cache and optimization plugins", "Security or firewall plugins", "PHP version compatibility", "WooCommerce extensions", "Form and SMTP plugins", "Custom snippets"]
      },
      {
        heading: "Recover carefully",
        body: [
          [
            "If a public site is broken, speed matters, but panic changes can erase the evidence needed to fix the root cause. Backups, staging, hosting logs, plugin rollback options, and a clear ",
            { text: "restore plan", href: "/services/wordpress-emergency-support/", title: "View WordPress emergency support for urgent public-site issues" },
            " matter."
          ],
          "The safest fix is the smallest change that restores the affected path and leaves enough information to prevent the same issue next time."
        ],
        listTitle: "Safer recovery moves",
        checklist: ["Confirm backup state", "Use staging when possible", "Avoid changing several plugins at once", "Record the fix", "Retest affected pages", "Verify forms, checkout, and tracking after repair"]
      }
    ],
    links: [
      ["Fix Broken WordPress Site", "/services/fix-broken-wordpress-site/", "Use this when a WordPress page, form, checkout, or public feature broke after a plugin or theme change."],
      ["WordPress Plugin Conflict Help", "/services/wordpress-plugin-conflict-help/", "Use this when two plugins, a plugin and theme, or a recent update appear to be fighting."],
      ["WordPress Emergency Support", "/services/wordpress-emergency-support/", "Use this when a public page, lead form, checkout, or admin path is down and needs triage."],
      ["WordPress Support", "/services/wordpress-support/", "Use this when the issue is part of broader WordPress cleanup, updates, or recurring site support."]
    ],
    contextHeading: "Where plugin-update breaks usually route",
    contextCards: [
      ["Fix Broken WordPress Site", "Use this for visible or functional WordPress failures after updates, edits, cache changes, or plugin conflicts.", "/services/fix-broken-wordpress-site/", "View broken WordPress help"],
      ["Plugin Conflict Help", "Use this when the break appears tied to a plugin update, overlapping plugin behavior, or compatibility problem.", "/services/wordpress-plugin-conflict-help/", "View plugin conflict help"],
      ["White Screen Fix", "Use this when the site or admin is blank, a fatal error appears, or recovery needs extra caution.", "/services/wordpress-white-screen-of-death-fix/", "View white screen fix help"]
    ],
    faqs: [
      ["Can a plugin update break WordPress?", "Yes. Updates can change scripts, styles, PHP behavior, shortcodes, hooks, database assumptions, or compatibility with other plugins and themes."],
      ["Should I roll back the plugin immediately?", "Sometimes, but only after considering backups, staging, active orders or leads, and what data might be lost or hidden by the rollback."],
      ["What should I send for plugin conflict help?", "Send the URL, plugin name, update time, symptom, screenshots, admin status, and whether backups or staging are available."]
    ]
  },
  {
    slug: "gtm-form-tracking-ga4",
    title: "GTM Form Tracking for GA4: Why Form Events Go Missing",
    h1: "GTM Form Tracking for GA4: Standard Forms, AJAX Forms, and Thank-You States",
    meta: "Track form submissions in GA4 with Google Tag Manager by matching the method to the form: submit trigger, thank-you page, success message, or custom event.",
    eyebrow: "GTM form tracking",
    heroImageSlug: "blog-tracking-scripts-pixels-broken",
    summary: "Form tracking fails when the tracking method does not match the way the form actually submits. GTM setup needs to follow the real form behavior.",
    problemType: "Tracking implementation",
    relatedService: "analytics-tracking",
    category: "forms-tracking-data",
    tags: ["ga4-gtm", "forms", "conversion-tracking", "api-integrations", "analytics-tracking"],
    heroCta: "Set Up Form Tracking",
    heroSecondary: "View GA4/GTM Help",
    heroSecondaryHref: "/services/ga4-gtm-setup-help/",
    intro: [
      [
        "There is no single universal way to ",
        { text: "track every website form", href: "/services/ga4-gtm-setup-help/", title: "View GA4 and GTM setup help for form tracking" },
        ". Some forms fire a standard submit event. Some use AJAX. Some redirect to a thank-you page. Some are embedded from a CRM. Some show a success message without changing the URL."
      ],
      [
        "Google Tag Manager can handle these situations, but the trigger has to match the actual form behavior. Guessing is why ",
        { text: "GA4 form events go missing", href: "/services/conversion-tracking-troubleshooting/", title: "View conversion tracking troubleshooting for missing or duplicate form events" },
        " or fire twice."
      ]
    ],
    sections: [
      {
        heading: "Identify the form behavior",
        body: [
          [
            "Before creating a tag, test the form. Does the URL change? Does a thank-you page load? Does a success message appear? Does GTM preview mode see a form submit event? Does the form live inside an ",
            { text: "iframe", href: "/services/api-integrations/", title: "View API and integration help for embedded forms, CRMs, and handoffs" },
            "?"
          ],
          "This determines whether the setup should use a form trigger, URL rule, visibility trigger, custom event, data layer push, or postMessage listener."
        ],
        listTitle: "Form behavior checks",
        checklist: ["Standard browser submit", "AJAX submission", "Thank-you page redirect", "Inline success message", "Iframe or embedded CRM form", "Multi-step form", "Plugin-specific event", "Custom JavaScript callback"]
      },
      {
        heading: "Choose the right GTM trigger",
        body: [
          "The built-in GTM form submission trigger can work for ordinary forms, but many modern forms never fire the standard submit event. For those, use a more specific signal.",
          "The best trigger is the one tied to a real successful conversion, not just a button click."
        ],
        listTitle: "Common trigger methods",
        checklist: ["Form Submission trigger", "Thank-you page URL", "Element Visibility success message", "Custom event or data layer push", "Click trigger only as a fallback", "postMessage listener for embedded forms", "Ecommerce or CRM event where supported"]
      },
      {
        heading: "Send useful GA4 event parameters",
        body: [
          "A form event is more useful when it tells you which form, page, and conversion path fired. Avoid sending private form field contents to analytics.",
          "Good setup captures form identity and context without exposing names, emails, message text, or sensitive data."
        ],
        listTitle: "Useful non-private parameters",
        checklist: ["form_id or form_name", "page_path", "page_title", "form_location", "conversion_type", "lead_source bucket", "success_state", "debug/test flag during QA"]
      },
      {
        heading: "Verify before calling it done",
        body: [
          "After publishing, test the form path again. Check GTM preview mode, GA4 DebugView, realtime reporting, ad-platform tags if used, and the destination inbox or CRM.",
          [
            "A form tracking setup is not done until the ",
            { text: "lead arrives", href: "/services/contact-form-not-working-wordpress/", title: "View help for contact forms not sending leads" },
            " and the event fires once for the right action."
          ]
        ],
        listTitle: "Verification checklist",
        checklist: ["Form submission succeeds", "Lead arrives in inbox or CRM", "GTM tag fires once", "GA4 event appears in DebugView", "No duplicate hard-coded snippet fires", "Thank-you or success state is correct", "Conversion/key event is configured intentionally"]
      }
    ],
    links: [
      ["GA4 and GTM Setup Help", "/services/ga4-gtm-setup-help/", "Use this when form events, conversion events, pixels, and tracking setup need implementation."],
      ["Conversion Tracking Troubleshooting", "/services/conversion-tracking-troubleshooting/", "Use this when form conversions are missing, duplicated, or disagree with real leads."],
      ["Contact Form Not Working in WordPress", "/services/contact-form-not-working-wordpress/", "Use this when the form itself does not send, redirect, notify, or pass lead data."],
      ["GA4/GTM Measurement Integrity", "/skills/ga4-gtm-measurement-integrity/", "Use this for deeper GA4 and Google Tag Manager verification."]
    ],
    contextHeading: "Where GA4 form tracking work usually goes",
    contextCards: [
      ["GA4 and GTM Setup Help", "Use this for form events, conversion setup, pixels, GTM tags, triggers, variables, and launch verification.", "/services/ga4-gtm-setup-help/", "View GA4 and GTM setup help"],
      ["Conversion Tracking Troubleshooting", "Use this when events fire twice, never fire, fire on the wrong action, or do not match real form leads.", "/services/conversion-tracking-troubleshooting/", "View conversion troubleshooting"],
      ["API Integrations", "Use this when form tracking depends on CRM handoff, webhooks, hidden fields, custom events, or data moving between systems.", "/services/api-integrations/", "View API integration help"]
    ],
    faqs: [
      ["Why does GTM form tracking not work?", "Many forms do not fire a standard submit event. AJAX forms, embedded forms, success messages, and custom scripts often need a different trigger method."],
      ["Should I track a button click as a form submission?", "Only as a fallback. A button click can happen without a successful form submission, so it is usually weaker than a success event or thank-you state."],
      ["Can form tracking send private data to GA4?", "It should not. Use non-private context like form name, page path, and conversion type instead of names, emails, or message text."]
    ]
  },
  {
    slug: "google-ads-conversion-tracking-not-working",
    title: "Google Ads Conversion Tracking Not Working? Check the Full Path",
    h1: "Google Ads Conversion Tracking Not Working? Start With the Click-to-Conversion Path",
    meta: "Troubleshoot Google Ads conversion tracking problems from landing page to tag firing, redirects, GA4 imports, thank-you pages, and duplicate events.",
    eyebrow: "Google Ads conversions",
    heroImageSlug: "blog-tracking-scripts-pixels-broken",
    summary: "Google Ads conversion tracking can fail because the tag never fires, fires too late, fires twice, imports the wrong GA4 event, loses attribution, or triggers on the wrong page.",
    problemType: "Tracking troubleshooting",
    relatedService: "analytics-tracking",
    category: "forms-tracking-data",
    tags: ["conversion-tracking", "ga4-gtm", "analytics-tracking", "landing-pages", "dashboards"],
    heroCta: "Troubleshoot Conversions",
    heroSecondary: "View Conversion Tracking",
    heroSecondaryHref: "/services/conversion-tracking-troubleshooting/",
    intro: [
      [
        { text: "Google Ads conversion tracking", href: "/services/conversion-tracking-troubleshooting/", title: "View conversion tracking troubleshooting help" },
        " is not only a snippet. It depends on the ad click, landing page, tag setup, conversion linker, trigger timing, thank-you state, redirects, browser behavior, consent tools, and whether you are using native Google Ads tags or imported GA4 events."
      ],
      "If conversions show zero or do not match leads, test the actual path instead of only checking whether a script exists on the page."
    ],
    sections: [
      {
        heading: "Confirm what should count as a conversion",
        body: [
          "The first question is not technical. It is business logic: what action should count? A form success, phone click, booking, purchase, quote request, checkout completion, or button click all need different triggers and verification."
        ],
        listTitle: "Conversion definition checks",
        checklist: ["Lead form success", "Phone click", "Booking or calendar completion", "Purchase confirmation", "Quote request", "Download or signup", "Imported GA4 key event", "Native Google Ads conversion tag"]
      },
      {
        heading: "Check whether the tag fires",
        body: [
          [
            "Use GTM preview, Tag Assistant, browser tools, and platform diagnostics to see whether the ",
            { text: "conversion tag fires on the right action", href: "/services/ga4-gtm-setup-help/", title: "View GA4 and GTM setup help for tags, triggers, and events" },
            ". Tags that fire too early, too late, twice, or on page view instead of success can all create bad reporting."
          ]
        ],
        listTitle: "Tag checks",
        checklist: ["Correct conversion ID and label", "Conversion linker present where needed", "Trigger fires only after success", "Redirect does not interrupt tag firing", "No duplicate hard-coded and GTM tags", "Consent settings are understood", "Container is published"]
      },
      {
        heading: "Check GA4 imports separately",
        body: [
          [
            "Imported GA4 conversions can be useful, but they add another layer. The GA4 event has to be correct before Google Ads imports it. If ",
            { text: "GA4 is wrong", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, and conversion data" },
            ", Google Ads will inherit the problem."
          ]
        ],
        listTitle: "GA4 import checks",
        checklist: ["GA4 event fires once", "Event is marked as a key event intentionally", "Correct account/property is linked", "Google Ads imports the right event", "Event name is stable", "Data delay is understood"]
      },
      {
        heading: "Compare test actions to real records",
        body: [
          [
            "A tracking fix should be checked against real business records: form submissions, CRM leads, phone call logs, orders, or booking records. ",
            { text: "Platform dashboards", href: "/services/automation-internal-tools/", title: "View automation and internal web tools for dashboards and reporting workflows" },
            " alone can hide whether the event matches the real action."
          ]
        ],
        listTitle: "Reality checks",
        checklist: ["Test lead arrives", "CRM record exists", "Thank-you state appears", "Google Ads tag fires", "GA4 event appears", "Ad-platform conversion appears after expected delay", "Duplicate conversions are not counted"]
      }
    ],
    links: [
      ["Conversion Tracking Troubleshooting", "/services/conversion-tracking-troubleshooting/", "Use this when conversions are missing, duplicated, delayed, or not matching real leads or orders."],
      ["GA4 and GTM Setup Help", "/services/ga4-gtm-setup-help/", "Use this when tags, triggers, events, and conversion setup need to be built or cleaned up."],
      ["Analytics & Tracking", "/services/analytics-tracking/", "Use this for broader tracking cleanup across GA4, GTM, pixels, forms, ecommerce, and campaign data."],
      ["Landing Pages", "/services/landing-pages/", "Use this when conversion tracking needs to launch with a campaign or paid traffic page."]
    ],
    contextHeading: "Where Google Ads conversion issues usually route",
    contextCards: [
      ["Conversion Tracking Troubleshooting", "Use this for missing Google Ads conversions, duplicate events, broken GA4 imports, bad triggers, and reporting mismatches.", "/services/conversion-tracking-troubleshooting/", "View conversion tracking troubleshooting"],
      ["GA4 and GTM Setup Help", "Use this when the conversion tags, triggers, variables, GA4 events, or pixels need to be configured and tested.", "/services/ga4-gtm-setup-help/", "View GA4 and GTM setup help"],
      ["Landing Pages", "Use this when paid traffic pages need forms, CTAs, thank-you states, UTM handling, and conversion tracking before launch.", "/services/landing-pages/", "View landing page development"]
    ],
    faqs: [
      ["Why are Google Ads conversions showing zero?", "Common causes include tags not firing, wrong conversion ID or label, unpublished GTM changes, missing conversion linker, redirects interrupting tags, low volume, or incorrect GA4 imports."],
      ["Should I use GA4 imported conversions or native Google Ads tags?", "It depends on the setup. Native tags can be more direct, while GA4 imports depend on GA4 event quality and account linking."],
      ["Can a thank-you page redirect break conversion tracking?", "Yes. If the redirect happens before the tag fires or if the trigger watches the wrong URL/state, conversions can be missed."]
    ]
  },
  {
    slug: "ai-built-website-not-ready-to-launch",
    title: "AI-Built Website Not Ready to Launch? Cleanup Checklist",
    h1: "AI-Built Website Not Ready to Launch? Check the Boring Parts AI Often Skips",
    meta: "Before launching an AI-built website, check routing, forms, tracking, SEO basics, env vars, hosting, accessibility, performance, and maintainability.",
    eyebrow: "AI launch cleanup",
    heroImageSlug: "service-ai-built-website-cleanup",
    summary: "AI-built sites can look close while missing the production details that make a site usable: forms, tracking, routing, metadata, deployment settings, accessibility, and maintainable structure.",
    problemType: "AI-built cleanup",
    relatedService: "ai-built-website-cleanup",
    category: "seo-pages-ai",
    tags: ["ai-built", "landing-pages", "forms", "analytics-tracking", "technical-seo", "site-speed"],
    heroCta: "Clean Up an AI-Built Site",
    heroSecondary: "View AI-Built Cleanup",
    heroSecondaryHref: "/services/ai-built-website-cleanup/",
    intro: [
      "AI tools can create impressive first drafts. The risk is that a site can look ready while the launch-critical pieces are missing or fragile.",
      [
        "Before sending real visitors to an ",
        { text: "AI-built site", href: "/services/ai-built-website-cleanup/", title: "View AI-built website cleanup services" },
        ", check the boring parts: forms, routing, metadata, sitemap behavior, tracking, redirects, environment variables, hosting config, performance, accessibility, and future editing."
      ]
    ],
    sections: [
      {
        heading: "Check routing and deployment",
        body: [
          "A site that works in preview can fail after deployment. Direct page loads, refresh behavior, 404 handling, redirects, environment variables, API URLs, build settings, and hosting rules all need verification."
        ],
        listTitle: "Deployment checks",
        checklist: ["Direct URL loads", "Refresh works on nested routes", "404 page or fallback behavior is sane", "Environment variables are set on the host", "API URLs are correct", "Domain and SSL work", "Redirects and trailing slashes are intentional"]
      },
      {
        heading: "Check forms and data handoff",
        body: [
          [
            "AI-generated forms often look complete but do not reliably create leads. Test validation, success states, email delivery, ",
            { text: "CRM handoff", href: "/services/api-integrations/", title: "View API and website integration help for forms, CRMs, and webhooks" },
            ", spam protection, hidden fields, and error handling."
          ]
        ],
        listTitle: "Form checks",
        checklist: ["Required fields validate", "Success message or thank-you path works", "Email notification arrives", "CRM or webhook receives data", "Errors are visible to users", "Private data is handled carefully", "Spam protection does not block real leads"]
      },
      {
        heading: "Check tracking and SEO basics",
        body: [
          [
            "Generated pages often skip search and measurement fundamentals. A launch-ready page needs titles, descriptions, headings, canonical behavior, sitemap inclusion, schema where supported, internal links, and ",
            { text: "conversion tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, forms, and conversions" },
            "."
          ]
        ],
        listTitle: "SEO and tracking checks",
        checklist: ["Unique title and meta description", "One clear H1", "Useful H2 structure", "Canonical URL", "Sitemap and robots behavior", "Relevant schema", "Internal links", "GA4/GTM events", "Form and CTA tracking"]
      },
      {
        heading: "Check performance, accessibility, and maintainability",
        body: [
          [
            "Prompted changes can create duplicate files, unused code, ",
            { text: "heavy images", href: "/services/site-speed-performance/", title: "View site speed and performance cleanup help" },
            ", conflicting styles, inaccessible controls, and components that are hard to update later."
          ],
          "Cleanup should preserve what works while reducing fragility."
        ],
        listTitle: "Quality checks",
        checklist: ["Images are sized and compressed", "No obvious layout shift", "Buttons and forms are keyboard usable", "Labels and alt text make sense", "Duplicate scripts are removed", "Files and components are understandable", "Future content edits have a clear path"]
      }
    ],
    links: [
      ["AI-Built Website Cleanup", "/services/ai-built-website-cleanup/", "Use this when an AI-built website needs routing, deployment, tracking, forms, SEO, or maintainability cleanup."],
      ["Website Fixes", "/services/website-fixes/", "Use this when the AI-built site has visible layout, JavaScript, form, modal, or mobile issues."],
      ["API Integrations", "/services/api-integrations/", "Use this when forms, CRMs, webhooks, databases, or third-party systems need to connect."],
      ["Technical SEO Implementation", "/services/technical-seo-implementation/", "Use this when the generated site needs metadata, schema, sitemap, crawl, redirects, or internal links."]
    ],
    contextHeading: "Where AI-built launch cleanup usually goes",
    contextCards: [
      ["AI-Built Website Cleanup", "Use this for ChatGPT, Codex, Lovable, Bolt, Cursor, Replit, v0, and other AI-assisted site cleanup before launch.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup"],
      ["Website Fixes", "Use this when generated output has broken layouts, script errors, mobile problems, forms, modals, embeds, or visible bugs.", "/services/website-fixes/", "View website fixes"],
      ["Production Debugging", "Use this when the generated site works in preview but fails after deployment, routing, API calls, auth, forms, or browser behavior.", "/skills/production-debugging/", "View production debugging"]
    ],
    faqs: [
      ["Can an AI-built site be launched as-is?", "Sometimes, but it should be checked first. Forms, tracking, routing, SEO basics, deployment settings, and accessibility are often incomplete."],
      ["What should I send for AI-built cleanup?", "Send the URL, repo or builder link, tool used, what works, what fails, deployment host, and the next action the site needs to support."],
      ["Does cleanup mean rebuilding from scratch?", "Not by default. The first move is to keep useful work and fix the fragile, missing, or risky parts."]
    ]
  },
  {
    slug: "topological-relevance-vector-seo",
    title: "Topological Relevance and Vector SEO: A TopoRank Case Study",
    meta: "A technical case study on TopoRank, vector SEO, boilerplate stripping, URL hierarchy weighting, semantic clusters, and internal link topology using thewebguy.app crawl data.",
    h1: "Topological Relevance and Vector SEO: How TopoRank Maps Internal Link Weight",
    eyebrow: "TopoRank case study",
    heroImageSlug: "skill-crawl-analysis-internal-linking",
    summary: "A technical look at how TopoRank crawls a site, strips template noise, discovers semantic clusters, scores link support, and turns internal linking into a measurable optimization loop.",
    problemType: "Technical SEO systems",
    relatedService: "technical-seo-implementation",
    category: "seo-pages-ai",
    tags: ["technical-seo", "internal-links", "crawl-analysis", "analytics-tracking", "automation"],
    heroCta: "Send a Crawl Problem",
    heroSecondary: "View Crawl Analysis",
    heroSecondaryHref: "/skills/crawl-analysis-internal-linking/",
    intro: [
      "Most internal linking advice still sounds like a spreadsheet exercise: find a keyword, find a matching page, add an anchor, repeat until the export looks busy. That is not how modern retrieval systems understand a site. Search systems parse a website as a graph of documents, templates, topical neighborhoods, entity relationships, and semantic intent.",
      [
        "TopoRank was built around that graph-shaped problem. It is a proprietary tool built and used by The Web Guy for crawl analysis, semantic topology review, internal link planning, and ",
        { text: "implementation QA", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation services" },
        ". It does not begin with a static keyword list. It crawls the site, removes global boilerplate, embeds the remaining main content, discovers the semantic clusters that already exist, and then asks whether the physical URL structure and internal links support or contradict those clusters."
      ],
      "The version shown here is the internal working dashboard, not a public SaaS product. A public-facing variant of TopoRank is expected in late 2026 or early 2027 after the reporting, permissions, project setup, export flows, and re-harvest workflow are packaged for outside users.",
      "The June 12, 2026 crawl of thewebguy.app produced the first useful proof point: 56 crawled pages, 2 discovered clusters, 69.7% average combined topology, 58.8% semantic resonance, 36 weak pages, 9 strong pages, and 448 suggested link opportunities. After the TopoRank update, a June 16 local re-harvest requested and retained 7 populated pillar profiles across 58 crawled pages, with 72.2% average combined topology, 61.5% semantic resonance, 27 weak pages, 11 strong pages, and 464 suggested link opportunities. The interesting part was not that the site had no links. It was that many links were template-heavy, so important pages needed more body-level support."
    ],
    sections: [
      {
        heading: "What TopoRank is today",
        body: [
          [
            "TopoRank is currently an internal ",
            { text: "technical SEO", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation help for crawl, links, schema, redirects, and site changes" },
            " and content topology workbench. The Web Guy uses it to crawl a site, queue and compare dated harvests, inspect page-level topology scores, review cluster placement, find weak contextual support, and test whether edits improve the site graph."
          ],
          "The public version is not live yet. The internal dashboard is useful because it shows the workflow before it is polished into a product: start a crawl, watch queue status, open a dated report, inspect the pages that need support, move between scoring panels, and use the editing workbench to preview link and content changes.",
          "That matters for client work because TopoRank is not being described as theory. It is already part of The Web Guy's implementation process for internal link cleanup, technical SEO planning, content architecture checks, and re-harvest comparisons."
        ],
        figures: [
          {
            src: "/images/toporank/dashboard-crawl-queue.png",
            alt: "TopoRank local dashboard showing crawl inputs, queue status, crawl settings, and report list.",
            title: "Crawl dashboard and report queue",
            caption: "The internal dashboard accepts domains or URLs, crawl limits, worker settings, and force-refresh options, then lists available dated reports for review."
          },
          {
            src: "/images/toporank/report-overview.png",
            alt: "TopoRank report overview showing page cards, score summaries, filters, history controls, and report metadata.",
            title: "Interactive report overview",
            caption: "The report view turns a crawl into page-level cards with topology scores, history controls, filters, cluster context, and links to the saved HTML or JSON report."
          }
        ],
        listTitle: "Current internal capabilities",
        checklist: [
          "Queue local crawls and store dated report snapshots.",
          "Open report views for a domain, local build, or historical crawl folder.",
          "Compare page-level topology, lexical, vector, and authority/support signals.",
          "Filter by range, pillar, subpillar, and score category.",
          "Review suggested contextual links before editing the site.",
          "Preview content changes and re-harvest pages after implementation."
        ],
        calloutTitle: "Availability",
        callout: "TopoRank is proprietary and currently used by The Web Guy internally. A public-facing version is expected late 2026 or early 2027."
      },
      {
        heading: "The shift from keyword string matching to vector topology",
        body: [
          "Legacy internal linking treats pages as bags of keywords. If a source page says analytics and a target page says analytics, the rule says to connect them. That can still catch obvious opportunities, but it misses the real structure of a site: whether a page supports a pillar, bridges two subtopics, or accidentally bleeds into a different silo.",
          "Vector topology starts from the document neighborhood instead. Each page becomes a point in semantic space. Pages that explain related intent sit closer together even when they do not repeat the same exact phrase. That matters for sites where a business problem crosses terms: GA4, forms, CRM handoffs, tracking scripts, webhooks, dashboards, and conversion reporting can all describe the same operational failure.",
          "TopoRank's job is to compare those semantic coordinates against the site's actual link graph. A page can have many incoming links and still have weak support if those links are mostly navigation, footer, cards, or global template elements. The crawl therefore separates link count from contextual support."
        ],
        listTitle: "Why plain keyword matching breaks down",
        checklist: [
          "It cannot distinguish body-level editorial links from repeated template links.",
          "It misses pages whose meaning is close but whose vocabulary is different.",
          "It treats every link as equal even when placement changes the signal.",
          "It cannot see structural dissonance between URL paths and semantic clusters.",
          "It optimizes anchor insertion without checking whether the page moved closer to the right topic neighborhood."
        ],
        calloutTitle: "Core idea",
        callout: "Internal linking is not just anchor text. It is graph routing between semantically related documents."
      },
      {
        heading: "The math behind TopoRank",
        body: [
          "TopoRank starts with autonomous cluster discovery. The crawler harvests pages, extracts main content, creates vector representations, and lets the site reveal its own topical clusters instead of forcing every page into a third-party keyword taxonomy.",
          "The updated June 16 local crawl requested 7 main pillars and retained all 7 as populated profiles: Website Support Services, Website Troubleshooting Resources, Local Website Support, Local Website Support — Landing Webmaster, Analytics and Tracking, Performance and Reliability, and Ecommerce and Product Data. That behavior is useful because it shows the updated TopoRank model producing a more granular site structure instead of collapsing the site back into only a few broad clusters.",
          "URL hierarchy is then used as a structural weight. A page under /services/ has a different declared role than a page under /blog/ or /skills/. If the vector engine says a page belongs near a business-service cluster but the URL and link graph isolate it as a loose article, TopoRank flags the mismatch as structural dissonance or silo bleed.",
          "The tool also strips boilerplate before scoring. Header menus, footer columns, repeated CTAs, global sidebars, and common navigation can overwhelm the text if they are treated as page-specific meaning. TopoRank uses fuzzy thresholding across pages to suppress those repeated blocks and analyze the semantic content that is actually unique to the page."
        ],
        infographic: {
          title: "Understanding topical ranking and link support",
          subtitle: "The working sequence that turns a crawl into a semantic topology report and an internal-link plan.",
          image: "/images/toporank/understanding-topical-ranking-and-link-support.png",
          alt: "Infographic explaining the TopoRank process from crawl, boilerplate stripping, embedding main content, cluster discovery, URL structure weighting, and link support scoring.",
          steps: [
            "crawl",
            "strip boilerplate",
            "embed main content",
            "discover clusters",
            "weight URL structure",
            "score link support"
          ]
        },
        listTitle: "Scores used in the report",
        checklist: [
          "Lexical score compares page vocabulary against expected cluster terms.",
          "Vector score compares page embeddings to the cluster or topic embedding.",
          "Authority/support score measures contextual internal link support, not just link count.",
          "Combined topology score blends lexical, vector, and support signals.",
          "Semantic resonance summarizes whether the site's pages reinforce each other as a coherent topical graph."
        ],
        figures: [
          {
            src: "/images/toporank/topology-fit-panel.png",
            alt: "TopoRank topology fit panel showing lexical fit, vector fit, cluster fit, intent fit, URL fit, and subpillar scores.",
            title: "Topology fit scoring panel",
            caption: "The topology fit tab breaks a page into lexical, vector, cluster, intent, URL, subpillar, and blended fit signals so the problem is more specific than weak page or strong page."
          }
        ]
      },
      {
        heading: "The thewebguy.app crawl baseline",
        body: [
          "The first TopoRank report for thewebguy.app was generated on June 12, 2026 at 01:54:51. It crawled 56 pages and found 448 suggested link opportunities. The average vector score was high at 93.2%, which means pages were semantically close to the site's topic space. The average lexical score was much lower at 43.8%, which means the vocabulary and page-specific wording were not always reinforcing the discovered clusters.",
          "The average authority/support score was 74.7%, but the report repeatedly marked technical pages as boilerplate-heavy. That is the important distinction. A page can show 55 incoming internal links because it appears in navigation and footer structures, but still lack enough contextual support in paragraphs, article bodies, or related explanatory sections.",
          "The crawl labeled semantic resonance as weak at 58.8%. That does not mean the site was off-topic. It means the relationships between pages were not strong enough yet. TopoRank's recommendation pattern was consistent: add more contextual same-topic links and reduce reliance on repeated template links."
        ],
        listTitle: "Baseline crawl numbers",
        checklist: [
          "56 pages crawled",
          "2 primary clusters discovered",
          "69.7% average combined topology",
          "43.8% average lexical score",
          "93.2% average vector score",
          "74.7% average authority/support score",
          "58.8% semantic resonance",
          "36 weak pages and 9 strong pages in the initial production crawl",
          "448 suggested link opportunities"
        ],
        calloutTitle: "Search Console context",
        callout: "The project notes referenced an early Search Console baseline of 24 impressions, 2 clicks, and 3.7 average position. That baseline is useful context, but TopoRank's crawl scores should be treated as topology diagnostics, not as a substitute for live Search Console trend attribution."
      },
      {
        heading: "Implementation details that keep the graph honest",
        body: [
          "The biggest risk in a topology score is accidentally measuring the template instead of the document. A crawler that treats the header, footer, sticky CTA, service nav, card grid, and repeated FAQ modules as unique page text will overestimate topical alignment because every page starts to look like every other page.",
          "TopoRank avoids that by isolating canonical URLs, normalizing internal links, suppressing repeated blocks, and scoring the remaining main content against the discovered semantic cluster. The result is a cleaner read on page-specific meaning: the title, H1, intro, section headings, body copy, contextual anchors, and nearby explanatory links.",
          [
            "The link graph then separates raw internal link count from weighted support. A footer link and a sentence-level link are both internal links, but they do not carry the same semantic signal. ",
            { text: "Body links", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for contextual internal link work" },
            " surrounded by relevant language are more useful because they tell the crawler why the source page and target page belong near each other."
          ]
        ],
        listTitle: "Signals the implementation should preserve",
        checklist: [
          "Canonical URL normalization so slash variants and duplicate paths do not split page authority.",
          "Boilerplate stripping so navigation, footer, and repeated CTA text do not dominate semantic scoring.",
          "URL hierarchy weighting so service pages, skill pages, blog posts, and location pages keep their declared roles.",
          "Contextual anchor extraction so body links are treated differently from global template links.",
          "Cluster drift detection so a page that starts as vector SEO does not accidentally become only a tracking or campaign article.",
          "Re-harvest comparison so each implementation pass can be judged against the prior crawl snapshot."
        ]
      },
      {
        heading: "Turning weak pages into stronger pages",
        body: [
          "The remediation pass did not stop at this article. The site now includes route-aware TopoRank support paths that add contextual links from weak or borderline pages toward related services, skills, blog posts, FAQ, rate, and implementation pages. The goal is to turn repeated template support into page-specific support that a crawler can explain.",
          "The June 16 re-harvest shows movement, not completion. Weak pages dropped from the original 36-page baseline to 27 in the latest TopoRank summary, while strong pages increased from 9 to 11. At the row threshold level, 23 pages were still below 70% combined topology and 11 pages were at or above 80%. That means the site is stronger, but the remaining weak pages still need more body copy, clearer page identity, and better same-cluster routes.",
          "That distinction matters. A responsible topology workflow should not mark a page strong just because a support module exists. It should re-harvest the site, check the new score distribution, and keep extending pages that still have weak lexical fit or boilerplate-heavy support."
        ],
        listTitle: "Remediation added in this pass",
        checklist: [
          "Route-aware contextual support links for service, skill, blog, contact, and index pages that TopoRank marked as useful bridge routes.",
          "A dedicated topology bridge section that appears only when a page has page-specific recommendations.",
          "A richer TopoRank infographic with a local lightbox so the workflow is easier to understand without loading outside scripts.",
          "A fresh 7-pillar-request crawl that validated the current site graph after implementation.",
          "Updated article language that separates the initial production baseline from the latest local re-harvest."
        ],
        calloutTitle: "Current status",
        callout: "The weak-page count improved, but it is not finished. The remaining weak pages need deeper page-level content and more contextual same-cluster links before they can honestly be called strong pages."
      },
      {
        heading: "Low-weight pages were not always orphaned",
        body: [
          "The report surfaced an implementation detail that many audits miss: the weak pages were not necessarily isolated by raw link count. They were weak because the strongest links were often global or repeated. TopoRank distinguishes incoming count from semantic support.",
          "For example, the Crawl Analysis and Internal Linking skill page had a 59.2% combined topology score, 66.0% support score, 23.4% lexical score, and 91.6% vector score. That shape says the page belongs in the right semantic neighborhood, but the copy and body-level routing need more reinforcement.",
          "The Website Tracking and Data Troubleshooting post had the weakest combined score in the sampled report at 55.0%, with a 12.4% lexical score and 92.9% vector score. That is a classic vector-topology finding: the page is semantically near the right topic, but the visible wording and contextual link routes are not carrying enough explicit signal."
        ],
        listTitle: "Pages worth reinforcing",
        checklist: [
          "Website Tracking and Data Troubleshooting: 55.0% combined, 64.3% support, 12.4% lexical, 92.9% vector.",
          "SEO Audit Implementation Help: 57.6% combined, 77.3% support, 12.5% lexical, 92.9% vector.",
          "Crawl Analysis and Internal Linking: 59.2% combined, 66.0% support, 23.4% lexical, 91.6% vector.",
          "Programmatic SEO: 59.8% combined, 70.7% support, 20.9% lexical, 93.2% vector.",
          "Site Speed and Performance Cleanup: 62.0% combined, 79.6% support, 21.9% lexical, 93.2% vector."
        ],
        figures: [
          {
            src: "/images/toporank/support-panel.png",
            alt: "TopoRank support panel showing incoming and outgoing internal link support details.",
            title: "Support panel",
            caption: "The support view separates raw internal links from meaningful support so repeated navigation links do not hide weak body-level relationships."
          },
          {
            src: "/images/toporank/suggested-links-panel.png",
            alt: "TopoRank suggested links panel showing recommended contextual internal link targets and add link controls.",
            title: "Suggested contextual links",
            caption: "The suggested links panel lists candidate targets, supporting scores, and add-link controls so the implementation step stays close to the diagnostic evidence."
          }
        ]
      },
      {
        heading: "The optimization loop",
        body: [
          "TopoRank's report viewer is not just a static audit. It includes an editing workbench that loads the isolated main content for a page. The user can inspect the page's current cluster fit, view recommended link targets, highlight text in the editor, and inject an anchor around the selected phrase.",
          "The important piece is the re-harvest loop. After inserting a contextual link, the page can be re-scored against the same topology model. That gives a developer immediate feedback on whether the edit improved the page's combined topology, support, lexical fit, or vector alignment.",
          "This changes internal linking from opinion to instrumentation. Instead of asking whether an anchor feels relevant, the workflow asks whether the source page, target page, and cluster centroid became more coherent after the link was added."
        ],
        flow: [
          "choose weak page",
          "review suggested target",
          "select body text",
          "inject anchor",
          "simulate or re-harvest",
          "compare topology scores"
        ],
        listTitle: "Developer workflow",
        checklist: [
          "Open the report for the crawl snapshot.",
          "Filter by weak combined score or weak semantic link support.",
          "Review the suggested incoming and outgoing link candidates.",
          "Add links inside body copy, not only cards or templates.",
          "Re-harvest the page and compare score movement."
        ],
        figures: [
          {
            src: "/images/toporank/editor-workbench.png",
            alt: "TopoRank editing workbench showing page content editor, display/code tabs, and scoring preview controls.",
            title: "Editing and preview workbench",
            caption: "The internal editor loads isolated page content, supports display and code views, lets selected text become a contextual link, and can rerun scoring before a real re-harvest."
          }
        ]
      },
      {
        heading: "How this post routes link weight",
        body: [
          "This article is itself a topology node. It is not useful if it only describes the system and sits disconnected from the pages that need support. The post therefore points into the technical pages that TopoRank identified as needing more contextual reinforcement.",
          "The outbound links are intentionally specific: crawl analysis and internal linking for the method, production debugging for live-page verification, performance engineering for speed and rendering work, GA4/GTM measurement integrity for conversion-flow validation, REST API and webhook integrations for data handoffs, and WordPress plugin development for site-specific functionality.",
          [
            "The inbound links are also intentional. Site speed, ",
            { text: "ongoing webmaster support", href: "/services/ongoing-webmaster-support/", title: "View ongoing webmaster support for recurring content, analytics, SEO, and maintenance work" },
            ", performance engineering, production debugging, and crawl analysis pages can all naturally reference the TopoRank workflow because those pages already talk about real site behavior, recurring QA, crawl paths, and technical cleanup."
          ]
        ],
        listTitle: "Routing rules applied",
        checklist: [
          "Use contextual body links instead of only navigation links.",
          "Link from service and skill pages where the topic naturally overlaps.",
          "Use specific anchor text like topological relevance and vector SEO.",
          "Route the case study back to the technical pages that need stronger topical support.",
          "Keep the post tied to crawl analysis, internal linking, tracking, performance, and debugging rather than broad SEO slogans."
        ]
      },
      {
        heading: "What the local re-harvest changed",
        body: [
          "After the route-aware support pass and TopoRank update, I re-harvested the local thewebguy.app build with TopoRank set to request 7 main pillars. The crawl finished on June 16, 2026 at 13:45:38. It crawled 58 pages and retained all 7 requested pillar profiles in the report.",
          "The sitewide numbers moved in the right direction. Average combined topology rose to 72.2%, average lexical fit rose to 52.5%, average vector fit held at 94.0%, average authority/support settled at 67.9%, and semantic resonance rose to 61.5%. Weak pages dropped to 27 and strong pages held at 11.",
          "The new TopoRank post stayed in the Website Troubleshooting Resources pillar. That is a stricter and more useful placement for this article because the piece behaves like an explanatory troubleshooting resource rather than a pure service page. The article still needs better topical outgoing links: it scored 54.3% combined topology, 32.7% lexical fit, 85.5% vector fit, and 35.3% authority/support in this updated 7-pillar report."
        ],
        listTitle: "Second-pass crawl numbers",
        checklist: [
          "58 local pages crawled in the re-harvest.",
          "7 main pillars requested and 7 populated pillar profiles retained in the final report.",
          "72.2% average combined topology.",
          "52.5% average lexical fit and 94.0% average vector fit.",
          "67.9% average authority/support.",
          "61.5% semantic resonance.",
          "27 weak pages and 11 strong pages in the latest TopoRank summary.",
          "464 suggested link opportunities."
        ],
        calloutTitle: "How to read the movement",
        callout: "The local crawl includes new development pages and measurement features, so it should be used as an implementation diagnostic. Live ranking impact still has to be checked later in Search Console."
      },
      {
        heading: "Why sitewide scores can dip while the target page improves",
        body: [
          "A topology audit can feel counterintuitive because the target URL may improve while the sitewide average barely moves or even softens. That is not automatically a failed edit. A fresh harvest can include new pages, changed templates, different crawl depth, more discovered links, and new sections that alter the denominator.",
          "For this pass, the production baseline and local crawl were not identical inputs. The June 12 production crawl had 56 pages. The local re-harvest had 58 pages because the development site had new functionality and the new case study itself. Comparing those totals as if they were the same sample would be sloppy.",
          "The honest read is page-level first, cluster-level second, sitewide third. The target article became more topically explicit and better supported. The Measurement Integrity neighborhood now has another explanatory node. The sitewide resonance score still says the broader graph needs more contextual same-topic links across older pages."
        ],
        listTitle: "Guardrails for interpreting TopoRank",
        checklist: [
          "Compare identical crawl scopes when making sitewide claims.",
          "Use page-level score movement to judge a specific edit.",
          "Use cluster placement to check whether the page landed in the right neighborhood.",
          "Use semantic resonance to find whether the whole site is reinforcing its topic graph.",
          "Do not treat topology scores as live ranking attribution without Search Console or analytics follow-up."
        ]
      },
      {
        heading: "How FAQ questions and GA4 journeys feed the content loop",
        body: [
          [
            "The ",
            { text: "analytics work", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, clicks, forms, and conversion journeys" },
            " on the site turns this from a one-time internal-linking exercise into a feedback loop. Search input, scroll-section visibility, button clicks, navigation context, exit-intent responses, contact form fills, and FAQ questions can all become evidence about what visitors were trying to understand before they converted or left."
          ],
          "That matters for TopoRank because visitor questions often reveal missing semantic bridges. If several people ask a question from a tracking page, the answer may belong as an FAQ on that page. If the question keeps appearing from multiple pages, it may deserve a full blog post with contextual links back into the pages where the question was asked.",
          [
            "The choice between FAQ and blog post should be based on scope. A short clarification belongs on the page that produced the question. A repeated question that crosses GA4, forms, CRM handoff, search, crawl paths, or content architecture should become a deeper article that supports the whole cluster, or an ",
            { text: "internal tool", href: "/services/automation-internal-tools/", title: "View automation and internal web tools for recurring crawl, reporting, and QA workflows" },
            " if the review keeps repeating."
          ]
        ],
        flow: [
          "visitor searches or asks",
          "GA4 stores page context",
          "question is reviewed",
          "answer as FAQ or blog",
          "TopoRank re-harvests",
          "links are adjusted"
        ],
        listTitle: "Decision rules",
        checklist: [
          "Answer as an FAQ when the question is specific to one service, skill, or troubleshooting page.",
          "Answer as a blog post when the same question appears across several pages or describes a broader workflow.",
          "Use the page where the question was asked as the first internal link source.",
          "Re-harvest after publishing so the new answer is scored inside the site's actual topology.",
          "Watch GA4 conversion journeys to see whether the new answer appears before contact events or form fills."
        ]
      }
    ],
    links: [
      ["Crawl Analysis & Internal Linking", "/skills/crawl-analysis-internal-linking/", "Use this when crawl exports, orphaned pages, crawl paths, internal link modules, and semantic link support need implementation."],
      ["Technical SEO Implementation", "/services/technical-seo-implementation/", "Use this when topology findings need to become metadata, headings, redirects, schema, internal links, and site changes."],
      ["SEO Developer Help", "/services/technical-seo-developer/", "Use this when crawl topology findings need an SEO developer to turn internal-link, template, schema, redirect, and crawl recommendations into live site changes."],
      ["Production Debugging", "/skills/production-debugging/", "Use this when crawl findings need to be verified against real browser behavior, scripts, routes, forms, or production state."],
      ["Performance Engineering", "/skills/performance-engineering/", "Use this when topology findings overlap with script weight, rendering, layout shift, caching, or Core Web Vitals cleanup."],
      ["GA4/GTM Measurement Integrity", "/skills/ga4-gtm-measurement-integrity/", "Use this when the same user journey has to be verified in analytics events, conversions, and reports."],
      ["REST API & Webhook Integrations", "/skills/rest-api-webhook-integrations/", "Use this when forms, CRMs, dashboards, webhooks, and APIs need to line up with the page flow being measured."],
      ["WordPress Plugin Development", "/skills/wordpress-plugin-development/", "Use this when site-specific functionality or admin workflows need durable implementation instead of fragile snippets."],
      ["Schema & Structured Data", "/skills/schema-structured-data/", "Use this when topology findings need structured data that matches visible page content, services, FAQs, products, and templates."],
      ["Automation & Internal Tools", "/services/automation-internal-tools/", "Use this when repeated crawl checks, report comparisons, QA workflows, or link reviews should become an internal tool."],
      ["Analytics & Tracking", "/services/analytics-tracking/", "Use this when topology, search, scroll, click, form, and FAQ-question events need to be measured in the same user journey."],
      ["Website Data Troubleshooting", "/blog/website-data-systems-not-connecting/", "Use this when GA4, forms, CRMs, APIs, dashboards, and conversion records do not match the user's real path."],
      ["Tracking Scripts and Pixels", "/blog/tracking-scripts-pixels-broken/", "Use this when the crawl or conversion path depends on scripts, pixels, events, and browser behavior being trustworthy."],
      ["Site Speed and Performance Cleanup", "/services/site-speed-performance/", "Use this when crawl findings overlap with slow rendering, heavy scripts, Core Web Vitals, or template weight."],
      ["Security, Hosting & Reliability", "/services/security-hosting-reliability/", "Use this when redirects, cache, SSL, Cloudflare, hosting, uptime, or reliability problems affect crawl and measurement trust."],
      ["Ongoing Webmaster Support", "/services/ongoing-webmaster-support/", "Use this when topology checks, content updates, analytics QA, and recurring site maintenance need a steady implementation loop."]
    ],
    contextHeading: "Topology work connects to implementation work",
    contextIntro: "TopoRank points at the graph problem. These pages are where the recommendations usually become practical website changes.",
    contextCards: [
      ["Crawl Analysis & Internal Linking", "Use this for the core crawl topology work: weak internal link paths, orphaned pages, boilerplate-heavy support, and context-level link routing.", "/skills/crawl-analysis-internal-linking/", "View crawl analysis and internal linking support"],
      ["Technical SEO Implementation", "Use this when a topology report turns into implementation work: metadata, headings, schema, redirects, canonicals, crawl cleanup, and internal links.", "/services/technical-seo-implementation/", "View technical SEO implementation"],
      ["SEO Developer Help", "Use this when the topology report needs an SEO developer to make template, schema, redirect, crawl, and body-level internal-link changes on the live site.", "/services/technical-seo-developer/", "View SEO developer help"],
      ["Production Debugging", "Use this when topology issues need to be checked against live browser behavior, scripts, forms, route state, cache, and deployment reality.", "/skills/production-debugging/", "View production debugging support"],
      ["GA4/GTM Measurement Integrity", "Use this when the same flow must be mapped in analytics so content, clicks, form fills, and conversions match real user behavior.", "/skills/ga4-gtm-measurement-integrity/", "View GA4 and GTM measurement integrity"],
      ["Performance Engineering", "Use this when the crawl shows that slow scripts, rendering, third-party embeds, layout shift, or Core Web Vitals are part of the topology problem.", "/skills/performance-engineering/", "View performance engineering support"],
      ["WordPress Plugin Development", "Use this when stronger site architecture requires durable WordPress functionality, admin workflows, or custom link/content modules.", "/skills/wordpress-plugin-development/", "View WordPress plugin development support"],
      ["Schema & Structured Data", "Use this when topology work exposes schema output, FAQ markup, breadcrumbs, service data, or template-level structured data that needs to match the page.", "/skills/schema-structured-data/", "View schema and structured data support"],
      ["Automation & Internal Tools", "Use this when recurring crawl reviews, internal link checks, and topology reports should become repeatable tooling instead of one-off exports.", "/services/automation-internal-tools/", "View automation and internal tool support"],
      ["Analytics & Tracking", "Use this when the same content and conversion path needs GA4 events for search, scroll depth, link context, form fills, FAQ questions, and contact journeys.", "/services/analytics-tracking/", "View analytics and tracking support"],
      ["Ongoing Webmaster Support", "Use this when the topology loop becomes recurring site maintenance: publish, link, harvest, measure, answer questions, and improve the next weak page.", "/services/ongoing-webmaster-support/", "View ongoing webmaster support"]
    ],
    otherHeading: "Related technical SEO paths",
    otherIntro: "These pages cover the nearby work that usually follows a topology audit.",
    otherItems: [
      ["Technical SEO Implementation", "Turn audit and topology findings into real site changes.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Crawl Analysis & Internal Linking", "Find weak crawl paths, orphaned pages, and contextual link gaps.", "/skills/crawl-analysis-internal-linking/", "View crawl analysis", "technical-seo-implementation"],
      ["Programmatic SEO", "Design scalable pages without creating thin isolated URL sets.", "/skills/programmatic-seo/", "View programmatic SEO", "technical-seo-implementation"],
      ["GA4/GTM Measurement Integrity", "Verify whether the journey and conversion flow are measured correctly.", "/skills/ga4-gtm-measurement-integrity/", "View measurement integrity", "analytics-tracking"]
    ],
    faqs: [
      ["Is TopoRank just a keyword tool?", "No. It crawls the site, strips repeated template content, embeds main content, discovers semantic clusters, and scores whether URL structure and internal links support those clusters."],
      ["Why does boilerplate stripping matter?", "Global navigation, footer links, and repeated modules can make every page look more similar than it really is. Stripping boilerplate helps the tool analyze page-specific meaning."],
      ["Can a page have many links and still need support?", "Yes. A page can have many template links but weak contextual support. TopoRank separates raw link count from body-level semantic support."],
      ["Does a higher topology score guarantee rankings?", "No. It is a diagnostic signal for site structure, semantic alignment, and internal links. Rankings still depend on search demand, competition, content quality, technical health, and many external signals."]
    ],
    finalCta: {
      heading: "Need a crawl topology review?",
      copy: "Send the site, the crawl problem, or the pages that feel isolated. I can help turn topology findings into practical internal links, technical SEO edits, and implementation work.",
      label: "Send a Crawl Problem",
      secondaryLabel: "View Crawl Analysis",
      secondaryHref: "/skills/crawl-analysis-internal-linking/"
    }
  }
];

export const blogMap = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
export const blogCategoryMap = Object.fromEntries(blogCategoryDefinitions.map((category) => [category.slug, category]));
export const blogTagMap = Object.fromEntries(blogTagDefinitions.map((tag) => [tag.slug, tag]));

export const blogCategories = blogCategoryDefinitions.map((category) => ({
  ...category,
  posts: blogPosts.filter((post) => post.category === category.slug)
}));

export const blogTags = blogTagDefinitions.map((tag) => ({
  ...tag,
  posts: blogPosts.filter((post) => (post.tags || []).includes(tag.slug))
})).filter((tag) => tag.posts.length);

export function blogUrl(slug) {
  return `/blog/${slug}/`;
}

export function blogCategoryUrl(slug) {
  return `/blog/#category-${slug}`;
}

export function blogTagUrl(slug) {
  return `/blog/#tag-${slug}`;
}

export const somethingBrokePosts = blogPosts.filter((post) => post.problemType === "Something broke");
