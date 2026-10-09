<script>
  import SectionHeading from "./SectionHeading.svelte";

  let { items = [] } = $props();

  let activeIndex = $state(0);
  const activeRoute = $derived(items[activeIndex] || items[0]);

  function selectRoute(index) {
    activeIndex = Number(index);
  }
</script>

{#if activeRoute}
  <section class="section homepage-problem-tabs section-effect section-effect--grid section-effect--medium" aria-labelledby="homepage-problem-tabs-title">
    <SectionHeading
      id="homepage-problem-tabs-title"
      eyebrow="Website problem routing"
      h2="What Can The Web Guy Help You Fix?"
      body="Explore website troubleshooting for broken pages, WordPress problems, technical SEO, analytics and tracking, site speed, integrations, ongoing support, and AI-built website cleanup."
    />

    <label class="homepage-problem-select">
      <span>Choose the problem</span>
      <select value={activeIndex} onchange={(event) => selectRoute(event.currentTarget.value)}>
        {#each items as item, index}
          <option value={index}>{item.label}</option>
        {/each}
      </select>
    </label>

    <div class="homepage-problem-layout">
      <div class="homepage-problem-tablist" role="tablist" aria-label="Website problems">
        {#each items as item, index}
          <button
            id={`homepage-problem-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="homepage-problem-panel"
            tabindex={activeIndex === index ? 0 : -1}
            class:active={activeIndex === index}
            onclick={() => selectRoute(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
          </button>
        {/each}
      </div>

      {#key activeIndex}
        <div id="homepage-problem-panel" class="homepage-problem-panel" role="tabpanel" aria-labelledby={`homepage-problem-tab-${activeIndex}`}>
          <div class="homepage-problem-copy">
            <p class="eyebrow">{activeRoute.label}</p>
            <h3>{activeRoute.title}</h3>

            {#if activeRoute.symptoms?.length}
              <div class="homepage-problem-symptoms">
                <span>Common symptoms</span>
                <ul>
                  {#each activeRoute.symptoms as symptom}
                    <li>{symptom}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            <div class="homepage-problem-links" aria-label={`${activeRoute.label} service paths`}>
              {#each activeRoute.links as link}
                <a href={link.href} title={link.title || `View ${link.label}`}>{link.label}<span aria-hidden="true">-&gt;</span></a>
              {/each}
            </div>

            <div class="homepage-problem-handoff">
              <div><span>What this solves</span><p>{activeRoute.outcome}</p></div>
            </div>
          </div>

          <figure class="homepage-problem-media">
            <img src={activeRoute.image} alt={activeRoute.imageAlt} width="1200" height="675" loading="lazy" decoding="async" />
          </figure>
        </div>
      {/key}
    </div>
  </section>
{/if}

<style>
  .homepage-problem-select { display: none; }

  .homepage-problem-layout {
    display: grid;
    grid-template-columns: minmax(210px, 0.72fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 18px;
    align-items: stretch;
  }

  .homepage-problem-tablist { display: grid; gap: 8px; align-content: start; }

  .homepage-problem-tablist button {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 9px 12px;
    border: 1px solid rgba(16, 23, 34, 0.12);
    border-radius: 7px;
    background: rgba(255, 253, 250, 0.78);
    color: var(--ink);
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: border-color 150ms ease, background 150ms ease, color 150ms ease, transform 150ms ease;
  }

  .homepage-problem-tablist button:hover,
  .homepage-problem-tablist button:focus-visible { border-color: rgba(48, 199, 149, 0.48); transform: translateX(3px); }

  .homepage-problem-tablist button.active {
    border-color: rgba(48, 199, 149, 0.58);
    background: linear-gradient(135deg, #102432, #10362c);
    color: var(--white);
    box-shadow: 0 12px 28px rgba(16, 23, 34, 0.16);
  }

  .homepage-problem-tablist button > span { color: var(--accent-dark); font-size: 0.76rem; font-weight: 900; letter-spacing: 0.08em; }
  .homepage-problem-tablist button.active > span { color: var(--accent); }
  .homepage-problem-tablist strong { line-height: 1.18; }

  .homepage-problem-panel {
    grid-column: 2 / 4;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(290px, 0.92fr);
    min-height: 430px;
    border: 1px solid rgba(48, 199, 149, 0.25);
    border-radius: 8px;
    background: radial-gradient(circle at 78% 16%, rgba(48, 199, 149, 0.17), transparent 34%), linear-gradient(135deg, #101722, #102a25);
    color: var(--white);
    clip-path: var(--notch-clip-soft);
    box-shadow: 0 22px 48px rgba(16, 23, 34, 0.2);
    overflow: hidden;
    animation: homepageProblemIn 180ms ease-out both;
  }

  .homepage-problem-copy { display: grid; align-content: center; padding: clamp(24px, 3.4vw, 38px); }
  .homepage-problem-copy .eyebrow { color: var(--accent); }
  .homepage-problem-copy h3 { margin-top: 8px; color: var(--white); font-size: clamp(1.45rem, 2.4vw, 2.15rem); line-height: 1.08; }

  .homepage-problem-symptoms { margin-top: 18px; }
  .homepage-problem-symptoms > span { color: var(--accent); font-size: 0.74rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
  .homepage-problem-symptoms ul { display: grid; gap: 7px; margin: 10px 0 0; padding: 0; list-style: none; }
  .homepage-problem-symptoms li { position: relative; padding-left: 16px; color: #dce5ef; font-size: 0.9rem; line-height: 1.4; }
  .homepage-problem-symptoms li::before { content: ""; position: absolute; top: 0.58em; left: 0; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 10px rgba(48, 199, 149, 0.52); }
  .homepage-problem-links { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
  .homepage-problem-links a {
    display: inline-flex;
    gap: 7px;
    align-items: center;
    min-height: 36px;
    padding: 8px 11px;
    border: 1px solid rgba(48, 199, 149, 0.34);
    border-radius: 999px;
    background: rgba(48, 199, 149, 0.09);
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 800;
    line-height: 1.15;
    text-decoration: none;
  }
  .homepage-problem-links a:hover,
  .homepage-problem-links a:focus-visible { border-color: rgba(48, 199, 149, 0.72); background: rgba(48, 199, 149, 0.17); color: var(--white); }

  .homepage-problem-handoff { display: grid; margin-top: 22px; }
  .homepage-problem-handoff > div { padding: 14px; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; background: rgba(255, 255, 255, 0.045); }
  .homepage-problem-handoff span { color: var(--accent); font-size: 0.74rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
  .homepage-problem-handoff p { margin: 7px 0 0; color: #dce5ef; font-size: 0.88rem; line-height: 1.48; }

  .homepage-problem-media { position: relative; min-width: 0; margin: 0; overflow: hidden; }
  .homepage-problem-media::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, #10231f 0%, transparent 28%); pointer-events: none; }
  .homepage-problem-media img { display: block; width: 100%; height: 100%; object-fit: cover; }

  @keyframes homepageProblemIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

  @media (max-width: 980px) {
    .homepage-problem-layout { grid-template-columns: minmax(180px, 0.62fr) minmax(0, 1fr) minmax(0, 1fr); }
    .homepage-problem-panel { grid-template-columns: 1fr; }
    .homepage-problem-media { min-height: 250px; order: -1; }
    .homepage-problem-media::after { background: linear-gradient(180deg, transparent 55%, #10231f 100%); }
  }

  @media (max-width: 760px) {
    .homepage-problem-select { display: grid; gap: 8px; margin-bottom: 16px; color: var(--ink); font-weight: 800; }
    .homepage-problem-select select { width: 100%; min-height: 48px; padding: 10px 13px; border: 1px solid rgba(8, 112, 82, 0.3); border-radius: 6px; background: var(--panel); color: var(--ink); font: inherit; }
    .homepage-problem-layout { display: block; }
    .homepage-problem-tablist { display: none; }
    .homepage-problem-panel { min-height: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .homepage-problem-panel { animation: none; }
    .homepage-problem-tablist button { transition: none; }
  }
</style>
