<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import CtaBand from "$lib/components/CtaBand.svelte";
  import { aiDevelopmentPages, aiDevelopmentUrl } from "$lib/data/ai-development.js";
  import { breadcrumbSchema, faqSchema, serviceSchema, schemaList } from "$lib/data/schema.js";
  let { data } = $props();
  const service = $derived(data.service);
  const path = $derived(aiDevelopmentUrl(service.slug));
  const breadcrumbs = $derived([{ label: "Home", href: "/" }, { label: "AI Development", href: aiDevelopmentUrl() }, { label: service.eyebrow }]);
  const coverage = [
    ["Visitor journeys", "Find a service, follow its links, complete the intended task, and recover from errors. We agree which journeys matter most."],
    ["Forms & delivery", "Check validation, success and failure states, and delivery to the intended destination where access permits. Test messages are arranged before sending."],
    ["Mobile & layout", "Check navigation, wrapping, tap targets, media, and layout shifts at agreed device sizes."],
    ["Search setup", "Check key URLs, redirects, canonicals, metadata, schema, and sitemap entries against the launch plan."],
    ["Tracking", "Check that the intended lead event fires at the right point, with consent behavior and attribution considered where in scope."],
    ["Accessibility", "Check keyboard paths, labels, focus, headings, and contrast within the agreed scope. This is not an accessibility certification."]
  ];
  const releaseSteps = [
    ["Before release", "Understand the change", "Your team supplies the goal, diff, and test results. I review the agreed areas and identify open questions."],
    ["Decision point", "Resolve, then approve", "Assign findings, agree what blocks release, and record who makes the final decision."],
    ["Deployment", "Use your existing process", "The agreed release owner deploys, with environment assumptions and a rollback path documented."],
    ["After release", "Check the real environment", "Verify the critical journeys, record unresolved behavior, and feed useful checks into the next release."]
  ];
  const guardrails = [
    ["Duplicate records", "Copied local data", "Validate unique records and slugs", "Data owner fixes the source before merge"],
    ["Broken old URLs", "Route references left behind", "Test redirects and internal links", "Release owner resolves failed route checks"],
    ["Shared UI regressions", "A change affects other pages", "Check representative pages and states", "Reviewer confirms the shared impact"],
    ["Configuration drift", "Settings live in multiple places", "Validate against canonical configuration", "Maintainer updates the source and reruns checks"]
  ];
</script>

