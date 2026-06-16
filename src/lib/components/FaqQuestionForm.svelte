<script>
  import { onMount } from "svelte";
  import { trackEvent } from "$lib/analytics.js";

  let { context = "faq_list" } = $props();

  let question = $state("");
  let websiteUrl = $state("");
  let challengeAnswer = $state("");
  let challengeA = $state(2);
  let challengeB = $state(3);
  let formLoadedAt = $state("");
  let status = $state({ type: "idle", message: "" });
  const locked = $derived(status.type === "loading" || status.type === "success");

  function questionBucket(value = "") {
    const length = value.trim().length;
    if (length < 40) return "short";
    if (length < 140) return "medium";
    return "long";
  }

  function contentSuggestion(value = "") {
    const text = value.toLowerCase();
    if (/why|how|what if|steps|guide|compare|difference|best|should i|when should/.test(text) || value.length > 120) return "blog_post_candidate";
    return "faq_candidate";
  }

  onMount(() => {
    formLoadedAt = String(Date.now());
    challengeA = Math.floor(Math.random() * 4) + 2;
    challengeB = Math.floor(Math.random() * 4) + 2;
  });

  async function submitQuestion(event) {
    event.preventDefault();
    if (locked) return;

    const trimmedQuestion = question.trim();
    status = { type: "loading", message: "Checking the question..." };

    const payload = {
      question: trimmedQuestion,
      websiteUrl,
      challengeA,
      challengeB,
      challengeAnswer,
      formLoadedAt,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      pageUrl: window.location.href,
      pageSection: context,
      pageType: document.body.dataset.pageType || ""
    };

    try {
      const response = await fetch("/api/faq-question", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || "The question could not be sent.");

      const suggestedContentType = contentSuggestion(trimmedQuestion);
      trackEvent("faq_question_asked", {
        faq_question_text: trimmedQuestion,
        faq_question_length: trimmedQuestion.length,
        faq_question_length_bucket: questionBucket(trimmedQuestion),
        suggested_content_type: suggestedContentType,
        asked_on_page_path: window.location.pathname,
        asked_on_page_title: document.title,
        asked_from_context: context,
        bot_check_passed: true
      });

      status = {
        type: "success",
        message: suggestedContentType === "blog_post_candidate" ? "Question received. This may be worth expanding into a deeper post." : "Question received. This may fit the FAQ."
      };
      question = "";
      challengeAnswer = "";
    } catch (error) {
      trackEvent("faq_question_rejected", {
        asked_on_page_path: window.location.pathname,
        asked_from_context: context,
        error_message: error.message || "unknown"
      });
      status = { type: "error", message: error.message || "The question could not be sent. Please try again." };
    }
  }
</script>

<form class="faq-question-form" onsubmit={submitQuestion}>
  <div>
    <p class="eyebrow">Ask the FAQ</p>
    <h2>Still have a question?</h2>
  </div>
  <label>
    <span>Your question</span>
    <textarea bind:value={question} name="question" rows="4" minlength="8" maxlength="500" required placeholder="Ask the thing you expected this page to answer."></textarea>
  </label>
  <div class="faq-question-check">
    <label>
      <span>Bot check: {challengeA} + {challengeB}</span>
      <input bind:value={challengeAnswer} name="challengeAnswer" inputmode="numeric" pattern="[0-9]*" required placeholder="Answer" />
    </label>
    <label class="bot-field" aria-hidden="true" tabindex="-1">
      Leave this field blank
      <input bind:value={websiteUrl} name="websiteUrl" type="text" autocomplete="off" tabindex="-1" />
    </label>
  </div>
  <input type="hidden" name="formLoadedAt" value={formLoadedAt} />
  {#if status.message}<p class={`form-status ${status.type}`}>{status.message}</p>{/if}
  <button class="button button-primary button-small" type="submit" disabled={locked} aria-disabled={locked}>
    {status.type === "loading" ? "Sending..." : status.type === "success" ? "Question Sent" : "Send Question"}
  </button>
</form>
