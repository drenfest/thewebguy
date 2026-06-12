<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";
  import { breadcrumbSchema, schemaList } from "$lib/data/schema.js";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Terms", title: "Current page: Terms of Service" }
  ];
  const seoSchema = schemaList(breadcrumbSchema(breadcrumbs, "/terms/"));

  const termsLinks = [
    [
      "These terms apply to use of ",
      { text: "The Web Guy", href: "/", title: "View The Web Guy homepage" },
      ", including browsing service pages, reading blog content, and submitting a request through the ",
      { text: "contact form", href: "/contact/", title: "Open the contact request form" },
      "."
    ]
  ];
</script>

<Seo
  title="Terms of Service | The Web Guy"
  description="Terms of Service for The Web Guy website, contact form, website support information, hourly contract work, and acceptable use."
  schema={seoSchema}
/>

<main>
  <Hero
    eyebrow="Terms"
    h1="Terms of Service"
    intro="Plain terms for using this site, reading the content, sending website support requests, and understanding what does and does not create a working relationship."
    cta="Send a Website Request"
    ctaHref="/contact/"
    secondary="Read Privacy"
    secondaryHref="/privacy/"
    showCapabilityLinks={false}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Effective date"
      h2="June 12, 2026"
      body="These Terms of Service are intended to keep the site practical and clear. They are not a substitute for a signed project agreement, statement of work, or contractor agreement."
    />
    <InternalLinkCopy paragraphs={termsLinks} />
  </section>

  <section class="section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading eyebrow="Using the site" h2="Informational website content" />
      <p class="wide-copy">The website provides information about contract web development, WordPress support, SEO implementation, website fixes, analytics, integrations, and related technical support.</p>
      <p class="wide-copy">Content is provided for general informational and marketing purposes. It should not be treated as legal, financial, security, SEO ranking, or business advice tailored to your specific situation.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Requests" h2="Contact form submissions" />
      <p class="wide-copy">Submitting a request through the site does not guarantee availability, acceptance, response time, or project start. A working relationship begins only when both sides agree to scope, rate, timing, access, and any other relevant terms.</p>
      <p class="wide-copy">Do not submit passwords, private credentials, payment card numbers, protected health information, or other sensitive data through the contact form.</p>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--traces section-effect--low">
    <SectionHeading
      eyebrow="Contract work"
      h2="Hourly support and project scope"
      body="The public contract rate is $55/hr unless a different written agreement applies. Actual work may require a written scope, access details, priorities, dependencies, and practical acceptance criteria."
    />
    <ul class="check-list">
      <li>Hourly support may be used for website fixes, WordPress updates, landing pages, SEO implementation, analytics, performance, integrations, and webmaster support.</li>
      <li>Estimates are not guarantees unless a specific written agreement says otherwise.</li>
      <li>Work may depend on platform access, hosting access, third-party tools, plugins, APIs, DNS records, client responsiveness, or existing site quality.</li>
      <li>Emergency availability, after-hours work, ongoing retainers, and large projects require separate agreement.</li>
      <li>The Web Guy may decline requests that are unsafe, unlawful, unclear, abusive, outside scope, or not a good fit.</li>
    </ul>
  </section>

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading eyebrow="Access" h2="Client accounts and credentials" />
      <p class="wide-copy">If work is accepted, you are responsible for providing authorized access to the relevant website, CMS, hosting, analytics, DNS, ecommerce, CRM, or third-party systems.</p>
      <p class="wide-copy">You confirm that you have the right to authorize work on any site, system, account, content, data, or asset you provide.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Third parties" h2="Platforms, plugins, and services" />
      <p class="wide-copy">Many website tasks depend on third-party platforms such as WordPress, Shopify, Google tools, hosting providers, form plugins, analytics platforms, page builders, CRMs, payment providers, or API vendors.</p>
      <p class="wide-copy">The Web Guy is not responsible for outages, policy changes, bugs, fees, limits, or account decisions controlled by those third-party services.</p>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Acceptable use" h2="Do not misuse the site" />
    <ul class="check-list">
      <li>Do not attempt to break, overload, scan, exploit, or interfere with the site or its hosting.</li>
      <li>Do not submit spam, deceptive requests, malicious files, phishing content, or unlawful material.</li>
      <li>Do not use the site to request work that violates laws, platform rules, privacy obligations, or another person's rights.</li>
      <li>Do not copy site content, branding, code, or visual assets in a way that falsely implies ownership, endorsement, or affiliation.</li>
    </ul>
  </section>

  <section class="section split-section section-effect section-effect--traces section-effect--low">
    <div>
      <SectionHeading eyebrow="No guarantees" h2="Results depend on context" />
      <p class="wide-copy">Website support can improve implementation, cleanup, structure, performance, tracking, reliability, or technical quality, but no specific SEO ranking, revenue result, conversion rate, uptime level, speed score, or business outcome is guaranteed.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Limitation" h2="Use at your own risk" />
      <p class="wide-copy">The site and its content are provided as-is. To the maximum extent allowed by law, The Web Guy is not liable for indirect, incidental, consequential, special, punitive, or lost-profit damages arising from use of the site or reliance on its content.</p>
    </div>
  </section>

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading eyebrow="Privacy" h2="Privacy policy" />
      <p class="wide-copy">Use of the site is also covered by the <a class="text-link" href="/privacy/" title="Read The Web Guy Privacy Policy">Privacy Policy</a>, which explains how contact form submissions, analytics, hosting logs, and Gmail API email delivery are handled.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Changes" h2="Updates to these terms" />
      <p class="wide-copy">These terms may be updated as the site adds new services, API-backed features, analytics, automation, content, or support workflows. The effective date will be updated when meaningful changes are made.</p>
    </div>
  </section>
</main>
