<script>
  import SectionHeading from "./SectionHeading.svelte";
  import { fixNoteDisplayDate, fixNoteMap, fixNoteUrl, getFixNotesForService, sortedFixNotes } from "$lib/data/content.js";

  let {
    service = null,
    showDiagnosis = true,
    showProcess = true,
    showDelivery = true,
    showProof = true,
    diagnosisEyebrow = "",
    diagnosisHeading = "From a visible symptom to a verified fix",
    diagnosisBody = "A useful request starts with what is happening. The investigation finds the responsible layer before the repair is agreed and tested.",
    symptomsOverride = [],
    investigationCopy = "",
    processHeading = "How the work proceeds",
    processBody = "Each step narrows uncertainty before more changes are made.",
    processStepsOverride = [],
    deliveryHeading = "What you receive",
    deliveryCopy = "A diagnosis, the agreed changes, verification results, unresolved dependencies, and a plain completion note that explains what changed and what still needs attention.",
    sendHeading = "What to send first",
    sendCopy = "The affected URL, expected versus actual behavior, when it started, recent changes, a screenshot or screen recording, and whether admin or hosting access still works.",
    proofSlugsOverride = [],
    proofMatch = "related",
    proofId = ""
  } = $props();

  const examples = $derived(proofSlugsOverride.length
    ? proofSlugsOverride.map((slug) => fixNoteMap[slug]).filter(Boolean).map((note) => ({ ...note, matchedTags: note.tags || [] }))
    : proofMatch === "exact"
      ? sortedFixNotes.filter((note) => note.serviceSlug === service?.slug).slice(0, 2).map((note) => ({ ...note, matchedTags: note.tags || [] }))
      : getFixNotesForService(service, 2));
  const problemSection = $derived((service?.sections || []).find((section) =>
    /problems this page targets|common problems|what.*happening/i.test(section.h2 || "") && section.bullets?.length
  ));
  const symptoms = $derived((symptomsOverride.length ? symptomsOverride : problemSection?.bullets || [
    "A visible part of the site stopped working or behaves differently for some visitors",
    "A form, checkout, admin screen, layout, integration, or tracked action is failing",
    "The problem appeared after an update, deployment, content change, or cache rebuild"
  ]).slice(0, 5));
  const processSteps = $derived(processStepsOverride.length ? processStepsOverride : ["Reproduce", "Isolate", "Agree", "Repair", "Retest"]);

  function firstItem(items = [], fallback = "") {
    return items[0] || fallback;
  }
</script>

