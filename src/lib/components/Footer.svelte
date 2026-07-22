<script>
  const year = new Date().getFullYear();
  const mainPages = [
    ["Home", "/"],
    ["Services", "/services/"],
    ["Sites For Sale", "/sites-for-sale/"],
    ["Blog", "/blog/"],
    ["Fix Notes", "/fix-notes/"],
    ["Skills", "/skills/"],
    ["Locations", "/locations/"],
    ["Rate", "/rate/"],
    ["About", "/about/"],
    ["FAQ", "/faq/"],
    ["Contact", "/contact/"]
  ];

  function routeLink(label, href) {
    return { label, href };
  }

  function serviceLink(label, slug) {
    return routeLink(label, `/services/${slug}/`);
  }

  function skillLink(label, slug) {
    return routeLink(label, `/skills/${slug}/`);
  }

  function locationLink(label, slug) {
    return routeLink(label, `/locations/${slug}/`);
  }

  function blogLink(label, slug) {
    return routeLink(label, `/blog/${slug}/`);
  }

  function linkTitle(label, href = "") {
    if (href === "/contact/") return "Open the contact request form";
    if (href === "/sitemap.xml") return "View the XML sitemap";
    if (href === "/privacy/") return "Read The Web Guy Privacy Policy";
    if (href === "/terms/") return "Read The Web Guy Terms of Service";
    return `View ${label}`;
  }

  function subgroup(title, links) {
    return {
      title,
      links: links.filter(Boolean)
    };
  }

  const hubLinks = mainPages.map(([label, href]) => routeLink(label, href));

  const serviceGroups = [
    subgroup("Fix & Stabilize", [
      serviceLink("Website Fixes", "website-fixes"),
      serviceLink("AI-Built Website Cleanup", "ai-built-website-cleanup"),
      serviceLink("WordPress Support", "wordpress-support"),
      serviceLink("Site Speed & Performance", "site-speed-performance"),
      serviceLink("Security, Hosting & Reliability", "security-hosting-reliability"),
      serviceLink("Ongoing Webmaster Support", "ongoing-webmaster-support")
    ]),
    subgroup("Build & Improve", [
      serviceLink("Landing Pages", "landing-pages"),
      serviceLink("React & Static Sites", "react-static-sites"),
      serviceLink("Ecommerce Support", "ecommerce-support"),
      serviceLink("API Integrations", "api-integrations"),
      serviceLink("Automation & Internal Tools", "automation-internal-tools")
    ]),
    subgroup("SEO, Data & Tracking", [
      serviceLink("Technical SEO Implementation", "technical-seo-implementation"),
      serviceLink("Analytics & Tracking", "analytics-tracking"),
      serviceLink("Agency Overflow", "agency-overflow"),
      skillLink("Programmatic SEO", "programmatic-seo"),
      skillLink("Schema & Structured Data", "schema-structured-data"),
      skillLink("Google Merchant Center & Product Data", "google-merchant-center-product-data")
    ])
  ];

  const locationLinks = [
    routeLink("Service Area", "/locations/"),
    locationLink("Freeport, IL", "freeport-il"),
    locationLink("Rockford, IL", "rockford-il"),
    locationLink("Monroe, WI", "monroe-wi"),
    locationLink("Beloit, WI", "beloit-wi"),
    locationLink("Janesville, WI", "janesville-wi"),
    locationLink("Dubuque, IA", "dubuque-ia"),
    locationLink("Madison, WI", "madison-wi"),
    routeLink("View All Locations", "/locations/")
  ].filter(Boolean);

  const skillGroups = [
    subgroup("Platforms", [
      skillLink("Shopify Plus & Liquid", "shopify-plus-liquid"),
      skillLink("WordPress Plugins", "wordpress-plugin-development"),
      skillLink("WordPress Themes", "wordpress-theme-development"),
      serviceLink("WooCommerce / Ecommerce", "ecommerce-support")
    ]),
    subgroup("Systems", [
      skillLink("Performance Engineering", "performance-engineering"),
      skillLink("Production Debugging", "production-debugging"),
      skillLink("GA4 / GTM", "ga4-gtm-measurement-integrity"),
      skillLink("APIs & Webhooks", "rest-api-webhook-integrations"),
      skillLink("Programmatic SEO", "programmatic-seo"),
      skillLink("Schema & Structured Data", "schema-structured-data"),
      skillLink("Cloudflare, DNS & SSL", "cloudflare-dns-ssl"),
      skillLink("Crawl Analysis & Internal Linking", "crawl-analysis-internal-linking")
    ])
  ];

  const blogLinks = [
    routeLink("Troubleshooting Notes", "/blog/"),
    blogLink("Something Broke", "something-broke-on-your-website"),
    blogLink("SEO Work Is Stuck", "seo-audit-done-now-implement-it"),
    blogLink("Need a Page Live", "need-a-page-live-fast"),
    blogLink("Data Does Not Connect", "website-data-systems-not-connecting"),
    blogLink("Broken Layouts", "broken-layouts-mobile-website-fixes"),
    blogLink("CSS and JavaScript", "css-javascript-errors-website-bugs"),
    routeLink("View All Posts", "/blog/")
  ].filter(Boolean);

  const supportPills = [
    serviceLink("WordPress", "wordpress-support"),
    skillLink("Shopify", "shopify-plus-liquid"),
    serviceLink("SEO", "technical-seo-implementation"),
    serviceLink("Tracking", "analytics-tracking"),
    serviceLink("Speed", "site-speed-performance"),
    serviceLink("APIs", "api-integrations")
  ].filter(Boolean);
