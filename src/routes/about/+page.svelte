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

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "About", title: "Current page: About The Web Guy" }
  ];

  const aboutTopicalLinks = [
    {
      label: "Full service map",
      title: "Website Services",
      href: "/services/",
      copy: "Use the services hub to choose between WordPress, website fixes, technical SEO, landing pages, tracking, ecommerce, APIs, and support."
    },
    {
      label: "Common CMS work",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this when the site needs theme edits, plugin troubleshooting, page builder cleanup, content updates, or WordPress SEO implementation."
    },
    {
      label: "Implementation work",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when recommendations, crawl notes, schema, redirects, headings, internal links, or page structure need to be handled on the site."
    },
    {
      label: "Troubleshooting work",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this when the problem is a visible bug, broken layout, failed form, script conflict, embed issue, or messy production behavior."
    },
    {
      label: "Measurement work",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when GA4, GTM, pixels, form events, ecommerce tracking, or reporting flows need to be trusted."
    },
    {
      label: "Start here",
      title: "Contact",
      href: "/contact/",
      copy: "Use the request form when you have the URL, context, timeline, and a clear outcome for the next useful step."
    }
  ];
  const aboutContextualItems = aboutTopicalLinks.slice(1, 5).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the About page`,
    copy: item.copy
  }));
  const aboutInlineParagraphs = [
    [
      "The practical work usually starts with ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, content updates, and cleanup" },
      ", ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for crawl notes, schema, redirects, headings, metadata, and internal links" },
      ", or ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, failed forms, scripts, embeds, and visible website bugs" },
      " depending on whether the issue is a platform task, an SEO handoff, or a visible site problem."
    ],
    [
      "When the work involves events, pixels, form submissions, dashboards, or CRM handoffs, ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, form events, pixels, and ecommerce measurement" },
      " is the cleaner route. For the full map of what can be handed off, start with ",
      { text: "Website Services", href: "/services/", title: "View all website services" },
      "."
    ]
  ];
</script>

<Seo
  title="About The Web Guy | Practical Website Support"
  description="Learn about The Web Guy, a practical contract website support service focused on WordPress, SEO implementation, landing pages, tracking, and website fixes."
/>

<main>
  <Hero
    eyebrow="About"
    h1="About The Web Guy"
    intro="The Web Guy is built around practical web support: fixing broken pages, cleaning up WordPress, implementing SEO work, building landing pages, troubleshooting tracking, and helping agencies move production work forward."
    cta="Work With The Web Guy"
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div><SectionHeading eyebrow="What The Web Guy is" h2="A practical contract website support service" body="This is not a fake agency brand and not a resume page. The public offer is simple: contract website help at $55/hr for real tasks that need technical execution." /></div>
    <div>
      <ul class="check-list">
        <li>WordPress and webmaster support</li>
        <li>Technical SEO implementation</li>
        <li>Landing pages and front-end work</li>
        <li>Tracking, analytics, and integrations</li>
        <li>Ecommerce cleanup</li>
        <li>Hosting, DNS, SSL, Cloudflare, and reliability support</li>
      </ul>
    </div>
    <InternalLinkCopy paragraphs={aboutInlineParagraphs} className="internal-link-copy--wide" />
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Tools and technologies" h2="Comfortable across the messy middle of websites" />
    <CardGrid
      items={[
        ["CMS and ecommerce", "WordPress, Elementor, page builders, custom themes, PHP templates, Shopify, Liquid, WooCommerce, BigCommerce, and content cleanup.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
        ["Code and front-end", "HTML, CSS, JavaScript, PHP, Node.js, Svelte/SvelteKit, React-style front-end work, Bootstrap, static sites, and lightweight tools.", "/services/react-static-sites/", "View front-end support", "react-static-sites"],
        ["SEO and measurement", "Technical SEO, schema, redirects, internal links, GA4, Google Analytics, Google Tag Manager, pixels, campaign tracking, and event verification.", "/services/technical-seo-implementation/", "View SEO implementation", "technical-seo-implementation"],
        ["Infrastructure and data", "Cloudflare, DNS, SSL/TLS, cPanel/WHM, Linux hosting, Apache/Nginx, MySQL, REST APIs, webhooks, Postman, JSON, CSV, CRON, and automation.", "/services/api-integrations/", "View API integrations", "api-integrations"]
      ]}
    />
  </section>

  <ContextualSupport
    eyebrow="Work fit"
    heading="Practical support paths behind the background"
    intro="These links move from work style and background into the exact service paths visitors usually need."
    items={aboutContextualItems}
  />

  <TopicalLinks
    eyebrow="Useful next pages"
    heading="Move from background context into a specific website request"
    intro="If the About page answers whether the work style is a fit, these pages help route the actual task into the right support area."
    items={aboutTopicalLinks}
  />

  <CtaBand heading="Have a real website problem?" copy="Send the URL, context, and what needs to happen next." />

  <section class="section split-section section-effect section-effect--traces section-effect--low">
    <div><SectionHeading eyebrow="Working style" h2="Plain, useful, and focused on the site" body="The best requests include a URL, a task list, an audit, screenshots, or a clear description of what should happen. The Web Guy gives practical updates instead of technical theater." /></div>
    <div><SectionHeading eyebrow="Good fit / not good fit" h2="Best for execution, not bloated process" body="Good fit: businesses and agencies that need a technical person to move web work forward. Not a fit: unlimited flat-fee work, fake emergency chaos, or projects that need a large agency team." /></div>
  </section>
</main>
