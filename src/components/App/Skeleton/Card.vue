<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card__image card__skeleton-loading">
      <AppSkeletonAnimated height="184px" width="100%" />
    </div>
    <div class="card__title card__skeleton-loading">
      <AppSkeletonAnimated height="23px" width="100%" />
    </div>
    <div class="card__info card__skeleton-loading">
      <AppSkeletonAnimated height="23px" width="50%" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
