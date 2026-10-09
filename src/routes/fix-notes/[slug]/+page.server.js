import { error } from "@sveltejs/kit";
import { fixNoteMap } from "$lib/data/content.js";

export function load({ params }) {
  const note = fixNoteMap[params.slug];
  if (!note) {
    throw error(404, "Web Fix not found");
  }

  return { note };
}
