<script lang="ts" setup>
const route = useRoute()

const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
  identifierAttribute: 'id',
})

const title = computed(() =>
  t(
    (route.meta.title as string | null | undefined) ?? 'page.head.title.default'
  )
)

onMounted(async () => {
  const workbox = await window.$workbox
  if (workbox) {
    workbox.addEventListener('installed', (event) => {
      // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
      console.log(event)
    })
  }
})
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
      <KeepAlive>
        <div class="wrapper">
          <TheHeader />
          <main>
            <slot />
          </main>
          <TheFooter />
        </div>
      </KeepAlive>
    </Body>
  </Html>
</template>
