/** Animated evidence disclosures and cosine details, scoped to the article. */
export function mountRelevanceEvidence(root) {
  const controller = new AbortController();
  const listen = (target, type, handler, options = {}) =>
    target.addEventListener(type, handler, { ...options, signal: controller.signal });

  const animations = new Set();
  root.querySelectorAll('.v4-tabs').forEach((list) => {
    const buttons = Array.from(list.querySelectorAll('button[aria-controls]'));
    const panels = buttons.map(button => root.querySelector(`#${button.getAttribute('aria-controls')}`));
    const viewport = document.createElement('div');
    viewport.className = 'relevance-evidence-viewport';
    list.after(viewport);
    panels.forEach(panel => viewport.append(panel));
    let activeButton = null;
    let animation;
    const toggle = (button) => {
      const from = viewport.getBoundingClientRect().height;
      if (animation) { animation.cancel(); animations.delete(animation); }
      const opening = activeButton !== button;
      activeButton = opening ? button : null;
      const target = panels[buttons.indexOf(button)];
      buttons.forEach(item => item.setAttribute('aria-expanded', String(item === activeButton)));
      if (opening) panels.forEach(panel => { panel.hidden = panel !== target; });
      viewport.inert = !opening;
      viewport.style.height = 'auto';
      const to = opening ? viewport.scrollHeight : 0;
      viewport.style.height = `${to}px`;
      const finish = () => {
        viewport.style.height = opening ? 'auto' : '0px';
        if (!opening) panels.forEach(panel => { panel.hidden = true; });
      };
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return finish();
      animation = viewport.animate([{ height: `${from}px`, opacity: opening && from === 0 ? 0 : 1 }, { height: `${to}px`, opacity: opening ? 1 : 0 }], { duration: 180, easing: 'cubic-bezier(.2,.8,.2,1)' });
      animations.add(animation);
      const current = animation;
      animation.onfinish = () => { animations.delete(current); finish(); };
    };
    buttons.forEach(button => listen(button, 'click', () => toggle(button)));
  });

  const tip = root.querySelector("#cosine-tooltip");
  const metricTip = root.querySelector('#metric-explanation');
  // Keep the fixed popover outside the shared article panel's clipped edges.
  document.body.append(tip);
  if (metricTip) document.body.append(metricTip);
  let active = null;
  let pinned = false;
  let timer;
  const hide = () => {
    clearTimeout(timer);
    if (active) {
      active.setAttribute("aria-expanded", "false");
      active.removeAttribute("aria-describedby");
    }
    active = null;
    pinned = false;
    tip.hidden = true;
  };
  const place = () => {
    if (!active) return;
    const rect = active.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return hide();
    const box = tip.getBoundingClientRect();
    tip.style.left = `${Math.max(12, Math.min(rect.left + rect.width / 2 - box.width / 2, window.innerWidth - box.width - 12))}px`;
    tip.style.top = `${rect.bottom + box.height + 22 <= window.innerHeight ? rect.bottom + 10 : Math.max(12, rect.top - box.height - 10)}px`;
  };
  const show = (button) => {
    const value = Number(button.dataset.score);
    if (!Number.isFinite(value) || Math.abs(value) > 1) return;
    clearTimeout(timer);
    if (active && active !== button) hide();
    active = button;
    tip.querySelector("#tooltip-value").textContent = `${button.dataset.scoreDisplay} · ${button.dataset.scoreMeaning}`;
    tip.querySelector("#range-marker").setAttribute("transform", `translate(${18 + (value + 1) * 137} 0)`);
    tip.querySelector("#range-desc").textContent = `Current cosine value ${value}. Minus one means opposite directions, zero means orthogonal directions, and plus one means the same direction.`;
    tip.hidden = false;
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-describedby", "cosine-tooltip");
    place();
  };
  root.querySelectorAll('button[data-score-type="cosine"]').forEach((button) => {
    listen(button, "pointerenter", (event) => { if (event.pointerType !== "touch" && !pinned) show(button); });
    listen(button, "pointerleave", () => { if (!pinned && document.activeElement !== button) timer = setTimeout(hide, 180); });
    listen(button, "focus", () => show(button));
    listen(button, "blur", hide);
    listen(button, "click", () => {
      if (active === button && pinned) return hide();
      show(button);
      pinned = true;
    });
  });
  listen(tip, "pointerenter", () => clearTimeout(timer));
  listen(tip, "pointerleave", () => { if (!pinned && document.activeElement !== active) hide(); });
  listen(document, "pointerdown", (event) => {
    if (active && !active.contains(event.target) && !tip.contains(event.target)) hide();
  });
  listen(document, "keydown", (event) => { if (event.key === "Escape") hide(); });
  listen(window, "resize", place);
  listen(window, "scroll", () => { if (pinned || document.activeElement === active) place(); else hide(); }, { passive: true });
  let metricButton = null;
  let metricPinned = false;
  let metricTimer;
  const hideMetric = () => {
    clearTimeout(metricTimer);
    if (metricButton) {
      metricButton.setAttribute('aria-expanded', 'false');
      metricButton.removeAttribute('aria-describedby');
    }
    metricButton = null;
    metricPinned = false;
    if (metricTip) metricTip.hidden = true;
  };
  const positionMetric = () => {
    if (!metricButton || !metricTip) return;
    const rect = metricButton.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > innerHeight || rect.right < 0 || rect.left > innerWidth) return hideMetric();
    const box = metricTip.getBoundingClientRect();
    metricTip.style.left = `${Math.max(12, Math.min(rect.left, innerWidth - box.width - 12))}px`;
    metricTip.style.top = `${rect.bottom + box.height + 22 < innerHeight ? rect.bottom + 10 : Math.max(12, rect.top - box.height - 10)}px`;
  };
  const showMetric = button => {
    if (!metricTip) return;
    clearTimeout(metricTimer);
    hide();
    if (metricButton && metricButton !== button) hideMetric();
    metricButton = button;
    metricTip.querySelector('.tooltip-heading').textContent = button.dataset.metricTitle;
    metricTip.querySelector('.metric-definition').textContent = button.dataset.metricHelp;
    metricTip.querySelector('.metric-reference').textContent = button.dataset.metricReference;
    metricTip.hidden = false;
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-describedby', 'metric-explanation');
    positionMetric();
  };
  root.querySelectorAll('.metric-help').forEach(button => {
    listen(button, 'pointerenter', event => { if (event.pointerType !== 'touch' && !metricPinned) showMetric(button); });
    listen(button, 'pointerleave', () => { if (!metricPinned && document.activeElement !== button) metricTimer = setTimeout(hideMetric,180); });
    listen(button, 'focus', () => showMetric(button));
    listen(button, 'blur', hideMetric);
    listen(button, 'click', () => {
      if (metricButton === button && metricPinned) return hideMetric();
      showMetric(button);
      metricPinned = true;
    });
  });
  if (metricTip) {
    listen(metricTip, 'pointerenter', () => clearTimeout(metricTimer));
    listen(metricTip, 'pointerleave', () => { if (!metricPinned && document.activeElement !== metricButton) hideMetric(); });
    listen(document, 'pointerdown', event => { if (metricButton && !metricButton.contains(event.target) && !metricTip.contains(event.target)) hideMetric(); });
    listen(document, 'keydown', event => { if(event.key === 'Escape') hideMetric(); });
    listen(window, 'resize', positionMetric);
    listen(window, 'scroll', positionMetric, {passive:true});
    root.querySelectorAll('.metric-row-scroll').forEach(row => listen(row, 'scroll', positionMetric, {passive:true}));
    root.querySelectorAll('.v4-tabs button').forEach(button => listen(button, 'click', hideMetric));
  }
  return () => { clearTimeout(timer); clearTimeout(metricTimer); animations.forEach(animation => animation.cancel()); controller.abort(); tip.remove(); metricTip?.remove(); };
}
