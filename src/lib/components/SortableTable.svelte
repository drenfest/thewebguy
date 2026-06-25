<script>
  let { caption = "", columns = [], rows = [] } = $props();
  let sortKey = $state("");
  let sortDirection = $state("asc");

  $effect(() => {
    if (!sortKey && columns[0]?.key) sortKey = columns[0].key;
  });

  function cellText(value) {
    if (value && typeof value === "object") return value.text || "";
    return value == null ? "" : String(value);
  }

  function cellHref(value) {
    return value && typeof value === "object" ? value.href : "";
  }

  function compareValues(a, b) {
    const numericA = Number.parseFloat(String(a).replace(/[^0-9.-]/g, ""));
    const numericB = Number.parseFloat(String(b).replace(/[^0-9.-]/g, ""));
    const bothNumeric = Number.isFinite(numericA) && Number.isFinite(numericB) && /\d/.test(a) && /\d/.test(b);
    if (bothNumeric) return numericA - numericB;
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
  }

  function sortBy(key) {
    if (sortKey === key) {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
      return;
    }
    sortKey = key;
    sortDirection = "asc";
  }

  function sortButtonLabel(column) {
    if (sortKey !== column.key) return `Sort by ${column.label}`;
    return `Sort by ${column.label}, currently ${sortDirection === "asc" ? "ascending" : "descending"}`;
  }

  const sortedRows = $derived([...rows].sort((a, b) => {
    const comparison = compareValues(cellText(a[sortKey]), cellText(b[sortKey]));
    return sortDirection === "asc" ? comparison : -comparison;
  }));

  function ariaSort(key) {
    if (sortKey !== key) return "none";
    return sortDirection === "asc" ? "ascending" : "descending";
  }
</script>

<div class="sortable-table-wrap">
  <table class="sortable-table">
    {#if caption}<caption>{caption}</caption>{/if}
    <thead>
      <tr>
        {#each columns as column}
          <th aria-sort={ariaSort(column.key)}>
            <button type="button" aria-label={sortButtonLabel(column)} onclick={() => sortBy(column.key)}>
              <span>{column.label}</span>
              <span
                class={`sort-indicator ${sortKey === column.key ? "sort-indicator--active" : ""} ${sortKey === column.key && sortDirection === "desc" ? "sort-indicator--desc" : ""}`}
                aria-hidden="true"
              ></span>
            </button>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sortedRows as row}
        <tr>
          {#each columns as column}
            <td>
              {#if cellHref(row[column.key])}
                <a href={cellHref(row[column.key])} title={`View ${cellText(row[column.key])}`}>{cellText(row[column.key])}</a>
              {:else}
                {cellText(row[column.key])}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
