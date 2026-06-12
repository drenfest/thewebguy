<script>
  import CardGrid from "./CardGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { skillMap, skillUrl } from "$lib/data/content.js";

  let { slugs = [] } = $props();
  const skills = $derived(slugs.map((slug) => skillMap[slug]).filter(Boolean));
</script>

{#if skills.length}
  <section class="section related-section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="Related skills" h2="Technical strengths behind this work" />
    <CardGrid
      className="card-grid compact-grid"
      items={skills.map((skill) => [skill.h1.replace(" at $55/hr", ""), skill.intro, skillUrl(skill.slug), `View ${skill.eyebrow}`, skill.slug])}
    />
  </section>
{/if}
