import { version, author } from './package.json'

const publicAppConfig = {
  APP_NAME: 'Ineffable',
  TARGET: process.env.NODE_ENV,
  VERSION: version,
}

export default defineNuxtConfig({
  // Modules
  modules: ['@nuxtjs/tailwindcss', '@kevinmarrec/nuxt-pwa', 'nuxt-purgecss'],

  // Modules config
  purgecss: {
    enabled: true,
    safelist: [/.*--.*/],
  },

  pwa: {
    workbox: {
      enabled: false,
    },

    meta: {
      lang: 'ru-RU',
      theme_color: '#222222',
      author: author.name,
      description: `${publicAppConfig.APP_NAME} Online Cinema`,
      favicon: false,
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
    },

    manifest: {
      id: '/?standalone=true',
      name: `${publicAppConfig.APP_NAME} Online Cinema`,
      short_name: publicAppConfig.APP_NAME,
      background_color: '#222222',
      theme_color: '#222222',
      lang: 'ru-RU',
    },
  },

  tailwindcss: {
    cssPath: '@/assets/styles/_config.css',
    configPath: './tailwind.config.ts',
  },

  // Nuxt config
  srcDir: 'src',

  runtimeConfig: {
    public: publicAppConfig,
    INFO_BD: {
      API_KEY: '850a24d2-f3a2-4451-b89e-1d20d8149663',
      API_PROP: 'X-API-KEY',
      API_BASE_URL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
    },
    VIDEO_BD: {
      API_KEY: '850a24d2-f3a2-4451-b89e-1d20d8149663',
      API_PROP: 'X-API-KEY',
    },
  },

  sourcemap: true,

  css: ['@/assets/styles/_config.css', '@/assets/styles/_media.css'],
})
