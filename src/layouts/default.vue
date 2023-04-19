<script lang="ts" setup>
const route = useRoute()
const config = useRuntimeConfig().public

const title = computed(
  () =>
    (route.meta?.title as string) ??
    'Онлайн кинотеатр для просмотра фильмов и сериалов'
)

useHead({
  title,
  // htmlAttrs: head.value.htmlAttrs,
  titleTemplate: `%s | ${config.APP_NAME}`,
  meta: [
    // ...(head.value.meta ?? []),
    { 'http-equiv': 'x-ua-compatible', content: 'IE=edge,chrome=1' },
    { name: 'HandheldFriendly', content: 'true' },
  ],
  link: [
    // ...(head.value.link ?? []),
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@600;700&display=swap',
    },
  ],
})
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
