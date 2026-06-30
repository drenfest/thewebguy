<script>
  import { browser, dev } from "$app/environment";
  import { env } from "$env/dynamic/public";
  import { onMount } from "svelte";
  import { trackEvent } from "$lib/analytics.js";

  const defaultPropertyId = "6a43edcd82c4e81d44ac79af";
  const defaultWidgetId = "1jsclhqsd";
  const widgetPositions = new Set(["br", "bl", "cr", "cl", "tr", "tl"]);

  function publicEnv(key, fallback = "") {
    return (env[key] || fallback).trim();
  }

  function booleanEnv(key, fallback = "true") {
    return publicEnv(key, fallback).toLowerCase() !== "false";
  }

  function widgetPosition(key, fallback) {
    const value = publicEnv(key, fallback).toLowerCase();
    return widgetPositions.has(value) ? value : fallback;
  }

  const propertyId = publicEnv("PUBLIC_TAWK_PROPERTY_ID", defaultPropertyId);
  const widgetId = publicEnv("PUBLIC_TAWK_WIDGET_ID", defaultWidgetId);
  const enabled = booleanEnv("PUBLIC_TAWK_ENABLED");
  const autoStart = booleanEnv("PUBLIC_TAWK_AUTO_START");
  const hideWhenOffline = booleanEnv("PUBLIC_TAWK_HIDE_WHEN_OFFLINE");
  const allowedHosts = publicEnv("PUBLIC_TAWK_ALLOWED_HOSTS")
    .split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);
  const tawkCustomStyle = {
    zIndex: publicEnv("PUBLIC_TAWK_Z_INDEX", "70"),
    visibility: {
      desktop: {
        position: widgetPosition("PUBLIC_TAWK_DESKTOP_POSITION", "br"),
        xOffset: publicEnv("PUBLIC_TAWK_DESKTOP_X_OFFSET", "18"),
        yOffset: publicEnv("PUBLIC_TAWK_DESKTOP_Y_OFFSET", "18")
      },
      mobile: {
        position: widgetPosition("PUBLIC_TAWK_MOBILE_POSITION", "br"),
        xOffset: publicEnv("PUBLIC_TAWK_MOBILE_X_OFFSET", "12"),
        yOffset: publicEnv("PUBLIC_TAWK_MOBILE_Y_OFFSET", "12")
      }
    }
  };
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

  function cleanPayload(payload) {
    return Object.fromEntries(Object.entries(payload).filter(([, value]) => value !== undefined && value !== null));
  }

  function setLiveChatStatus(nextStatus) {
    status = nextStatus;
    if (browser) document.documentElement.dataset.liveChatStatus = nextStatus;
  }

  function setLiveChatWindowState(nextState) {
    if (!browser) return;
    document.documentElement.dataset.liveChatWindow = nextState;
  }

  function updateLiveChatWindowState(api = window.Tawk_API) {
    if (!api) return;

    if (api.isChatMaximized?.()) {
      setLiveChatWindowState("maximized");
      return;
    }

    if (api.isChatMinimized?.()) {
      setLiveChatWindowState("minimized");
      return;
    }

    if (api.isChatHidden?.()) {
      setLiveChatWindowState("hidden");
      return;
    }

    setLiveChatWindowState("available");
  }

  function dispatchLiveChatEvent(action, detail = {}) {
    if (!browser) return;

    window.dispatchEvent(
      new CustomEvent("thewebguy:live-chat", {
        detail: cleanPayload({
          provider: "tawk",
          action,
          status,
          ...detail
        })
      })
    );
  }

  function trackLiveChatEvent(action, extra = {}) {
    const payload = cleanPayload({
      chat_provider: "tawk",
      chat_action: action,
      chat_status: status,
      ...extra
    });

    trackEvent("live_chat_event", payload);
    dispatchLiveChatEvent(action, extra);
  }

  function addTawkEvent(api, name, metadata = {}) {
    api.addEvent?.(name, cleanPayload(metadata), (error) => {
      if (!error) return;
      trackLiveChatEvent("tawk_event_error", {
        chat_event_name: name,
        chat_error: String(error)
      });
    });
  }

  function addTawkTags(api, tags) {
    api.addTags?.(tags, (error) => {
      if (!error) return;
      trackLiveChatEvent("tawk_tag_error", {
        chat_error: String(error)
      });
    });
  }

  function applyAvailability(nextStatus) {
    const api = window.Tawk_API;
    if (!api) return;

    if (!networkOnline) {
      if (!api.isVisitorEngaged?.() && hideWhenOffline) api.hideWidget?.();
      updateLiveChatWindowState(api);
      return;
    }

    if (nextStatus === "online") {
      api.showWidget?.();
      updateLiveChatWindowState(api);
      return;
    }

    if (hideWhenOffline) api.hideWidget?.();
    updateLiveChatWindowState(api);
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
    document.documentElement.dataset.liveChatStatus = status;

    if (!hasConfig) {
      if (!networkOnline) setLiveChatStatus("connection-lost");

      const handlePreviewOnline = () => {
        networkOnline = true;
        setLiveChatStatus("setup");
        document.documentElement.dataset.liveChatNetwork = "online";
      };
      const handlePreviewOffline = () => {
        networkOnline = false;
        setLiveChatStatus("connection-lost");
        document.documentElement.dataset.liveChatNetwork = "offline";
      };

      window.addEventListener("online", handlePreviewOnline);
      window.addEventListener("offline", handlePreviewOffline);

      return () => {
        window.removeEventListener("online", handlePreviewOnline);
        window.removeEventListener("offline", handlePreviewOffline);
        delete document.documentElement.dataset.liveChat;
        delete document.documentElement.dataset.liveChatNetwork;
        delete document.documentElement.dataset.liveChatStatus;
      };
    }

    if (!hostIsAllowed()) {
      setLiveChatStatus("restricted");
      document.documentElement.dataset.liveChat = "restricted";
      trackLiveChatEvent("restricted_host", { chat_hostname: window.location.hostname });

      return () => {
        delete document.documentElement.dataset.liveChat;
        delete document.documentElement.dataset.liveChatNetwork;
        delete document.documentElement.dataset.liveChatStatus;
      };
    }

    const previousLiveChatBridge = window.theWebGuyLiveChat;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = window.Tawk_LoadStart || new Date();

    const api = window.Tawk_API;
    api.autoStart = autoStart;
    api.customStyle = tawkCustomStyle;

    const previousBeforeLoad = api.onBeforeLoad;
    const previousLoad = api.onLoad;
    const previousStatusChange = api.onStatusChange;
    const previousChatMaximized = api.onChatMaximized;
    const previousChatMinimized = api.onChatMinimized;
    const previousChatHidden = api.onChatHidden;
    const previousChatStarted = api.onChatStarted;
    const previousChatEnded = api.onChatEnded;
    const previousPrechatSubmit = api.onPrechatSubmit;
    const previousOfflineSubmit = api.onOfflineSubmit;
    const previousVisitorMessage = api.onChatMessageVisitor;
    const previousAgentMessage = api.onChatMessageAgent;
    const previousSystemMessage = api.onChatMessageSystem;
    const previousAgentJoin = api.onAgentJoinChat;
    const previousAgentLeave = api.onAgentLeaveChat;
    const previousChatSatisfaction = api.onChatSatisfaction;
    const previousVisitorNameChanged = api.onVisitorNameChanged;
    const previousFileUpload = api.onFileUpload;
    const previousTagsUpdated = api.onTagsUpdated;
    const previousUnreadCountChanged = api.onUnreadCountChanged;
    let loadAttempts = 0;
    let retryTimer;

    const callApi = (method, ...args) => {
      if (typeof api[method] !== "function") return undefined;
      return api[method](...args);
    };

    window.theWebGuyLiveChat = {
      endChat: () => callApi("endChat"),
      getStatus: () => normalizeStatus(callApi("getStatus")),
      hide: () => callApi("hideWidget"),
      isChatOngoing: () => Boolean(callApi("isChatOngoing")),
      isVisitorEngaged: () => Boolean(callApi("isVisitorEngaged")),
      maximize: () => callApi("maximize"),
      minimize: () => callApi("minimize"),
      popup: () => callApi("popup"),
      show: () => callApi("showWidget"),
      start: () => callApi("start"),
      shutdown: () => callApi("shutdown"),
      toggle: () => callApi("toggle"),
      toggleVisibility: () => callApi("toggleVisibility")
    };

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
        setLiveChatStatus("error");
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
      updateLiveChatWindowState(api);
      trackLiveChatEvent("before_load");
    };

    api.onLoad = () => {
      previousLoad?.();
      setLiveChatStatus(normalizeStatus(api.getStatus?.()));
      applyAvailability(status);
      addTawkEvent(api, "site-chat-loaded", { status });
      trackLiveChatEvent("loaded");
    };

    api.onStatusChange = (nextStatus) => {
      previousStatusChange?.(nextStatus);
      setLiveChatStatus(normalizeStatus(nextStatus));
      applyAvailability(status);
      trackLiveChatEvent("status_change");
    };

    api.onChatMaximized = () => {
      previousChatMaximized?.();
      setLiveChatWindowState("maximized");
      trackLiveChatEvent("maximized");
    };

    api.onChatMinimized = () => {
      previousChatMinimized?.();
      setLiveChatWindowState("minimized");
      trackLiveChatEvent("minimized");
    };

    api.onChatHidden = () => {
      previousChatHidden?.();
      setLiveChatWindowState("hidden");
      trackLiveChatEvent("hidden");
    };

    api.onChatStarted = () => {
      previousChatStarted?.();
      addTawkEvent(api, "site-chat-started", { status });
      trackLiveChatEvent("started");
    };

    api.onChatEnded = () => {
      previousChatEnded?.();
      addTawkEvent(api, "site-chat-ended", { status });
      trackLiveChatEvent("ended");
    };

    api.onPrechatSubmit = (data) => {
      previousPrechatSubmit?.(data);
      addTawkTags(api, ["prechat-contact-captured"]);
      addTawkEvent(api, "prechat-contact-captured", { status });
      trackLiveChatEvent("prechat_submitted");
    };

    api.onOfflineSubmit = (data) => {
      previousOfflineSubmit?.(data);
      addTawkEvent(api, "offline-form-submitted", {
        question_count: Array.isArray(data?.questions) ? data.questions.length : undefined
      });
      trackLiveChatEvent("offline_form_submitted", {
        chat_question_count: Array.isArray(data?.questions) ? data.questions.length : undefined
      });
    };

    api.onChatMessageVisitor = () => {
      previousVisitorMessage?.();
      trackLiveChatEvent("visitor_message");
    };

    api.onChatMessageAgent = () => {
      previousAgentMessage?.();
      trackLiveChatEvent("agent_message");
    };

    api.onChatMessageSystem = () => {
      previousSystemMessage?.();
      trackLiveChatEvent("system_message");
    };

    api.onAgentJoinChat = (data) => {
      previousAgentJoin?.(data);
      trackLiveChatEvent("agent_joined", {
        chat_agent_has_image: Boolean(data?.image),
        chat_agent_position: data?.position
      });
    };

    api.onAgentLeaveChat = (data) => {
      previousAgentLeave?.(data);
      trackLiveChatEvent("agent_left", {
        chat_agent_had_id: Boolean(data?.id)
      });
    };

    api.onChatSatisfaction = (satisfaction) => {
      previousChatSatisfaction?.(satisfaction);
      trackLiveChatEvent("satisfaction", {
        chat_satisfaction: satisfaction
      });
    };

    api.onVisitorNameChanged = () => {
      previousVisitorNameChanged?.();
      trackLiveChatEvent("visitor_name_changed");
    };

    api.onFileUpload = () => {
      previousFileUpload?.();
      trackLiveChatEvent("file_uploaded");
    };

    api.onTagsUpdated = (data) => {
      previousTagsUpdated?.(data);
      trackLiveChatEvent("tags_updated", {
        chat_tag_count: Array.isArray(data?.tags) ? data.tags.length : undefined
      });
    };

    api.onUnreadCountChanged = (count) => {
      previousUnreadCountChanged?.(count);
      document.documentElement.dataset.liveChatUnread = String(count || 0);
      trackLiveChatEvent("unread_count_changed", {
        chat_unread_count: Number(count) || 0
      });
    };

    const handleOnline = () => {
      networkOnline = true;
      document.documentElement.dataset.liveChatNetwork = "online";
      trackLiveChatEvent("network_online");
      ensureTawkScript({ force: status === "error" });
      setLiveChatStatus(normalizeStatus(api.getStatus?.()));
      applyAvailability(status);
    };

    const handleOffline = () => {
      networkOnline = false;
      document.documentElement.dataset.liveChatNetwork = "offline";
      setLiveChatStatus("connection-lost");
      trackLiveChatEvent("network_offline", { chat_engaged: Boolean(api.isVisitorEngaged?.()) });
      applyAvailability(status);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (networkOnline) {
      ensureTawkScript();
    } else {
      setLiveChatStatus("connection-lost");
      trackLiveChatEvent("initial_network_offline");
    }

    return () => {
      window.clearTimeout(retryTimer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      api.onBeforeLoad = previousBeforeLoad;
      api.onLoad = previousLoad;
      api.onStatusChange = previousStatusChange;
      api.onChatMaximized = previousChatMaximized;
      api.onChatMinimized = previousChatMinimized;
      api.onChatHidden = previousChatHidden;
      api.onChatStarted = previousChatStarted;
      api.onChatEnded = previousChatEnded;
      api.onPrechatSubmit = previousPrechatSubmit;
      api.onOfflineSubmit = previousOfflineSubmit;
      api.onChatMessageVisitor = previousVisitorMessage;
      api.onChatMessageAgent = previousAgentMessage;
      api.onChatMessageSystem = previousSystemMessage;
      api.onAgentJoinChat = previousAgentJoin;
      api.onAgentLeaveChat = previousAgentLeave;
      api.onChatSatisfaction = previousChatSatisfaction;
      api.onVisitorNameChanged = previousVisitorNameChanged;
      api.onFileUpload = previousFileUpload;
      api.onTagsUpdated = previousTagsUpdated;
      api.onUnreadCountChanged = previousUnreadCountChanged;
      if (previousLiveChatBridge) {
        window.theWebGuyLiveChat = previousLiveChatBridge;
      } else {
        delete window.theWebGuyLiveChat;
      }
      delete document.documentElement.dataset.liveChat;
      delete document.documentElement.dataset.liveChatNetwork;
      delete document.documentElement.dataset.liveChatStatus;
      delete document.documentElement.dataset.liveChatWindow;
      delete document.documentElement.dataset.liveChatUnread;
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
          <button type="button" class="live-chat-preview-close" aria-label="Close live chat preview" onclick={closeSetupPreview}>&times;</button>
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