</script>

<footer class="site-footer">
  <div class="footer-cta">
    <div class="footer-cta-copy">
      <strong>Need web work handled?</strong>
      <p>Start with the URL, the problem, and the outcome you want.</p>
    </div>
    <div class="footer-cta-action">
      <a class="button button-primary" href="/contact/" title="Open the contact request form">Start a Website Request</a>
    </div>
  </div>

  <div class="footer-inner">
    <section class="footer-brand-row" aria-label="The Web Guy footer summary">
      <div class="footer-brand-copy">
        <div class="footer-brand-heading">
          <img
            class="footer-wordmark"
            src="/brand/thewebguy-modern-color-wordmark.png"
            width="1476"
            height="253"
            alt="The Web Guy.app"
            loading="lazy"
            decoding="async"
          />
          <h2 class="sr-only">The Web Guy</h2>
        </div>
        <p>Contract web development, WordPress support, Shopify/Liquid help, technical SEO implementation, tracking cleanup, automation, performance, and platform support at $55/hr.</p>
        <div class="footer-mini-grid footer-brand-pills" aria-label="Core support areas">
          {#each supportPills as link}
            <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
          {/each}
        </div>
      </div>
      <div class="footer-brand-support">
        <p>Practical hourly help for existing sites, messy platforms, agency overflow, and web work that needs to move.</p>
      </div>
    </section>

    <div class="footer-row footer-services-row">
      <nav class="footer-link-column footer-hub-column" aria-label="Footer Web Guy Hub links">
        <h3 class="footer-column-heading">Web Guy Hub</h3>
        <div class="footer-link-list">
          {#each hubLinks as link}
            <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
          {/each}
        </div>
      </nav>

      <section class="footer-spanning-group footer-services-group" aria-labelledby="footer-services-heading">
        <h3 id="footer-services-heading" class="footer-column-heading footer-span-heading">Services</h3>
        <div class="footer-subgroup-grid footer-services-grid">
          {#each serviceGroups as group}
            <div class="footer-subgroup">
              <h4 class="footer-subheading">{group.title}</h4>
              <div class="footer-link-list">
                {#each group.links as link}
                  <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>
    </div>

    <div class="footer-row footer-lower-row">
      <nav class="footer-link-column footer-locations-column" aria-label="Footer location links">
        <h3 class="footer-column-heading">Locations</h3>
        <div class="footer-link-list">
          {#each locationLinks as link}
            <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
          {/each}
        </div>
      </nav>

      <section class="footer-spanning-group footer-skills-group" aria-labelledby="footer-skills-heading">
        <h3 id="footer-skills-heading" class="footer-column-heading footer-span-heading">Core Skills</h3>
        <div class="footer-subgroup-grid footer-skills-grid">
          {#each skillGroups as group}
            <div class="footer-subgroup">
              <h4 class="footer-subheading">{group.title}</h4>
              <div class="footer-link-list">
                {#each group.links as link}
                  <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </section>

      <nav class="footer-link-column footer-blog-column" aria-label="Footer blog links">
        <h3 class="footer-column-heading">Blog</h3>
        <div class="footer-link-list">
          {#each blogLinks as link}
            <a href={link.href} title={linkTitle(link.label, link.href)}>{link.label}</a>
          {/each}
        </div>
      </nav>
    </div>
  </div>

  <div class="footer-bottom-bar">
    <div class="footer-bottom">
      <p class="copyright">&copy; {year} The Web Guy. All rights reserved.</p>
      <nav class="footer-legal-links" aria-label="Footer utility links">
        <a href="/sitemap.xml" title="View the XML sitemap">Sitemap</a>
        <a href="/privacy/" title="Read The Web Guy Privacy Policy">Privacy</a>
        <a href="/terms/" title="Read The Web Guy Terms of Service">Terms</a>
      </nav>
    </div>
  </div>
</footer>
