<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md'
  theme?: 'gradient' | 'secondary'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  theme: 'gradient',
})
</script>

<template>
  <button
    class="btn-default"
    :class="[`btn-default--size-${size}`, `btn-default--theme-${theme}`]"
  >
    <slot />
  </button>
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
      @apply bg-primary;
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
