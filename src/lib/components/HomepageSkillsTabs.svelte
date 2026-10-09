<script>
  import SectionHeading from "./SectionHeading.svelte";

  let { items = [] } = $props();

  let activeIndex = $state(0);
  const activeSkill = $derived(items[activeIndex] || items[0]);

  function selectSkill(index) {
    const nextIndex = Number(index);
    activeIndex = Number.isFinite(nextIndex) ? Math.max(0, Math.min(items.length - 1, nextIndex)) : 0;
  }

  function handleTabKeys(event) {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") selectSkill(0);
    else if (event.key === "End") selectSkill(items.length - 1);
    else if (event.key === "ArrowDown") selectSkill((activeIndex + 1) % items.length);
    else selectSkill((activeIndex - 1 + items.length) % items.length);

    requestAnimationFrame(() => document.getElementById(`homepage-skill-tab-${activeIndex}`)?.focus());
  }
</script>

{#if activeSkill}
  <section class="section homepage-skills section-effect section-effect--signals section-effect--medium" aria-labelledby="homepage-skills-title">
    <SectionHeading
      id="homepage-skills-title"
      eyebrow="Technical skills"
      h2="The technical skills behind the work"
      body="Choose the result you need to see the engineering skill, production tasks, and checks involved."
    />

    <label class="homepage-skills-select">
      <span>Choose what the skill is used for</span>
      <select value={activeIndex} onchange={(event) => selectSkill(event.currentTarget.value)}>
        {#each items as item, index}
          <option value={index}>{item.label}</option>
        {/each}
      </select>
    </label>

    <div class="homepage-skills-layout">
      <div class="homepage-skills-tablist" role="tablist" aria-label="Skills by use" tabindex="-1" onkeydown={handleTabKeys}>
        <p>Used for</p>
        {#each items as item, index}
          <button
            id={`homepage-skill-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls="homepage-skill-panel"
            tabindex={activeIndex === index ? 0 : -1}
            class:active={activeIndex === index}
            onclick={() => selectSkill(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
          </button>
        {/each}
        <div class="homepage-skills-aside-actions">
          <a class="button button-primary" href="/skills/" title="View all technical web skills">All Skills</a>
          <a class="button homepage-skills-secondary" href="/services/" title="View all website services">All Services</a>
        </div>
      </div>

      {#key activeIndex}
        <div id="homepage-skill-panel" class="homepage-skill-panel" role="tabpanel" aria-labelledby={`homepage-skill-tab-${activeIndex}`}>
          <div class="homepage-skill-copy">
            <p class="eyebrow">{activeSkill.skillLabel}</p>
            <h3>{activeSkill.title}</h3>

            <figure class="homepage-skill-media">
              <img src={activeSkill.image} alt={activeSkill.imageAlt} width="1200" height="675" loading="lazy" decoding="async" />
              <figcaption><span>Used for</span>{activeSkill.label}</figcaption>
            </figure>

            <p class="homepage-skill-intro">{activeSkill.intro}</p>
            {#if activeSkill.context?.length}
              <p class="homepage-skill-context">
                {#each activeSkill.context as part}
                  {#if typeof part === "string"}
                    {part}
                  {:else}
                    <a href={part.href} title={part.title}>{part.text}</a>
                  {/if}
                {/each}
              </p>
            {/if}

            <div class="homepage-skill-details">
              <div>
                <span>What this skill covers</span>
                <ul>
                  {#each activeSkill.scope as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
              <div>
                <span>Technical advantage</span>
                <ul>
                  {#each activeSkill.advantages as advantage}
                    <li>{advantage}</li>
                  {/each}
                </ul>
              </div>
            </div>

            <div class="homepage-skill-outcome">
              <span>How this improves the client deliverable</span>
              <p>{activeSkill.deliverable}</p>
            </div>

            <div class="homepage-skill-actions">
              <a class="button button-primary" href={activeSkill.skillHref} title={activeSkill.skillTitle || `Explore ${activeSkill.skillLabel}`}>{activeSkill.skillCta || "Explore This Skill"}</a>
              <a class="homepage-skill-service-link" href={activeSkill.serviceHref} title={`View ${activeSkill.label}`}>View {activeSkill.label} -&gt;</a>
            </div>
          </div>
        </div>
      {/key}
    </div>

    <div class="homepage-skills-mobile-actions">
      <a class="button button-primary" href="/skills/" title="View all technical web skills">All Skills</a>
      <a class="button homepage-skills-secondary" href="/services/" title="View all website services">All Services</a>
    </div>
  </section>
{/if}

<style>
  .homepage-skills-select { display: none; }

  .homepage-skills-layout {
    display: grid;
    grid-template-columns: minmax(210px, 0.7fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 18px;
    align-items: stretch;
  }

  .homepage-skills-tablist {
    display: grid;
    gap: 8px;
    align-content: start;
  }

  .homepage-skills-tablist > p {
    margin: 0 0 3px;
    color: var(--accent-dark);
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .homepage-skills-tablist button {
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 10px;
    align-items: center;
    width: 100%;
    min-height: 54px;
    padding: 10px 12px;
    border: 1px solid rgba(16, 23, 34, 0.13);
    border-radius: 7px;
    background: rgba(255, 253, 250, 0.86);
    color: var(--ink);
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: border-color 150ms ease, background 150ms ease, color 150ms ease, transform 150ms ease;
  }

  .homepage-skills-tablist button:hover,
  .homepage-skills-tablist button:focus-visible {
    border-color: rgba(48, 199, 149, 0.5);
    transform: translateX(3px);
  }

  .homepage-skills-tablist button.active {
    border-color: rgba(48, 199, 149, 0.58);
    background: linear-gradient(135deg, #101c2b, #10372e);
    color: #fff;
    box-shadow: 0 12px 28px rgba(16, 23, 34, 0.16);
  }

  .homepage-skills-tablist button > span {
    color: var(--accent-dark);
    font-size: 0.74rem;
    font-weight: 900;
    letter-spacing: 0.08em;
  }

  .homepage-skills-tablist button.active > span { color: var(--accent); }
  .homepage-skills-tablist strong { line-height: 1.15; }

  .homepage-skill-panel {
    grid-column: 2 / 4;
    min-height: 0;
    border: 1px solid rgba(48, 199, 149, 0.28);
    border-radius: 9px;
    background: radial-gradient(circle at 82% 12%, rgba(48, 199, 149, 0.17), transparent 32%), linear-gradient(138deg, #101722, #102a25);
    color: #fff;
    clip-path: var(--notch-clip-soft);
    box-shadow: 0 22px 48px rgba(16, 23, 34, 0.2);
    overflow: hidden;
    animation: homepageSkillIn 180ms ease-out both;
  }

  .homepage-skill-copy {
    display: grid;
    min-width: 0;
    padding: clamp(25px, 3.2vw, 40px);
  }

  .homepage-skill-copy .eyebrow { color: var(--accent); }
  .homepage-skill-copy h3 { margin-top: 8px; color: #fff; font-size: clamp(1.5rem, 2.5vw, 2.25rem); line-height: 1.08; }
  .homepage-skill-intro { max-width: 900px; margin: 20px 0 0; color: #dce5ef; line-height: 1.55; }
  .homepage-skill-context { max-width: 920px; margin: 10px 0 0; color: #bfcbd8; font-size: 0.9rem; line-height: 1.55; }
  .homepage-skill-context a { color: var(--accent); font-weight: 800; text-underline-offset: 4px; }
  .homepage-skill-context a:hover,
  .homepage-skill-context a:focus-visible { color: #fff; }

  .homepage-skill-details {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin-top: 22px;
  }

  .homepage-skill-details > div,
  .homepage-skill-outcome {
    padding: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.045);
  }

  .homepage-skill-details span,
  .homepage-skill-outcome > span {
    color: var(--accent);
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .homepage-skill-details ul { display: grid; gap: 7px; margin: 10px 0 0; padding: 0; list-style: none; }
  .homepage-skill-details li { position: relative; padding-left: 15px; color: #dce5ef; font-size: 0.84rem; line-height: 1.38; }
  .homepage-skill-details li::before { position: absolute; top: 0.55em; left: 0; width: 5px; height: 5px; border-radius: 50%; background: var(--accent); content: ""; }

  .homepage-skill-outcome { margin-top: 12px; }
  .homepage-skill-outcome p { margin: 7px 0 0; color: #dce5ef; font-size: 0.87rem; line-height: 1.45; }

  .homepage-skill-actions { display: flex; flex-wrap: wrap; gap: 15px; align-items: center; margin-top: 22px; }
  .homepage-skill-service-link { color: var(--accent); font-weight: 800; text-decoration: none; }
  .homepage-skill-service-link:hover,
  .homepage-skill-service-link:focus-visible { color: #fff; text-decoration: underline; text-underline-offset: 4px; }

  .homepage-skill-media { position: relative; min-width: 0; height: clamp(210px, 24vw, 300px); margin: 20px 0 0; border: 1px solid rgba(48, 199, 149, 0.22); border-radius: 7px; overflow: hidden; }
  .homepage-skill-media::after { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 50%, rgba(8, 20, 29, 0.52) 100%); content: ""; pointer-events: none; }
  .homepage-skill-media img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .homepage-skill-media figcaption {
    position: absolute;
    right: 18px;
    bottom: 18px;
    z-index: 1;
    display: grid;
    gap: 3px;
    max-width: calc(100% - 36px);
    padding: 10px 13px;
    border: 1px solid rgba(48, 199, 149, 0.38);
    border-radius: 6px;
    background: rgba(8, 20, 29, 0.84);
    color: #fff;
    font-size: 0.85rem;
    font-weight: 800;
    backdrop-filter: blur(10px);
  }
  .homepage-skill-media figcaption span { color: var(--accent); font-size: 0.64rem; letter-spacing: 0.08em; text-transform: uppercase; }

  .homepage-skills-aside-actions {
    display: flex;
    gap: 7px;
    margin-top: 8px;
  }
  .homepage-skills-aside-actions .button {
    flex: 1 1 0;
    min-width: 0;
    min-height: 38px;
    padding: 8px 7px;
    font-size: 0.68rem;
    line-height: 1.1;
    white-space: nowrap;
  }
  .homepage-skills-mobile-actions { display: none; }
  .homepage-skills-secondary {
    border: 1px solid #0b6f54;
    background: rgba(255, 253, 250, 0.94);
    color: #075b46;
    box-shadow: 0 8px 20px rgba(16, 23, 34, 0.08);
  }
  .homepage-skills-secondary:hover,
  .homepage-skills-secondary:focus-visible {
    border-color: #075b46;
    background: #e7f8f1;
    color: #063f32;
  }

  @keyframes homepageSkillIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 1050px) {
    .homepage-skills-layout { grid-template-columns: minmax(185px, 0.6fr) minmax(0, 1fr) minmax(0, 1fr); }
  }

  @media (max-width: 760px) {
    .homepage-skills-select { display: grid; gap: 8px; margin-bottom: 16px; color: var(--ink); font-weight: 800; }
    .homepage-skills-select select { width: 100%; min-height: 50px; padding: 10px 13px; border: 1px solid rgba(8, 112, 82, 0.34); border-radius: 6px; background: var(--panel); color: var(--ink); font: inherit; }
    .homepage-skills-layout { display: block; }
    .homepage-skills-tablist { display: none; }
    .homepage-skill-panel { min-height: 0; }
    .homepage-skill-details { grid-template-columns: 1fr; }
    .homepage-skill-media { height: 210px; }
    .homepage-skill-copy { padding: 22px 18px 26px; }
    .homepage-skill-actions .button { width: 100%; }
    .homepage-skill-service-link { width: 100%; text-align: center; }
    .homepage-skills-mobile-actions { display: flex; gap: 8px; margin-top: 16px; }
    .homepage-skills-mobile-actions .button { flex: 1 1 0; min-width: 0; padding-inline: 8px; font-size: 0.78rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .homepage-skill-panel { animation: none; }
    .homepage-skills-tablist button { transition: none; }
  }
</style>
