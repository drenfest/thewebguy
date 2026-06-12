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
  import { breadcrumbSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Rate", title: "Current page: Contract website help at $55/hr" }
  ];
  const seoSchema = schemaList(breadcrumbSchema(breadcrumbs, "/rate/"));

  const rateTopicalLinks = [
    {
      label: "Quick fix fit",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use hourly support for broken layouts, JavaScript bugs, forms, modals, embeds, tracking scripts, and visible site problems."
    },
    {
      label: "CMS fit",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use hourly support for themes, plugins, page builders, PHP templates, CSS, JavaScript, redirects, metadata, and content cleanup."
    },
    {
      label: "SEO fit",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use hourly support when audit notes, crawl issues, schema, headings, redirects, and internal links need actual site changes."
    },
    {
      label: "Page build fit",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use hourly support for service pages, campaign pages, local pages, forms, CTAs, tracking, responsive cleanup, and launch checks."
    },
    {
      label: "Team support fit",
      title: "Agency Overflow",
      href: "/services/agency-overflow/",
      copy: "Use hourly support when an agency or marketing team needs practical production help without adding a full-time hire."
    },
    {
      label: "Request fit",
      title: "Contact",
      href: "/contact/",
      copy: "Use the request form when you know the URL, task list, timeline, and whether the work is one-time or ongoing."
    }
  ];
  const rateContextualItems = rateTopicalLinks.slice(0, 5).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} from the contract rate page`,
    copy: item.copy
  }));
  const rateInlineParagraphs = [
    [
      "Hourly support fits best when the request is specific: ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, scripts, forms, embeds, and website bugs" },
      " for visible problems, ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, page builders, PHP templates, CSS, JavaScript, and cleanup" },
      " for CMS work, and ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, schema, redirects, headings, crawl cleanup, and internal links" },
      " when recommendations need to become site changes."
    ],
    [
      "The same $55/hr model can also support ",
      { text: "Landing Pages", href: "/services/landing-pages/", title: "View landing page support for service pages, campaign pages, local pages, forms, CTAs, and tracking" },
      " or ",
      { text: "Agency Overflow", href: "/services/agency-overflow/", title: "View agency overflow support for production work, client updates, QA, and SEO implementation" },
      " when the scope is clear enough to move without a bloated process."
    ]
  ];
</script>

<Seo
  title="Contract Website Help at $55/hr | The Web Guy"
  description="See The Web Guy’s simple $55/hr contract rate for quick fixes, small projects, ongoing webmaster support, SEO implementation, and agency overflow."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Rate"
    h1="Contract Website Help at $55/hr"
    intro="A clear hourly rate for practical website support: quick fixes, small projects, ongoing webmaster work, SEO implementation, agency overflow, and technical cleanup."
    cta="Start a Website Request"
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--medium">
    <SectionHeading eyebrow="Simple hourly rate" h2="What $55/hr is good for" body="The rate works best when there is a real task, site, issue, or backlog. It keeps pricing honest and avoids fake packages that do not match the work." />
    <InternalLinkCopy paragraphs={rateInlineParagraphs} />
    <CardGrid
      items={[
        ["Quick fixes", "1 to 5 hours for broken layouts, scripts, forms, tracking issues, page edits, redirects, or small WordPress fixes.", "/services/website-fixes/", "View website fixes", "website-fixes"],
        ["Small projects", "5 to 15 hours for landing pages, SEO implementation batches, WordPress cleanup, tracking setup, or technical improvements.", "/services/landing-pages/", "View landing pages", "landing-pages"],
        ["Bigger cleanup", "15 to 40 hours for messy WordPress cleanup, ecommerce issues, performance work, integration fixes, or large SEO implementation lists.", "/services/wordpress-support/", "View WordPress support", "wordpress-support"],
        ["Ongoing support", "Weekly or monthly help for businesses that need a webmaster without hiring full-time.", "/services/ongoing-webmaster-support/", "View ongoing support", "ongoing-webmaster-support"],
        ["Agency overflow", "As-needed production help for agencies with client tasks, SEO implementation, QA cleanup, and landing page work.", "/services/agency-overflow/", "View agency overflow", "agency-overflow"],
        ["What is included", "Time spent reviewing, implementing, troubleshooting, testing, communicating updates, and documenting practical next steps.", "/contact/", "Send a request", "website-fixes"]
      ]}
    />
  </section>

  <ContextualSupport
    eyebrow="Rate fit"
    heading="Where the hourly rate usually applies"
    intro="These are the common service contexts where hourly contract support tends to fit best."
    items={rateContextualItems}
  />

  <TopicalLinks
    eyebrow="Rate fit"
    heading="The hourly rate works best when the task has a clear website outcome"
    intro="These pages show the types of work that fit $55/hr contract support, from quick fixes and SEO implementation to ongoing production help."
    items={rateTopicalLinks}
  />

  <CtaBand heading="Ready to start?" copy="Send the site URL, the task list, timeline, and whether this is one-time or ongoing work." />

  <section class="section soft-section split-section section-effect section-effect--signals section-effect--low">
    <div><SectionHeading eyebrow="What is not included" h2="No fake unlimited package" body="The $55/hr rate does not mean unlimited work, guaranteed SEO rankings, guaranteed perfect speed scores, major security incident response, enterprise architecture, or full brand strategy from scratch." /></div>
    <div><SectionHeading eyebrow="Billing and time tracking" h2="Keep it plain" body="Work should be scoped around tasks, hours, or a monthly range. Updates should explain what changed, what was found, what remains, and where the next hour is most useful." /></div>
  </section>
</main>
