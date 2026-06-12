<script>
  import { servicePages, serviceUrl } from "$lib/data/content.js";
  let { current = "", services = [] } = $props();

  const fallbackServices = $derived(servicePages.filter((item) => item.slug !== current).slice(0, 4));
  const navServices = $derived((services.length ? services : fallbackServices).filter((item) => item?.slug !== current).slice(0, 4));
</script>

{#if navServices.length}
  <aside class="service-nav-aside" aria-label="Related service navigation">
    <div class="service-nav-panel">
      <div class="service-nav-copy">
        <p class="eyebrow">Related services</p>
        <h2>Nearby work this often touches</h2>
      </div>
      <nav class="service-nav" aria-label="Related service pages">
        {#each navServices as service}
          <a href={serviceUrl(service.slug)} title={`View ${service.eyebrow} service page`}>{service.eyebrow}</a>
        {/each}
      </nav>
    </div>
  </aside>
{/if}
