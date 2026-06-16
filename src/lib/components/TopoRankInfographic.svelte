<script>
  import { onMount } from "svelte";

  let {
    title = "TopoRank workflow",
    subtitle = "",
    steps = [],
    image = "",
    alt = title
  } = $props();
  let open = $state(false);

  function openLightbox() {
    open = true;
  }

  function closeLightbox() {
    open = false;
  }

  function closeFromBackdrop(event) {
    if (event.currentTarget === event.target) closeLightbox();
  }

  function handleDialogKeydown(event) {
    if (event.key === "Escape") closeLightbox();
  }

  onMount(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

<div class="toporank-infographic-block">
  <button type="button" class="toporank-infographic" onclick={openLightbox} aria-label={`Open ${title} infographic`}>
    <span class="toporank-infographic-title">{title}</span>
    {#if subtitle}<span class="toporank-infographic-subtitle">{subtitle}</span>{/if}
    {#if image}
      <img class="toporank-infographic-image" src={image} alt={alt} loading="lazy" decoding="async" />
    {:else}
      <span class="toporank-infographic-flow" aria-hidden="true">
        {#each steps as step, index}
          <span class="toporank-infographic-step">{step}</span>
          {#if index < steps.length - 1}<span class="toporank-infographic-arrow">-&gt;</span>{/if}
        {/each}
      </span>
    {/if}
    <span class="toporank-infographic-hint">Open enlarged workflow</span>
  </button>
</div>

{#if open}
  <div
    class="lightbox-backdrop"
    role="dialog"
    aria-modal="true"
    aria-labelledby="toporank-lightbox-title"
    tabindex="-1"
    onclick={closeFromBackdrop}
    onkeydown={handleDialogKeydown}
  >
    <div class="lightbox-panel">
      <button type="button" class="lightbox-close" aria-label="Close infographic" onclick={closeLightbox}>x</button>
      <p class="eyebrow">TopoRank process</p>
      <h2 id="toporank-lightbox-title">{title}</h2>
      {#if subtitle}<p>{subtitle}</p>{/if}
      {#if image}
        <img class="toporank-lightbox-image" src={image} alt={alt} decoding="async" />
      {:else}
        <div class="toporank-lightbox-flow">
          {#each steps as step, index}
            <div class="toporank-lightbox-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
            {#if index < steps.length - 1}<b aria-hidden="true">-&gt;</b>{/if}
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}
