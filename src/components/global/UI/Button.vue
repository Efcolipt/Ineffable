<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'

interface Props {
  size?: 'sm' | 'md'
  theme?: 'gradient' | 'secondary'
  to?: RouteLocationRaw
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  theme: 'gradient',
  to: undefined
})
</script>

<template>
  <button
    v-if="!to"
    class="btn-default"
    :class="[`btn-default--size-${size}`, `btn-default--theme-${theme}`]"
  >
    <slot />
  </button>
  <NuxtLink
    v-else
    :to="to"
    class="btn-default"
    :class="[`btn-default--size-${size}`, `btn-default--theme-${theme}`]"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped lang="scss">
.btn-default {
  @apply flex justify-center items-center px-4 rounded-lg max-w-max gap-2 cursor-pointer border-0 ease-in-out duration-700 hover:bg-primary;

  &--size {
    &-sm {
      font-weight: 500;
      height: 40px;
    }

    &-md {
      font-weight: 600;
      height: 52px;
    }
  }

  &--theme {
    &-gradient {
      @apply bg-primary text-white;
    }

    &-white {
      @apply bg-white text-primary;
    }

    &-secondary {
      @apply bg-gray text-white;
    }
  }
}
</style>
