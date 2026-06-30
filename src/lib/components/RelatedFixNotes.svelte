<script>
  import FixNoteCard from "./FixNoteCard.svelte";
  import { getRelatedFixNotes } from "$lib/data/content.js";

  let {
    note = null,
    title = "Related Fix Notes",
    limit = 3
  } = $props();

  const notes = $derived(note ? getRelatedFixNotes(note, limit) : []);
</script>

{#if notes.length}
  <section class="related-fix-notes">
    <div class="related-fix-notes__heading">
      <p class="eyebrow">Related Fix Notes</p>
      <h2>{title}</h2>
    </div>
    <div class="related-fix-notes__grid">
      {#each notes as item}
        <FixNoteCard note={item} showTools={false} showTags={true} />
      {/each}
    </div>
  </section>
{/if}

<style>
  .related-fix-notes {
    display: grid;
    gap: 18px;
    margin-top: clamp(42px, 5vw, 62px);
    padding-top: clamp(30px, 4vw, 42px);
    border-top: 1px solid rgba(17, 24, 39, 0.10);
  }

  .related-fix-notes__heading {
    display: grid;
    gap: 6px;
  }

  .related-fix-notes__heading h2 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(1.45rem, 2vw, 1.95rem);
    line-height: 1.2;
  }

  .related-fix-notes__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  @media (max-width: 980px) {
    .related-fix-notes__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
