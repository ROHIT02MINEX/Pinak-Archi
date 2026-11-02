import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://pinakarchitect.com'; return ['','/work','/about','/services','/contact'].map(path=>({url:base+path,lastModified:new Date()})); }
