<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { blogUrl, servicePages, serviceUrl, somethingBrokePosts } from "$lib/data/content.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Services", title: "Current page: Website services" }
  ];

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
</script>

<Seo
  title="Website Services at $55/hr | The Web Guy"
  description="Explore contract website services from The Web Guy, including WordPress support, technical SEO implementation, landing pages, site speed, tracking, ecommerce, and agency overflow."
/>

<main>
  <Hero
    eyebrow="Services"
    h1="Website Services at $55/hr"
    intro="Practical contract web support for businesses, agencies, ecommerce stores, SEO teams, and overloaded marketing teams that need useful website work done."
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <SectionHeading
      eyebrow="Service hub"
      h2="Choose the service closest to the problem"
      body="If you are not sure where the work fits, start with the problem. The categories below are here to help you route the request, not force you into a package."
    />
    <InternalLinkCopy paragraphs={serviceHubInlineParagraphs} />
    <CardGrid
      className="card-grid service-grid"
      items={servicePages.map((service) => [
        service.h1.replace(" at $55/hr", ""),
        service.intro,
        serviceUrl(service.slug),
        `Go to ${service.eyebrow}`,
        service.slug
      ])}
    />
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--medium">
    <SectionHeading eyebrow="How to choose" h2="Start with the pain, not the label" />
    <CardGrid
      className="card-grid compact-grid"
      items={painCards}
    />
  </section>

  <section class="section split-section section-effect section-effect--traces section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Common handoff paths"
        h2="Most requests start as a symptom"
        body="A broken page usually starts with Website Fixes, then moves into WordPress Support, production debugging, or reliability work once the cause is clear. SEO requests often begin with Technical SEO Implementation, then turn into schema, crawl cleanup, internal links, or ecommerce product data."
      />
      <a class="text-link" href="/services/website-fixes/" title="View website fixes for broken layouts, forms, scripts, embeds, and visible bugs">Start with website fixes</a>
    </div>
    <div>
      <SectionHeading
        eyebrow="Launch and measurement"
        h2="New work needs a working path"
        body="A page build is usually tied to Landing Pages, Analytics & Tracking, React/static front-end work, or API integrations. If an agency already owns strategy, Agency Overflow keeps production moving without turning every task into a full project."
      />
      <a class="text-link" href="/services/landing-pages/" title="View landing page support for service pages, campaign pages, forms, tracking, and launch work">Plan a page build</a>
    </div>
  </section>

  <ContextualSupport
    eyebrow="Service starting points"
    heading="Primary service paths from the services hub"
    intro="Start with these service paths when the problem is visible, technical, unfinished, or stuck between strategy and implementation."
    items={serviceHubContextualItems}
  />

  <TopicalLinks
    eyebrow="Service routes"
    heading="Match the request to the page that can actually move it forward"
    intro="These are the strongest service paths for common website problems, from broken front-end behavior to SEO implementation, tracking, and agency overflow."
    items={serviceHubLinks}
  />

  <section class="section section-effect section-effect--traces section-effect--medium">
    <SectionHeading
      eyebrow="Something broke"
      h2="Pick the broken thing that sounds closest"
      body="If the issue is visible, urgent, or hard to explain, these posts help name the problem and route it to the right kind of website fix."
    />
    <CardGrid
      className="card-grid service-grid"
      items={somethingBrokePosts.map((post) => [
        post.eyebrow,
        post.summary,
        blogUrl(post.slug),
        `Read about ${post.eyebrow.toLowerCase()}`
      ])}
    />
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
