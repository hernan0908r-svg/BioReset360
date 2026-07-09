import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    '',
    '/el-terapeuta',
    '/servicios',
    '/planes',
    '/precios',
    '/triaje',
    '/contacto',
    '/politica-de-privacidad',
    '/terminos',
  ];

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path === '/planes' || path === '/precios' ? 0.8 : 0.6,
  }));
}
