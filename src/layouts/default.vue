<script lang="ts" setup>
const route = useRoute()

const title = computed(
  () =>
    (route.meta?.title as string) ??
    'Онлайн кинотеатр для просмотра фильмов и сериалов'
)

useHead({
  title: title.value
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
