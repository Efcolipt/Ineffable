<script setup lang="ts">
// import { movieSmallCard } from '@/temp/smallCard/movie'

const { t } = useI18n({
  useScope: 'local',
})

useHead({
  title: t('page'),
})
</script>

<template>
  <div>
    <LazyAppSliderCollectionPopular />
    <div class="sliders-by-filter">
      <LazyAppSliderCardsCollectionByFilter
        v-for="i in 3"
        :key="`asod${i}`"
        :title="{
          href: '',
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

<i18n lang="json">
{
  "ru": {
    "page": "Главная"
  },
  "en": {
    "page": "Home"
  }
}
</i18n>
