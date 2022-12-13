<script setup lang="ts">
    const { t } = useI18n({
        useScope: 'local'
    })

    useHead({
        title: t('page')
    })
</script>

<template>
    <AppCardSmall />
</template>

<i18n lang="json">
    {
        "ru": {
            "page": "Главная"
        },
        "en": {
            "page": "Home"
        }
    }
</i18n>