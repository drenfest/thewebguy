<script>
  import { onMount, tick } from "svelte";
  import { page } from "$app/state";
  import LogoMark from "./LogoMark.svelte";
  import { trackEvent } from "$lib/analytics.js";
  import { headerCta, mainNavItems, megaMenus, mobileNavSections, utilityNavItems } from "$lib/data/navigation.js";

  let scrolled = $state(false);
  let openMenu = $state("");
  let mobileOpen = $state(false);
  let searchQuery = $state("");
  let searchFocused = $state(false);
  let searchResults = $state([]);
  let searchWorker;
  let searchRequestId = 0;
  let lastTrackedSearch = "";
  let closeMenuTimer;
  let headerRoot;
  let navRoot;
  let mobileNavDetails;
  let menuPlacement = $state({
    left: "18px",
    top: "84px",
    width: "min(1040px, calc(100vw - 36px))",
    maxHeight: "calc(100vh - 102px)"
  });
  const showSearchResults = $derived(searchFocused && searchQuery.trim().length >= 4);

  function openDesktopMenu(key, trigger) {
    if (!mobileOpen && megaMenus[key]) {
      clearCloseMenuTimer();
      updateDesktopMenuPosition(key, trigger);
      openMenu = key;
      void refreshDesktopMenuPosition();
    }
  }

  function closeDesktopMenu() {
    clearCloseMenuTimer();
    openMenu = "";
  }

  function clearCloseMenuTimer() {
    if (!closeMenuTimer) return;
    window.clearTimeout(closeMenuTimer);
    closeMenuTimer = undefined;
  }

  function getDesktopMenuTrigger(key) {
    return navRoot?.querySelector(`[aria-controls="mega-menu-${key}"]`);
  }

  function updateDesktopMenuPosition(key = openMenu, trigger) {
    if (typeof window === "undefined" || !key || !headerRoot) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const edgeGap = viewportWidth < 1120 ? 14 : 18;
    const maxWidth = key === "services" ? 1180 : 1040;
    const availableWidth = Math.max(320, viewportWidth - edgeGap * 2);
    const width = Math.min(maxWidth, availableWidth);
    const headerRect = headerRoot.getBoundingClientRect();
    const triggerRect = (trigger || getDesktopMenuTrigger(key))?.getBoundingClientRect();
    const center = triggerRect ? triggerRect.left + triggerRect.width / 2 : viewportWidth / 2;
    const maxLeft = viewportWidth - width - edgeGap;
    const left = Math.min(Math.max(center - width / 2, edgeGap), maxLeft);
    const top = Math.max(12, headerRect.bottom + 10);
    const maxHeight = Math.max(280, viewportHeight - top - edgeGap);

    menuPlacement = {
      left: `${Math.round(left)}px`,
      top: `${Math.round(top)}px`,
      width: `${Math.round(width)}px`,
      maxHeight: `${Math.round(maxHeight)}px`
    };
  }

  async function refreshDesktopMenuPosition() {
    await tick();
    updateDesktopMenuPosition();
  }

  function queueDesktopMenuClose() {
    clearCloseMenuTimer();
    closeMenuTimer = window.setTimeout(() => {
      openMenu = "";
      closeMenuTimer = undefined;
    }, 180);
  }

  function handleDesktopTriggerKeydown(event, key) {
    if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      openDesktopMenu(key);
    }
  }

  function handleDesktopTriggerMouseDown(event, key) {
    event.preventDefault();
    openDesktopMenu(key, event.currentTarget);
  }

  function closeMobileMenu() {
    if (mobileNavDetails) mobileNavDetails.open = false;
    mobileOpen = false;
  }

  async function handleMobileToggle(event) {
    if (event?.target !== mobileNavDetails) return;

    await tick();
    mobileOpen = !!mobileNavDetails?.open;
    if (mobileOpen) closeDesktopMenu();
  }

  function linkTitle(label, href = "") {
    if (href === "/") return "View The Web Guy homepage";
    if (href === "/contact/" || href === "/contact/#request-form") return "Open the contact request form";
    return `View ${label}`;
  }

  function handleHeaderContactClick(event) {
    closeMobileMenu();
    if (page.url.pathname !== "/contact/" || !headerCta.href.includes("#request-form")) return;

    event.preventDefault();
    if (window.location.hash !== "#request-form") {
      window.history.pushState(null, "", "#request-form");
    }

    document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getMenuOverviewHref(key) {
    const item = mainNavItems.find((navItem) => navItem.menuKey === key);
    return item?.href;
  }

  function getMenuOverviewLabel(key) {
    const item = mainNavItems.find((navItem) => navItem.menuKey === key);
    return item?.overviewLabel || (item ? `View All ${item.label}` : "");
  }

  function getSearchWorker() {
    if (searchWorker) return searchWorker;

    searchWorker = new Worker(new URL("../workers/search.worker.js", import.meta.url), { type: "module" });
    return searchWorker;
  }

  async function updateSearchResults(event) {
    const rawQuery = event?.currentTarget?.value ?? searchQuery;
    const query = rawQuery.trim();
    searchQuery = rawQuery;
    searchFocused = true;
    if (query.length < 4) {
      searchResults = [];
      return;
    }

    const worker = getSearchWorker();
    const requestId = ++searchRequestId;
    const results = await new Promise((resolve) => {
      function handleMessage(event) {
        if (event.data?.id !== requestId) return;
        worker.removeEventListener("message", handleMessage);
        resolve(event.data.results || []);
      }

      worker.addEventListener("message", handleMessage);
      worker.postMessage({ id: requestId, query });
    });

    if (query !== searchQuery.trim() || requestId !== searchRequestId) return;

    searchResults = results;
    if (query === lastTrackedSearch) return;

    lastTrackedSearch = query;
    trackEvent("site_search", {
      search_term: query,
      search_term_length: query.length,
      search_results_count: results.length
    });
  }

  function handleSearchFocus() {
    searchFocused = true;
    if (searchQuery.trim().length >= 4) {
      updateSearchResults();
    }
  }

  function siteSearchInput(node) {
    function handleInput(event) {
      updateSearchResults(event);
    }

    function handleFocus() {
      handleSearchFocus();
    }

    function handleBlur() {
      window.setTimeout(() => (searchFocused = false), 140);
    }

    node.addEventListener("input", handleInput);
    node.addEventListener("focus", handleFocus);
    node.addEventListener("blur", handleBlur);

    return {
      destroy() {
        node.removeEventListener("input", handleInput);
        node.removeEventListener("focus", handleFocus);
        node.removeEventListener("blur", handleBlur);
      }
    };
  }

  function handleSearchResultClick(result, index) {
    trackEvent("site_search_result_click", {
      search_term: searchQuery.trim(),
      search_result_title: result.title,
      search_result_url: result.href,
      search_result_type: result.type,
      search_result_position: index + 1
    });
    searchFocused = false;
    closeMobileMenu();
  }

  function handleFocusOut(event) {
    if (!navRoot?.contains(event.relatedTarget)) {
      queueDesktopMenuClose();
    }
  }

  $effect(() => {
    if (typeof document === "undefined") return;

    document.body.classList.toggle("nav-open", mobileOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  });

  $effect(() => {
    if (!openMenu) return;
    void refreshDesktopMenuPosition();
  });

  onMount(() => {
    function updateScrollState() {
      scrolled = window.scrollY > 12;
      if (openMenu) updateDesktopMenuPosition();
    }

    function handleViewportChange() {
      updateDesktopMenuPosition();
    }

    function handleKeydown(event) {
      if (event.key === "Escape") {
        closeDesktopMenu();
        closeMobileMenu();
      }
    }

    function handlePointerDown(event) {
      if (!headerRoot?.contains(event.target)) {
        closeDesktopMenu();
        closeMobileMenu();
      }
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleViewportChange);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      clearCloseMenuTimer();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleViewportChange);
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.body.classList.remove("nav-open");
      searchWorker?.terminate();
    };
  });
