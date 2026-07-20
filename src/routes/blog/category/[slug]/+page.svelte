<script>
  import Seo from "$lib/components/Seo.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { blogCategoryUrl, blogTagMap, blogTagUrl, blogUrl } from "$lib/data/content.js";
  import { blogPostListSchema, breadcrumbSchema, schemaList } from "$lib/data/schema.js";
  import sitemapLastmod from "$lib/data/sitemap-lastmod.json";

  let { data } = $props();
  const category = $derived(data.category);
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
      const leftDate = sitemapLastmod[blogUrl(left.slug)] || "";
      const rightDate = sitemapLastmod[blogUrl(right.slug)] || "";
      const dateSort = rightDate.localeCompare(leftDate);
      if (dateSort) return dateSort;
      return (blogPostOrder.get(right.slug) ?? 0) - (blogPostOrder.get(left.slug) ?? 0);
    });
  });
  const featuredTags = $derived((category.featuredTags || []).map((slug) => blogTagMap[slug]).filter(Boolean));
  const summaryItems = $derived(sortedPosts.map((post) => ({
    label: post.problemType || "Blog",
    title: post.title.replace(" | The Web Guy", ""),
    copy: post.summary,
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
      body="These posts are grouped here because they solve closely related website problems and implementation questions."
    />
    <SummaryLinkGrid items={summaryItems} className="summary-link-grid summary-link-grid--compact" />
  </section>

  <CtaBand
    heading={`Need help with ${category.label.toLowerCase()} work?`}
    copy="Send the URL, the symptom, what should happen instead, and any recent changes."
    label="Fix My Web Problem"
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
