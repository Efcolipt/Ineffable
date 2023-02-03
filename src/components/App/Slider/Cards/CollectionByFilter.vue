<script setup lang="ts">
const data = ref([
  {
    value: 'test',
    id: 1,
  },
  {
    value: 'testasdsd',
    id: 2,
  },
  {
    value: 'testasdasdasdas',
    id: 3,
  },
  {
    value: 'testasdasdasdas',
    id: 4,
  },
  {
    value: 'testasdasdasdas',
    id: 5,
  },
  {
    value: 'testasdasdasdas',
    id: 6,
  },
])

defineProps<{
  title: {
    to: string
    value: string
  }
}>()
</script>

<template>
  <ClientOnly>
    <section class="collection-filter">
      <div class="container">
        <NuxtLink class="collection-filter__caption" :to="title.to">
          <h3 class="headline-lg">
            {{ title.value }}
          </h3>
        </NuxtLink>
      </div>
      <Swiper
        lazy
        navigation
        watch-slides-progress
        :slides-offset-before="100"
        :space-between="24"
        :slides-per-view="5"
        :preload-images="false"
        :modules="[SwiperLazy, SwiperAutoplay, SwiperNavigation]"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide
          v-for="item in data"
          :key="`swiper-slid-item-${item.value}-${item.id}`"
        >
          apsod
        </SwiperSlide>
      </Swiper>
    </section>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.collection-filter {
  &__caption {
    display: block;
    margin-bottom: 30px;
  }

  :deep(.swiper) {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :deep(.swiper-wrapper) {
    display: flex;
  }

  :deep(.swiper-slide) {
    flex: 0 0 calc((100% / 5) - 24px);
    border: 1px solid red;
  }
}
</style>
