import { browser } from "$app/environment";
import { env } from "$env/dynamic/public";

export const gaMeasurementId = (env.PUBLIC_GA_MEASUREMENT_ID || "").trim();
export const gaScriptSrc = gaMeasurementId ? `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}` : "";

const scrollThresholds = [25, 50, 75, 90];
const trackedScrollDepths = new Set();
const viewedSections = new Set();
const journeyStorageKey = "theWebGuyJourney";
const attributionStorageKey = "theWebGuyAttribution";
const maxJourneyItems = 30;
let currentPageMeta = {};
let initialized = false;
let scriptLoadPromise;

function cleanPath(pathname = "/") {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

function titleFromSlug(slug = "") {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function routeMeta(pathname = "/") {
  const path = cleanPath(pathname);
  const segments = path.split("/").filter(Boolean);
  const root = segments[0] || "home";
  const slug = segments[1] || "";
  const topic = slug ? titleFromSlug(slug) : titleFromSlug(root);

  if (path === "/") {
    return {
      page_type: "home",
      content_group: "Home",
      page_topic: "Contract web support",
      conversion_stage: "discovery"
    };
  }

  if (root === "services") {
    return {
      page_type: slug ? "service_detail" : "service_hub",
      content_group: "Services",
      page_topic: slug ? topic : "Web services",
      service_slug: slug || "hub",
      conversion_stage: slug ? "service_evaluation" : "service_discovery"
    };
  }

  if (root === "skills") {
    return {
      page_type: slug ? "skill_detail" : "skill_hub",
      content_group: "Skills",
      page_topic: slug ? topic : "Core skills",
      skill_slug: slug || "hub",
      conversion_stage: "technical_fit"
    };
  }

  if (root === "locations") {
    return {
      page_type: slug ? "location_detail" : "location_hub",
      content_group: "Locations",
      page_topic: slug ? topic : "Service area",
      location_slug: slug || "hub",
      conversion_stage: "local_fit"
    };
  }

  if (root === "blog") {
    return {
      page_type: slug ? "blog_post" : "blog_hub",
      content_group: "Blog",
      page_topic: slug ? topic : "Troubleshooting notes",
      blog_slug: slug || "hub",
      conversion_stage: slug ? "education" : "content_discovery"
    };
  }

  const singlePages = {
    contact: ["contact", "Contact", "Request form", "lead_capture"],
    rate: ["rate", "Rate", "Hourly contract rate", "pricing"],
    faq: ["faq", "FAQ", "Questions before hiring", "objection_handling"],
    about: ["about", "About", "Background and fit", "trust_building"]
  };

  if (singlePages[root]) {
    const [page_type, content_group, page_topic, conversion_stage] = singlePages[root];
    return { page_type, content_group, page_topic, conversion_stage };
  }

  return {
    page_type: "other",
    content_group: titleFromSlug(root),
    page_topic: topic || "Other",
    conversion_stage: "unknown"
  };
}

function stringValue(value, maxLength = 120) {
  if (value === undefined || value === null) return undefined;
  const text = String(value).replace(/\s+/g, " ").trim();
  if (!text) return undefined;
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text;
}

function readAttribution() {
  if (!browser) return {};
  try {
    return JSON.parse(window.sessionStorage.getItem(attributionStorageKey) || "{}");
  } catch {
    return {};
  }
}

function writeAttribution(value) {
  if (!browser) return;
  window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(value));
}

function cleanHostname(hostname = "") {
  return hostname.replace(/^www\./, "").toLowerCase();
}

function classifyReferrerHost(hostname = "") {
  const host = cleanHostname(hostname);
  if (!host) return "direct";
  if (/(^|\.)google\./.test(host) || /(^|\.)bing\.com$/.test(host) || /(^|\.)duckduckgo\.com$/.test(host) || /(^|\.)yahoo\.com$/.test(host)) {
    return "organic_search";
  }
  if (/(^|\.)facebook\.com$/.test(host) || /(^|\.)instagram\.com$/.test(host) || /(^|\.)linkedin\.com$/.test(host) || /(^|\.)x\.com$/.test(host) || /(^|\.)twitter\.com$/.test(host) || /(^|\.)t\.co$/.test(host)) {
    return "organic_social";
  }
  return "referral";
}

function referrerContext() {
  if (!browser || !document.referrer) return { session_referrer_type: "direct" };

  try {
    const referrerUrl = new URL(document.referrer);
    if (referrerUrl.origin === window.location.origin) return { session_referrer_type: "internal" };

    const host = cleanHostname(referrerUrl.hostname);
    return {
      session_referrer_host: host,
      session_referrer_type: classifyReferrerHost(host)
    };
  } catch {
    return { session_referrer_type: "unknown" };
  }
}

function campaignContext(url) {
  const campaignParams = {
    utm_source: "session_utm_source",
    utm_medium: "session_utm_medium",
    utm_campaign: "session_utm_campaign",
    utm_term: "session_utm_term",
    utm_content: "session_utm_content"
  };

  return Object.fromEntries(
    Object.entries(campaignParams)
      .map(([param, key]) => [key, url.searchParams.get(param)])
      .filter(([, value]) => Boolean(value))
  );
}

function hasCampaignSignal(url) {
  const clickIdParams = ["gclid", "gbraid", "wbraid", "msclkid"];
  return Object.keys(campaignContext(url)).length > 0 || clickIdParams.some((param) => url.searchParams.has(param));
}

export function refreshAttribution(url = browser ? window.location.href : "") {
  if (!browser || !url) return {};

  const existing = readAttribution();

  try {
    const parsedUrl = new URL(url, window.location.origin);
    const shouldRefresh = !existing.landing_page_path || hasCampaignSignal(parsedUrl);
    if (!shouldRefresh) return existing;

    const landingMeta = routeMeta(parsedUrl.pathname);
    const campaign = campaignContext(parsedUrl);
    const paidClickType = ["gclid", "gbraid", "wbraid", "msclkid"].find((param) => parsedUrl.searchParams.has(param));
    const attribution = {
      landing_page_path: parsedUrl.pathname,
      landing_page_type: landingMeta.page_type,
      landing_page_topic: landingMeta.page_topic,
      session_has_utm: Object.keys(campaign).length ? 1 : 0,
      session_has_paid_click_id: paidClickType ? 1 : 0,
      session_paid_click_type: paidClickType,
      ...referrerContext(),
      ...campaign
    };

    writeAttribution(attribution);
    return attribution;
  } catch {
    return existing;
  }
}

function attributionContext() {
  return refreshAttribution();
}

function sanitizeParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params)
      .map(([key, value]) => {
        if (typeof value === "boolean") return [key, value ? 1 : 0];
        if (typeof value === "number") return [key, value];
        const maxLength = key.includes("flow") || key.includes("journey") || key.includes("question_text") ? 500 : key.includes("url") || key.includes("location") ? 300 : 120;
        return [key, stringValue(value, maxLength)];
      })
      .filter(([, value]) => value !== undefined)
  );
}

