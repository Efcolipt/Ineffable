<template>
  <div class="placeholder">&nbsp;</div>
</template>

<script setup lang="ts">
defineProps<{ height: string; width: string }>()
</script>

<style lang="scss" scoped>
@keyframes bgAnimate {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
.placeholder {
  height: v-bind('height');
  width: v-bind('width');
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    $skeletonPrimaryColor 20%,
    #565656 80%,
    $skeletonPrimaryColor 100%
  );
  background-size: 200% 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: bgAnimate 1.2s linear infinite;
}
</style>
