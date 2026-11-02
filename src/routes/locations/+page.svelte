<script>
  import { updates } from "$lib/data/editorial-updates.js";
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { locationPages, locationUrl } from "$lib/data/content.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { locationsHubProof } from "$lib/data/proof.js";
  import { breadcrumbSchema, locationListSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Locations", title: "Current page: web support service area" }
  ];
  const seoSchema = schemaList(
    breadcrumbSchema(breadcrumbs, "/locations/"),
    locationListSchema(locationPages, "/locations/")
  );

  const regions = [...new Set(locationPages.map((location) => location.region))];
  const effectVariants = ["section-effect--grid", "section-effect--signals", "section-effect--hex", "section-effect--traces"];
  const locationHubLinks = [
    {
      label: "Local WordPress help",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this for local business sites with WordPress updates, theme issues, plugin conflicts, Elementor cleanup, forms, or page edits."
    },
    {
      label: "Broken-site help",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this when a local site has visible layout bugs, broken forms, scripts, embeds, mobile issues, or production weirdness."
    },
    {
      label: "Local SEO work",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when local pages, service pages, metadata, headings, schema, redirects, or internal links need real implementation."
    },
    {
      label: "Lead tracking",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when forms, phone clicks, GA4, GTM, pixels, CRM handoffs, or lead reporting need to match real customer actions."
    },
    {
      label: "Ongoing help",
      title: "Ongoing Webmaster Support",
      href: "/services/ongoing-webmaster-support/",
      copy: "Use this for recurring website updates, cleanup, technical fixes, SEO tasks, content changes, and monthly support."
    },
    {
      label: "Start a request",
      title: "Contact",
      href: "/contact/",
      copy: "Use the request form when you have the URL, city, issue, timeline, and the outcome the site needs."
    }
  ];
  const locationHubContextualItems = locationPages.slice(0, 4).map((location) => ({
    title: `Local Website Support in ${location.city}, ${location.state}`,
    href: locationUrl(location.slug),
    titleAttr: `View local website support for ${location.city}, ${location.state}`,
    copy: `for local-friendly hourly or project-based website support around ${location.city}, including WordPress, website fixes, SEO implementation, tracking, and ongoing webmaster help.`
  }));
  const locationHubInlineParagraphs = [
    [
      "Local sites usually need a mix of ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for local business sites, plugins, page builders, themes, forms, and content updates" },
      ", ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for local site layout bugs, forms, scripts, embeds, and mobile problems" },
      ", and ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for local service pages, metadata, schema, redirects, and internal links" },
      " rather than a generic local marketing package."
    ],
    [
      "If lead data is unreliable, use ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for local forms, phone clicks, GA4, GTM, pixels, and CRM handoffs" },
      ". If the site needs recurring updates, cleanup, and small technical fixes, use ",
      { text: "Ongoing Webmaster Support", href: "/services/ongoing-webmaster-support/", title: "View ongoing webmaster support for recurring local website updates, fixes, SEO tasks, and cleanup" },
      "."
    ],
    [
      "Compare nearby city pages for ",
      { text: "Freeport, IL", href: "/locations/freeport-il/", title: "View local website support for Freeport, IL" },
      ", ",
      { text: "Rockford, IL", href: "/locations/rockford-il/", title: "View local website support for Rockford, IL" },
      ", ",
      { text: "Monroe, WI", href: "/locations/monroe-wi/", title: "View local website support for Monroe, WI" },
      ", ",
      { text: "Beloit, WI", href: "/locations/beloit-wi/", title: "View local website support for Beloit, WI" },
      ", ",
      { text: "Janesville, WI", href: "/locations/janesville-wi/", title: "View local website support for Janesville, WI" },
      ", and ",
      { text: "Madison, WI", href: "/locations/madison-wi/", title: "View local website support for Madison, WI" },
      " when the site needs regional context plus practical WordPress, tracking, SEO, and webmaster support."
    ]
  ];
  const locationTableColumns = [
    { key: "city", label: "City" },
    { key: "region", label: "Region" },
    { key: "support", label: "Common support fit" },
    { key: "page", label: "City page" }
  ];
  const locationRows = locationPages.map((location) => ({
    city: `${location.city}, ${location.state}`,
    region: location.region,
    support: "WordPress, website fixes, technical SEO, tracking, and ongoing webmaster support",
    page: { text: `View ${location.city}`, href: locationUrl(location.slug) }
  }));

  function locationSummaryItem(location) {
    return {
      label: location.region,
      title: `${location.city}, ${location.state}`,
      copy: `Hourly or project-based WordPress, SEO, tracking, website fixes, and webmaster support for businesses in and around ${location.city}.`,
      bullets: [
        "Local-friendly city page",
        "Remote-friendly support",
        "Routes into WordPress, fixes, SEO, tracking, and webmaster help"
      ],
      href: locationUrl(location.slug),
      linkLabel: `View ${location.city} support`
    };
  }
</script>

<Seo
  title="Website Support Service Areas | The Web Guy"
  description="Explore local-friendly, remote website support across Illinois, Wisconsin, Iowa, and other service areas for WordPress, technical SEO, tracking, ecommerce, and site fixes."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Website support service areas"
    h1="Local-Friendly Website Support by City and Region"
    intro={updates.static["/locations/"].copy["Hero introduction"]}
    cta="Request Local Web Support"
    image={staticHeroImages.locations}
  />

  <Breadcrumbs items={breadcrumbs} />

  <ProofPanel proof={locationsHubProof} />

  <TopicalLinks
    eyebrow="Local website support paths"
    heading="Connect the service area to the actual website work"
    intro="Local-friendly support is most useful when the city page connects to the service page that matches the task: WordPress, broken-site fixes, SEO, tracking, or recurring help."
    items={locationHubLinks}
  />



  {#each regions as region, index}
    <section class={`section section-effect ${effectVariants[(index + 1) % effectVariants.length]} section-effect--low`}>
      <SectionHeading eyebrow={`${region} website support cities`} h2={`${region} local website support service area`} />
      <SummaryLinkGrid
        className="summary-link-grid summary-link-grid--compact"
        items={locationPages
          .filter((location) => location.region === region)
          .map(locationSummaryItem)}
      />
    </section>
  {/each}
  <CtaBand heading="Need local-friendly web support?" copy="Send the URL, city, issue, and timeline. Work is remote-friendly, practical, and focused on the site problem." label="Request Local Web Support" />
</main>
