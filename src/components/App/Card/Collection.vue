<script setup lang="ts">
defineProps<{
  filmId: number
  nameRu?: string
  nameEn?: string
  year?: string
  filmLength?: string
  countries: string[]
  genres: { genre: string }[]
  rating?: string
  ratingVoteCount?: number
  posterUrl: string
  posterUrlPreview: string
}>()
</script>

<template>
  <NuxtLink class="card" :to="`/watch/${filmId}`">
    <div class="card__image">
      <img crossorigin="anonymous" :src="posterUrlPreview" loading="lazy" />
      <div class="card__rating">
        <span class="text-md">
          {{ rating }}
        </span>
      </div>
    </div>
    <div class="card__title">
      <h3 class="headline-md">
        {{ nameRu }}
      </h3>
    </div>
    <div class="card__info">
      <p class="text-md text-md--blur">
        {{ filmLength }} {{ genres[0].genre }}, {{ year }}
      </p>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.card {
  display: block;
  &__title {
    margin-bottom: 8px;

    h3 {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }
  }

  &__image {
    height: 184px;
    margin-bottom: 16px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  &__rating {
    position: absolute;
    width: 43px;
    height: 35px;
    background-color: $secondaryDarkColor;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 20px;
    top: 18px;

    span {
      font-weight: bold;
    }

    &--green {
      color: $secondaryGreenColor;
    }

    &--gray {
      color: $secondaryLightGrayColor;
    }
  }
}
</style>
