import { error } from "@sveltejs/kit";
import { fixNoteMap } from "$lib/data/content.js";

export function load({ params }) {
  const note = fixNoteMap[params.slug];
  if (!note) {
    throw error(404, "Fix Note not found");
  }

  return { note };
}
