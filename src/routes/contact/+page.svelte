<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import TopicalLinks from "$lib/components/TopicalLinks.svelte";
  import ContextualSupport from "$lib/components/ContextualSupport.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import { onMount, tick } from "svelte";
  import { journeySnapshot, trackContactEvent, trackEvent } from "$lib/analytics.js";
  import { contactSourceType } from "$lib/contact-context.js";
  import { locationPages, servicePages, skillPages } from "$lib/data/content.js";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { breadcrumbSchema, schemaList } from "$lib/data/schema.js";
  import { contactState } from "$lib/state/contact-state.svelte.js";

  let status = $state({ type: "idle", message: "" });
  let botTrap = $state("");
  let formLoadedAt = $state("");
  let formStarted = false;
  let formStartedAt = 0;
  let submissionAttempted = false;
  let abandonTracked = false;
  const formLocked = $derived(status.type === "loading" || status.type === "success");
  const submitLabel = $derived(status.type === "loading" ? "Sending..." : status.type === "success" ? "Request Sent" : "Send Website Request");
  const hasSourceContext = $derived(Boolean(contactState.draft.sourcePagePath || contactState.draft.sourcePageTitle));
  const sourceContextLabel = $derived(contactState.draft.sourcePageTitle || contactState.draft.sourcePagePath);
  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Contact", title: "Current page: Send a website support request" }
  ];
  const seoSchema = schemaList(breadcrumbSchema(breadcrumbs, "/contact/"));
  const contactTopicalLinks = [
    {
      label: "Broken-site request",
      title: "Website Fixes",
      href: "/services/website-fixes/",
      copy: "Use this service page when the form request is about broken layouts, scripts, forms, modals, embeds, mobile bugs, or weird behavior."
    },
    {
      label: "WordPress request",
      title: "WordPress Support",
      href: "/services/wordpress-support/",
      copy: "Use this when the request involves WordPress themes, plugins, Elementor, PHP templates, CSS, JavaScript, content, or cleanup."
    },
    {
      label: "SEO request",
      title: "Technical SEO Implementation",
      href: "/services/technical-seo-implementation/",
      copy: "Use this when you are sending audit notes, crawl exports, schema tasks, redirects, heading cleanup, or internal link work."
    },
    {
      label: "Page request",
      title: "Landing Pages",
      href: "/services/landing-pages/",
      copy: "Use this when the request is a service page, local page, campaign page, paid traffic page, form, CTA, tracking, or launch task."
    },
    {
      label: "Tracking request",
      title: "Analytics & Tracking",
      href: "/services/analytics-tracking/",
      copy: "Use this when GA4, GTM, pixels, form events, ecommerce measurement, CRM handoffs, or dashboards need troubleshooting."
    },
    {
      label: "Rate context",
      title: "Contract Rate",
      href: "/rate/",
      copy: "Use this when you want to confirm how $55/hr hourly support fits one-time fixes, small projects, ongoing work, or agency overflow."
    }
  ];
  const contactContextualItems = contactTopicalLinks.slice(0, 5).map((item) => ({
    title: item.title,
    href: item.href,
    titleAttr: `View ${item.title} before sending the contact form`,
    copy: item.copy
  }));
  const contactInlineParagraphs = [
    [
      "If the site is visibly broken, describe it through ",
      { text: "Website Fixes", href: "/services/website-fixes/", title: "View website fixes for broken layouts, forms, scripts, embeds, and mobile bugs" },
      ". If the request is a theme, plugin, Elementor, PHP, CSS, JavaScript, or content issue, check ",
      { text: "WordPress Support", href: "/services/wordpress-support/", title: "View WordPress support for themes, plugins, Elementor, PHP, CSS, JavaScript, and cleanup" },
      " before sending the form."
    ],
    [
      "If you already have audit notes, crawl exports, schema tasks, redirects, headings, or internal-link work, use ",
      { text: "Technical SEO Implementation", href: "/services/technical-seo-implementation/", title: "View technical SEO implementation for audit notes, crawl cleanup, schema, redirects, headings, and internal links" },
      ". If the issue is GA4, GTM, pixels, form tracking, ecommerce data, or dashboards, use ",
      { text: "Analytics & Tracking", href: "/services/analytics-tracking/", title: "View analytics and tracking support for GA4, GTM, pixels, form events, ecommerce measurement, and dashboards" },
      "."
    ]
  ];
  const DEFAULT_CONTACT_SOURCE_TITLE = "Contact request form";
  const DEFAULT_CONTACT_SOURCE_CTA = "direct_form_submit";

  function cleanSourceParam(value = "", limit = 260) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function slugFromPath(pathname = "", root = "") {
    const parts = String(pathname || "").split("/").filter(Boolean);
    return parts[0] === root ? parts[1] || "" : "";
  }

  function serviceOptionLabel(service) {
    return service?.h1?.replace(" at $55/hr", "") || "";
  }

  function inferServiceFromSource(sourcePath = "") {
    const serviceSlug = slugFromPath(sourcePath, "services");
    return servicePages.find((service) => service.slug === serviceSlug);
  }

  function inferSkillFromSource(sourcePath = "") {
    const skillSlug = slugFromPath(sourcePath, "skills");
    return skillPages.find((skill) => skill.slug === skillSlug);
  }

  function inferLocationFromSource(sourcePath = "") {
    const locationSlug = slugFromPath(sourcePath, "locations");
    return locationPages.find((location) => location.slug === locationSlug);
  }

  function applyContactSourceFromUrl(url) {
    const params = url.searchParams;
    const sourcePagePath = cleanSourceParam(params.get("source_path"), 300);
    if (!sourcePagePath) return false;

    const sourcePageTitle = cleanSourceParam(params.get("source_title"), 220);
    const sourcePageType = cleanSourceParam(params.get("source_type"), 80);
    const sourceCta = cleanSourceParam(params.get("source_cta"), 160);
    const sourceService = inferServiceFromSource(sourcePagePath);
    const sourceSkill = inferSkillFromSource(sourcePagePath);
    const sourceLocation = inferLocationFromSource(sourcePagePath);

    contactState.draft.sourcePagePath = sourcePagePath;
    contactState.draft.sourcePageTitle = sourcePageTitle;
    contactState.draft.sourcePageType = sourcePageType;
    contactState.draft.sourceCta = sourceCta;

    if (sourceService && !contactState.draft.service) {
      contactState.draft.service = serviceOptionLabel(sourceService);
    }

    if (sourceSkill && !contactState.draft.skill) {
      contactState.draft.skill = sourceSkill.eyebrow;
    }

    if (sourceLocation && !contactState.draft.location) {
      contactState.draft.location = `${sourceLocation.city}, ${sourceLocation.state}`;
    }

    return true;
  }

  function ensureContactSourceContext(url = page.url) {
    const sourcePagePath = cleanSourceParam(contactState.draft.sourcePagePath, 300) || cleanSourceParam(url.pathname, 300) || "/contact/";
    const sourcePageTitle = cleanSourceParam(contactState.draft.sourcePageTitle, 220)
      || (sourcePagePath === "/contact/" ? DEFAULT_CONTACT_SOURCE_TITLE : sourcePagePath);
    const sourcePageType = cleanSourceParam(contactState.draft.sourcePageType, 80)
      || contactSourceType(sourcePagePath);
    const sourceCta = cleanSourceParam(contactState.draft.sourceCta, 160) || DEFAULT_CONTACT_SOURCE_CTA;

    contactState.draft.sourcePagePath = sourcePagePath;
    contactState.draft.sourcePageTitle = sourcePageTitle;
    contactState.draft.sourcePageType = sourcePageType;
    contactState.draft.sourceCta = sourceCta;
  }

  function timelineBucket(value = "") {
    const timeline = value.toLowerCase();
    if (!timeline.trim()) return "not_provided";
    if (/asap|urgent|today|tomorrow|emergency/.test(timeline)) return "urgent";
    if (/week/.test(timeline)) return "this_week";
    if (/month/.test(timeline)) return "this_month";
    if (/ongoing|retainer|monthly/.test(timeline)) return "ongoing";
    return "specified";
  }

  function textLengthBucket(value = "") {
    const length = value.trim().length;
    if (!length) return "empty";
    if (length < 120) return "short";
    if (length < 500) return "medium";
    return "long";
  }

  function contactTrackingPayload(formData) {
    return {
      form_id: "request-form",
      selected_service: formData.service || "not_selected",
      selected_skill: formData.skill || "not_selected",
      selected_location: formData.location || "not_selected",
      work_type: formData.workType || "not_selected",
      has_company: Boolean(formData.company),
      has_website_url: Boolean(formData.url),
      has_timeline: Boolean(formData.timeline),
      timeline_bucket: timelineBucket(formData.timeline),
      has_monthly_hours: Boolean(formData.hours),
      details_length_bucket: textLengthBucket(formData.details),
      source_page_type: formData.sourcePageType || "not_provided",
      source_page_path: formData.sourcePagePath || "not_provided",
      source_cta: formData.sourceCta || "not_provided"
    };
  }

  function activeContactPayload() {
    return contactTrackingPayload(contactState.draft);
  }

  function trackContactFormStart(startTrigger = "field_focus") {
    if (formStarted) return;

    formStarted = true;
    formStartedAt = Date.now();

    const payload = {
      ...activeContactPayload(),
      form_start_trigger: startTrigger,
      ...journeySnapshot()
    };

    trackEvent("contact_form_start", payload);
    trackContactEvent("contact_form_start", payload);
  }

  function handleContactFormFocus(event) {
    if (event.target?.name === "websiteCompany") return;
    trackContactFormStart("field_focus");
  }

  function handleContactFormInput(event) {
    if (event.target?.name === "websiteCompany") return;
    trackContactFormStart("field_input");
  }

  function trackContactFormAbandon(abandonReason) {
    if (!formStarted || submissionAttempted || abandonTracked || status.type === "success") return;

    abandonTracked = true;
    const payload = {
      ...activeContactPayload(),
      abandon_reason: abandonReason,
      form_age_seconds: formStartedAt ? Math.round((Date.now() - formStartedAt) / 1000) : 0,
      ...journeySnapshot()
    };

    trackEvent("contact_form_abandon", payload);
    trackContactEvent("contact_form_abandon", payload);
  }

  function trackContactSelect(fieldName, value) {
    trackEvent("contact_form_select", {
      form_id: "request-form",
      field_name: fieldName,
      selected_value: value || "not_selected"
    });
  }

  async function scrollToRequestFormIfNeeded(url = page.url) {
    if (url.hash !== "#request-form") return;
    await tick();
    window.requestAnimationFrame(() => {
      document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  beforeNavigate(() => {
    trackContactFormAbandon("navigation");
  });

  afterNavigate(() => {
    scrollToRequestFormIfNeeded(page.url);
  });

  onMount(() => {
    formLoadedAt = String(Date.now());
    applyContactSourceFromUrl(page.url);
    ensureContactSourceContext(page.url);
    scrollToRequestFormIfNeeded(page.url);
    trackContactEvent("contact_page_view", { form_id: "request-form", is_form_fill: false });

    const handlePageHide = () => trackContactFormAbandon("left_page");
    window.addEventListener("pagehide", handlePageHide);

    return () => {
      window.removeEventListener("pagehide", handlePageHide);
    };
  });

  async function submitRequest(event) {
    event.preventDefault();
    if (formLocked) return;

    trackContactFormStart("submit");
    submissionAttempted = true;
    status = { type: "loading", message: "Preparing request..." };

    ensureContactSourceContext(page.url);
    const formData = { ...contactState.draft, websiteCompany: botTrap, formLoadedAt };
    const trackingPayload = contactTrackingPayload(formData);
    let responseStatus = "network";
    trackEvent("contact_form_submit", { ...trackingPayload, ...journeySnapshot() });
    trackContactEvent("contact_form_submit", { ...trackingPayload, ...journeySnapshot() });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formData)
      });
      responseStatus = response.status;
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "Request failed.");

      contactState.lastSubmittedAt = new Date().toISOString();
      contactState.lastService = formData.service;

      trackEvent("contact_form_success", { ...trackingPayload, response_status: responseStatus, ...journeySnapshot() });
      trackContactEvent("contact_form_success", { ...trackingPayload, response_status: responseStatus, ...journeySnapshot() });
      trackEvent("generate_lead", { ...trackingPayload, response_status: responseStatus, ...journeySnapshot() });
      status = { type: "success", message: "Free quote request sent. I will review the details and follow up." };
    } catch (error) {
      trackEvent("contact_form_error", {
        ...trackingPayload,
        response_status: responseStatus,
        error_type: responseStatus === "network" ? "network_or_client" : "server_response",
        ...journeySnapshot()
      });
      trackContactEvent("contact_form_error", {
        ...trackingPayload,
        response_status: responseStatus,
        error_type: responseStatus === "network" ? "network_or_client" : "server_response",
        ...journeySnapshot()
      });
      status = { type: "error", message: error.message || "The request could not be sent. Please try again in a moment." };
    }
  }
