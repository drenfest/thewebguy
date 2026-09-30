export const aiDevelopmentHub = {
  slug: "",
  eyebrow: "AI Development Oversight",
  title: "AI Development Oversight & Human Code Review | The Web Guy",
  h1: "Build With AI. Ship With an Engineer.",
  meta: "Human engineering review for AI-built websites, code changes, and pull requests. Get a free quote for code review, launch QA, or ongoing AI development oversight.",
  intro: "You have an AI-built website, a new feature, or a pull request ready to go. I review the agreed scope, how those changes fit your system, and what deserves attention before you ship. Keep the speed. Add experienced engineering judgment."
};

export function aiDevelopmentUrl(slug = "") {
  return `/ai-development-oversight/${slug ? `${slug}/` : ""}`;
}

export const aiDevelopmentPages = [
  {
    slug: "ai-code-review",
    legacySlug: "code-review",
    media: "code-review.svg",
    mediaAlt: "Illustrative route diff connected to redirects, navigation, and sitemap checks.",
    contents: [["example", "Example review"], ["scope", "Review coverage"], ["deliverables", "Your handoff"], ["questions", "Questions"]],
    eyebrow: "AI Code Review",
    title: "AI Code Review for Websites & Pull Requests | The Web Guy",
    h1: "AI Wrote the Code. I'll Review What It Changed.",
    meta: "Have an experienced developer review AI-generated code, a GitHub pull request, or an AI-built website. Clear findings, priorities, and next steps. Request a free quote.",
    intro: "Have a branch, pull request, generated feature, or AI-built site ready for another set of eyes? I review the change in context and explain what should be fixed, tested, or clarified before you merge or launch.",
    summary: "A focused review of an existing build or change, with prioritized findings and a practical next step.",
    cta: "Get an AI Code Review Quote",
    purpose: "Review a specific change before merge or launch.",
    outcome: "A review your developer can act on",
    deliverables: ["Prioritized findings tied to the agreed scope", "Code comments or a written review your team can act on", "Recommended fixes and checks, with open questions called out", "A clear handoff: what was checked and what still needs verification"],
    sections: [
      {
        h2: "A working change still needs context",
        body: "Automated checks and AI review can catch useful issues. Human review adds the questions that depend on understanding the application and the original requirement. I look at the diff, the surrounding code, and the behavior it is supposed to change.",
        bullets: ["Does this functionality already exist?", "Is the change in the right file and layer of the application?", "Does it create another source of truth or repeat a configuration value?", "Does it fit the project's existing components and patterns?", "Was the requirement understood, and what else could this change affect?", "Will the next developer be able to maintain it?"]
      },
      {
        h2: "What the review can cover",
        body: "We choose the review areas that fit your change. A focused pull request review and a whole-site launch review are different scopes.",
        cards: [
          ["Structure & code quality", "Duplicated logic, component reuse, data ownership, configuration, error handling, and maintenance cost."],
          ["Behavior & regressions", "Changed routes, forms, APIs, shared components, and the existing flows that depend on them."],
          ["Security concerns", "Authentication, authorization, input validation, secret handling, and dependency risks within the agreed scope. This is not a penetration test or a security certification."],
          ["Search & measurement", "URLs, redirects, canonicals, metadata, structured data, internal links, sitemaps, and conversion events."],
          ["Performance & accessibility", "Extra requests, script weight, rendering, layout shift, keyboard access, labels, focus, and semantics."],
          ["Production readiness", "Build output, environment assumptions, runtime behavior, deployment steps, and the checks needed after release."]
        ]
      },
      {
        h2: "From a pull request to a decision",
        body: "First, share the goal and describe the change. I confirm the scope, access needed, deliverables, and cost. After approval, I review the implementation and return findings organized by impact. Fixes, refactoring, re-review, or deployment help can be included when we agree the scope.",
        bullets: ["Start with the changed files, then follow their dependencies where needed.", "Separate blockers from improvements and questions that need your input.", "Record checks that passed, failed, or could not be run.", "Agree who makes the fixes and who approves the release."]
      },
      {
        h2: "Example finding: the new URL works, the old one disappears",
        body: "Representative scenario: an AI-generated change renames a service route. The new page renders, but internal links and the sitemap still point to the old URL. The review traces the redirect, canonical, schema references, and tracking assumptions. The fix updates the affected references and adds a route check so the same omission is easier to catch next time."
      },
      {
        h2: "A review you can hand to your developer",
        body: "You receive findings with enough context to act: the affected area, why it matters, and a suggested next step. I can work with your current developer or agency, review a GitHub pull request, or provide a written handoff. I do not need to replace your team or take control of production to start."
      }
    ],
    faqs: [
      ["Can you review only the changed files?", "Yes. A bounded diff is often the best starting point. If a change depends on shared code, configuration, or an existing flow, I may need that context too. Any expansion of scope is discussed first."],
      ["Can you review a private GitHub pull request?", "Yes. Describe the work in the quote request. We can arrange the minimum repository access needed after agreeing scope. Keep private repositories private and do not send credentials through the form."],
      ["What if the AI-generated code already works?", "That is a useful starting point. Review checks whether it fits the application, preserves other behavior, and leaves a maintainable implementation. It may confirm the approach or identify changes before release."],
      ["Are fixes included?", "Only when they are part of the agreed scope. The quote can cover review alone or review plus fixes, refactoring, and verification. You decide before paid work starts."],
      ["Is the code review free?", "The quote is free. Code review, testing, diagnostics, and implementation are paid services. I confirm scope and cost before beginning."],
      ["Can you review AI-written WordPress code?", "Yes. Reviews can cover PHP, themes, plugins, JavaScript, CSS, and how the change interacts with the existing WordPress site."]
    ]
  },
  {
    slug: "ai-production-oversight",
    legacySlug: "production-oversight",
    media: "production-oversight.svg",
    mediaAlt: "Illustrative release decision: a ready change passes through engineering review, then the release owner chooses to ship or hold.",
    contents: [["release-cycle", "Release cycle"], ["ownership", "Who does what"], ["deliverables", "Your release record"], ["questions", "Questions"]],
    eyebrow: "Production Oversight",
    title: "AI Development Production Oversight | The Web Guy",
    h1: "Keep Building. Give Each Release a Review Point.",
    meta: "Ongoing engineering oversight for teams using AI to change production websites. Review gates, deployment planning, and verification. Request a free quote.",
    intro: "When AI-assisted changes become part of your regular workflow, a one-time review is only the beginning. I help your team define what needs review, what must pass, and who approves the next release.",
    summary: "Recurring engineering review around your team's AI-generated changes and release process.",
    cta: "Talk About Ongoing Oversight",
    purpose: "Add repeatable review points to ongoing releases.",
    outcome: "Clear review and release responsibilities",
    deliverables: ["An agreed review cadence and scope", "Review requirements for sensitive changes", "Release and rollback checklists for the work in scope", "Post-release verification notes and follow-up priorities"],
    sections: [
      { h2: "A review layer around your existing workflow", body: "Your team keeps its tools, repository, and deployment process. We identify high-impact areas such as routing, forms, authentication, shared components, tracking, and configuration, then define when engineering review is required." },
      { h2: "Before and after deployment", body: "Before a release, review the diff, check build and test results, and document unresolved questions. After deployment, verify the agreed critical flows against the real environment. Review availability, response expectations, and release responsibilities are agreed in advance; this is not an implied 24/7 support service." },
      { h2: "Built for founders, agencies, and small teams", body: "Use ongoing oversight when you have a stream of AI-assisted changes but need experienced judgment at release points. Start with one scoped review to understand the system, then decide whether recurring support makes sense." }
    ],
    faqs: [["Do you deploy every change?", "Only if deployment is part of the agreement. Your existing team can retain release control while I review changes and help verify the result."], ["Can you work with our agency?", "Yes. Scope, communication, review ownership, and handoff expectations can be agreed with your existing developer or agency."]]
  },
  {
    slug: "ai-website-qa",
    legacySlug: "website-qa",
    media: "website-qa.svg",
    mediaAlt: "Illustrative desktop and mobile contact journey connecting inquiry, delivery, and a lead event.",
    contents: [["visitor-journey", "Visitor journey"], ["coverage", "QA coverage"], ["deliverables", "Your issue list"], ["questions", "Questions"]],
    eyebrow: "AI Website QA",
    title: "AI Website QA & Pre-Launch Review | The Web Guy",
    h1: "The Preview Looks Good. Test the Journey Before Launch.",
    meta: "Pre-launch QA for AI-built websites: forms, mobile layouts, accessibility, SEO, tracking, and production behavior. Get a free quote for a scoped review.",
    intro: "An AI-built site can look finished while the contact form, mobile menu, redirects, or tracking still need work. I test the agreed visitor journeys and explain what needs attention before you send people to the site.",
    summary: "A practical check of visitor journeys, forms, mobile behavior, search setup, and measurement.",
    cta: "Request a Website QA Quote",
    purpose: "Test real visitor journeys before launch.",
    outcome: "A prioritized launch issue list",
    deliverables: ["A prioritized issue list with reproduction steps", "Device, browser, and journey coverage agreed up front", "Notes on forms, SEO, tracking, and accessibility checks", "Retest priorities for your launch decision"],
    sections: [
      { h2: "Start with what visitors need to do", body: "We identify your most important paths: find a service, use the navigation, submit an inquiry, buy a product, or complete an integration. Testing follows those paths across the agreed screen sizes and browsers." },
      { h2: "Check the delivery, not just the thank-you message", body: "A form success message is only one step. Where access and scope allow, verify that the request reaches its destination and that a lead event fires after successful delivery. Test messages are clearly labeled and arranged before sending." },
      { h2: "Check the launch details too", body: "Review important URLs, redirects, metadata, canonicals, schema, sitemap entries, keyboard behavior, focus, layout shifts, and environment-dependent behavior. Findings state what was tested and what could not be verified." }
    ],
    faqs: [["Do I need a repository for website QA?", "Not always. A public or staging URL is enough for many visitor-facing checks. Source code or configuration access may be needed to explain an issue or make a fix."], ["Can you fix what the review finds?", "Yes, when the platform and work fit. Fixes and retesting can be included in the quote or scoped after the findings are clear."]]
  },
  {
    slug: "ai-development-guardrails",
    legacySlug: "guardrails",
    media: "development-guardrails.svg",
    mediaAlt: "Illustrative guardrail: trace a duplicate record to multiple data sources, validate uniqueness, and flag the change for its owner.",
    contents: [["before-after", "Before and after"], ["failure-map", "Failure to check"], ["deliverables", "Your guardrails"], ["questions", "Questions"]],
    eyebrow: "AI Development Guardrails",
    title: "AI Development Guardrails & Review Workflows | The Web Guy",
    h1: "Catch the Same Mistake Before It Ships Again.",
    meta: "Practical guardrails for AI-assisted web development: validation, automated tests, CI checks, and human review gates. Request a free setup quote.",
    intro: "If you keep catching duplicate records, broken routes, or changes in the wrong place, another reminder is not enough. I help turn recurring problems into checks your team can run with every change.",
    summary: "Validation, tests, and review rules based on the mistakes your project actually needs to catch.",
    cta: "Discuss Development Guardrails",
    purpose: "Turn recurring mistakes into checks and rules.",
    outcome: "Checks your team can keep using",
    deliverables: ["A review of recurring failure patterns", "Targeted validation and tests for agreed risks", "CI and review workflow changes where appropriate", "Instructions for running, maintaining, and responding to checks"],
    sections: [
      { h2: "Start with an actual failure pattern", body: "For duplicate data, identify the canonical source, consolidate references, and validate unique records or slugs. For route changes, check links, redirects, and required metadata. Choose checks that can explain a failure clearly." },
      { h2: "Automate checks. Keep judgment at the review point.", body: "Build, lint, types, tests, required-field validation, link checks, and accessibility checks can provide useful signals. Sensitive files can have CODEOWNERS and required reviewers where the repository supports them. Branch rules and CI requirements need to be configured and verified together." },
      { h2: "Keep the workflow practical", body: "A check should catch a meaningful problem without burying the team in noise. I work within your repository conventions and document which failures block release, who responds, and when a human decision is still needed. Production access remains limited to the people and systems that need it." }
    ],
    faqs: [["Can you add tests to an existing project?", "Yes. The starting point is the project's existing tools and highest-impact failure patterns. New tooling is considered only when it solves a clear need."], ["Do guardrails guarantee that every bug is caught?", "No. Checks cover specific conditions, and human review still matters. The goal is to make recurring mistakes easier to detect and harder to repeat."]]
  }
];

