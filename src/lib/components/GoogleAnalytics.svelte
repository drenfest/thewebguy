<script>
  import { browser } from "$app/environment";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import {
    gaMeasurementId,
    initGoogleAnalytics,
    loadGoogleAnalyticsScript,
    resetScrollTracking,
    trackButtonClick,
    trackEvent,
    trackFaqOpen,
    trackLinkClick,
    trackPageView,
    trackSectionView,
    trackScrollDepth
  } from "$lib/analytics.js";

  function closestElement(target, selector) {
    return target instanceof Element ? target.closest(selector) : null;
  }

  let sectionObserver;

  function observeSections() {
    sectionObserver?.disconnect();
    if (!browser || !("IntersectionObserver" in window)) return;

    sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) trackSectionView(entry.target);
        }
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0.01 }
    );

    document.querySelectorAll("main .hero, main section").forEach((section) => sectionObserver.observe(section));
  }

  onMount(() => {
    if (!gaMeasurementId) return;

    initGoogleAnalytics();
    let loadTimer;
    let idleHandle;
    let loadStarted = false;

    const runWhenIdle = () => {
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(() => loadGoogleAnalyticsScript(), { timeout: 2000 });
      } else {
        loadGoogleAnalyticsScript();
      }
    };

    const scheduleScriptLoad = () => {
      if (loadStarted) return;
      loadStarted = true;
      loadTimer = window.setTimeout(runWhenIdle, 3000);
    };

    if (document.readyState === "complete") {
      scheduleScriptLoad();
    } else {
      window.addEventListener("load", scheduleScriptLoad, { once: true });
    }

    const focusedFields = new Set();

    const handleClick = (event) => {
      const link = closestElement(event.target, "a[href]");
      if (link) trackLinkClick(link);

      const button = closestElement(event.target, "button");
      if (button) trackButtonClick(button);
    };

    const handleToggle = (event) => {
      const details = closestElement(event.target, "details");
      if (details) trackFaqOpen(details);
    };

    const handleFocusIn = (event) => {
      const field = closestElement(event.target, "form input[name], form textarea[name], form select[name]");
      if (!field) return;

      const formId = field.form?.id || "form";
      const key = `${formId}:${field.name}`;
      if (focusedFields.has(key)) return;

      focusedFields.add(key);
      trackEvent("form_field_focus", {
        form_id: formId,
        field_name: field.name,
        field_type: field.tagName.toLowerCase() === "input" ? field.type : field.tagName.toLowerCase()
      });
    };

    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("toggle", handleToggle, true);
    document.addEventListener("focusin", handleFocusIn);
    window.addEventListener("scroll", trackScrollDepth, { passive: true });

    observeSections();

    return () => {
      window.removeEventListener("load", scheduleScriptLoad);
      window.clearTimeout(loadTimer);
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("toggle", handleToggle, true);
      document.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("scroll", trackScrollDepth);
      sectionObserver?.disconnect();
    };
  });

  afterNavigate(() => {
    if (!browser || !gaMeasurementId) return;

    initGoogleAnalytics();
    resetScrollTracking();
    queueMicrotask(() => {
      trackPageView(window.location.href, document.title);
      observeSections();
    });
  });
</script>
