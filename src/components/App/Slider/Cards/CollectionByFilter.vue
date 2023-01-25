<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import type { SwiperOptions } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { movieSmallCard } from '~~/src/temp/smallCard/movie'

const optionsSwiper: SwiperOptions = {
  modules: [Navigation],
  slidesPerView: 5,
  navigation: true,
  spaceBetween: 15,
  autoplay: {
    delay: 5000,
  },
  loop: false,
}

const isSkeletonVisible = ref(true)
const data = ref([])

const elementInViewport = async () => {
  isSkeletonVisible.value = false

  data.value = await (() =>
    new Promise((resolve) =>
      setTimeout(() => resolve(movieSmallCard), 40000)
    ))()
}

defineProps<{
  title: {
    id: number
    href: string
    value: string
  }
}>()
</script>

<template>
  <section class="slider">
    <div class="container">
      <NuxtLink class="slider__caption" :to="title.href">
        <h3 class="headline-lg">
          {{ title.value }}
        </h3>
      </NuxtLink>

      <div style="min-height: 260px">
        <div
          v-if="data.length === 0 || isSkeletonVisible"
          v-observer="elementInViewport"
          class="slider__skeletons"
        >
          <LazyAppSkeletonCard
            v-for="item in 5"
            :key="`slider-skeleton-${item}`"
          />
        </div>
        <Swiper v-else v-bind="optionsSwiper">
          <SwiperSlide
            v-for="item in data"
            :key="`slider-data-${item.value}-${item.id}`"
          >
            <LazyAppCardCollection v-bind="item" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.slider {
  &__skeletons {
    display: flex;
    width: 100%;
    gap: 16px;
  }

  &__caption {
    display: block;
    margin-bottom: 30px;
  }
}
</style>
