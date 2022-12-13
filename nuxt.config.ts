import pkg from './package.json'
const APP_NAME = pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1)

export default defineNuxtConfig({
    srcDir: "src",
    modules: [
        "@nuxt/image-edge",
        "nuxt-purgecss",
        [
            "@nuxtjs/i18n",
            {
                locales: ['ru', 'en'],
                defaultLocale: 'ru',
                vueI18n: {
                    fallbackLocale: 'ru'
                },
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: 'i18n_redirected',
                    redirectOn: 'root',
                }
            }
        ],
        [
            "@nuxtjs/google-fonts", {
                families: {
                    Roboto: {
                        wght: [400, 500, 600],
                    },
                    Rubik: {
                        wght: [600, 700],
                    },
                },
            }
        ],
        [
            'nuxt-security',
            {
                hidePoweredBy: false
            }
        ]
    ],

    routeRules: {
        "/_nuxt/**": { headers: { "cache-control": "s-maxage=0" } },
    },

    app: {
        head: {
            title: APP_NAME,
            titleTemplate: `%s | ${APP_NAME}`,
            meta: [
                { "http-equiv": "x-ua-compatible", content: "true" },
                { "http-equiv": "Content-Security-Policy", content: "default-src *; img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;style-src  'self' 'unsafe-inline' *" },
                {
                    name: "viewport",
                    content:
                        "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no",
                },
                { name: "HandheldFriendly", content: "true" },
                {
                    hid: "description",
                    name: "description",
                    content: APP_NAME,
                },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
    },

    css: ["@/assets/styles/_config.scss"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_vars.scss" as *;',
                },
            },
        },
    },
});