<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import ProofReel from "$lib/components/ProofReel.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { faqs } from "$lib/data/faqs.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { locationPages, locationUrl } from "$lib/data/locations.js";
  import { breadcrumbSchema, faqSchema, organizationSchema, schemaList, serviceCatalogFromPages, websiteSchema } from "$lib/data/schema.js";
  import { coreServicePages, serviceUrl } from "$lib/data/services.js";

  const breadcrumbs = [{ label: "Home", title: "Current page: The Web Guy homepage" }];
  const servicePages = coreServicePages;
  const homepageFaqs = faqs.slice(0, 6);
  const homepageSchemaServiceSlugs = new Set([
    "website-fixes",
    "wordpress-support",
    "technical-seo-implementation",
    "landing-pages",
    "analytics-tracking",
    "ecommerce-support"
  ]);
  const homepageSchemaServices = servicePages.filter((service) => homepageSchemaServiceSlugs.has(service.slug));
  const homeSchema = schemaList(
    organizationSchema(),
    websiteSchema(),
    serviceCatalogFromPages(homepageSchemaServices, "/"),
    breadcrumbSchema(breadcrumbs, "/"),
    faqSchema(homepageFaqs)
  );

  const serviceBySlug = Object.fromEntries(servicePages.map((service) => [service.slug, service]));
  const primaryServiceSummaries = [
    ["website-fixes", ["Visible bugs and broken page behavior", "CSS, JavaScript, forms, modals, and embeds", "A clear path from symptom to fix"]],
    ["wordpress-support", ["Theme, plugin, and page-builder cleanup", "Content, template, CSS, JavaScript, and PHP tasks", "Useful help for existing WordPress sites"]],
    ["technical-seo-implementation", ["Audit notes turned into site changes", "Metadata, headings, redirects, schema, and internal links", "Implementation support for SEO teams and site owners"]],
    ["landing-pages", ["Service, campaign, local, and paid traffic pages", "Forms, CTAs, mobile checks, and launch support", "Tracking and SEO structure before the page goes live"]],
    ["analytics-tracking", ["GA4, GTM, pixels, and conversion events", "Form, phone-click, ecommerce, and CRM handoff checks", "Cleaner reports tied to real user actions"]],
    ["ecommerce-support", ["Shopify, WooCommerce, product pages, and checkout issues", "Product data, feeds, schema, and tracking cleanup", "Practical support for revenue-critical pages"]]
  ]
    .map(([slug, bullets]) => {
      const service = serviceBySlug[slug];
      if (!service) return null;

      return {
        label: service.eyebrow,
        title: service.h1.replace(" at $55/hr", ""),
        copy: service.intro,
        bullets,
        href: serviceUrl(service.slug),
        linkLabel: `View ${service.eyebrow}`
      };
    })
    .filter(Boolean);

  const problemCards = [
    {
      label: "Something broke",
      title: "A page, form, layout, script, or checkout stopped working",
      copy: "Start with the symptom, what changed, and what should happen instead.",
      href: "/blog/something-broke-on-your-website/"
    },
    {
      label: "SEO is stuck",
      title: "The audit is done, but the website still needs an SEO developer",
      copy: "Turn crawl notes, headings, schema, redirects, and internal links into real site changes.",
      href: "/blog/seo-audit-done-now-implement-it/"
    },
    {
      label: "Need a page live",
      title: "A service, campaign, local, or landing page needs to launch",
      copy: "Build the page, wire up the CTA, check mobile, and verify tracking.",
      href: "/blog/need-a-page-live-fast/"
    },
    {
      label: "Data does not connect",
      title: "Forms, GA4, GTM, ecommerce, APIs, or dashboards disagree",
      copy: "Trace the flow from user action to CRM, analytics, webhook, or report.",
      href: "/blog/website-data-systems-not-connecting/"
    },
    {
      label: "Site is slow",
      title: "Pages feel heavy, unstable, or held back by scripts and plugins",
      copy: "Find practical speed cleanup without pretending every platform can score perfectly.",
      href: "/services/site-speed-performance/"
    },
    {
      label: "Ongoing web help",
      title: "The site needs steady updates, fixes, cleanup, and support",
      copy: "Use hourly contract help for the tasks that keep getting pushed off.",
      href: "/services/ongoing-webmaster-support/"
    }
  ];

  const serviceClusters = [
    {
      label: "Fix & stabilize",
      title: "Broken layouts, WordPress issues, hosting, DNS, SSL, cache, and production bugs.",
      links: [["Website Fixes", "/services/website-fixes/"], ["WordPress Support", "/services/wordpress-support/"], ["Reliability", "/services/security-hosting-reliability/"]]
    },
    {
      label: "Build & update",
      title: "Landing pages, service pages, local pages, content cleanup, static pages, and recurring updates.",
      links: [["Landing Pages", "/services/landing-pages/"], ["React / Static Sites", "/services/react-static-sites/"], ["Webmaster Support", "/services/ongoing-webmaster-support/"]]
    },
    {
      label: "SEO & visibility",
      title: "Audit implementation, schema, internal links, page structure, product data, and crawl cleanup.",
      links: [["Technical SEO", "/services/technical-seo-implementation/"], ["SEO Developer", "/services/technical-seo-developer/"], ["Schema", "/skills/schema-structured-data/"], ["Crawl & Links", "/skills/crawl-analysis-internal-linking/"]]
    },
    {
      label: "Track, connect & automate",
      title: "GA4, GTM, forms, pixels, APIs, webhooks, dashboards, product data, and internal tools.",
      links: [["Analytics & Tracking", "/services/analytics-tracking/"], ["API Integrations", "/services/api-integrations/"], ["Automation", "/services/automation-internal-tools/"]]
    }
  ];
  const homepageTableColumns = [
    { key: "problem", label: "Problem" },
    { key: "bestPath", label: "Best path" },
    { key: "send", label: "What to send" },
    { key: "outcome", label: "Useful outcome" }
  ];
  const homepageRows = [
    {
      problem: "Broken page, form, modal, embed, or mobile layout",
      bestPath: { text: "Website Fixes", href: "/services/website-fixes/" },
      send: "URL, screenshot, device, what should happen, recent changes",
      outcome: "Reproduce the bug, identify the layer, fix or document the next move"
    },
    {
      problem: "WordPress, Elementor, plugin, theme, or content backlog",
      bestPath: { text: "WordPress Support", href: "/services/wordpress-support/" },
      send: "Admin context, plugin/theme notes, task list, priority pages",
      outcome: "Clean updates, safer edits, fewer mystery CMS problems"
    },
    {
      problem: "SEO audit recommendations waiting for implementation",
      bestPath: { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/" },
      send: "Audit, crawl export, spreadsheet, CMS access notes, priority URLs",
      outcome: "Metadata, headings, redirects, schema, internal links, and crawl fixes applied"
    },
    {
      problem: "A page needs to launch for a service, city, offer, or campaign",
      bestPath: { text: "Landing Pages", href: "/services/landing-pages/" },
      send: "Offer, audience, CTA, source copy, tracking needs, target launch date",
      outcome: "Page structure, mobile QA, form/CTA checks, launch-ready tracking"
    },
    {
      problem: "GA4, GTM, pixels, forms, or dashboards do not match reality",
      bestPath: { text: "Analytics & Tracking", href: "/services/analytics-tracking/" },
      send: "Events needed, sample user actions, access notes, reporting issue",
      outcome: "Cleaner conversion events and a mapped path from action to report"
    },
    {
      problem: "Recurring updates and small technical tasks keep piling up",
      bestPath: { text: "Ongoing Webmaster Support", href: "/services/ongoing-webmaster-support/" },
      send: "Backlog, monthly range, access limits, recurring deadlines",
      outcome: "Steady updates, issue triage, SEO support, and site maintenance"
    }
  ];

  const technicalDepthBullets = [
    "Production debugging across CMS, scripts, forms, embeds, hosting, cache, and browser behavior",
    "Performance and reliability cleanup for heavy pages, scripts, images, Cloudflare, DNS, SSL, and hosting limits",
    "Measurement integrity for GA4, GTM, pixels, ecommerce events, campaign URLs, and reporting flows",
    "API, webhook, crawler, checker, dashboard, CRON, JSON, CSV, and lightweight automation support"
  ];

  const homeTopicalLinks = [
    {
      label: "Broken website path",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Start here for broken layouts, forms, modals, scripts, embeds, mobile bugs, or site behavior that needs hands-on debugging."
    },
    {
      label: "CMS path",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this for themes, plugins, Elementor, PHP templates, CSS, JavaScript, content updates, and WordPress cleanup."
    },
    {
      label: "SEO implementation path",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when audit notes, crawl fixes, schema, redirects, headings, or internal links need to become real site changes."
    },
    {
      label: "Measurement path",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when GA4, GTM, forms, pixels, ecommerce events, CRM handoffs, or dashboards do not match actual behavior."
    },
    {
      label: "Launch path",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this for service pages, campaign pages, local pages, paid traffic pages, forms, CTAs, mobile checks, and launch tracking."
    },
    {
      label: "Pricing path",
      title: "Contract Rate",
      href: "/rate/",
      copy: "Use this when you want to understand how $55/hr contract support fits quick fixes, small projects, and ongoing website work."
    }
  ];
  const homeInlineParagraphs = [
    [
      "If you searched for ",
      { text: "The Web Guy", href: "/", title: "The Web Guy homepage for contract website developer, SEO developer, WordPress support, and website fixes" },
      " or ",
      { text: "thewebguy", href: "/", title: "The Web Guy homepage on thewebguy.app" },
      ", this page is the shortest route into contract website help for broken pages, SEO implementation, WordPress fixes, tracking, APIs, and launch cleanup."
    ],
    [
      "If the site is visibly broken, start with ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, forms, scripts, embeds, and mobile bugs" },
      ". If the work lives inside themes, plugins, page builders, or PHP templates, route it to ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, PHP, CSS, and JavaScript" },
      ". Audit notes, schema, redirects, headings, and internal links belong in ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for crawl notes, schema, redirects, headings, and internal links" },
      ". If the work specifically needs an ",
      { text: "SEO developer", href: "/services/technical-seo-developer/", title: "View SEO developer help for templates, schema, redirects, internal links, and technical SEO implementation" },
      ", start there."
    ],
    [
      "When the numbers do not match reality, ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, form events, pixels, and ecommerce measurement" },
      " is the better starting point. When the need is a service page, campaign page, local page, form, CTA, or launch check, use ",
      { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for service pages, campaign pages, local pages, forms, CTAs, and tracking" },
      "."
    ]
  ];
