<script>
  import FixNoteCard from "./FixNoteCard.svelte";
  import { fixNoteCategories, fixNoteCategoryUrl } from "$lib/data/content.js";

  let {
    notes = [],
    currentCategorySlug = "",
    showCategoryNav = true,
    emptyMessage = "No Fix Notes are published in this category yet."
  } = $props();

  const categoryLinks = $derived(fixNoteCategories.map((category) => ({
    ...category,
    count: category.notes.length
  })));
</script>

{#if showCategoryNav}
  <nav class="fix-note-category-nav" aria-label="Browse Fix Notes by category">
    <a class:active={!currentCategorySlug} href="/fix-notes/" title="View all Fix Notes">All Fix Notes</a>
    {#each categoryLinks as category}
      <a
        class:active={currentCategorySlug === category.slug}
        href={fixNoteCategoryUrl(category.slug)}
        title={`View ${category.label} Fix Notes`}
      >
        {category.label}
        <span>{category.count}</span>
      </a>
    {/each}
  </nav>
{/if}

{#if notes.length}
  <div class="fix-note-list">
    {#each notes as note}
      <FixNoteCard {note} showTools={true} />
    {/each}
  </div>
{:else}
  <div class="fix-note-list-empty">
    <p>{emptyMessage}</p>
    <a href="/fix-notes/" title="View all Fix Notes">View all Fix Notes</a>
  </div>
{/if}

<style>
  .fix-note-category-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: clamp(24px, 4vw, 36px);
  }

  .fix-note-category-nav a {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 36px;
    padding: 8px 11px;
    border: 1px solid rgba(8, 112, 82, 0.20);
    border-radius: 999px;
    background: rgba(255, 253, 250, 0.72);
    color: var(--accent-dark);
    font-size: 0.84rem;
    font-weight: 800;
    line-height: 1.1;
    text-decoration: none;
  }

  .fix-note-category-nav a:hover,
  .fix-note-category-nav a:focus-visible,
  .fix-note-category-nav a.active {
    border-color: rgba(48, 199, 149, 0.58);
    background: #f1fbf7;
    color: #0f3d31;
  }

  .fix-note-category-nav span {
    color: var(--muted);
    font-size: 0.76rem;
  }

  .fix-note-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .fix-note-list-empty {
    display: grid;
    gap: 12px;
    max-width: 720px;
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel);
    box-shadow: var(--shadow-soft);
  }

  .fix-note-list-empty p {
    margin: 0;
    color: var(--muted);
  }

  .fix-note-list-empty a {
    width: fit-content;
    color: var(--accent-dark);
    font-weight: 800;
    text-decoration: none;
  }

  @media (max-width: 780px) {
    .fix-note-list {
      grid-template-columns: 1fr;
    }

    .fix-note-category-nav {
      gap: 7px;
    }
  }
</style>
