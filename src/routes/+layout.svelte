<script>
  import { onMount } from "svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
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
{#if TopologyBridgeComponent}
  <TopologyBridgeComponent />
{/if}
<Footer />
