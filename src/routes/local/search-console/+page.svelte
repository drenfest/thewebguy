<script>
  import { invalidateAll } from '$app/navigation';

  const pageTabLabels = [
    { id: 'queries', label: 'Queries' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'changes', label: 'Changes' },
    { id: 'flow', label: 'Flow' }
  ];

  const comparisonWindowOrder = ['yesterday', 'lastWeek', 'lastMonth', 'lastQuarter', 'lastYear'];

  let { data } = $props();
  let editing = $state({});
  let prompts = $state({});
  let pageTabs = $state({});
  let submittingId = $state(null);
  let submittingBulk = $state(false);
  let selectedRunId = $state(null);
  let errorMessage = $state('');
  let pageFilter = $state('');
  const recommendationAutomationEnabled = false;

  async function handleAction(recommendation, runId, action) {
    submittingId = recommendation.id;
    errorMessage = '';
    try {
      const response = await fetch('/api/local/search-console/action', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          action,
          runId,
          recommendation,
          prompt: prompts[recommendation.id] || ''
        })
      });
      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        throw new Error(payload.error || 'Action failed.');
      }
      editing[recommendation.id] = false;
      await invalidateAll();
    } catch (error) {
      errorMessage = error.message;
    } finally {
      submittingId = null;
    }
  }

  async function handleRunAll() {
    submittingBulk = true;
    errorMessage = '';
    try {
      const payload = data.activeRecommendations.map((recommendation) => ({
        runId: recommendation.runId,
        recommendation
      }));
      const response = await fetch('/api/local/search-console/action', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          action: 'run_all',
          recommendations: payload
        })
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Bulk queue failed.');
      }
      await invalidateAll();
    } catch (error) {
      errorMessage = error.message;
    } finally {
      submittingBulk = false;
    }
  }

  function toggleEdit(recommendationId) {
    editing[recommendationId] = !editing[recommendationId];
  }

  function latestRun() {
    return data.latestRun || data.runs?.[0] || null;
  }

  function selectedRun() {
    const runs = data.runs || [];
    return runs.find((run) => run.runId === selectedRunId) || runs[0] || null;
  }

  function selectRun(runId) {
    selectedRunId = runId;
  }

  function queueCount(status) {
    return (data.state?.jobQueue || []).filter((job) => job.status === status).length;
  }

  function pageTab(path) {
    return pageTabs[path] || 'queries';
  }

  function setPageTab(path, tabId) {
    pageTabs[path] = tabId;
  }

  function latestStatus(recommendation) {
    return recommendation.statusHint || recommendation.latestAction?.status || 'new';
  }

  function formatNumber(value) {
    return new Intl.NumberFormat('en-US').format(Number(value || 0));
  }

  function formatPercent(value, digits = 1) {
    return `${Number(value || 0).toFixed(digits)}%`;
  }

  function formatSigned(value, digits = 0) {
    const numeric = Number(value || 0);
    return `${numeric > 0 ? '+' : ''}${numeric.toFixed(digits)}`;
  }

  function formatPositionDelta(value) {
    const numeric = Number(value || 0);
    if (!numeric) return 'no change';
    return numeric > 0 ? `${numeric.toFixed(1)} worse` : `${Math.abs(numeric).toFixed(1)} better`;
  }

  function formatSeconds(value) {
    const seconds = Number(value || 0);
    if (!seconds) return '0s';
    if (seconds < 60) return `${seconds.toFixed(0)}s`;
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.round(seconds % 60);
    return `${minutes}m ${remainder}s`;
  }

  function formatDateTime(value) {
    if (!value) return 'n/a';
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(value));
  }

  function pillClass(priority) {
    return `pill pill-${String(priority || 'neutral').toLowerCase()}`;
  }

  function changeStatusClass(status) {
    if (['completed', 'observed', 'observed_partial'].includes(status)) return 'high';
    if (['running', 'pending'].includes(status)) return 'medium';
    return 'neutral';
  }

  function pageComparison(pagePath) {
    return latestRun()?.pageComparisons?.find((page) => page.path === pagePath) || null;
  }

  function pageRecommendations(pagePath) {
    return data.activeRecommendations.filter((recommendation) => (
      recommendation.targetType === 'page' && recommendation.targetId === pagePath
    ));
  }

  function filteredPages() {
    const pages = latestRun()?.snapshot?.pages || [];
    const needle = String(pageFilter || '').trim().toLowerCase();
    return pages
      .filter((page) => {
        if (!needle) return true;
        return [
          page.path,
          page.title,
          page.type,
          ...(page.queries || []).slice(0, 10).map((query) => query.query)
        ].some((value) => String(value || '').toLowerCase().includes(needle));
      })
      .sort((left, right) => {
        const recommendationDelta = pageRecommendations(right.path).length - pageRecommendations(left.path).length;
        if (recommendationDelta !== 0) return recommendationDelta;
        const impressionDelta = Number(right?.totals?.impressions || 0) - Number(left?.totals?.impressions || 0);
        if (impressionDelta !== 0) return impressionDelta;
        return Number(right?.journey?.entrySessions || 0) - Number(left?.journey?.entrySessions || 0);
      });
  }

  function comparisonCards(pagePath) {
    const comparison = pageComparison(pagePath);
    if (!comparison?.windows) return [];
    return comparisonWindowOrder
      .map((key) => [key, comparison.windows[key]])
      .filter(([, value]) => value);
  }

  function impactLabel(change) {
    return change?.impact?.status || 'pending';
  }

  function selectedRunRecommendations() {
    return selectedRun()?.recommendations || [];
  }

  function hasJourney(page) {
    return Boolean(page?.journey && (
      page.journey.entrySessions
      || page.journey.totalContactActions
      || page.journey.totalExitSignals
      || page.journey.inboundTransitions?.length
      || page.journey.outboundTransitions?.length
    ));
  }

  function joinLabels(items, mapper, fallback = 'None') {
    return Array.isArray(items) && items.length ? items.map(mapper).join(' • ') : fallback;
  }

  function comparisonRun(windowKey) {
    const window = latestRun()?.comparisonWindows?.[windowKey];
    if (!window?.nearestSnapshotDate) return null;
    return (data.runs || []).find((run) => run.snapshot?.extractionDate === window.nearestSnapshotDate) || null;
  }

  function siteDelta(windowKey) {
    const previousRun = comparisonRun(windowKey);
    if (!previousRun?.snapshot?.metrics || !latestRun()?.snapshot?.metrics) return null;
    const current = latestRun().snapshot.metrics;
    const previous = previousRun.snapshot.metrics;
    return {
      impressions: Number(current.impressions || 0) - Number(previous.impressions || 0),
      clicks: Number(current.clicks || 0) - Number(previous.clicks || 0),
      ctr: Number((Number(current.ctr || 0) - Number(previous.ctr || 0)).toFixed(1)),
      position: Number((Number(current.position || 0) - Number(previous.position || 0)).toFixed(1)),
      previousDate: previousRun.snapshot?.extractionDate || null
    };
  }

  function topWinningPages() {
    return latestRun()?.comparisons?.pagesGainingTraction?.slice(0, 4) || [];
  }

  function topLosingPages() {
    return latestRun()?.comparisons?.pagesLosingTraction?.slice(0, 4) || [];
  }

  function topNewQueries() {
    return latestRun()?.comparisons?.newQueries?.items?.slice(0, 4) || [];
  }

  function topLostQueries() {
    return latestRun()?.comparisons?.lostQueries?.items?.slice(0, 4) || [];
  }
