<script>
  import { onMount } from "svelte";
  import { trackEvent } from "$lib/analytics.js";

  let visible = $state(false);
  let response = $state("");
  let dismissed = $state(false);
  let pendingHref = $state("");
  const storageKey = "theWebGuyExitPromptDismissed";

  function showPrompt(trigger) {
    if (visible || dismissed || sessionStorage.getItem(storageKey) === "true") return;
    if (window.location.pathname === "/contact/") return;

    visible = true;
    trackEvent("exit_intent_prompt_view", { exit_trigger: trigger });
  }

  function leaveSite() {
    const href = pendingHref;
    closePrompt("continue_exit");
    if (href) window.location.href = href;
  }

  function closePrompt(action = "dismiss") {
    visible = false;
    dismissed = true;
    sessionStorage.setItem(storageKey, "true");
    trackEvent("exit_intent_prompt_close", { prompt_action: action });
  }

  function submitFeedback() {
    const text = response.trim();
    trackEvent("exit_intent_feedback", {
      feedback_length: text.length,
      feedback_length_bucket: text.length < 20 ? "short" : text.length < 120 ? "medium" : "long",
      has_feedback: Boolean(text)
    });
    closePrompt("feedback_sent");
  }

  onMount(() => {
    if (sessionStorage.getItem(storageKey) === "true") return;

    const handleLeavingLink = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest?.("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      const leavesSite = destination.origin !== window.location.origin || ["mailto:", "tel:"].includes(destination.protocol);
      if (!leavesSite) return;

      event.preventDefault();
      pendingHref = destination.href;
      showPrompt("leaving_site_link");
    };

    document.addEventListener("click", handleLeavingLink, true);

    return () => {
      document.removeEventListener("click", handleLeavingLink, true);
    };
  });
</script>

{#if visible}
  <div class="exit-prompt" role="dialog" aria-modal="true" aria-labelledby="exit-prompt-title">
    <div class="exit-prompt-panel">
      <button type="button" class="exit-prompt-close" aria-label="Close prompt" onclick={() => closePrompt()}>×</button>
      <p class="eyebrow">Before you go</p>
      <h2 id="exit-prompt-title">Didn't find what you're looking for?</h2>
      <label>
        <span>Tell us about it</span>
        <textarea bind:value={response} rows="3" placeholder="What were you trying to find?"></textarea>
      </label>
      <div class="exit-prompt-actions">
        <button type="button" class="button button-primary button-small" onclick={submitFeedback}>Send Feedback</button>
        {#if pendingHref}
          <button type="button" class="button button-small dark-button" onclick={leaveSite}>Continue Leaving</button>
        {/if}
        <a class="button button-small dark-button" href="/contact/" onclick={() => closePrompt("contact_click")}>Contact</a>
      </div>
    </div>
  </div>
{/if}
