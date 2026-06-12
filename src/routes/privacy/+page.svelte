<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import InternalLinkCopy from "$lib/components/InternalLinkCopy.svelte";

  const breadcrumbs = [
    { label: "Home", href: "/", title: "View The Web Guy homepage" },
    { label: "Privacy Policy", title: "Current page: Privacy Policy" }
  ];

  const policyLinks = [
    [
      "This policy applies to ",
      { text: "The Web Guy", href: "/", title: "View The Web Guy homepage" },
      ", the ",
      { text: "contact request form", href: "/contact/", title: "Open the contact request form" },
      ", website analytics, and related site support workflows."
    ]
  ];
</script>

<Seo
  title="Privacy Policy | The Web Guy"
  description="Privacy Policy for The Web Guy, including contact form data, analytics, Gmail API email delivery, and how website support requests are handled."
/>

<main>
  <Hero
    eyebrow="Privacy"
    h1="Privacy Policy"
    intro="How The Web Guy handles contact form submissions, website usage data, email delivery, and the limited information needed to respond to website support requests."
    cta="Send a Website Request"
    ctaHref="/contact/"
    secondary="Read Terms"
    secondaryHref="/terms/"
    showCapabilityLinks={false}
  />

  <Breadcrumbs items={breadcrumbs} />

  <section class="section section-effect section-effect--grid section-effect--low">
    <SectionHeading
      eyebrow="Effective date"
      h2="June 12, 2026"
      body="This Privacy Policy is written for a practical contract website support site. It is intended to explain what is collected, why it is collected, and how it is used."
    />
    <InternalLinkCopy paragraphs={policyLinks} />
  </section>

  <section class="section split-section section-effect section-effect--signals section-effect--low">
    <div>
      <SectionHeading eyebrow="Information you send" h2="Contact form submissions" />
      <p class="wide-copy">When you use the request form, the site may collect the information you choose to provide, including your name, email address, company or agency name, website URL, project details, service category, timeline, location, work type, and approximate monthly hours.</p>
      <p class="wide-copy">That information is used to understand the request, reply to you, estimate fit, and provide contract website support. Do not submit passwords, private credentials, payment card numbers, or sensitive account access through the form.</p>
    </div>
    <div>
      <SectionHeading eyebrow="How requests move" h2="Email delivery" />
      <p class="wide-copy">Contact form submissions are sent server-side to a private inbox for review. The submitted email address is used as the reply-to address so follow-up can happen directly.</p>
      <p class="wide-copy">The site currently uses the Gmail API to deliver contact request emails over HTTPS. This avoids exposing the private destination email address in the browser and avoids blocked SMTP ports on the hosting platform.</p>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--traces section-effect--low">
    <SectionHeading
      eyebrow="Google API disclosure"
      h2="Limited Gmail API use"
      body="The Gmail API is used only to send contact form notification emails from the server. The Web Guy does not use Gmail API access to read visitor email, scan mailbox content, build advertising profiles, sell Google user data, or transfer Google API data for unrelated purposes."
    />
    <ul class="check-list">
      <li>Gmail API access is limited to sending email notifications for contact form submissions.</li>
      <li>Google API data is not sold or used for advertising.</li>
      <li>Google API data is not used to train generalized AI models.</li>
      <li>Access tokens and refresh tokens are stored as private server environment variables, not in browser code.</li>
      <li>The Web Guy's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.</li>
    </ul>
    <p class="wide-copy">Google's API data policy is available at <a class="text-link" href="https://developers.google.com/terms/api-services-user-data-policy" title="View Google API Services User Data Policy">Google API Services User Data Policy</a>.</p>
  </section>

  <section class="section split-section section-effect section-effect--grid section-effect--low">
    <div>
      <SectionHeading eyebrow="Analytics" h2="Website usage data" />
      <p class="wide-copy">The site may use Google Analytics 4 to understand how visitors use the site, which pages are viewed, which links or calls to action are clicked, FAQ interactions, scroll depth, and broad contact form interaction events.</p>
      <p class="wide-copy">Analytics events are designed to avoid private contact form content. Names, email addresses, website URLs, and detailed message text are not intentionally sent to analytics.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Technical data" h2="Hosting, logs, and browser behavior" />
      <p class="wide-copy">The hosting provider may process standard technical logs such as IP address, user agent, request URL, timestamps, and error details to keep the site secure, available, and working properly.</p>
      <p class="wide-copy">The site also includes PWA-related files such as a web manifest and service worker. These improve browser behavior and asset caching but are not intended to collect extra personal information.</p>
    </div>
  </section>

  <section class="section soft-section section-effect section-effect--signals section-effect--low">
    <SectionHeading eyebrow="Data handling" h2="Storage, sharing, and retention" />
    <ul class="check-list">
      <li>Contact requests are kept as long as reasonably needed for follow-up, project context, records, and basic business operations.</li>
      <li>Information may be shared with service providers that operate the site, email delivery, analytics, hosting, or security tools.</li>
      <li>Information may be disclosed when required by law, security needs, fraud prevention, or to protect the site and its users.</li>
      <li>Contact form submissions are not sold.</li>
      <li>If a request becomes paid work, additional project records may be kept as part of normal contractor operations.</li>
    </ul>
  </section>

  <section class="section split-section section-effect section-effect--traces section-effect--low">
    <div>
      <SectionHeading eyebrow="Your choices" h2="Access, updates, and deletion" />
      <p class="wide-copy">You can ask for a copy, correction, or deletion of information you submitted through the contact form, subject to reasonable business, security, and legal retention needs.</p>
      <p class="wide-copy">Use the <a class="text-link" href="/contact/" title="Open the contact request form">contact request form</a> for privacy questions or data requests.</p>
    </div>
    <div>
      <SectionHeading eyebrow="Policy changes" h2="Updates to this policy" />
      <p class="wide-copy">This policy may be updated as the site adds features, services, integrations, analytics, automation, or API-backed workflows. The effective date will be updated when meaningful changes are made.</p>
      <p class="wide-copy">Continued use of the site after an update means the updated policy applies going forward.</p>
    </div>
  </section>
</main>

