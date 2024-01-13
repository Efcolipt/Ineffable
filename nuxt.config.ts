import { version, author } from './package.json'

const publicAppConfig = {
  APP_NAME: 'Ineffable',
  TARGET: process.env.NODE_ENV,
  VERSION: version
}

export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/tailwindcss',
      {
        cssPath: '@/assets/styles/_config.css',
        configPath: './tailwind.config.ts'
      }
    ],
    [
      '@kevinmarrec/nuxt-pwa',
      {
        workbox: {
          enabled: process.env.NODE_ENV === 'production'
        },

        meta: {
          lang: 'ru-RU',
          theme_color: '#222222',
          author: author.name,
          description: `${publicAppConfig.APP_NAME} Online Cinema`,
          favicon: false,
          mobileApp: true,
          mobileAppIOS: true,
          appleStatusBarStyle: 'black'
        },

        manifest: {
          id: '/?standalone=true',
          name: `${publicAppConfig.APP_NAME} Online Cinema`,
          short_name: publicAppConfig.APP_NAME,
          background_color: '#222222',
          theme_color: '#222222',
          lang: 'ru-RU'
        }
      }
    ],
    'nuxt-swiper',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    '@vueuse/nuxt',
    'nuxt-icons'
  ],

  site: {
    url: 'https://ineffable-cinema.netlify.app/'
  },

  devtools: { enabled: true },

  // Nuxt config
  srcDir: 'src',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: `%s | ${publicAppConfig.APP_NAME}`,
      meta: [
        // ...(head.value.meta ?? []),
        { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },
        { name: 'HandheldFriendly', content: 'true' }
      ],
      link: [
        // ...(head.value.link ?? []),
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@600;700&display=swap'
        }
      ]
    }
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true
    }
  },

  runtimeConfig: {
    public: publicAppConfig,
    INFO_BD: {
      API_KEY: process.env.API_KEY_INFO
    },
    VIDEO_BD: {
      API_KEY: process.env.API_KEY_VIDEO,
      API_PROP: process.env.API_PROP_VIDEO,
      API_BASE_URL: process.env.API_BASE_URL_VIDEO
    }
  },

  css: ['@/assets/styles/_config.css', '@/assets/styles/_media.css']
})
