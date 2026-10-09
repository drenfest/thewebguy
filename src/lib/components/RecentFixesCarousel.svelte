<script>
  import { onMount } from "svelte";
  import { fixNoteDisplayDate, fixNoteUrl, getFixNotes } from "$lib/data/content.js";

  const notes = getFixNotes({ limit: 10, fallback: true });

  let track = $state();
  let activeIndex = $state(0);
  let reduceMotion = $state(false);

  function clampIndex(index) {
    return Math.max(0, Math.min(notes.length - 1, index));
  }

  function updateActiveIndex() {
    if (!track) return;

    const firstSlide = track.children[0];
    const slideWidth = firstSlide?.getBoundingClientRect().width || track.clientWidth || 1;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    activeIndex = clampIndex(Math.round(track.scrollLeft / (slideWidth + gap)));
  }

  function scrollToSlide(index) {
    if (!track) return;

    const nextIndex = clampIndex(index);
    const slide = track.children[nextIndex];
    if (!slide) return;

    track.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth"
    });
    activeIndex = nextIndex;
  }

  function noteTags(note) {
    return (note.tags || []).slice(0, 3);
  }

  function firstItem(items, fallback) {
    return Array.isArray(items) && items.length ? items[0] : fallback;
  }

  onMount(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion = media.matches;

    const handleMotionChange = () => {
      reduceMotion = media.matches;
    };

    track?.addEventListener("scroll", updateActiveIndex, { passive: true });
    media.addEventListener("change", handleMotionChange);
    updateActiveIndex();

    return () => {
      track?.removeEventListener("scroll", updateActiveIndex);
      media.removeEventListener("change", handleMotionChange);
    };
  });
</script>

{#if notes.length}
  <section class="section proof-reel-section section-effect section-effect--signals section-effect--low" aria-labelledby="recent-fixes-title">
    <div class="proof-reel-shell">
      <div class="proof-reel-header">
        <div>
          <p class="eyebrow">Recent Web Fixes</p>
          <h2 id="recent-fixes-title">Recent Fixes From Real Website Work</h2>
          <p>Browse ten recent examples showing the symptom, the evidence checked, the change made, and the verified result.</p>
          <a class="recent-fixes-view-all" href="/fix-notes/" title="View all Web Fixes">View all Web Fixes -&gt;</a>
        </div>
        <div class="proof-reel-controls" aria-label="Recent fixes carousel controls">
          <button type="button" aria-label="Show previous recent fix" onclick={() => scrollToSlide(activeIndex - 1)} disabled={activeIndex === 0}>Prev</button>
          <button type="button" aria-label="Show next recent fix" onclick={() => scrollToSlide(activeIndex + 1)} disabled={activeIndex === notes.length - 1}>Next</button>
        </div>
      </div>

      <div class="proof-reel-viewport">
        <div class="proof-reel-track" bind:this={track} role="group" aria-label="Recent Web Fixes. Swipe, scroll, or use the controls to browse.">
          {#each notes as note, index}
            <article class="proof-slide recent-fix-slide" aria-roledescription="slide" aria-label={`${index + 1} of ${notes.length}: ${note.title}`}>
              <div class="recent-fix-meta">
                <time datetime={note.date}>{fixNoteDisplayDate(note)}</time>
                {#each noteTags(note) as tag}
                  <span>{tag}</span>
                {/each}
              </div>

              <h3><a href={fixNoteUrl(note.slug)} title={`Read the Web Fix: ${note.title}`}>{note.title}</a></h3>

              <dl class="recent-fix-details">
                <div>
                  <dt>Symptom</dt>
                  <dd>{note.problemSummary || note.excerpt}</dd>
                </div>
                <div>
                  <dt>Evidence</dt>
                  <dd>{note.evidenceSummary || firstItem(note.whatIChecked, note.excerpt)}</dd>
                </div>
                <div>
                  <dt>Change</dt>
                  <dd>{firstItem(note.whatIChanged, note.excerpt)}</dd>
                </div>
                <div>
                  <dt>Verified result</dt>
                  <dd>{note.resultSummary || note.excerpt}</dd>
                </div>
              </dl>

              <a class="recent-fix-link" href={fixNoteUrl(note.slug)} title={`Read the full Web Fix: ${note.title}`}>Read the Full Web Fix -&gt;</a>
            </article>
          {/each}
        </div>
      </div>

      <div class="proof-reel-dots" aria-label="Choose a recent Web Fix">
        {#each notes as note, index}
          <button
            type="button"
            class:active={activeIndex === index}
            aria-label={`Show recent fix ${index + 1}: ${note.title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onclick={() => scrollToSlide(index)}
          >
            <span>{index + 1}</span>
          </button>
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .recent-fixes-view-all,
  .recent-fix-link {
    display: inline-flex;
    width: fit-content;
    margin-top: 14px;
    color: var(--accent-dark);
    font-weight: 800;
    text-decoration: none;
  }

  .recent-fixes-view-all:hover,
  .recent-fixes-view-all:focus-visible,
  .recent-fix-link:hover,
  .recent-fix-link:focus-visible {
    color: #0b5440;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .recent-fix-slide {
    display: grid;
    align-content: start;
    min-height: clamp(440px, 42vw, 540px);
  }

  .recent-fix-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    color: #d5dfeb;
    font-size: 0.8rem;
    line-height: 1.2;
  }

  .recent-fix-meta span {
    display: inline-flex;
    align-items: center;
    min-height: 29px;
    padding: 6px 10px;
    border: 1px solid rgba(48, 199, 149, 0.34);
    border-radius: 999px;
    background: rgba(48, 199, 149, 0.11);
    color: var(--accent);
    font-weight: 800;
  }

  .recent-fix-slide h3 {
    max-width: 900px;
    font-size: clamp(1.25rem, 2.2vw, 1.8rem);
    line-height: 1.16;
  }

  .recent-fix-slide h3 a {
    color: inherit;
    text-decoration: none;
  }

  .recent-fix-slide h3 a:hover,
  .recent-fix-slide h3 a:focus-visible {
    color: var(--accent);
  }

  .recent-fix-details {
    display: grid;
    gap: 12px;
    margin: 22px 0 0;
  }

  .recent-fix-details > div {
    display: grid;
    grid-template-columns: minmax(112px, 0.18fr) minmax(0, 1fr);
    gap: 18px;
  }

  .recent-fix-details dt {
    color: var(--accent);
    font-weight: 800;
    line-height: 1.5;
  }

  .recent-fix-details dd {
    margin: 0;
    color: #dce5ef;
    line-height: 1.55;
  }

  .recent-fix-link {
    margin-top: 22px;
    color: var(--accent);
  }

  .recent-fix-link:hover,
  .recent-fix-link:focus-visible {
    color: var(--white);
  }

  @media (max-width: 680px) {
    .recent-fix-slide {
      min-height: 0;
      padding: 22px 20px;
    }

    .recent-fix-details > div {
      grid-template-columns: 1fr;
      gap: 3px;
    }
  }
</style>
