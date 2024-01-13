<script lang="ts" setup>
defineProps<{
    name: string;
  }>()
</script>

<template>
  <NuxtIcon :name="name" filled />
</template>
