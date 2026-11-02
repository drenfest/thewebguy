import updates from "./editorial-updates.json" with { type: "json" };

export { updates };
export const cleanTitle = (title = "") => title.replace(/\s*\|\s*The Web Guy$/, "");

const workflowFamilies = {
  implementation: { heading: "From an agreed task to checked website output", body: "Agree the requirement, affected pages or templates, scope, cost, and acceptance checks. Implement the approved change. Check the resulting website output and affected user path. Return completion notes and identify dependencies before expanding the work." },
  support: { heading: "A task queue with clear approvals", body: "Agree the next priorities, expected results, cost basis, access, and reviewer. Complete the approved tasks and check the affected pages or workflows. Return a completion record and identify blocked or newly discovered work before adding it to the scope." },
  agency: { heading: "From an assigned brief to agency review", body: "Agree the assigned work, cost, acceptance criteria, reviewer, and communication boundaries. Confirm the working environment and release rules. Implement the approved change, check the affected behavior, and return the work with test notes and any blocker for your agency’s review." },
  automation: { heading: "From a repeated task to a usable tool", body: "Agree the input, expected output, operating requirements, failure behavior, and cost. Build the scoped script, dashboard, or internal tool. Test normal, missing, and invalid inputs. Verify the result and document access, operating instructions, and maintenance boundaries." },
  performance: { heading: "From a measured bottleneck to a checked change", body: "Agree the affected URLs, scope, cost, and comparison method. Collect the relevant loading evidence and available field data. Make the approved asset, script, template, or cache change. Compare the same URLs under recorded test conditions and return the results with remaining platform or third-party limits." },
  measurement: { heading: "From a measurement question to a verified event", body: "Agree the visitor action, success condition, event destination, scope, and cost. Implement the approved measurement or investigate the existing mismatch. Test successful and rejected actions, duplicate firing, and relevant consent states. Return event definitions, test results, and any reporting or provider dependency." },
  storefront: { heading: "From a store requirement to a reviewed change", body: "Agree the platform, affected customer or admin task, cost, and safe testing approach. Make the approved template, product-data, extension, or connected-workflow change. Check the product, cart, order, or reporting path relevant to that scope. Return the work for review with the checks performed and remaining platform dependencies." }
};
const workflowFamilyFor = {
  "wordpress-support":"support", "wordpress-help":"support", "hourly-wordpress-developer":"support", "website-support-for-agencies":"agency",
  "agency-overflow":"agency", "white-label-wordpress-support":"agency", "automation-internal-tools":"automation",
  "site-speed-performance":"performance", "analytics-tracking":"measurement", "conversion-tracking-troubleshooting":"measurement",
  "seo-audit-implementation":"implementation", "technical-seo-developer":"implementation", "schema-implementation-service":"implementation",
  "ecommerce-support":"storefront", "woocommerce-support":"storefront", "shopify-liquid-support":"storefront"
};

// Link only the supplied phrase, keeping the rest of the authored sentence intact.
export function linkedCopy(copy = "", links = []) {
  const parts = [];
  let remaining = copy;
  while (remaining) {
    const match = links.map((link) => ({ ...link, index: remaining.toLowerCase().indexOf(link.text.toLowerCase()) }))
      .filter((link) => link.index >= 0).sort((a, b) => a.index - b.index || b.text.length - a.text.length)[0];
    if (!match) { parts.push(remaining); break; }
    if (match.index) parts.push(remaining.slice(0, match.index));
    parts.push({ text: remaining.slice(match.index, match.index + match.text.length), href: match.href });
    remaining = remaining.slice(match.index + match.text.length);
  }
  return parts;
}

