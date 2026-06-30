<script>
  import SummaryLinkGrid from "./SummaryLinkGrid.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import { skillUrl } from "$lib/data/content.js";
  import { resolveSkills } from "$lib/data/relationships.js";

  let { slugs = [] } = $props();
  const skills = $derived(resolveSkills(slugs));

  function bulletsFor(skill) {
    return [...(skill.problems || []).slice(0, 2), ...(skill.tasks || []).slice(0, 2)].slice(0, 4);
  }
</script>

{#if skills.length}
  <section class="section related-section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="Related technical skills" h2="Technical skills that support this website work" />
    <SummaryLinkGrid
      className="summary-link-grid summary-link-grid--compact"
      items={skills.map((skill) => ({
        label: skill.eyebrow,
        title: skill.h1.replace(" at $55/hr", ""),
        copy: skill.intro,
        bullets: bulletsFor(skill),
        href: skillUrl(skill.slug),
        linkLabel: `View ${skill.eyebrow}`
      }))}
    />
  </section>
{/if}
