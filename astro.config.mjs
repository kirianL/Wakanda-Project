// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://wakandaproject.com',
  output: 'static',
  prefetch: true,

  image: {
    // Prioriza formatos modernos al optimizar las fotografías.
    responsiveStyles: true,
  },

  integrations: [react()],
});