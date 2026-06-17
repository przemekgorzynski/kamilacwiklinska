export interface Category {
  slug: string;        // URL slug + identity
  label: string;       // display name
  featured: boolean;   // shown in the homepage filter bar
  folders: string[];   // gallery folder(s) this category aggregates
  description: string; // short SEO/intro text shown on the category page
}

// Stable, known categories. Photos within each are discovered at runtime
// (nginx directory listing), but the category set is fixed and used to
// pre-render a page per category. A category may aggregate several folders
// (e.g. "Ciąża i noworodki"). `featured` controls what the homepage surfaces —
// non-featured categories still have their own page.
export const categories: Category[] = [
  {
    slug: 'rodzine', label: 'Rodzina', featured: true, folders: ['rodzine'],
    description: 'Naturalne sesje rodzinne i dziecięce w Aleksandrowie Kujawskim, Toruniu, Włocławku i okolicach — ciepłe, autentyczne kadry pełne emocji.',
  },
  {
    slug: 'plenerowe', label: 'Plener', featured: true, folders: ['plenerowe'],
    description: 'Sesje plenerowe w pięknych zakątkach regionu — Toruń, Włocławek, Ciechocinek i okolice. Naturalne światło i swobodna atmosfera.',
  },
  {
    slug: 'slubne', label: 'Ślub', featured: true, folders: ['slubne'],
    description: 'Fotografia ślubna — reportaż z Waszego dnia oraz sesje narzeczeńskie i poślubne w Toruniu, Włocławku, Aleksandrowie Kujawskim i okolicach.',
  },
  {
    slug: 'macierzynstwo', label: 'Macierzyństwo', featured: true, folders: ['ciazowe', 'noworodkowe'],
    description: 'Sesje ciążowe i noworodkowe — delikatne kadry pierwszych, najważniejszych chwil. Aleksandrów Kujawski, Toruń, Włocławek i okolice.',
  },
  {
    slug: 'urodziny', label: 'Urodziny', featured: true, folders: ['urodziny'],
    description: 'Sesje urodzinowe i smash cake — radosne, kolorowe wspomnienia z wyjątkowego dnia. Toruń, Włocławek, Aleksandrów Kujawski i okolice.',
  },
  {
    slug: 'kobiece', label: 'Kobiecość', featured: true, folders: ['kobiece'],
    description: 'Sesje kobiece i portretowe podkreślające naturalne piękno i pewność siebie. Toruń, Aleksandrów Kujawski, Włocławek i okolice.',
  },
  {
    slug: 'swieta', label: 'Świąteczne', featured: false, folders: ['swieta'],
    description: 'Świąteczne sesje rodzinne pełne ciepła i magii. Toruń, Włocławek, Aleksandrów Kujawski i okolice.',
  },
];

export const labelFor = (slug: string): string =>
  categories.find(c => c.slug === slug)?.label
  ?? slug.charAt(0).toUpperCase() + slug.slice(1);
