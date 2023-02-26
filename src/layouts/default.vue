<script lang="ts" setup>
const title = ref(
  useI18n().t((useRoute().meta.title as string) ?? 'page.head.title.default')
)

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})

const config = useRuntimeConfig().public

useHead({
  title: title.value,
  htmlAttrs: head.value.htmlAttrs,
  titleTemplate: `%s | ${config.APP_NAME}`,
  meta: [
    ...(head.value.meta || []),
    { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },
    { name: 'HandheldFriendly', content: 'true' },
  ],
  link: [
    ...(head.value.link || []),
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@600;700&display=swap',
    },
  ],
})
</script>

<template>
  <Body>
    <div class="wrapper">
      <TheHeader />
      <main>
        <slot />
      </main>
      <TheFooter />
    </div>
  </Body>
</template>