function activePageMeta() {
  if (Object.keys(currentPageMeta).length) return currentPageMeta;
  if (!browser) return {};
  currentPageMeta = routeMeta(window.location.pathname);
  return currentPageMeta;
}

export function analyticsEnabled() {
  return browser && Boolean(gaMeasurementId);
}

export function initGoogleAnalytics() {
  if (!analyticsEnabled()) return false;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  if (!initialized && window.__theWebGuyGaInitialized) {
    initialized = true;
  }

  if (!initialized) {
    initialized = true;
    window.__theWebGuyGaInitialized = true;
    window.gtag("js", new Date());
    window.gtag("config", gaMeasurementId, { send_page_view: false });
  }

  return true;
}

export function loadGoogleAnalyticsScript() {
  if (!analyticsEnabled() || !initGoogleAnalytics()) return Promise.resolve(false);
  if (!gaScriptSrc) return Promise.resolve(false);

  const existingScript = document.getElementById("the-web-guy-gtag");
  if (existingScript) return scriptLoadPromise || Promise.resolve(true);

  scriptLoadPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.id = "the-web-guy-gtag";
    script.async = true;
    script.src = gaScriptSrc;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.append(script);
  });

  return scriptLoadPromise;
}

export function trackEvent(eventName, params = {}) {
  if (!analyticsEnabled()) return;
  initGoogleAnalytics();
  window.gtag(
    "event",
    eventName,
    sanitizeParams({
      ...activePageMeta(),
      ...attributionContext(),
      source_page_path: window.location.pathname,
      source_page_title: document.title,
      ...params
    })
  );
}

