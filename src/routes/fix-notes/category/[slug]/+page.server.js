import { error } from "@sveltejs/kit";
import { fixNoteCategories, fixNoteCategoryMap } from "$lib/data/content.js";

export function load({ params }) {
  const category = fixNoteCategoryMap[params.slug];
  if (!category) {
    throw error(404, "Fix Note category not found");
  }

  const categoryWithNotes = fixNoteCategories.find((item) => item.slug === category.slug) || {
    ...category,
    notes: []
  };

  return { category: categoryWithNotes };
}
