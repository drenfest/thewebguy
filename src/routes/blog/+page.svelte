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
  import { blogPosts, blogUrl, somethingBrokePosts } from "$lib/data/content.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { breadcrumbSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Blog", title: "Current page: Website troubleshooting blog" }
  ];
  const seoSchema = schemaList(breadcrumbSchema(breadcrumbs, "/blog/"));

  const startHerePosts = blogPosts.filter((post) => post.problemType === "Start here");
  const blogHubLinks = [
    {
      label: "Broken-site service",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this when a post describes a real layout, script, form, embed, mobile, CMS, or production bug you need fixed."
    },
    {
      label: "WordPress service",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this when the problem points toward plugins, themes, Elementor, PHP templates, CSS, JavaScript, or WordPress admin behavior."
    },
    {
      label: "SEO service",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when the article connects to audit implementation, schema, internal links, redirects, crawl cleanup, or page structure."
    },
    {
      label: "Page-build service",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this when the need is a new service page, local page, campaign page, paid traffic page, form, CTA, or launch-ready page."
    },
    {
      label: "Tracking service",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when the post is really about GA4, GTM, pixels, form tracking, ecommerce data, or unreliable reporting."
    },
    {
      label: "Request path",
      title: "Contact",
      href: "/contact/",
      copy: "Use the form when the post helped name the symptom and you are ready to send the URL, context, timeline, and desired outcome."
    }
  ];
  const blogHubContextualItems = [
    ...blogHubLinks.slice(0, 2).map((item) => ({
      title: item.title,
      href: item.href,
      titleAttr: `View ${item.title} from the troubleshooting blog`,
      copy: item.copy
    })),
    ...somethingBrokePosts.slice(0, 2).map((post) => ({
      title: post.title,
      href: blogUrl(post.slug),
      titleAttr: `Read ${post.title} from the troubleshooting blog`,
      copy: post.summary
    }))
  ];
  const blogHubInlineParagraphs = [
    [
      "If a post helps name the symptom and the site still needs work, route visible bugs to ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, forms, scripts, embeds, mobile bugs, and visible site problems" },
      " and CMS or plugin-heavy issues to ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, Elementor, PHP templates, CSS, JavaScript, and cleanup" },
      "."
    ],
    [
      "When an article points to audit notes, crawl fixes, redirects, schema, or internal links, use ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, crawl cleanup, schema, redirects, headings, and internal links" },
      ". When the issue is GA4, GTM, forms, pixels, or reporting, use ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, form events, ecommerce measurement, and reporting" },
      "."
    ],
    [
      "For specific broken-site symptoms, compare ",
      { text: "embeds, iframes, and widgets", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking website pages" },
      ", ",
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      ", ",
      { text: "forms and modals", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
      ", or ",
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      " before deciding whether the request belongs in Website Fixes, WordPress Support, tracking, or front-end cleanup."
    ]
  ];
</script>

<Seo
  title="Website Troubleshooting Blog | The Web Guy"
  description="Practical website troubleshooting posts about broken layouts, JavaScript bugs, forms, embeds, tracking scripts, CMS weirdness, WordPress, SEO, and technical website support."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Website troubleshooting blog"
    h1="Website Troubleshooting Notes"
    intro="Practical explanations for the kinds of website problems businesses and agencies run into: broken layouts, scripts, forms, embeds, tracking, CMS weirdness, and the web work that gets pushed off."
    cta="Send a Website Problem"
    secondary="View Website Fixes"
    secondaryHref="/services/website-fixes/"
    image={staticHeroImages.blog}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Broken website starting points"
      h2="When something broke"
      body="These posts are built for the moment when the site is acting weird and you need a sharper name for the problem before asking for help."
    />
    <InternalLinkCopy paragraphs={blogHubInlineParagraphs} />
    <CardGrid
      className="card-grid service-grid"
      items={startHerePosts.map((post) => [
        post.title,
        post.summary,
        blogUrl(post.slug),
        `Read ${post.eyebrow.toLowerCase()}`,
        post.relatedService
      ])}
    />
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Specific broken-site symptoms" h2="Specific website problems" />
    <CardGrid
      className="card-grid service-grid"
      items={somethingBrokePosts.map((post) => [
        post.title,
        post.summary,
        blogUrl(post.slug),
        `Read about ${post.eyebrow.toLowerCase()}`,
        post.relatedService
      ])}
    />
  </section>

  <ContextualSupport
    eyebrow="Troubleshooting-to-service paths"
    heading="Troubleshooting paths with service context"
    intro="Use these reading paths to move from the symptom to the page that can help fix it."
    items={blogHubContextualItems}
  />

  <TopicalLinks
    eyebrow="Article-to-service routes"
    heading="Turn the article into the next practical website action"
    intro="The posts are written to help name the problem. These links point from the reading path into the service pages that usually handle the work."
    items={blogHubLinks}
  />

  <CtaBand heading="Know what broke?" copy="Send the URL, symptoms, what should happen, and what changed recently. That is enough to start a useful conversation." label="Send the Website Problem" />

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="Website troubleshooting posts" h2="Practical website support articles" />
    <CardGrid
      className="card-grid service-grid"
      items={blogPosts.map((post) => [
        post.title,
        post.summary,
        blogUrl(post.slug),
        "Read the post",
        post.relatedService
      ])}
    />
  </section>
</main>
