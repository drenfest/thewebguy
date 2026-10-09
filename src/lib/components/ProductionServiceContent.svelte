<script>
  import SectionHeading from "./SectionHeading.svelte";
  import InternalLinkCopy from "./InternalLinkCopy.svelte";
  import FaqList from "./FaqList.svelte";
  import CtaBand from "./CtaBand.svelte";
  import RelatedProjectHelp from "./RelatedProjectHelp.svelte";

  let {
    service,
    sectionStart = 0,
    showProofSection = true,
    showWorkflow = true,
    showDeliverables = true,
    showFaq = true,
    showCta = true,
    showRelated = true
  } = $props();
  const content = $derived(service.uplift);

  function parts(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  }

  function relatedItems(items = []) {
    return items.map(([title, copy, href]) => ({
      label: "Related help",
      title,
      copy,
      href,
      linkLabel: `View ${title}`
    }));
  }
</script>

{#each content.sections.slice(sectionStart) as section, index}
  <section class={`section section-effect ${index % 2 ? "soft-section section-effect--grid" : "section-effect--hex"} section-effect--low`}>
    <SectionHeading eyebrow={`${service.eyebrow} scope`} h2={section.h2} />
    {#if section.cards}
      <div class="card-grid uplift-card-grid">
        {#each section.cards as [heading, body]}
          <article class="card">
            <h3>{heading}</h3>
            <p>
              {#each parts(body) as part}
                {#if typeof part === "string"}{part}{:else}<a class="text-link" href={part.href} title={part.title}>{part.text}</a>{/if}
              {/each}
            </p>
          </article>
        {/each}
      </div>
    {/if}
    {#if section.paragraphs}<InternalLinkCopy paragraphs={section.paragraphs} className="internal-link-copy--wide" />{/if}
  </section>
{/each}

{#if showProofSection}
  <section class="section section-effect section-effect--signals section-effect--low" id={content.proofId}>
    <SectionHeading eyebrow="Relevant work" h2={content.proofHeading} />
    <div class="card-grid uplift-proof-grid">
      {#each content.proof as [heading, copy, href]}
        <article class="card">
          <h3><a class="text-link" {href}>{heading}</a></h3>
          <p>{copy}</p>
        </article>
      {/each}
    </div>
    {#if content.proofAfter}<InternalLinkCopy paragraphs={[content.proofAfter]} className="internal-link-copy--wide" />{/if}
  </section>
{/if}

{#if showWorkflow}
  <section class="section soft-section section-effect section-effect--traces section-effect--low">
    <SectionHeading eyebrow="How the work proceeds" h2={content.workflowHeading} />
    <ol class="uplift-workflow">
      {#each content.workflow as [heading, copy], index}
        <li><span>{index + 1}</span><div><h3>{heading}</h3><p>{copy}</p></div></li>
      {/each}
    </ol>
  </section>
{/if}

{#if showDeliverables}
  <section class="section section-effect section-effect--hex section-effect--low">
    <SectionHeading eyebrow="Scope and handoff" h2={content.deliverablesHeading} />
    <InternalLinkCopy paragraphs={content.deliverables} className="internal-link-copy--wide" />
  </section>
{/if}

{#if showFaq}
  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading eyebrow="FAQ" h2={`${service.eyebrow} questions`} />
    <FaqList items={content.faqs} askQuestion={true} questionContext={`service_${service.slug}`} />
  </section>
{/if}

{#if showCta}
  <CtaBand heading={content.finalCta[0]} copy={`${content.finalCta[1]} ${content.finalCta[3]}`} label={content.finalCta[2]} sourceTitle={service.h1} />
{/if}

{#if showRelated}
  <RelatedProjectHelp
    eyebrow="Related services"
    heading="Related help when the problem goes further"
    intro="Choose the nearby service that matches the next part of the problem."
    items={relatedItems(content.related)}
  />
{/if}

<style>
  .uplift-card-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  }

  .uplift-proof-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .uplift-proof-grid h3 a {
    color: inherit;
  }

  .uplift-workflow {
    display: grid;
    gap: 14px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .uplift-workflow li {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--panel);
  }

  .uplift-workflow li > span {
    display: grid;
    width: 38px;
    height: 38px;
    place-items: center;
    border-radius: 999px;
    background: var(--accent);
    color: #07130f;
    font-weight: 900;
  }

  .uplift-workflow h3,
  .uplift-workflow p {
    margin: 0;
  }

  .uplift-workflow p {
    margin-top: 6px;
    color: var(--muted);
    line-height: 1.65;
  }

  @media (max-width: 700px) {
    .uplift-proof-grid { grid-template-columns: 1fr; }
  }
</style>