export function trackPageView(url = window.location.href, pageTitle = document.title) {
  if (!analyticsEnabled()) return;
  initGoogleAnalytics();

  const parsedUrl = new URL(url, window.location.origin);
  currentPageMeta = routeMeta(parsedUrl.pathname);
  const attribution = refreshAttribution(parsedUrl.href);
  recordJourneyItem({
    type: "page",
    label: currentPageMeta.page_topic || pageTitle,
    path: parsedUrl.pathname
  });

  window.gtag(
    "event",
    "page_view",
    sanitizeParams({
      ...currentPageMeta,
      ...attribution,
      page_title: pageTitle,
      page_location: parsedUrl.href,
      page_path: parsedUrl.pathname
    })
  );
}

function readJourney() {
  if (!browser) return [];
  try {
    return JSON.parse(window.sessionStorage.getItem(journeyStorageKey) || "[]");
  } catch {
    return [];
  }
}

function writeJourney(items) {
  if (!browser) return;
  window.sessionStorage.setItem(journeyStorageKey, JSON.stringify(items.slice(-maxJourneyItems)));
}

function recordJourneyItem(item) {
  const journey = readJourney();
  const key = `${item.type}:${item.path || ""}:${item.label || ""}`;
  const last = journey[journey.length - 1];
  if (`${last?.type}:${last?.path || ""}:${last?.label || ""}` !== key) {
    journey.push({ ...item, at: Date.now() });
    writeJourney(journey);
  }
}

export function journeySnapshot() {
  const journey = readJourney();
  const pages = journey.filter((item) => item.type === "page").map((item) => `${item.label} (${item.path})`);
  const sections = journey.filter((item) => item.type === "section").map((item) => `${item.label} (${item.path})`);

  return {
    journey_page_count: pages.length,
    journey_section_count: sections.length,
    journey_page_flow: pages.join(" > "),
    journey_section_flow: sections.join(" > ")
  };
}

function areaName(element) {
  const area = element.closest(
    ".hero-actions, .cred-strip, .breadcrumb-nav, .breadcrumbs, .service-nav, .topical-links, .contextual-support, .internal-link-copy, .faq-list, .footer-cta, .footer, .site-header, .contact-form, .cta-band, .card, .topic-link, .topical-link-list, .mega-menu, .mobile-nav-drawer, section, nav, header, footer, form"
  );

  if (!area) return "unknown";
  if (area.classList.contains("hero-actions")) return "hero_cta";
  if (area.classList.contains("cred-strip")) return "hero_capability_links";
  if (area.classList.contains("breadcrumbs") || area.classList.contains("breadcrumb-nav")) return "breadcrumbs";
  if (area.classList.contains("service-nav")) return "service_nav";
  if (area.classList.contains("mega-menu")) return "mega_menu";
  if (area.classList.contains("mobile-nav-drawer")) return "mobile_navigation";
  if (area.classList.contains("topical-links")) return "topical_links";
  if (area.classList.contains("contextual-support")) return "contextual_support";
  if (area.classList.contains("internal-link-copy")) return "body_copy";
  if (area.classList.contains("card")) return "card";
  if (area.classList.contains("topic-link") || area.classList.contains("topical-link-list")) return "card_or_topic_link";
  if (area.classList.contains("faq-list")) return "faq";
  if (area.classList.contains("footer-cta")) return "footer_cta";
  if (area.classList.contains("footer")) return "footer";
  if (area.classList.contains("site-header")) return "header";
  if (area.classList.contains("contact-form")) return "contact_form";
  if (area.classList.contains("cta-band")) return "cta_band";
  if (area.tagName === "HEADER") return "header";
  if (area.tagName === "FOOTER") return "footer";
  if (area.tagName === "NAV") return "navigation";
  if (area.tagName === "FORM") return "form";
  if (area.tagName === "SECTION") {
    const eyebrow = area.querySelector(".eyebrow")?.textContent;
    const heading = area.querySelector("h2, h1, h3")?.textContent;
    return stringValue(eyebrow || heading, 80) || "section";
  }
  return "unknown";
}

