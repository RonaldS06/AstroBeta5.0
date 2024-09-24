// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  env: {
    schema: {
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
      // SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
    }
  }
});