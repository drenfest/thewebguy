const imageRoot = "/images/ai-services/cleanup-tabs";

const reviewedCopy = [
  {
    title: "Broken layouts and responsive issues",
    intro: "A page can look finished on one screen and fall apart on another. Conflicting styles can leave text overlapping, images distorted, or important controls outside the visible area.",
    signs: ["Text or buttons overlap.", "Mobile visitors must scroll sideways to reach content.", "Images stretch or sections leave unusually large gaps."],
    review: ["Reproduce the problem at the affected screen sizes, including open menus and longer content.", "Trace conflicting styles, fixed dimensions, positioning rules, and hidden overflow.", "Check image proportions, spacing, and content visibility at different zoom levels."],
    outcome: "The repair focuses on readable content and usable controls across the screen sizes and states tested."
  },
  {
    title: "Routing and navigation cleanup",
    intro: "Links may point to unfinished pages or work only when someone arrives from the homepage. Broken routes and confusing menus can interrupt an otherwise useful visit.",
    signs: ["A saved link or page refresh opens an error.", "Back and forward buttons lead to unexpected views.", "Menus highlight the wrong page or open the wrong destination."],
    review: ["Test direct URLs, refreshes, redirects, and browser back and forward behavior.", "Inspect route definitions and hosting rules for the affected paths.", "Verify menu destinations, active states, and URL parameters used by the journey."],
    outcome: "Scoped routing fixes create more predictable paths through the pages and navigation states that were tested."
  },
  {
    title: "Forms, modals, and lead flow",
    intro: "A successful-looking form can still leave a lead missing from your inbox or CRM. Pop-ups and multi-step forms can also block visitors before they finish.",
    signs: ["Submit hangs or shows an unexplained error.", "A success message appears, but the expected record is missing.", "A pop-up will not close or a form step cannot be completed."],
    review: ["Trace a safe test submission through the browser and any accessible email, CRM, or saved-entry records.", "Inspect validation, loading states, repeat submissions, and success or failure responses.", "Test pop-up opening, closing, focus, and step navigation with keyboard and mobile inputs."],
    outcome: "The agreed repair supports a clearer submission path, with delivery confirmed only where available evidence supports it."
  },
  {
    title: "GA4/GTM tracking and conversion events",
    intro: "Reports can count one action twice or miss it entirely. A click, an accepted form, and a completed lead are different events, so tracking needs to match the outcome you care about.",
    signs: ["One test action produces multiple matching events.", "Completed inquiries are missing from the expected reports.", "Conversions appear without a matching completed action."],
    review: ["Reproduce agreed actions and compare tag firing, transmitted events, and available reporting evidence.", "Check duplicate installations, triggers, consent states, and navigation without a full page reload.", "Verify event names, parameters, and conversion definitions against the business outcome being measured."],
    outcome: "Tested tracking changes give you a clearer account of which actions are recorded and where reporting remains uncertain."
  },
  {
    title: "Schema, metadata, sitemap, robots, and internal links",
    intro: "Working pages can still have search settings that point elsewhere or block access. Page descriptions and structured data may also disagree with the content visitors actually see.",
    signs: ["Important pages show unexpected indexing exclusions.", "Shared links display the wrong title or image.", "Search tools flag broken links or structured-data errors."],
    review: ["Check status codes, canonical URLs, indexing directives, robots rules, and sitemap entries.", "Compare titles, descriptions, sharing previews, and structured data with the visible page content.", "Follow internal links to find broken destinations, redirect chains, and important pages with no useful links."],
    outcome: "The agreed cleanup aligns page descriptions, indexing settings, and internal links with the intended site structure."
  },
  {
    title: "Deployment, build, environment variable, and hosting issues",
    intro: "A site that runs on a laptop can fail when the host builds or serves it. Differences in configuration, runtime support, and service access can make the same code behave differently after publishing.",
    signs: ["The build fails or the deployed site stays blank.", "A page works locally but errors after publishing.", "The domain shows a certificate or connection warning."],
    review: ["Compare the working setup with available build logs, runtime errors, and host configuration.", "Verify build commands, runtime versions, required settings, and where browser or server code executes.", "Check domain routing, HTTPS, and service access against what the hosting platform supports."],
    outcome: "Agreed fixes target a repeatable deployment in the supported environment, with unresolved hosting or access requirements documented."
  },
  {
    title: "API, webhook, CRM, and database connections",
    intro: "Connected systems can accept a request but save incomplete, duplicate, or mismatched data. Finding the break means following the handoff across the systems and records available for review.",
    signs: ["CRM records arrive late, incomplete, or more than once.", "Orders or updates appear in one system but not another.", "Updates stop after an account or credential change."],
    review: ["Trace a safe sample through requests, responses, logs, and destination records where access permits.", "Verify authentication, field mapping, data types, and required values.", "Inspect timeouts, retries, duplicate prevention, and the order of updates."],
    outcome: "Scoped integration repairs make the handoff easier to verify, with owner checks and unresolved third-party dependencies identified."
  },
  {
    title: "Accessibility basics and real UX checks",
    intro: "A control can look right and still be difficult to reach, understand, or operate. Problems with keyboard access, labels, zoom, and feedback can prevent visitors from completing basic tasks.",
    signs: ["Tab skips controls or leaves you stuck.", "Zoom hides content or pushes actions offscreen.", "Inputs lack clear labels or errors are hard to find."],
    review: ["Walk key journeys using the keyboard and check focus order, visibility, and ways to exit dialogs.", "Inspect control names, labels, page structure, and screen-reader announcements in the affected flow.", "Measure text contrast and test zoom, touch targets, and error feedback at relevant screen sizes."],
    outcome: "Agreed accessibility repairs reduce specific barriers in the journeys reviewed, with remaining issues recorded."
  },
  {
    title: "Performance, assets, scripts, and bundle weight",
    intro: "A page may appear quickly but still respond slowly to taps, typing, or navigation. The delay can come from large assets, unnecessary code, rendering work, or services the page waits for.",
    signs: ["Images appear late or shift the content.", "Typing, tapping, or opening menus feels delayed.", "Performance drops after adding a widget or feature."],
    review: ["Measure loading, responsiveness, and layout movement under stated device and connection conditions.", "Inspect network requests, asset sizes, duplicate scripts, and code downloaded for each route.", "Profile slow interactions to locate blocking code, rendering work, and waits on outside services."],
    outcome: "Prioritized changes target the measured delays, with before-and-after results recorded under comparable conditions."
  },
  {
    title: "Error handling, validation, and edge cases",
    intro: "Normal use may work while invalid input, expired sessions, or failed requests leave the page stuck. Visitors need a clear way to correct mistakes or retry without losing progress.",
    signs: ["A spinner never finishes after an error.", "Correcting a field still leaves the form blocked.", "Retrying creates duplicates or loses entered information."],
    review: ["Exercise invalid input, empty results, expired sessions, timeouts, and denied requests in the affected flow.", "Check browser and server validation, error messages, and retention of appropriate user input.", "Verify that loading states clear and retries avoid repeating completed work after partial failures."],
    outcome: "Visitors have clearer recovery options for the failure cases covered by the agreed repair and retest."
  },
  {
    title: "Security basics and suspicious generated code",
    intro: "Generated code can expose sensitive values or trust actions that should be checked on the server. A focused review identifies specific risks and the access needed to address them.",
    signs: ["Private data is reachable while signed out.", "Secret credentials appear in files sent to the browser.", "Your host or scanner reports a security warning."],
    review: ["Inspect browser-delivered files for secrets and confirm which configuration values are intended to be public.", "Verify server-side access checks for the routes, records, uploads, and actions in scope.", "Review suspicious code, dependency warnings, and input handling against the application's actual exposure."],
    outcome: "Confirmed findings are prioritized for agreed remediation, with known remaining risks and specialist needs documented."
  },
  {
    title: "Maintainability and future editing",
    intro: "Small edits become risky when repeated components, conflicting styles, and tangled logic hide how the site works. Cleanup should make the next change easier while preserving useful content and working behavior.",
    signs: ["Changing one section unexpectedly changes another.", "The same fix must be repeated across several files.", "Nobody is sure which file or setting controls a feature."],
    review: ["Trace the affected feature through components, styles, data, and configuration.", "Identify repeated code, conflicting rules, and unused pieces before deciding what to consolidate.", "Check how proposed refactoring will preserve content, internal links, media, and existing behavior."],
    outcome: "Focused refactoring leaves the agreed area easier to change, with notes on its structure and the behavior checked."
  }
];

