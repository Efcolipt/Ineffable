import { version, author } from './package.json'

const publicAppConfig = {
  APP_NAME: 'Ineffable',
  TARGET: process.env.NODE_ENV,
  VERSION: version,
}

export default defineNuxtConfig({
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-purgecss',
    '@nuxtjs/supabase',
    'nuxt-swiper',
  ],

  // Modules config
  purgecss: {
    enabled: true,
    safelist: [/.*--.*/],
  },

  pwa: {
    workbox: {
      enabled: process.env.NODE_ENV === 'production',
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

  app: {
    keepalive: true,
  },

  runtimeConfig: {
    public: publicAppConfig,
    INFO_BD: {
      API_KEY: process.env.API_KEY_INFO,
      API_PROP: process.env.API_PROP_INFO,
      API_BASE_URL: process.env.API_BASE_URL_INFO,
    },
    VIDEO_BD: {
      API_KEY: process.env.API_KEY_VIDEO,
      API_PROP: process.env.API_PROP_VIDEO,
      API_BASE_URL: process.env.API_BASE_URL_VIDEO,
    },
  },

  css: ['@/assets/styles/_config.css', '@/assets/styles/_media.css'],
})
