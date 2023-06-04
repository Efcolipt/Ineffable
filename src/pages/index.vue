<script setup lang="ts">
const { auth } = useSupabaseAuthClient()
const { data } = await useLazyAsyncData('collectionAwaitable', () =>
  $fetch('/api/collection/awaitable')
)

console.log(data.value?.docs)
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
      <SwiperSlide v-for="item in data?.docs" :key="item.name">
        <img class="rounded-xl" :src="item.backdrop.url" />
        {{ item.name }}
      </SwiperSlide>

      <AppSwiperControls />
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
:deep(.swiper-wrapper) {
  display: flex;
}

:deep(.swiper-slide) {
  flex: 0 0 100%;
  min-height: 600px;
}
</style>