export function applyEditorialService(source) {
  const patch = updates.services[source.slug];
  if (!patch) return source;
  const service = { ...source, sections: source.sections.map((section) => ({ ...section })), faqs: source.faqs?.map((faq) => [...faq]) };
  for (const key of ["intro", "h1", "title", "meta"]) if (patch[key]) service[key] = patch[key];
  service.intake = patch.intake;
  service.workflow = patch.workflow || workflowFamilies[workflowFamilyFor[source.slug]];
  service.evidenceSlugs = patch.links.filter((link) => link.href.startsWith("/fix-notes/")).map((link) => link.href.split("/")[2]);
  if (source.slug === "woocommerce-checkout-error-fix") service.evidenceHeading = "Related WordPress repair examples";
  if (source.slug === "woocommerce-support") service.evidenceHeading = "Related website implementation notes";
  const sections = patch.sections || {};
  const evidenceCopy = sections["Relevant Web Fixes"] || sections["Proof section heading"];
  if (evidenceCopy) {
    const titles = {
      "automation-internal-tools": "Internal-tool example",
      "ecommerce-support": "Storefront implementation example",
      "fix-broken-wordpress-site": "WordPress recovery example",
      "security-hosting-reliability": "Recovery investigation example",
      "shopify-liquid-support": "Shopify theme implementation",
      "technical-seo-developer": "Related implementation note",
      "white-label-wordpress-support": "WordPress build evidence",
      "wordpress-emergency-support": "Relevant recovery notes"
    };
    service.evidenceHeading = titles[source.slug];
    service.evidenceIntro = evidenceCopy.replace(new RegExp(`^${service.evidenceHeading}[: ]+`, "i"), "");
    service.evidenceLinks = patch.links;
  }
  const replace = (pattern, heading, body, links = patch.links) => {
    const index = service.sections.findIndex((section) => pattern.test(section.h2));
    const section = { h2: heading, body, paragraphs: [linkedCopy(body, links)] };
    if (index >= 0) service.sections[index] = section;
    else service.sections.push(section);
  };
  const add = (heading, body) => replace(new RegExp(`^${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`), heading, body);
  switch (source.slug) {
    case "technical-seo-developer":
      replace(/Internal-link and cannibalization/, "What to include in an SEO development brief", sections['Entire “Internal-link and cannibalization checks” section'].replace(/^What to include in an SEO development brief /, ""));
      service.sections = service.sections.map((section) => section.cards ? { ...section, cards: section.cards.map((card, index) => section.h2.includes("Examples of SEO") && index === 1 ? [card[0], card[1].replace(/Result:[\s\S]*$/, sections["Second implementation example"]), ...card.slice(2)] : card) } : section);
      break;
    case "agency-overflow":
      replace(/Agency overflow usually touches/, "Choose the agency support path", sections['Section beginning “Agency overflow usually touches these lanes”'].replace(/^Choose the agency support path /, ""));
      break;
    case "ecommerce-support":
    case "security-hosting-reliability":
      service.audience = sections["Fit-section opening"];
      service.audienceHeading = source.slug === "ecommerce-support" ? "Technical help for the part of your store that needs attention" : "Troubleshoot the website and its hosting layers";
      break;
    case "react-static-sites":
      service.sections = service.sections.map((section) => section.body?.includes("If the site needs a CMS") ? { ...section, body: section.body.replace(/If the site needs a CMS[^.!?]*[.!?]/, sections["Architecture-fit paragraph"]) } : section);
      break;
    case "wordpress-support":
      replace(/When hourly or project/, "When hourly or project-based WordPress help makes sense", sections["Hourly or project-based fit paragraph"]);
      break;
    case "website-fixes":
      replace(/Where broken-site fixes usually lead/, "Start with a reproducible symptom", sections["Second troubleshooting-route paragraph"]);
      break;
    case "woocommerce-support":
      replace(/WooCommerce checkout symptoms/, "When checkout is the main problem", sections['“WooCommerce checkout symptoms and possible issues” section'].replace(/^When checkout is the main problem /, ""), [{ text: "WooCommerce checkout repair", href: "/services/woocommerce-checkout-error-fix/" }]);
      break;
    case "wordpress-plugin-conflict-help":
      service.h1 = sections.H1;
      replace(/Plugin conflict repair examples/, "Interactions I investigate", "These are interactions to investigate, with the change guided by the failed action and the available evidence.");
      service.sections.find((section) => section.h2 === "Interactions I investigate").cards = [
        ["Script timing", "A checkout or form can fail when a required script runs after code that depends on it. I check the failed action and loading order before deciding whether a narrow exclusion is appropriate."],
        ["Form and security settings", "A submission can succeed in the browser while a later request is blocked. I trace the handoff and relevant logs before changing an allowance."],
        ["Editor and asset versions", "An update can expose incompatible scripts or styles. I compare the failing editor path and component versions, then test the proposed compatibility change."]
      ];
      break;
    case "fix-wordpress-issue": {
      const answer = sections.FAQ;
      service.faqs = service.faqs.map((faq) => faq[0] === "Can this be a one-off task?" ? ["What if the issue turns out to need a larger change?", answer.replace(/^What if the issue turns out to need a larger change\? /, "")] : faq);
      break;
    }
    case "schema-implementation-service":
      service.faqs.push(["Will correct schema guarantee a rich result?", sections["FAQ, after the existing comparison answer"].replace(/^Will correct schema guarantee a rich result\? /, "")]);
      break;
    case "ga4-gtm-setup-help":
      add("Keep form details out of ordinary analytics events", sections['After “Common form and conversion tracking setups”'].replace(/^Keep form details out of ordinary analytics events /, ""));
      break;
    case "ongoing-webmaster-support":
      add("Before ongoing work starts", sections['After “Hourly or project-based support expectations”'].replace(/^Before ongoing work starts /, ""));
      break;
    case "conversion-tracking-troubleshooting":
      add("Check that the reports are comparing the same thing", sections['Before “What conversion troubleshooting checks”'].replace(/^Check that the reports are comparing the same thing /, ""));
      {
        const comparison = service.sections.pop();
        const index = service.sections.findIndex((section) => section.h2 === "What conversion troubleshooting checks");
        service.sections.splice(index < 0 ? 0 : index, 0, comparison);
      }
      break;
    case "site-speed-performance":
      add("How the improvement is checked", sections['After “Realistic Core Web Vitals and Lighthouse expectations”'].replace(/^How the improvement is checked /, ""));
      break;
  }
  return service;
}

