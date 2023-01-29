<script setup lang="ts">
const { pending, data: collection } = await useFetchTopCollection()
</script>
<template>
  <div class="slider-popular">
    <Swiper>
      <SwiperSlide v-for="item in collection.films" :key="item.value">
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
