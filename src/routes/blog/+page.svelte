<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import SummaryLinkGrid from "$lib/components/SummaryLinkGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import { blogCategories, blogCategoryMap, blogPosts, blogTagMap, blogTags, blogTagUrl, blogUrl } from "$lib/data/content.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { blogPostListSchema, breadcrumbSchema, schemaList } from "$lib/data/schema.js";
  import sitemapLastmod from "$lib/data/sitemap-lastmod.json";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Blog", title: "Current page: Website troubleshooting blog" }
  ];
  const blogPostOrder = new Map(blogPosts.map((post, index) => [post.slug, index]));
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const aDate = sitemapLastmod[blogUrl(a.slug)] || "";
    const bDate = sitemapLastmod[blogUrl(b.slug)] || "";
    const dateSort = bDate.localeCompare(aDate);
    if (dateSort) return dateSort;
    return (blogPostOrder.get(b.slug) ?? 0) - (blogPostOrder.get(a.slug) ?? 0);
  });

  function formatArticleDate(post) {
    const value = sitemapLastmod[blogUrl(post.slug)];
    if (!value) return "Recently updated";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(`${value}T00:00:00Z`));
  }
  const sortedStartHerePosts = sortedBlogPosts.filter((post) => post.problemType === "Start here");
  const sortedSomethingBrokePosts = sortedBlogPosts.filter((post) => post.problemType === "Something broke");
  const categorySections = blogCategories.map((category) => ({
    ...category,
    posts: sortedBlogPosts.filter((post) => post.category === category.slug)
  })).filter((category) => category.posts.length);
  const tagSections = blogTags.map((tag) => ({
    ...tag,
    posts: sortedBlogPosts.filter((post) => (post.tags || []).includes(tag.slug))
  })).filter((tag) => tag.posts.length);
  const seoSchema = schemaList(
    breadcrumbSchema(breadcrumbs, "/blog/"),
    blogPostListSchema(sortedBlogPosts, "/blog/")
  );

  const startHerePosts = sortedStartHerePosts;
  const blogHubLinks = [
    {
      label: "Broken-site service",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this when a post describes a real layout, script, form, embed, mobile, CMS, or production bug you need fixed."
    },
    {
      label: "WordPress service",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this when the problem points toward plugins, themes, Elementor, PHP templates, CSS, JavaScript, or WordPress admin behavior."
    },
    {
      label: "SEO service",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when the article connects to audit implementation, schema, internal links, redirects, crawl cleanup, or page structure."
    },
    {
      label: "Page-build service",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this when the need is a new service page, local page, campaign page, paid traffic page, form, CTA, or launch-ready page."
    },
    {
      label: "Tracking service",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when the post is really about GA4, GTM, pixels, form tracking, ecommerce data, or unreliable reporting."
    },
    {
      label: "Request path",
      title: "Contact",
      href: "/contact/",
      copy: "Use the form when the post helped name the symptom and you are ready to send the URL, context, timeline, and desired outcome."
    }
  ];
  const blogHubContextualItems = [
    ...blogHubLinks.slice(0, 2).map((item) => ({
      title: item.title,
      href: item.href,
      titleAttr: `View ${item.title} from the troubleshooting blog`,
      copy: item.copy
    })),
    ...sortedSomethingBrokePosts.slice(0, 2).map((post) => ({
      title: post.title,
      href: blogUrl(post.slug),
      titleAttr: `Read ${post.title} from the troubleshooting blog`,
      copy: post.summary
    }))
  ];
  const blogHubInlineParagraphs = [
    [
      "If a post helps name the symptom and the site still needs work, route visible bugs to ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, forms, scripts, embeds, mobile bugs, and visible site problems" },
      " and CMS or plugin-heavy issues to ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, Elementor, PHP templates, CSS, JavaScript, and cleanup" },
      "."
    ],
    [
      "When an article points to audit notes, crawl fixes, redirects, schema, or internal links, use ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, crawl cleanup, schema, redirects, headings, and internal links" },
      ". When the issue is GA4, GTM, forms, pixels, or reporting, use ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, form events, ecommerce measurement, and reporting" },
      "."
    ],
    [
      "For specific broken-site symptoms, compare ",
      { text: "embeds, iframes, and widgets", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking website pages" },
      ", ",
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about broken tracking scripts and pixels" },
      ", ",
      { text: "forms and modals", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
      ", or ",
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" },
      " before deciding whether the request belongs in Website Fixes, WordPress Support, tracking, or front-end cleanup."
    ]
  ];
  const blogTableColumns = [
    { key: "topic", label: "Topic" },
    { key: "symptom", label: "Symptom" },
    { key: "service", label: "Service path" },
    { key: "read", label: "Read" }
  ];
  const blogRows = sortedBlogPosts.map((post) => ({
    topic: categoryLabel(post.category),
    symptom: post.summary,
    service: blogHubLinks.find((item) => item.href.includes(post.relatedService))?.title || "Website Fixes",
    read: { text: post.title.replace(" | The Web Guy", ""), href: blogUrl(post.slug) }
  }));

  function categoryLabel(slug) {
    return blogCategoryMap[slug]?.label || "Website Troubleshooting";
  }

  function tagLinksForPost(post, limit = 4) {
    return (post.tags || []).map((slug) => blogTagMap[slug]).filter(Boolean).slice(0, limit);
  }

  function featuredTagsForCategory(category) {
    return (category.featuredTags || []).map((slug) => blogTagMap[slug]).filter(Boolean);
  }

  function articleSummaryItems(posts, bullets) {
    return posts.map((post) => ({
      label: categoryLabel(post.category),
      title: post.title.replace(" | The Web Guy", ""),
      copy: post.summary,
      bullets,
      href: blogUrl(post.slug),
      linkLabel: `Read ${post.eyebrow.toLowerCase()}`
    }));
  }

  const startHereArticleBullets = [
    "Name the website problem before choosing a service",
    "Collect the URL, symptom, device, and recent changes",
    "Route the issue into fixes, WordPress, SEO, tracking, or launch work"
  ];
  const brokenSymptomArticleBullets = [
    "Use when a specific visible symptom is blocking the site",
    "Good background before sending a website fix request",
    "Links into the service path that usually handles the repair"
  ];
</script>

<Seo
  title="Website Troubleshooting Blog | The Web Guy"
  description="Practical website troubleshooting posts about broken layouts, JavaScript bugs, forms, embeds, tracking scripts, CMS weirdness, WordPress, SEO, and technical website support."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Website troubleshooting blog"
    h1="Website Troubleshooting Notes"
    intro="Practical explanations for the kinds of website problems businesses and agencies run into: broken layouts, scripts, forms, embeds, tracking, CMS weirdness, and the web work that gets pushed off."
    cta="Fix My Web Problem"
    secondary="View Website Fixes"
    secondaryHref="/services/website-fixes/"
    image={staticHeroImages.blog}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Categories and tags"
      h2="Browse website troubleshooting by topic"
      body="The blog is grouped by the practical problem type first, then by tags for platform, symptom, tracking, SEO, and implementation details."
    />
    <div class="blog-taxonomy-grid">
      {#each categorySections as category}
        <article id={`category-${category.slug}`} class="blog-taxonomy-card">
          <div>
            <span class="blog-taxonomy-count">{category.posts.length} articles</span>
            <h3>{category.label}</h3>
            <p>{category.description}</p>
          </div>
          <div class="blog-taxonomy-tags" aria-label={`${category.label} tags`}>
            {#each featuredTagsForCategory(category) as tag}
              <a href={blogTagUrl(tag.slug)} title={`View ${tag.label} tagged posts`}>{tag.label}</a>
            {/each}
          </div>
          <ul class="blog-taxonomy-posts">
            {#each category.posts.slice(0, 4) as post}
              <li><a href={blogUrl(post.slug)} title={`Read ${post.title.replace(" | The Web Guy", "")}`}>{post.title.replace(" | The Web Guy", "")}</a></li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section id="blog-tags" class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Tags"
      h2="Find posts by symptom, platform, or implementation detail"
      body="Tags connect related posts across categories when the same problem shows up as a form issue, tracking issue, WordPress issue, SEO task, or front-end bug."
    />
    <div class="blog-tag-grid">
      {#each tagSections as tag}
        <article id={`tag-${tag.slug}`} class="blog-tag-card">
          <div>
            <span class="blog-taxonomy-count">{tag.posts.length} posts</span>
            <h3>{tag.label}</h3>
            <p>{tag.description}</p>
          </div>
          <div class="blog-tag-posts">
            {#each tag.posts.slice(0, 4) as post}
              <a href={blogUrl(post.slug)} title={`Read ${post.title.replace(" | The Web Guy", "")}`}>{post.title.replace(" | The Web Guy", "")}</a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Latest articles"
      h2="Newest website support articles"
      body="Recent posts are listed newest first, using the article update date with the newest additions first when dates match."
    />
    <div class="latest-article-list">
      {#each sortedBlogPosts as post}
        <article class="latest-article-card">
          <div>
            <span>{formatArticleDate(post)} · {categoryLabel(post.category)}</span>
            <h3>{post.title.replace(" | The Web Guy", "")}</h3>
            <p>{post.summary}</p>
            <div class="blog-card-tags" aria-label={`${post.title.replace(" | The Web Guy", "")} tags`}>
              {#each tagLinksForPost(post, 4) as tag}
                <a href={blogTagUrl(tag.slug)} title={`View ${tag.label} tagged posts`}>{tag.label}</a>
              {/each}
            </div>
          </div>
          <a href={blogUrl(post.slug)} title={`Read ${post.title.replace(" | The Web Guy", "")}`}>
            Read article
          </a>
        </article>
      {/each}
    </div>
  </section>

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Broken website starting points"
      h2="When something broke"
      body="These posts are built for the moment when the site is acting weird and you need a sharper name for the problem before asking for help."
    />
    <InternalLinkCopy paragraphs={blogHubInlineParagraphs} />
    <SummaryLinkGrid
      className="summary-link-grid summary-link-grid--compact"
      items={articleSummaryItems(startHerePosts, startHereArticleBullets)}
    />
    <SortableTable caption="Troubleshooting article routing table" columns={blogTableColumns} rows={blogRows} />
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Specific broken-site symptoms" h2="Specific website problems" />
    <SummaryLinkGrid
      className="summary-link-grid summary-link-grid--compact"
      items={articleSummaryItems(sortedSomethingBrokePosts, brokenSymptomArticleBullets)}
    />
  </section>

  <ContextualSupport
    eyebrow="Troubleshooting-to-service paths"
    heading="Troubleshooting paths with service context"
    intro="Use these reading paths to move from the symptom to the page that can help fix it."
    items={blogHubContextualItems}
  />

  <TopicalLinks
    eyebrow="Article-to-service routes"
    heading="Turn the article into the next practical website action"
    intro="The posts are written to help name the problem. These links point from the reading path into the service pages that usually handle the work."
    items={blogHubLinks}
  />

  <CtaBand heading="Know what broke?" copy="Send the URL, symptoms, what should happen, and what changed recently. That is enough to start a useful conversation." label="Fix My Web Problem" />

</main>
