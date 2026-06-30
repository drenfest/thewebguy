<script>
  import FixNoteCard from "./FixNoteCard.svelte";
  import SectionHeading from "./SectionHeading.svelte";
  import {
    fixNoteCategorySlug,
    fixNoteCategoryUrl,
    fixNotesDescription,
    getFixNotes
  } from "$lib/data/content.js";

  let {
    title = "Recent Fix Notes",
    description = fixNotesDescription,
    category = "",
    serviceSlug = "",
    limit = 3,
    showViewAllLink = true
  } = $props();

  const notes = $derived(getFixNotes({ category, serviceSlug, limit, fallback: true }));
  const viewAllHref = $derived(category ? fixNoteCategoryUrl(fixNoteCategorySlug(category)) : "/fix-notes/");
</script>

{#if notes.length}
  <section class="section fix-notes-panel-section section-effect section-effect--signals section-effect--low">
    <div class="fix-notes-panel">
      <div class="fix-notes-panel__header">
        <SectionHeading eyebrow="Fix Notes" h2={title} body={description} />
        {#if showViewAllLink}
          <a href={viewAllHref} title="View more Fix Notes">View more fix notes -&gt;</a>
        {/if}
      </div>

      <div class="fix-notes-panel__grid">
        {#each notes as note}
          <FixNoteCard {note} showTools={false} showTags={true} />
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  .fix-notes-panel {
    display: grid;
    gap: clamp(22px, 3vw, 30px);
    padding: clamp(22px, 4vw, 34px);
    border: 1px solid rgba(16, 23, 34, 0.12);
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.12), rgba(79, 124, 255, 0.06) 48%, transparent),
      #0f1723;
    box-shadow: 0 18px 42px rgba(16, 23, 34, 0.16);
  }

  .fix-notes-panel__header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 18px;
    align-items: end;
  }

  .fix-notes-panel__header :global(.section-heading) {
    margin: 0;
  }

  .fix-notes-panel__header :global(.section-heading h2),
  .fix-notes-panel__header :global(.section-heading .eyebrow) {
    color: var(--white);
  }

  .fix-notes-panel__header :global(.section-heading p:not(.eyebrow)) {
    max-width: 720px;
    color: #dce5ef;
  }

  .fix-notes-panel__header > a {
    align-self: center;
    color: var(--accent);
    font-weight: 800;
    text-decoration: none;
    white-space: nowrap;
  }

  .fix-notes-panel__header > a:hover,
  .fix-notes-panel__header > a:focus-visible {
    color: var(--white);
  }

  .fix-notes-panel__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 980px) {
    .fix-notes-panel__grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 680px) {
    .fix-notes-panel {
      padding: 20px;
    }

    .fix-notes-panel__header {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .fix-notes-panel__header > a {
      white-space: normal;
    }
  }
</style>
