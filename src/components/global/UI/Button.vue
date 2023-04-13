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
  padding: 0 18px;
  width: max-content;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.6s ease-in-out;
  gap: 8px;
  cursor: pointer;
  border: none;

  &--size {
    &-sm {
      font-weight: 500;
      border-radius: 8px;
      height: 40px;
    }

    &-md {
      font-weight: 600;
      height: 52px;
    }
  }

  &--theme {
    &-gradient {
      // background-color: $primaryLinearColor;
    }

    &-secondary {
      // background-color: $secondaryLightColor;
    }
  }
}
</style>
