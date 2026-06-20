import { searchPages } from "$lib/data/search-index.js";

self.addEventListener("message", (event) => {
  const { id, query } = event.data || {};

  self.postMessage({
    id,
    results: searchPages(query || "")
  });
});
