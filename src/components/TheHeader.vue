<script setup lang="ts">
const isVisibleLocaleDropdown = ref(false)

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <KeepAlive>
    <header class="header">
      <div class="container">
        <div class="header__content">
          <div class="header__brand">
            <NuxtLink to="/">
              <AppLogo />
            </NuxtLink>
          </div>
          <nav class="header__menu">
            <ul class="header__list">
              <li class="header__item">
                <NuxtLink to="/" class="text-md">
                  {{ t('menu.home') }}
                </NuxtLink>
              </li>
              <li class="header__item">
                <NuxtLink to="/" class="text-md">
                  {{ t('menu.movies') }}
                </NuxtLink>
              </li>
              <li class="header__item">
                <NuxtLink to="/" class="text-md">
                  {{ t('menu.series') }}
                </NuxtLink>
              </li>
              <li class="header__item">
                <NuxtLink to="/" class="text-md">
                  {{ t('menu.mult') }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="header__action">
            <div>
              <IconSearch />
            </div>
            <div class="header__locale">
              <div
                class="header__locale-list"
                @click="isVisibleLocaleDropdown = !isVisibleLocaleDropdown"
              >
                <div class="text-md">
                  {{ useFirstLetterUppercase($i18n.locale) }}
                </div>
                <div>
                  <IconArrowDown />
                </div>
              </div>
              <transition mode="ease-in">
                <div
                  v-if="isVisibleLocaleDropdown"
                  class="header__locale-dropdown"
                >
                  <ul>
                    <li
                      v-for="locale in $i18n.locales"
                      :key="`locale-${locale as string}`"
                      class="text-md"
                      @click="
                        $i18n.setLocale(locale as string),
                          (isVisibleLocaleDropdown = false)
                      "
                    >
                      {{ useFirstLetterUppercase(locale as string) }}
                    </li>
                  </ul>
                </div>
              </transition>
            </div>
            <div>
              <UIButton theme="secondary" size="sm">
                <div>
                  <IconUser />
                </div>
                <div>
                  {{ t('auth') }}
                </div>
              </UIButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  </KeepAlive>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  background: linear-gradient(
    180deg,
    $secondaryDarkColor 0%,
    rgba(34, 34, 34, 0) 100%
  );
  height: 155px;
  padding-top: 28px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 60px;

    a {
      font-weight: 500;
    }
  }

  &__action {
    display: flex;
    align-items: center;
    gap: 43px;
  }

  &__locale {
    position: relative;
    &-list {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #fff;
      cursor: pointer;
    }

    &-dropdown {
      position: absolute;
      background-color: $secondaryLightColor;
      border-radius: 8px;
      padding: 12px;
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      left: -15px;

      li {
        cursor: pointer;
      }
    }
  }
}
</style>

<i18n lang="json">
{
  "ru": {
    "menu": {
      "home": "Главная",
      "movies": "Фильмы",
      "series": "Сериалы",
      "mult": "Мультфильмы"
    },
    "auth": "Вход / Регистрация"
  },
  "en": {
    "menu": {
      "home": "Home",
      "movies": "Movies",
      "series": "Series",
      "mult": "Mults"
    },
    "auth": "Sign In / Sign Up"
  }
}
</i18n>
