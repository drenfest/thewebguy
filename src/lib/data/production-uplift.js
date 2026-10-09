const link = (text, href, title = `View ${text}`) => ({ text, href, title });

const quoteBoundary = "Start with a free quote. Technical investigation and implementation are paid work, scoped and agreed before they begin.";

export const productionServiceUplifts = {
  "contact-form-not-working-wordpress": {
    title: "WordPress Contact Form Repair | The Web Guy",
    meta: "WordPress form not sending emails or getting stuck? Get help with delivery, CAPTCHA, and missing submissions. Start with a free quote.",
    h1: "Contact Form Not Working in WordPress?",
    eyebrow: "WordPress form troubleshooting",
    intro: "A form can look fine and still fail when someone tries to contact you. I troubleshoot missing emails, stuck submissions, CAPTCHA problems, and broken lead handoffs. Then I repair and test the agreed part of the process.",
    cta: "Get a Form Repair Quote",
    heroSecondary: "See Form Fix Examples",
    heroSecondaryHref: "#form-fix-examples",
    heroNote: "Start with a free quote. Diagnostics and repairs are paid work, scoped and agreed before they begin.",
    scope: {
      heading: "Show me where the form fails",
      paragraphs: [
        "Send the page URL and what happens when you submit it. Tell me what should happen instead: an email, a saved entry, a CRM record, or a confirmation message.",
        "The plugin name and a screenshot help, but you do not need to diagnose the problem first. Do not send passwords, API keys, or customer submissions in the initial request."
      ]
    },
    sections: [
      {
        h2: "Is this what your form is doing?",
        cards: [
          ["Success message, but no email", "The form may accept the submission while its notification fails later. I check the submission, sending configuration, and available delivery evidence separately."],
          ["A spinner that never finishes", "A browser error, failed request, validation problem, or script conflict may prevent the form from completing. The visible loading state is where the investigation starts, not the diagnosis itself."],
          ["CAPTCHA missing or refusing to load", "I check the visitor-side behavior, relevant script settings, and the form’s spam-protection integration before making a targeted change."],
          ["It works for you, but not for visitors", "Logged-in and logged-out behavior can differ. Testing needs to include the public page, relevant cache conditions, and the affected device or browser."],
          ["A lead arrives with information missing", ["When the form submits but the receiving tool drops fields, the issue may be in the handoff rather than the form itself. That is part of ", link("website integration troubleshooting", "/services/website-integration-help/"), "."]],
          ["The lead arrives, but reporting is wrong", ["A missing or duplicated analytics event is a different problem from a missing inquiry. ", link("Conversion tracking troubleshooting", "/services/conversion-tracking-troubleshooting/"), " checks the measurement without confusing it with actual delivery."]]
        ]
      },
      {
        h2: "Check the whole submission path",
        paragraphs: [
          "A useful repair follows a test submission from the visitor’s browser to its intended destination. I look at the form response, any saved entry, the notification or API request, and the receiving system’s available evidence.",
          "For email problems, a successful send request is not the same thing as a confirmed message in the intended mailbox. For CRM problems, a successful HTTP response is not enough when the resulting record is incomplete. The completion note explains which parts were verified and which depend on access to another system.",
          ["Where script loading or plugin interactions are involved, I narrow the change rather than treating every optimization or security feature as something to switch off. Broader plugin and theme problems can be handled through ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), "."]
        ]
      }
    ],
    proofId: "form-fix-examples",
    proofHeading: "Form problems I have worked through",
    proof: [
      ["Repairing form-email delivery", "A contact form was failing because of its sending path. The work replaced that path with authenticated API-based sending and checked both backend and frontend tests. This is an example of investigating delivery rather than assuming the visible form was the whole problem.", "/fix-notes/fixed-contact-form-email-delivery-authenticated-sending/"],
      ["Getting reCAPTCHA loading again", "A visitor-facing form had a reCAPTCHA loading problem tied to delayed scripts. Targeted exclusions and clean-visitor testing restored initialization while leaving the broader optimization setup in place.", "/fix-notes/repaired-recaptcha-loading-without-disabling-page-optimization/"]
    ],
    workflowHeading: "How the repair is scoped and tested",
    workflow: [
      ["Start with the symptom", "Send the URL, expected result, actual result, and when you noticed the problem. I use that context to scope the next step, not to promise a diagnosis without checking the site."],
      ["Agree on paid investigation or a defined repair", "We agree on scope, cost, access, and a safe testing approach before technical work begins. If the cause is still unknown, the first paid step can be diagnosis."],
      ["Make the agreed change", "The repair may involve form settings, authenticated sending, a script interaction, field mapping, or another confirmed failure point. Work beyond the agreed scope is raised before proceeding."],
      ["Retest and hand over", "I document the test conditions, what changed, the observed result, and any remaining dependency. When the destination is an inbox or CRM, the relevant receipt or record is part of verification when access allows."]
    ],
    deliverablesHeading: "What you receive",
    deliverables: [
      "You receive the agreed changes, a concise explanation of the identified issue, a record of the checks performed, and any follow-up needed from your host, mail provider, or connected tool. When useful, that includes a repeatable test you or your team can run after future updates.",
      "Recovering older inquiries is a separate question. Entries can only be recovered when they were stored somewhere accessible; repairing delivery does not recreate information that was never saved."
    ],
    faqs: [
      ["Why does the form say “sent” when no email arrives?", "That message may mean the form accepted the request, not that the intended recipient received the email. I check the form response, notification settings, sending path, and available delivery evidence to separate those steps."],
      ["Will installing an SMTP plugin fix it?", "Not automatically. Authenticated sending may be appropriate, but the issue could also involve the form configuration, script behavior, provider settings, or a connected system. The right repair follows the evidence rather than a plugin recommendation by default."],
      ["Can you help without replacing my form plugin?", "The existing form is the starting point. A replacement is only proposed when the findings justify it, with the implications explained before that change is agreed."],
      ["Can you fix reCAPTCHA without turning off all optimization?", "I look for the specific script or configuration interaction first. Some cases can be corrected with a narrow change; the exact approach depends on the form and optimization setup."],
      ["Can you recover the leads I missed?", "Possibly, when submissions were saved in WordPress, a provider log, or another accessible system. I cannot promise recovery before checking whether those records exist."],
        ["What should I send, and what does it cost?", ["A one-off form repair can be scoped. Send the URL, what the form does, what it should do, any recent change you know about, and any access constraints. Include a screenshot or notes if helpful, with private details hidden. The quote is free. Diagnostics and repair are paid work with scope and cost agreed first; ", link("how quotes work", "/rate/"), " explains that boundary."]]
    ],
    finalCta: ["Let’s find where the inquiry stops", "Send the form URL and describe the failure. You do not need to know whether the problem is WordPress, email delivery, CAPTCHA, or the receiving tool to ask for a quote.", "Get a Form Repair Quote", "Free quote. Paid investigation and repair only after scope and cost are agreed."],
    related: [
      ["WordPress troubleshooting", "Investigate broader plugin, theme, script, cache, or update problems.", "/services/wordpress-troubleshooting/"],
      ["Website integration repair", "Trace missing fields and failed handoffs between the form and another system.", "/services/website-integration-help/"],
      ["Conversion tracking troubleshooting", "Check measurement when the inquiry arrives but reporting is missing or duplicated.", "/services/conversion-tracking-troubleshooting/"]
    ]
  },
  "website-integration-help": {
    title: "Website Integration Troubleshooting | The Web Guy",
    meta: "Missing CRM fields, failed webhooks, or broken website handoffs? I trace the failure, repair the agreed connection, and verify the result.",
    h1: "Website Integrations Not Working as Expected?",
    eyebrow: "Repair existing website connections",
    intro: "A form submits, but the CRM record is incomplete. A webhook fires, but the next step never happens. I trace broken website connections, repair the agreed failure point, and test what reaches the receiving system.",
    cta: "Get an Integration Repair Quote",
    heroSecondary: "See Integration Repair Examples",
    heroSecondaryHref: "#integration-repair-examples",
    heroNote: quoteBoundary,
    scope: { heading: "What should connect, and what is missing?", paragraphs: ["Tell me which page or action starts the process, which system should receive the information, and what happens instead. A test timestamp or redacted error message is useful.", "Do not send live customer records, access tokens, or API secrets with the quote request. Access and safe test data are arranged after the scope is clear."] },
    sections: [
      { h2: "Common handoff problems", cards: [
        ["Leads arrive with missing fields", "The form and receiving system may disagree about names, required values, optional fields, or data formats."],
        ["A webhook is rejected or silently ignored", "The source may send a request that the endpoint cannot authenticate, validate, or process as expected."],
        ["The same action creates duplicates", "Retries, repeated listeners, double submissions, or receiver behavior may be creating more than one record. The repair needs to establish where duplication begins."],
        ["The workflow stopped after an update", "A form edit, changed endpoint, expired credential, integration setting, or platform change can affect a previously working connection."],
        ["Website activity and reports disagree", ["The actual record and the analytics event are different checks. ", link("Conversion tracking troubleshooting", "/services/conversion-tracking-troubleshooting/"), " is appropriate when the handoff works but measurement does not."]],
        ["Need a connection that does not exist yet?", [link("API integration development", "/services/api-integrations/"), " covers planning and building a new workflow rather than repairing an existing one."]]
      ]},
      { h2: "Follow the information, not the assumptions", cards: [
        ["The action", "Confirm that the form, checkout, button, or scheduled task actually initiates the expected request."],
        ["The data", "Compare submitted values with the agreed receiving format: field names, required values, identifiers, empty fields, and relevant source information."],
        ["The destination", "Check where the request is being sent and whether the receiving tool creates, updates, rejects, delays, or duplicates the intended record."],
        ["The response", "Examine available status codes, validation messages, authentication failures, timeouts, and delivery logs. A nominally successful response still needs to match the intended outcome."],
        ["The measurement", "Check analytics separately when it is in scope, so a click or failed submission is not mistaken for a completed handoff."],
        ["The recovery", "Identify what the website can change, what requires the receiving provider, and whether the agreed repair needs better error handling, controlled retries, or clearer logging."]
      ]}
    ],
    proofId: "integration-repair-examples", proofHeading: "Repairs with a documented trail",
    proof: [
      ["Tracing missing form-to-CRM fields", "Submissions were reaching a CRM, but some fields were missing. The work aligned field names and payload mapping, checked controlled samples, and documented the required fields so the handoff was easier to verify.", "/fix-notes/verified-form-to-crm-api-handoff-dropping-fields/"],
      ["Removing competing call-tracking loaders", "A static site had conflicting number-replacement scripts and navigation that could skip rescans. The implementation coordinated the tracking loader and route changes while retaining the established booking behavior.", "/fix-notes/added-call-tracking-tag-management-site-verification-static-site/"]
    ],
    workflowHeading: "A bounded repair, not an open-ended rebuild",
    workflow: [
      ["Agree the affected workflow", "We first agree on the affected workflow, available access, paid investigation or implementation scope, and how success will be checked."],
      ["Reproduce and locate", "I reproduce the issue with safe test data, locate the responsible step, and make the agreed change."],
      ["Keep new findings visible", "A third-party limitation or undocumented dependency may require a different scope. Those findings are made visible before additional work is undertaken."],
      ["Retest the handoff", "Retesting compares the initiating action with the resulting record or response, including relevant duplicate, timeout, invalid-input, or retry cases in the agreed test set."]
    ],
    deliverablesHeading: "What the handoff includes",
    deliverables: ["You receive a summary of the identified failure, the code or configuration changed, the tests performed, and any outstanding provider or access dependency. Field-mapping notes and safe reproduction steps are included when needed to maintain the connection.", "The work does not automatically include rebuilding every connected tool, migrating historical records, adding continuous monitoring, or providing ongoing incident coverage. Those are separate requirements to scope."],
    faqs: [
      ["The API returns success. Why is the record still wrong?", "The request may be accepted without every field being processed as expected. I compare the outgoing data, the receiver’s rules, and the resulting record rather than treating the status code as the entire test."],
      ["Can you work on an integration another developer built?", "Yes, subject to the available code, documentation, and access. The first paid step may be understanding the existing implementation and establishing a safe way to test it."],
      ["Will you need access to both systems?", "Often that makes verification more complete. When access is limited, I explain what can be checked from the available logs or responses and what the other system’s owner must confirm."],
      ["Can you stop duplicate records?", "I can investigate where duplication starts and scope the appropriate fix. The solution depends on how the source sends requests and how the receiving system identifies or updates records."],
      ["Does this include a new integration?", ["This service starts with an existing connection that is failing or incomplete. Building a new connection is covered by ", link("API integration development", "/services/api-integrations/"), "; describe the outcome and I will scope the appropriate work."]],
      ["Can missing historical data be restored?", "Only when the source information still exists and can be safely reconciled. Backfills or recovery work need their own checks so a repair does not introduce duplicates or overwrite valid records."]
    ],
    finalCta: ["Find the break between your website and tools", "Send the starting page, the destination system, and one example of what should happen versus what happens now. I will quote the next step based on the workflow and access available.", "Get an Integration Repair Quote", "Free quote. Paid work begins only after scope and cost are agreed."],
    related: [["Build a new integration", "Plan and implement a new or extended connection between systems.", "/services/api-integrations/"], ["Repair a WordPress contact form", "Trace a form submission, notification, CAPTCHA, or CRM handoff.", "/services/contact-form-not-working-wordpress/"], ["Fix conversion measurement", "Check tags and events when the operational handoff works.", "/services/conversion-tracking-troubleshooting/"]]
  },
  "api-integrations": {
    title: "API Integration Development | The Web Guy",
    meta: "Connect your website to CRMs, APIs, and business tools. Scoped development for forms, webhooks, and data workflows, with testing and handoff.",
    h1: "API Integrations for Websites and Business Tools",
    eyebrow: "Build useful connections between your systems",
    intro: "Need website inquiries in your CRM, form data in an internal tool, or an existing workflow extended? I build API integrations and webhooks around the information you need to move, the systems you use, and the result your team needs.",
    cta: "Get an Integration Build Quote",
    heroSecondary: "See Integration Build Examples", heroSecondaryHref: "#integration-build-examples", heroNote: quoteBoundary,
    scope: { heading: "Describe the workflow in plain language", paragraphs: ["Tell me what starts the process, which systems are involved, what information should move, and what a successful result looks like. Link to public API documentation when you have it.", "You do not need to design the integration yourself. Feasibility, access, and any paid investigation needed are part of defining the scope."] },
    sections: [
      { h2: "Connections built around a real task", cards: [
        ["Website forms to a CRM or lead workflow", "Capture the agreed fields, validate the request, and create or update the intended record with a clear success or failure state."],
        ["Webhooks between existing tools", "Use an event in one system to start a defined action in another, with the payload, authentication, and receiving behavior checked against the available interfaces."],
        ["Website data for internal tools", "Connect the information your team needs for follow-up, status tracking, or reporting rather than adding another disconnected manual process."],
        ["Ecommerce data workflows", "Scope the supported movement of product, order, or related operational data. Direction, update rules, and platform limitations are established before implementation."],
        ["Extensions to an existing connection", "Add an agreed field, event, destination, or workflow step without treating the whole integration as a rewrite by default."],
        ["Already have a failing connection?", [link("Website integration troubleshooting", "/services/website-integration-help/"), " starts with repairing what is there."]]
      ]},
      { h2: "Decide how the connection should behave", cards: [
        ["The source of truth", "Agree which system owns each important value and whether data moves in one direction or needs reconciliation in both directions."],
        ["The trigger and data contract", "Define what starts the action, which fields are required, how identifiers are handled, and how updates differ from new records."],
        ["The access model", "Check supported authentication and permissions. Private credentials belong in a protected runtime or secret store, not in public browser code."],
        ["The failure behavior", "Decide what users see and operators can inspect when validation fails, a provider rejects a request, or a timeout occurs. Retries and duplicate protection are scoped where needed."],
        ["The acceptance test", "Define the expected record, response, or state change before calling the build complete. Include relevant failure cases and access limitations alongside the happy path."]
      ], paragraphs: ["The simplest supported implementation that meets the requirement is the starting point. A custom application is not automatically the right answer when an existing platform feature can do the job."] }
    ],
    proofId: "integration-build-examples", proofHeading: "Examples of implementation work",
    proof: [["A shorter form with a validated lead handoff", "A long booking embed was replaced with a compact inquiry form connected to the existing lead workflow. The work included server-side validation and checks of the form path. The shorter interface retained the established lead-management handoff.", "/fix-notes/replaced-oversized-booking-embed-validated-lead-form/"], ["A private WordPress estimate-intake workflow", "An admin-only WordPress tool connected estimate intake with lead context, follow-up status, and internal management. The public form stayed simple while operational details remained in the administrative workflow.", "/fix-notes/built-admin-only-wordpress-crm-estimate-intake/"]],
    workflowHeading: "From a requirement to a tested connection",
    workflow: [["Define the outcome", "Describe the task, systems, users, and required result. We identify missing information and whether paid feasibility work is needed."], ["Agree on scope and cost", "Confirm the workflow, boundaries, access, deliverables, and tests before technical work starts."], ["Map and implement", "Establish the data mapping and agreed behavior, then build within the existing site or tool architecture where appropriate."], ["Test the whole workflow", "Verify the initiating action, request, receiving record or response, and relevant failure behavior with safe test data."], ["Hand over the working scope", "Document the configuration, required environment values without exposing secrets, tests, and dependencies needed to operate the agreed integration."]],
    deliverablesHeading: "Know what is included before building",
    deliverables: ["The quote defines which systems, fields, triggers, directions, and environments are included. It also defines whether historical imports, backfills, scheduled jobs, alerts, or ongoing maintenance are part of the work.", "API access may depend on a provider’s plan, permissions, approval, or supported features. Those limitations are checked rather than hidden behind a promise to connect anything. Provider outages and future API changes are not eliminated by a successful implementation."],
    faqs: [["Can you connect any two platforms?", "Only when their supported interfaces, access, and business rules allow the required workflow. The first step is checking feasibility; I will not promise a connection simply because both tools have an API."], ["Do I need to write a technical specification?", "No. Start with the systems, the information that should move, and the result you need. Detailed mapping or investigation can be scoped when necessary."], ["Will private API keys be visible on my website?", "Private credentials should not be shipped in public client-side code. The implementation uses an appropriate protected execution path for the provider and hosting setup."], ["Do you include retries and duplicate prevention?", "When required by the agreed workflow, they belong in the scope and acceptance tests. Their design depends on what the source and receiving systems support."], ["Can the integration be maintained by another developer?", "The handoff explains the implemented behavior, configuration, and verification steps. Relevant code and documentation are delivered without publishing private credentials."], ["Is ongoing monitoring included?", "Not automatically. Monitoring, alerts, support coverage, and future changes are separate requirements unless explicitly included in the quote."]],
    finalCta: ["Tell me what should happen between your systems", "Describe the starting action, the tools involved, and the result your team needs. I will help define a practical implementation scope and quote the next step.", "Get an Integration Build Quote", "Free quote. Engineering review and implementation are paid work, agreed before they begin."],
    related: [["Repair an existing integration", "Trace an existing connection that drops data, duplicates records, or fails.", "/services/website-integration-help/"], ["React and static-site work", "Build a lightweight interface that fits its real hosting environment.", "/services/react-static-sites/"], ["Verify conversion measurement", "Check whether reporting matches the actual workflow result.", "/services/conversion-tracking-troubleshooting/"]]
  },
  "wordpress-troubleshooting": {
    title: "WordPress Troubleshooting Service | The Web Guy",
    meta: "WordPress errors, broken layouts, or problems after an update? I isolate the cause, make the agreed repair, and retest the affected behavior.",
    h1: "WordPress Troubleshooting for Problems You Can’t Pin Down",
    eyebrow: "Diagnose the problem before changing more things",
    intro: "Something changed, and your WordPress site no longer behaves the way it should. I investigate the affected page or workflow, narrow down the cause, and make the agreed repair with checks that reflect how visitors actually use the site.",
    cta: "Get a Troubleshooting Quote", heroSecondary: "See WordPress Repair Examples", heroSecondaryHref: "#wordpress-repair-examples", heroNote: "Start with a free quote. Diagnosis and repair are paid work, scoped and agreed before they begin.",
    scope: { heading: "Start with what changed", paragraphs: ["Send the affected URL, what is happening, and what you expected. Include the approximate start time and any update, plugin, theme, hosting, or content change you know about.", "An incomplete description is still a starting point. You do not need to know which plugin or line of code caused the issue to request a quote."] },
    sections: [
      { h2: "Symptoms worth investigating properly", cards: [["A page breaks after an update", "Layout, scripts, or functionality may change even when the update itself appears to finish normally."], ["The editor works, but the public site does not", "Logged-in state, caching, script timing, and permissions can make the same page behave differently for visitors."], ["A form, menu, or button stops responding", "The visible control may be fine while a script, request, or security rule prevents the next action."], ["Mobile behaves differently", "A menu can become unreachable, content can be clipped, or scrolling can fail at a particular viewport or browser state."], ["Errors come and go", "Intermittent behavior needs a reproducible test where possible, with attention to the conditions that change instead of repeated blind fixes."]], paragraphs: [["For a form-specific problem, ", link("WordPress contact-form repair", "/services/contact-form-not-working-wordpress/"), " explains the submission and delivery checks. A known extension interaction may be better described through ", link("plugin conflict help", "/services/wordpress-plugin-conflict-help/"), ". You can still start here when the cause is unclear."]]},
      { h2: "A narrower change, backed by a test", paragraphs: ["I use the symptom and available evidence to choose what to inspect: browser errors and requests, WordPress or hosting logs, recent changes, plugin/theme interactions, caching, and the affected user journey.", "Testing should not casually take a working site apart. Where practical, I use staging, a controlled duplicate, or another agreed method to isolate the problem. Backups, access, and the rollback approach are considered before risky changes.", "The aim is to identify and change the responsible behavior, not leave optimization or security broadly disabled because the symptom temporarily disappears. If a temporary workaround is necessary, it is identified as a workaround, with its limits explained."] }
    ],
    proofId: "wordpress-repair-examples", proofHeading: "WordPress problems I have worked through",
    proof: [["A reCAPTCHA problem caused by delayed scripts", "The form failed for visitors while script optimization affected reCAPTCHA initialization. Targeted exclusions and clean-session checks addressed the loading problem without broadly removing the optimization setup.", "/fix-notes/repaired-recaptcha-loading-without-disabling-page-optimization/"], ["A blocked form embed without a broad firewall bypass", "A WordPress editor request was being blocked by a security rule. The work used a narrow allowance for the relevant embed behavior rather than switching off the wider protection.", "/fix-notes/allowed-form-embed-wordpress-security-without-broad-bypass/"]],
    proofAfter: ["A separate ", link("full-screen scrolling repair", "/fix-notes/repaired-full-screen-section-scrolling-theme-overflow/"), " used a controlled duplicate to investigate theme overflow and missing content, with the repaired version prepared for review. Different symptoms require different evidence and tests."],
    workflowHeading: "How the work proceeds",
    workflow: [["Scope the next step", "We establish the affected behavior, urgency, access, and whether the first paid task is diagnosis or a defined repair."], ["Agree before technical work", "Scope and cost are approved before investigation begins. New findings that expand the work are raised before additional changes are made."], ["Reproduce and isolate", "I work toward a repeatable test and separate the likely cause from unrelated settings or plugins."], ["Repair and retest", "The agreed change is checked against the original symptom and relevant nearby behavior, including the visitor state or device where the issue appeared."], ["Explain the handoff", "You receive what changed, what was tested, and any remaining limitation, provider dependency, or recommended follow-up."]],
    deliverablesHeading: "A clear result, even when the first task is diagnosis",
    deliverables: ["Sometimes the most useful first result is a confirmed cause and a bounded repair plan. I will not describe an investigation as a completed fix when the actual change is still waiting on access, approval, or a third-party provider.", ["Ongoing updates, routine checks, and a continuing task list can be handled through ", link("WordPress support", "/services/wordpress-support/"), ". They are not automatically included in a one-off troubleshooting job."]],
    faqs: [["Should I deactivate every plugin first?", "Not on a live site without understanding the consequences. Controlled isolation may involve plugin testing, but the method should protect the working parts of the site and provide a way back."], ["Can you help when the issue only happens sometimes?", "Yes, although investigation may require more context or observation. A timestamp, device, login state, and repeatable sequence are especially useful."], ["Do I need a staging site?", "A staging environment can make risky tests safer. Where one is unavailable, we agree on an appropriate testing and rollback approach before changes are made."], ["Can you troubleshoot Elementor or a custom theme?", "The affected builder, theme, and custom code can be part of the investigation when access allows. The scope depends on the symptom and implementation, not just the platform name."], ["Will you replace my theme or rebuild the site?", "Not by default. The first objective is to understand the failure and identify a proportionate repair. A larger change is a separate proposal when the findings justify it."], ["Can you tell me the cause from a screenshot?", "A screenshot helps explain the symptom, but it usually does not establish the cause on its own. The quote defines any paid investigation required to confirm it."]],
    finalCta: ["Show me the WordPress problem that keeps coming back", "Send the page, the symptom, and anything that changed before it started. I will help scope the next practical step without asking you to diagnose it yourself.", "Get a Troubleshooting Quote", "Free quote. Diagnosis and repair begin only after scope and cost are agreed."],
    related: [["Contact-form problems", "Trace submission, email, CAPTCHA, or connected-system failures.", "/services/contact-form-not-working-wordpress/"], ["Plugin conflicts", "Isolate an interaction between plugins, themes, scripts, or caching.", "/services/wordpress-plugin-conflict-help/"], ["Ongoing WordPress support", "Scope routine changes, updates, and a continuing task list.", "/services/wordpress-support/"]]
  }
};

export function applyProductionServiceUplift(service) {
  const uplift = productionServiceUplifts[service.slug];
  return uplift ? { ...service, ...uplift, uplift } : service;
}

export const targetedServicePatches = {
  "wordpress-help": {
    paragraph: ["You know what you need the website to do, even when you do not know which setting or plugin controls it. Send the page and the result you want, and I will help scope the next practical step. When the cause is unclear, ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), " provides a paid investigation path; when the change is already defined, the work can stay focused on that task."],
    faq: ["Do I need to know what caused the problem?", "No. Describe what you see, what should happen, and anything that changed recently. That is enough to start discussing a quote; confirming the cause may require paid investigation."]
  },
  "wordpress-website-support": {
    paragraph: ["Support can mean a page change today and a plugin or form problem next week. The useful starting point is an agreed task list, access, priorities, and the result expected from each item. Routine updates and checks can be scoped through ", link("WordPress maintenance", "/services/wordpress-maintenance/"), ", while individual changes remain visible and reviewable rather than disappearing into an undefined support promise."],
    faq: ["Can support include both fixes and content changes?", "Yes, when those tasks are included in the agreed scope. Access, effort, and priorities are confirmed before the work starts; a support request is not automatically unlimited work."]
  },
  "wordpress-maintenance": {
    paragraph: ["Maintenance should cover the parts of your site that need attention, not just a list of updates that were clicked. The scope can include agreed update work, relevant checks, and follow-up on problems found along the way. A new failure that needs diagnosis is identified separately and can move into ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), " with approval rather than becoming an unannounced additional job."],
    faq: ["Does maintenance include every repair?", "Not automatically. The agreement defines the checks and work included, how findings are reported, and how additional repairs are approved. Ongoing availability and response expectations must also be agreed explicitly."]
  },
  "fix-wordpress-issue": {
    paragraph: ["A single issue still needs a clear finish line: the button responds, the page displays correctly, or the expected setting takes effect. Send the affected URL and the behavior you want restored. I will scope the repair and relevant checks. For a problem where the cause is not yet clear, ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), " can establish what needs to change before a repair is proposed."],
    faq: ["Can you handle just one small issue?", "Yes. A bounded issue can be a one-off task. The quote depends on the investigation, access, change, and testing required, not simply how small the symptom looks."]
  },
  "fix-broken-wordpress-site": {
    paragraph: ["When the site is failing, the first priorities are understanding the impact, protecting available recovery options, and avoiding changes that make diagnosis harder. Tell me whether the public site, WordPress admin, or both are affected. A ", link("blank page or critical error", "/services/wordpress-white-screen-of-death-fix/"), " is one possible symptom; the investigation still needs to establish the cause and a safe repair path."],
    faq: ["Should I restore a backup immediately?", "A backup may be part of recovery, but restoring it can replace newer content or transactions. The affected data, backup age, and consequences should be checked before choosing that step."]
  },
  "wordpress-emergency-support": {
    paragraph: ["Explain what is unavailable, who is affected, when the failure began, and whether WordPress or hosting access still works. Include recent changes and the recovery options you know about. Urgent work still needs an agreed scope and safe approach; a ", link("broken WordPress site", "/services/fix-broken-wordpress-site/"), " may require recovery, investigation, or a targeted repair depending on the evidence."],
    faq: ["Does an initial response mean the site will be fixed immediately?", "No. A response confirms communication; diagnosis and resolution depend on the failure, access, third parties, and the work agreed. Any published availability or response policy is separate from a guaranteed repair time."]
  },
  "wordpress-white-screen-of-death-fix": {
    paragraph: ["A blank page tells you the request did not produce the expected interface; it does not identify the cause by itself. I check the affected URL, admin access, available errors, and recent changes before proposing the repair. When the failure began after an extension change, ", link("plugin conflict investigation", "/services/wordpress-plugin-conflict-help/"), " may be part of the diagnosis rather than a reason to deactivate everything on the live site."],
    faq: ["Can a white screen happen without a visible error message?", "Yes. The useful evidence may be in browser responses, WordPress diagnostics, or hosting logs rather than on the page. Access and a safe testing approach are agreed before investigation."]
  },
  "elementor-layout-broken": {
    paragraph: ["A layout can look correct in the editor and fail on the public page, or work on desktop while clipping content on a phone. Send the page and affected viewport so the repair can target the actual behavior. I check the relevant structure and styling rather than redesigning the page by default; wider script or plugin interactions can be investigated through ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), "."],
    faq: ["Will you change the design to fix the layout?", "Not unless the scope calls for it. The starting objective is to restore the intended design and responsive behavior, with any necessary tradeoff explained before a larger change."]
  },
  "wordpress-plugin-conflict-help": {
    paragraph: ["Two features can work separately but fail together. I investigate the interaction using the symptom, relevant logs, and controlled tests where practical. The aim is to identify which behavior conflicts and choose a proportionate change. Problems involving delayed scripts or forms may also need the visitor-side checks described in ", link("WordPress contact-form repair", "/services/contact-form-not-working-wordpress/"), "."],
    faq: ["Does the newest plugin always cause the conflict?", "No. Timing is a useful clue, not proof. An update can expose an interaction with another plugin, the theme, caching, or custom code, so the cause should be tested."]
  },
  "wordpress-developer-for-small-tasks": {
    paragraph: ["A small task might be a template adjustment, a field change, a layout correction, or functionality that needs a developer rather than another tutorial. Send the exact location and desired result. A defined change can stay small; a collection of related tasks can be scoped as ", link("hourly or project-based WordPress development", "/services/hourly-wordpress-developer/"), " without implying a full-site rebuild."],
    faq: ["What makes a task ready to quote?", "A clear location, desired result, constraints, and any relevant access information. Screenshots help, but the expected behavior matters more than a polished technical brief."]
  },
  "hourly-wordpress-developer": {
    paragraph: ["Developer time is useful when the work is a changing task list or an investigation that cannot honestly be priced as a known repair before it is understood. We agree on priorities, scope, and the cost basis before work begins. ", link("Small WordPress tasks", "/services/wordpress-developer-for-small-tasks/"), " can be handled individually, while a larger backlog can be broken into reviewable pieces."],
    faq: ["How do I keep the work bounded?", "Agree on the next task, expected deliverable, cost basis, and approval point. New findings or additional work should be raised before the scope expands. The quote confirms the cost basis for your work."]
  },
  "agency-overflow-developer": {
    paragraph: ["When the client work is sold but implementation capacity is tight, I can take an agreed technical slice of the backlog. Define the platform, task, deadline, repository or access, reviewer, and handoff expectations. For work that must remain behind your agency’s delivery process, ", link("white-label WordPress support", "/services/white-label-wordpress-support/"), " can make communication ownership explicit from the start."],
    faq: ["Will you communicate directly with the client?", "Only through the arrangement agreed for the project. Identify the reviewer and client-contact owner before work starts so implementation does not create a second, conflicting communication channel."]
  },
  "white-label-wordpress-support": {
    paragraph: ["Behind-the-scenes support works best when responsibility is clear. Your agency defines the client-facing process; I handle the agreed WordPress implementation and provide a useful technical handoff. Access, review, and communication boundaries are settled before work begins. Broader or mixed-platform backlogs can be scoped through ", link("agency overflow development", "/services/agency-overflow-developer/"), "."],
    faq: ["Will you add your branding or contact my client?", "Not as an assumed part of the engagement. Branding, communication, and credit arrangements are agreed with the agency before delivery."]
  },
  "website-maintenance-for-agencies": {
    paragraph: ["A multi-site maintenance workload needs a defined list of sites, checks, permissions, and reporting expectations. I can handle the agreed work and make exceptions visible rather than treating every client site as identical. New feature requests or deeper repairs can be separated into ", link("website support for agencies", "/services/website-support-for-agencies/"), " so recurring maintenance remains bounded."],
    faq: ["Can maintenance cover several client websites?", "Yes, with the sites and included work defined in the agreement. Access differences, hosting arrangements, and site-specific risks affect the scope; one site’s checklist should not silently become a promise for every site."]
  },
  "website-support-for-agencies": {
    paragraph: ["Turn the client’s request into a specific change, a named reviewer, and an agreed test. I can handle implementation while keeping your agency informed about progress, blockers, and what needs approval. Recurring checks can be organized separately through ", link("agency website maintenance", "/services/website-maintenance-for-agencies/"), ", rather than mixing routine upkeep with an unlimited queue of new work."],
    faq: ["What should our task handoff include?", "The affected URL or repository, expected result, relevant designs or examples, access, deadline, and acceptance criteria. Identify who can approve scope changes and who will review the result."]
  },
  "shopify-liquid-support": {
    paragraph: ["Targeted Shopify work can involve a section, template, navigation behavior, or storefront detail rather than a new theme. Send the affected page and desired change, including the current theme and relevant app behavior when known. When the request involves information moving outside the storefront, ", link("API integration development", "/services/api-integrations/"), " can establish what the platform and connected tools actually support."],
    faq: ["Can this be done without replacing the theme?", "That is the starting preference for a scoped change. The current theme, app dependencies, and platform restrictions determine the practical implementation, with larger changes proposed only when justified."]
  },
  "woocommerce-support": {
    paragraph: ["A WooCommerce change can touch product presentation, extensions, checkout, and the surrounding WordPress setup. Define the affected journey and business rule so the work is tested against the store’s actual use. A failing purchase path deserves the focused checks in ", link("WooCommerce checkout repair", "/services/woocommerce-checkout-error-fix/"), ", while unrelated catalog or presentation changes can remain separately scoped."],
    faq: ["Can you work on an existing store with custom plugins?", "Yes, subject to access and the implementation involved. The scope should identify the affected behavior, testing environment, payment or shipping dependencies, and a safe way to verify the change."]
  },
  "woocommerce-checkout-error-fix": {
    paragraph: ["A checkout repair needs more than a working button: the relevant order, payment response, shipping or tax rule, and customer-facing result must agree. Send the affected checkout path and a redacted example of the error. I investigate the failure in context and scope the checks needed; broader store changes belong in ", link("WooCommerce support", "/services/woocommerce-support/"), "."],
    faq: ["Will testing create real charges or customer emails?", "The testing approach must be agreed first. Prefer an appropriate test environment and provider test mode where supported. Do not assume it is acceptable to place live orders, charge cards, or notify customers during diagnosis."]
  },
  "seo-audit-implementation": {
    paragraph: ["An audit is useful when its recommendations become correct, verified changes. Send the findings, affected URLs, priorities, and platform constraints. I turn the agreed items into implementation work and record what changed, what was tested, and what remains dependent on Google or another provider. ", link("Technical SEO development", "/services/technical-seo-developer/"), " covers the code and template work behind those recommendations."],
    faq: ["Will implementing the audit guarantee better rankings?", "No. Implementation can correct the agreed technical or content issue, but search results depend on more than completing a checklist. The handoff should distinguish a verified change from an expected or unproven SEO outcome."]
  },
  "technical-seo-developer": {
    paragraph: ["Technical SEO work often needs changes in templates, routing, metadata generation, internal linking, or rendered output, not another report describing the same problem. I implement the agreed technical scope and test the resulting behavior. When the work starts from an existing audit, ", link("SEO audit implementation", "/services/seo-audit-implementation/"), " helps keep the findings tied to specific changes and acceptance criteria."],
    faq: ["Can you work from recommendations supplied by our SEO team?", "Yes. The handoff should identify the affected URLs or templates, desired behavior, priority, and acceptance test. Ambiguous recommendations are clarified before changes are made."]
  },
  "ga4-gtm-setup-help": {
    paragraph: ["Useful tracking begins with the action you actually need to measure. Define the event, the success condition, and where it should appear before adding tags. I scope implementation and verification around those requirements. When tags already exist but the numbers do not match real activity, ", link("conversion tracking troubleshooting", "/services/conversion-tracking-troubleshooting/"), " investigates the current behavior instead of installing another competing setup."],
    faq: ["Should a button click count as a lead?", "Not by default. A click can start a form without producing an accepted submission. The event definition should distinguish interest, submission attempts, and the confirmed outcome the business intends to measure."]
  }
};

export function applyTargetedServicePatch(service) {
  const patch = targetedServicePatches[service.slug];
  if (!patch) return service;
  const faqs = [patch.faq, ...(service.faqs || []).filter(([question]) => !/^is .* different from /i.test(question))];
  return { ...service, targetedPatch: patch, faqs };
}

const supportingServiceBridges = {
  "wordpress-support": ["WordPress support can cover the changes you already know you need and the problems that need investigation first. A specific failure can be scoped through ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), "; routine checks and updates can be organized through ", link("WordPress maintenance", "/services/wordpress-maintenance/"), ". The important distinction is what work is agreed, what result is expected, and how additional findings are handled."],
  "website-fixes": ["A website repair should restore the intended behavior without losing sight of what already works. Missing content, broken navigation, form failures, and layout problems need different tests. For WordPress-specific behavior, ", link("WordPress troubleshooting", "/services/wordpress-troubleshooting/"), " explains the investigation process. A ", link("documented service-site image and navigation rebuild", "/fix-notes/rebuilt-large-service-site-image-system-mega-menu/"), " shows how presentation and navigation work can be checked together when both are part of the scope."],
  "schema-implementation-service": ["Structured data should describe the real business and match the content visitors can see. I check how values are generated so a change to a phone number, service detail, or answer does not leave conflicting versions around the site. In this ", link("shared business-data and schema cleanup", "/fix-notes/centralized-business-data-faq-schema-pull-request-review/"), ", one source of information reduced repeated values and made the implementation easier to review."],
  "security-hosting-reliability": ["Hosting and domain changes need a plan for the existing site as well as the destination. The work can include checking dependencies, preparing the target environment, and agreeing on the cutover and rollback steps. This ", link("domain-migration preparation note", "/fix-notes/prepared-domain-migration-without-dropping-existing-hostname/"), " documents a setup kept ready for DNS verification while the existing hostname remained in place; preparation is not the same as a completed migration."],
  "react-static-sites": ["A site’s features need to match the environment that will host it. Static output cannot quietly depend on private server-only behavior that the destination does not provide. This ", link("Next.js static-hosting refactor", "/fix-notes/refactored-nextjs-site-static-hosting/"), " documents the work of aligning the build and form handoff with the target hosting model. The right architecture depends on what the site actually needs to do."],
  "conversion-tracking-troubleshooting": ["Measurement should follow the actual outcome, not just the interaction that started it. I compare the relevant form or website action with the tags and events that report it. This ", link("call-tracking and tag-management repair", "/fix-notes/added-call-tracking-tag-management-site-verification-static-site/"), " addressed competing loaders and client-side navigation behavior. When the underlying record itself is missing, ", link("integration troubleshooting", "/services/website-integration-help/"), " separates that operational failure from the measurement problem."]
};

export function applySupportingServiceBridge(service) {
  return supportingServiceBridges[service.slug] ? { ...service, supportingBridge: supportingServiceBridges[service.slug] } : service;
}
