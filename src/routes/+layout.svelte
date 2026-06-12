<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import GoogleAnalytics from "$lib/components/GoogleAnalytics.svelte";
  import MotionObserver from "$lib/components/MotionObserver.svelte";
  import "../app.css";
</script>

<div data-sveltekit-reload>
  <Header />
  <GoogleAnalytics />
  <MotionObserver />
  <slot />
  <Footer />
</div>
