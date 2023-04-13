<script setup lang="ts">
import { LocaleObject } from 'vue-i18n-routing'

const { locales, t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const isVisibleLocaleDropdown = ref(false)
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__brand">
          <NuxtLink to="/">
            <UILogo />
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
            <!-- <IconSearch /> -->
          </div>
          <div class="header__locale">
            <div
              class="header__locale-list"
              @click="isVisibleLocaleDropdown = !isVisibleLocaleDropdown"
            >
              <div class="text-md header__locale-current">
                {{ locale }}
              </div>
              <div>
                <!-- <IconArrowDown /> -->
              </div>
            </div>
            <transition mode="in-out">
              <ul
                v-if="isVisibleLocaleDropdown"
                class="header__locale-dropdown"
              >
                <li
                  v-for="item in (locales as LocaleObject[])"
                  :key="`locale-${item.code}`"
                >
                  <NuxtLink
                    :key="item.code"
                    :to="switchLocalePath(item.code)"
                    class="text-md"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </transition>
          </div>
          <div>
            <UIButton theme="secondary" size="sm">
              <!-- <IconUser /> -->
              <span>
                {{ t('auth-button') }}
              </span>
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  // background: linear-gradient(
  //   180deg,
  //   $secondaryDarkColor 0%,
  //   rgba(34, 34, 34, 0) 100%
  // );
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

    &-current {
      &::first-letter {
        text-transform: uppercase;
      }
    }

    &-dropdown {
      position: absolute;
      // background-color: $secondaryLightColor;
      border-radius: 8px;
      min-width: 64px;
      gap: 8px;
      display: flex;
      left: -50%;
      flex-direction: column;
      padding: 16px 12px;

      li {
        cursor: pointer;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
  }
}
</style>
