<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import NearbyLocations from "$lib/components/NearbyLocations.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import ProofPanel from "$lib/components/ProofPanel.svelte";
  import { locationUrl, serviceUrl, skillUrl } from "$lib/data/content.js";
  import { locationHeroImage } from "$lib/data/hero-images.js";
  import { proofForLocation } from "$lib/data/proof.js";
  import {
    locationContextualSupportItems,
    locationTopicalItems,
    nearbyLocationsForLocation,
    relatedServicesForLocation,
    relatedSkillsForLocation
  } from "$lib/data/relationships.js";
  import { breadcrumbSchema, faqSchema, locationServiceSchema, schemaList } from "$lib/data/schema.js";

  let { data } = $props();
  const location = $derived(data.location);
  const locationPath = $derived(locationUrl(location.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Locations", href: "/locations/", title: "View all service area locations" },
    { label: `${location.city}, ${location.state}`, title: `Current page: web support for ${location.city}, ${location.state}` }
  ]);
  const relatedServices = $derived(relatedServicesForLocation(location));
  const relatedSkills = $derived(relatedSkillsForLocation(location));
  const nearbyLocations = $derived(nearbyLocationsForLocation(location));
  const locationProof = $derived(proofForLocation(location.slug));
  const topicalItems = $derived(locationTopicalItems(location, relatedServices, relatedSkills));
  const locationFaqs = $derived([
    [`Do you work with ${location.city} businesses remotely?`, `Yes. The Web Guy provides remote-friendly hourly or project-based website support for ${location.city}-area businesses and teams.`],
    [`What do you charge for website help in ${location.city}?`, `Send the site and the work you need for a free quote. Scope and cost are agreed before any paid work begins.`],
    [`Can you help with WordPress sites in ${location.city}?`, `Yes. WordPress support includes updates, theme cleanup, page builder issues, plugin conflicts, SEO implementation, speed cleanup, and form troubleshooting.`],
    [`Do you offer ongoing website support for ${location.city} businesses?`, `Yes. Ongoing support can be hourly or project based for monthly updates, small improvements, technical fixes, and recurring webmaster tasks.`],
    [`Can you help agencies or marketing teams near ${location.city}?`, `Yes. Agency overflow support is available for production work, SEO implementation, landing pages, tracking QA, and website cleanup.`]
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, locationPath),
    locationServiceSchema(location, locationPath),
    faqSchema(locationFaqs)
  ));
  const contextualSupportItems = $derived(locationContextualSupportItems(location, nearbyLocations, relatedServices));
  const localTroubleLinks = {
    "freeport-il": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues for existing local sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on local business sites" }
    ],
    "rockford-il": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for lead-generation sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on business sites" }
    ],
    "monroe-wi": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues on regional sites" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for local leads" }
    ],
    "beloit-wi": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working near lead-generation pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels when lead data does not match" }
    ],
    "janesville-wi": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for campaign and SEO pages" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "dixon-il": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues on older websites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on quote or contact pages" }
    ],
    "sterling-il": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on local service pages" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "galena-il": [
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about booking widgets, embeds, and iframes breaking pages" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for visitor and campaign measurement" }
    ],
    "dubuque-ia": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for ecommerce and service pages" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues on existing sites" }
    ],
    "madison-wi": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels for campaigns, startups, and ecommerce sites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working on lead-generation pages" }
    ]
  };
  const localTroubleParagraphs = $derived((localTroubleLinks[location.slug] || []).length ? [[
    "Common local support requests can also start with ",
    ...(localTroubleLinks[location.slug] || []).flatMap((link, index, links) => [
      index === 0 ? "" : index === links.length - 1 ? " or " : ", ",
      link
    ]),
    " before the work becomes a scoped website fix, tracking cleanup, WordPress update, or SEO implementation task."
  ]] : []);

  const locationInternalParagraphs = $derived(localTroubleParagraphs);
</script>

<Seo title={location.title} description={location.meta} schema={seoSchema} />

