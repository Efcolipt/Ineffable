<script setup lang="ts">
definePageMeta({
  title: 'page.head.title.index',
})
</script>

<template>
  <div>
    <!-- <LazyAppSliderCollectionPopular /> -->
    <div class="sliders-by-filter">
      <LazyAppSliderCardsCollectionByFilter
        v-for="i in 3"
        :key="`asod${i}`"
        :title="{
          to: '',
          value: 'test',
        }"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sliders-by-filter {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
}
</style>
