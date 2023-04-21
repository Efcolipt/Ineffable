<template>
  <header
    class="absolute w-full inset-0 h-40 z-50 pt-7 bg-gradient-to-b gradient-gray"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="header__brand">
          <NuxtLink to="/">
            <UILogo />
          </NuxtLink>
        </div>
        <nav class="header__menu">
          <ul class="flex items-center gap-11">
            <li class="header__item">
              <NuxtLink to="/"> Главная </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/"> Фильмы </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/"> Сериалы </NuxtLink>
            </li>
            <li class="header__item">
              <NuxtLink to="/"> Мультфильмы </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center gap-11">
          <div>
            <!-- <IconSearch /> -->
          </div>
          <div>
            <UIButton theme="secondary" size="sm">
              <!-- <IconUser /> -->
              <span> Вход / Регистрация </span>
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__item {
    a {
      @apply base-text text-white;
    }
  }
}
</style>
