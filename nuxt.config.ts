const APP_NAME =
  (process.env.npm_package_name as string).charAt(0).toUpperCase() +
  (process.env.npm_package_name as string).slice(1)

process.env.SECURITY_DEV = 'true'
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    'nuxt-swiper',
    [
      'nuxt-purgecss',
      {
        enabled: true,
        safelist: [/.*--.*/],
      },
    ],
    [
      '@nuxtjs/i18n',
      {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'ru',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          redirectOn: 'root',
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: {
            wght: [400, 500, 600],
          },
          Rubik: {
            wght: [600, 700],
          },
        },
      },
    ],
    [
      'nuxt-security',
      {
        hidePoweredBy: false,
      },
    ],
  ],

  experimental: {
    inlineSSRStyles: false,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    rootTag: 'div',
    head: {
      titleTemplate: `%s | ${APP_NAME}`,
      meta: [
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },

        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no',
        },
        { name: 'HandheldFriendly', content: 'true' },
        {
          hid: 'description',
          name: 'description',
          content: APP_NAME,
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@/assets/styles/_config.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
})