<main>
  <Hero
    eyebrow={`${location.city}, ${location.state}`}
    h1={`Local Website Support for ${location.city}, ${location.state} Businesses`}
    intro={`The Web Guy helps ${location.city}-area businesses with local-friendly hourly or project-based website support: WordPress support, website fixes, technical SEO, landing pages, tracking, ecommerce cleanup, and ongoing webmaster help.`}
    cta={`Request ${location.city} Web Support`}
    image={locationHeroImage(location)}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section split-section section-effect section-effect--hex section-effect--low">
    <div>
      <SectionHeading eyebrow={`${location.city} website support`} h2={`Website support for businesses near ${location.city}, ${location.state}`} />
      {#each location.context as paragraph}<p>{paragraph}</p>{/each}
      <InternalLinkCopy paragraphs={locationInternalParagraphs} />
    </div>
    <div>
      <SectionHeading eyebrow={`${location.city} website tasks`} h2={`Common website requests from ${location.city}-area businesses`} />
      <ul class="check-list">
        {#each location.tasks as task}<li>{task}</li>{/each}
      </ul>
    </div>
  </section>

  <ProofPanel proof={locationProof} />

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow={`${location.city} service fit`} h2={`Website services for ${location.city}-area sites`} />
    <CardGrid
      className="card-grid compact-grid"
      items={relatedServices.map((service) => [
        service.h1,
        service.intro,
        `/services/${service.slug}/`,
        `View ${service.eyebrow}`,
        service.slug
      ])}
    />
  </section>

  <section class="section split-section section-effect section-effect--hex section-effect--low">
    <div>
      <SectionHeading
        eyebrow={`Route ${location.city} web requests`}
        h2={`How ${location.city} website support requests usually start`}
        body={`Most ${location.city}-area website requests start with a specific symptom: a page needs updated, a form is not sending, tracking does not match leads, an SEO task is stuck, or WordPress needs cleanup.`}
      />
      <ul class="check-list">
        {#each relatedServices.slice(0, 3) as service}
          <li>
            <a class="text-link" href={serviceUrl(service.slug)} title={`View ${service.eyebrow} for ${location.city}, ${location.state} website support`}>{service.eyebrow}</a>
            <span>{service.intro}</span>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <SectionHeading
        eyebrow={`${location.city} technical support`}
        h2={`Technical website skills that may matter after the first look`}
        body={`Once the ${location.city} site issue is reproduced, the fix may involve a specific platform, tracking setup, template, script, API, performance problem, or hosting layer.`}
      />
      <ul class="check-list">
        {#each relatedSkills.slice(0, 3) as skill}
          <li>
            <a class="text-link" href={skillUrl(skill.slug)} title={`View ${skill.eyebrow} capability for ${location.city}, ${location.state} website support`}>{skill.eyebrow}</a>
            <span>{skill.connection}</span>
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <section class="section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow={`Hourly or project-based web help in ${location.city}`} h2={`A practical alternative to a full agency or full-time hire`} body={`Many ${location.city}-area businesses do not need a big agency package every time a page breaks, tracking fails, a plugin causes trouble, or a landing page needs launched. A free quote starts with the actual problem, so you can agree the scope and cost before work begins.`} />
    <CardGrid
      className="card-grid compact-grid"
      items={relatedSkills.map((skill) => [
        skill.h1,
        skill.intro,
        `/skills/${skill.slug}/`,
        `View ${skill.eyebrow}`,
        skill.slug
      ])}
    />
  </section>

  <NearbyLocations slugs={location.nearby} />

  <ContextualSupport
    eyebrow={`${location.city} nearby support`}
    heading={`Nearby website support paths around ${location.city}`}
    intro="Use these nearby city and service links when the issue connects local pages, forms, tracking, platform cleanup, or SEO implementation."
    items={contextualSupportItems}
  />

  <TopicalLinks
    eyebrow={`${location.city} support routes`}
    heading={`Related web support for ${location.city}-area businesses`}
    intro="These links connect local service-area pages to the services and skills most likely to solve the actual website problem."
    items={topicalItems}
  />

  <CtaBand heading={`Need web support in ${location.city}?`} copy={`Send the URL, issue, timeline, and what should happen next for the site.`} label={`Request ${location.city} Web Support`} />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${location.city} web support questions`} />
    <FaqList items={locationFaqs} />
  </section>
</main>
