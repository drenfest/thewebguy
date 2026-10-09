<script>
  import Seo from "$lib/components/Seo.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import SectionHeading from "$lib/components/SectionHeading.svelte";
  import CardGrid from "$lib/components/CardGrid.svelte";
  import FaqList from "$lib/components/FaqList.svelte";
  import InlineLeadForm from "$lib/components/InlineLeadForm.svelte";
  import { staticHeroImages } from "$lib/data/hero-images.js";
  import { breadcrumbSchema, faqSchema, schemaList } from "$lib/data/schema.js";
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "How Quotes Work" }];
  const questions = [
    ["Is the quote really free?", "Yes. There is no charge to describe the work and request a quote. Code review, testing, diagnosis, implementation, and ongoing support are paid services with scope and cost agreed first."],
    ["What is your hourly rate?", "Hourly pricing generally ranges from $70 to $90 per hour. The exact rate depends on the work, and it may decrease for a larger, recurring, or consistently scheduled volume of work."],
    ["Can work be quoted as a project?", "Yes. When the scope and deliverables are clear, the work can be quoted at a fixed or project-based price instead of hourly billing."],
    ["What if you need to investigate before quoting a fix?", "Some problems need technical investigation before a reliable fix can be scoped. I will explain what needs checking and quote that diagnostic work first. You approve it before it starts."],
    ["Do I need a complete brief?", "No. Start with the website, the problem or goal, and your timeline. You do not need to know the technical cause. I will ask questions to clarify fit and scope."],
    ["Can I request ongoing or agency support?", "Yes. We can define a recurring scope, priorities, communication, and billing terms that fit the work. One-time tasks and ongoing support are both available."],
    ["What happens if the scope changes?", "Changes that affect the agreed work or cost are discussed before proceeding. You should know what is included and what needs a separate decision."]
  ];
</script>

<Seo title="How Website Quotes Work | The Web Guy" description="Website support typically ranges from $70 to $90 per hour, with volume rates and fixed project quotes available. Agree the scope and cost before paid work begins." schema={schemaList(breadcrumbSchema(breadcrumbs, "/rate/"), faqSchema(questions))} />
<main>
  <Hero eyebrow="How quotes work" h1="Start With the Problem. Get a Clear Quote." intro="You should know what the work covers and what it costs before committing. Send the site or project goal, and I will help define a useful next step." cta="Get a Free Quote" ctaHref="#quote-form" secondary="What to Send" secondaryHref="#quote-details" image={staticHeroImages.rate} />
  <Breadcrumbs items={breadcrumbs} />
  <section class="section">
    <SectionHeading eyebrow="From request to useful work" h2="A Simple Way to Start" />
    <div class="process-grid">
      {#each [
        ["01", "Describe the work", "Send the URL if available, what is broken or needed, and your timeline."],
        ["02", "Get a scoped quote", "I confirm fit, ask any needed questions, and explain the proposed work and cost."],
        ["03", "Approve the next step", "Paid investigation, review, or implementation begins after you agree the scope."],
        ["04", "Get a clear handoff", "See what changed, what was checked, and anything that still needs a decision."]
      ] as [number, title, copy]}
        <article><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
      {/each}
    </div>
  </section>
  <section class="section soft-section">
    <SectionHeading
      eyebrow="Flexible pricing options"
      h2="Hourly, Volume, and Project-Based Pricing"
      body="Choose the pricing structure that best fits the work. The scope, expected workload, complexity, and timing are confirmed before paid work begins."
    />
    <div class="process-grid">
      <article>
        <span>01</span>
        <h3>$70 - $90 per hour</h3>
        <p>Hourly pricing generally falls within this range. The final rate depends on the type and complexity of the work.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Lower rates for more work</h3>
        <p>The hourly rate can decrease for larger engagements, recurring support, or a consistent quantity of scheduled work.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Project-based quotes</h3>
        <p>When the scope and deliverables are clear, work can be quoted at a fixed project price instead of billed by the hour.</p>
      </article>
    </div>
  </section>
  <section class="section soft-section" id="quote-details">
    <SectionHeading eyebrow="No technical brief required" h2="Send What You Know" body="A short explanation is enough to start. Do not include passwords, API keys, or other secrets. Repository access can be arranged later if the work needs it." />
    <CardGrid items={[
      ["A website problem", "The affected page, what should happen, what happens instead, and anything that recently changed.", "/services/website-fixes/", "Website fixes"],
      ["An AI build or code change", "What you built, your stack if known, what you want checked, and whether this is a one-time review or ongoing work.", "/ai-development-oversight/", "AI Development Oversight"],
      ["A project or task list", "The outcome you want, the platform, priorities, and any deadline. Mention audit notes or a backlog if you have one.", "/services/", "Explore services"]
    ]} />
  </section>
  <section class="section"><SectionHeading eyebrow="Before you commit" h2="Questions About Scope and Cost" /><FaqList items={questions} askQuestion={false} /></section>
  <InlineLeadForm
    id="quote-form"
    eyebrow="Free quote request"
    heading="Tell me what you need done"
    intro="Send the useful details now. I will confirm fit, define the likely next step, and explain the scope and cost before paid work begins."
    sourcePath="/rate/"
    sourceTitle="How Quotes Work"
    sourceType="quote_process"
    sourceCta="rate_inline_quote_form"
    service="Website project quote"
    workType="Free quote request"
    detailsLabel="What needs to be fixed, built, or improved?"
    detailsPlaceholder="Describe the problem or goal, what should happen, and anything that recently changed."
    submitText="Request My Free Quote"
  />
</main>
