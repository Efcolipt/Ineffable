<script setup lang="ts"></script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1);
}
</style>
