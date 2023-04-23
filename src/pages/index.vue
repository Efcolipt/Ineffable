<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const { data } = useAsyncData(
  'entity',
  async () => await $fetch('/api/collection/top')
)
</script>

<template>
  <div>
    <ClientOnly>
      <Splide
        class="splide"
        :options="{
          autoplay: true,
          perPage: 1,
          perMove: 1,
          lazyLoad: 'nearby',
          rewind: false,
          drag: 'free',
          arrows: true,
          pagination: false,
          cover: true,
        }"
      >
        <SplideSlide
          v-for="item in data?.films"
          :key="item.filmId"
          class="cursor-pointer"
        >
          <img class="rounded-xl" :src="item.posterUrl" />
          <p class="base-text">{{ item.nameRu }}</p>
        </SplideSlide>
      </Splide>

      <!-- Add the progress bar element -->
      <div class="my-slider-progress mt-10">
        <div class="my-slider-progress-bar"></div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.splide {
  :deep(.splide__list) {
    display: flex;
  }

  .splide__arrow {
    @apply inset-0 h-full transform-none rounded-none w-12 opacity-90;

    &--prev {
      @apply left-[-1.5rem];
      background: linear-gradient(
        90deg,
        rgb(255, 255, 255) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &--next {
      @apply right-[-1.5rem];
      background: linear-gradient(
        270deg,
        rgb(255, 255, 255) 50%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
}
/* ScrollBar*/

.my-slider-progress {
  background: #ccc;
}

.my-slider-progress-bar {
  background: greenyellow;
  height: 2px;
  transition: width 400ms ease;
  width: 0;
}
</style>