export function applyEditorialSkill(skill) {
  const patch = updates.skills[skill.slug];
  if (!patch) return skill;
  Object.assign(skill, Object.fromEntries(["title", "h1", "meta"].filter((key) => patch[key]).map((key) => [key, patch[key]])));
  if (patch.copy["Hero paragraph"]) skill.intro = patch.copy["Hero paragraph"];
  if (patch.table) skill.projectTable = {
    heading: "Connect the problem, evidence, and investigation",
    columns: [{ key: "problem", label: "Problem" }, { key: "evidence", label: "Evidence to start with" }, { key: "work", label: "Work to investigate" }],
    rows: patch.table
  };
  if (skill.slug === "programmatic-seo") skill.planningIntro = Object.entries(patch.copy).find(([heading]) => heading.includes("Do you create doorway pages?"))?.[1];
  if (skill.slug === "ga4-gtm-measurement-integrity") skill.editorialLinks = [...patch.links, {text:"Analytics & Tracking",href:"/services/analytics-tracking/"}, {text:"system handoff",href:"/services/website-integration-help/"}];
  if (skill.slug === "shopify-plus-liquid") skill.relatedServices = ["shopify-liquid-support", ...skill.relatedServices.filter((slug) => slug !== "shopify-liquid-support")];
  if (skill.slug === "rest-api-webhook-integrations" && !skill.relatedServices.includes("website-integration-help")) skill.relatedServices.push("website-integration-help");
  if (skill.slug === "google-merchant-center-product-data") skill.faqs = skill.faqs.map((faq) => /fix every Merchant/i.test(faq[0]) ? [faq[0], patch.copy['“Can you fix every Merchant Center issue?” answer']] : faq);
  if (skill.slug === "schema-structured-data") skill.faqs.push(["Does FAQ markup produce a Google FAQ rich result?", patch.copy["Rich-results FAQ, after the existing no-guarantee answer"]]);
  return skill;
}

