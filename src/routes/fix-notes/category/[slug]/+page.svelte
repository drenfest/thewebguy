<script>
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FixNoteList from "$lib/components/FixNoteList.svelte";
  import { fixNoteCategoryUrl } from "$lib/data/content.js";
  import { breadcrumbSchema, fixNoteListSchema, schemaList } from "$lib/data/schema.js";

  let { data } = $props();
  const category = $derived(data.category);
  const categoryPath = $derived(fixNoteCategoryUrl(category.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Fix Notes", href: "/fix-notes/", title: "View all Fix Notes" },
    { label: category.label, title: `Current Fix Notes category: ${category.label}` }
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, categoryPath),
    fixNoteListSchema(category.notes, categoryPath)
  ));
</script>

<Seo
  title={`${category.label} Fix Notes | The Web Guy`}
  description={`${category.label} Fix Notes from The Web Guy. ${category.description}`}
  schema={seoSchema}
/>

<main>
  <section class="section fix-note-category-hero section-effect section-effect--grid section-effect--low">
    <div class="fix-note-category-hero__inner">
      <p class="eyebrow">Fix Notes</p>
      <h1>{category.label} Fix Notes</h1>
      <p>{category.description}</p>
    </div>
  </section>

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Related Fix Notes"
      h2={`Recent ${category.label.toLowerCase()} notes`}
      body="Short work notes from related cleanup, debugging, implementation, and support tasks."
    />
    <FixNoteList notes={category.notes} currentCategorySlug={category.slug} />
  </section>

  <CtaBand
    heading="Have a similar issue?"
    copy="Send the URL and a short description of what needs fixed."
    label="Fix My Web Problem"
  />
</main>

<style>
  .fix-note-category-hero__inner {
    width: min(860px, 100%);
  }

  .fix-note-category-hero h1 {
    max-width: 780px;
    margin: 0;
    color: var(--ink);
    font-size: clamp(2.25rem, 5vw, 4.4rem);
    line-height: 1;
  }

  .fix-note-category-hero p:not(.eyebrow) {
    max-width: 720px;
    margin: 18px 0 0;
    color: var(--muted);
    font-size: clamp(1.05rem, 1.5vw, 1.22rem);
    line-height: 1.66;
  }
</style>