export const aiDevelopmentMap = Object.fromEntries(aiDevelopmentPages.map(page => [page.slug, page]));
export const aiDevelopmentCards = aiDevelopmentPages.map(page => [page.eyebrow, page.summary, aiDevelopmentUrl(page.slug), `Explore ${page.eyebrow}`]);

export const aiWorkflow = [
  ["AI builds", "You, your developer, or your agent creates the change using the tools you already use."],
  ["Automated checks", "Run relevant builds, types, tests, duplicate detection, route checks, and other validation."],
  ["Engineering review", "Review the implementation, its dependencies, and the requirement it is meant to satisfy."],
  ["Fix or refactor", "Resolve findings and consolidate code when the solution belongs in an existing source or component."],
  ["Approval", "Use the agreed pull request, required checks, and review process to make a release decision."],
  ["Deployment", "Ship approved work through the project's established deployment process."],
  ["Production verification", "Check critical behavior in the live environment and record anything still unresolved."]
];

export const aiHubFaqs = [
  ["Do I still need a developer if AI built my website?", "AI can get you a long way. An experienced developer can review the parts where a mistake would affect customers, data, search visibility, or future maintenance. You can start with a focused review instead of committing to ongoing support."],
  ["Can you review work from Codex, Claude Code, Cursor, or Copilot?", "Yes. The review focuses on the code and resulting behavior, regardless of which tool produced it. The project, change, and scope matter more than the model."],
  ["Do you need production access?", "Not usually to begin. A description, staging site, diff, or repository access may be enough. Access is agreed for the scope and limited to what is needed. Do not send passwords, API keys, or other secrets through the quote form."],
  ["Is this only for people who are not developers?", "No. Developers and agencies use AI too. I can provide another set of eyes on implementation, architecture, pull requests, and production readiness while working with your existing team."],
  ["Can you help prevent repeat mistakes?", "Yes. Where it makes sense, findings can become tests, validation rules, CI checks, and review requirements. Guardrail setup is scoped around your project and its actual failure patterns."],
  ["Is the initial review free?", "The quote is free. Engineering review, diagnostics, testing, fixes, and workflow setup are paid work. We agree the scope and cost before that work begins."],
  ["Can this be an ongoing service?", "Yes. One-time review, recurring oversight, agency support, and guardrail setup can be scoped separately. Review frequency and responsibilities are agreed before work starts."]
];

// Published URLs remain valid while canonical pages use service-specific slugs.
export const aiDevelopmentRedirects = Object.fromEntries([
  ["/ai-development/", aiDevelopmentUrl()],
  ...aiDevelopmentPages.map(page => [`/ai-development/${page.legacySlug}/`, aiDevelopmentUrl(page.slug)])
]);
