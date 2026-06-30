<script>
  import { fixNoteCategorySlug, fixNoteCategoryUrl, fixNoteDisplayDate, fixNoteUrl } from "$lib/data/content.js";

  let {
    note = null,
    className = "",
    showTools = true,
    showTags = false
  } = $props();

  const categorySlug = $derived(note ? fixNoteCategorySlug(note.category) : "");
  const tools = $derived((note?.toolsUsed || []).slice(0, 3));
  const tags = $derived((note?.tags || []).slice(0, 4));
</script>

{#if note}
  <article class={`fix-note-card ${className}`.trim()}>
    <div class="fix-note-card__meta">
      <a class="fix-note-pill" href={fixNoteCategoryUrl(categorySlug)} title={`View ${note.category} Fix Notes`}>
        {note.category}
      </a>
      <time datetime={note.date}>{fixNoteDisplayDate(note)}</time>
    </div>

    <h3><a href={fixNoteUrl(note.slug)} title={`Read the Fix Note: ${note.title}`}>{note.title}</a></h3>
    <p>{note.excerpt}</p>

    {#if showTools && tools.length}
      <div class="fix-note-card__chips" aria-label={`${note.title} tools used`}>
        {#each tools as tool}
          <span>{tool}</span>
        {/each}
      </div>
    {:else if showTags && tags.length}
      <div class="fix-note-card__chips" aria-label={`${note.title} tags`}>
        {#each tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    {/if}

    <a class="fix-note-card__link" href={fixNoteUrl(note.slug)} title={`Read the Fix Note: ${note.title}`}>Read note -&gt;</a>
  </article>
{/if}

<style>
  .fix-note-card {
    display: grid;
    gap: 12px;
    min-width: 0;
    padding: clamp(18px, 2.5vw, 22px);
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.08), transparent 46%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025)),
      #111a26;
    color: var(--white);
    box-shadow: 0 16px 38px rgba(16, 23, 34, 0.16);
  }

  .fix-note-card__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    color: #d5dfeb;
    font-size: 0.82rem;
    line-height: 1.2;
  }

  .fix-note-pill {
    display: inline-flex;
    align-items: center;
    min-height: 28px;
    padding: 6px 10px;
    border: 1px solid rgba(48, 199, 149, 0.34);
    border-radius: 999px;
    background: rgba(48, 199, 149, 0.12);
    color: var(--accent);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.1;
    text-decoration: none;
    text-transform: uppercase;
  }

  .fix-note-pill:hover,
  .fix-note-pill:focus-visible {
    border-color: rgba(48, 199, 149, 0.68);
    background: rgba(48, 199, 149, 0.18);
  }

  h3 {
    margin: 0;
    color: var(--white);
    font-size: clamp(1.05rem, 1.6vw, 1.24rem);
    line-height: 1.23;
  }

  h3 a {
    color: inherit;
    text-decoration: none;
  }

  h3 a:hover,
  h3 a:focus-visible {
    color: var(--accent);
  }

  p {
    margin: 0;
    color: #d8e1eb;
    font-size: 0.96rem;
    line-height: 1.58;
  }

  .fix-note-card__chips {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .fix-note-card__chips span {
    display: inline-flex;
    align-items: center;
    min-height: 26px;
    padding: 5px 8px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.055);
    color: #e7edf5;
    font-size: 0.76rem;
    font-weight: 700;
    line-height: 1.1;
  }

  .fix-note-card__link {
    width: fit-content;
    color: var(--accent);
    font-weight: 800;
    text-decoration: none;
  }

  .fix-note-card__link:hover,
  .fix-note-card__link:focus-visible {
    color: var(--white);
  }
</style>
