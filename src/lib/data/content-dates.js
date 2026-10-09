import contentDates from "./content-dates.json";

const fallbackDate = "2026-06-12";

export function contentDatesForUrl(url) {
  return contentDates[url] || { published: fallbackDate, updated: fallbackDate };
}

export function publishedDateForUrl(url) {
  return contentDatesForUrl(url).published;
}

export function updatedDateForUrl(url) {
  return contentDatesForUrl(url).updated;
}

export function formatContentDate(value, fallback = "Recently updated") {
  if (!value) return fallback;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}
