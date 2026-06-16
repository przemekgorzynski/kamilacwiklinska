export interface Category {
  slug: string;       // URL slug + identity
  label: string;      // display name
  featured: boolean;  // shown in the homepage filter bar
  folders: string[];  // gallery folder(s) this category aggregates
}

// Stable, known categories. Photos within each are discovered at runtime
// (nginx directory listing), but the category set is fixed and used to
// pre-render a page per category. A category may aggregate several folders
// (e.g. "Ciąża i noworodki"). `featured` controls what the homepage surfaces —
// non-featured categories still have their own page.
export const categories: Category[] = [
  { slug: 'rodzine', label: 'Rodzina', featured: true, folders: ['rodzine'] },
  { slug: 'plenerowe', label: 'Plener', featured: true, folders: ['plenerowe'] },
  { slug: 'slubne', label: 'Ślub', featured: true, folders: ['slubne'] },
  { slug: 'macierzynstwo', label: 'Macierzyństwo', featured: true, folders: ['ciazowe', 'noworodkowe'] },
  { slug: 'urodziny', label: 'Urodziny', featured: true, folders: ['urodziny'] },
  { slug: 'kobiece', label: 'Kobiecość', featured: true, folders: ['kobiece'] },
  { slug: 'swieta', label: 'Świąteczne', featured: false, folders: ['swieta'] },
];

export const labelFor = (slug: string): string =>
  categories.find(c => c.slug === slug)?.label
  ?? slug.charAt(0).toUpperCase() + slug.slice(1);