</script>

<Seo
  title="The Web Guy | Contract Website Developer, SEO Developer, and WordPress Fix Help"
  description="The Web Guy at thewebguy.app is a contract website developer and SEO developer for broken websites, WordPress fixes, tracking, APIs, landing pages, and technical cleanup at $55/hr."
  schema={homeSchema}
/>

<main>
  <Hero
    eyebrow="The Web Guy | Contract website developer, SEO developer, and technical web support"
    h1="The Web Guy: Contract Website Developer for Broken, Slow, Stuck, or Unfinished Websites"
    intro="The Web Guy at thewebguy.app works as a contract website developer and SEO developer for broken websites, technical SEO, WordPress troubleshooting, API handoffs, landing pages, ecommerce cleanup, and the technical web work that still has to ship."
    cta="Send a Website Problem"
    secondary="View Services"
    showCapabilityLinks={false}
    image={staticHeroImages.home}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <SectionHeading
      eyebrow="Website problem routing"
      h2="Pick the thing that sounds closest"
      body="You do not need to know whether the issue is WordPress, CSS, JavaScript, hosting, analytics, or a plugin. Start with the symptom and route into the right kind of help."
    />
    <InternalLinkCopy paragraphs={homeInlineParagraphs} />
    <div class="decision-grid">
      {#each problemCards as card}
        <a class="decision-card" href={card.href} title={`Read about ${card.label}: ${card.title}`}>
          <span>{card.label}</span>
          <h3>{card.title}</h3>
          <p>{card.copy}</p>
        </a>
      {/each}
    </div>
    <SortableTable caption="Website request routing table" columns={homepageTableColumns} rows={homepageRows} />
  </section>

  <section class="section soft-section section-effect section-effect--hex section-effect--medium">
    <SectionHeading
      eyebrow="Website service categories"
      h2="The work usually falls into four buckets"
      body="The offer is broad enough to handle real messy websites, but the work stays practical: fix, build, implement, measure, connect, and keep moving."
    />
    <div class="cluster-grid">
      {#each serviceClusters as cluster}
        <article class="cluster-panel">
          <span>{cluster.label}</span>
          <h3>{cluster.title}</h3>
          <div class="mini-link-list">
            {#each cluster.links as [label, href]}
              <a href={href} title={`View ${label} from ${cluster.label}`}>{label}</a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="section section-effect section-effect--hex section-effect--medium">
    <SectionHeading
      eyebrow="High-value website support"
      h2="High-value website help you can hand off"
      body="These topics are broad enough to have their own pages, so the homepage keeps them short and routes you to the deeper service path."
    />
    <SummaryLinkGrid items={primaryServiceSummaries} />
    <p class="center-link"><a class="button button-primary" href="/services/" title="View all website services">View all services</a></p>
  </section>

  <section class="section soft-section technical-depth-section effect effect-dark-grid effect-medium">
    <SectionHeading
      eyebrow="Technical execution depth"
      h2="Built for the work behind the visible page"
      body="The full skill pages explain the implementation layer. The homepage only needs the short version: practical technical cleanup behind real website tasks."
    />
    <div class="summary-copy-panel summary-copy-panel--dark">
      <ul class="check-list">
        {#each technicalDepthBullets as bullet}
          <li>{bullet}</li>
        {/each}
      </ul>
      <a class="button button-primary" href="/skills/" title="View technical web skills">View technical skills</a>
    </div>
  </section>

  <ProofReel />

  <section class="section split-section local-remote-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Local and remote website support"
        h2="Hourly web support near Freeport, IL and remote-friendly"
        body="The Web Guy supports businesses near Freeport, Rockford, Monroe, Beloit, Janesville, Dixon, Sterling, Galena, Dubuque, Madison, and remote teams that need practical contract website help."
      />
      <a class="text-link" href="/locations/" title="View the service area page">View service area</a>
    </div>
    <div class="local-support-panel">
      {#each locationPages.slice(0, 6) as location}
        <a href={locationUrl(location.slug)} title={`View web support for ${location.city}, ${location.state}`}>{location.city}, {location.state}</a>
      {/each}
    </div>
  </section>

  <section class="section rate-section effect effect-dark-grid effect-medium" id="rate">
    <div class="rate-layout">
      <div>
        <SectionHeading
          eyebrow="Hourly contract rate"
          h2="Simple hourly website help: $55/hr"
          body="Best for ongoing support, agency overflow, WordPress cleanup, SEO implementation, landing pages, tracking fixes, ecommerce support, APIs, and practical technical website work."
        />
        <a class="button button-primary" href="/rate/" title="View how the $55/hr contract rate works">Read how the rate works</a>
      </div>
      <div class="rate-card">
        <span>Contract rate</span>
        <strong>$55/hr</strong>
        <p>Start with the URL, the problem, and the outcome you want. The first useful step is usually clear after a practical review.</p>
      </div>
    </div>
  </section>

  <section class="section section-effect section-effect--hex section-effect--medium">
    <SectionHeading eyebrow="Website support process" h2="A simple way to start contract web work" />
    <div class="process-grid">
      {#each [
        ["01", "Send the context", "URL, platform, symptom, goal, deadline, audit notes, or task list."],
        ["02", "Find the first move", "The issue gets sorted into fix, build, SEO, tracking, integration, or support work."],
        ["03", "Do the practical work", "Updates, debugging, cleanup, implementation, testing, and launch support happen hourly."],
        ["04", "Get a plain update", "You get what changed, what was found, what is blocked, and what should happen next."]
      ] as [num, title, text]}
        <article><span>{num}</span><h3>{title}</h3><p>{text}</p></article>
      {/each}
    </div>
  </section>

  <TopicalLinks
    eyebrow="Website support routes"
    heading="Route the website problem into the right support path"
    intro="The fastest path is usually not a broad rebuild. Pick the page that matches the symptom, platform, implementation need, or next decision."
    items={homeTopicalLinks}
  />

  <CtaBand
    heading="Need web work handled without babysitting?"
    copy="Send the URL, what is broken or needed, and the outcome you want. The reply can start with the most useful next step."
    label="Send the Website Problem"
    secondaryLabel="View Services"
    secondaryHref="/services/"
  />

  <section class="section soft-section home-faq-section">
    <div class="faq-header-row">
      <div class="faq-header-copy">
        <p class="eyebrow">FAQ</p>
        <h2>Common questions before sending work</h2>
      </div>
      <a class="button button-secondary dark-button faq-more-button" href="/faq/" title="View more contract website support FAQs">Read More FAQs</a>
    </div>
    <FaqList items={homepageFaqs} />
  </section>
</main>
