<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { blogUrl, servicePages, serviceUrl, somethingBrokePosts } from "$lib/data/content.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { servicesHubProof } from "$lib/data/proof.js";
  import { breadcrumbSchema, schemaList, serviceCatalogFromPages, serviceListSchema } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Services", title: "Current page: Website services" }
  ];
  const seoSchema = schemaList(
    breadcrumbSchema(breadcrumbs, "/services/"),
    serviceCatalogFromPages(servicePages, "/services/"),
    serviceListSchema(servicePages, "/services/")
  );

  const painCards = [
    ["Something broke", "Start here when the issue is visible, urgent, or hard to explain: broken layouts, failed forms, mobile bugs, server trouble, tracking scripts, or plugin weirdness.", "/blog/something-broke-on-your-website/", "Diagnose a broken site"],
    ["SEO work is stuck", "Start here if you already have recommendations, audit notes, crawl output, schema notes, or a spreadsheet no one has implemented.", "/blog/seo-audit-done-now-implement-it/", "Move SEO work forward"],
    ["You need a page live", "Start here when you need a service page, campaign page, local SEO page, paid traffic page, form, CTA, or lightweight front-end build launched.", "/blog/need-a-page-live-fast/", "Plan the page"],
    ["Data or systems do not connect", "Start here when forms, GA4, GTM, ecommerce data, APIs, webhooks, CRM records, or dashboards do not match reality.", "/blog/website-data-systems-not-connecting/", "Trace the data flow"]
  ];

  const serviceHubLinks = [
    {
      label: "Fix path",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this when the site has visible bugs, CSS or JavaScript problems, broken forms, modals, embeds, scripts, or mobile layout issues."
    },
    {
      label: "WordPress path",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this when the work involves themes, child themes, plugins, Elementor, page builders, PHP templates, content updates, or cleanup."
    },
    {
      label: "SEO path",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when an audit, crawl export, schema note, redirect issue, heading cleanup, or internal link task needs implementation."
    },
    {
      label: "Launch path",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this for service pages, local pages, campaign pages, paid traffic pages, forms, CTAs, and tracking before launch."
    },
    {
      label: "Data path",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when GA4, GTM, pixels, form events, ecommerce measurement, or dashboard data needs to be checked and fixed."
    },
    {
      label: "Agency path",
      title: "Agency Overflow",
      href: "/services/agency-overflow/",
      copy: "Use this when a marketing, web, or SEO team needs production help across client site updates, QA, and implementation tasks."
    }
  ];
  const serviceHubContextualItems = serviceHubLinks.slice(0, 4).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the services hub`,
    copy: item.copy
  }));
  const coreServicePages = servicePages.filter((service) => service.showInHub !== false);
  const focusedSupportPages = servicePages.filter((service) => service.showInHub === false);
  const focusedSupportGroups = [
    ["WordPress support", focusedSupportPages.filter((service) => service.keywordCluster === "WordPress support")],
    ["Technical SEO", focusedSupportPages.filter((service) => service.keywordCluster === "Technical SEO")],
    ["Analytics and tracking", focusedSupportPages.filter((service) => service.keywordCluster === "Analytics and tracking")],
    ["Agency support", focusedSupportPages.filter((service) => service.keywordCluster === "Agency support")],
    ["Ecommerce support", focusedSupportPages.filter((service) => service.keywordCluster === "Ecommerce support")]
  ].filter(([, pages]) => pages.length);
  const serviceSummaryBullets = {
    "wordpress-support": ["Themes, plugins, page builders, and PHP templates", "Content updates, cleanup, and admin friction", "Useful when the site already exists"],
    "technical-seo-implementation": ["Audit notes, crawl exports, and SEO task lists", "Metadata, headings, redirects, schema, and internal links", "Implementation that can be tested on the site"],
    "landing-pages": ["Service, campaign, paid traffic, and local pages", "Forms, CTAs, tracking, and mobile checks", "Launch-focused structure without a rebuild"],
    "site-speed-performance": ["Images, scripts, cache, fonts, and layout shift", "WordPress, Shopify, static, and front-end cleanup", "Realistic performance improvements for important pages"],
    "website-fixes": ["Broken layouts, forms, scripts, modals, and embeds", "CSS, JavaScript, CMS, plugin, and hosting clues", "Start with the URL, symptom, and expected behavior"],
    "ai-built-website-cleanup": ["Generated pages that are close but not launch-ready", "Layout, SEO, tracking, forms, and deployment gaps", "Cleanup before more AI-generated changes pile up"],
    "agency-overflow": ["Client production work and QA cleanup", "SEO implementation, landing pages, tracking, and WordPress tasks", "A practical extra set of hands for busy teams"],
    "ecommerce-support": ["Shopify, WooCommerce, product pages, and checkout issues", "Product data, feeds, schema, and tracking cleanup", "Support for revenue-critical workflows"],
    "analytics-tracking": ["GA4, GTM, pixels, form events, and ecommerce data", "Conversion checks across forms, CTAs, phones, and dashboards", "Measurement that matches real user actions"],
    "api-integrations": ["REST APIs, webhooks, forms, CRMs, and ecommerce handoffs", "Payload testing, data cleanup, and error handling", "Useful when site systems need to connect"],
    "security-hosting-reliability": ["DNS, SSL, Cloudflare, hosting, cache, and redirects", "WordPress hardening, backups, and suspicious script cleanup", "Practical stability support, not broad security promises"],
    "automation-internal-tools": ["Crawlers, checkers, dashboards, CRON jobs, and scripts", "CSV, JSON, API, product data, and reporting cleanup", "Best when the task has repeatable inputs and outputs"],
    "ongoing-webmaster-support": ["Recurring updates, page edits, SEO tasks, and fixes", "Tracking, performance, WordPress, and reliability support", "A webmaster option without hiring full-time"],
    "react-static-sites": ["Static pages, React-style components, forms, and embeds", "JavaScript cleanup and responsive front-end fixes", "Lightweight builds when a full CMS is not needed"]
  };

  function summaryForService(service, label = service.eyebrow) {
    return {
      label,
      title: service.h1.replace(" at $55/hr", ""),
      copy: service.intro,
      bullets: serviceSummaryBullets[service.slug] || [
        service.keywordCluster || service.eyebrow,
        "Dedicated page for this narrower support request",
        "Routes back into the right core service path"
      ],
      href: serviceUrl(service.slug),
      linkLabel: `View ${service.eyebrow}`
    };
  }

  const coreServiceSummaryItems = coreServicePages.map((service) => summaryForService(service));
  const focusedSupportSummaryGroups = focusedSupportGroups.map(([group, pages]) => [
    group,
    pages.map((service) => summaryForService(service, group))
  ]);
  const symptomSummaryBullets = [
    "Name the symptom before choosing a service",
    "Collect URL, screenshot, device, and recent change details",
    "Route the issue into website fixes, WordPress, tracking, or front-end work"
  ];
  const brokenSymptomItems = somethingBrokePosts.slice(0, 6).map((post) => ({
    label: post.eyebrow,
    title: post.title.replace(" | The Web Guy", ""),
    copy: post.summary,
    bullets: symptomSummaryBullets,
    href: blogUrl(post.slug),
    linkLabel: `Read ${post.eyebrow.toLowerCase()}`
  }));
  const serviceHubInlineParagraphs = [
    [
      "Start with ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, failed forms, scripts, embeds, and visible bugs" },
      " when the issue is visible or urgent. Choose ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, Elementor, PHP, CSS, JavaScript, and cleanup" },
      " when the work is inside a CMS, theme, plugin stack, page builder, or content workflow."
    ],
    [
      "If the request comes from an audit, crawl report, schema task, redirect issue, or internal-link gap, use ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, schema, redirects, headings, crawl cleanup, and internal links" },
      ". If the work is a service page, local page, campaign page, paid traffic page, form, CTA, or launch task, start with ",
      { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for service pages, campaign pages, local pages, forms, CTAs, and tracking" },
      "."
    ]
  ];
  const serviceTableColumns = [
    { key: "service", label: "Service" },
    { key: "bestFor", label: "Best for" },
    { key: "inputs", label: "Helpful inputs" },
    { key: "deliverable", label: "Typical output" }
  ];
  const serviceRows = [
    {
      service: { text: "Website Fixes", href: "/services/website-fixes/" },
      bestFor: "Visible bugs, broken layouts, forms, scripts, embeds, and odd behavior",
      inputs: "URL, screenshot, browser/device, recent changes, expected behavior",
      deliverable: "Reproduced issue, fix path, implemented repair, or a clear technical next step"
    },
    {
      service: { text: "WordPress Support", href: "/services/wordpress-support/" },
      bestFor: "Themes, plugins, Elementor, PHP templates, page edits, and CMS cleanup",
      inputs: "Admin access notes, plugin/theme context, task list, affected pages",
      deliverable: "Safer updates, template cleanup, content fixes, and reduced CMS friction"
    },
    {
      service: { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/" },
      bestFor: "Crawl issues, schema, redirects, metadata, headings, and internal links",
      inputs: "Audit export, crawl notes, priority URLs, CMS limits, target recommendations",
      deliverable: "Implemented SEO changes that can be crawled, tested, and reviewed"
    },
    {
      service: { text: "Analytics & Tracking", href: "/services/analytics-tracking/" },
      bestFor: "GA4, GTM, form events, pixels, ecommerce data, and conversion verification",
      inputs: "Measurement plan, event list, current tags, sample conversions, access notes",
      deliverable: "Cleaner event tracking and documented user actions that match reports"
    },
    {
      service: { text: "Ecommerce Support", href: "/services/ecommerce-support/" },
      bestFor: "Shopify, WooCommerce, product data, checkout, product pages, and revenue tracking",
      inputs: "Platform, product URLs, checkout symptom, feed notes, tracking issue",
      deliverable: "Product/page fixes, data cleanup, and ecommerce measurement checks"
    },
    {
      service: { text: "Agency Overflow", href: "/services/agency-overflow/" },
      bestFor: "Client-site production, QA cleanup, implementation tasks, and busy teams",
      inputs: "Task queue, client constraints, deadlines, access process, review workflow",
      deliverable: "Completed production work with plain status updates and handoff notes"
    }
  ];
</script>

<Seo
  title="Website Services at $55/hr | The Web Guy"
  description="Explore contract website services from The Web Guy, including WordPress support, technical SEO implementation, landing pages, site speed, tracking, ecommerce, and agency overflow."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Contract website services"
    h1="Contract Website Services for WordPress, SEO, Tracking, and Site Fixes"
    intro="Practical contract web support at $55/hr for businesses, agencies, ecommerce stores, SEO teams, and overloaded marketing teams that need useful website work done."
    image={staticHeroImages.services}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <SectionHeading
      eyebrow="Website service routing"
      h2="Choose the website service closest to the actual problem"
      body="If you are not sure where the work fits, start with the problem. The categories below are here to help you route the request, not force you into a package."
    />
    <InternalLinkCopy paragraphs={serviceHubInlineParagraphs} />
    <SummaryLinkGrid items={coreServiceSummaryItems} />
    <SortableTable caption="Service comparison and handoff table" columns={serviceTableColumns} rows={serviceRows} />
  </section>

  <ProofPanel proof={servicesHubProof} />

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Focused support pages"
      h2="Specific website support paths by topical cluster"
      body="These narrower pages are useful for search and routing, but they stay visually secondary to the main service paths."
    />
    {#each focusedSupportSummaryGroups as [group, pages]}
      <SectionHeading eyebrow={group} h2={`${group} searches`} />
      <SummaryLinkGrid className="summary-link-grid summary-link-grid--compact" items={pages} />
    {/each}
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--medium">
    <SectionHeading eyebrow="Website problem routing" h2="Start with the website pain, not the service label" />
    <CardGrid
      className="card-grid compact-grid"
      items={painCards}
    />
  </section>

  <section class="section split-section section-effect section-effect--traces section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Broken-site handoffs"
        h2="Most website service requests start as a symptom"
        body="A broken page usually starts with Website Fixes, then moves into WordPress Support, production debugging, or reliability work once the cause is clear. SEO requests often begin with Technical SEO Implementation, then turn into schema, crawl cleanup, internal links, or ecommerce product data."
      />
      <a class="text-link" href="/services/website-fixes/" title="View website fixes for broken layouts, forms, scripts, embeds, and visible bugs">Start with website fixes</a>
    </div>
    <div>
      <SectionHeading
        eyebrow="Page launches and measurement"
        h2="New website work needs a working path"
        body="A page build is usually tied to Landing Pages, Analytics & Tracking, React/static front-end work, or API integrations. If an agency already owns strategy, Agency Overflow keeps production moving without turning every task into a full project."
      />
      <a class="text-link" href="/services/landing-pages/" title="View landing page support for service pages, campaign pages, forms, tracking, and launch work">Plan a page build</a>
    </div>
  </section>

  <ContextualSupport
    eyebrow="Website service starting points"
    heading="Primary website service paths from the services hub"
    intro="Start with these service paths when the problem is visible, technical, unfinished, or stuck between strategy and implementation."
    items={serviceHubContextualItems}
  />

  <TopicalLinks
    eyebrow="Website service routes"
    heading="Match the request to the page that can actually move it forward"
    intro="These are the strongest service paths for common website problems, from broken front-end behavior to SEO implementation, tracking, and agency overflow."
    items={serviceHubLinks}
  />

  <section class="section section-effect section-effect--traces section-effect--medium">
    <SectionHeading
      eyebrow="Broken website symptoms"
      h2="Pick the broken thing that sounds closest"
      body="If the issue is visible, urgent, or hard to explain, these posts help name the problem and route it to the right kind of website fix."
    />
    <SummaryLinkGrid className="summary-link-grid summary-link-grid--compact" items={brokenSymptomItems} />
  </section>

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading eyebrow="For agencies" h2="Overflow production without hiring full-time" body="Use The Web Guy for WordPress edits, SEO implementation, landing pages, QA cleanup, tracking fixes, ecommerce cleanup, and technical tasks when the team is overloaded." />
      <a class="text-link" href="/services/agency-overflow/" title="View agency overflow web support">View agency overflow</a>
    </div>
    <div>
      <SectionHeading eyebrow="For business owners" h2="A practical web helper for annoying site problems" body="Use hourly support when the website is broken, outdated, slow, hard to update, not tracking correctly, or sitting on a backlog of small-but-important tasks." />
      <a class="text-link" href="/rate/" title="View the $55/hr contract rate">See the $55/hr rate</a>
    </div>
  </section>

  <CtaBand heading="Not sure which service fits?" copy="Send the URL and the messy version of the problem. The right service category is usually obvious once the site is reviewed." label="Send the Website Problem" />

  <section class="section soft-section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading eyebrow="Ecommerce and platform work" h2="Shopify, WooCommerce, BigCommerce, APIs, and tracking" body="Platform support can include product data cleanup, Merchant Center, schema, Liquid/template fixes, checkout bugs, ecommerce tracking, APIs, webhooks, and performance cleanup." />
      <a class="text-link" href="/services/ecommerce-support/" title="View ecommerce website support">View ecommerce support</a>
    </div>
    <div class="rate-callout">
      <span>Contract rate</span>
      <strong>$55/hr</strong>
      <p>Clear hourly help for practical website work, technical cleanup, and support tasks.</p>
    </div>
  </section>
</main>
