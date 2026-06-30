<script>
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import RelatedFixNotes from "$lib/components/RelatedFixNotes.svelte";
  import RelatedServicesBlock from "$lib/components/RelatedServicesBlock.svelte";
  import {
    fixNoteCategorySlug,
    fixNoteCategoryUrl,
    fixNoteDisplayDate,
    fixNoteLastUpdatedDate,
    fixNoteUrl
  } from "$lib/data/content.js";
  import { breadcrumbSchema, fixNoteArticleSchema, schemaList } from "$lib/data/schema.js";

  let { data } = $props();
  const note = $derived(data.note);
  const notePath = $derived(fixNoteUrl(note.slug));
  const categorySlug = $derived(fixNoteCategorySlug(note.category));
  const lastUpdatedDate = $derived(fixNoteLastUpdatedDate(note));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Fix Notes", href: "/fix-notes/", title: "View all Fix Notes" },
    { label: note.title, title: `Current Fix Note: ${note.title}` }
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, notePath),
    fixNoteArticleSchema(note, notePath)
  ));
</script>

<Seo
  title={note.metaTitle || `${note.title} | The Web Guy`}
  description={note.metaDescription || note.excerpt}
  schema={seoSchema}
/>

<main>
  <section class="section fix-note-hero section-effect section-effect--signals section-effect--low">
    <div class="fix-note-hero__inner">
      <a class="fix-note-pill" href={fixNoteCategoryUrl(categorySlug)} title={`View ${note.category} Fix Notes`}>
        {note.category}
      </a>
      <h1>{note.title}</h1>
      <p>{note.excerpt}</p>
      <div class="fix-note-hero__dates">
        <time datetime={note.date}>{fixNoteDisplayDate(note)}</time>
        {#if lastUpdatedDate}
          <span>Updated <time datetime={note.lastUpdated}>{lastUpdatedDate}</time></span>
        {/if}
      </div>
    </div>
  </section>

  <Breadcrumbs items={breadcrumbs} />

  <section class="section fix-note-article-section section-effect section-effect--grid section-effect--low">
    <article class="fix-note-article">
      <section class="fix-note-intro">
        <h2>Quick summary</h2>
        <p>{note.excerpt}</p>
      </section>

      <section class="fix-note-section">
        <h2>The problem</h2>
        <p>{note.problemSummary}</p>
      </section>

      <section class="fix-note-section">
        <h2>What I checked</h2>
        <ul>
          {#each note.whatIChecked as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="fix-note-section">
        <h2>What I changed</h2>
        <ul>
          {#each note.whatIChanged as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      <section class="fix-note-section">
        <h2>Result</h2>
        <p>{note.resultSummary}</p>
      </section>

      <section class="fix-note-section">
        <h2>What I'd watch next</h2>
        <ul>
          {#each note.whatToWatchNext as item}
            <li>{item}</li>
          {/each}
        </ul>
      </section>

      {#if note.toolsUsed?.length}
        <section class="fix-note-section">
          <h2>Tools used</h2>
          <div class="fix-note-tags">
            {#each note.toolsUsed as tool}
              <span>{tool}</span>
            {/each}
          </div>
        </section>
      {/if}

      <RelatedServicesBlock {note} />
      <RelatedFixNotes {note} />
    </article>
  </section>

  <CtaBand
    heading="Need help with something similar?"
    copy="Send the URL and what needs fixed."
    label="Send the URL"
  />
</main>

<style>
  .fix-note-hero {
    background:
      linear-gradient(135deg, rgba(48, 199, 149, 0.10), rgba(79, 124, 255, 0.05) 48%, transparent),
      linear-gradient(180deg, #101722, #121d2a);
  }

  .fix-note-hero__inner {
    display: grid;
    gap: 16px;
    width: min(920px, 100%);
  }

  .fix-note-pill {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    min-height: 30px;
    padding: 7px 11px;
    border: 1px solid rgba(48, 199, 149, 0.38);
    border-radius: 999px;
    background: rgba(48, 199, 149, 0.13);
    color: var(--accent);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.1;
    text-decoration: none;
    text-transform: uppercase;
  }

  .fix-note-pill:hover,
  .fix-note-pill:focus-visible {
    border-color: rgba(48, 199, 149, 0.72);
    background: rgba(48, 199, 149, 0.20);
  }

  .fix-note-hero h1 {
    max-width: 900px;
    margin: 0;
    color: var(--white);
    font-size: clamp(2.1rem, 5.5vw, 4.45rem);
    line-height: 1;
  }

  .fix-note-hero p {
    max-width: 780px;
    margin: 0;
    color: #dce5ef;
    font-size: clamp(1.08rem, 1.6vw, 1.28rem);
    line-height: 1.68;
  }

  .fix-note-hero__dates {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    color: #c7d2df;
    font-size: 0.94rem;
    font-weight: 700;
  }

  .fix-note-article {
    width: min(900px, 100%);
    margin: 0 auto;
    padding: clamp(28px, 4vw, 54px);
    border: 1px solid var(--line);
    border-radius: 8px;
    background:
      linear-gradient(180deg, rgba(255, 253, 250, 0.94), rgba(255, 253, 250, 0.84)),
      var(--panel);
    box-shadow: var(--shadow-soft);
  }

  .fix-note-article::before {
    content: "";
    display: block;
    height: 3px;
    margin: clamp(-54px, -4vw, -28px) clamp(-54px, -4vw, -28px) clamp(22px, 3vw, 30px);
    border-radius: 8px 8px 0 0;
    background: linear-gradient(90deg, var(--accent), rgba(79, 124, 255, 0.55), var(--gold));
  }

  .fix-note-intro {
    margin-bottom: clamp(34px, 5vw, 50px);
    padding-bottom: clamp(28px, 4vw, 40px);
    border-bottom: 1px solid rgba(17, 24, 39, 0.10);
  }

  .fix-note-intro p {
    margin: 0;
    color: #293344;
    font-size: clamp(1.12rem, 1.5vw, 1.24rem);
    line-height: 1.74;
  }

  .fix-note-intro h2 {
    margin: 0 0 12px;
    color: var(--ink);
    font-size: clamp(1.45rem, 2.2vw, 2rem);
    line-height: 1.2;
  }

  .fix-note-section + .fix-note-section {
    margin-top: clamp(34px, 4vw, 48px);
    padding-top: clamp(26px, 3vw, 36px);
    border-top: 1px solid rgba(17, 24, 39, 0.10);
  }

  .fix-note-section h2 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(1.45rem, 2.2vw, 2rem);
    line-height: 1.2;
  }

  .fix-note-section p {
    max-width: 780px;
    margin: 14px 0 0;
    color: var(--muted);
    font-size: 1.05rem;
    line-height: 1.72;
  }

  .fix-note-section ul {
    display: grid;
    gap: 10px;
    max-width: 780px;
    margin: 18px 0 0;
    padding: 0;
    color: #293344;
    list-style: none;
  }

  .fix-note-section li {
    position: relative;
    padding-left: 26px;
    line-height: 1.55;
  }

  .fix-note-section li::before {
    content: "";
    position: absolute;
    top: 0.72em;
    left: 0;
    width: 9px;
    height: 9px;
    border-radius: 3px;
    background: var(--accent);
    box-shadow: 0 0 0 4px rgba(48, 199, 149, 0.10);
  }

  .fix-note-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 18px;
  }

  .fix-note-tags span {
    display: inline-flex;
    align-items: center;
    min-height: 30px;
    padding: 6px 10px;
    border: 1px solid rgba(8, 112, 82, 0.18);
    border-radius: 999px;
    background: #f1fbf7;
    color: var(--accent-dark);
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.1;
  }

  @media (max-width: 680px) {
    .fix-note-article {
      padding: 24px 18px;
    }

    .fix-note-article::before {
      margin: -24px -18px 22px;
    }
  }
</style>
