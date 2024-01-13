<template>
  <Swiper
    class="swipper"
    :modules="[SwiperAutoplay]"
    :slides-per-view="5"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <slot />
  </Swiper>
</template>

<style>
.swipper {
  width: 100%;
}
</style>