</script>

<header bind:this={headerRoot} class:scrolled class="site-header">
  <a class="brand" href="/" aria-label="The Web Guy home" title="View The Web Guy homepage" onclick={closeMobileMenu}>
    <LogoMark title="The Web Guy logo" idPrefix="header-logo" />
    <span>The Web Guy</span>
  </a>

  <div
    bind:this={navRoot}
    class="nav-shell"
    role="presentation"
    onmouseleave={queueDesktopMenuClose}
    onmouseenter={clearCloseMenuTimer}
    onfocusout={handleFocusOut}
  >
    <nav class="nav-links desktop-nav" aria-label="Primary navigation">
      {#each mainNavItems as item}
        {#if item.menuKey}
          <button
            type="button"
            title={linkTitle(item.label, item.href)}
            class:active={openMenu === item.menuKey}
            class="nav-trigger"
            aria-haspopup="true"
            aria-expanded={openMenu === item.menuKey}
            aria-controls={`mega-menu-${item.menuKey}`}
            onmousedown={(event) => handleDesktopTriggerMouseDown(event, item.menuKey)}
            onmouseenter={(event) => openDesktopMenu(item.menuKey, event.currentTarget)}
            onfocus={(event) => openDesktopMenu(item.menuKey, event.currentTarget)}
            onkeydown={(event) => handleDesktopTriggerKeydown(event, item.menuKey)}
          >
            <span>{item.label}</span>
            <span class="nav-chevron" aria-hidden="true">⌄</span>
          </button>
        {:else}
          <a class="nav-link" href={item.href} title={linkTitle(item.label, item.href)}>{item.label}</a>
        {/if}
      {/each}
    </nav>

    {#each Object.entries(megaMenus) as [key, menu]}
      {#if openMenu === key}
        <div
          id={`mega-menu-${key}`}
          class="mega-menu"
          class:mega-menu--services={key === "services"}
          role="region"
          aria-label={`${key} menu`}
          style={`--mega-menu-left: ${menuPlacement.left}; --mega-menu-top: ${menuPlacement.top}; --mega-menu-width: ${menuPlacement.width}; --mega-menu-max-height: ${menuPlacement.maxHeight};`}
          onmouseenter={() => openDesktopMenu(key)}
          onmouseleave={queueDesktopMenuClose}
        >
          <div class="mega-menu-grid">
            <div class="mega-menu-columns">
              {#if getMenuOverviewHref(key)}
                <a
                  class="mega-menu-overview"
                  href={getMenuOverviewHref(key)}
                  title={linkTitle(getMenuOverviewLabel(key), getMenuOverviewHref(key))}
                >
                  {getMenuOverviewLabel(key)}
                </a>
              {/if}
              {#each menu.groups as group}
                <section class="mega-menu-group">
                  <h2>{group.title}</h2>
                  <ul>
                    {#each group.links as link}
                      <li><a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a></li>
                    {/each}
                  </ul>
                </section>
              {/each}
            </div>
            <aside class="mega-menu-feature">
              <p class="eyebrow">Start here</p>
              <h2>{menu.featured.heading}</h2>
              <p>{menu.featured.text}</p>
              <a class="button button-primary button-small" href={menu.featured.href} title={linkTitle(menu.featured.label, menu.featured.href)}>{menu.featured.label}</a>
            </aside>
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <div class="site-search" role="search">
    <label class="sr-only" for="site-search-input">Search pages</label>
    <input
      id="site-search-input"
      bind:value={searchQuery}
      type="search"
      autocomplete="off"
      placeholder="Search site"
      use:siteSearchInput
    />
    {#if showSearchResults}
      <div class="site-search-results" aria-label="Search results">
        {#if searchResults.length}
          {#each searchResults as result, index}
            <a
              href={result.href}
              title={`Open ${result.title}`}
              onclick={() => handleSearchResultClick(result, index)}
            >
              <span>{result.type}</span>
              <strong>{result.title}</strong>
              <small>{result.description}</small>
            </a>
          {/each}
        {:else}
          <p>No matching pages yet.</p>
        {/if}
      </div>
    {/if}
  </div>

  <a class="button button-small button-primary header-cta" href={headerCta.href} title={linkTitle(headerCta.label, headerCta.href)} onclick={handleHeaderContactClick}>{headerCta.label}</a>

  <details bind:this={mobileNavDetails} class="mobile-nav-details" ontoggle={handleMobileToggle}>
    <summary
      class="mobile-menu-button"
      aria-label="Site navigation"
      aria-controls="mobile-navigation"
    >
      <span class="sr-only">Site navigation</span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </summary>
    <div
      class="mobile-nav-backdrop"
      aria-hidden="true"
      onclick={closeMobileMenu}
    ></div>
    <div
      id="mobile-navigation"
      class="mobile-nav-drawer"
      role="group"
      aria-label="Site navigation"
    >
      <div class="mobile-nav-header">
        <a class="brand" href="/" aria-label="The Web Guy home" title="View The Web Guy homepage" onclick={closeMobileMenu}>
          <LogoMark title="The Web Guy logo" idPrefix="mobile-logo" />
          <span>The Web Guy</span>
        </a>
      </div>

      <nav class="mobile-nav-content" aria-label="Mobile navigation">
        <div class="site-search mobile-site-search" role="search">
          <label class="sr-only" for="mobile-site-search-input">Search pages</label>
          <input
            id="mobile-site-search-input"
            bind:value={searchQuery}
            type="search"
            autocomplete="off"
            placeholder="Search site"
            use:siteSearchInput
          />
          {#if showSearchResults}
            <div class="site-search-results mobile-search-results" aria-label="Search results">
              {#if searchResults.length}
                {#each searchResults as result, index}
                  <a
                    href={result.href}
                    title={`Open ${result.title}`}
                    onclick={() => handleSearchResultClick(result, index)}
                  >
                    <span>{result.type}</span>
                    <strong>{result.title}</strong>
                    <small>{result.description}</small>
                  </a>
                {/each}
              {:else}
                <p>No matching pages yet.</p>
              {/if}
            </div>
          {/if}
        </div>

        {#each mobileNavSections as section}
          <details class="mobile-accordion">
            <summary class="mobile-accordion-trigger">
              <span>{section.label}</span>
              <span class="mobile-accordion-icon" aria-hidden="true">+</span>
            </summary>
            <div
              id={`mobile-nav-${section.key}`}
              class="mobile-accordion-panel"
            >
              <div class="mobile-accordion-panel-inner">
                {#each section.links as link}
                  <a href={link.href} title={linkTitle(link.label, link.href)} onclick={closeMobileMenu}>
                    {link.label}
                  </a>
                {/each}
                {#if section.groups}
                  {#each section.groups as group}
                    <div class="mobile-link-group">
                      <strong>{group.title}</strong>
                      {#each group.links as link}
                        <a href={link.href} title={linkTitle(link.label, link.href)} onclick={closeMobileMenu}>
                          {link.label}
                        </a>
                      {/each}
                    </div>
                  {/each}
                {/if}
              </div>
            </div>
          </details>
        {/each}

        <div class="mobile-utility-links">
          {#each utilityNavItems as item}
            <a href={item.href} title={linkTitle(item.label, item.href)} onclick={closeMobileMenu}>{item.label}</a>
          {/each}
        </div>

        <a class="button button-primary mobile-drawer-cta" href={headerCta.href} title={linkTitle(headerCta.label, headerCta.href)} onclick={handleHeaderContactClick}>{headerCta.label}</a>
      </nav>
    </div>
  </details>
</header>
