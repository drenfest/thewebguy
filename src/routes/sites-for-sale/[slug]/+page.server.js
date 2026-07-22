import { error } from "@sveltejs/kit";
import { siteForSaleMap } from "$lib/data/content.js";

export function load({ params }) {
  const site = siteForSaleMap[params.slug];
  if (!site) throw error(404, "Site asset not found");
  return { site };
}
