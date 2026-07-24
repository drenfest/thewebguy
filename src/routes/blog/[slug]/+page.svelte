<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import SortableTable from "$lib/components/SortableTable.svelte";
  import TopoRankInfographic from "$lib/components/TopoRankInfographic.svelte";
  import "$lib/styles/80-blog-articles.css";
  import { blogPosts, blogUrl } from "$lib/data/content.js";
  import { blogHeroImage } from "$lib/data/hero-images.js";
  import { articleSchema, breadcrumbSchema, faqSchema, schemaList } from "$lib/data/schema.js";

  let { data } = $props();
  const post = $derived(data.post);
  const postPath = $derived(blogUrl(post.slug));
  const breadcrumbTitle = $derived(post.h1 || post.title.replace(" | The Web Guy", ""));
  const breadcrumbs = $derived([
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Blog", href: "/blog/", title: "View the website troubleshooting blog" },
    { label: breadcrumbTitle, title: `Current article: ${breadcrumbTitle}` }
  ]);
  const seoSchema = $derived(schemaList(
    breadcrumbSchema(breadcrumbs, postPath),
    articleSchema(post, postPath),
    faqSchema(post.faqs || [])
  ));
  const relatedPosts = $derived(blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3));
  const topicalItems = $derived((post.links || []).map(([label, href, copy]) => ({
    label: topicalLabel(href),
    title: label,
    href,
    copy: copy || "Use this page when the issue needs hands-on website support instead of another generic troubleshooting article."
  })));
  const contextualSupportItems = $derived((post.links || []).slice(0, 4).map(([label, href, copy]) => ({
    title: label,
    href,
    titleAttr: `View ${label} from this troubleshooting article`,
    copy: copy || "Use this when the symptom in this article needs hands-on help, technical implementation, or a clearer request path."
  })));
  const articleSupportLinks = $derived((post.links || (post.contextCards || []).map((card) => [contextLabel(card), contextHref(card), contextCopy(card)])).filter(Boolean));
  const articleBridgeLinks = {
    "something-broke-on-your-website": [
      { text: "fix my broken website triage", href: "/blog/fix-my-broken-website/", title: "Read the fix my broken website triage guide" },
      { text: "broken website layouts on mobile", href: "/blog/broken-layouts-mobile-website-fixes/", title: "Read the broken layout troubleshooting guide" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme weirdness" }
    ],
    "fix-my-broken-website": [
      { text: "something broke on your website", href: "/blog/something-broke-on-your-website/", title: "Read the parent broken website troubleshooting guide" },
      { text: "JavaScript issues on websites", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read about JavaScript issues on websites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working" }
    ],
    "seo-audit-done-now-implement-it": [
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues that can block SEO implementation" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels that can affect SEO measurement" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "need-a-page-live-fast": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about form and modal issues before launching a page" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels before launch" }
    ],
    "website-data-systems-not-connecting": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels when data does not match" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals when leads do not arrive" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "broken-layouts-mobile-website-fixes": [
      { text: "CSS and JavaScript website bugs", href: "/blog/css-javascript-errors-website-bugs/", title: "Read the CSS and JavaScript bug guide" },
      { text: "something broke on your website", href: "/blog/something-broke-on-your-website/", title: "Read the broader broken-website diagnostic guide" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme layout issues" }
    ],
    "css-javascript-errors-website-bugs": [
      { text: "broken website layouts on mobile", href: "/blog/broken-layouts-mobile-website-fixes/", title: "Read the broken layout troubleshooting guide" },
      { text: "JavaScript issues on websites", href: "/blog/javascript-issues-website-troubleshooting/", title: "Read about JavaScript issues on websites" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals failing because of front-end issues" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets breaking pages" }
    ],
    "javascript-issues-website-troubleshooting": [
      { text: "CSS and JavaScript website bugs", href: "/blog/css-javascript-errors-website-bugs/", title: "Read the parent CSS and JavaScript bug guide" },
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals failing because of JavaScript issues" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels breaking website behavior" }
    ],
    "forms-modals-not-working": [
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels around forms and modals" },
      { text: "CMS, plugin, and theme weirdness", href: "/blog/cms-plugin-theme-weirdness/", title: "Read about CMS, plugin, and theme issues behind form behavior" }
    ],
    "embeds-iframes-widgets-breaking-pages": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working near embeds and widgets" },
      { text: "tracking scripts and pixels", href: "/blog/tracking-scripts-pixels-broken/", title: "Read about tracking scripts and pixels near embeds and widgets" }
    ],
    "tracking-scripts-pixels-broken": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals not working with tracking" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets affecting tracking" },
      { text: "topological relevance and vector SEO", href: "/blog/topological-relevance-vector-seo/", title: "Read the TopoRank case study on topological relevance and vector SEO" }
    ],
    "cms-plugin-theme-weirdness": [
      { text: "forms and modals not working", href: "/blog/forms-modals-not-working/", title: "Read about forms and modals when CMS issues are involved" },
      { text: "embeds, iframes, and widgets breaking pages", href: "/blog/embeds-iframes-widgets-breaking-pages/", title: "Read about embeds, iframes, and widgets when CMS issues are involved" }
    ]
  };
  const articleBridgeParagraphs = $derived((articleBridgeLinks[post.slug] || []).length ? [[
    "Related symptoms worth checking alongside this guide include ",
    ...(articleBridgeLinks[post.slug] || []).flatMap((link, index, links) => [
      index === 0 ? "" : index === links.length - 1 ? " and " : ", ",
      link
    ]),
    " because real website problems often cross visual behavior, forms, scripts, tracking, and CMS layers."
  ]] : []);
  const articleInternalParagraphs = $derived([
    ...articleBridgeParagraphs,
    [
      "If this article describes the symptom on your site, compare ",
      articleSupportLinks[0] && {
        text: articleSupportLinks[0][0],
        href: articleSupportLinks[0][1],
        title: `View ${articleSupportLinks[0][0]} from this article`
      },
      articleSupportLinks[1] ? " and " : "",
      articleSupportLinks[1] && {
        text: articleSupportLinks[1][0],
        href: articleSupportLinks[1][1],
        title: `View ${articleSupportLinks[1][0]} from this article`
      },
      " before turning the problem into a request."
    ],
    [
      articleSupportLinks[2] ? "If the first fix path is not quite right, " : "For a broader route, ",
      articleSupportLinks[2] && {
        text: articleSupportLinks[2][0],
        href: articleSupportLinks[2][1],
        title: `View ${articleSupportLinks[2][0]} from this article`
      },
      articleSupportLinks[2] ? " may be the better service or skill page. " : "",
      "You can also use ",
      { text: "Contact", href: "/contact/", title: "Open the website support request form" },
      " once you have the URL, symptom, timeline, and what should happen instead."
    ]
  ]);
  const articleTableColumns = [
    { key: "section", label: "Section" },
    { key: "whyItMatters", label: "Why it matters" },
    { key: "check", label: "What to check" },
    { key: "supportPath", label: "Support path" }
  ];
  const articleRows = $derived(post.sections.map((section) => ({
    section: sectionHeading(section),
    whyItMatters: paragraphText(sectionBody(section)[0]) || post.summary,
    check: sectionList(section).slice(0, 2).join(", ") || "URL, symptom, expected behavior, and recent changes",
    supportPath: articleSupportLinks[0] ? { text: articleSupportLinks[0][0], href: articleSupportLinks[0][1] } : { text: "Website Fixes", href: "/services/website-fixes/" }
  })));
  const otherCards = $derived((post.otherItems || relatedPosts.map((item) => [
    item.title,
    item.summary,
    blogUrl(item.slug),
    "Read the post",
    item.relatedService
  ])).map((item) => item[4] ? item : [...item, iconForHref(item[2])]));
  const prioritySectionSet = $derived(new Set(post.prioritySectionHeadings || []));
  const prioritySections = $derived((post.sections || []).filter((section) => prioritySectionSet.has(sectionHeading(section))));
  const standardSections = $derived((post.sections || []).filter((section) => !prioritySectionSet.has(sectionHeading(section))));
  const showInArticleContextCards = $derived(post.slug !== "something-broke-on-your-website");

  function slugify(text = "") {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function sectionHeading(section) {
    return Array.isArray(section) ? section[0] : section.heading;
  }

  function sectionId(section) {
    return Array.isArray(section) ? slugify(section[0]) : section.id || slugify(section.heading);
  }

  function sectionBody(section) {
    const body = Array.isArray(section) ? section[1] : section.body;
    if (isLinkedParagraph(body)) return [body];
    return Array.isArray(body) ? body : [body].filter(Boolean);
  }

  function sectionList(section) {
    return Array.isArray(section) ? [] : section.checklist || section.bullets || [];
  }

  function iconForHref(href = "") {
    const match = href.match(/\/(?:services|skills)\/([^/]+)\//);
    if (match) return match[1];
    if (href.includes("/blog/")) return "website-fixes";
    return "";
  }

  function topicalLabel(href = "") {
    if (href === "/contact/") return "Contact path";
    if (href.startsWith("/services/")) return "Service path";
    if (href.startsWith("/skills/")) return "Skill path";
    if (href.startsWith("/blog/")) return "Related guide";
    return "Support path";
  }

  function contextLabel(item) {
    return Array.isArray(item) ? item[0] : item.label;
  }

  function contextCopy(item) {
    const label = contextLabel(item);
    const copy = Array.isArray(item) ? item[1] : item.copy;
    return (copy || "")
      .replace(/^Use this service page when\b/i, `Use ${label} when`)
      .replace(/^Use this page when\b/i, `Use ${label} when`)
      .replace(/^Use this when\b/i, `Use ${label} when`)
      .replace(/^Use this for\b/i, `Use ${label} for`)
      .replace(/^Use this if\b/i, `Use ${label} if`)
      .replace(/^Use this with\b/i, `Use ${label} with`);
  }

  function contextHref(item) {
    return Array.isArray(item) ? item[2] : item.href;
  }

  function contextTitle(item) {
    return Array.isArray(item)
      ? item[3] || `View ${item[0]}`
      : item.title || `View ${item.label}`;
  }

  function paragraphParts(paragraph) {
    return Array.isArray(paragraph) ? paragraph.filter(Boolean) : [paragraph].filter(Boolean);
  }

  function isLinkedParagraph(value) {
    return Array.isArray(value) && value.some((part) => part && typeof part === "object" && part.href);
  }

  function paragraphText(paragraph) {
    return paragraphParts(paragraph).map((part) => typeof part === "string" ? part : linkText(part)).join("");
  }

  function linkTitle(part) {
    return part.title || `View ${part.text || part.label}`;
  }

  function linkText(part) {
    return part.text || part.label;
  }

  function tocItems(post) {
    const items = post.toc || post.sections.map((section) => sectionHeading(section));
    const mappedItems = items.map((item) => {
      if (typeof item === "string") {
        return { label: item, id: slugify(item) };
      }
      return item;
    });

    if (post.contextCards) {
      mappedItems.push({
        label: post.contextHeading || "Related implementation paths",
        id: "related-implementation-paths"
      });
    }

    return mappedItems;
  }

  function articleGroupLabel(post, section, index) {
    if (post.slug !== "something-broke-on-your-website") return "";

    const heading = sectionHeading(section);
    const groups = {
      "Match the symptom before touching the site": "Site Availability, Risk, and First Triage",
      "Start with what you can see": "Layout, CSS, and Visible Page Symptoms",
      "Common WordPress breaks": "WordPress, PHP, and CMS Breaks",
      "Common front-end breaks": "Forms, JavaScript, and Browser Behavior",
      "Common hosting, DNS, and SSL problems": "Security, Redirects, Hosting, and SSL",
      "Ecommerce and checkout problems need priority": "Ecommerce, Performance, and Handoff"
    };

    return groups[heading] || (index === 0 ? "Opening Diagnostic Checklist" : "");
  }
</script>

<Seo title={post.title.includes("|") ? post.title : `${post.title} | The Web Guy`} description={post.meta} schema={seoSchema} />

<main class={`blog-post-page blog-post-${post.slug}`}>
  <Hero
    eyebrow={post.eyebrow}
    h1={post.h1 || post.title}
    intro={post.summary}
    cta={post.heroCta || "Send This Website Problem"}
    secondary={post.heroSecondary || "View Website Fixes"}
    secondaryHref={post.heroSecondaryHref || "/services/website-fixes/"}
    image={blogHeroImage(post)}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section blog-article">
    <div class="article-layout">
      <nav class="article-toc" aria-label="Article table of contents">
        <strong>In this guide</strong>
        <ol>
          {#each tocItems(post) as item}
            <li><a href={`#${item.id}`} title={`Jump to ${item.label} in this guide`}>{item.label}</a></li>
          {/each}
        </ol>
      </nav>

      <div class="article-shell">
        <p class="eyebrow">{post.problemType}</p>

        {#if post.intro}
          <div class="article-intro">
            {#each post.intro as paragraph}
              <p>
                {#each paragraphParts(paragraph) as part}
                  {#if typeof part === "string"}
                    {part}
                  {:else}
                    <a class="text-link" href={part.href} title={linkTitle(part)}>{linkText(part)}</a>
                  {/if}
                {/each}
              </p>
            {/each}
          </div>
        {/if}

        <InternalLinkCopy paragraphs={articleInternalParagraphs} className="internal-link-copy--compact" />

        {#if post.exampleBlock}
          <aside class="article-callout article-example-block">
            <strong>{post.exampleBlock.heading || "Proof example"}</strong>
            <p>{post.exampleBlock.copy}</p>
            {#if post.exampleBlock.href}
              <a class="text-link" href={post.exampleBlock.href} title={post.exampleBlock.title || `View ${post.exampleBlock.label || "related support"}`}>{post.exampleBlock.label || "View related support"}</a>
            {/if}
          </aside>
        {/if}

        <SortableTable caption={`${post.eyebrow} troubleshooting table`} columns={articleTableColumns} rows={articleRows} />

        {#each prioritySections as section}
          <section id={sectionId(section)} class="article-section article-section--priority">
            <h2>{sectionHeading(section)}</h2>

            {#each sectionBody(section) as paragraph}
              <p>
                {#each paragraphParts(paragraph) as part}
                  {#if typeof part === "string"}
                    {part}
                  {:else}
                    <a class="text-link" href={part.href} title={linkTitle(part)}>{linkText(part)}</a>
                  {/if}
                {/each}
              </p>
            {/each}

            {#if sectionList(section).length}
              <div class="article-checklist">
                <h3>{section.listTitle || "Checklist"}</h3>
                <ul>
                  {#each sectionList(section) as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if !Array.isArray(section) && section.callout}
              <aside class="article-callout">
                <strong>{section.calloutTitle || "Worth noting"}</strong>
                <p>{section.callout}</p>
              </aside>
            {/if}
          </section>
        {/each}

        {#each standardSections as section, index}
          {@const groupLabel = articleGroupLabel(post, section, index)}
          {#if groupLabel}
            <div class="article-group-heading">
              <span>Diagnostic group</span>
              <h2>{groupLabel}</h2>
            </div>
          {/if}
          <section id={sectionId(section)} class="article-section">
            <h2>{sectionHeading(section)}</h2>

            {#each sectionBody(section) as paragraph}
              <p>
                {#each paragraphParts(paragraph) as part}
                  {#if typeof part === "string"}
                    {part}
                  {:else}
                    <a class="text-link" href={part.href} title={linkTitle(part)}>{linkText(part)}</a>
                  {/if}
                {/each}
              </p>
            {/each}

            {#if !Array.isArray(section) && section.figures}
              <div class="article-figure-grid">
                {#each section.figures as figure}
                  <figure class="article-figure">
                    <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />
                    <figcaption>
                      <strong>{figure.title}</strong>
                      <span>{figure.caption}</span>
                    </figcaption>
                  </figure>
                {/each}
              </div>
            {/if}

            {#if !Array.isArray(section) && section.infographic}
              <TopoRankInfographic {...section.infographic} />
            {:else if !Array.isArray(section) && section.flow}
              <div class="article-flow" aria-label="Flow map">
                {#each section.flow as step, index}
                  <span>{step}</span>
                  {#if index < section.flow.length - 1}
                    <b aria-hidden="true">-&gt;</b>
                  {/if}
                {/each}
              </div>
            {/if}

            {#if sectionList(section).length}
              <div class="article-checklist">
                <h3>{section.listTitle || "Checklist"}</h3>
                <ul>
                  {#each sectionList(section) as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if !Array.isArray(section) && section.callout}
              <aside class="article-callout">
                <strong>{section.calloutTitle || "Worth noting"}</strong>
                <p>{section.callout}</p>
              </aside>
            {/if}
          </section>
          {#if post.midArticleCta && index === (post.midArticleCta.afterSectionIndex ?? 1)}
            <aside class="article-callout article-callout--cta">
              <strong>{post.midArticleCta.heading}</strong>
              <p>{post.midArticleCta.copy}</p>
              <div class="article-callout-actions">
                <a class="button button-primary" href="/contact/" title={post.midArticleCta.heading}>{post.midArticleCta.label}</a>
                {#if post.midArticleCta.secondaryHref}
                  <a class="text-link" href={post.midArticleCta.secondaryHref} title={post.midArticleCta.secondaryLabel}>{post.midArticleCta.secondaryLabel}</a>
                {/if}
              </div>
            </aside>
          {/if}
        {/each}

        {#if post.contextCards && showInArticleContextCards}
          <section id="related-implementation-paths" class="article-section article-context-section">
            <h2>{post.contextHeading || "Related implementation paths"}</h2>
            <p>{post.contextIntro || "If this article describes what is happening on your site, these related pages show the practical service paths that usually solve it."}</p>

            <div class="article-context-grid">
              {#each post.contextCards as card}
                <a href={contextHref(card)} title={contextTitle(card)}>
                  <strong>{contextLabel(card)}</strong>
                  <span>{contextCopy(card)}</span>
                </a>
              {/each}
            </div>
          </section>
        {/if}
      </div>
    </div>
  </section>

  <ContextualSupport
    eyebrow="Fix options"
    heading="Turn this article into the right fix path"
    intro="These links connect the symptom in the article to the service or skill path that usually handles the fix."
    items={contextualSupportItems}
  />

  <TopicalLinks
    eyebrow="Useful next links"
    heading={post.relatedHeading || "Where this problem usually connects"}
    intro={post.relatedIntro || "These related pages connect this article to the hands-on services, skills, and request paths that usually solve the problem on a real site."}
    items={topicalItems}
  />

  <CtaBand
    heading={post.finalCta?.heading || "Need this fixed on a real site?"}
    copy={post.finalCta?.copy || post.cta || "Send the URL, the symptom, what should happen instead, and anything that changed recently."}
    label={post.finalCta?.label || "Send This Website Problem"}
    secondaryLabel={post.finalCta?.secondaryLabel || ""}
    secondaryHref={post.finalCta?.secondaryHref || ""}
    sourceTitle={post.h1 || post.title}
  />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="More troubleshooting" h2={post.otherHeading || "Other ways websites break"} body={post.otherIntro || ""} />
    <CardGrid
      className="card-grid compact-grid"
      items={otherCards}
    />
  </section>

  {#if post.faqs}
    <section class="section section-effect section-effect--traces section-effect--low">
      <SectionHeading eyebrow="FAQ" h2="Common questions" />
      <FaqList items={post.faqs} />
    </section>
  {/if}
</main>

<style>
  :global(.blog-post-broken-layouts-mobile-website-fixes > .hero h1) {
    font-size: clamp(2.15rem, 4.45vw, 4.05rem);
  }

  :global(.blog-post-broken-layouts-mobile-website-fixes > .hero .hero-actions) {
    margin-top: 6px;
  }

  :global(.article-callout--cta) {
    border-color: rgba(28, 199, 160, 0.34);
    background:
      linear-gradient(135deg, rgba(28, 199, 160, 0.14), rgba(255, 255, 255, 0.92)),
      var(--surface);
  }

  :global(.article-callout-actions) {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
    margin-top: 14px;
  }

  :global(.article-callout-actions .button) {
    min-height: 42px;
    padding: 11px 16px;
  }

  :global(.blog-post-something-broke-on-your-website .article-layout),
  :global(.blog-post-something-broke-on-your-website .article-shell) {
    height: auto;
    min-height: 0;
  }

  :global(.blog-post-something-broke-on-your-website .blog-article) {
    padding-bottom: 54px;
  }

  :global(.blog-post-something-broke-on-your-website .article-shell) {
    padding-bottom: clamp(28px, 3vw, 36px);
  }

  :global(.blog-post-something-broke-on-your-website .article-section),
  :global(.blog-post-something-broke-on-your-website .article-layout),
  :global(.blog-post-something-broke-on-your-website .article-grid) {
    align-items: start;
    height: auto !important;
    min-height: 0 !important;
    margin-bottom: 0;
  }

  :global(.blog-post-something-broke-on-your-website .article-toc) {
    align-self: start;
    height: max-content;
    min-height: 0;
  }

  :global(.article-group-heading) {
    max-width: 840px;
    margin-top: clamp(46px, 5vw, 66px);
    padding-top: clamp(30px, 4vw, 44px);
    border-top: 1px solid rgba(17, 24, 39, 0.12);
  }

  :global(.article-group-heading span) {
    display: inline-block;
    margin-bottom: 8px;
    color: var(--accent-dark);
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  :global(.article-group-heading h2) {
    margin: 0;
  }

  :global(.article-group-heading + .article-section) {
    margin-top: 18px;
    padding-top: 0;
    border-top: 0;
  }
</style>
