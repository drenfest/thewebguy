import { mainPages, servicePages } from "../../../site-content.js";

export { mainPages, servicePages };

export const serviceMap = Object.fromEntries(servicePages.map((service) => [service.slug, service]));

export function serviceUrl(slug) {
  return `/services/${slug}/`;
}

export const faqs = [
  ["What do you charge?", "The Web Guy charges $55/hr for contract website help. The rate is a fit for quick fixes, small projects, ongoing webmaster support, SEO implementation, and agency overflow.", "/rate/"],
  ["Do you work with agencies?", "Yes. Agencies can use The Web Guy for WordPress production, SEO implementation, landing pages, QA cleanup, technical fixes, tracking, and overflow work.", "/services/agency-overflow/"],
  ["Do you work white-label?", "White-label friendly support can make sense for production tasks where expectations, access, communication, and ownership are clear.", "/services/agency-overflow/"],
  ["Do you work with WordPress?", "Yes. WordPress support includes themes, child themes, Elementor, page builders, plugins, PHP templates, CSS, JavaScript, SEO implementation, speed, and cleanup.", "/services/wordpress-support/"],
  ["Do you build WordPress plugins?", "Yes. Practical WordPress plugin work can support admin workflows, APIs, automation, custom functionality, and site-specific cleanup.", "/skills/wordpress-plugin-development/"],
  ["Do you work with Shopify?", "Yes, especially practical Shopify and Liquid support: templates, product pages, schema, tracking, storefront fixes, and ecommerce cleanup.", "/services/ecommerce-support/"],
  ["Do you work with Shopify Plus or Shopify Liquid?", "Yes. Shopify Plus and Liquid support can include storefront fixes, product templates, schema, tracking, and performance cleanup.", "/skills/shopify-plus-liquid/"],
  ["Do you work with WooCommerce?", "Yes. WooCommerce support fits under WordPress and ecommerce work, including plugin issues, product templates, tracking, speed, and technical cleanup.", "/services/ecommerce-support/"],
  ["Can you implement SEO audit recommendations?", "Yes. Send the audit notes, crawl output, or spreadsheet. The Web Guy can help turn recommendations into metadata, headings, redirects, schema, internal links, crawl fixes, and site changes.", "/services/technical-seo-implementation/"],
  ["Can you help with programmatic SEO?", "Yes. Programmatic SEO support can include scalable page structures, metadata patterns, internal links, schema, data cleanup, and crawl-aware implementation.", "/skills/programmatic-seo/"],
  ["Can you fix schema or structured data?", "Yes. Schema support fits technical SEO, ecommerce, product data, local/service pages, and implementation work.", "/services/technical-seo-implementation/"],
  ["Can you help with Google Merchant Center?", "Yes. Product data, schema, feed visibility, Shopify/WooCommerce/BigCommerce issues, and Merchant Center cleanup can be reviewed.", "/skills/google-merchant-center-product-data/"],
  ["Can you build landing pages?", "Yes. Landing pages can include service pages, local SEO pages, paid traffic pages, lead-gen pages, forms, tracking, CTAs, and SEO-friendly structure.", "/services/landing-pages/"],
  ["Can you fix site speed issues?", "Yes, with realistic expectations. Performance depends on hosting, themes, plugins, scripts, and business requirements. The work focuses on practical cleanup and improvement.", "/services/site-speed-performance/"],
  ["Can you troubleshoot Core Web Vitals?", "Yes. Core Web Vitals and Lighthouse notes can guide practical performance cleanup, but perfect scores should not be promised without reviewing platform limits.", "/skills/performance-engineering/"],
  ["Can you help with GA4 or Google Tag Manager?", "Yes. Analytics support includes GA4, Google Tag Manager, pixels, events, form tracking, conversion tracking, ecommerce events, and verification.", "/services/analytics-tracking/"],
  ["Can you verify tracking and data accuracy?", "Yes. Measurement integrity work checks what fires, where it fires, and whether the data matches actual site behavior.", "/skills/ga4-gtm-measurement-integrity/"],
  ["Can you connect APIs or webhooks?", "Yes. REST APIs, webhooks, forms, CRMs, ecommerce systems, Postman testing, and data handoff are a strong fit.", "/skills/rest-api-webhook-integrations/"],
  ["Can you fix forms, modals, embeds, and scripts?", "Yes. Those are common website-fix tasks, especially when they involve CSS, JavaScript, tracking, iframes, widgets, or CMS weirdness.", "/services/website-fixes/"],
  ["Do you offer monthly support?", "Yes. Ongoing webmaster support is available hourly for recurring updates, fixes, SEO tasks, tracking, cleanup, and technical site work.", "/services/ongoing-webmaster-support/"],
  ["Do you do design?", "The Web Guy can make pages cleaner, more usable, and conversion-focused, especially for service pages and landing pages. Full brand strategy from scratch is not the core offer.", "/services/landing-pages/"],
  ["How do I send a request?", "Use the contact page. Send the URL, what needs fixed or built, timeline, and whether it is one-time or ongoing.", "/contact/"],
  ["What happens after I contact you?", "The Web Guy reviews the request, asks any needed questions, identifies the best first move, and can start hourly work if the fit is clear.", "/contact/"]
];

export const practicalExamples = [
  ["SEO audit needs implemented", "Send the crawl notes, audit spreadsheet, or priority list. The work can move from recommendations into real site changes."],
  ["WordPress is messy", "Old themes, plugin bloat, Elementor spacing, mobile issues, mystery CSS, and tracking scripts in strange places."],
  ["Tracking cannot be trusted", "GA4 events are duplicated, form leads are not showing, pixels are missing, or campaign data is not lining up."],
  ["Landing page needs launched", "Service pages, local SEO pages, paid campaign pages, CTAs, forms, tracking, and mobile structure."],
  ["Ecommerce needs cleanup", "Shopify Liquid, WooCommerce, BigCommerce, product schema, Merchant Center, feeds, catalog data, and tracking."],
  ["Agency backlog is too full", "Page edits, production tasks, SEO implementation, technical QA, and client-site fixes without hiring full-time."]
];