<section class="section service-guide section-effect section-effect--signals section-effect--low">
  {#if showDiagnosis}
  <SectionHeading
    eyebrow={diagnosisEyebrow || `${service.eyebrow} in practice`}
    h2={diagnosisHeading}
    body={diagnosisBody}
  />

  <div class="service-guide__top">
    <article class="service-guide__panel service-guide__panel--symptoms">
      <span class="service-guide__number" aria-hidden="true">01</span>
      <h3>What’s happening on your site?</h3>
      <ul>
        {#each symptoms as symptom}<li>{symptom}</li>{/each}
      </ul>
    </article>

    <article class="service-guide__panel service-guide__panel--investigate">
      <span class="service-guide__number" aria-hidden="true">02</span>
      <h3>What I investigate</h3>
      <p>{investigationCopy || "Recent changes, server and PHP errors, browser console and network failures, plugin or theme interactions, cache layers, hosting behavior, and external integrations, as relevant to the symptom."}</p>
      <div class="service-guide__signal" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </article>
  </div>
  {/if}

  {#if showProcess}
  <article class="service-guide__process" aria-labelledby="service-process-heading">
    <div class="service-guide__process-copy">
      <span class="service-guide__number" aria-hidden="true">03</span>
      <div>
        <h3 id="service-process-heading">{processHeading}</h3>
        <p>{processBody}</p>
      </div>
    </div>
    <ol class="service-guide__steps">
      {#each processSteps as step, index}
        <li>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </li>
      {/each}
    </ol>
  </article>
  {/if}

  {#if showDelivery}
  <div class="service-guide__middle">
    <article class="service-guide__panel">
      <span class="service-guide__number" aria-hidden="true">04</span>
      <h3>{deliveryHeading}</h3>
      <p>{deliveryCopy}</p>
    </article>

    <article class="service-guide__panel service-guide__panel--send">
      <span class="service-guide__number" aria-hidden="true">05</span>
      <h3>{sendHeading}</h3>
      <p>{sendCopy}</p>
    </article>
  </div>
  {/if}

  {#if showProof && examples.length}
    <div class="service-guide__examples" id={proofId || undefined}>
      <div class="service-guide__examples-heading">
        <span class="service-guide__number" aria-hidden="true">06</span>
        <div>
          <p class="eyebrow">Relevant Web Fixes</p>
          <h3>{examples.length === 1 ? "Actual troubleshooting example" : "Actual troubleshooting examples"}</h3>
          <p>{examples.length === 1 ? "A related work note that shows the problem, the change made, and what was checked afterward." : "Related work notes that show the problem, the change made, and what was checked afterward."}</p>
        </div>
      </div>

      <div class="service-guide__example-grid">
        {#each examples as note}
          <article class="service-guide__example">
            <div class="service-guide__example-meta">
              <time datetime={note.date}>{fixNoteDisplayDate(note)}</time>
              {#each note.matchedTags.slice(0, 3) as tag}<span>{tag}</span>{/each}
            </div>
            <h4><a href={fixNoteUrl(note.slug)} title={`Read the Web Fix: ${note.title}`}>{note.title}</a></h4>
            <dl>
              <div><dt>Symptom</dt><dd>{note.problemSummary}</dd></div>
              <div><dt>Evidence</dt><dd>{firstItem(note.whatIChecked, note.excerpt)}</dd></div>
              <div><dt>Change</dt><dd>{firstItem(note.whatIChanged, "The agreed repair was implemented and documented.")}</dd></div>
              <div><dt>Verified result</dt><dd>{note.resultSummary}</dd></div>
            </dl>
            <a class="service-guide__example-link" href={fixNoteUrl(note.slug)} title={`Read the Web Fix: ${note.title}`}>Read the full Web Fix -&gt;</a>
          </article>
        {/each}
      </div>
    </div>
  {/if}
</section>

<style>
  .service-guide {
    display: grid;
    gap: clamp(18px, 3vw, 28px);
  }

  .service-guide :global(.section-heading) {
    margin-bottom: 0;
  }

  .service-guide__top,
  .service-guide__middle,
  .service-guide__example-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .service-guide__panel,
  .service-guide__process,
  .service-guide__examples {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(16, 23, 34, 0.12);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.72);
    box-shadow: 0 14px 34px rgba(16, 23, 34, 0.08);
  }

  .service-guide__panel {
    padding: clamp(20px, 3vw, 28px);
  }

  .service-guide__panel--investigate {
    background:
      radial-gradient(circle at 88% 18%, rgba(48, 199, 149, 0.18), transparent 34%),
      #111a26;
    color: var(--white);
  }

  .service-guide__panel--send {
    background: linear-gradient(135deg, rgba(48, 199, 149, 0.12), rgba(79, 124, 255, 0.08)), #fff;
  }

  .service-guide__number {
    display: inline-block;
    margin-bottom: 12px;
    color: var(--accent-dark);
    font: 800 0.78rem/1 var(--font-display);
    letter-spacing: 0.14em;
  }

  .service-guide__panel--investigate .service-guide__number {
    color: var(--accent);
  }

  h3,
  h4,
  p {
    margin-top: 0;
  }

  h3 {
    margin-bottom: 10px;
    font-size: clamp(1.18rem, 2vw, 1.48rem);
  }

  .service-guide__panel--investigate h3 {
    color: var(--white);
  }

  .service-guide__panel p,
  .service-guide__process p,
  .service-guide__examples-heading p {
    margin-bottom: 0;
    line-height: 1.65;
  }

  .service-guide__panel--investigate p {
    color: #dce5ef;
  }

  .service-guide__panel ul {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .service-guide__panel li {
    position: relative;
    padding-left: 18px;
    line-height: 1.5;
  }

  .service-guide__panel li::before {
    position: absolute;
    top: 0.65em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    content: "";
  }

  .service-guide__signal {
    display: flex;
    gap: 7px;
    align-items: end;
    height: 30px;
    margin-top: 20px;
  }

  .service-guide__signal span {
    width: 8px;
    border-radius: 999px;
    background: var(--accent);
  }

  .service-guide__signal span:nth-child(1) { height: 9px; opacity: 0.42; }
  .service-guide__signal span:nth-child(2) { height: 21px; opacity: 0.62; }
  .service-guide__signal span:nth-child(3) { height: 14px; opacity: 0.78; }
  .service-guide__signal span:nth-child(4) { height: 28px; }
  .service-guide__signal span:nth-child(5) { height: 18px; opacity: 0.72; }

  .service-guide__process {
    display: grid;
    gap: 24px;
    padding: clamp(20px, 3vw, 30px);
    background:
      linear-gradient(120deg, rgba(48, 199, 149, 0.13), rgba(79, 124, 255, 0.07) 58%, transparent),
      #f8fbfa;
  }

  .service-guide__process-copy {
    display: flex;
    gap: 18px;
    align-items: start;
  }

  .service-guide__process-copy .service-guide__number {
    margin-top: 6px;
    margin-bottom: 0;
  }

  .service-guide__process-copy h3 {
    margin-bottom: 4px;
  }

  .service-guide__steps {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
    counter-reset: service-step;
  }

  .service-guide__steps li {
    position: relative;
    display: grid;
    gap: 9px;
    min-width: 0;
    padding: 14px;
    border: 1px solid rgba(8, 112, 82, 0.18);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.82);
  }

  .service-guide__steps li:not(:last-child)::after {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: -9px;
    color: var(--accent-dark);
    content: "→";
    font-weight: 900;
    transform: translateY(-50%);
  }

  .service-guide__steps span {
    display: grid;
    width: 28px;
    height: 28px;
    place-items: center;
    border-radius: 50%;
    background: var(--accent);
    color: #08140f;
    font-weight: 900;
  }

  .service-guide__steps strong {
    min-width: 0;
    font-family: var(--font-display);
    font-size: 0.86rem;
    overflow-wrap: anywhere;
  }

  .service-guide__examples {
    display: grid;
    gap: 20px;
    padding: clamp(20px, 3vw, 30px);
    background: #111a26;
    color: var(--white);
  }

  .service-guide__examples-heading {
    display: flex;
    gap: 18px;
    align-items: start;
  }

  .service-guide__examples-heading .service-guide__number,
  .service-guide__examples-heading .eyebrow {
    color: var(--accent);
  }

  .service-guide__examples-heading .service-guide__number {
    margin-top: 5px;
  }

  .service-guide__examples-heading h3 {
    color: var(--white);
  }

  .service-guide__examples-heading p:not(.eyebrow) {
    color: #dce5ef;
  }

  .service-guide__example {
    display: grid;
    gap: 15px;
    min-width: 0;
    padding: clamp(18px, 2.5vw, 24px);
    border: 1px solid rgba(255, 255, 255, 0.11);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.045);
  }

  .service-guide__example-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    align-items: center;
    color: #cad5e2;
    font-size: 0.78rem;
  }

  .service-guide__example-meta span {
    padding: 5px 8px;
    border: 1px solid rgba(48, 199, 149, 0.28);
    border-radius: 999px;
    background: rgba(48, 199, 149, 0.1);
    color: var(--accent);
    font-weight: 800;
  }

  .service-guide__example h4 {
    margin-bottom: 0;
    color: var(--white);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    line-height: 1.35;
  }

  .service-guide__example h4 a {
    color: inherit;
    text-decoration: none;
  }

  .service-guide__example h4 a:hover,
  .service-guide__example h4 a:focus-visible {
    color: var(--accent);
  }

  .service-guide__example dl {
    display: grid;
    gap: 12px;
    margin: 0;
  }

  .service-guide__example dl div {
    display: grid;
    grid-template-columns: 98px minmax(0, 1fr);
    gap: 10px;
  }

  .service-guide__example dt {
    color: var(--accent);
    font-weight: 900;
  }

  .service-guide__example dd {
    margin: 0;
    color: #dce5ef;
    line-height: 1.5;
  }

  .service-guide__example-link {
    width: fit-content;
    color: var(--accent);
    font-weight: 900;
    text-decoration: none;
  }

  .service-guide__example-link:hover,
  .service-guide__example-link:focus-visible {
    color: var(--white);
  }

  @media (max-width: 820px) {
    .service-guide__top,
    .service-guide__middle,
    .service-guide__example-grid {
      grid-template-columns: 1fr;
    }

    .service-guide__steps {
      grid-template-columns: 1fr;
    }

    .service-guide__steps li {
      grid-template-columns: 32px 1fr;
      align-items: center;
    }

    .service-guide__steps li:not(:last-child)::after {
      top: auto;
      right: auto;
      bottom: -12px;
      left: 22px;
      content: "↓";
      transform: none;
    }
  }

  @media (max-width: 560px) {
    .service-guide__example dl div {
      grid-template-columns: 1fr;
      gap: 3px;
    }
  }
</style>
