<script setup lang="ts">
interface Props {
    size?: "sm" | "md";
    theme?: "gradient" | "secondary";
}

withDefaults(defineProps<Props>(), {
    size: "md",
    theme: "gradient"
})
</script>

<template>
    <button :class="['btn-default', 'btn-default--size-' + size, 'btn-default--theme-' + theme]">
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
    transition: background-color .6s ease-in-out;
    gap: 8px;
    cursor: pointer;
    border: none;

    &--size {
        &-sm {
            @include textMixin(14px, 0.04em);
            font-weight: 500;
            border-radius: 8px;
            height: 40px;
        }

        &-md {
            @include textMixin(16px, 0.05em);
            font-weight: 600;
            height: 52px;
        }
    }

    &--theme {
        &-gradient {
            background-color: $primaryLinearColor;
        }

        &-secondary {
            background-color: $secondaryLightColor;
        }
    }
}
</style>