<Seo title={service.title} description={service.meta} schema={schemaList(serviceSchema(service, path), breadcrumbSchema(breadcrumbs, path), faqSchema(service.faqs))} />
<main class="ai-development ai-development--detail ai-editorial" class:ai-qa={service.slug === "ai-website-qa"}>
  <Hero eyebrow={service.eyebrow} purpose={service.purpose} h1={service.h1} intro={service.intro} cta={service.cta} secondary={service.contents[0][1]} secondaryHref={`#${service.contents[0][0]}`} showCapabilityLinks={false} note="Free quote. Engineering work starts after scope and cost are agreed.">
    {#snippet panel()}<figure class="ai-hero-media">
    <picture><source media="(max-width: 700px)" srcset={`/images/ai-services/${service.media.replace(".svg", "-mobile.svg")}`} /><img src={`/images/ai-services/${service.media}`} width="560" height="440" alt={service.mediaAlt} fetchpriority="high" /></picture>
    <figcaption>Illustrative example · {service.purpose}</figcaption>
    </figure>{/snippet}
  </Hero>
  <Breadcrumbs items={breadcrumbs} />
  <nav class="ai-page-nav" aria-label={`${service.eyebrow} page contents`}>
    <span>On this page</span>{#each service.contents as [id, label]}<a href={`#${id}`}>{label}</a>{/each}<a class="ai-nav-quote" href="#get-quote">Get a quote ↓</a>
    </nav>

  {#if service.slug === "ai-code-review"}
    <section class="section ai-contained" id="example">
      <div class="ai-section-intro">
    <p class="eyebrow">Inside a review</p>
    <h2>A small diff can have a long reach.</h2>
    <p>{service.sections[0].body}</p>
    </div>
      <div class="ai-review-workbench">
    <div class="ai-code-artifact">
    <div class="ai-artifact-bar">
    <span>Illustrative diff</span>
    <code>service-route.js</code>
    </div>
    <div class="ai-code-line">
    <span>01</span>
    <code>export const service = &#123;</code>
    </div>
    <div class="ai-code-line ai-line-removed">
    <span>02 −</span>
    <code>path: '/old-service/'</code>
    </div>
    <div class="ai-code-line ai-line-added">
    <span>02 +</span>
    <code>path: '/new-service/'</code>
    <b aria-label="Review comment 1">1</b>
    </div>
    <div class="ai-code-line">
    <span>03</span>
    <code>&#125;;</code>
    </div>
    <p class="ai-code-note">The changed line is visible. Its dependencies need a closer look.</p>
    <div class="ai-dependency-strip">
    <span>Redirect</span>
    <span>Internal links</span>
    <span>Sitemap</span>
    <span>Canonical</span>
    </div>
    </div>
      <aside class="ai-review-comment">
    <span class="ai-marker">1</span>
    <p class="eyebrow">Review comment · illustrative</p>
    <h3>Where does the old URL go?</h3>
    <p>The new route renders, but an existing visitor or search result may still use the old address.</p>
    <p>
    <strong>Next step:</strong> follow the redirect, update references, and add a route check.</p>
    <a href="#deliverables">See how this becomes a handoff ↓</a>
    </aside>
    </div>
    </section>
    <section class="section ai-contained ai-scope-split" id="scope">
    <div class="ai-section-intro">
    <p class="eyebrow">Agree the boundaries</p>
    <h2>Inspect the areas your change touches.</h2>
    <p>{service.sections[1].body}</p>
    <p class="ai-side-note">A focused pull request is a useful starting point. Broader access or scope is discussed before the work expands.</p>
    </div>
    <div class="ai-disclosures">{#each service.sections[1].cards as [title, copy], index}<details open={index === 0}>
    <summary>{title}</summary>
    <p>{copy}</p>
    </details>{/each}</div>
    </section>
    <section class="section ai-dark-section" id="deliverables">
    <div class="ai-contained ai-handoff-grid">
    <div class="ai-section-intro">
    <p class="eyebrow">Your handoff</p>
    <h2>{service.outcome}</h2>
    <p>Findings connect the affected area to an action, a decision, and the checks still needed.</p>
    <ul class="check-list">{#each service.deliverables as item}<li>{item}</li>{/each}</ul>
    </div>
    <article class="ai-report-sheet">
    <p class="eyebrow">Illustrative finding / 01</p>
    <h3>Preserve the existing route</h3>
    <dl>
    <div>
    <dt>Why it matters</dt>
    <dd>Existing links may send visitors to a missing page.</dd>
    </div>
    <div>
    <dt>Recommended action</dt>
    <dd>Redirect to the replacement and update internal references.</dd>
    </div>
    <div>
    <dt>Open question</dt>
    <dd>Is this a permanent move or a temporary campaign URL?</dd>
    </div>
    <div>
    <dt>Verification needed</dt>
    <dd>Check status codes, query strings, canonical, and sitemap after deployment.</dd>
    </div>
    </dl>
    <p class="ai-report-foot">Example format, not a client finding. Actual findings depend on the agreed review.</p>
    </article>
    </div>
    </section>
  {:else if service.slug === "ai-production-oversight"}
    <section class="section ai-contained" id="release-cycle">
    <div class="ai-section-intro">
    <p class="eyebrow">A repeatable release rhythm</p>
    <h2>A decision point before launch. A check after it.</h2>
    <p>{service.sections[0].body}</p>
    </div>
    <ol class="ai-release-timeline">{#each releaseSteps as [phase, title, copy], i}<li>
    <span class="ai-phase-number">0{i + 1}</span>
    <div>
    <p class="eyebrow">{phase}</p>
    <h3>{title}</h3>
    <p>{copy}</p>
    </div>
    </li>{/each}</ol>
    <p class="ai-caption">Illustrative workflow. Cadence, release ownership, and availability are agreed for your team.</p>
    </section>
    <section class="section ai-dark-section" id="ownership">
    <div class="ai-contained">
    <div class="ai-section-intro">
    <p class="eyebrow">Make ownership visible</p>
    <h2>Your team keeps the wheel.</h2>
    <p>Review adds a named decision point to your existing process. Deployment access and final approval stay with the agreed owners.</p>
    </div>
    <div class="ai-responsibility-table">
    <table>
    <caption>Illustrative responsibility split, confirmed in the agreement</caption>
    <thead>
    <tr>
    <th scope="col">Stage</th>
    <th scope="col">Your team</th>
    <th scope="col">The Web Guy</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <th scope="row">Build</th>
    <td>Own implementation and explain the goal</td>
    <td>Clarify review scope and required context</td>
    </tr>
    <tr>
    <th scope="row">Review</th>
    <td>Supply the change and relevant checks</td>
    <td>Review agreed areas and prioritize findings</td>
    </tr>
    <tr>
    <th scope="row">Release</th>
    <td>Make the internal approval decision</td>
    <td>Document findings and unresolved questions</td>
    </tr>
    <tr>
    <th scope="row">Verify</th>
    <td>Provide agreed access and report behavior</td>
    <td>Check the critical journeys in scope</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </section>
    <section class="section ai-contained ai-scope-split" id="deliverables">
    <div class="ai-section-intro">
    <p class="eyebrow">Your release record</p>
    <h2>{service.outcome}</h2>
    <p>{service.sections[2].body}</p>
    </div>
    <div class="ai-delivery-list">{#each service.deliverables as item, i}<div>
    <span>0{i + 1}</span>
    <p>{item}</p>
    </div>{/each}<p class="ai-side-note">Review windows, response expectations, and deployment duties are agreed in advance. Ongoing oversight does not imply 24/7 coverage.</p>
    </div>
    </section>
  {:else if service.slug === "ai-website-qa"}
    <section class="section ai-contained" id="visitor-journey">
    <div class="ai-section-intro">
    <p class="eyebrow">Follow the visitor</p>
    <h2>A good-looking page is only the start.</h2>
    <p>{service.sections[0].body}</p>
    </div>
    <ol class="ai-journey-map">
    <li>
    <span class="ai-journey-icon" aria-hidden="true">↗</span>
    <span class="eyebrow">01 / Arrive</span>
    <h3>Find the right page</h3>
    <p>Links, redirects, navigation, and useful context.</p>
    </li>
    <li>
    <span class="ai-journey-icon" aria-hidden="true">▤</span>
    <span class="eyebrow">02 / Act</span>
    <h3>Use the form</h3>
    <p>Labels, keyboard paths, validation, and error recovery.</p>
    </li>
    <li>
    <span class="ai-journey-icon" aria-hidden="true">✉</span>
    <span class="eyebrow">03 / Deliver</span>
    <h3>Reach the destination</h3>
    <p>The request arrives where your team can use it.</p>
    </li>
    <li>
    <span class="ai-journey-icon" aria-hidden="true">◎</span>
    <span class="eyebrow">04 / Measure</span>
    <h3>Record the result</h3>
    <p>The intended lead event reflects the successful action.</p>
    </li>
    </ol>
    <p class="ai-caption">Illustrative inquiry journey. Coverage follows your actual site and access.</p>
    </section>
    <section class="section ai-coverage-section" id="coverage">
    <div class="ai-contained ai-scope-split">
    <div class="ai-section-intro">
    <p class="eyebrow">Explore the coverage</p>
    <h2>Focus the review on the paths that matter to your launch.</h2>
    <p>Open an area to see examples of what can be checked. A quote defines the journeys, devices, browsers, and depth.</p>
    <a class="ai-text-link" href="#deliverables">See the issue handoff ↓</a>
    </div>
    <div class="ai-disclosures">{#each coverage as [title, copy], i}<details open={i === 1}>
    <summary>{title}</summary>
    <p>{copy}</p>
    </details>{/each}</div>
    </div>
    </section>
    <section class="section ai-contained" id="deliverables">
    <div class="ai-section-intro">
    <p class="eyebrow">Your launch issue list</p>
    <h2>Reproduce it. Prioritize it. Retest it.</h2>
    <p>Give your developer a usable path from the observed behavior to a launch decision.</p>
    </div>
    <div class="ai-qa-handoff">
    <article class="ai-test-ticket">
    <p class="eyebrow">Illustrative QA issue</p>
    <h3>Form confirms success, delivery needs verification</h3>
    <dl>
    <div>
    <dt>Reproduce</dt>
    <dd>Complete the agreed test journey and record the confirmation.</dd>
    </div>
    <div>
    <dt>Evidence</dt>
    <dd>Record device, browser, expected behavior, and observed result.</dd>
    </div>
    <div>
    <dt>Retest</dt>
    <dd>Verify delivery and the lead event after the fix, where access permits.</dd>
    </div>
    </dl>
    </article>
    <div class="ai-delivery-list">{#each service.deliverables as item, i}<div>
    <span>0{i + 1}</span>
    <p>{item}</p>
    </div>{/each}</div>
    </div>
    </section>
  {:else}
    <section class="section ai-contained" id="before-after">
    <div class="ai-section-intro">
    <p class="eyebrow">One lesson, built into the system</p>
    <h2>Fix the repetition at its source.</h2>
    <p>{service.sections[0].body}</p>
    </div>
    <div class="ai-system-comparison">
    <figure class="ai-system-before">
    <figcaption>
    <span class="eyebrow">Before / illustrative</span>
    <h3>Three copies to keep in sync</h3>
    </figcaption>
    <div class="ai-copy-nodes">
    <div>
    <b>Page A</b>
    <span>Local service data</span>
    </div>
    <div>
    <b>Page B</b>
    <span>Copied service data</span>
    </div>
    <div>
    <b>Page C</b>
    <span>Copied service data</span>
    </div>
    </div>
    <p>A routine edit reaches one copy. The others drift.</p>
    </figure>
    <figure class="ai-system-after">
    <figcaption>
    <span class="eyebrow">After / illustrative</span>
    <h3>One owner. Shared references.</h3>
    </figcaption>
    <div class="ai-source-node">Canonical service data</div>
    <div class="ai-source-branches" aria-hidden="true">↓ &nbsp; ↓ &nbsp; ↓</div>
    <div class="ai-page-nodes">
    <span>Page A</span>
    <span>Page B</span>
    <span>Page C</span>
    </div>
    <p>Validate unique records. Review changes to the shared source.</p>
    </figure>
    </div>
    </section>
    <section class="section ai-dark-section" id="failure-map">
    <div class="ai-contained">
    <div class="ai-section-intro">
    <p class="eyebrow">Turn a finding into a check</p>
    <h2>Catch something specific. Know who responds.</h2>
    <p>A useful guardrail connects a recurring failure to a cause, a check, and an owner.</p>
    </div>
    <div class="ai-failure-map">{#each guardrails as [failure, cause, check, owner], i}<details open={i === 0}>
    <summary>
    <span>0{i + 1}</span>{failure}</summary>
    <dl>
    <div>
    <dt>Root cause</dt>
    <dd>{cause}</dd>
    </div>
    <div>
    <dt>Targeted check</dt>
    <dd>{check}</dd>
    </div>
    <div>
    <dt>Owner & response</dt>
    <dd>{owner}</dd>
    </div>
    </dl>
    </details>{/each}</div>
    <p class="ai-caption">Illustrative controls. Checks cover defined conditions; they do not guarantee every bug is caught.</p>
    </div>
    </section>
    <section class="section ai-contained ai-scope-split" id="deliverables">
    <div class="ai-section-intro">
    <p class="eyebrow">Your guardrail handoff</p>
    <h2>{service.outcome}</h2>
    <p>{service.sections[2].body}</p>
    </div>
    <div>
    <div class="ai-delivery-list">{#each service.deliverables as item, i}<div>
    <span>0{i + 1}</span>
    <p>{item}</p>
    </div>{/each}</div>
    <details class="ai-technical-note">
    <summary>Where automation ends and review begins</summary>
    <p>{service.sections[1].body}</p>
    </details>
    </div>
    </section>
  {/if}
  <div id="get-quote">
    <CtaBand heading="Start with your project and a question." copy="Tell me what exists, what you need checked, and your next deadline. I will confirm fit, scope, and cost. No repository URL required." label={service.cta} sourceTitle={service.eyebrow} />
    </div>
  <section class="section ai-contained ai-faq-layout" id="questions">
    <div class="ai-section-intro">
    <p class="eyebrow">Before we start</p>
    <h2>Questions about {service.eyebrow}</h2>
    <p>The quote is free. Hands-on engineering is paid work within an agreed scope.</p>
    </div>
    <FaqList items={service.faqs} askQuestion={false} />
    </section>
  <nav class="ai-related-links ai-contained" aria-label="Other AI development services">
    <a href={aiDevelopmentUrl()}>← All AI services</a>{#each aiDevelopmentPages.filter(item => item.slug !== service.slug) as item}<a href={aiDevelopmentUrl(item.slug)}>{item.eyebrow} ↗</a>{/each}</nav>
</main>