const media = [
  ["responsive-layout-cleanup.webp", "Responsive desktop, tablet, and mobile frames aligning into a consistent layout grid"],
  ["routing-navigation-cleanup.webp", "Website route map reorganized from broken branches into a clear navigation path"],
  ["forms-lead-flow.webp", "Form validation and lead handoff flowing through confirmation, email, and connected systems"],
  ["analytics-conversions.webp", "Analytics event pipeline connecting visitor actions to verified conversion checkpoints"],
  ["search-foundations.webp", "Search metadata, structured data, sitemap hierarchy, and internal links organized into one system"],
  ["deployment-hosting.webp", "Deployment pipeline connecting local build, environment configuration, secure hosting, and domains"],
  ["api-integrations.webp", "API, webhook, CRM, and database modules exchanging verified payloads through secure connections"],
  ["accessibility-ux.webp", "Accessible controls with focus paths, contrast layers, semantic structure, and touch targets"],
  ["performance-assets.webp", "Heavy assets and scripts compressed into an optimized fast-loading delivery path"],
  ["errors-validation.webp", "Application paths handling invalid input, loading, failed responses, and recovery states"],
  ["security-code.webp", "Generated code passing through secret detection, dependency checks, and secure boundaries"],
  ["maintainability.webp", "Clean modular code architecture with reusable components and an organized editing path"]
];

export const aiCleanupTabs = reviewedCopy.map((item, index) => ({
  ...item,
  image: { src: `${imageRoot}/${media[index][0]}`, alt: media[index][1] }
}));
