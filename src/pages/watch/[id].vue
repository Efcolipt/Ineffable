<script setup lang="ts">
definePageMeta({
  validate (route) {
    // Check if the id is made up of digits
    return /^\d+$/.test(route.params.id)
  }
})

const { params: { id } } = useRoute()

const { data: collection } = await useAsyncData(`collection-${id}`, () =>
  $fetch(`/api/watch/${id}`)
)

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
