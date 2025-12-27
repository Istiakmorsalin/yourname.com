import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://istiakmorsalin.com',  // ✅ Changed from 'yourname.com'
  base: '/',  // ✅ Added this - important!
  integrations: [tailwind()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});