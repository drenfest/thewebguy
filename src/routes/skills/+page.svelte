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
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import { skillPages, skillUrl } from "$lib/data/content.js";
  import { skillsHubProof } from "$lib/data/proof.js";
  import { breadcrumbSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Skills", title: "Current page: Technical web skills" }
  ];
  const seoSchema = schemaList(breadcrumbSchema(breadcrumbs, "/skills/"));

  const groups = [
    ["Platforms", ["shopify-plus-liquid", "wordpress-plugin-development", "wordpress-theme-development"]],
    ["Performance and reliability", ["performance-engineering", "production-debugging", "cloudflare-dns-ssl"]],
    ["SEO, data, and measurement", ["ga4-gtm-measurement-integrity", "programmatic-seo", "schema-structured-data", "crawl-analysis-internal-linking", "google-merchant-center-product-data"]],
    ["Integrations", ["rest-api-webhook-integrations"]]
  ];

  function cardsFor(slugs) {
    return slugs
      .map((slug) => skillPages.find((skill) => skill.slug === slug))
      .filter(Boolean)
      .map((skill) => [skill.h1.replace(" at $55/hr", ""), skill.intro, skillUrl(skill.slug), `View ${skill.eyebrow}`, skill.slug]);
  }

  const effectVariants = ["section-effect--grid", "section-effect--signals", "section-effect--traces"];

  const skillHubLinks = [
    {
      label: "WordPress build path",
      title: "WordPress Theme Development",
      href: "/skills/wordpress-theme-development/",
      copy: "Use this when the work touches PHP templates, child themes, Elementor cleanup, mobile layouts, CSS, JavaScript, or SEO structure."
    },
    {
      label: "Debugging path",
      title: "Production Debugging",
      href: "/skills/production-debugging/",
      copy: "Use this when a real site has broken forms, scripts, APIs, tracking, CMS behavior, or browser-console errors that need tracing."
    },
    {
      label: "Measurement path",
      title: "GA4 & GTM Measurement Integrity",
      href: "/skills/ga4-gtm-measurement-integrity/",
      copy: "Use this when events, conversions, form tracking, ecommerce data, tags, triggers, or campaign reporting need verification."
    },
    {
      label: "Integration path",
      title: "REST API & Webhook Integrations",
      href: "/skills/rest-api-webhook-integrations/",
      copy: "Use this when forms, CRMs, ecommerce systems, CMS tools, payloads, or background jobs need to connect without becoming fragile."
    },
    {
      label: "SEO systems path",
      title: "Programmatic SEO",
      href: "/skills/programmatic-seo/",
      copy: "Use this when scalable pages, metadata patterns, schema, internal links, crawl paths, or data cleanup support SEO implementation."
    },
    {
      label: "Speed path",
      title: "Performance Engineering",
      href: "/skills/performance-engineering/",
      copy: "Use this when slow pages, script bloat, layout shift, cache behavior, hosting limits, or platform weight need a practical review."
    }
  ];
  const skillHubContextualItems = skillHubLinks.slice(0, 4).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the skills hub`,
    copy: item.copy
  }));
  const skillHubInlineParagraphs = [
    [
      "Use ",
      { text: "WordPress Theme Development", href: "/skills/wordpress-theme-development/", title: "View WordPress theme development support for templates, child themes, CSS, JavaScript, and layout cleanup" },
      " when the problem lives in templates, layouts, CSS, JavaScript, or page-builder output. Use ",
      { text: "Production Debugging", href: "/skills/production-debugging/", title: "View production debugging support for live website bugs, scripts, forms, APIs, and tracking" },
      " when the site behavior has to be traced through the real browser, CMS, scripts, hosting, and third-party tools."
    ],
    [
      "For measurement work, start with ",
      { text: "GA4 & GTM Measurement Integrity", href: "/skills/ga4-gtm-measurement-integrity/", title: "View GA4 and Google Tag Manager measurement integrity support" },
      ". For forms, CRMs, ecommerce systems, payloads, and background jobs, use ",
      { text: "REST API & Webhook Integrations", href: "/skills/rest-api-webhook-integrations/", title: "View REST API and webhook integration support" },
      "."
    ]
  ];
</script>

<Seo
  title="Technical Web Skills Behind The Web Guy"
  description="Explore the practical production skills behind The Web Guy, including WordPress engineering, Shopify Plus, performance, debugging, GA4/GTM, APIs, programmatic SEO, and Cloudflare support."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Technical implementation skills"
    h1="Technical Web Skills for WordPress, SEO, Tracking, APIs, and Performance"
    intro="These are practical production skills used to fix, stabilize, speed up, automate, measure, and improve websites. They support the $55/hr service work without turning the site into a resume."
    cta="Send a Technical Issue"
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Technical skill routing"
      h2="Use these web skills when the technical layer is already clear"
      body="The skill pages explain the implementation layer behind the service pages, which helps when the request already points to a platform, debugging path, tracking setup, API, SEO system, or performance problem."
    />
    <InternalLinkCopy paragraphs={skillHubInlineParagraphs} />
  </section>

  <ProofPanel proof={skillsHubProof} />

  {#each groups as [label, slugs], index}
    <section class={`section section-effect ${effectVariants[index % effectVariants.length]} section-effect--medium`}>
      <SectionHeading eyebrow={`${label} skills`} h2={`${label} implementation skills`} />
      <CardGrid className="card-grid service-grid" items={cardsFor(slugs)} />
    </section>
  {/each}

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading
        eyebrow="WordPress and platform work"
        h2="Use technical skills when the failure point is already visible"
        body="WordPress Theme Development and WordPress Plugin Development are useful when the issue lives in templates, child themes, shortcodes, admin workflows, hooks, PHP, CSS, JavaScript, or custom site behavior."
      />
      <a class="text-link" href="/skills/wordpress-theme-development/" title="View WordPress theme development support for templates, child themes, CSS, JavaScript, and layout cleanup">View WordPress theme work</a>
    </div>
    <div>
      <SectionHeading
        eyebrow="Tracking, API, and debugging work"
        h2="Debug the website path instead of guessing"
        body="Production Debugging, GA4/GTM Measurement Integrity, REST API & Webhook Integrations, and Performance Engineering help when forms, events, scripts, payloads, or slow pages need to be traced through the real site."
      />
      <a class="text-link" href="/skills/production-debugging/" title="View production debugging support for broken forms, scripts, APIs, tracking, and live website behavior">View production debugging</a>
    </div>
  </section>

  <ContextualSupport
    eyebrow="Technical skill handoffs"
    heading="Technical skills that turn into useful website work"
    intro="Use these paths when a capability needs to turn into practical website work, from cleanup and implementation to tracking and performance fixes."
    items={skillHubContextualItems}
  />

  <TopicalLinks
    eyebrow="Technical skill routes"
    heading="Use the technical skill pages when the platform or failure point is already clear"
    intro="These links connect the high-level service offer to the implementation details behind WordPress, debugging, tracking, APIs, SEO systems, and performance work."
    items={skillHubLinks}
  />

  <CtaBand heading="Have a technical web problem?" copy="Send the URL, platform, symptoms, and what should happen next." label="Send the Technical Context" />

  <section class="section soft-section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Services and skills"
        h2="Skills support services"
        body="The skill pages explain the technical strengths behind the service pages. If you already know the platform or technical problem, start here. If you know the business task, start with services."
      />
      <a class="text-link" href="/services/" title="View website services">View website services</a>
    </div>
    <div class="rate-callout">
      <span>Contract rate</span>
      <strong>$55/hr</strong>
      <p>Use hourly help for practical technical tasks, debugging, cleanup, implementation, and support.</p>
    </div>
  </section>
</main>
