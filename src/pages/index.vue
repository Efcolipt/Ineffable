<script setup lang="ts">
const { data: collectionAwaitable } = await useFetch('/api/awaitable')
</script>

<template>
  <div>
    <Swiper
      class="h-[80vh]"
      :modules="[SwiperAutoplay]"
      :slides-per-view="1"
      loop
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="item in collectionAwaitable?.docs" :key="item.name">
        <div class="relative h-full">
          <div>
            <img class="rounded-xl" :src="item?.backdrop?.url">
          </div>

          <div class="absolute bottom-[17%] left-[8%] max-w-[500px]">
            <h2 class="base-text text-[72px] leading-none">
              {{ item.name }}
            </h2>
            <p class="mt-6 base-text">
              {{ item.shortDescription }}
            </p>
            <div class="mt-2 items-center flex gap-2 opacity-50">
              <p v-if="item?.genres?.[0]" class="base-text font-normal text-sm first-letter:uppercase">
                {{ item.genres[0].name }}
              </p>
              <span class="base-text">•</span>
              <p v-if="item?.year" class="base-text font-normal text-sm">
                {{ item.year }}
              </p>
              <span class="base-text">•</span>
              <p v-if="item?.movieLength" class="base-text font-normal gap-2 text-sm flex items-center">
                <UIIcon name="time" /> {{ item.movieLength }} мин
              </p>
              <span class="base-text">•</span>
              <p v-if="item?.ageRating" class="base-text font-normal text-sm">
                +{{ item.ageRating }}
              </p>
            </div>
            <div class="flex gap-3 mt-10">
              <UIButton :to="`/watch/${item.id}`">
                <UIIcon width="20" height="20" name="play" />
                Смотреть
              </UIButton>
              <UIButton theme="secondary">
                Трейлер
              </UIButton>
              <UIButton theme="secondary">
                <UIIcon width="20" height="20" name="bookmark" />
              </UIButton>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- <UICarouselMini>
      <SwiperSlide v-for="item in collectionMain?.docs" :key="item.name">
        <div class="w-full h-[180px] relative">
          <div class="absolute left-[10px] top-[10px] backg">
            {{ item.rating?.kp }}
          </div>
          <img class="image rounded-xl" :src="item?.backdrop?.url">
        </div>

        <div class="mt-4">
          <h3 class="base-text color-white">
            {{ item.name }}
          </h3>
          <div class="mt-2 flex gap-2 opacity-50">
            <p v-if="item?.genres?.[0]" class="base-text font-normal text-sm first-letter:uppercase">
              {{ item.genres[0].name }}
            </p>
            <p v-if="item?.year" class="base-text font-normal text-sm">
              {{ item.year }}
            </p>
            <p v-if="item?.movieLength" class="base-text font-normal text-sm">
              {{ item.movieLength }} мин
            </p>
          </div>
        </div>
      </SwiperSlide>
    </UICarouselMini> -->
  </div>
</template>

<style scoped lang="scss">
.swipper {
  width: 100%;
}
</style>
