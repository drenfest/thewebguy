<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import LogoMark from "./LogoMark.svelte";
  import { trackEvent } from "$lib/analytics.js";
  import { searchPages } from "$lib/data/search-index.js";
  import { headerCta, mainNavItems, megaMenus, mobileNavSections, utilityNavItems } from "$lib/data/navigation.js";

  let scrolled = $state(false);
  let openMenu = $state("");
  let mobileOpen = $state(false);
  let mobilePanels = $state({});
  let reduceMotion = $state(false);
  let searchQuery = $state("");
  let searchFocused = $state(false);
  let lastTrackedSearch = "";
  let closeMenuTimer;
  let headerRoot;
  let navRoot;
  const searchResults = $derived(searchPages(searchQuery));
  const showSearchResults = $derived(searchFocused && searchQuery.trim().length >= 4);

  function openDesktopMenu(key) {
    if (!mobileOpen && megaMenus[key]) {
      clearCloseMenuTimer();
      openMenu = key;
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

  function closeMobileMenu() {
    mobileOpen = false;
  }

  function toggleMobileMenu() {
    mobileOpen = !mobileOpen;
    if (!mobileOpen) return;
    closeDesktopMenu();
  }

  function toggleMobilePanel(key) {
    mobilePanels = { ...mobilePanels, [key]: !mobilePanels[key] };
  }

  function linkTitle(label, href = "") {
    if (href === "/") return "View The Web Guy homepage";
    if (href === "/contact/") return "Open the contact request form";
    return `View ${label}`;
  }

  function getMenuOverviewHref(key) {
    const item = mainNavItems.find((navItem) => navItem.menuKey === key);
    return item?.href;
  }

  function getMenuOverviewLabel(key) {
    const item = mainNavItems.find((navItem) => navItem.menuKey === key);
    return item ? `View All ${item.label}` : "";
  }

  function handleSearchInput() {
    const query = searchQuery.trim();
    if (query.length < 4 || query === lastTrackedSearch) return;

    lastTrackedSearch = query;
    trackEvent("site_search", {
      search_term: query,
      search_term_length: query.length,
      search_results_count: searchResults.length
    });
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

  onMount(() => {
    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updateScrollState() {
      scrolled = window.scrollY > 12;
    }

    function updateMotionPreference() {
      reduceMotion = reduceMotionQuery.matches;
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
    updateMotionPreference();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    reduceMotionQuery.addEventListener("change", updateMotionPreference);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      clearCloseMenuTimer();
      window.removeEventListener("scroll", updateScrollState);
      reduceMotionQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.body.classList.remove("nav-open");
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
            class:active={openMenu === item.menuKey}
            class="nav-trigger"
            aria-haspopup="true"
            aria-expanded={openMenu === item.menuKey}
            aria-controls={`mega-menu-${item.menuKey}`}
            onmouseenter={() => openDesktopMenu(item.menuKey)}
            onfocus={() => openDesktopMenu(item.menuKey)}
            onkeydown={(event) => handleDesktopTriggerKeydown(event, item.menuKey)}
            onclick={() => openDesktopMenu(item.menuKey)}
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
      oninput={handleSearchInput}
      onfocus={() => (searchFocused = true)}
      onblur={() => window.setTimeout(() => (searchFocused = false), 140)}
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

  <a class="button button-small button-primary header-cta" href={headerCta.href} title={linkTitle(headerCta.label, headerCta.href)}>{headerCta.label}</a>

  <button
    type="button"
    class="mobile-menu-button"
    aria-label="Open navigation"
    aria-expanded={mobileOpen}
    aria-controls="mobile-navigation"
    onclick={toggleMobileMenu}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  {#if mobileOpen}
    <div
      class="mobile-nav-backdrop"
      aria-hidden="true"
      onclick={closeMobileMenu}
      transition:fade={{ duration: reduceMotion ? 0 : 210 }}
    ></div>
    <div
      id="mobile-navigation"
      class="mobile-nav-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      transition:fly={{ x: reduceMotion ? 0 : 18, duration: reduceMotion ? 0 : 220 }}
    >
      <div class="mobile-nav-header">
        <a class="brand" href="/" aria-label="The Web Guy home" title="View The Web Guy homepage" onclick={closeMobileMenu}>
          <LogoMark title="The Web Guy logo" idPrefix="mobile-logo" />
          <span>The Web Guy</span>
        </a>
        <button type="button" class="mobile-close-button" aria-label="Close navigation" onclick={closeMobileMenu}>×</button>
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
            oninput={handleSearchInput}
            onfocus={() => (searchFocused = true)}
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
          <section class="mobile-accordion">
            <button
              type="button"
              class="mobile-accordion-trigger"
              aria-expanded={!!mobilePanels[section.key]}
              aria-controls={`mobile-nav-${section.key}`}
              onclick={() => toggleMobilePanel(section.key)}
            >
              <span>{section.label}</span>
              <span class="mobile-accordion-icon" aria-hidden="true">+</span>
            </button>
            <div
              id={`mobile-nav-${section.key}`}
              class="mobile-accordion-panel"
              data-open={mobilePanels[section.key] ? "true" : "false"}
              aria-hidden={!mobilePanels[section.key]}
              inert={!mobilePanels[section.key]}
            >
              <div class="mobile-accordion-panel-inner">
                {#each section.links as link}
                  <a href={link.href} title={linkTitle(link.label, link.href)} tabindex={mobilePanels[section.key] ? undefined : -1} onclick={closeMobileMenu}>
                    {link.label}
                  </a>
                {/each}
              </div>
            </div>
          </section>
        {/each}

        <div class="mobile-utility-links">
          {#each utilityNavItems as item}
            <a href={item.href} title={linkTitle(item.label, item.href)} onclick={closeMobileMenu}>{item.label}</a>
          {/each}
        </div>

        <a class="button button-primary mobile-drawer-cta" href={headerCta.href} title={linkTitle(headerCta.label, headerCta.href)} onclick={closeMobileMenu}>{headerCta.label}</a>
      </nav>
    </div>
  {/if}
</header>
