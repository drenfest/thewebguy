<script>
  import SummaryLinkGrid from "./SummaryLinkGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { serviceUrl } from "$lib/data/content.js";
  import { relatedServicesForService } from "$lib/data/relationships.js";

  let { service = { related: [] } } = $props();
  const related = $derived(relatedServicesForService(service));

  function bulletsFor(item) {
    return item.sections?.find((section) => section.bullets)?.bullets?.slice(0, 4) || [
      "Dedicated page for this adjacent service path",
      "Useful when the request crosses more than one site problem",
      "Clear route if this page is close but not exact"
    ];
  }
</script>

<section class="section related-section section-effect section-effect--traces section-effect--low">
  <SectionHeading eyebrow={`Related ${service.eyebrow?.toLowerCase() || "website"} services`} h2={`Website services that often overlap with ${service.eyebrow || "this work"}`} />
  <SummaryLinkGrid
    className="summary-link-grid summary-link-grid--compact"
    items={related.map((item) => ({
      label: item.eyebrow,
      title: item.h1.replace(" at $55/hr", ""),
      copy: item.intro,
      bullets: bulletsFor(item),
      href: serviceUrl(item.slug),
      linkLabel: `View ${item.eyebrow}`
    }))}
  />
</section>
