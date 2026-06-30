<script>
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FixNoteCard from "$lib/components/FixNoteCard.svelte";
  import FixNoteList from "$lib/components/FixNoteList.svelte";
  import {
    fixNoteCategories,
    fixNoteCategoryUrl,
    fixNotesDescription,
    sortedFixNotes
  } from "$lib/data/content.js";
  import { breadcrumbSchema, fixNoteListSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Fix Notes", title: "Current page: Fix Notes" }
  ];
  const seoSchema = schemaList(
    breadcrumbSchema(breadcrumbs, "/fix-notes/"),
    fixNoteListSchema(sortedFixNotes, "/fix-notes/")
  );
  const recentNotes = sortedFixNotes.slice(0, 3);
</script>

<Seo
  title="Fix Notes | The Web Guy"
  description="Short work notes from website cleanup, debugging, implementation, and support tasks by The Web Guy."
  schema={seoSchema}
/>

<main>
  <section class="section fix-notes-archive-hero section-effect section-effect--grid section-effect--low">
    <div class="fix-notes-archive-hero__inner">
      <p class="eyebrow">Fix Notes</p>
      <h1>Fix Notes</h1>
      <p>
        Short work notes from website cleanup, debugging, implementation, and support tasks. These are practical examples of the kinds of issues I work through across real website projects.
      </p>
    </div>
  </section>

  <Breadcrumbs items={breadcrumbs} />

  <section class="section fix-notes-recent section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Recent website fixes"
      h2="Featured recent Fix Notes"
      body={fixNotesDescription}
    />
    <div class="fix-notes-recent__grid">
      {#each recentNotes as note}
        <FixNoteCard {note} showTools={false} showTags={true} />
      {/each}
    </div>
  </section>

  <section class="section soft-section fix-notes-categories section-effect section-effect--traces section-effect--low">
    <SectionHeading
      eyebrow="Browse by category"
      h2="Find Fix Notes by practical work type"
      body="Use the categories to jump into cleanup notes by site issue, support path, platform, or implementation type."
    />
    <div class="fix-notes-categories__grid">
      {#each fixNoteCategories as category}
        <a href={fixNoteCategoryUrl(category.slug)} title={`View ${category.label} Fix Notes`}>
          <span>{category.notes.length} notes</span>
          <strong>{category.label}</strong>
          <em>{category.description}</em>
        </a>
      {/each}
    </div>
  </section>

  <section class="section fix-notes-latest section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Latest Fix Notes"
      h2="Latest practical work notes"
      body="Newest notes are listed first by date."
    />
    <FixNoteList notes={sortedFixNotes} showCategoryNav={false} />
  </section>

  <CtaBand
    heading="Have a similar issue?"
    copy="Send the URL and a short description of what needs fixed."
    label="Send the Website Problem"
  />
</main>

<style>
  .fix-notes-archive-hero__inner {
    width: min(860px, 100%);
  }

  .fix-notes-archive-hero h1 {
    max-width: 720px;
    margin: 0;
    color: var(--ink);
    font-size: clamp(2.55rem, 6vw, 5rem);
    line-height: 0.98;
  }

  .fix-notes-archive-hero p:not(.eyebrow) {
    max-width: 760px;
    margin: 18px 0 0;
    color: var(--muted);
    font-size: clamp(1.08rem, 1.7vw, 1.28rem);
    line-height: 1.68;
  }

  .fix-notes-recent__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .fix-notes-categories__grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  .fix-notes-categories__grid a {
    display: grid;
    gap: 8px;
    min-width: 0;
    padding: 18px;
    border: 1px solid rgba(8, 112, 82, 0.18);
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.09), rgba(255, 253, 250, 0.90) 50%),
      var(--panel);
    color: inherit;
    text-decoration: none;
    box-shadow: var(--shadow-soft);
  }

  .fix-notes-categories__grid a:hover,
  .fix-notes-categories__grid a:focus-visible {
    border-color: rgba(48, 199, 149, 0.52);
    transform: translateY(-1px);
  }

  .fix-notes-categories__grid span {
    color: var(--accent-dark);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.1;
    text-transform: uppercase;
  }

  .fix-notes-categories__grid strong {
    color: var(--ink);
    font-size: 1.05rem;
    line-height: 1.2;
  }

  .fix-notes-categories__grid em {
    color: var(--muted);
    font-size: 0.9rem;
    font-style: normal;
    line-height: 1.46;
  }

  @media (max-width: 1060px) {
    .fix-notes-categories__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 900px) {
    .fix-notes-recent__grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .fix-notes-categories__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
