// Deterministic categories list matching Figma Search page category chips.

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: "cat-1", name: "Featured", slug: "featured" },
  { id: "cat-2", name: "Music", slug: "music" },
  { id: "cat-3", name: "Drawing & Painting", slug: "drawing-painting" },
  { id: "cat-4", name: "Marketing", slug: "marketing" },
  { id: "cat-5", name: "Animation", slug: "animation" },
  { id: "cat-6", name: "Social Media", slug: "social-media" },
  { id: "cat-7", name: "UI/UX Design", slug: "ui-ux-design" },
  { id: "cat-8", name: "Creative Marketing", slug: "creative-marketing" },
  { id: "cat-9", name: "Cooking", slug: "cooking" },
];
