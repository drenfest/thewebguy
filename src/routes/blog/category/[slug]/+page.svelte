<script>
  import { updates, linkedCopy } from "$lib/data/editorial-updates.js";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { blogCategoryUrl, blogTagMap, blogTagUrl, blogUrl } from "$lib/data/content.js";
  import { blogPostListSchema, breadcrumbSchema, schemaList } from "$lib/data/schema.js";
  import { updatedDateForUrl } from "$lib/data/content-dates.js";

  let { data } = $props();
  const category = $derived(data.category);
  const editorial = $derived(updates.collections[`/blog/category/${category.slug}/`]);
  const categoryPath = $derived(blogCategoryUrl(category.slug));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Blog", href: "/blog/", title: "View the website troubleshooting blog" },
    { label: category.label, title: `Current blog category: ${category.label}` }
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, categoryPath),
    blogPostListSchema(category.posts, categoryPath)
  ));
  const sortedPosts = $derived.by(() => {
    const posts = category.posts || [];
    const blogPostOrder = new Map(posts.map((post, index) => [post.slug, index]));

    return [...posts].sort((left, right) => {
      const leftDate = updatedDateForUrl(blogUrl(left.slug));
      const rightDate = updatedDateForUrl(blogUrl(right.slug));
      const dateSort = rightDate.localeCompare(leftDate);
      if (dateSort) return dateSort;
      return (blogPostOrder.get(right.slug) ?? 0) - (blogPostOrder.get(left.slug) ?? 0);
    });
  });
  const featuredTags = $derived((category.featuredTags || []).map((slug) => blogTagMap[slug]).filter(Boolean));
  const summaryItems = $derived(sortedPosts.map((post) => ({
    label: post.problemType || "Blog",
    title: post.title.replace(" | The Web Guy", ""),
    copy: category.slug === "seo-pages-ai" && post.slug === "ai-built-website-not-ready-to-launch"
      ? "Check routing, forms, tracking, accessibility and the other production details before sending visitors to an AI-built site."
      : post.summary,
    href: blogUrl(post.slug),
    linkLabel: "Read article"
  })));
</script>

<Seo
  title={`${category.label} Blog Category | The Web Guy`}
  description={`${category.label} articles from The Web Guy. ${category.description}`}
  schema={seoSchema}
/>

<main>
  <section class="section blog-taxonomy-hero section-effect section-effect--grid section-effect--low">
    <div class="blog-taxonomy-hero__inner">
      <p class="eyebrow">Blog category</p>
      <h1>{category.label}</h1>
      <p>{category.description}</p>
      {#if featuredTags.length}
        <div class="blog-taxonomy-chip-row" aria-label={`${category.label} featured tags`}>
          {#each featuredTags as tag}
            <a href={blogTagUrl(tag.slug)} title={`View ${tag.label} tagged posts`}>{tag.label}</a>
          {/each}
        </div>
      {/if}
    </div>
  </section>

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Articles"
      h2={`${category.label} troubleshooting posts`}
    />
    <InternalLinkCopy paragraphs={[linkedCopy(Object.values(editorial?.copy || {})[0] || "", editorial?.links || [])]} />
    <SummaryLinkGrid items={summaryItems} className="summary-link-grid summary-link-grid--compact" />
  </section>

  <CtaBand
    heading={editorial?.copy["Final quote-section heading."] || "Need help with this on your website?"}
    copy="Send the URL, the symptom, what should happen instead, and any recent changes."
    label="Get a Free Quote"
    secondaryLabel="View Blog"
    secondaryHref="/blog/"
  />
</main>

<style>
  .blog-taxonomy-hero__inner {
    width: min(860px, 100%);
  }

  .blog-taxonomy-hero h1 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(2.25rem, 5vw, 4.4rem);
    line-height: 1;
  }

  .blog-taxonomy-hero p:not(.eyebrow) {
    max-width: 760px;
    margin: 18px 0 0;
    color: var(--muted);
    font-size: clamp(1.05rem, 1.5vw, 1.22rem);
    line-height: 1.66;
  }

  .blog-taxonomy-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 22px;
  }

  .blog-taxonomy-chip-row a {
    display: inline-flex;
    align-items: center;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(16, 76, 115, 0.1);
    color: var(--brand-deep);
    text-decoration: none;
    font-weight: 600;
  }
</style>
