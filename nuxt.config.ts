import { version } from './package.json'

const isDev = process.env.NODE_ENV === 'development'

const publicAppConfig = {
  APP_NAME: 'Ineffable',
  TARGET: process.env.NODE_ENV,
  IS_DEVELOPMENT: isDev,
  DEBUG: isDev,
  VERSION: version,
  AUTHOR: 'Efcolipt',
  BASE_API: '/api',
}

const privateAppConfig = {
  INFO_BD: {
    API_KEY: '850a24d2-f3a2-4451-b89e-1d20d8149663',
    API_PROP: 'X-API-KEY',
    API_BASE_URL: 'https://kinopoiskapiunofficial.tech/api/v2.2/films',
  },
  VIDEO_BD: {
    API_KEY: '850a24d2-f3a2-4451-b89e-1d20d8149663',
    API_PROP: 'X-API-KEY',
  },
}

export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-purgecss',
  ],

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
      author: `${publicAppConfig.APP_NAME}`,
      // copyright: `${publicAppConfig.APP_NAME} | Created by ${publicAppConfig.AUTHOR}`,
      description: `${publicAppConfig.APP_NAME} Online Cinema`,
      favicon: false,
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black',
    },

    manifest: {
      id: '/?standalone=true',
      name: `${publicAppConfig.APP_NAME} Online Cinema`,
      short_name: `${publicAppConfig.APP_NAME}`,
      background_color: '#222222',
      theme_color: '#222222',
      lang: 'ru-RU',
    },
  },

  tailwindcss: {
    cssPath: '@/assets/styles/_config.css',
    config: './tailwind.config.ts',
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'ru',

    langDir: 'locales',

    locales: [
      {
        code: 'ru',
        name: 'Русский',
        iso: 'ru-RU',
        file: 'ru-RU.json',
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json',
      },
    ],
  },

  runtimeConfig: {
    public: publicAppConfig,
    ...privateAppConfig,
  },

  sourcemap: true,

  css: ['@/assets/styles/_config.css', '@/assets/styles/_media.css'],

  vite: {
    clearScreen: false,
  },
})
