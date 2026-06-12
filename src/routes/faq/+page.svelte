<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { faqs } from "$lib/data/content.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "FAQ", title: "Current page: Contract website help FAQ" }
  ];

  const faqTopicalLinks = [
    {
      label: "Pricing answer",
      title: "Contract Rate",
      href: "/rate/",
      copy: "Use this for the $55/hr rate, task fit, ongoing support, small projects, agency overflow, and what the hourly model includes."
    },
    {
      label: "Service answer",
      title: "Website Services",
      href: "/services/",
      copy: "Use this when the question is really about which service fits WordPress, fixes, SEO, tracking, ecommerce, APIs, or support."
    },
    {
      label: "WordPress answer",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this for questions about themes, plugins, Elementor, page builders, PHP templates, CSS, JavaScript, and WordPress cleanup."
    },
    {
      label: "SEO answer",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this for questions about audit implementation, schema, redirects, crawl cleanup, headings, metadata, and internal links."
    },
    {
      label: "Tracking answer",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this for questions about GA4, GTM, pixels, forms, conversion events, ecommerce measurement, and reporting accuracy."
    },
    {
      label: "Request answer",
      title: "Contact",
      href: "/contact/",
      copy: "Use the request form when the FAQ answered enough and you are ready to send the URL, context, timeline, and desired outcome."
    }
  ];
  const faqContextualItems = faqTopicalLinks.slice(0, 5).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the FAQ page`,
    copy: item.copy
  }));
  const faqInlineParagraphs = [
    [
      "For pricing questions, start with the ",
      { text: "Contract Rate", href: "/rate/", title: "View the $55/hr contract website help rate" },
      ". For routing questions, use ",
      { text: "Website Services", href: "/services/", title: "View all website service options" },
      " before choosing a specific page like ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, PHP, CSS, and JavaScript" },
      " or ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, schema, redirects, headings, and internal links" },
      "."
    ],
    [
      "If the question is about GA4, GTM, pixels, forms, or ecommerce measurement, go deeper with ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, form events, and ecommerce measurement" },
      ". If the FAQ gives enough context and the site is ready to review, use ",
      { text: "Contact", href: "/contact/", title: "Open the website support request form" },
      "."
    ]
  ];
</script>

<Seo
  title="The Web Guy FAQ | Contract Website Help"
  description="Answers about The Web Guy’s $55/hr rate, WordPress support, agency overflow, SEO implementation, landing pages, tracking, ecommerce, and ongoing support."
/>

<main>
  <Hero
    eyebrow="FAQ"
    h1="The Web Guy FAQ"
    intro="Answers about the $55/hr rate, WordPress support, agency overflow, SEO implementation, landing pages, tracking, ecommerce, and ongoing support."
  />
  <Breadcrumbs items={breadcrumbs} />
  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <InternalLinkCopy paragraphs={faqInlineParagraphs} />
  </section>
  <ContextualSupport
    eyebrow="Deeper answers"
    heading="FAQ answers with full service context"
    intro="Use these deeper pages when a short answer needs a practical service path."
    items={faqContextualItems}
  />
  <TopicalLinks
    eyebrow="Related answers"
    heading="If the FAQ points to a specific kind of work, start there"
    intro="These pages expand the short answers into the service, rate, and request paths people most often need after reading the FAQ."
    items={faqTopicalLinks}
  />
  <CtaBand />
  <section class="section section-effect section-effect--grid section-effect--low"><FaqList items={faqs} showLinks={true} /></section>
</main>
