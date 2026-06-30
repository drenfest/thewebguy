<script>
  let { size = 42, title = "The Web Guy logo", animated = false } = $props();
</script>

<img
  class="logo-mark"
  class:animated
  src="/brand/thewebguy-modern-icon.svg"
  width={size}
  height={size}
  alt={title}
  decoding="async"
  fetchpriority="low"
/>