function sectionName(element) {
  const heading = element.querySelector("h1, h2, h3, .section-heading h2")?.textContent;
  const eyebrow = element.querySelector(".eyebrow")?.textContent;
  return stringValue(eyebrow && heading ? `${eyebrow}: ${heading}` : heading || eyebrow, 100) || "Unnamed section";
}

function linkContext(link) {
  const area = areaName(link);
  if (area === "header" || area === "navigation" || area === "mega_menu" || area === "mobile_navigation" || area === "service_nav") return "navigation";
  if (area === "breadcrumbs") return "breadcrumbs";
  if (area === "card" || area === "card_or_topic_link" || area === "contextual_support" || area === "topical_links") return "card";
  if (area === "body_copy" || link.closest("main section")) return "internal_content";
  if (area === "footer" || area === "footer_cta") return "footer";
  return area;
}

function classifyLink(link, destination) {
  const isButton = link.classList.contains("button") || link.classList.contains("cta-animated");
  const isRequestForm = destination.pathname === "/contact/" || destination.pathname === "/contact" || destination.hash === "#request-form";

  if (isRequestForm) return "contact_intent";
  if (isButton) return "cta_click";
  if (destination.origin !== window.location.origin) return "outbound_link_click";
  return "internal_link_click";
}

export function trackLinkClick(link) {
  if (!analyticsEnabled() || !link?.href) return;

  const destination = new URL(link.href, window.location.origin);
  const linkText = link.textContent || link.getAttribute("aria-label") || link.getAttribute("title") || destination.pathname;
  const eventName = classifyLink(link, destination);

  trackEvent(eventName, {
    link_text: linkText,
    link_title: link.getAttribute("title"),
    link_url: destination.href,
    destination_path: destination.pathname,
    destination_hash: destination.hash,
    link_area: areaName(link),
    link_context: linkContext(link),
    link_role: link.classList.contains("button") || link.classList.contains("cta-animated") ? "button_link" : "text_link",
    is_same_page: destination.pathname === window.location.pathname
  });
}

export function trackButtonClick(button) {
  if (!analyticsEnabled()) return;

  trackEvent(button.type === "submit" ? "form_submit_click" : "button_click", {
    button_text: button.textContent || button.getAttribute("aria-label") || "button",
    button_type: button.type || "button",
    button_area: areaName(button),
    form_id: button.form?.id
  });
}

export function trackContactEvent(action, params = {}) {
  trackEvent("contact_event", {
    contact_action: action,
    is_form_fill: action.includes("form"),
    ...journeySnapshot(),
    ...params
  });
}

export function trackFaqOpen(details) {
  if (!analyticsEnabled() || !details.open) return;
  const question = details.querySelector("summary")?.textContent;

  trackEvent("faq_open", {
    faq_question: question,
    faq_area: areaName(details)
  });
}

export function resetScrollTracking() {
  trackedScrollDepths.clear();
  viewedSections.clear();
}

export function trackScrollDepth() {
  if (!analyticsEnabled()) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return;

  const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
  const threshold = scrollThresholds.find((value) => percent >= value && !trackedScrollDepths.has(value));
  if (!threshold) return;

  trackedScrollDepths.add(threshold);
  const currentSection = [...document.querySelectorAll("main section, main .hero")]
    .filter((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.45)
    .at(-1);
  trackEvent("scroll_depth", {
    scroll_percent: threshold,
    section_name: currentSection ? sectionName(currentSection) : undefined
  });
}

export function trackSectionView(section) {
  if (!analyticsEnabled() || !section) return;
  const name = sectionName(section);
  const key = `${window.location.pathname}:${name}`;
  if (viewedSections.has(key)) return;

  viewedSections.add(key);
  recordJourneyItem({ type: "section", label: name, path: window.location.pathname });
  trackEvent("section_view", {
    section_name: name,
    section_index: [...document.querySelectorAll("main .hero, main section")].indexOf(section) + 1
  });
}
