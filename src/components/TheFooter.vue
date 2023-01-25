<script setup lang="ts">
const config = useAppConfig()
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <KeepAlive>
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="flex-content-fluid">
            <AppLogo theme="white" />
            <div>
              <span class="text-md">
                <a href="javascipt:void(0)">{{ t('download.link') }}</a>
                {{ t('download.app') }} “{{ config.APP_NAME }}”
                {{ t('download.desktop') }}
              </span>
            </div>
          </div>
          <div class="flex-content-fluid">
            <div>
              <span class="text-md text-md--blur">
                © 2018 - {{ new Date().getUTCFullYear() }}
                {{ config.APP_NAME }} — ISC License
              </span>
            </div>
            <div class="flex flex-align-center flex-gap-3">
              <div>
                <span class="text-md text-md--blur">
                  {{ t('release') }} v{{ config.VERSION }} {{ config.TARGET }}
                </span>
              </div>
              <div>
                <IconGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </KeepAlive>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 120px;
  height: 150px;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div {
      &:first-child {
        margin-bottom: 16px;

        span {
          opacity: 1;

          a {
            text-decoration: underline;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>

<i18n lang="json">
{
  "ru": {
    "download": {
      "link": "Скачать",
      "app": "приложение",
      "desktop": "на ваш компьютер"
    },
    "release": "Релиз"
  },
  "en": {
    "download": {
      "link": "Download",
      "app": "the download app",
      "desktop": "on your desktop"
    },
    "release": "Release"
  }
}
</i18n>
