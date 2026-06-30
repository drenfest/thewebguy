<script>
  import { browser, dev } from "$app/environment";
  import { env } from "$env/dynamic/public";
  import { onMount } from "svelte";
  import { trackEvent } from "$lib/analytics.js";

  const defaultPropertyId = "6a43edcd82c4e81d44ac79af";
  const defaultWidgetId = "1jsclhqsd";
  const propertyId = (env.PUBLIC_TAWK_PROPERTY_ID || defaultPropertyId).trim();
  const widgetId = (env.PUBLIC_TAWK_WIDGET_ID || defaultWidgetId).trim();
  const enabled = (env.PUBLIC_TAWK_ENABLED ?? "true").toLowerCase() !== "false";
  const hideWhenOffline = (env.PUBLIC_TAWK_HIDE_WHEN_OFFLINE ?? "true").toLowerCase() !== "false";
  const allowedHosts = (env.PUBLIC_TAWK_ALLOWED_HOSTS || "")
    .split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);
  const hasConfig = Boolean(propertyId && widgetId);
  const scriptId = "tawk-live-chat-script";
  const scriptSrc = hasConfig ? `https://embed.tawk.to/${encodeURIComponent(propertyId)}/${encodeURIComponent(widgetId)}` : "";
  const showSetupPreview = dev && enabled && !hasConfig;
  const maxLoadAttempts = 4;

  let status = $state(hasConfig ? "loading" : "setup");
  let networkOnline = $state(true);
  let setupPreviewOpen = $state(false);
  let previewContactName = $state("");
  let previewContactMethod = $state("");
  let previewContactSubmitted = $state(false);

  const statusCopy = $derived(
    !networkOnline
      ? "Connection lost"
      : status === "online"
      ? "Online"
      : status === "away"
        ? "Away"
        : status === "offline"
          ? "Offline"
          : status === "error"
            ? "Setup issue"
            : status === "restricted"
              ? "Unavailable"
            : "Setup needed"
  );
  const previewContactReady = $derived(Boolean(previewContactName.trim() && previewContactMethod.trim()));

  function normalizeStatus(value) {
    return ["online", "away", "offline"].includes(value) ? value : "offline";
  }

  function connectionIsOnline() {
    return !browser || typeof navigator === "undefined" || navigator.onLine !== false;
  }

  function hostIsAllowed() {
    if (!browser || !allowedHosts.length) return true;

    const hostname = window.location.hostname.toLowerCase();
    return allowedHosts.some((host) => {
      if (host === hostname) return true;
      if (host.startsWith("*.")) return hostname.endsWith(host.slice(1));
      return false;
    });
  }

  function applyAvailability(nextStatus) {
    const api = window.Tawk_API;
    if (!api) return;

    if (!networkOnline) {
      if (!api.isVisitorEngaged?.() && hideWhenOffline) api.hideWidget?.();
      return;
    }

    if (nextStatus === "online") {
      api.showWidget?.();
      return;
    }

    if (hideWhenOffline) api.hideWidget?.();
  }

  function trackLiveChatEvent(action, extra = {}) {
    trackEvent("live_chat_event", {
      chat_provider: "tawk",
      chat_action: action,
      chat_status: status,
      ...extra
    });
  }

  function openSetupPreview() {
    setupPreviewOpen = true;
  }

  function closeSetupPreview() {
    setupPreviewOpen = false;
  }

  function submitPreviewContact(event) {
    event.preventDefault();
    if (!previewContactReady) return;
    previewContactSubmitted = true;
  }

  onMount(() => {
    if (!browser || !enabled) return;

    networkOnline = connectionIsOnline();
    document.documentElement.dataset.liveChat = hasConfig ? "configured" : "setup-needed";
    document.documentElement.dataset.liveChatNetwork = networkOnline ? "online" : "offline";

    if (!hasConfig) {
      if (!networkOnline) status = "connection-lost";

      const handlePreviewOnline = () => {
        networkOnline = true;
        status = "setup";
        document.documentElement.dataset.liveChatNetwork = "online";
      };
      const handlePreviewOffline = () => {
        networkOnline = false;
        status = "connection-lost";
        document.documentElement.dataset.liveChatNetwork = "offline";
      };

      window.addEventListener("online", handlePreviewOnline);
      window.addEventListener("offline", handlePreviewOffline);

      return () => {
        window.removeEventListener("online", handlePreviewOnline);
        window.removeEventListener("offline", handlePreviewOffline);
        delete document.documentElement.dataset.liveChat;
        delete document.documentElement.dataset.liveChatNetwork;
      };
    }

    if (!hostIsAllowed()) {
      status = "restricted";
      document.documentElement.dataset.liveChat = "restricted";
      trackLiveChatEvent("restricted_host", { chat_hostname: window.location.hostname });

      return () => {
        delete document.documentElement.dataset.liveChat;
        delete document.documentElement.dataset.liveChatNetwork;
      };
    }

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();

    const api = window.Tawk_API;
    const previousBeforeLoad = api.onBeforeLoad;
    const previousLoad = api.onLoad;
    const previousStatusChange = api.onStatusChange;
    const previousChatStarted = api.onChatStarted;
    const previousChatEnded = api.onChatEnded;
    const previousPrechatSubmit = api.onPrechatSubmit;
    const previousVisitorMessage = api.onChatMessageVisitor;
    const previousAgentMessage = api.onChatMessageAgent;
    let loadAttempts = 0;
    let retryTimer;

    const scheduleScriptRetry = () => {
      if (!connectionIsOnline() || loadAttempts >= maxLoadAttempts) return;

      window.clearTimeout(retryTimer);
      const delay = Math.min(15000, 1500 * 2 ** Math.max(loadAttempts - 1, 0));
      retryTimer = window.setTimeout(() => {
        ensureTawkScript({ force: true });
      }, delay);
    };

    const ensureTawkScript = ({ force = false } = {}) => {
      if (!connectionIsOnline()) return;

      const existingScript = document.getElementById(scriptId);
      if (existingScript && !force) return;
      if (existingScript && force) existingScript.remove();

      loadAttempts += 1;

      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = scriptSrc;
      script.charset = "UTF-8";
      script.dataset.loadAttempt = String(loadAttempts);
      script.setAttribute("crossorigin", "*");
      script.onload = () => {
        trackLiveChatEvent("script_loaded", { chat_load_attempt: loadAttempts });
      };
      script.onerror = () => {
        status = "error";
        script.remove();
        trackLiveChatEvent("load_error", {
          chat_error: "script_load",
          chat_load_attempt: loadAttempts,
          chat_will_retry: connectionIsOnline() && loadAttempts < maxLoadAttempts
        });
        scheduleScriptRetry();
      };
      document.body.appendChild(script);
    };

    api.onBeforeLoad = () => {
      previousBeforeLoad?.();
      if (hideWhenOffline) api.hideWidget?.();
    };

    api.onLoad = () => {
      previousLoad?.();
      status = normalizeStatus(api.getStatus?.());
      applyAvailability(status);
      trackLiveChatEvent("loaded");
    };

    api.onStatusChange = (nextStatus) => {
      previousStatusChange?.(nextStatus);
      status = normalizeStatus(nextStatus);
      applyAvailability(status);
      trackLiveChatEvent("status_change");
    };

    api.onChatStarted = () => {
      previousChatStarted?.();
      trackLiveChatEvent("started");
    };

    api.onChatEnded = () => {
      previousChatEnded?.();
      trackLiveChatEvent("ended");
    };

    api.onPrechatSubmit = (data) => {
      previousPrechatSubmit?.(data);
      api.addTags?.(["prechat-contact-captured"], () => {});
      trackLiveChatEvent("prechat_submitted");
    };

    api.onChatMessageVisitor = () => {
      previousVisitorMessage?.();
      trackLiveChatEvent("visitor_message");
    };

    api.onChatMessageAgent = () => {
      previousAgentMessage?.();
      trackLiveChatEvent("agent_message");
    };

    const handleOnline = () => {
      networkOnline = true;
      document.documentElement.dataset.liveChatNetwork = "online";
      trackLiveChatEvent("network_online");
      ensureTawkScript({ force: status === "error" });
      status = normalizeStatus(api.getStatus?.());
      applyAvailability(status);
    };

    const handleOffline = () => {
      networkOnline = false;
      document.documentElement.dataset.liveChatNetwork = "offline";
      status = "connection-lost";
      trackLiveChatEvent("network_offline", { chat_engaged: Boolean(api.isVisitorEngaged?.()) });
      applyAvailability(status);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (networkOnline) {
      ensureTawkScript();
    } else {
      status = "connection-lost";
      trackLiveChatEvent("initial_network_offline");
    }

    return () => {
      window.clearTimeout(retryTimer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      api.onBeforeLoad = previousBeforeLoad;
      api.onLoad = previousLoad;
      api.onStatusChange = previousStatusChange;
      api.onChatStarted = previousChatStarted;
      api.onChatEnded = previousChatEnded;
      api.onPrechatSubmit = previousPrechatSubmit;
      api.onChatMessageVisitor = previousVisitorMessage;
      api.onChatMessageAgent = previousAgentMessage;
      delete document.documentElement.dataset.liveChat;
      delete document.documentElement.dataset.liveChatNetwork;
    };
  });
</script>

{#if enabled && hasConfig && !networkOnline}
  <div class="live-chat-network-notice" role="status">
    Connection lost. Chat will reconnect automatically when internet returns.
  </div>
{/if}

{#if showSetupPreview}
  <div class="live-chat-preview" data-status={status} aria-live="polite">
    {#if setupPreviewOpen}
      <section id="live-chat-preview-panel" class="live-chat-preview-panel" aria-labelledby="live-chat-preview-title">
        <div class="live-chat-preview-header">
          <div>
            <p class="live-chat-preview-kicker">Tawk setup preview</p>
            <h2 id="live-chat-preview-title">Live chat</h2>
          </div>
          <button type="button" class="live-chat-preview-close" aria-label="Close live chat preview" onclick={closeSetupPreview}>×</button>
        </div>

        <div class="live-chat-preview-body">
          {#if networkOnline}
            {#if previewContactSubmitted}
              <p class="live-chat-preview-message agent">Thanks. The real Tawk widget should require this contact step before chat starts.</p>
              <p class="live-chat-preview-message visitor">When you are online in Tawk, visitors can chat here right away.</p>
              <p class="live-chat-preview-message agent">When all agents are offline, the widget stays hidden and the existing contact form remains the fallback.</p>
            {:else}
              <form class="live-chat-preview-form" onsubmit={submitPreviewContact}>
                <p>Add your details to start a live chat.</p>
                <label>
                  Name
                  <input bind:value={previewContactName} name="preview-chat-name" type="text" autocomplete="name" required placeholder="Your name" />
                </label>
                <label>
                  Email or phone
                  <input bind:value={previewContactMethod} name="preview-chat-contact" type="text" autocomplete="email" required placeholder="you@example.com or +1 555 123 4567" />
                </label>
                <button class="live-chat-preview-start" type="submit" disabled={!previewContactReady}>Start chat</button>
              </form>
            {/if}
          {:else}
            <p class="live-chat-preview-message agent">Connection lost. The live widget stays mounted and retries when the browser comes back online.</p>
            <p class="live-chat-preview-message visitor">Messages handled inside Tawk can continue syncing when the connection returns.</p>
          {/if}
        </div>

        {#if previewContactSubmitted || !networkOnline}
          <div class="live-chat-preview-input" aria-hidden="true">
            <span>Message preview</span>
            <span class="live-chat-preview-send">Send</span>
          </div>
        {/if}
      </section>
    {/if}

    <button type="button" class="live-chat-preview-button" onclick={openSetupPreview} aria-expanded={setupPreviewOpen} aria-controls="live-chat-preview-panel">
      <span class="live-chat-preview-dot"></span>
      <span>Live chat</span>
      <small>{statusCopy}</small>
    </button>
  </div>
{/if}