</script>

<svelte:head>
  <title>Local Search Console Dashboard</title>
  <meta name="robots" content="noindex,nofollow" />
</svelte:head>

<main class="dashboard">
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Local Search Command Center</p>
      <h1>Page-by-page SEO and user-flow decisions</h1>
      <p class="intro">This dashboard is meant to be operational. Each URL gets its own card, each run stays timestamped, and search performance is now framed alongside what visitors actually do after they land.</p>
      <div class="hero-pills">
        <span class={pillClass(latestRun()?.reportStatus?.freshSearchConsoleAccessAvailable ? 'high' : 'medium')}>
          Search Console: {latestRun()?.reportStatus?.freshSearchConsoleAccessAvailable ? 'live API' : 'fallback'}
        </span>
        <span class={pillClass(latestRun()?.reportStatus?.googleAnalytics?.available ? 'high' : 'medium')}>
          Analytics: {latestRun()?.reportStatus?.googleAnalytics?.available ? 'enriched' : 'gap'}
        </span>
        <span class={pillClass(latestRun()?.reportStatus?.googleAnalyticsJourney?.available ? 'high' : 'medium')}>
          Flow tracking: {latestRun()?.reportStatus?.googleAnalyticsJourney?.available ? 'enriched' : 'gap'}
        </span>
        <span class={pillClass(data.state?.worker?.active ? 'high' : 'neutral')}>
          Queue worker: {data.state?.worker?.active ? 'active' : 'idle'}
        </span>
      </div>
    </div>

    <div class="hero-status">
      <div>
        <span>Queued jobs</span>
        <strong>{queueCount('queued')}</strong>
      </div>
      <div>
        <span>Running jobs</span>
        <strong>{queueCount('running')}</strong>
      </div>
      <div>
        <span>Latest run</span>
        <strong>{latestRun()?.runTimestamp || 'n/a'}</strong>
      </div>
      <div>
        <span>Flow-covered pages</span>
        <strong>{latestRun()?.journey?.summary?.coveredPages || 0}</strong>
      </div>
    </div>
  </section>

  {#if errorMessage}
    <p class="error-banner">{errorMessage}</p>
  {/if}

  {#if latestRun()}
    <section class="summary-grid">
      <article>
        <span>Search performance</span>
        <strong>{formatNumber(latestRun().snapshot?.metrics?.impressions)} impressions</strong>
        <p>{formatNumber(latestRun().snapshot?.metrics?.clicks)} clicks, {formatPercent(latestRun().snapshot?.metrics?.ctr)}, avg position {latestRun().snapshot?.metrics?.position ?? 'n/a'}</p>
      </article>
      <article>
        <span>Recommendation load</span>
        <strong>{data.activeRecommendations.length} active actions</strong>
        <p>{selectedRunRecommendations().length} recommendations in the selected run.</p>
      </article>
      <article>
        <span>Tracked page flows</span>
        <strong>{latestRun().journey?.summary?.pagesWithEntries || 0} entry pages</strong>
        <p>{latestRun().journey?.summary?.pagesWithContactSignals || 0} pages show contact intent. {latestRun().journey?.summary?.pagesWithExitSignals || 0} show exit or friction signals.</p>
      </article>
      <article>
        <span>Indexing queue</span>
        <strong>{data.indexingCollection?.summary?.nonIndexedCount ?? 0} not indexed</strong>
        <p>{data.indexingCollection?.progress?.pendingPages ?? 0} pages still waiting on inspection.</p>
      </article>
    </section>

    <section class="two-up">
      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Biggest Wins</h2>
            <p>Lead with the movement that deserves amplification.</p>
          </div>
        </div>
        {#if siteDelta('yesterday')}
          <div class="comparison-lines">
            <span>{formatSigned(siteDelta('yesterday').impressions)} impressions vs {siteDelta('yesterday').previousDate || 'nearest prior snapshot'}</span>
            <span>{formatSigned(siteDelta('yesterday').clicks)} clicks</span>
            <span>{formatSigned(siteDelta('yesterday').ctr, 1)} CTR points</span>
            <span>{formatPositionDelta(siteDelta('yesterday').position)}</span>
          </div>
        {/if}
        {#if topWinningPages().length}
          <div class="mini-list">
            {#each topWinningPages() as item}
              <div class="mini-row">
                <div>
                  <strong>{item.path}</strong>
                  <p>{formatSigned(item.windows?.yesterday?.delta?.impressions || 0)} impressions, {formatSigned(item.windows?.yesterday?.delta?.clicks || 0)} clicks</p>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <p class="empty">No meaningful page gains were recorded in the current comparison window.</p>
        {/if}
        {#if topNewQueries().length}
          <ul class="signal-list compact">
            {#each topNewQueries() as item}
              <li>{item.query} ({formatNumber(item.current?.impressions || item.previous?.impressions || 0)} impressions)</li>
            {/each}
          </ul>
        {/if}
      </article>

      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Biggest Losses</h2>
            <p>Keep the declines visible before they become trendlines.</p>
          </div>
        </div>
        {#if topLosingPages().length}
          <div class="mini-list">
            {#each topLosingPages() as item}
              <div class="mini-row">
                <div>
                  <strong>{item.path}</strong>
                  <p>{formatSigned(item.windows?.yesterday?.delta?.impressions || 0)} impressions, {formatSigned(item.windows?.yesterday?.delta?.clicks || 0)} clicks</p>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <p class="empty">No material page losses were recorded in the current comparison window.</p>
        {/if}
        {#if topLostQueries().length}
          <ul class="signal-list compact">
            {#each topLostQueries() as item}
              <li>{item.query} ({formatNumber(item.previous?.impressions || 0)} previous impressions)</li>
            {/each}
          </ul>
        {:else}
          <p class="empty">No overall lost queries were detected in the current comparison window.</p>
        {/if}
      </article>
    </section>

    <section class="two-up">
      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Why This Run Matters</h2>
            <p>Shortlist the signals that should change next if the right work gets done.</p>
          </div>
        </div>
        {#if latestRun().watchedSignals?.length}
          <ul class="signal-list">
            {#each latestRun().watchedSignals as signal}
              <li>{signal}</li>
            {/each}
          </ul>
        {:else}
          <p class="empty">No watched signals recorded yet.</p>
        {/if}
      </article>

      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Data Confidence</h2>
            <p>What is reliable enough to act on versus what still needs more collection.</p>
          </div>
        </div>
        <div class="confidence-card">
          <span class={pillClass(latestRun().confidence?.level)}>{latestRun().confidence?.level || 'n/a'}</span>
          {#if latestRun().confidence?.rationale?.length}
            <ul class="signal-list">
              {#each latestRun().confidence.rationale as line}
                <li>{line}</li>
              {/each}
            </ul>
          {/if}
        </div>
      </article>
    </section>
  {/if}

  <section class="panel">
    <div class="panel-head">
      <div>
        <h2>Priority Recommendations</h2>
        <p>Latest-run items only. The goal is to make each recommendation defensible before anything gets implemented.</p>
      </div>
    </div>

    {#if data.activeRecommendations.length}
      <div class="bulk-actions">
        <button type="button" disabled={!recommendationAutomationEnabled || submittingBulk} onclick={handleRunAll}>
          Manual only
        </button>
        <p class="subtle">Recommendations in this dashboard are for analyst review and manual implementation. They do not auto-run from the browser.</p>
      </div>
    {/if}

    {#if !data.activeRecommendations.length}
      <p class="empty">No active recommendations yet.</p>
    {:else}
      <div class="recommendation-list">
        {#each data.activeRecommendations as recommendation}
          <article class="recommendation-card">
            <div class="recommendation-top">
              <div class="recommendation-copy">
                <div class="recommendation-meta">
                  <span class={pillClass(recommendation.priority || 'neutral')}>{recommendation.priority || 'priority n/a'}</span>
                  <span>{recommendation.kind}</span>
                  <span>{latestStatus(recommendation)}</span>
                  <span>{recommendation.targetId}</span>
                </div>
                <h3>{recommendation.title}</h3>
                <p class="owner-summary">{recommendation.ownerSummary || recommendation.rationale}</p>
                {#if recommendation.whyNow}
                  <p class="why-now">{recommendation.whyNow}</p>
                {/if}
                <p class="effect">{recommendation.expectedEffect}</p>
              </div>

              <div class="recommendation-actions">
                <button type="button" disabled>Manual review</button>
                <button type="button" class="button-muted" disabled={submittingId === recommendation.id} onclick={() => handleAction(recommendation, recommendation.runId, 'ignore')}>Ignore</button>
                <button type="button" class="button-secondary" disabled>Browser run disabled</button>
              </div>
            </div>

            <div class="recommendation-grid">
              <div>
                <h4>Evidence</h4>
                {#if recommendation.evidence?.length}
                  <ul class="signal-list compact">
                    {#each recommendation.evidence as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="empty">No evidence list recorded.</p>
                {/if}
              </div>
              <div>
                <h4>What To Do</h4>
                {#if recommendation.recommendedActions?.length}
                  <ul class="signal-list compact">
                    {#each recommendation.recommendedActions as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="empty">No action checklist recorded.</p>
                {/if}
              </div>
              <div>
                <h4>Watch Next</h4>
                {#if recommendation.watchFor?.length}
                  <ul class="signal-list compact">
                    {#each recommendation.watchFor as item}
                      <li>{item}</li>
                    {/each}
                  </ul>
                {:else}
                  <p class="empty">No watch signals recorded.</p>
                {/if}
              </div>
            </div>

            {#if editing[recommendation.id]}
              <div class="edit-panel">
                <textarea bind:value={prompts[recommendation.id]} rows="4" placeholder="Add extra instruction for Codex before this recommendation runs."></textarea>
                <button type="button" disabled={submittingId === recommendation.id} onclick={() => handleAction(recommendation, recommendation.runId, 'edit_then_run')}>Queue edit then run</button>
              </div>
            {/if}
          </article>
        {/each}
      </div>
    {/if}
  </section>

  {#if latestRun()}
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Opportunity Board</h2>
          <p>Keep the scoring layer, but make it easier to scan why a page or query is worth attention.</p>
        </div>
      </div>

      <div class="board-grid">
        <article class="mini-panel">
          <h3>Pages Close To Click Growth</h3>
          {#if latestRun().opportunityBoard?.priorityPages?.length}
            <div class="mini-list">
              {#each latestRun().opportunityBoard.priorityPages.slice(0, 6) as item}
                <div class="mini-row">
                  <div>
                    <strong>{item.page.path}</strong>
                    <p>{formatNumber(item.page.totals.impressions)} impressions, {formatPercent(item.page.totals.ctr)}, pos {item.page.totals.position}</p>
                    <p class="subtle">{item.ownerSummary}</p>
                  </div>
                  <span class={pillClass(item.priority)}>{item.score}</span>
                </div>
              {/each}
            </div>
          {:else}
            <p class="empty">No page opportunities were scored yet.</p>
          {/if}
        </article>

        <article class="mini-panel">
          <h3>Queries To Align</h3>
          {#if latestRun().opportunityBoard?.priorityQueries?.length}
            <div class="mini-list">
              {#each latestRun().opportunityBoard.priorityQueries.slice(0, 6) as item}
                <div class="mini-row">
                  <div>
                    <strong>{item.query.query}</strong>
                    <p>{formatNumber(item.query.impressions)} impressions, {formatPercent(item.query.ctr)}, pos {item.query.position}</p>
                    <p class="subtle">Parent: {item.parent?.path || 'none matched'}</p>
                  </div>
                  <span class={pillClass(item.priority)}>{item.score}</span>
                </div>
              {/each}
            </div>
          {:else}
            <p class="empty">No query alignment opportunities were scored yet.</p>
          {/if}
        </article>

        <article class="mini-panel">
          <h3>Pages Losing Traction</h3>
          {#if latestRun().comparisons?.pagesLosingTraction?.length}
            <div class="mini-list">
              {#each latestRun().comparisons.pagesLosingTraction.slice(0, 6) as item}
                <div class="mini-row">
                  <div>
                    <strong>{item.path}</strong>
                    <p>{formatSigned(item.windows?.yesterday?.delta?.impressions || 0)} impressions, {formatSigned(item.windows?.yesterday?.delta?.clicks || 0)} clicks</p>
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <p class="empty">No meaningful declines recorded.</p>
          {/if}
        </article>

        <article class="mini-panel">
          <h3>Pages Surfacing For New Queries</h3>
          {#if latestRun().comparisons?.newQueriesByPage?.items?.length}
            <div class="mini-list">
              {#each latestRun().comparisons.newQueriesByPage.items.slice(0, 6) as item}
                <div class="mini-row">
                  <div>
                    <strong>{item.path}</strong>
                    <p>{item.items.length} new quer{item.items.length === 1 ? 'y' : 'ies'}</p>
                    <p class="subtle">{item.items.slice(0, 2).map((entry) => entry.query).join(' • ')}</p>
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <p class="empty">No page-level new query movement detected yet.</p>
          {/if}
        </article>
      </div>
    </section>

    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Journey And Engagement</h2>
          <p>Where search visitors enter, where they move next, and where they stall. This is the layer that should make the landing-page engagement story make sense.</p>
        </div>
      </div>

      {#if latestRun().journey?.available}
        <div class="board-grid">
          <article class="mini-panel">
            <h3>Entry Pages</h3>
            {#if latestRun().journey?.topEntryPages?.length}
              <div class="mini-list">
                {#each latestRun().journey.topEntryPages.slice(0, 6) as item}
                  <div class="mini-row">
                    <div>
                      <strong>{item.path}</strong>
                      <p>{formatNumber(item.entrySessions)} entry sessions, {formatPercent(item.entryEngagementRate)} entry engagement</p>
                      <p class="subtle">{formatNumber(item.search.impressions)} impressions, {formatNumber(item.totalContactActions)} contact actions</p>
                    </div>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="empty">No entry page flow data saved yet.</p>
            {/if}
          </article>

          <article class="mini-panel">
            <h3>Contact-Oriented Pages</h3>
            {#if latestRun().journey?.topContactPages?.length}
              <div class="mini-list">
                {#each latestRun().journey.topContactPages.slice(0, 6) as item}
                  <div class="mini-row">
                    <div>
                      <strong>{item.path}</strong>
                      <p>{formatNumber(item.totalContactActions)} contact actions, {formatNumber(item.entrySessions)} entry sessions</p>
                      <p class="subtle">{joinLabels(item.topContactActions, (entry) => `${entry.eventName} (${entry.eventCount})`, 'No contact actions listed')}</p>
                    </div>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="empty">No contact-action flows recorded yet.</p>
            {/if}
          </article>

          <article class="mini-panel">
            <h3>Exit And Friction Pages</h3>
            {#if latestRun().journey?.exitRiskPages?.length}
              <div class="mini-list">
                {#each latestRun().journey.exitRiskPages.slice(0, 6) as item}
                  <div class="mini-row">
                    <div>
                      <strong>{item.path}</strong>
                      <p>{formatNumber(item.totalExitSignals)} exit signals, {formatNumber(item.totalContactActions)} contact actions</p>
                      <p class="subtle">{joinLabels(item.topExitSignals, (entry) => `${entry.eventName} (${entry.eventCount})`, 'No explicit exit event names saved')}</p>
                    </div>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="empty">No exit-signal pages crossed the current threshold.</p>
            {/if}
          </article>

          <article class="mini-panel">
            <h3>Strongest Internal Flows</h3>
            {#if latestRun().journey?.strongestTransitions?.length}
              <div class="mini-list">
                {#each latestRun().journey.strongestTransitions.slice(0, 6) as item}
                  <div class="mini-row">
                    <div>
                      <strong>{item.fromPath} → {item.toPath}</strong>
                      <p>{formatNumber(item.eventCount)} tracked page-view transitions</p>
                    </div>
                  </div>
                {/each}
              </div>
            {:else}
              <p class="empty">No transition records saved yet.</p>
            {/if}
          </article>
        </div>
      {:else}
        <div class="gap-callout">
          <strong>Journey enrichment gap</strong>
          <p>{latestRun().journey?.accessGap || latestRun().reportStatus?.googleAnalyticsJourney?.accessGap}</p>
        </div>
      {/if}
    </section>

    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Page Intelligence</h2>
          <p>Every URL keeps its own compact card. Tabs switch the view instead of pushing the whole page longer.</p>
        </div>
        <div class="query-explorer-controls">
          <input
            class="search-input"
            bind:value={pageFilter}
            type="search"
            placeholder="Filter by URL, title, type, or tracked query"
          />
          <span class="pill pill-neutral">{filteredPages().length} pages</span>
        </div>
      </div>

      {#if filteredPages().length}
        <div class="page-card-list">
          {#each filteredPages() as page}
            <article class="url-card">
              <div class="url-card-head">
                <div>
                  <h3>{page.path}</h3>
                  <p>{page.title || page.type || 'Untitled page'}</p>
                </div>
                <div class="url-metric-pills">
                  <span class="metric-pill">{formatNumber(page.queries?.length || 0)} queries</span>
                  <span class="metric-pill">{formatNumber(page.totals?.impressions)} impr</span>
                  <span class="metric-pill">{formatNumber(page.totals?.clicks)} clicks</span>
                  <span class="metric-pill">{formatPercent(page.totals?.ctr)} CTR</span>
                  <span class="metric-pill">Pos {page.totals?.position ?? 'n/a'}</span>
                  {#if pageRecommendations(page.path).length}
                    <span class={pillClass('high')}>{pageRecommendations(page.path).length} active recs</span>
                  {/if}
                  {#if hasJourney(page)}
                    <span class={pillClass(page.journey.totalContactActions > 0 ? 'high' : 'medium')}>
                      Flow: {page.journey.totalContactActions > 0 ? 'progressing' : 'watch'}
                    </span>
                  {/if}
                </div>
              </div>

              <div class="tab-row">
                {#each pageTabLabels as tab}
                  <button
                    type="button"
                    class={pageTab(page.path) === tab.id ? 'tab-button active' : 'tab-button'}
                    onclick={() => setPageTab(page.path, tab.id)}
                  >
                    {tab.label}
                  </button>
                {/each}
              </div>

              <div class="url-card-body">
                {#if pageTab(page.path) === 'queries'}
                  <div class="comparison-grid">
                    {#each comparisonCards(page.path) as [label, window]}
                      <article class="comparison-card">
                        <strong>{label}</strong>
                        <p class="subtle">{window.nearestSnapshotDate || 'No snapshot'}</p>
                        {#if window.delta}
                          <div class="comparison-lines">
                            <span>Impr {formatSigned(window.delta.impressions)}</span>
                            <span>Clicks {formatSigned(window.delta.clicks)}</span>
                            <span>CTR {formatSigned(window.delta.ctr, 1)}</span>
                            <span>Pos {formatPositionDelta(window.delta.position)}</span>
                          </div>
                        {:else}
                          <p class="empty">{window.reason}</p>
                        {/if}
                      </article>
                    {/each}
                  </div>

                  <div class="two-column">
                    <div class="mini-panel">
                      <h4>New And Lost Queries</h4>
                      {#if pageComparison(page.path)?.queryMovements?.yesterday}
                        <div class="mini-list">
                          <div class="mini-row">
                            <div>
                              <strong>New queries</strong>
                              <p class="subtle">{pageComparison(page.path)?.queryMovements?.yesterday?.newQueries?.length || 0}</p>
                            </div>
                            <span>{joinLabels(pageComparison(page.path)?.queryMovements?.yesterday?.newQueries?.slice(0, 3), (entry) => entry.query)}</span>
                          </div>
                          <div class="mini-row">
                            <div>
                              <strong>Lost queries</strong>
                              <p class="subtle">{pageComparison(page.path)?.queryMovements?.yesterday?.lostQueries?.length || 0}</p>
                            </div>
                            <span>{joinLabels(pageComparison(page.path)?.queryMovements?.yesterday?.lostQueries?.slice(0, 3), (entry) => entry.query)}</span>
                          </div>
                        </div>
                      {:else}
                        <p class="empty">No page-level query movement snapshot exists yet for this page.</p>
                      {/if}
                    </div>

                    <div class="mini-panel">
                      <h4>Current Search Snapshot</h4>
                      <div class="mini-list">
                        <div class="mini-row">
                          <div>
                            <strong>Totals</strong>
                            <p class="subtle">{formatNumber(page.totals?.impressions)} impressions, {formatNumber(page.totals?.clicks)} clicks, {formatPercent(page.totals?.ctr)}, avg position {page.totals?.position ?? 'n/a'}</p>
                          </div>
                        </div>
                        <div class="mini-row">
                          <div>
                            <strong>Coverage</strong>
                            <p class="subtle">{page.dataRange?.startLabel} to {page.dataRange?.endLabel}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {#if page.queries?.length}
                    <div class="query-table-wrap">
                      <table class="query-table">
                        <thead>
                          <tr>
                            <th>Query</th>
                            <th>Impressions</th>
                            <th>Clicks</th>
                            <th>CTR</th>
                            <th>Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          {#each page.queries as query}
                            <tr>
                              <td>{query.query}</td>
                              <td>{formatNumber(query.impressions)}</td>
                              <td>{formatNumber(query.clicks)}</td>
                              <td>{formatPercent(query.ctr)}</td>
                              <td>{query.position ?? 'n/a'}</td>
                            </tr>
                          {/each}
                        </tbody>
                      </table>
                    </div>
                  {:else}
                    <p class="empty">No page-level query rows were saved for this page in the current run.</p>
                  {/if}
                {:else if pageTab(page.path) === 'recommendations'}
                  {#if pageRecommendations(page.path).length}
                    <div class="recommendation-list inline-list">
                      {#each pageRecommendations(page.path) as recommendation}
                        <article class="recommendation-card nested-card">
                          <div class="recommendation-top">
                            <div class="recommendation-copy">
                              <div class="recommendation-meta">
                                <span class={pillClass(recommendation.priority || 'neutral')}>{recommendation.priority || 'priority n/a'}</span>
                                <span>{recommendation.kind}</span>
                                <span>{latestStatus(recommendation)}</span>
                              </div>
                              <h4>{recommendation.title}</h4>
                              <p class="owner-summary">{recommendation.ownerSummary || recommendation.rationale}</p>
                              {#if recommendation.whyNow}
                                <p class="why-now">{recommendation.whyNow}</p>
                              {/if}
                            </div>

                            <div class="recommendation-actions">
                              <button type="button" disabled={submittingId === recommendation.id} onclick={() => handleAction(recommendation, recommendation.runId, 'run')}>Run it</button>
                              <button type="button" class="button-muted" disabled={submittingId === recommendation.id} onclick={() => handleAction(recommendation, recommendation.runId, 'ignore')}>Ignore</button>
                              <button type="button" class="button-secondary" disabled={submittingId === recommendation.id} onclick={() => toggleEdit(recommendation.id)}>Edit then run</button>
                            </div>
                          </div>

                          <div class="recommendation-grid">
                            <div>
                              <h4>Evidence</h4>
                              <ul class="signal-list compact">
                                {#each recommendation.evidence || [] as item}
                                  <li>{item}</li>
                                {/each}
                              </ul>
                            </div>
                            <div>
                              <h4>Actions</h4>
                              <ul class="signal-list compact">
                                {#each recommendation.recommendedActions || [] as item}
                                  <li>{item}</li>
                                {/each}
                              </ul>
                            </div>
                            <div>
                              <h4>Watch</h4>
                              <ul class="signal-list compact">
                                {#each recommendation.watchFor || [] as item}
                                  <li>{item}</li>
                                {/each}
                              </ul>
                            </div>
                          </div>

                          {#if editing[recommendation.id]}
                            <div class="edit-panel">
                              <textarea bind:value={prompts[recommendation.id]} rows="4" placeholder="Add extra instruction for Codex before this recommendation runs."></textarea>
                              <button type="button" disabled={submittingId === recommendation.id} onclick={() => handleAction(recommendation, recommendation.runId, 'edit_then_run')}>Queue edit then run</button>
                            </div>
                          {/if}
                        </article>
                      {/each}
                    </div>
                  {:else}
                    <div class="mini-panel">
                      <h4>No active page-targeted recommendations</h4>
                      <p class="subtle">This page is still tracked. If its search or flow signals worsen, it should generate a more explicit recommendation in a later run.</p>
                    </div>
                  {/if}
                {:else if pageTab(page.path) === 'changes'}
                  {#if page.changeHistory?.length}
                    <div class="page-change-list">
                      {#each page.changeHistory as change}
                        <article class="page-change-card">
                          <div class="page-change-head">
                            <div>
                              <strong>{change.title}</strong>
                              <p>{formatDateTime(change.completedAt || change.startedAt || change.queuedAt || change.timestamp)}</p>
                            </div>
                            <div class="page-change-meta">
                              <span class={pillClass(changeStatusClass(change.status))}>{change.status}</span>
                              <span class={pillClass(changeStatusClass(impactLabel(change)))}>{impactLabel(change)}</span>
                            </div>
                          </div>

                          {#if change.ownerSummary}
                            <p class="subtle">{change.ownerSummary}</p>
                          {/if}

                          {#if change.expectedEffect}
                            <p><strong>Expected impact:</strong> {change.expectedEffect}</p>
                          {/if}

                          {#if change.watchFor?.length}
                            <div>
                              <strong>Watching for</strong>
                              <ul class="signal-list compact">
                                {#each change.watchFor as signal}
                                  <li>{signal}</li>
                                {/each}
                              </ul>
                            </div>
                          {/if}

                          <div class="impact-box">
                            <strong>Observed impact</strong>
                            <p>{change.impact?.summary || 'No impact assessment recorded yet.'}</p>
                            {#if change.impact?.status === 'observed'}
                              <div class="impact-metrics">
                                <span>Impr {formatSigned(change.impact?.delta?.impressions)}</span>
                                <span>Clicks {formatSigned(change.impact?.delta?.clicks)}</span>
                                <span>CTR {formatSigned(change.impact?.delta?.ctr, 1)}</span>
                                <span>Pos {formatPositionDelta(change.impact?.delta?.position)}</span>
                              </div>
                            {/if}
                          </div>
                        </article>
                      {/each}
                    </div>
                  {:else}
                    <p class="empty">No tracked page changes are recorded for this URL yet.</p>
                  {/if}
                {:else}
                  {#if hasJourney(page)}
                    <div class="flow-grid">
                      <article class="mini-panel">
                        <h4>Landing Behavior</h4>
                        <div class="mini-list">
                          <div class="mini-row">
                            <div>
                              <strong>Entry sessions</strong>
                              <p class="subtle">{formatNumber(page.journey.entrySessions)} sessions, {formatPercent(page.journey.entryEngagementRate)} engaged</p>
                            </div>
                          </div>
                          <div class="mini-row">
                            <div>
                              <strong>Contact signals</strong>
                              <p class="subtle">{formatNumber(page.journey.totalContactActions)} tracked actions</p>
                            </div>
                          </div>
                          <div class="mini-row">
                            <div>
                              <strong>Exit or friction signals</strong>
                              <p class="subtle">{formatNumber(page.journey.totalExitSignals)} tracked signals</p>
                            </div>
                          </div>
                          {#if page.analytics}
                            <div class="mini-row">
                              <div>
                                <strong>GA landing engagement</strong>
                                <p class="subtle">{formatNumber(page.analytics.sessions)} sessions, {formatPercent(page.analytics.engagementRate)} engagement, {formatSeconds(page.analytics.averageSessionDuration)} avg duration</p>
                              </div>
                            </div>
                          {/if}
                        </div>
                      </article>

                      <article class="mini-panel">
                        <h4>Where Visitors Came From</h4>
                        {#if page.journey.inboundTransitions?.length}
                          <div class="mini-list">
                            {#each page.journey.inboundTransitions.slice(0, 6) as item}
                              <div class="mini-row">
                                <div>
                                  <strong>{item.fromPath}</strong>
                                  <p class="subtle">{formatNumber(item.eventCount)} tracked transitions into this page</p>
                                </div>
                              </div>
                            {/each}
                          </div>
                        {:else}
                          <p class="empty">No internal inbound transitions were saved for this page.</p>
                        {/if}
                      </article>

                      <article class="mini-panel">
                        <h4>Where Visitors Went Next</h4>
                        {#if page.journey.outboundTransitions?.length}
                          <div class="mini-list">
                            {#each page.journey.outboundTransitions.slice(0, 6) as item}
                              <div class="mini-row">
                                <div>
                                  <strong>{item.toPath}</strong>
                                  <p class="subtle">{formatNumber(item.eventCount)} tracked transitions out of this page</p>
                                </div>
                              </div>
                            {/each}
                          </div>
                        {:else}
                          <p class="empty">No internal outbound transitions were saved for this page.</p>
                        {/if}
                      </article>

                      <article class="mini-panel">
                        <h4>Tracked Events</h4>
                        <div class="two-column">
                          <div>
                            <strong>Contact actions</strong>
                            {#if page.journey.contactActions?.length}
                              <ul class="signal-list compact">
                                {#each page.journey.contactActions as item}
                                  <li>{item.eventName}: {formatNumber(item.eventCount)}</li>
                                {/each}
                              </ul>
                            {:else}
                              <p class="empty">No contact-action events on this page.</p>
                            {/if}
                          </div>
                          <div>
                            <strong>Exit or friction events</strong>
                            {#if page.journey.exitSignals?.length}
                              <ul class="signal-list compact">
                                {#each page.journey.exitSignals as item}
                                  <li>{item.eventName}: {formatNumber(item.eventCount)}</li>
                                {/each}
                              </ul>
                            {:else}
                              <p class="empty">No exit or friction events on this page.</p>
                            {/if}
                          </div>
                        </div>
                      </article>
                    </div>
                  {:else}
                    <p class="empty">No page-level flow data was attached to this URL in the current run.</p>
                  {/if}
                {/if}
              </div>
            </article>
          {/each}
        </div>
      {:else}
        <p class="empty">No pages match the current filter.</p>
      {/if}
    </section>
  {/if}

  {#if data.indexingCollection}
    <section class="panel">
      <div class="panel-head">
        <div>
          <h2>Not Indexed Yet</h2>
          <p>Manual review list from the incremental indexing collector. These pages should be fixed or evaluated before you submit them manually.</p>
        </div>
      </div>
      <p class="effect">Completed checks: {data.indexingCollection.progress?.completedPages ?? 0} / {data.indexingCollection.progress?.totalPages ?? 0}. Pending: {data.indexingCollection.progress?.pendingPages ?? 0}. Errors: {data.indexingCollection.progress?.errorPages ?? 0}.</p>
      {#if data.indexingCollection.nonIndexedPages?.length}
        <div class="run-list">
          {#each data.indexingCollection.nonIndexedPages as page}
            <article class="run-card">
              <div class="run-head">
                <div>
                  <h3>{page.path}</h3>
                  <p>{page.title}</p>
                </div>
                <div class="run-stats">
                  <span class={pillClass(page.qualification?.qualifies ? 'high' : 'medium')}>
                    {page.qualification?.qualifies ? 'Qualifies for manual submit' : 'Needs work first'}
                  </span>
                  <span>{page.inspection?.coverageState || page.inspectionError || 'No inspection detail'}</span>
                </div>
              </div>
              {#if page.qualification?.blockers?.length}
                <ul class="signal-list compact">
                  {#each page.qualification.blockers as blocker}
                    <li>{blocker}</li>
                  {/each}
                </ul>
              {:else if page.qualification?.strengths?.length}
                <ul class="signal-list compact">
                  {#each page.qualification.strengths as strength}
                    <li>{strength}</li>
                  {/each}
                </ul>
              {/if}
            </article>
          {/each}
        </div>
      {:else}
        <p class="empty">No non-indexed pages have been confirmed yet. The collector may still be working through the backlog.</p>
      {/if}
    </section>
  {/if}

  <section class="panel">
    <div class="panel-head">
      <div>
        <h2>Run History</h2>
        <p>Each run stays separate, even when multiple runs happen on the same day. Pick a timestamp on the left and inspect the run detail on the right.</p>
      </div>
    </div>

    <div class="run-browser">
      <aside class="run-browser-nav">
        {#each data.runs as run}
          <button
            type="button"
            class={selectedRun()?.runId === run.runId ? 'run-nav-button active' : 'run-nav-button'}
            onclick={() => selectRun(run.runId)}
          >
            <strong>{run.runTimestamp}</strong>
            <span>{formatNumber(run.snapshot?.metrics?.impressions)} impr</span>
            <span>{run.recommendations.length} recs</span>
          </button>
        {/each}
      </aside>

      <div class="run-browser-detail">
        {#if selectedRun()}
          <div class="run-detail-head">
            <div>
              <h3>{selectedRun().runTimestamp}</h3>
              <p>{selectedRun().snapshot?.dataRange?.startLabel} to {selectedRun().snapshot?.dataRange?.endLabel}</p>
            </div>
            <div class="run-detail-pills">
              <span class="metric-pill">{formatNumber(selectedRun().snapshot?.metrics?.impressions)} impr</span>
              <span class="metric-pill">{formatNumber(selectedRun().snapshot?.metrics?.clicks)} clicks</span>
              <span class="metric-pill">{selectedRun().recommendations.length} recs</span>
              <span class={pillClass(selectedRun().confidence?.level)}>{selectedRun().confidence?.level || 'n/a'}</span>
            </div>
          </div>

          <div class="two-column">
            <article class="mini-panel">
              <h4>Run Recommendations</h4>
              {#if selectedRun().recommendations?.length}
                <div class="mini-list">
                  {#each selectedRun().recommendations.slice(0, 10) as recommendation}
                    <div class="mini-row">
                      <div>
                        <strong>{recommendation.title}</strong>
                        <p class="subtle">{recommendation.targetId}</p>
                      </div>
                      <span class={pillClass(recommendation.priority || 'neutral')}>{recommendation.priority || 'n/a'}</span>
                    </div>
                  {/each}
                </div>
              {:else}
                <p class="empty">No recommendations recorded for this run.</p>
              {/if}
            </article>

            <article class="mini-panel">
              <h4>What Shifted</h4>
              <div class="mini-list">
                <div class="mini-row">
                  <div>
                    <strong>Pages gaining traction</strong>
                    <p class="subtle">{selectedRun().comparisons?.pagesGainingTraction?.length || 0} pages</p>
                  </div>
                </div>
                <div class="mini-row">
                  <div>
                    <strong>Pages losing traction</strong>
                    <p class="subtle">{selectedRun().comparisons?.pagesLosingTraction?.length || 0} pages</p>
                  </div>
                </div>
                <div class="mini-row">
                  <div>
                    <strong>New queries</strong>
                    <p class="subtle">{selectedRun().comparisons?.newQueries?.items?.length || 0} tracked</p>
                  </div>
                </div>
                <div class="mini-row">
                  <div>
                    <strong>Journey-covered pages</strong>
                    <p class="subtle">{selectedRun().journey?.summary?.coveredPages || 0} pages</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        {:else}
          <p class="empty">No saved runs exist yet.</p>
        {/if}
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    background:
      radial-gradient(circle at top left, rgba(31, 77, 68, 0.12), transparent 34%),
      linear-gradient(180deg, #f7f3ea 0%, #efe8dc 100%);
  }

  .dashboard {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2.5rem 1.1rem 4rem;
    color: #13222a;
  }

  .hero,
  .summary-grid,
  .two-up,
  .board-grid,
  .comparison-grid,
  .two-column,
  .flow-grid,
  .run-browser {
    display: grid;
    gap: 0.9rem;
  }

  .hero {
    grid-template-columns: minmax(0, 1.8fr) minmax(260px, 0.8fr);
    margin-bottom: 1.15rem;
    padding: 1.35rem;
    border-radius: 30px;
    background:
      linear-gradient(135deg, rgba(11, 31, 43, 0.96), rgba(21, 77, 65, 0.9)),
      linear-gradient(180deg, #183440, #1e594d);
    color: #f7f4ec;
    box-shadow: 0 24px 54px rgba(18, 34, 42, 0.18);
  }

  .summary-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 1.15rem;
  }

  .two-up {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-bottom: 1.15rem;
  }

  .board-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .comparison-grid,
  .flow-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .two-column {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .run-browser {
    grid-template-columns: minmax(220px, 300px) minmax(0, 1fr);
    align-items: start;
  }

  .hero-copy,
  .hero-status,
  .hero-pills,
  .panel-head,
  .recommendation-top,
  .recommendation-meta,
  .recommendation-actions,
  .recommendation-grid,
  .run-head,
  .run-stats,
  .url-card-head,
  .url-metric-pills,
  .page-change-head,
  .page-change-meta,
  .impact-metrics,
  .run-detail-head,
  .run-detail-pills,
  .query-explorer-controls,
  .bulk-actions,
  .comparison-lines,
  .tab-row {
    display: flex;
    gap: 0.8rem;
  }

  .hero-copy,
  .hero-status,
  .hero-pills,
  .recommendation-grid,
  .url-metric-pills,
  .page-change-meta,
  .impact-metrics,
  .run-detail-pills,
  .query-explorer-controls,
  .bulk-actions,
  .comparison-lines,
  .tab-row {
    flex-wrap: wrap;
  }

  .hero-copy {
    flex-direction: column;
    justify-content: space-between;
  }

  .hero-status {
    flex-direction: column;
  }

  .hero-status > div,
  .summary-grid article,
  .panel,
  .mini-panel,
  .run-card,
  .recommendation-card,
  .url-card,
  .comparison-card {
    border: 1px solid rgba(19, 34, 42, 0.12);
    border-radius: 22px;
    background: rgba(255, 251, 244, 0.92);
    backdrop-filter: blur(10px);
  }

  .hero-status > div {
    padding: 0.95rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    color: #f7f4ec;
  }

  .hero-status span,
  .summary-grid span,
  .panel-head p,
  .subtle {
    color: #53616a;
  }

  .hero-status span {
    color: rgba(247, 244, 236, 0.72);
  }

  .hero-status strong,
  .summary-grid strong {
    display: block;
    margin-top: 0.25rem;
  }

  .eyebrow {
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    color: rgba(247, 244, 236, 0.74);
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    line-height: 1.05;
    color: #173742;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 3.3rem);
    max-width: 12ch;
    color: #f7f4ec;
  }

  h2 {
    font-size: 1.8rem;
    color: #14313c;
  }

  h3 {
    font-size: 1.05rem;
  }

  h4 {
    font-size: 0.95rem;
  }

  p {
    margin: 0;
  }

  .intro {
    max-width: 72ch;
    color: rgba(247, 244, 236, 0.88);
  }

  .panel,
  .summary-grid article,
  .mini-panel,
  .run-card,
  .recommendation-card,
  .url-card,
  .comparison-card {
    padding: 1rem 1.05rem;
  }

  .panel,
  .hero,
  .summary-grid,
  .two-up {
    margin-bottom: 1.15rem;
  }

  .panel-head,
  .recommendation-top,
  .run-head,
  .url-card-head,
  .page-change-head,
  .run-detail-head {
    justify-content: space-between;
    align-items: flex-start;
  }

  .recommendation-card,
  .confidence-card,
  .gap-callout,
  .nested-card {
    background:
      linear-gradient(180deg, rgba(255, 252, 246, 0.98), rgba(244, 237, 225, 0.95));
  }

  .confidence-card,
  .gap-callout,
  .mini-row,
  .comparison-card {
    padding: 0.85rem 0.9rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.62);
  }

  .recommendation-list,
  .page-card-list,
  .page-change-list,
  .run-list,
  .mini-list,
  .run-browser-nav {
    display: grid;
    gap: 0.9rem;
  }

  .inline-list {
    gap: 0.8rem;
  }

  .recommendation-copy {
    max-width: 72ch;
  }

  .owner-summary {
    margin-top: 0.45rem;
    font-size: 1rem;
    color: #1f3943;
  }

  .why-now,
  .effect,
  .empty {
    color: #58646b;
  }

  .why-now,
  .effect {
    margin-top: 0.4rem;
  }

  .signal-list {
    margin: 0.7rem 0 0;
    padding-left: 1.1rem;
    color: #29414a;
  }

  .signal-list.compact {
    margin-top: 0.5rem;
  }

  .pill,
  .metric-pill {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    border-radius: 999px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .pill {
    padding: 0.24rem 0.6rem;
    background: rgba(19, 34, 42, 0.08);
    color: #173742;
  }

  .metric-pill {
    padding: 0.34rem 0.7rem;
    background: rgba(23, 55, 66, 0.06);
    color: #1d3c48;
  }

  .pill-high {
    background: #1c5b4d;
    color: #f5fbf7;
  }

  .pill-medium {
    background: #a76c1c;
    color: #fff9f0;
  }

  .pill-low,
  .pill-neutral {
    background: #d9d0c2;
    color: #3f403f;
  }

  .search-input,
  textarea {
    width: 100%;
    border: 1px solid #ccbda7;
    font: inherit;
    background: rgba(255, 255, 255, 0.92);
    color: #173742;
  }

  .search-input {
    min-width: min(360px, 100%);
    padding: 0.78rem 0.95rem;
    border-radius: 999px;
  }

  textarea {
    border-radius: 14px;
    padding: 0.85rem;
  }

  button {
    border: 0;
    border-radius: 999px;
    padding: 0.7rem 1rem;
    font: inherit;
    font-weight: 700;
    color: #f7f4ec;
    background: #173742;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.55;
    cursor: wait;
  }

  .button-muted {
    background: #7f887d;
  }

  .button-secondary {
    background: #9d6223;
  }

  .tab-button,
  .run-nav-button {
    color: #173742;
    background: rgba(23, 55, 66, 0.06);
  }

  .tab-button.active,
  .run-nav-button.active {
    color: #f7f4ec;
    background: #173742;
  }

  .tab-row {
    margin-top: 0.9rem;
  }

  .url-card-body {
    display: grid;
    gap: 0.9rem;
    margin-top: 0.95rem;
  }

  .query-table-wrap {
    overflow-x: auto;
    border-radius: 16px;
    border: 1px solid rgba(19, 34, 42, 0.1);
    background: rgba(255, 255, 255, 0.68);
  }

  .query-table {
    width: 100%;
    min-width: 720px;
    border-collapse: collapse;
  }

  .query-table th,
  .query-table td {
    padding: 0.8rem 0.9rem;
    text-align: left;
    border-bottom: 1px solid rgba(19, 34, 42, 0.08);
  }

  .query-table th {
    font-size: 0.82rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #53616a;
    background: rgba(23, 55, 66, 0.05);
  }

  .query-table tbody tr:last-child td {
    border-bottom: 0;
  }

  .mini-row {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    align-items: flex-start;
  }

  .comparison-lines {
    color: #1d3c48;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .edit-panel {
    margin-top: 0.95rem;
    display: grid;
    gap: 0.7rem;
  }

  .page-change-card {
    padding: 0.95rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(19, 34, 42, 0.08);
  }

  .impact-box {
    margin-top: 0.7rem;
    padding: 0.8rem 0.9rem;
    border-radius: 14px;
    background: rgba(23, 55, 66, 0.05);
  }

  .impact-metrics {
    margin-top: 0.55rem;
    color: #173742;
    font-weight: 700;
  }

  .run-nav-button {
    padding: 0.9rem 1rem;
    text-align: left;
    display: grid;
    gap: 0.25rem;
    border-radius: 18px;
  }

  .run-browser-detail {
    min-height: 100%;
    padding: 1rem 1.05rem;
    border-radius: 24px;
    border: 1px solid rgba(19, 34, 42, 0.12);
    background: rgba(255, 251, 244, 0.92);
  }

  .error-banner {
    margin-bottom: 1rem;
    padding: 0.85rem 1rem;
    border-radius: 14px;
    background: #fff0ec;
    color: #8e3725;
    border: 1px solid rgba(142, 55, 37, 0.2);
  }

  @media (max-width: 1040px) {
    .hero,
    .summary-grid,
    .two-up,
    .board-grid,
    .comparison-grid,
    .two-column,
    .flow-grid,
    .run-browser {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 760px) {
    .dashboard {
      padding-inline: 0.9rem;
    }

    .panel-head,
    .recommendation-top,
    .run-head,
    .url-card-head,
    .page-change-head,
    .run-detail-head,
    .mini-row {
      flex-direction: column;
    }

    .recommendation-actions,
    .query-explorer-controls {
      justify-content: flex-start;
    }
  }
</style>
