<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { aiDevelopmentHub as hub, aiDevelopmentCards, aiWorkflow, aiHubFaqs } from "$lib/data/ai-development.js";
  import { breadcrumbSchema, faqSchema, serviceSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "AI Development Oversight" }];
  const problems = [
    ["One fact. Three copies.", "A service record, setting, or business rule gets copied into a new file instead of using the existing source. Later changes reach only one copy."],
    ["Patterns drift between prompts", "A new component repeats an existing one. Similar features use different conventions. The next change becomes harder to make safely."],
    ["The change has a wider reach", "A route edit can also affect redirects, internal links, canonicals, schema, sitemaps, and tracking. A shared component can change pages you never opened."],
    ["Local assumptions meet production", "Environment variables, permissions, APIs, hosting, caching, and runtime differences can change how working code behaves after deployment."],
    ["Important behavior goes unchecked", "Authentication, input handling, forms, keyboard access, and focus need deliberate verification alongside the visible feature."],
    ["Working code carries extra weight", "Repeated requests, larger bundles, unnecessary rendering, and blocking resources can slow a site even when the feature works."]
  ];
  const audiences = [
    ["Founders building with AI", "Get an experienced review before launch or a consequential change, without starting with a full engineering hire."],
    ["Agencies using AI", "Add a review point around client work while your team keeps its tools and production workflow."],
    ["Small business owners", "Have someone check the website, automation, store, or integration you have been building."],
    ["Developers using agents", "Bring in another set of eyes on a diff, implementation decision, or release candidate."],
    ["Teams without a senior web engineer", "Use AI for execution and bring in engineering judgment at the points that need it."]
  ];
  const examples = [
    ["Duplicate service data", "A new record appears in a page file and the shared service list. Review identifies the owner, consolidates references, and adds a uniqueness check."],
    ["A renamed route", "The new page loads, but old URLs and metadata still point elsewhere. Review follows the links, redirects, schema, sitemap, and analytics assumptions."],
    ["A second shared component", "One requested page change creates another copy of the same UI. Review checks whether extending the existing component would keep behavior consistent."],
    ["A setting in the wrong place", "A feature hard-codes a value already owned by global configuration. Review moves it back to the source the rest of the application uses."]
  ];
</script>

<Seo title={hub.title} description={hub.meta} schema={schemaList(serviceSchema(hub, "/ai-development/"), breadcrumbSchema(breadcrumbs, "/ai-development/"), faqSchema(aiHubFaqs))} />

