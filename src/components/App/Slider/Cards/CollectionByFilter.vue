<script setup lang="ts">
const isSkeletonVisible = ref(true)
const data = ref([])

const elementInViewport = () => {
  isSkeletonVisible.value = false
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

      <div>
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
        <Swiper>
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
