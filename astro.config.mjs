// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://satheez.github.io',
  base: '/jwt-decoder',
  integrations: [tailwind()]
});