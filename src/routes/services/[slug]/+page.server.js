import { error } from "@sveltejs/kit";
import { serviceMap } from "$lib/data/content.js";

export function load({ params }) {
  const service = serviceMap[params.slug];
  if (!service) {
    throw error(404, "Service not found");
  }
  return { service };
}
