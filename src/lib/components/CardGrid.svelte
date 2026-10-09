<script>
  import ServiceIcon from "./ServiceIcon.svelte";

  let { items = [], className = "card-grid", mediaByTitle = {} } = $props();
  const iconSize = $derived(className.includes("compact-grid") ? "sm" : "default");

  function linkTitle(item) {
    const action = item[3] || "Learn more";
    return `${action}: ${item[0]}`;
  }

  function copyFor(item) {
    const copy = item[1] || "";
    return copy
      .replace(/^Use this service page when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this page when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this when\b/i, `Use ${item[0]} when`)
      .replace(/^Use this for\b/i, `Use ${item[0]} for`)
      .replace(/^Use this if\b/i, `Use ${item[0]} if`)
      .replace(/^Use this with\b/i, `Use ${item[0]} with`);
  }

  function mediaFor(item) {
    return mediaByTitle[item[0]];
  }
</script>

<div class={className}>
  {#each items as item}
    <article class="card" class:has-icon={!!item[4]} class:has-infographic={!!mediaFor(item)}>
      {#if mediaFor(item)}
        <div class="card-infographic">
          <img src={mediaFor(item).src} alt={mediaFor(item).alt} width="640" height="360" loading="lazy" decoding="async" />
        </div>
      {/if}
      <h3>{item[0]}</h3>
      {#if item[4]}
        <ServiceIcon slug={item[4]} size={iconSize} />
      {/if}
      <p>{copyFor(item)}</p>
      {#if item[2]}
        <a class="text-link" href={item[2]} title={linkTitle(item)}>{item[3] || "Learn more"}</a>
      {/if}
    </article>
  {/each}
</div>

<style>
  .card.has-infographic {
    display: flex;
    flex-direction: column;
  }

  .card-infographic {
    display: grid;
    aspect-ratio: 16 / 9;
    margin: -2px -2px 18px;
    place-items: center;
    overflow: hidden;
    border: 1px solid rgba(48, 199, 149, 0.18);
    border-radius: 7px;
    background:
      radial-gradient(circle at 72% 18%, rgba(48, 199, 149, 0.2), transparent 36%),
      linear-gradient(145deg, #0b1725, #102a33);
  }

  .card-infographic img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: saturate(0.92) contrast(1.02);
    transform: scale(0.96);
    transition: transform 220ms ease, filter 220ms ease;
  }

  .card.has-infographic:hover .card-infographic img {
    filter: saturate(1.04) contrast(1.04);
    transform: scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .card-infographic img { transition: none; }
  }
</style>
