// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/tailwindcss',
  ],

  css: ['@/styles/common.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/style.scss";',
        },
      },
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'eng',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      meta: [
        {
          name: 'description',
          content: 'site description',
        },
        {
          name: 'robots',
          content: 'index, follow, max-snippet:-1',
        },
      ],
    },
  },
});
