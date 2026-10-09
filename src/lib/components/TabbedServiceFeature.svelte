<script>
  let { items = [], sectionLabel = "Cleanup areas" } = $props();
  let activeIndex = $state(0);
  const activeItem = $derived(items[activeIndex] || items[0]);

  function selectTab(index) {
    if (index !== activeIndex) activeIndex = index;
  }

  const mobileLabels = [
    "Broken layouts & responsive issues",
    "Routing & navigation",
    "Forms, modals & lead flow",
    "GA4/GTM conversion tracking",
    "Search foundations & internal links",
    "Deployment & hosting",
    "APIs, webhooks & data connections",
    "Accessibility & UX",
    "Performance & bundle weight",
    "Error handling & edge cases",
    "Security & generated code",
    "Maintainability & future editing"
  ];

  function handleKeydown(event, index) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    activeIndex = next;
    document.getElementById(`cleanup-tab-${next}`)?.focus();
  }
</script>

{#if activeItem}
  <div class="cleanup-tabs">
    <label class="cleanup-tabs__select-label" for="cleanup-topic-select">Choose a cleanup topic</label>
    <div class="cleanup-tabs__select-wrap">
      <select id="cleanup-topic-select" value={activeIndex} onchange={(event) => selectTab(Number(event.currentTarget.value))}>
        {#each items as item, index}<option value={index}>{String(index + 1).padStart(2, "0")}: {mobileLabels[index] || item.title}</option>{/each}
      </select>
    </div>

    <div class="cleanup-tabs__rail" role="tablist" aria-label={sectionLabel} aria-orientation="vertical">
      {#each items as item, index}
        <button
          id={`cleanup-tab-${index}`}
          class:active={index === activeIndex}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-controls="cleanup-tab-panel"
          tabindex={index === activeIndex ? 0 : -1}
          onclick={() => selectTab(index)}
          onkeydown={(event) => handleKeydown(event, index)}
        ><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong></button>
      {/each}
    </div>

    <div id="cleanup-tab-panel" class="cleanup-tabs__panel" role="tabpanel" aria-labelledby={`cleanup-tab-${activeIndex}`}>
      {#key activeIndex}
        <div class="cleanup-tabs__panel-inner">
          <div class="cleanup-tabs__media">
            <img src={activeItem.image.src} alt={activeItem.image.alt} width="960" height="540" loading="lazy" decoding="async" />
            <span>{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          </div>
          <div class="cleanup-tabs__content">
            <p class="cleanup-tabs__eyebrow">AI-built site cleanup focus</p>
            <h3>{activeItem.title}</h3>
            <p class="cleanup-tabs__intro">{activeItem.intro}</p>
            <div class="cleanup-tabs__details">
              <section><h4>Signs this needs attention</h4><ul>{#each activeItem.signs as item}<li>{item}</li>{/each}</ul></section>
              <section><h4>What gets checked</h4><ul>{#each activeItem.review as item}<li>{item}</li>{/each}</ul></section>
            </div>
            <div class="cleanup-tabs__outcome"><strong>Practical outcome</strong><p>{activeItem.outcome}</p></div>
          </div>
        </div>
      {/key}
    </div>
  </div>
{/if}

<style>
  .cleanup-tabs { display: grid; grid-template-columns: minmax(230px, .74fr) minmax(0, 2.26fr); gap: clamp(18px, 2.5vw, 34px); align-items: stretch; }
  .cleanup-tabs__select-label, .cleanup-tabs__select-wrap { display: none; }
  .cleanup-tabs__rail { display: grid; align-content: start; gap: 7px; }
  .cleanup-tabs__rail button { display: grid; grid-template-columns: 34px 1fr; gap: 10px; align-items: center; width: 100%; padding: 12px 14px; border: 1px solid rgba(10,117,91,.16); border-radius: 6px; background: rgba(255,255,255,.72); color: var(--ink,#101827); text-align: left; cursor: pointer; transition: transform 140ms ease,color 140ms ease,border-color 140ms ease,background 140ms ease,box-shadow 140ms ease; }
  .cleanup-tabs__rail button:hover { transform: translateX(3px); border-color: rgba(14,151,116,.42); background: rgba(243,255,250,.92); }
  .cleanup-tabs__rail button:focus-visible { outline: 3px solid rgba(46,201,155,.28); outline-offset: 2px; }
  .cleanup-tabs__rail button.active { transform: translateX(5px); border-color: rgba(46,201,155,.68); background: #10232a; color: #f7fffc; box-shadow: 0 12px 26px rgba(13,63,56,.15); }
  .cleanup-tabs__rail span { color: #0b8b6a; font-family: var(--font-display); font-size: .7rem; letter-spacing: .09em; }
  .cleanup-tabs__rail button.active span { color: #48d7ad; }
  .cleanup-tabs__rail strong { font-family: var(--font-display); font-size: clamp(.72rem,.9vw,.88rem); line-height: 1.25; }
  .cleanup-tabs__panel { min-width: 0; overflow: hidden; border: 1px solid rgba(46,201,155,.25); border-radius: 10px; background: #0d1b28; box-shadow: 0 24px 60px rgba(10,28,37,.16); }
  .cleanup-tabs__panel-inner { display: grid; grid-template-columns: minmax(280px,.92fr) minmax(0,1.08fr); min-height: 100%; animation: cleanup-panel-in 190ms cubic-bezier(.2,.75,.25,1) both; }
  .cleanup-tabs__media { position: relative; min-height: 100%; overflow: hidden; background: #07121d; }
  .cleanup-tabs__media::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg,transparent 60%,rgba(4,13,22,.7)); pointer-events: none; }
  .cleanup-tabs__media img { display: block; width: 100%; height: 100%; min-height: 520px; object-fit: cover; animation: cleanup-image-in 240ms cubic-bezier(.2,.75,.25,1) both; }
  .cleanup-tabs__media span { position: absolute; z-index: 1; right: 18px; bottom: 16px; color: #c9fff0; font-family: var(--font-display); font-size: .72rem; letter-spacing: .14em; }
  .cleanup-tabs__content { display: flex; flex-direction: column; justify-content: center; padding: clamp(26px,3.2vw,48px); color: #d7e3e8; }
  .cleanup-tabs__eyebrow { margin: 0 0 9px; color: #48d7ad; font-family: var(--font-display); font-size: .72rem; letter-spacing: .12em; text-transform: uppercase; }
  .cleanup-tabs__content h3 { margin: 0; color: #fff; font-size: clamp(1.65rem,2.5vw,2.7rem); line-height: 1.08; }
  .cleanup-tabs__intro { margin: 16px 0 22px; color: #c4d2d8; font-size: clamp(1rem,1.2vw,1.12rem); line-height: 1.62; }
  .cleanup-tabs__details { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
  .cleanup-tabs__details section { padding: 16px; border: 1px solid rgba(130,177,190,.18); border-radius: 7px; background: rgba(255,255,255,.035); }
  .cleanup-tabs__details h4 { margin: 0 0 11px; color: #91ead1; font-size: .87rem; }
  .cleanup-tabs__details ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }
  .cleanup-tabs__details li { position: relative; padding-left: 15px; color: #c9d6db; font-size: .91rem; line-height: 1.45; }
  .cleanup-tabs__details li::before { content: ""; position: absolute; left: 0; top: .58em; width: 5px; height: 5px; border-radius: 50%; background: #3bd2a4; box-shadow: 0 0 8px rgba(59,210,164,.48); }
  .cleanup-tabs__outcome { margin-top: 18px; padding: 14px 16px; border-left: 3px solid #39cf9f; background: rgba(55,206,159,.08); }
  .cleanup-tabs__outcome strong { color: #73e6c4; font-family: var(--font-display); font-size: .76rem; text-transform: uppercase; letter-spacing: .08em; }
  .cleanup-tabs__outcome p { margin: 5px 0 0; line-height: 1.48; }
  @keyframes cleanup-panel-in { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes cleanup-image-in { from { opacity: .68; transform: scale(1.018); } to { opacity: 1; transform: scale(1); } }
  @media (max-width: 960px) {
    .cleanup-tabs { grid-template-columns: 1fr; gap: 14px; }
    .cleanup-tabs__rail { display: none; }
    .cleanup-tabs__select-label { display: block; margin-bottom: -5px; color: #0a765d; font-family: var(--font-display); font-size: .78rem; letter-spacing: .08em; text-transform: uppercase; }
    .cleanup-tabs__select-wrap { position: relative; display: block; }
    .cleanup-tabs__select-wrap::after { content: "⌄"; position: absolute; right: 16px; top: 50%; transform: translateY(-56%); color: #58d9b4; font-size: 1.45rem; pointer-events: none; }
    .cleanup-tabs__select-wrap select { width: 100%; min-height: 54px; padding: 12px 48px 12px 15px; border: 1px solid rgba(46,201,155,.56); border-radius: 7px; appearance: none; background: #10232a; color: #f6fffc; font-family: var(--font-display); font-size: .9rem; line-height: 1.3; }
    .cleanup-tabs__select-wrap select:focus-visible { outline: 3px solid rgba(46,201,155,.28); outline-offset: 2px; }
  }
  @media (max-width: 720px) {
    .cleanup-tabs__panel-inner { grid-template-columns: 1fr; }
    .cleanup-tabs__media img { min-height: 0; aspect-ratio: 16 / 9; }
    .cleanup-tabs__content { padding: 24px 20px 26px; }
    .cleanup-tabs__details { grid-template-columns: 1fr; }
  }
  @media (prefers-reduced-motion: reduce) { .cleanup-tabs__rail button,.cleanup-tabs__panel-inner,.cleanup-tabs__media img { animation: none; transition: none; } }
</style>