export const blogPosts = [
  {
    slug: "something-broke-on-your-website",
    title: "Website Broke? Troubleshooting Help | The Web Guy",
    h1: "Something Broke on Your Website? Start With the Symptom, Not the Platform",
    meta: "Website layout broken, forms failing, checkout stuck, or WordPress acting weird? Learn what to check first and get hourly website fix help at $55/hr.",
    eyebrow: "Something broke",
    summary: "When a website breaks, the fastest path is not guessing the platform. It is describing the symptom, checking what changed, and tracing whether the problem is visual, functional, tracking-related, or server-side.",
    problemType: "Start here",
    relatedService: "website-fixes",
    heroCta: "Send the Website Problem",
    heroSecondary: "View Website Fixes",
    heroSecondaryHref: "/services/website-fixes/",
    cta: "Send the URL, what broke, and what should happen instead. The first useful move is usually easier to find once the symptom is clear.",
    intro: [
      "Most people search for WordPress help, web developer, or website bug help when what they actually have is a symptom. The page looks wrong. A button disappeared. A form says it submitted but no lead arrived. A mobile layout is doing something strange. Checkout is stuck. A page that worked yesterday suddenly does not load.",
      "That distinction matters because the platform name rarely tells you where the problem lives. A broken WordPress site might be a plugin conflict, a theme template issue, a cache problem, a JavaScript error, a DNS issue, or a third-party script changing behavior. A custom site can break for the same reasons. The label is less useful than the symptom.",
      "A good first pass does not require panic or a full rebuild. It starts with what changed, where the issue appears, whether it is visual or functional, and whether it affects revenue, leads, SEO pages, tracking, or trust. That is enough to decide whether this is a small fix, a platform issue, or something that needs deeper debugging."
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
          "Start with Website Fixes when the symptom is unclear or visible. Start with WordPress Support when the issue is clearly inside WordPress, a page builder, plugins, themes, or PHP/CSS/JavaScript. Start with Analytics & Tracking when the site works but the data cannot be trusted."
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
      ["AI-Built Website Cleanup", "Use this when the broken page or prototype came from an AI builder and now needs routing, code, deployment, tracking, forms, or SEO cleanup.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup"],
      ["WordPress Support", "Use this when the problem lives in WordPress, Elementor, a theme, a plugin update, PHP, page builder settings, or cached assets.", "/services/wordpress-support/", "View WordPress support for plugins, themes, Elementor, PHP, and site cleanup"],
      ["Security, Hosting & Reliability", "Use this when the symptom points to DNS, SSL, redirects, Cloudflare, cache, hosting, downtime, or server-level behavior.", "/services/security-hosting-reliability/", "View hosting, DNS, SSL, cache, and reliability support"],
      ["Analytics & Tracking", "Use this when the site looks okay but forms, GA4, GTM, pixels, conversion events, or CRM handoff cannot be trusted.", "/services/analytics-tracking/", "View analytics and tracking support for GA4, GTM, pixels, forms, and conversions"]
    ],
    otherHeading: "Not the broken-site problem you meant?",
    otherIntro: "These narrower notes route common symptoms into more specific fix paths.",
    otherItems: [
      ["Broken layouts or mobile issues", "Sections overlap, spacing shifts, buttons move, or the mobile view falls apart.", "/blog/broken-layouts-mobile-website-fixes/", "Read the layout post"],
      ["Forms and modals not working", "Interactive pieces stop working, tracking interferes, or third-party widgets behave strangely.", "/blog/forms-modals-not-working/", "Read the forms post"],
      ["Security, hosting, DNS, SSL, and cache", "The site is not loading, redirects loop, SSL warnings show, or Cloudflare/cache behavior is confusing.", "/services/security-hosting-reliability/", "View reliability support"],
      ["WordPress CMS, plugin, or theme weirdness", "Plugins, templates, page builders, updates, or WordPress admin behavior are part of the problem.", "/blog/cms-plugin-theme-weirdness/", "Read the WordPress post"]
    ],
    finalCta: {
      heading: "Need this fixed on a real site?",
      copy: "Send the URL, what broke, and what should happen instead. I will help trace the issue and tell you the next move.",
      label: "Send the Website Problem",
      secondaryLabel: "View Website Fixes",
      secondaryHref: "/services/website-fixes/"
    }
  },
  {
    slug: "seo-audit-done-now-implement-it",
    title: "SEO Audit Implementation Help | The Web Guy",
    h1: "Your SEO Audit Is Done. Now Someone Has to Actually Implement It.",
    meta: "Have SEO audit recommendations sitting in a spreadsheet? The Web Guy helps turn technical SEO notes into real website changes at $55/hr.",
    eyebrow: "SEO work is stuck",
    summary: "SEO recommendations do not help much while they sit in a spreadsheet. Technical SEO implementation turns crawl notes, audit tasks, internal link gaps, schema needs, and template fixes into real site changes.",
    problemType: "Start here",
    relatedService: "technical-seo-implementation",
    heroCta: "Send the SEO Audit",
    heroSecondary: "View SEO Implementation",
    heroSecondaryHref: "/services/technical-seo-implementation/",
    cta: "Send the audit, crawl notes, or spreadsheet. The goal is to turn useful recommendations into actual site changes.",
    intro: [
      "The SEO audit exists. The spreadsheet is full. The crawl export is sitting in a folder. Everyone agrees the recommendations matter, but the website does not change. Next month, the same items appear again.",
      "This is one of the most common places SEO gets stuck. Strategy is written by one person, the site is controlled by another system, the developer is busy, the CMS is messy, and the business owner does not know which recommendation is safe to touch first. The result is a list of good ideas with no implementation path.",
      "Technical SEO implementation is the bridge between the audit and the live website. It is not another strategy deck. It is the practical work of changing metadata, headings, templates, redirects, schema, internal links, tracking, crawl paths, product data, page structure, and CMS settings so the site actually reflects the recommendations."
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
          "WordPress SEO implementation often involves both content editing and technical cleanup. SEO plugins help, but they do not solve everything. A plugin can store metadata, generate XML sitemaps, manage redirects, or output schema, but the real site may still have broken headings, bloated builder sections, thin service pages, duplicate templates, or internal link gaps.",
          "Page builders add another layer. Elementor, blocks, shortcodes, theme templates, and plugin output can all shape what search engines and users see. A practical implementation pass works with the existing setup, cleans what can be cleaned, and avoids turning every recommendation into a redesign."
        ],
        listTitle: "WordPress tasks",
        checklist: ["SEO plugin settings", "Title tags and meta descriptions", "Heading cleanup", "Internal link edits", "Schema plugin or custom schema support", "Redirect plugin cleanup", "Theme or child-theme template updates", "Content formatting", "Elementor or page builder cleanup"]
      },
      {
        heading: "Ecommerce SEO implementation",
        body: [
          "Ecommerce SEO implementation has extra moving parts because product data, category structure, filters, tracking, schema, and feeds are connected. Product pages may need schema. Category pages may need better copy and internal links. Product attributes may affect Merchant Center visibility. Tracking may need to prove which pages and products actually convert.",
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
          "The Web Guy fits when the SEO work is already known but not implemented. That includes WordPress SEO fixes, ecommerce cleanup, schema and structured data, internal link updates, crawl issue cleanup, template edits, page structure changes, technical QA, and tracking verification.",
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
      ["Agency Overflow", "/services/agency-overflow/", "For agencies with SEO recommendations that need technical production help without hiring full-time."],
      ["Programmatic SEO", "/skills/programmatic-seo/", "For scalable page structures, metadata patterns, internal linking, data cleanup, and crawl-aware implementation."],
      ["Schema & Structured Data", "/skills/schema-structured-data/", "For structured data patterns across service pages, local pages, ecommerce pages, FAQs, products, and templates."],
      ["Crawl Analysis & Internal Linking", "/skills/crawl-analysis-internal-linking/", "For crawl exports, broken links, orphaned pages, crawl paths, internal link modules, and indexation cleanup."],
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
    heroCta: "Send the Page Request",
    heroSecondary: "View Landing Pages",
    heroSecondaryHref: "/services/landing-pages/",
    cta: "Need a page live? Send the goal, platform, deadline, and what the page needs to do.",
    intro: [
      "Someone needs a page live this week. That sounds simple until the request lands as build a landing page and nobody has defined what the page is supposed to accomplish.",
      "A landing page might be a paid traffic page, local SEO page, campaign page, service page, ecommerce promo page, lead magnet page, booking page, or lightweight React/static front-end build. Each one needs a different structure. A page built for search should not be treated the same as a paid ad page with tight message match. A local service page should not be a city-name swap with no useful context.",
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
          "WordPress pages are often the fastest path when the site already lives in WordPress and the team needs to keep editing content after launch. The build might use Elementor, blocks, custom fields, theme templates, shortcodes, forms, SEO plugins, or a child theme.",
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
          "Submit the form. Click the phone and email links. Check thank-you behavior. Confirm GA4 or GTM events if reporting matters. Verify UTM parameters and paid traffic landing URLs. If the page exists for lead generation, the lead flow needs to be tested end to end."
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
    h1: "Your Website Data Does Not Match Reality. Start by Mapping the Flow.",
    meta: "Forms, GA4, GTM, ecommerce revenue, APIs, or dashboards not matching reality? Learn how to trace the flow and get hourly help at $55/hr.",
    eyebrow: "Data does not connect",
    summary: "When forms, analytics, ecommerce revenue, APIs, dashboards, and CRMs disagree, the fix starts by tracing the data path from user action to final destination.",
    problemType: "Start here",
    relatedService: "analytics-tracking",
    heroCta: "Send the Tracking Problem",
    heroSecondary: "View Analytics Help",
    heroSecondaryHref: "/services/analytics-tracking/",
    cta: "Send the page, the action, and where the data is supposed to go. The work starts by tracing the broken step.",
    intro: [
      "Leads are missing. GA4 numbers look wrong. Google Tag Manager preview is confusing. Forms say they submitted, but no email arrived. Ecommerce revenue does not match the store. CRM records are incomplete. A dashboard says one thing and the platform says another.",
      "These problems are frustrating because nothing looks obviously broken at first. The page may load. The form may show a success message. The order may exist. The chart may refresh. But somewhere between the user action and the final report, one step is missing, duplicated, renamed, blocked, or misunderstood.",
      "The fastest way to troubleshoot website data is to map the flow. Start with the user action, identify every system that should receive or transform the data, then test each step. The problem might be a form plugin, GTM trigger, GA4 event name, webhook payload, ecommerce integration, consent setting, CRM field mapping, or reporting layer."
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
          "APIs and webhooks usually fail at the boundaries between systems. A form sends a payload, the receiving system expects a different shape, authentication expires, a required field is missing, the endpoint changes, or a rate limit blocks requests.",
          "Good troubleshooting checks payloads, responses, status codes, authentication, retries, logs, and whether failures are visible. Silent failures are the worst kind because the team only notices later when data is missing."
        ],
        listTitle: "Integration checks",
        checklist: ["Failed webhook delivery", "Bad payload format", "Authentication errors", "Rate limits", "Timeout issues", "Missing fields", "Incorrect endpoint", "No retry or logging", "Changed API version or field names"]
      },
      {
        heading: "When reporting dashboards cannot be trusted",
        body: [
          "Dashboards are only as reliable as their source data and definitions. A dashboard can be beautifully designed and still wrong if events are duplicated, source data is inconsistent, spreadsheets are manually edited, names are not standardized, or different systems define the same action differently.",
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
      ["AI-Built Website Cleanup", "/services/ai-built-website-cleanup/", "For AI-built forms, prototypes, apps, or landing pages where generated code skipped tracking, API handoffs, validation, or deployment details."],
      ["Ecommerce Support", "/services/ecommerce-support/", "For Shopify, WooCommerce, product data, purchase events, revenue mismatch, checkout tracking, and Merchant Center issues."],
      ["Automation & Internal Tools", "/services/automation-internal-tools/", "For practical workflows, dashboards, crawlers, checkers, scripts, and reporting helpers connected to website data."],
      ["GA4/GTM Measurement Integrity", "/skills/ga4-gtm-measurement-integrity/", "For trigger cleanup, event verification, conversion checks, duplicate tags, and reporting QA."],
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
    title: "Broken Website Layouts: What Usually Causes Them",
    meta: "Learn why website layouts break on desktop or mobile, including CSS conflicts, page builders, missing image dimensions, embeds, and theme changes.",
    eyebrow: "Broken layouts",
    summary: "Sections overlap, headers act strange, spacing disappears, or the mobile layout falls apart. Here is how those problems usually happen and what to check first.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    sections: [
      ["Common signs", "The page looks fine in one viewport but breaks in another, content overlaps, sticky headers cover sections, columns stack badly, buttons drift out of place, or images stretch beyond their container."],
      ["Likely causes", "Most broken layouts come from CSS conflicts, page builder spacing, missing responsive rules, oversized images, uncontained embeds, theme updates, plugin styles, or old custom code fighting newer content."],
      ["What to send", "Send the URL, device or browser where it breaks, a screenshot, what should happen instead, and whether a theme, plugin, page builder, or content update happened recently."],
      ["Practical fix path", "A useful fix usually starts by reproducing the issue, checking the element styles, isolating the rule or component causing the break, and then applying the smallest durable CSS, template, or builder-level change."]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/"],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/"],
      ["WordPress Support", "/services/wordpress-support/"],
      ["Front-End Help", "/services/react-static-sites/"]
    ],
    contextHeading: "Where broken layout work usually goes next",
    contextIntro: "Layout problems are usually visual symptoms with a technical cause. These paths cover the common places the fix lands after the broken section is reproduced.",
    contextCards: [
      ["Website Fixes", "Use this for overlapping sections, broken mobile layouts, drifting buttons, missing images, sticky header problems, and visible page bugs.", "/services/website-fixes/", "View website fixes for broken layouts and visible bugs"],
      ["AI-Built Cleanup", "Use this when the layout came from an AI-generated page, prototype, or app and needs responsive cleanup before launch.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for broken layouts"],
      ["WordPress Support", "Use this when the layout issue is tied to WordPress, Elementor, page builder spacing, theme updates, plugins, or cached CSS.", "/services/wordpress-support/", "View WordPress support for layout and builder issues"],
      ["React & Static Sites", "Use this when the fix needs front-end structure, component cleanup, responsive CSS, JavaScript behavior, or static page work.", "/services/react-static-sites/", "View React and static front-end support"],
      ["Production Debugging", "Use this when the layout bug needs browser inspection, console checks, CSS isolation, deployment review, or a careful production-safe fix.", "/skills/production-debugging/", "View production debugging support for website layout issues"]
    ]
  },
  {
    slug: "css-javascript-errors-website-bugs",
    title: "CSS and JavaScript Website Bugs: What to Check First",
    meta: "A practical guide to CSS and JavaScript website bugs, console errors, broken interactions, script conflicts, and front-end behavior that suddenly stops working.",
    eyebrow: "CSS and JavaScript",
    summary: "Menus stop opening, buttons do nothing, styles change unexpectedly, or interactive pieces work on one page and fail on another.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    sections: [
      ["Common signs", "Dropdowns do not open, sliders freeze, modals fail, buttons stop responding, CSS looks different after an update, or console errors appear when the broken feature loads."],
      ["Likely causes", "JavaScript bugs often come from duplicate libraries, plugin updates, script order, missing dependencies, third-party snippets, minification, cache issues, or code written for an old template."],
      ["What to send", "Send the page URL, the expected behavior, the broken behavior, recent changes, and screenshots or screen recordings if the bug is interaction-based."],
      ["Practical fix path", "The first step is usually browser console and network inspection, then isolating the failing script, confirming whether the bug is global or page-specific, and applying the smallest fix that does not break related behavior."]
    ],
    links: [
      ["Website Fixes", "/services/website-fixes/"],
      ["Production Debugging", "/skills/production-debugging/"],
      ["AI-Built Cleanup", "/services/ai-built-website-cleanup/"],
      ["Front-End Help", "/services/react-static-sites/"]
    ],
    contextHeading: "Use the right debugging lane for CSS and JavaScript bugs",
    contextIntro: "Front-end bugs can be visual, functional, script-related, or deployment-related. These pages route the issue based on what is actually failing in the browser.",
    contextCards: [
      ["Website Fixes", "Use this for broken menus, modals, buttons, CSS conflicts, page-specific bugs, and scripts that stop a normal site action.", "/services/website-fixes/", "View website fixes for CSS, JavaScript, menus, modals, and bugs"],
      ["Production Debugging", "Use this when the problem needs console errors, network checks, script isolation, cache review, or production-safe troubleshooting.", "/skills/production-debugging/", "View production debugging for CSS and JavaScript website bugs"],
      ["AI-Built Cleanup", "Use this when generated CSS, JavaScript, routing, components, or state logic are close but unreliable on the real site.", "/services/ai-built-website-cleanup/", "View AI-built website cleanup for CSS and JavaScript bugs"],
      ["React & Static Sites", "Use this when the bug lives in a component, static build, front-end route, JavaScript behavior, or lightweight site deployment.", "/services/react-static-sites/", "View React and static site front-end support"],
      ["WordPress Support", "Use this when CSS or JavaScript behavior is coming from a WordPress theme, plugin, page builder, shortcode, or injected script.", "/services/wordpress-support/", "View WordPress support for front-end bugs"]
    ]
  },
  {
    slug: "forms-modals-not-working",
    title: "Forms and Modals Not Working: Where Website Leads Disappear",
    meta: "Troubleshoot website forms, popups, modals, validation, redirects, notifications, hidden fields, and thank-you page issues.",
    eyebrow: "Forms and modals",
    summary: "The form submits but nobody gets the lead, validation fails, a popup will not open, or the thank-you flow no longer tracks correctly.",
    problemType: "Something broke",
    relatedService: "website-fixes",
    sections: [
      ["Common signs", "Leads never arrive, forms spin forever, validation blocks real users, modals do not open, hidden fields disappear, redirects fail, or the thank-you page does not load."],
      ["Likely causes", "Forms break because of plugin conflicts, changed field names, email delivery issues, spam filters, CRM/API failures, JavaScript errors, redirect changes, caching, or tracking scripts that were never updated after the form changed."],
      ["What to send", "Send the form URL, where submissions should go, a test submission time, screenshots, CRM or email destination notes, and whether the form uses WordPress, Shopify, a CRM embed, or a third-party service."],
      ["Practical fix path", "The work usually starts by testing the form, checking browser errors, reviewing notifications and redirects, confirming CRM or email handoff, and verifying whether conversion tracking still fires."]
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
    sections: [
      ["Common signs", "An embed is too wide on mobile, a calendar overlaps content, a video creates layout shift, a map slows the page, or a third-party widget blocks clicks or breaks scrolling."],
      ["Likely causes", "Third-party embeds often ship with fixed widths, heavy scripts, nested iframes, conflicting CSS, delayed loading, missing responsive wrappers, or vendor changes outside the site owner’s control."],
      ["What to send", "Send the URL, the embed provider, what the embed should do, where it fails, and whether the issue affects desktop, mobile, or both."],
      ["Practical fix path", "The fix may involve responsive wrappers, script placement, lazy-loading, vendor settings, CSS containment, replacement embeds, or removing duplicate scripts that load the same widget twice."]
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
    sections: [
      ["Common signs", "GA4 conversions are missing, GTM preview mode looks messy, events fire twice, ad platforms disagree with form submissions, or campaign landing pages do not show the actions that matter."],
      ["Likely causes", "Tracking breaks when forms change, thank-you pages disappear, scripts are duplicated, GTM containers overlap with hard-coded snippets, consent tools block tags, or ecommerce templates send incomplete data."],
      ["What to send", "Send the URL, the conversion or event that should be tracked, the platform involved, GTM/GA4 notes if available, and any recent form, landing page, theme, or checkout changes."],
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
    sections: [
      ["Common signs", "Admin settings do not match the front end, a plugin update changes behavior, a page builder adds strange spacing, a theme override is hard to find, or only one template acts broken."],
      ["Likely causes", "Existing sites collect layers: old theme code, child theme edits, plugin settings, builder markup, cache rules, custom snippets, tracking scripts, and undocumented fixes from previous work."],
      ["What to send", "Send the URL, CMS/platform, what changed recently, whether updates were run, screenshots of the issue, and any plugin/theme/builder names involved."],
      ["Practical fix path", "The useful path is to identify whether the problem is theme-level, plugin-level, builder-level, cache-related, or content-specific, then fix the narrowest layer possible before changing more of the site."]
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
    slug: "topological-relevance-vector-seo",
    title: "Topological Relevance and Vector SEO: A TopoRank Case Study",
    meta: "A technical case study on TopoRank, vector SEO, boilerplate stripping, URL hierarchy weighting, semantic clusters, and internal link topology using thewebguy.app crawl data.",
    h1: "Topological Relevance and Vector SEO: How TopoRank Maps Internal Link Weight",
    eyebrow: "TopoRank case study",
    heroImageSlug: "skill-crawl-analysis-internal-linking",
    summary: "A technical look at how TopoRank crawls a site, strips template noise, discovers semantic clusters, scores link support, and turns internal linking into a measurable optimization loop.",
    problemType: "Technical SEO systems",
    relatedService: "technical-seo-implementation",
    heroCta: "Send a Crawl Problem",
    heroSecondary: "View Crawl Analysis",
    heroSecondaryHref: "/skills/crawl-analysis-internal-linking/",
    intro: [
      "Most internal linking advice still sounds like a spreadsheet exercise: find a keyword, find a matching page, add an anchor, repeat until the export looks busy. That is not how modern retrieval systems understand a site. Search systems parse a website as a graph of documents, templates, topical neighborhoods, entity relationships, and semantic intent.",
      "TopoRank was built around that graph-shaped problem. It is a proprietary tool built and used by The Web Guy for crawl analysis, semantic topology review, internal link planning, and implementation QA. It does not begin with a static keyword list. It crawls the site, removes global boilerplate, embeds the remaining main content, discovers the semantic clusters that already exist, and then asks whether the physical URL structure and internal links support or contradict those clusters.",
      "The version shown here is the internal working dashboard, not a public SaaS product. A public-facing variant of TopoRank is expected in late 2026 or early 2027 after the reporting, permissions, project setup, export flows, and re-harvest workflow are packaged for outside users.",
      "The June 12, 2026 crawl of thewebguy.app produced the first useful proof point: 56 crawled pages, 2 discovered clusters, 69.7% average combined topology, 58.8% semantic resonance, 36 weak pages, 9 strong pages, and 448 suggested link opportunities. After the TopoRank update, a June 16 local re-harvest requested and retained 7 populated pillar profiles across 58 crawled pages, with 72.2% average combined topology, 61.5% semantic resonance, 27 weak pages, 11 strong pages, and 464 suggested link opportunities. The interesting part was not that the site had no links. It was that many links were template-heavy, so important pages needed more body-level support."
    ],
    sections: [
      {
        heading: "What TopoRank is today",
        body: [
          "TopoRank is currently an internal technical SEO and content topology workbench. The Web Guy uses it to crawl a site, queue and compare dated harvests, inspect page-level topology scores, review cluster placement, find weak contextual support, and test whether edits improve the site graph.",
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
          "The link graph then separates raw internal link count from weighted support. A footer link and a sentence-level link are both internal links, but they do not carry the same semantic signal. Body links surrounded by relevant language are more useful because they tell the crawler why the source page and target page belong near each other."
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
          "The inbound links are also intentional. Site speed, ongoing webmaster support, performance engineering, production debugging, and crawl analysis pages can all naturally reference the TopoRank workflow because those pages already talk about real site behavior, recurring QA, crawl paths, and technical cleanup."
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
          "The analytics work on the site turns this from a one-time internal-linking exercise into a feedback loop. Search input, scroll-section visibility, button clicks, navigation context, exit-intent responses, contact form fills, and FAQ questions can all become evidence about what visitors were trying to understand before they converted or left.",
          "That matters for TopoRank because visitor questions often reveal missing semantic bridges. If several people ask a question from a tracking page, the answer may belong as an FAQ on that page. If the question keeps appearing from multiple pages, it may deserve a full blog post with contextual links back into the pages where the question was asked.",
          "The choice between FAQ and blog post should be based on scope. A short clarification belongs on the page that produced the question. A repeated question that crosses GA4, forms, CRM handoff, search, crawl paths, or content architecture should become a deeper article that supports the whole cluster."
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

export function blogUrl(slug) {
  return `/blog/${slug}/`;
}

export const somethingBrokePosts = blogPosts.filter((post) => post.problemType === "Something broke");

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
    title: "WordPress Plugin Developer at $55/hr | The Web Guy",
    meta: "Get WordPress custom plugin development help for admin workflows, APIs, automation, data capture, integrations, and practical site-specific functionality.",
    h1: "WordPress Plugin Development at $55/hr",
    eyebrow: "WordPress Plugins",
    intro: "Custom WordPress plugin work for site-specific workflows, admin tools, data capture, API connections, automation, shortcodes, and functionality that does not belong hacked into a theme file.",
    problems: ["A plugin almost does what the site needs but not quite", "Admin workflows are manual or fragile", "Data needs to move between WordPress and another system", "Shortcodes or custom functionality are breaking", "Code is buried in theme files where it should not live"],
    tasks: ["Build small custom plugins", "Create admin workflow helpers", "Connect REST APIs and webhooks", "Add custom shortcodes or blocks where appropriate", "Clean up fragile theme-function code", "Debug plugin conflicts and data issues"],
    connection: "Plugin development connects directly to WordPress support, API integrations, automation, technical SEO, and ongoing webmaster support.",
    contextCards: [
      ["WordPress support", "Site-specific plugin work usually starts when ordinary WordPress support exposes admin, shortcode, data, or workflow gaps.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
      ["API integrations", "Custom plugins often need REST API calls, webhook handlers, payload cleanup, and reliable data handoff between tools.", "/services/api-integrations/", "View API integrations", "api-integrations"],
      ["Automation tools", "Internal WordPress admin helpers, dashboards, import tools, and recurring checks can become lightweight automation work.", "/services/automation-internal-tools/", "View automation help", "automation-internal-tools"],
      ["Theme development", "If the plugin touches front-end output, templates, shortcodes, or layout behavior, theme support may be part of the same fix.", "/skills/wordpress-theme-development/", "View theme help", "wordpress-support"]
    ],
    relatedServices: ["wordpress-support", "api-integrations", "automation-internal-tools", "technical-seo-implementation"],
    relatedSkills: ["php-javascript-node", "rest-api-webhook-integrations", "automation-dashboards-reporting", "wordpress-theme-development"],
    faqs: [
      ["Do you build large commercial plugins?", "The best fit is practical site-specific plugin work, internal tooling, workflow fixes, and integration support."],
      ["Can plugin code connect to APIs?", "Yes. REST APIs, webhooks, JSON payloads, and WordPress-side data handling are a strong fit."],
      ["Can you fix existing plugin issues?", "Yes. Conflicts, errors, broken admin behavior, and fragile custom code can be inspected."],
      ["Why not put code in functions.php?", "Small snippets can be fine, but durable site-specific functionality often belongs in a small plugin."]
    ]
  },
  {
    slug: "wordpress-theme-development",
    title: "WordPress Theme Development Contractor | The Web Guy",
    meta: "Get WordPress theme and child theme development help for PHP templates, CSS, JavaScript, Elementor cleanup, mobile layouts, SEO structure, and page updates.",
    h1: "WordPress Theme Development at $55/hr",
    eyebrow: "WordPress Themes",
    intro: "WordPress theme and child theme support for template edits, layout cleanup, Elementor/page builder fixes, mobile issues, PHP templates, CSS, JavaScript, and SEO-friendly page structure.",
    problems: ["Theme templates are outdated or hard to edit", "Mobile layouts break after content changes", "Elementor or builder spacing is a mess", "SEO recommendations require template-level changes", "Tracking scripts and embeds are scattered through the theme"],
    tasks: ["Edit PHP templates and child themes", "Clean up CSS and JavaScript behavior", "Fix mobile layouts and builder spacing", "Improve heading and content structure", "Add or clean up embeds and tracking snippets", "Support WordPress page and content updates"],
    connection: "Theme work supports WordPress support, landing pages, technical SEO implementation, site speed cleanup, and website fixes.",
    contextCards: [
      ["WordPress support", "Theme and child theme edits are usually part of practical WordPress support for existing sites.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
      ["Landing pages", "Service pages, campaign pages, and local pages often need theme-level layout cleanup before they can launch cleanly.", "/services/landing-pages/", "View landing page help", "landing-pages"],
      ["Technical SEO", "Template headings, internal links, schema placement, and crawlable structure often connect theme work to SEO implementation.", "/services/technical-seo-implementation/", "View technical SEO", "technical-seo-implementation"],
      ["Website fixes", "Broken mobile layouts, CSS conflicts, JavaScript behavior, and builder spacing often show up first as visible website fixes.", "/services/website-fixes/", "View website fixes", "website-fixes"]
    ],
    relatedServices: ["wordpress-support", "landing-pages", "technical-seo-implementation", "website-fixes"],
    relatedSkills: ["wordpress-plugin-development", "performance-engineering", "schema-structured-data", "php-javascript-node"],
    faqs: [
      ["Can you work with child themes?", "Yes. Child theme edits, template overrides, and safer theme-level changes are a good fit."],
      ["Can you clean up Elementor pages?", "Yes. Builder spacing, mobile layout problems, duplicated sections, and content cleanup fit this work."],
      ["Can theme work help SEO?", "Yes. Headings, template markup, internal links, schema placement, and page structure often affect SEO implementation."],
      ["Do you rebuild entire themes?", "The usual fit is practical theme support and cleanup. Full rebuilds can be scoped if there is a clear need."]
    ]
  },
  {
    slug: "performance-engineering",
    title: "Website Performance Engineering Support | The Web Guy",
    meta: "Get practical website performance engineering support for slow pages, script bloat, caching, layout shift, WordPress performance, and platform speed issues.",
    h1: "Website Performance Engineering at $55/hr",
    eyebrow: "Performance Engineering",
    intro: "Performance support for sites slowed down by scripts, plugins, oversized assets, layout shift, caching problems, hosting limits, front-end weight, and platform decisions that need a practical review.",
    problems: ["Pages feel slow even when hosting seems fine", "Lighthouse points to scripts, images, or layout shift", "Plugins and third-party tools are bloating WordPress", "Shopify or ecommerce pages are overloaded", "Caching is helping some pages and breaking others"],
    tasks: ["Review script and plugin bloat", "Clean up images and front-end assets", "Investigate layout shift", "Review caching and Cloudflare behavior", "Improve WordPress performance where practical", "Explain what cannot be fixed without larger platform changes"],
    connection: "Performance engineering supports site speed cleanup, WordPress support, ecommerce support, platform reliability, and Core Web Vitals work.",
    contextCards: [
      ["Site speed cleanup", "Performance engineering is the deeper skill behind practical speed cleanup for slow pages, heavy scripts, and layout shift.", "/services/site-speed-performance/", "View speed cleanup", "site-speed-performance"],
      ["WordPress support", "Plugin bloat, page builders, images, caching, and theme output often make performance work a WordPress support issue.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
      ["Ecommerce support", "Product pages, collection pages, apps, tracking, and media-heavy templates can make ecommerce performance especially fragile.", "/services/ecommerce-support/", "View ecommerce support", "ecommerce-support"],
      ["Cloudflare and DNS", "Caching, proxy behavior, SSL settings, headers, and hosting limits often affect whether performance fixes stick.", "/skills/cloudflare-dns-ssl/", "View Cloudflare help", "security-hosting-reliability"]
    ],
    relatedServices: ["site-speed-performance", "wordpress-support", "ecommerce-support", "security-hosting-reliability"],
    relatedSkills: ["core-web-vitals-lighthouse", "platform-reliability", "cloudflare-dns-ssl", "production-debugging"],
    faqs: [
      ["Can you guarantee perfect speed scores?", "No. Performance depends on hosting, themes, plugins, scripts, and business requirements. The work focuses on practical improvement."],
      ["Can you work from Lighthouse notes?", "Yes. Lighthouse and PageSpeed reports are useful diagnostics when paired with actual site inspection."],
      ["Can third-party scripts be fixed?", "Some can be deferred, cleaned up, or moved. Some are business requirements and need tradeoffs explained."],
      ["Does performance work help SEO?", "It can support SEO and conversions, especially when slow pages, layout shift, and poor mobile UX are part of the problem."]
    ]
  },
  {
    slug: "production-debugging",
    title: "Production Website Debugging Contractor | The Web Guy",
    meta: "Get production website debugging help for broken layouts, scripts, forms, APIs, tracking, CMS issues, integrations, and unstable website behavior.",
    h1: "Production Website Debugging at $55/hr",
    eyebrow: "Production Debugging",
    intro: "Debugging support for real websites when something is broken, weird, unstable, or hard to trace across the CMS, front end, scripts, APIs, hosting, tracking, and third-party tools.",
    problems: ["A form submits but leads do not arrive", "A script works on one page and fails on another", "An API or webhook changed behavior", "Tracking is missing or duplicated", "A CMS update broke visible layouts"],
    tasks: ["Inspect browser console and network errors", "Trace form and script behavior", "Test API payloads in Postman", "Review CMS/theme/plugin interactions", "Check tracking events and pixels", "Document what changed and what still needs attention"],
    connection: "Production debugging supports website fixes, API integrations, analytics cleanup, security/hosting reliability, and agency overflow work.",
    contextCards: [
      ["Website fixes", "Visible bugs, broken layouts, failed forms, and script conflicts usually need production debugging before the fix is obvious.", "/services/website-fixes/", "View website fixes", "website-fixes"],
      ["AI-built cleanup", "Generated sites and vibe-coded apps often need production debugging when the live deploy, routing, forms, APIs, tracking, or environment variables fail.", "/services/ai-built-website-cleanup/", "View AI-built cleanup", "website-fixes"],
      ["API integrations", "Payload errors, failed webhooks, bad responses, and missing logs often connect debugging to integration work.", "/services/api-integrations/", "View API integrations", "api-integrations"],
      ["Analytics and tracking", "Missing events, duplicate tags, broken pixels, and unreliable form data often need debugging inside the live page flow.", "/services/analytics-tracking/", "View tracking support", "analytics-tracking"],
      ["Reliability support", "Redirect loops, SSL issues, cache behavior, and hosting errors can make a production bug a stability problem.", "/services/security-hosting-reliability/", "View reliability support", "security-hosting-reliability"]
    ],
    relatedServices: ["website-fixes", "ai-built-website-cleanup", "api-integrations", "analytics-tracking", "security-hosting-reliability"],
    relatedSkills: ["rest-api-webhook-integrations", "ga4-gtm-measurement-integrity", "php-javascript-node", "platform-reliability"],
    faqs: [
      ["What should I send for debugging?", "Send the URL, what should happen, what happens instead, screenshots if useful, and what changed recently."],
      ["Can you debug live production issues?", "Yes, when access and scope are clear. Some urgent work depends on availability."],
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
    title: "API & Webhook Integration Contractor | The Web Guy",
    meta: "Get REST API and webhook integration help for forms, CRMs, CMS platforms, ecommerce systems, background jobs, Postman testing, and data cleanup.",
    h1: "REST API & Webhook Integrations at $55/hr",
    eyebrow: "APIs & Webhooks",
    intro: "API and webhook support for websites that need to connect forms, CRMs, CMS platforms, ecommerce systems, data workflows, background jobs, and automation without becoming fragile.",
    problems: ["A webhook is firing but the receiving system is failing", "A form needs to send lead data somewhere useful", "API payloads need tested before launch", "Product or customer data needs cleanup", "Background jobs fail silently"],
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

export const locationPages = [
  {
    slug: "freeport-il",
    city: "Freeport",
    state: "IL",
    region: "Illinois",
    title: "Local Website Support in Freeport, IL | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Freeport, IL businesses at $55/hr.",
    context: [
      "Freeport-area businesses often need practical website support without hiring a full agency or full-time developer. Local service companies, shops, contractors, nonprofits, organizations, and regional businesses all run into the same problem: the site needs work, but nobody has time to touch it.",
      "The Web Guy provides remote-friendly and local-friendly contract help near Freeport for WordPress updates, broken forms, slow pages, tracking fixes, landing pages, technical SEO implementation, and ongoing webmaster support."
    ],
    tasks: ["Update local service pages", "Fix broken WordPress layouts", "Clean up slow pages", "Add tracking to contact forms", "Handle monthly website updates", "Stabilize DNS, SSL, Cloudflare, or hosting issues"],
    relatedServices: ["wordpress-support", "website-fixes", "technical-seo-implementation", "ongoing-webmaster-support"],
    relatedSkills: ["wordpress-theme-development", "ga4-gtm-measurement-integrity", "cloudflare-dns-ssl"],
    nearby: ["rockford-il", "monroe-wi", "dixon-il", "galena-il"]
  },
  {
    slug: "rockford-il",
    city: "Rockford",
    state: "IL",
    region: "Illinois",
    title: "Local Website Support in Rockford, IL | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Rockford, IL businesses at $55/hr.",
    context: [
      "Rockford has a larger regional business market, which means more competition for service pages, local SEO visibility, lead flow, tracking accuracy, and fast mobile pages.",
      "The Web Guy can support Rockford-area service businesses, manufacturers, healthcare-adjacent organizations, contractors, nonprofits, ecommerce stores, and agencies that need overflow web production without adding a full-time role."
    ],
    tasks: ["Implement SEO audit recommendations", "Build landing pages for service campaigns", "Fix WordPress and plugin issues", "Verify GA4 and GTM tracking", "Clean up ecommerce templates or product data", "Handle agency overflow production tasks"],
    relatedServices: ["agency-overflow", "technical-seo-implementation", "landing-pages", "analytics-tracking"],
    relatedSkills: ["programmatic-seo", "ga4-gtm-measurement-integrity", "production-debugging"],
    nearby: ["freeport-il", "loves-park-il", "belvidere-il", "janesville-wi"]
  },
  {
    slug: "monroe-wi",
    city: "Monroe",
    state: "WI",
    region: "Wisconsin",
    title: "Local Website Support in Monroe, WI | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Monroe, WI businesses at $55/hr.",
    context: [
      "Monroe-area businesses often need dependable remote website support for WordPress updates, content changes, ecommerce cleanup, and service-page improvements.",
      "For regional service companies, professional services, shops, and ecommerce sellers, hourly support can be more practical than waiting on a large agency process."
    ],
    tasks: ["Clean up WordPress pages", "Improve local service page structure", "Fix forms and lead tracking", "Review ecommerce product data", "Add campaign landing pages", "Troubleshoot slow or outdated pages"],
    relatedServices: ["wordpress-support", "ecommerce-support", "analytics-tracking", "landing-pages"],
    relatedSkills: ["shopify-plus-liquid", "wordpress-theme-development", "ga4-gtm-measurement-integrity"],
    nearby: ["freeport-il", "beloit-wi", "janesville-wi", "new-glarus-wi"]
  },
  {
    slug: "beloit-wi",
    city: "Beloit",
    state: "WI",
    region: "Wisconsin",
    title: "Local Website Support in Beloit, WI | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Beloit, WI businesses at $55/hr.",
    context: [
      "Beloit businesses near the Illinois/Wisconsin line may need web support across service-area pages, ecommerce, trades, manufacturing-adjacent companies, and local lead generation.",
      "The Web Guy can help with practical technical work: fixing broken pages, cleaning up tracking, improving speed, updating WordPress, and supporting local or regional campaigns."
    ],
    tasks: ["Fix contact forms and scripts", "Clean up WordPress content", "Build service-area landing pages", "Debug ecommerce or checkout issues", "Review GA4/GTM events", "Handle ongoing website updates"],
    relatedServices: ["website-fixes", "wordpress-support", "analytics-tracking", "ecommerce-support"],
    relatedSkills: ["production-debugging", "ga4-gtm-measurement-integrity", "shopify-plus-liquid"],
    nearby: ["rockford-il", "south-beloit-il", "janesville-wi", "monroe-wi"]
  },
  {
    slug: "janesville-wi",
    city: "Janesville",
    state: "WI",
    region: "Wisconsin",
    title: "Local Website Support in Janesville, WI | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Janesville, WI businesses at $55/hr.",
    context: [
      "Janesville has enough regional competition that outdated pages, broken tracking, slow templates, and weak technical SEO can quietly cost businesses leads.",
      "The Web Guy supports Janesville-area service businesses, ecommerce stores, agencies, professional services, and organizations that need technical website work handled hourly."
    ],
    tasks: ["Implement technical SEO tasks", "Improve landing page tracking", "Fix WordPress layouts", "Clean up slow scripts", "Support agency overflow", "Review product schema or Merchant Center issues"],
    relatedServices: ["technical-seo-implementation", "site-speed-performance", "agency-overflow", "ecommerce-support"],
    relatedSkills: ["programmatic-seo", "performance-engineering", "google-merchant-center-product-data"],
    nearby: ["beloit-wi", "madison-wi", "rockford-il", "monroe-wi"]
  },
  {
    slug: "dixon-il",
    city: "Dixon",
    state: "IL",
    region: "Illinois",
    title: "Local Website Support in Dixon, IL | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Dixon, IL businesses at $55/hr.",
    context: [
      "Dixon-area businesses, professional services, healthcare/service providers, contractors, and local organizations often need steady website support more than a large redesign.",
      "The Web Guy can help keep existing sites useful with page edits, WordPress fixes, form troubleshooting, SEO implementation, speed cleanup, and ongoing webmaster support."
    ],
    tasks: ["Update service and staff pages", "Fix WordPress plugin conflicts", "Add tracking to quote or contact forms", "Clean up old pages", "Improve mobile layouts", "Handle monthly website support"],
    relatedServices: ["ongoing-webmaster-support", "wordpress-support", "website-fixes", "technical-seo-implementation"],
    relatedSkills: ["wordpress-theme-development", "production-debugging", "ga4-gtm-measurement-integrity"],
    nearby: ["sterling-il", "rock-falls-il", "freeport-il", "oregon-il"]
  },
  {
    slug: "sterling-il",
    city: "Sterling",
    state: "IL",
    region: "Illinois",
    title: "Local Website Support in Sterling, IL | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Sterling, IL businesses at $55/hr.",
    context: [
      "Sterling-area companies often need practical support for older WordPress sites, service pages, ecommerce cleanup, local campaigns, and technical maintenance.",
      "Hourly help works well when the site needs consistent updates, tracking fixes, broken layout repair, performance cleanup, or technical SEO work without a full agency package."
    ],
    tasks: ["Fix slow WordPress pages", "Add or update local service pages", "Troubleshoot forms and modals", "Clean up ecommerce product pages", "Implement redirects and metadata", "Review DNS, SSL, or hosting issues"],
    relatedServices: ["wordpress-support", "site-speed-performance", "ecommerce-support", "security-hosting-reliability"],
    relatedSkills: ["performance-engineering", "cloudflare-dns-ssl", "google-merchant-center-product-data"],
    nearby: ["dixon-il", "rock-falls-il", "freeport-il", "polo-il"]
  },
  {
    slug: "galena-il",
    city: "Galena",
    state: "IL",
    region: "Illinois",
    title: "Local Website Support in Galena, IL | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Galena, IL businesses at $55/hr.",
    context: [
      "Galena businesses often depend on mobile visitors, seasonal traffic, booking or lead flow, local search visibility, and pages that explain services clearly.",
      "The Web Guy can help tourism, hospitality, retail, appointment-based businesses, and local service companies with landing pages, tracking, WordPress cleanup, technical SEO, and mobile UX fixes."
    ],
    tasks: ["Build seasonal landing pages", "Improve mobile page structure", "Fix booking or contact form issues", "Add GA4/GTM tracking", "Clean up local SEO pages", "Review site speed for mobile visitors"],
    relatedServices: ["landing-pages", "analytics-tracking", "technical-seo-implementation", "site-speed-performance"],
    relatedSkills: ["ga4-gtm-measurement-integrity", "performance-engineering", "programmatic-seo"],
    nearby: ["freeport-il", "dubuque-ia", "platteville-wi", "stockton-il"]
  },
  {
    slug: "dubuque-ia",
    city: "Dubuque",
    state: "IA",
    region: "Iowa",
    title: "Local Website Support in Dubuque, IA | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Dubuque, IA businesses at $55/hr.",
    context: [
      "Dubuque businesses compete across service, tourism, ecommerce, professional services, and regional lead generation. That makes technical website work more than a nice-to-have.",
      "The Web Guy can support Dubuque-area companies and agencies with WordPress support, ecommerce cleanup, technical SEO implementation, tracking verification, landing pages, and production debugging."
    ],
    tasks: ["Implement SEO audit notes", "Fix tracking and form issues", "Clean up ecommerce templates", "Build campaign landing pages", "Review schema and product data", "Handle agency overflow tasks"],
    relatedServices: ["technical-seo-implementation", "ecommerce-support", "analytics-tracking", "agency-overflow"],
    relatedSkills: ["programmatic-seo", "google-merchant-center-product-data", "production-debugging"],
    nearby: ["galena-il", "platteville-wi", "maquoketa-ia", "freeport-il"]
  },
  {
    slug: "madison-wi",
    city: "Madison",
    state: "WI",
    region: "Wisconsin",
    title: "Local Website Support in Madison, WI | The Web Guy",
    meta: "The Web Guy provides hourly WordPress support, website fixes, technical SEO implementation, landing pages, and webmaster help for Madison, WI businesses at $55/hr.",
    context: [
      "Madison is a more competitive web market, which means professional services, startups, ecommerce sellers, nonprofits, agencies, and local companies often need better technical execution behind their content and campaigns.",
      "The Web Guy can help Madison-area teams with SEO implementation, landing pages, tracking integrity, automation, API connections, performance cleanup, and practical platform support."
    ],
    tasks: ["Build tracked landing pages", "Verify GA4/GTM data", "Create automation helpers", "Implement technical SEO changes", "Debug APIs or webhooks", "Improve performance and Core Web Vitals signals"],
    relatedServices: ["landing-pages", "analytics-tracking", "automation-internal-tools", "api-integrations"],
    relatedSkills: ["ga4-gtm-measurement-integrity", "rest-api-webhook-integrations", "performance-engineering"],
    nearby: ["janesville-wi", "middleton-wi", "fitchburg-wi", "verona-wi"]
  }
];

export const locationMap = Object.fromEntries(locationPages.map((location) => [location.slug, location]));

export function locationUrl(slug) {
  return `/locations/${slug}/`;
}
