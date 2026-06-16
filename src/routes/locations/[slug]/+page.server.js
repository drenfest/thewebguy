import { error } from "@sveltejs/kit";
import { locationMap } from "$lib/data/content.js";

export function load({ params }) {
  const location = locationMap[params.slug];
  if (!location) {
    throw error(404, "Location not found");
  }
  return { location };
}