<main class="ai-development">
  <Hero eyebrow={hub.eyebrow} h1={hub.h1} intro={hub.intro} cta="Get Your AI Build Reviewed" secondary="See How It Works" secondaryHref="#how-it-works" showCapabilityLinks={false} note="Start with a free quote. Engineering review is paid work, scoped and agreed first.">
    {#snippet panel()}
      <div class="hero-panel-status"><span>From build to release</span><strong>Human review</strong></div>
      <div class="ai-review-preview">
        <p class="eyebrow">Illustrative review</p>
        <h2>The build passes.<br />What else changed?</h2>
        <dl>
          <div><dt>Build & automated checks</dt><dd class="ai-check">Passed</dd></div>
          <div><dt>Existing source of truth</dt><dd>Check reuse</dd></div>
          <div><dt>Routes & customer journeys</dt><dd>Verify impact</dd></div>
          <div><dt>Release decision</dt><dd class="ai-review">Review required</dd></div>
        </dl>
        <p>A green check is evidence. Understanding the change is the next step.</p>
      </div>
    {/snippet}
  </Hero>
  <Breadcrumbs items={breadcrumbs} />
  <nav class="service-nav" aria-label="AI development services">
    <a href="/ai-development/" aria-current="page">Overview</a>
    {#each aiDevelopmentCards as card}<a href={card[2]}>{card[0]}</a>{/each}
  </nav>

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="A useful second look" h2={'“It works” is not the same as “it is ready to ship.”'} body="AI can satisfy the immediate prompt while missing a dependency or an existing pattern elsewhere. Review asks whether the implementation belongs in this application and what else it changes." />
    <CardGrid items={problems} />
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Choose a starting point" h2="Review a change. Check a launch. Support a team." body="Start with the decision in front of you. You can request a one-time review, arrange ongoing oversight, or build checks around recurring problems." />
    <CardGrid items={aiDevelopmentCards} />
  </section>

  <section class="section" id="how-it-works">
    <SectionHeading eyebrow="A practical review workflow" h2="Keep the speed. Add review points." body="Use the parts your project needs. The workflow fits your existing repository and release process; responsibilities are agreed before work begins." />
    <ol class="ai-workflow">
      {#each aiWorkflow as [title, copy], index}
        <li><span class="ai-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
      {/each}
    </ol>
  </section>

  <section class="section ai-guardrail-section effect effect-dark-grid effect-medium">
    <SectionHeading eyebrow="Fix the cause, then add a check" h2="I Review the Code. I Also Improve How It Gets Reviewed." body="If the same mistake keeps returning, manual cleanup is only part of the answer. I help turn recurring findings into validation, tests, and review rules that the team can keep using." />
    <div class="ai-before-after" aria-label="Representative example of consolidating duplicated data">
      <article><span class="eyebrow">Before · duplicate records</span><h3>Each page owns a copy</h3><ul><li>Page A → its own service record</li><li>Page B → another service record</li><li>Page C → a third service record</li></ul><p>Three places to update. Three chances to disagree.</p></article>
      <article><span class="eyebrow">After · one source</span><h3>One record serves each page</h3><ul><li>Canonical service data → Pages A, B, and C</li><li>Validation → unique records and slugs</li><li>Review rule → changes to shared data</li></ul><p>The implementation is consolidated and the repeated mistake has a check.</p></article>
    </div>
    <p class="ai-guardrail-chain">Find the problem → trace the cause → consolidate the implementation → add a guardrail → verify the result.</p>
    <a class="button button-primary" href="/ai-development/guardrails/">Explore Development Guardrails</a>
  </section>

  <CtaBand heading="Have a build ready for a second look?" copy="Describe what you built, what changed, and what you want checked. I will confirm the review scope and cost before you commit." label="Get Your AI Build Reviewed" />

  <section class="section">
    <SectionHeading eyebrow="Who this is for" h2="For the people putting AI to work" body="You do not need to stop using AI or replace your current developer. Bring in review where it helps you make the next decision." />
    <CardGrid items={audiences} />
  </section>

  <section class="section soft-section">
    <SectionHeading eyebrow="Web engineering in context" h2="The same practical work behind the rest of this site" body="Reviews can cover JavaScript, React and static sites, PHP and WordPress, Shopify/Liquid, WooCommerce, APIs, technical SEO, tracking, performance, and deployment behavior. Share your stack so I can confirm fit before quoting." />
    <CardGrid items={[
      ["Sites & components", "Templates, shared UI, JavaScript, PHP, platform behavior, and the architecture already in use.", "/skills/", "See technical experience"],
      ["Search & measurement", "Metadata, schema, redirects, crawl paths, forms, and conversion measurement.", "/services/technical-seo-implementation/", "Explore technical SEO work"],
      ["Production behavior", "Integrations, performance, environment assumptions, and the path from a request to a useful result.", "/skills/production-debugging/", "See production debugging"]
    ]} />
  </section>

  <section class="section split-section">
    <div><SectionHeading eyebrow="Tool-independent oversight" h2="Use the AI Tool That Works for You." body="Codex, Claude Code, Cursor, GitHub Copilot, AI IDE agents, and custom coding agents can all be part of the workflow. The review follows what changed in the application and what that change affects." /></div>
    <div class="summary-copy-panel"><h3>What to send first</h3><ul class="check-list"><li>What you built and what it should do</li><li>Your platform or stack, if you know it</li><li>A public or staging URL, if available</li><li>Whether you need one review or ongoing help</li><li>Your launch date or next decision</li></ul><p>No repository URL required. Keep private repositories private. Access can be arranged after scope is agreed.</p></div>
  </section>

  <section class="section soft-section">
    <SectionHeading eyebrow="Representative scenarios" h2="What engineering review looks for" body="These are illustrative examples of review work, not client case studies or claims about a particular AI tool." />
    <CardGrid items={examples} />
  </section>

  <section class="section">
    <SectionHeading eyebrow="Questions before a review" h2="What You Need to Know Before Starting" />
    <FaqList items={aiHubFaqs} askQuestion={false} />
  </section>
  <CtaBand heading="Use AI for speed. Bring in experience for the next decision." copy="Send the goal and the current state. I will reply with questions, fit, and a proposed scope. The quote is free; engineering work starts after approval." label="Get Your AI Build Reviewed" secondaryLabel="See AI Code Review" secondaryHref="/ai-development/code-review/" />
</main>