export function applyEditorialNote(note) {
  const patch = updates.notes[note.slug];
  if (!patch) return note;
  const copy = patch.copy;
  if (patch.title) { note.title = cleanTitle(patch.title); note.metaTitle = patch.title; }
  if (patch.meta) note.metaDescription = patch.meta;
  if (copy.Result) note.resultSummary = copy.Result;
  if (copy["The problem"]) note.problemSummary = copy["The problem"];
  if (copy["Hero description"]) note.excerpt = copy["Hero description"];
  if (copy["What I changed list"]) note.whatIChanged = [copy["What I changed list"]];
  if (Object.keys(copy).length || patch.title || patch.meta) note.lastUpdated = "2026-11-02";
  note.editorialBridge = copy["Where this fix usually leads next"] || copy["How this relates to your project"];
  if (note.slug === "cleaned-up-crawl-paths-google-slow-to-index") note.editorialBridge = "Crawl analysis and internal linking can identify the contextual routes and page distinctions that need attention.";
  if (note.slug === "fixed-wordpress-critical-error-caused-cache-plugin") note.editorialBridge = "For failures caused by interacting extensions, use WordPress plugin-conflict help to scope the investigation.";
  note.editorialLinks = patch.links;
  const primary = patch.links.find((link) => /^\/services\//.test(link.href));
  if (primary) note.relatedServices = [primary.href.split("/")[2], ...(note.relatedServices || []).filter((slug) => slug !== primary.href.split("/")[2])];
  if (note.slug === "completed-requested-site-modifications-output-review") {
    note.compact = true;
    note.excerpt = copy["Quick summary and repeated change/result sections"];
  }
  return note;
}

export function applyEditorialArticle(post) {
  const patch = updates.articles[post.slug];
  if (!patch) return post;
  for (const key of ["title", "h1", "meta"]) if (patch[key]) post[key] = patch[key];
  const entries = Object.entries(patch.copy);
  const copy = (pattern) => entries.find(([heading]) => pattern.test(heading))?.[1] || "";
  const heading = (section) => Array.isArray(section) ? section[0] : section.heading;
  // Normalize older tuple sections so each edit has one explicit destination.
  post.sections = (post.sections || []).map((section) => Array.isArray(section) ? { heading: section[0], body: section[1] } : { ...section });
  const section = (pattern) => post.sections.find((item) => pattern.test(heading(item)));
  const replace = (pattern, value) => {
    const target = section(pattern);
    if (target && value) target.body = [linkedCopy(value, patch.links)];
  };
  const append = (pattern, value) => {
    const target = section(pattern);
    if (target && value) target.body = [...(Array.isArray(target.body) ? target.body : [target.body]), linkedCopy(value, patch.links)];
  };
  const add = (after, title, value) => {
    if (!value) return;
    const index = post.sections.findIndex((item) => after.test(heading(item)));
    post.sections.splice(index < 0 ? post.sections.length : index + 1, 0, { heading: title, body: [linkedCopy(value.startsWith(`${title} `) ? value.slice(title.length + 1) : value, patch.links)] });
  };
  switch (post.slug) {
    case "ai-built-website-not-ready-to-launch":
      append(/Check routing/, copy(/After “Check routing/));
      append(/Check forms/, copy(/After “Check forms/));
      append(/Check forms/, "For a failed action or submission, see forms and modals not working.");
      break;
    case "broken-layouts-mobile-website-fixes": {
      replace(/^Common signs$/, copy(/Common signs/));
      const target = section(/Quick WordPress layout/);
      target.checklist = [copy(/First two items/), ...target.checklist.filter((item) => !/Clear page, site|Disable CSS\/JavaScript optimization/.test(item))];
      break;
    }
    case "cms-plugin-theme-weirdness":
    case "forms-modals-not-working":
    case "embeds-iframes-widgets-breaking-pages":
    case "tracking-scripts-pixels-broken":
      replace(/^Practical fix path$/, copy(/Practical fix path/));
      if (post.slug === "embeds-iframes-widgets-breaking-pages") add(/^Practical fix path$/, "If the frame is blank", copy(/Immediately after/));
      if (post.slug === "tracking-scripts-pixels-broken") replace(/^Common signs$/, copy(/Common symptoms/));
      if (post.slug === "forms-modals-not-working") {
        append(/^Practical fix path$/, "Use GTM form tracking for GA4 after confirming that the submission succeeds.");
        post.links = post.links.map((item) => item[1] === "/services/api-integrations/" ? ["Website Integration Help", "/services/website-integration-help/", "Use this when the form accepts a submission but the lead, fields or confirmation fail to reach the CRM, email system or other destination."] : item);
      }
      break;
    case "css-javascript-errors-website-bugs":
      post.heroIntro = "A broken menu, form, or layout can come from CSS, JavaScript, an overlay, or a failed request. Use the observed behavior to choose the first check.";
      post.intro = [linkedCopy(copy(/Opening paragraph/), patch.links)];
      post.sections = post.sections.filter((item) => !/Immediate JavaScript|Symptom-to-cause table for JavaScript|Common JavaScript error|JavaScript first, CSS second|Debugging workflow|Internal-link anchors/.test(item.heading));
      post.sections.unshift({ heading: "When the action points to JavaScript", body: [linkedCopy("Use the JavaScript troubleshooting guide for the detailed Console, Network and script-ownership sequence. When markup and state are correct, continue with the layout checks below.", patch.links)] });
      post.diagnosticTable = {
        heading: "Choose the layer from the evidence",
        columns: [{key:"symptom",label:"What happens"},{key:"evidence",label:"What to check next"},{key:"decision",label:"Likely repair decision"}],
        rows: [
          {symptom:"The menu’s open state changes, but it remains hidden",evidence:"Computed display, visibility, overflow and stacking",decision:"Correct the style or container rule that hides the open menu"},
          {symptom:"A click never reaches the button",evidence:"The element under the pointer and any overlay",decision:"Fix the blocking element before changing the event handler"},
          {symptom:"The click reaches the control, but Console shows a relevant error",evidence:"The first failing line and the script that owns it",decision:{text:"Follow the JavaScript troubleshooting guide",href:"/blog/javascript-issues-website-troubleshooting/"}},
          {symptom:"The action sends a failed request",evidence:"The request URL, status and response",decision:"Repair the endpoint, permissions or data expected by that request"}
        ]
      };
      break;
    case "fix-my-broken-website":
      post.intro = [linkedCopy(copy(/Opening explanatory paragraph/), patch.links), linkedCopy("Diagnose the website symptom first if you cannot yet identify the failure.", patch.links)];
      add(/Check the change timeline/, "Example: the form failed after a plugin update", copy(/After “Check the change timeline/));
      append(/Example: the form failed/, "See WordPress broken after a plugin update for the recovery checks.");
      break;
    case "google-ads-conversion-tracking-not-working": {
      const target = section(/Compare test actions/);
      target.checklist = target.checklist.map((item) => /Ad-platform conversion appears after expected delay|test.*conversion|conversion.*test/i.test(item) ? "Tag Assistant verifies the intended conversion action." : item);
      target.afterBody = [linkedCopy(copy(/Reality checks/).replace(/^Tag Assistant verifies the intended conversion action\. /, ""), patch.links)];
      append(/Check GA4 imports/, copy(/Check GA4 imports/));
      break;
    }
    case "gtm-form-tracking-ga4":
      section(/Choose the right GTM trigger/).checklist = section(/Choose the right GTM trigger/).checklist.map((item) => /Click trigger/.test(item) ? copy(/Common trigger methods/) : item);
      post.faqs = post.faqs.map((faq) => /Should I track a button click/.test(faq[0]) ? [faq[0], copy(/FAQ answer/)] : faq);
      add(/Choose the right GTM trigger/, "Example: an AJAX form with a success callback", copy(/After “Choose the right GTM trigger/));
      break;
    case "javascript-issues-website-troubleshooting":
      post.intro = [linkedCopy(copy(/First explanatory/), patch.links), linkedCopy(copy(/Paragraph beginning/), patch.links)];
      add(/Separate WordPress\/plugin/, "Example: a menu click throws a TypeError", copy(/After the paragraph/));
      break;
    case "need-a-page-live-fast":
      replace(/A page needs more than/, copy(/A page needs more than/));
      section(/A page needs more than/).listTitle = "Required checks and useful supporting sections";
      section(/A page needs more than/).checklist = [
        "Required: a clear heading, accurate offer, intended audience, and working primary action",
        "Required: usable mobile layout, essential routes, and working links",
        "For lead pages: verify the form and its intended destination",
        "For campaigns that depend on reporting: verify the agreed measurement under the tested consent settings",
        "Add benefits, process details, FAQs, and proof when they answer the visitor’s decision questions"
      ];
      replace(/What makes a page good enough/, copy(/What makes a page good enough/));
      append(/What makes a page good enough/, "Use the AI-built website launch checklist when reviewing a generated site.");
      break;
    case "seo-audit-done-now-implement-it": {
      const value = copy(/Replace the “Proof example/);
      post.exampleBlock = { heading: "Turn one audit finding into a testable task", copy: value.replace(/^Turn one audit finding into a testable task /, ""), href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls", label: "Google’s canonical guidance" };
      append(/Not every SEO recommendation/, copy(/After “Not every SEO recommendation/));
      break;
    }
    case "something-broke-on-your-website":
      post.intro = ["If something broke on your website, start with the symptom, when it started, and what should happen instead. Start with the symptom below, then open the guide that matches the failure."];
      replace(/When the real request/, copy(/Replace the body\/list/).replace(/^Once you know what failed /, ""));
      section(/When the real request/).heading = "Once you know what failed";
      delete section(/Once you know/).checklist;
      break;
    case "website-data-systems-not-connecting":
      delete section(/Data problems usually start/).flow;
      section(/Data problems usually start/).flowBranches = [
        { label: "Lead delivery", steps: ["Accepted form", "Saved entry", "Email or CRM"] },
        { label: "Measurement", steps: ["Confirmed submission success", "GTM event", "GA4", "Report"] }
      ];
      append(/Data problems usually start/, copy(/Flow displayed/));
      post.exampleBlock = { heading: "Follow one test lead", copy: copy(/Replace “Proof example/).replace(/^Follow one test lead /, "") };
      break;
    case "woocommerce-checkout-not-working":
      replace(/Look for script, cache/, copy(/Look for script, cache/));
      append(/Verify order data/, copy(/Verify order data/));
      break;
    case "wordpress-site-broken-after-plugin-update":
      add(/Recover carefully/, "If the dashboard will not open", copy(/insert after/));
      append(/Recover carefully/, copy(/add before/));
      break;
  }
  const related = copy(/Opening.*[Rr]elated.symptoms/);
  if (related) post.relatedSymptoms = linkedCopy(related, patch.links);
  post.references = patch.links.filter((link) => link.href.startsWith("https://"));
  // The broad guide's headings changed; derive its TOC from the actual sections.
  if (["css-javascript-errors-website-bugs", "something-broke-on-your-website"].includes(post.slug)) delete post.toc;
  if (post.slug === "ai-built-website-not-ready-to-launch") post.categories = ["seo-pages-ai"];
  return post;
}
