<script>
  import CardGrid from "./CardGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { locationMap, locationUrl } from "$lib/data/content.js";

  let { slugs = [] } = $props();
  const locations = $derived(slugs.map((slug) => locationMap[slug]).filter(Boolean));
</script>

{#if locations.length}
  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Nearby website support areas" h2="Nearby local website support pages" />
    <CardGrid
      className="card-grid compact-grid"
      items={locations.map((location) => [
        `${location.city}, ${location.state}`,
        `Hourly remote-friendly website support for businesses in and around ${location.city}.`,
        locationUrl(location.slug),
        `View ${location.city} web support`
      ])}
    />
  </section>
{/if}
