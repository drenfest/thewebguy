<script>
  import { browser } from "$app/environment";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import {
    gaMeasurementId,
    initGoogleAnalytics,
    resetScrollTracking,
    trackButtonClick,
    trackEvent,
    trackFaqOpen,
    trackLinkClick,
    trackPageView,
    trackScrollDepth
  } from "$lib/analytics.js";

  function loadScript() {
    if (!gaMeasurementId || document.getElementById("ga4-script")) return;

    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`;
    document.head.appendChild(script);
  }

  function closestElement(target, selector) {
    return target instanceof Element ? target.closest(selector) : null;
  }

  onMount(() => {
    if (!gaMeasurementId) return;

    loadScript();
    initGoogleAnalytics();

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

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("toggle", handleToggle, true);
      document.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("scroll", trackScrollDepth);
    };
  });

  afterNavigate(() => {
    if (!browser || !gaMeasurementId) return;

    initGoogleAnalytics();
    resetScrollTracking();
    queueMicrotask(() => trackPageView(window.location.href, document.title));
  });
</script>
