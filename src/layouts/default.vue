<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n({
  useScope: 'local',
})

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})

const title = computed(() =>
  t(
    (route.meta.title as string | null | undefined) || 'page.head.title.default'
  )
)
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <div class="wrapper">
        <TheHeader />
        <slot />
        <TheFooter />
      </div>
    </Body>
  </Html>
</template>

<i18n lang="json">
{
  "ru": {
    "page": {
      "head": {
        "title": {
          "default": "Bulba",
          "index": "Главная"
        }
      }
    }
  },
  "en": {
    "page": {
      "head": {
        "title": {
          "default": "Bulba",
          "index": "Home"
        }
      }
    }
  }
}
</i18n>
