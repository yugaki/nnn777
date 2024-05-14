import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
   image: {
    domains: ["nnn777.assets.newt.so","storage.googleapis.com"]
  },
});