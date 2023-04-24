<script setup lang="ts">
const { auth } = useSupabaseAuthClient()
const { data } = useAsyncData(
  'entity',
  async () => await $fetch('/api/collection/top')
)
</script>

<template>
  <div>
    <button @click="auth.signInWithOAuth({ provider: 'github' })">
      Login github
    </button>
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="item in data?.films" :key="item.filmId">
        <img class="rounded-xl" :src="item.posterUrl" />
        {{ item.nameRu }}
      </SwiperSlide>

      <AppSwiperControls />
    </Swiper>
  </div>
</template>

<style scoped>
:deep(.swiper-wrapper) {
  display: flex;
}

:deep(.swiper-slide) {
  flex: 0 0 100%;
}
</style>
