<script>
  import CardGrid from "./CardGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { serviceUrl } from "$lib/data/content.js";
  import { relatedServicesForService } from "$lib/data/relationships.js";

  let { service = { related: [] } } = $props();
  const related = $derived(relatedServicesForService(service));
</script>

<section class="section related-section section-effect section-effect--traces section-effect--low">
  <SectionHeading eyebrow={`Related ${service.eyebrow?.toLowerCase() || "website"} services`} h2={`Website services that often overlap with ${service.eyebrow || "this work"}`} />
  <CardGrid
    className="card-grid compact-grid"
    items={related.map((item) => [
      item.h1.replace(" at $55/hr", ""),
      item.intro,
      serviceUrl(item.slug),
      `View ${item.eyebrow}`,
      item.slug
    ])}
  />
</section>
