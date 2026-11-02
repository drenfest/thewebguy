<script>
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";

  let sections = $state([]);
  let active = $state(0);
  let progress = $state(0);
  let expanded = $state(false);
  let minimized = $state(false);
  let headings = [];
  let frame = 0;

  function updatePosition() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress = max > 0 ? Math.min(100, Math.max(0, Math.round(window.scrollY / max * 100))) : 0;
    let current = 0;
    headings.forEach((heading, index) => { if (heading.getBoundingClientRect().top <= 180) current = index; });
    active = current;
  }

  function collectSections() {
    headings = Array.from(document.querySelectorAll("main h1, main h2"))
      .filter(node => node.getClientRects().length && !node.closest("[role=tabpanel], .hero-panel, .card, .faq-question-form, .inline-lead-section, .sr-only"));
    sections = headings.map((heading, index) => ({ label: heading.textContent.trim(), key: index }));
    expanded = false;
    updatePosition();
  }

  function navigate(index) {
    const next = Math.max(0, Math.min(headings.length - 1, index));
    const heading = headings[next];
    if (!heading) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    heading.scrollIntoView({ block: "start", behavior: reduceMotion ? "instant" : "smooth" });
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
    active = next;
    expanded = false;
  }

  afterNavigate(() => collectSections());
  onMount(() => {
    collectSections();
    function queueUpdate() { cancelAnimationFrame(frame); frame = requestAnimationFrame(updatePosition); }
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", queueUpdate); window.removeEventListener("resize", queueUpdate); };
  });
</script>

{#if sections.length > 1}
  <nav class="page-navigator" class:page-navigator--minimized={minimized} aria-label="Page section navigation">
    <progress class="page-navigator-progress" max="100" value={progress} aria-label="Page reading progress"></progress>
    {#if !minimized}
      {#if expanded}
        <div class="page-navigator-index" id="page-section-index">
          <p>ON THIS PAGE <span>{sections.length} sections</span></p>
          {#each sections as section, index}<button type="button" class:current={index === active} aria-current={index === active ? "location" : undefined} onclick={() => navigate(index)}><span>{String(index + 1).padStart(2,"0")}</span>{section.label}</button>{/each}
        </div>
      {/if}
      <span class="page-navigator-number">{String(active + 1).padStart(2,"0")}</span>
      <div class="page-navigator-current"><span>CURRENT SECTION</span><strong>{sections[active]?.label}</strong></div>
      <span class="page-navigator-percentage">{progress}%</span>
      <div class="page-navigator-controls">
        <button type="button" aria-label="Previous section" disabled={active === 0} onclick={() => navigate(active - 1)}>↑</button>
        <button type="button" class="page-navigator-index-toggle" aria-expanded={expanded} aria-controls="page-section-index" onclick={() => expanded = !expanded}>INDEX</button>
        <button type="button" aria-label="Next section" disabled={active === sections.length - 1} onclick={() => navigate(active + 1)}>↓</button>
      </div>
    {/if}
    <button type="button" class="page-navigator-minimize" aria-label={minimized ? "Show page navigation" : "Minimize page navigation"} onclick={() => { minimized = !minimized; expanded = false; }}>{minimized ? "☰" : "−"}</button>
  </nav>
{/if}
