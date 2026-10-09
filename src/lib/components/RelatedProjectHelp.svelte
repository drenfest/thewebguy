<script>
  import { onMount } from "svelte";

  let {
    eyebrow = "Related project help",
    heading = "Related help for this project",
    intro = "These nearby services and technical paths can become relevant when the project expands.",
    items = [],
    sectionId = undefined
  } = $props();

  let track = $state();
  let canGoPrevious = $state(false);
  let canGoNext = $state(false);

  function updateControls() {
    if (!track) return;
    canGoPrevious = track.scrollLeft > 4;
    canGoNext = track.scrollLeft + track.clientWidth < track.scrollWidth - 4;
  }

  function move(direction) {
    if (!track) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.78, 280),
      behavior: reduceMotion ? "auto" : "smooth"
    });
  }

  function keepFocusedCardVisible(event) {
    const card = event.target.closest("article");
    if (!card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
  }

  onMount(() => {
    updateControls();
    const observer = new ResizeObserver(updateControls);
    if (track) observer.observe(track);
    return () => observer.disconnect();
  });
</script>

{#if items.length}
  <section class="section related-project-help section-effect section-effect--traces section-effect--low" id={sectionId}>
    <div class="related-project-help__header">
      <div class="section-heading">
        <p class="eyebrow">{eyebrow}</p>
        <h2>{heading}</h2>
        <p>{intro}</p>
      </div>

      <div class="related-project-help__controls" aria-label="Related help carousel controls">
        <button type="button" onclick={() => move(-1)} disabled={!canGoPrevious} aria-label="Show previous related help cards">
          <span aria-hidden="true">←</span>
        </button>
        <button type="button" onclick={() => move(1)} disabled={!canGoNext} aria-label="Show next related help cards">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <div
      class="related-project-help__track"
      bind:this={track}
      onscroll={updateControls}
      onfocusin={keepFocusedCardVisible}
      aria-label="Related help for this project"
    >
      {#each items as item}
        <article class="related-project-help__card">
          <span>{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.copy}</p>
          <a class="text-link" href={item.href} title={`View ${item.title}`}>{item.linkLabel}</a>
        </article>
      {/each}
    </div>
  </section>
{/if}

<style>
  .related-project-help {
    overflow: hidden;
  }

  .related-project-help__header {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 22px;
  }

  .related-project-help__header .section-heading {
    margin: 0;
  }

  .related-project-help__header .section-heading p:not(.eyebrow) {
    max-width: 720px;
  }

  .related-project-help__controls {
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
  }

  .related-project-help__controls button {
    display: grid;
    width: 44px;
    height: 44px;
    place-items: center;
    border: 1px solid rgba(8, 112, 82, 0.28);
    border-radius: 999px;
    background: var(--panel);
    color: var(--accent-dark);
    cursor: pointer;
    font: inherit;
    font-size: 1.2rem;
    box-shadow: var(--shadow-soft);
  }

  .related-project-help__controls button:hover:not(:disabled),
  .related-project-help__controls button:focus-visible {
    border-color: var(--accent);
    outline: 3px solid rgba(48, 199, 149, 0.22);
    outline-offset: 2px;
  }

  .related-project-help__controls button:disabled {
    cursor: default;
    opacity: 0.38;
  }

  .related-project-help__track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: clamp(260px, 29vw, 340px);
    gap: 14px;
    max-width: 100%;
    padding: 2px 2px 16px;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scroll-padding-inline: 2px;
    scroll-snap-type: inline mandatory;
    scrollbar-width: thin;
    scrollbar-color: rgba(8, 112, 82, 0.45) transparent;
  }

  .related-project-help__card {
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    gap: 9px;
    min-width: 0;
    min-height: 240px;
    padding: 20px;
    border: 1px solid rgba(8, 112, 82, 0.18);
    border-radius: 10px;
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.09), rgba(255, 253, 250, 0.92) 48%),
      var(--panel);
    box-shadow: var(--shadow-soft);
    scroll-snap-align: start;
    scroll-margin-inline: 2px;
  }

  .related-project-help__card > span {
    color: var(--accent-dark);
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .related-project-help__card h3,
  .related-project-help__card p {
    margin: 0;
  }

  .related-project-help__card h3 {
    color: var(--ink);
    font-size: 1.08rem;
    line-height: 1.25;
  }

  .related-project-help__card p {
    color: var(--muted);
    font-size: 0.94rem;
    line-height: 1.55;
  }

  .related-project-help__card .text-link {
    width: fit-content;
  }

  @media (max-width: 700px) {
    .related-project-help__header {
      align-items: start;
      margin-bottom: 18px;
    }

    .related-project-help__controls button {
      width: 40px;
      height: 40px;
    }

    .related-project-help__track {
      grid-auto-columns: min(82vw, 310px);
      padding-bottom: 12px;
    }

    .related-project-help__card {
      min-height: 224px;
      padding: 18px;
    }
  }

  @media (max-width: 460px) {
    .related-project-help__header {
      display: grid;
    }

    .related-project-help__controls {
      justify-self: end;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .related-project-help__track {
      scroll-behavior: auto;
    }
  }
</style>
