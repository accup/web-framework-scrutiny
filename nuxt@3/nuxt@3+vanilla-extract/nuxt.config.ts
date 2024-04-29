import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
