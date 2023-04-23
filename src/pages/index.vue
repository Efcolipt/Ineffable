<script setup lang="ts">
const { data } = useAsyncData(
  'entity',
  async () => await $fetch('/api/collection/top')
)
</script>

<template>
  <div>
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide
        v-for="item in data?.films"
        :key="item.filmId"
        class="cursor-pointer"
      >
        <!-- <img class="rounded-xl" :src="item.posterUrl" /> -->
        {{ item.nameRu }}
      </SwiperSlide>

      <AppSwiperControls />
    </Swiper>
  </div>
</template>

<style scoped>
:deep(.swiper-slide) {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
:deep(.swiper-wrapper) {
  min-width: 100vh;
  width: 100vh;
}
</style>
