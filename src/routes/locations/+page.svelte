<script>
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
  const effectVariants = ["section-effect--grid", "section-effect--signals", "section-effect--traces"];
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
    copy: `for local-friendly hourly website support around ${location.city}, including WordPress, website fixes, SEO implementation, tracking, and ongoing webmaster help.`
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
      copy: `Hourly WordPress, SEO, tracking, website fixes, and webmaster support for businesses in and around ${location.city}.`,
      bullets: [
        "Local-friendly city page",
        "Remote-friendly support at $55/hr",
        "Routes into WordPress, fixes, SEO, tracking, and webmaster help"
      ],
      href: locationUrl(location.slug),
      linkLabel: `View ${location.city} support`
    };
  }
</script>

<Seo
  title="Local Website Support Near Freeport, IL | The Web Guy"
  description="Local-friendly hourly website support near Freeport, IL for WordPress, website fixes, technical SEO, landing pages, tracking, ecommerce, and webmaster help at $55/hr."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Local website support service area"
    h1="Local Website Support Near Freeport, IL"
    intro="The Web Guy provides local-friendly and remote-friendly website support for businesses near Freeport, IL and surrounding cities. Hourly web help starts at $55/hr."
    cta="Request Local Web Support"
    image={staticHeroImages.locations}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Freeport-area website support"
        h2="Local enough to understand the region, remote-friendly enough to move fast"
        body="This service area is built around practical hourly website help for local companies, agencies, contractors, ecommerce sellers, professional services, nonprofits, and organizations that need work handled without a large agency process."
      />
      <InternalLinkCopy paragraphs={locationHubInlineParagraphs} />
    </div>
    <div class="rate-callout">
      <span>Contract rate</span>
      <strong>$55/hr</strong>
      <p>Available for one-time fixes, monthly support, agency overflow, technical cleanup, and web platform support.</p>
    </div>
  </section>

  <ProofPanel proof={locationsHubProof} />

  <section class="section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Local lead-flow problems"
        h2="Most local website requests are really lead-flow problems"
        body="A local business website usually needs useful service pages, working contact forms, reliable phone-click tracking, fast mobile pages, clean WordPress updates, and technical SEO implementation that supports how people search in the region."
      />
      <a class="text-link" href="/services/technical-seo-implementation/" title="View technical SEO implementation support for local service pages, metadata, schema, redirects, and internal links">Improve local SEO execution</a>
    </div>
    <div>
      <SectionHeading
        eyebrow="Remote-friendly local support"
        h2="The city page is just the entry point for the website work"
        body="Once the site problem is clear, the work usually routes into WordPress Support, Website Fixes, Landing Pages, Analytics & Tracking, or Ongoing Webmaster Support rather than a generic local marketing package."
      />
      <a class="text-link" href="/services/ongoing-webmaster-support/" title="View ongoing webmaster support for recurring updates, fixes, SEO tasks, tracking, and site cleanup">View ongoing webmaster help</a>
    </div>
  </section>

  <ContextualSupport
    eyebrow="Nearby city pages"
    heading="Primary local website support pages"
    intro="Use these city pages when you want local-friendly website support near Freeport without a full agency handoff."
    items={locationHubContextualItems}
  />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Service area details"
      h2="Compare local website support pages by city and region"
      body="The city pages are entry points into the same practical website work: fixes, WordPress support, SEO implementation, tracking, landing pages, and recurring webmaster help."
    />
    <SortableTable caption="Local website support city table" columns={locationTableColumns} rows={locationRows} />
  </section>

  <TopicalLinks
    eyebrow="Local website support paths"
    heading="Connect the service area to the actual website work"
    intro="Local-friendly support is most useful when the city page connects to the service page that matches the task: WordPress, broken-site fixes, SEO, tracking, or recurring help."
    items={locationHubLinks}
  />

  <CtaBand heading="Need local-friendly web support?" copy="Send the URL, city, issue, and timeline. Work is remote-friendly, practical, and focused on the site problem." label="Request Local Web Support" />

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
</main>
