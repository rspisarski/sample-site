import { defineConfig } from 'astro/config';

import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    tailwind(),
    storyblok({
      accessToken: 'nzUR3BcrSZARXfzR61oh0wtt',
      components: {
        page: 'storyblok/Page',
        feature: 'storyblok/Feature',
        splitPanel: 'storyblok/SplitPanel',
      },
      apiOptions: {
        region: 'us',
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});