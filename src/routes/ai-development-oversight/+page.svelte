<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

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
  const examples = [
    ["Duplicate service data", "A new record appears in a page file and the shared service list. Review identifies the owner, consolidates references, and adds a uniqueness check."],
    ["A renamed route", "The new page loads, but old URLs and metadata still point elsewhere. Review follows the links, redirects, schema, sitemap, and analytics assumptions."],
    ["A second shared component", "One requested page change creates another copy of the same UI. Review checks whether extending the existing component would keep behavior consistent."],
    ["A setting in the wrong place", "A feature hard-codes a value already owned by global configuration. Review moves it back to the source the rest of the application uses."]
  ];
</script>

<Seo title={hub.title} description={hub.meta} schema={schemaList(serviceSchema(hub, "/ai-development-oversight/"), breadcrumbSchema(breadcrumbs, "/ai-development-oversight/"), faqSchema(aiHubFaqs))} />

<main class="ai-development ai-editorial ai-editorial--hub">
  <Hero eyebrow={hub.eyebrow} h1={hub.h1} intro={hub.intro} cta="Get an AI Review Quote" secondary="Find Your Starting Point" secondaryHref="#choose-service" showCapabilityLinks={false} note="The quote is free. Engineering review starts after scope and cost are agreed.">
    {#snippet panel()}<figure class="ai-hero-media ai-editorial-art">
    <img src="/images/ai-services/engineering-review-960.webp" srcset="/images/ai-services/engineering-review-640.webp 640w, /images/ai-services/engineering-review-960.webp 960w" sizes="(max-width: 800px) 90vw, 45vw" width="960" height="640" alt="An editorial illustration of several software paths coming together at a central review point." fetchpriority="high" />
    <figcaption>
    <span>AI creates the change.</span>
    <strong>Review connects it to the whole system.</strong>
    </figcaption>
    </figure>{/snippet}
  </Hero>
  <Breadcrumbs items={breadcrumbs} />
  <nav class="ai-page-nav" aria-label="AI oversight page contents">
    <span>Explore</span>
    <a href="#choose-service">Find your service</a>
    <a href="#how-it-works">How it works</a>
    <a href="#review-context">What gets reviewed</a>
    <a href="#working-together">Working together</a>
    <a href="#questions">Questions</a>
    </nav>
  <section class="section ai-contained" id="choose-service">
    <div class="ai-section-intro">
    <p class="eyebrow">Start with the decision in front of you</p>
    <h2>What are you trying to ship?</h2>
    <p>You can start with a single change. Choose the situation that sounds like yours.</p>
    </div>
    <div class="ai-service-chooser">{#each aiDevelopmentCards as card, i}<a href={card[2]}>
    <span class="ai-choice-number">0{i + 1}</span>
    <div>
    <p>{["I have code ready to merge.", "We're shipping AI changes regularly.", "The site looks done. Does it work?", "The same mistakes keep coming back."][i]}</p>
    <h3>{card[0]}</h3>
    <span>{card[1]}</span>
    </div>
    <span class="ai-choice-arrow" aria-hidden="true">↗</span>
    </a>{/each}</div>
  </section>
  <section class="section ai-dark-section" id="how-it-works">
    <div class="ai-contained ai-workflow-layout">
    <div class="ai-section-intro">
    <p class="eyebrow">A practical review workflow</p>
    <h2>Keep the speed.<br />Add review points.</h2>
    <p>Seven stages connect a generated change to a release decision. Responsibilities and checks fit your existing repository.</p>
    <p class="ai-side-note">Builds and tests provide evidence. An engineer connects that evidence to the requirement and the rest of your system.</p>
    </div>
    <ol class="ai-process-rail">{#each aiWorkflow as [title, copy], index}<li class:ai-decision={index === 2 || index === 4}>
    <span>0{index + 1}</span>
    <div>
    <h3>{title}</h3>
    <p>{copy}</p>
    </div>
    </li>{/each}</ol>
    </div>
    </section>
  <section class="section ai-contained" id="review-context">
    <div class="ai-section-intro">
    <p class="eyebrow">Beyond the immediate prompt</p>
    <h2>What else does this change affect?</h2>
    <p>A working feature can still depend on shared data, existing patterns, and production assumptions. Open an area to see why it matters.</p>
    </div>
    <div class="ai-context-grid">
    <div class="ai-disclosures">{#each problems as [title, copy], index}<details open={index === 0}>
    <summary>{title}</summary>
    <p>{copy}</p>
    </details>{/each}</div>
    <figure class="ai-context-visual">
    <img src="/images/ai-services/canonical-data.svg" width="560" height="440" alt="One source of truth feeding three pages, with validation and a human review point." loading="lazy" />
    <figcaption>Illustrative structure: keep data in one place, then check how it is used.<br />
    <a class="ai-text-link" href="/ai-development-oversight/ai-development-guardrails/">Explore Development Guardrails ↗</a>
    </figcaption>
    </figure>
    </div>
    </section>
  <section class="section ai-coverage-section" id="working-together">
    <div class="ai-contained ai-scope-split">
    <div class="ai-section-intro">
    <p class="eyebrow">Your tools. Your team.</p>
    <h2>Bring in experience where it helps.</h2>
    <p>Founders, agencies, business owners, and developers can start with one scoped review. You keep your AI tools and your existing team.</p>
    <div class="ai-tool-strip" aria-label="Example AI coding tools">
    <span><img src="/icons/ai-tools/codex.svg" width="28" height="28" alt="" loading="lazy" />Codex</span>
    <span><img src="/icons/ai-tools/claude-code.svg" width="28" height="28" alt="" loading="lazy" />Claude Code</span>
    <span><img src="/icons/ai-tools/cursor.svg" width="28" height="28" alt="" loading="lazy" />Cursor</span>
    <span><img src="/icons/ai-tools/github-copilot.svg" width="28" height="28" alt="" loading="lazy" />GitHub Copilot</span>
    </div>
    <p>JavaScript, React, PHP, WordPress, Shopify/Liquid, APIs, search, measurement, and production behavior.</p>
    <a href="/skills/">Explore technical experience ↗</a>
    </div>
    <div class="ai-start-brief">
    <p class="eyebrow">What to send first</p>
    <h3>A short brief is enough.</h3>
    <ol>
    <li>What you built and what it should do</li>
    <li>The change or journey you want checked</li>
    <li>Your platform and next deadline</li>
    <li>A public or staging URL, if available</li>
    </ol>
    <p>No repository URL required. Keep private code private; access can be arranged after scope is agreed.</p>
    <a class="ai-text-link" href="#get-quote">Start with a free quote ↓</a>
    </div>
    </div>
    </section>
  <section class="section ai-contained ai-scope-split" id="examples">
    <div class="ai-section-intro">
    <p class="eyebrow">Representative scenarios</p>
    <h2>From a finding to a better next change.</h2>
    <p>Illustrative examples of the work, not client case studies or claims about a particular AI tool.</p>
    </div>
    <div class="ai-example-notes">{#each examples as [title, copy], i}<details open={i === 0}>
    <summary>
    <span>0{i + 1}</span>{title}</summary>
    <p>{copy}</p>
    </details>{/each}</div>
    </section>
  <div id="get-quote">
    <CtaBand heading="A second set of eyes. A clearer next step." copy="Share the goal and current state. I will confirm fit and propose a scope. The quote is free; hands-on engineering starts after approval." label="Get an AI Review Quote" secondaryLabel="See AI Code Review" secondaryHref="/ai-development-oversight/ai-code-review/" />
    </div>
  <section class="section ai-contained ai-faq-layout" id="questions">
    <div class="ai-section-intro">
    <p class="eyebrow">Before you start</p>
    <h2>Questions about AI oversight</h2>
    <p>Find the right starting point without committing to an ongoing engagement.</p>
    </div>
    <FaqList items={aiHubFaqs} askQuestion={false} />
    </section>
</main>
