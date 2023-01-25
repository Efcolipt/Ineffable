<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import type { SwiperOptions } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'

const optionsSwiper: SwiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  navigation: true,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
  },
  loop: false,
}

const { pending, data: collection } = await useFetchTopCollection()
</script>
<template>
  <div class="slider-popular">
    <div v-if="pending" class="slider-popular__skeleton">
      <AppSkeletonAnimated width="100%" height="720px" />
      <div class="slider-popular__skeleton-info">
        <AppSkeletonAnimated width="420px" height="46px" />
        <AppSkeletonAnimated width="280px" height="46px" />
      </div>
    </div>
    <Swiper v-else v-bind="optionsSwiper">
      <SwiperSlide v-for="item in collection.films">
        {{ item }}
        <LazyAppCardCollection v-bind="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.slider-popular {
  position: relative;
  max-height: 720px;
  overflow: hidden;

  &__skeleton {
    position: relative;

    &-info {
      width: 100%;
      position: absolute;
      bottom: 100px;
      left: 120px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: linear-gradient(
      180deg,
      rgba(34, 34, 34, 0) 0%,
      $secondaryDarkColor 100%
    );
  }
}
</style>
