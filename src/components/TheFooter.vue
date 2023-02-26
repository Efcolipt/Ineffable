<script setup lang="ts">
const config = useRuntimeConfig().public
const { t } = useI18n()
</script>

<template>
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
              © 2018 - {{ new Date().getUTCFullYear() }} {{ config.APP_NAME }} —
              ISC License
            </span>
          </div>
          <div class="flex flex-align-center flex-gap-3">
            <div>
              <span class="text-md text-md--blur">
                {{ t('release') }} v{{ config.VERSION }}
                {{ config.TARGET }}
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
</template>

<style lang="scss" scoped>
.footer {
  margin-top: auto;
  padding-bottom: 40px;

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
