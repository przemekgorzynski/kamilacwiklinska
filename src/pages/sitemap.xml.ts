import type { APIRoute } from 'astro';
import { categories } from '../data/categories';

const SITE = 'https://kamilacwiklinska.com';

export const GET: APIRoute = () => {
  const urls = [
    { loc: `${SITE}/`, changefreq: 'monthly', priority: '1.0' },
    ...categories.map(c => ({
      loc: `${SITE}/galeria/${c.slug}/`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
    { loc: `${SITE}/polityka-prywatnosci/`, changefreq: 'yearly', priority: '0.3' },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
