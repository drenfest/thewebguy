<script>
  import { afterNavigate, onNavigate } from "$app/navigation";
  import { onMount } from "svelte";

  let refresh = () => {};

  function prefersReducedMotion() {
    return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  onNavigate((navigation) => {
    if (typeof document === "undefined" || !document.startViewTransition || prefersReducedMotion()) return;

    const from = navigation.from?.url;
    const to = navigation.to?.url;

    if (from && to && from.pathname === to.pathname && from.search === to.search) return;

    return new Promise((resolve) => {
      document.documentElement.classList.add("page-transitioning");

      try {
        const transition = document.startViewTransition(async () => {
          resolve();
          await navigation.complete.catch(() => {});
        });

        transition.finished
          .catch(() => {})
          .finally(() => {
            document.documentElement.classList.remove("page-transitioning");
          });
      } catch {
        document.documentElement.classList.remove("page-transitioning");
        resolve();
      }
    });
  });

  afterNavigate(() => {
    refresh();
  });

  onMount(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selectors = [
      ".section-heading",
      ".card",
      ".summary-link-card",
      ".decision-card",
      ".cluster-panel",
      ".depth-card",
      ".process-grid article",
      ".topic-link",
      ".topical-link-list li",
      ".topical-panel",
      ".contextual-support-panel",
      ".proof-panel",
      ".proof-reel-shell",
      ".article-shell",
      ".article-callout",
      ".article-checklist",
      ".summary-copy-panel",
      ".sortable-table-wrap",
      ".rate-card",
      ".rate-callout",
      ".rate-layout",
      ".breadcrumb-nav",
      ".service-nav-panel",
      ".faq-list details",
      ".faq-question-form",
      ".contact-form",
      ".cta-band",
      ".cta-animated",
      ".footer-cta",
      ".footer-brand-panel",
      ".footer-link-column"
    ];
    const effectSelectors = [".section-effect", ".effect-dark-grid", ".rate-section", ".cta-band"];

    let observer;
    let effectObserver;
    let idleHandle;
    let setupTimer;

    function clearScheduledSetup() {
      if (setupTimer) {
        window.clearTimeout(setupTimer);
        setupTimer = undefined;
      }

      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
        idleHandle = undefined;
      }
    }

    function setup() {
      document.documentElement.classList.toggle("reduced-motion", reduceMotion.matches);

      if (observer) {
        observer.disconnect();
      }

      if (effectObserver) {
        effectObserver.disconnect();
      }

      const targets = Array.from(document.querySelectorAll(selectors.join(",")));
      const effectTargets = Array.from(document.querySelectorAll(effectSelectors.join(",")));

      if (reduceMotion.matches) {
        for (const target of targets) {
          target.removeAttribute("data-reveal");
          target.removeAttribute("style");
        }

        for (const target of effectTargets) {
          target.classList.remove("effect-active");
        }
        return;
      }

      effectObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            entry.target.classList.toggle("effect-active", entry.isIntersecting);
          }
        },
        { rootMargin: "18% 0px 18% 0px", threshold: 0.01 }
      );

      effectTargets.forEach((target) => effectObserver.observe(target));

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-reveal", "visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "0px 0px 12% 0px", threshold: 0.04 }
      );

      targets.forEach((target, index) => {
        target.setAttribute("data-reveal", "pending");
        target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 42}ms`);
        observer.observe(target);
      });
    }

    function scheduleSetup(delay = 0) {
      clearScheduledSetup();

      setupTimer = window.setTimeout(() => {
        setupTimer = undefined;

        if ("requestIdleCallback" in window) {
          idleHandle = window.requestIdleCallback(() => {
            idleHandle = undefined;
            setup();
          }, { timeout: 1200 });
          return;
        }

        setup();
      }, delay);
    }

    function handleMotionPreferenceChange() {
      scheduleSetup();
    }

    document.documentElement.classList.toggle("reduced-motion", reduceMotion.matches);
    refresh = () => scheduleSetup(160);
    scheduleSetup(900);
    reduceMotion.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      clearScheduledSetup();
      if (observer) observer.disconnect();
      if (effectObserver) effectObserver.disconnect();
      reduceMotion.removeEventListener("change", handleMotionPreferenceChange);
    };
  });
</script>
