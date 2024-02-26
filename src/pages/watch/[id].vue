<script setup lang="ts">
definePageMeta({
  validate (route) {
    return /^\d+$/.test(route.params?.id?.toString?.() ?? null)
  }
})

const { params: { id } } = useRoute()

const { data: collection } = await useFetch(`/api/watch/${id}`)

console.log(collection.value)
</script>

<template>
  <section class="mt-40">
    <h1 class="base-text">
      {{ collection?.name }}
    </h1>
  </section>
</template>

<style scoped lang="scss">
.swipper {
  width: 100%;
}
</style>
