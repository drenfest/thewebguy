<script>
  import CardGrid from "./CardGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { serviceMap, serviceUrl } from "$lib/data/content.js";

  let { service = { related: [] } } = $props();
  const related = $derived(service.related.map((slug) => serviceMap[slug]).filter(Boolean));
</script>

<section class="section related-section section-effect section-effect--traces section-effect--low">
  <SectionHeading eyebrow="Related services" h2="Other ways The Web Guy can help" />
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
