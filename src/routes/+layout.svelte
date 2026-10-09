<script>
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import SeasonalLightning from "$lib/components/SeasonalLightning.svelte";
  import "../app.css";

  let ExitIntentPromptComponent = $state(null);
  let MotionObserverComponent = $state(null);
  let TawkLiveChatComponent = $state(null);
  let TopologyBridgeComponent = $state(null);
  let { children } = $props();

  onMount(() => {
    let cancelled = false;
    let idleHandle;
    let loadTimer;
    let seasonalTimer;

    function syncSeasonalSkin() {
      const now = new Date();
      const isHalloweenSeason = now.getMonth() === 9;
      document.documentElement.classList.toggle("season-halloween", isHalloweenSeason);
      document.documentElement.dataset.season = isHalloweenSeason ? "halloween" : "standard";
      document.dispatchEvent(new CustomEvent("seasonchange", { detail: { halloween: isHalloweenSeason } }));

      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 2, 0);
      seasonalTimer = window.setTimeout(syncSeasonalSkin, nextMidnight.getTime() - now.getTime());
    }

    syncSeasonalSkin();

    async function loadDeferredLayout() {
      const [exitIntentPrompt, motionObserver, tawkLiveChat, topologyBridge] = await Promise.all([
        import("$lib/components/ExitIntentPrompt.svelte"),
        import("$lib/components/MotionObserver.svelte"),
        import("$lib/components/TawkLiveChat.svelte"),
        import("$lib/components/TopologyBridge.svelte")
      ]);

      if (cancelled) return;

      ExitIntentPromptComponent = exitIntentPrompt.default;
      MotionObserverComponent = motionObserver.default;
      TawkLiveChatComponent = tawkLiveChat.default;
      TopologyBridgeComponent = topologyBridge.default;
    }

    loadTimer = window.setTimeout(() => {
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(() => loadDeferredLayout().catch(() => {}), { timeout: 2200 });
        return;
      }

      loadDeferredLayout().catch(() => {});
    }, 5200);

    return () => {
      cancelled = true;
      window.clearTimeout(loadTimer);
      window.clearTimeout(seasonalTimer);
      document.documentElement.classList.remove("season-halloween");
      delete document.documentElement.dataset.season;
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
    };
  });
</script>

<Header />
<GoogleAnalytics />
{#if ExitIntentPromptComponent}
  <ExitIntentPromptComponent />
{/if}
{#if MotionObserverComponent}
  <MotionObserverComponent />
{/if}
{#if TawkLiveChatComponent}
  <TawkLiveChatComponent />
{/if}
{@render children()}
<SeasonalLightning />
{#if TopologyBridgeComponent}
  <TopologyBridgeComponent />
{/if}
<Footer />