</script>

<Seo
  title="Contact The Web Guy | Get a Free Website Quote"
  description="Get a free quote from The Web Guy for a website issue, WordPress task, SEO implementation need, landing page request, tracking problem, or agency overflow work."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Free website quote"
    h1="Get a Free Quote From The Web Guy"
    intro="Tell me what is broken, what needs built, or what keeps getting pushed off. Include the URL, timeline, and what a useful outcome looks like. There is no charge to send the request or ask for a quote."
    cta="Get a Free Quote"
    ctaHref="#request-form"
    image={staticHeroImages.contact}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section contact-section">
    <div class="contact-grid">
      <div>
        <SectionHeading
          eyebrow="Free quote request form"
          h2="Get a free quote for website support"
          body="Include the URL, what should happen, what is happening now, timeline, and whether this is one-time or ongoing. If you have an audit, screenshots, crawl notes, or a task list, mention that too. I will review the request and reply with the best next step before any paid work begins."
        />
        <div class="rate-callout light">
          <span>Contract rate</span>
          <strong>$55/hr</strong>
          <p>Quotes are free. Approved work is billed hourly for quick fixes, small projects, ongoing support, and agency overflow.</p>
        </div>
      </div>

      <form id="request-form" class="contact-form contact-form--tight" onsubmit={submitRequest} onfocusin={handleContactFormFocus} oninput={handleContactFormInput}>
        {#if hasSourceContext}
          <div class="source-context-note">
            <span>Starting point</span>
            <strong>{sourceContextLabel}</strong>
            <p>This page context will be included with the request.</p>
          </div>
        {/if}

        <label>Name<input bind:value={contactState.draft.name} name="name" type="text" autocomplete="name" placeholder="Your name" required /></label>
        <label>Email<input bind:value={contactState.draft.email} name="email" type="email" autocomplete="email" placeholder="you@example.com" required /></label>
        <label>Website URL<input bind:value={contactState.draft.url} name="url" type="url" placeholder="https://example.com/page-with-the-issue" /></label>
        <label>What is happening or needed?<textarea bind:value={contactState.draft.details} name="details" rows="6" placeholder="Describe the symptom, what should happen, and anything that changed recently." required></textarea></label>
        <label>Timeline<input bind:value={contactState.draft.timeline} name="timeline" type="text" placeholder="ASAP, this week, this month, flexible" /></label>

        <details class="optional-contact-details">
          <summary>Optional: company, service fit, and ongoing details</summary>
          <div class="optional-contact-grid">
            <label>Company or agency name<input bind:value={contactState.draft.company} name="company" type="text" autocomplete="organization" placeholder="Company, agency, or team" /></label>
            <label>What service does this fit?
              <select bind:value={contactState.draft.service} name="service" onchange={() => trackContactSelect("service", contactState.draft.service)}>
                <option value="">Choose the closest fit</option>
                {#each servicePages as service}<option>{service.h1.replace(" at $55/hr", "")}</option>{/each}
                <option>Not sure yet</option>
              </select>
            </label>
            <label>Skill area if relevant
              <select bind:value={contactState.draft.skill} name="skill" onchange={() => trackContactSelect("skill", contactState.draft.skill)}>
                <option value="">Choose if relevant</option>
                {#each skillPages as skill}<option>{skill.eyebrow}</option>{/each}
              </select>
            </label>
            <label>City/location
              <select bind:value={contactState.draft.location} name="location" onchange={() => trackContactSelect("location", contactState.draft.location)}>
                <option value="">Choose if relevant</option>
                {#each locationPages as location}<option>{location.city}, {location.state}</option>{/each}
                <option>Remote / not location-specific</option>
              </select>
            </label>
            <label>One-time or ongoing?
              <select bind:value={contactState.draft.workType} name="workType" onchange={() => trackContactSelect("work_type", contactState.draft.workType)}>
                <option value="">Choose one</option>
                <option>One-time fix</option>
                <option>Small project</option>
                <option>Ongoing monthly help</option>
                <option>Agency overflow</option>
              </select>
            </label>
            <label class="optional-wide">Approximate monthly hours<input bind:value={contactState.draft.hours} name="hours" type="text" placeholder="Not sure, 5-10, 10-20, as needed" /></label>
          </div>
        </details>
        <label class="bot-field" aria-hidden="true" tabindex="-1">Leave this field blank<input bind:value={botTrap} name="websiteCompany" type="text" autocomplete="off" tabindex="-1" /></label>
        <input type="hidden" name="formLoadedAt" value={formLoadedAt} />
        <p class="form-note">Requests send through the private contact route. Your email is used as the reply-to address, and paid work only starts after scope and rate are clear.</p>
        {#if status.message}<p class={`form-status ${status.type}`}>{status.message}</p>{/if}
        <button class="button button-primary cta-animated cta-animated--primary" type="submit" disabled={formLocked} aria-disabled={formLocked}>{submitLabel}</button>
      </form>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading
      eyebrow="Website request prep"
      h2="Pick the closest work type, then send the messy version"
      body="The request form can handle rough context, but these links help frame the page, platform, tracking, or SEO work before you send it."
    />
    <InternalLinkCopy paragraphs={contactInlineParagraphs} />
  </section>

  <ContextualSupport
    eyebrow="Service pages before the form"
    heading="Service context before the request form"
    intro="These pages can help frame the request before the form: what broke, what needs improved, and what kind of help fits."
    items={contactContextualItems}
  />

  <TopicalLinks
    eyebrow="Request routing"
    heading="Choose the closest request path, then describe the real site problem"
    intro="The form can handle messy requests, but these pages help frame the work if you already know the likely service category."
    items={contactTopicalLinks}
  />

  <section class="section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading
        eyebrow="Broken website request"
        h2="Send the symptom and the URL"
        body="If something broke, the most useful request starts with the exact page, what should happen, what is happening instead, device/browser notes, and any recent WordPress, plugin, theme, script, hosting, or content changes."
      />
      <a class="text-link" href="/services/website-fixes/" title="View website fixes for broken layouts, forms, modals, embeds, scripts, and website bugs">View website fixes</a>
    </div>
    <div>
      <SectionHeading
        eyebrow="SEO, page, or support request"
        h2="Send the task list or audit notes"
        body="If the work is not urgent, include the page goal, platform, SEO audit, crawl notes, tracking requirements, rough deadline, and whether this is one-time help, agency overflow, or recurring webmaster support."
      />
      <a class="text-link" href="/services/technical-seo-implementation/" title="View technical SEO implementation for audit notes, crawl cleanup, schema, redirects, headings, and internal links">View SEO implementation</a>
    </div>
  </section>
</main>
