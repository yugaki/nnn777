import { defineConfig } from 'astro/config';
import lottie from 'astro-integration-lottie';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lottie()], // tailwind と lottie を同時に使う
  image: {
    domains: ["nnn777.assets.newt.so", "storage.googleapis.com"], // 画像のドメインを許可
  },
});
