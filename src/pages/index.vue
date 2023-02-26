<script setup lang="ts">
const { data } = await useLazyAsyncData(() =>
  $fetch(`${useRuntimeConfig().public.BASE_API}/info/top`)
)
</script>

<template>
  <AppSliderCollectionPopular :collection="data" />
</template>
