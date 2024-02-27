<script setup lang="ts">
const route = useRoute()
const cfg = useRuntimeConfig()

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: cfg.public.DOMAIN + route.path,
    },
  ],
}))

useSeoMeta({
  title:
    'Ineffable - фильмы и сериалы онлайн бесплатно в хорошем HD качестве 720, 1080, 4k',
  charset: 'utf-8',
  themeColor: '#222222',
  description: '',
  ogUrl: cfg.public.DOMAIN + route.path,
  ogDescription: '',
  ogSiteName:
    'Ineffable - фильмы и сериалы онлайн бесплатно в хорошем HD качестве 720, 1080, 4k',
  ogTitle:
    'Ineffable - фильмы и сериалы онлайн бесплатно в хорошем HD качестве 720, 1080, 4k',
  ogType: 'website',
  ogImage: `${cfg.public.DOMAIN}/og-logo.png`,
  twitterTitle: '',
  twitterDescription: '',
  twitterImage: `${cfg.public.DOMAIN}/og-logo.png`,
  twitterCard: 'summary_large_image',
  ogImageType: 'image/png',
  ogImageAlt: 'Ineffable',
  ogLocale: 'ru_RU',
  appleMobileWebAppStatusBarStyle: 'black',
  appleMobileWebAppTitle: cfg.public.APP_NAME,
  appleMobileWebAppCapable: 'yes',
})
</script>

<template>
  <Html lang="ru_RU">
    <Body>
      <NuxtLayout>
        <NuxtPwaManifest />
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0.001;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.001;
  }
}
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: opacity 250ms;
}
.page-enter,
.page-leave-to,
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
.page-enter-active,
.layout-enter-active {
  animation-duration: 250ms;
  animation-name: fadeIn;
  animation-timing-function: linear;
  backface-visibility: hidden;
}
.page-leave-active,
.layout-leave-active {
  animation-name: fadeOut;
  animation-duration: 0.25s;
}
/* Scale Y */
.scale-y-enter-active,
.scale-y-leave-active {
  transition: all 300ms linear;
  will-change: max-height, opacity;
  max-height: 160px;
  overflow: hidden;
  opacity: 1;
}
.scale-y-enter-from,
.scale-y-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
