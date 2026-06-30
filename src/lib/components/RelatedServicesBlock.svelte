<script>
  import { serviceMap, serviceUrl, skillMap, skillUrl } from "$lib/data/content.js";

  let {
    note = null,
    title = "Related services"
  } = $props();

  function resolvePath(slug) {
    const service = serviceMap[slug];
    if (service) {
      return {
        label: "Service path",
        title: service.eyebrow || service.h1,
        copy: service.intro,
        href: serviceUrl(service.slug)
      };
    }

    const skill = skillMap[slug];
    if (skill) {
      return {
        label: "Skill path",
        title: skill.eyebrow || skill.h1,
        copy: skill.intro,
        href: skillUrl(skill.slug)
      };
    }

    return null;
  }

  const items = $derived((note?.relatedServices || []).map(resolvePath).filter(Boolean));
</script>

{#if items.length}
  <section class="related-services-block">
    <div class="related-services-block__heading">
      <p class="eyebrow">Related services</p>
      <h2>{title}</h2>
    </div>

    <div class="related-services-block__grid">
      {#each items as item}
        <a href={item.href} title={`View ${item.title}`}>
          <span>{item.label}</span>
          <strong>{item.title}</strong>
          <em>{item.copy}</em>
        </a>
      {/each}
    </div>
  </section>
{/if}

<style>
  .related-services-block {
    display: grid;
    gap: 18px;
    margin-top: clamp(42px, 5vw, 62px);
    padding-top: clamp(30px, 4vw, 42px);
    border-top: 1px solid rgba(17, 24, 39, 0.10);
  }

  .related-services-block__heading {
    display: grid;
    gap: 6px;
  }

  .related-services-block__heading h2 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(1.45rem, 2vw, 1.95rem);
    line-height: 1.2;
  }

  .related-services-block__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .related-services-block__grid a {
    display: grid;
    gap: 8px;
    min-width: 0;
    padding: 18px;
    border: 1px solid rgba(8, 112, 82, 0.18);
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.10), rgba(255, 253, 250, 0.88) 48%),
      var(--panel);
    color: inherit;
    text-decoration: none;
    box-shadow: var(--shadow-soft);
  }

  .related-services-block__grid a:hover,
  .related-services-block__grid a:focus-visible {
    border-color: rgba(48, 199, 149, 0.48);
    transform: translateY(-1px);
  }

  .related-services-block__grid span {
    color: var(--accent-dark);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .related-services-block__grid strong {
    color: var(--ink);
    font-size: 1.05rem;
    line-height: 1.22;
  }

  .related-services-block__grid em {
    color: var(--muted);
    font-size: 0.92rem;
    font-style: normal;
    line-height: 1.5;
  }

  @media (max-width: 980px) {
    .related-services-block__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
