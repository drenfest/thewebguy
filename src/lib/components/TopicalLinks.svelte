<script>
  let {
    eyebrow = "Related support",
    heading = "Useful next places to look",
    intro = "",
    items = []
  } = $props();

  function linkTitle(item) {
    return `View ${item.title}: ${item.label}`;
  }

  function copyFor(item) {
    const copy = item.copy || "";
    return copy
      .replace(/^Use this service page when\b/i, `Use ${item.title} when`)
      .replace(/^Use this page when\b/i, `Use ${item.title} when`)
      .replace(/^Use this when\b/i, `Use ${item.title} when`)
      .replace(/^Use this for\b/i, `Use ${item.title} for`)
      .replace(/^Use this if\b/i, `Use ${item.title} if`)
      .replace(/^Use this with\b/i, `Use ${item.title} with`);
  }
</script>

{#if items.length}
  <section class="section topical-section section-effect section-effect--traces section-effect--low">
    <div class="topical-panel">
      <div class="section-heading">
        <p class="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        {#if intro}<p>{intro}</p>{/if}
      </div>
      <ul class="topical-link-list">
        {#each items as item}
          <li>
            <span>{item.label}</span>
            <p><a href={item.href} title={linkTitle(item)}>{item.title}</a> <em>{copyFor(item)}</em></p>
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/if}
