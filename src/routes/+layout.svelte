<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import ExitIntentPrompt from "$lib/components/ExitIntentPrompt.svelte";
  import MotionObserver from "$lib/components/MotionObserver.svelte";
  import TawkLiveChat from "$lib/components/TawkLiveChat.svelte";
  import TopologyBridge from "$lib/components/TopologyBridge.svelte";
  import "../app.css";
</script>

<Header />
<GoogleAnalytics />
<ExitIntentPrompt />
<MotionObserver />
<TawkLiveChat />
<slot />
<TopologyBridge />
<Footer />
