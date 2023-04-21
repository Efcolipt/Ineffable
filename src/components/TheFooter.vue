<script setup lang="ts">
const config = useRuntimeConfig().public
</script>

<template>
  <footer class="mt-auto py-10">
    <div class="container">
      <div class="flex flex-col justify-center">
        <div class="flex justify-between items-center">
          <UILogo theme="white" />
          <div>
            <span class="base-text text-white">
              <a href="javascipt:void(0)" class="underline">Скачать</a>
              приложение "{{ config.APP_NAME }}" на ваш компьютер
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center opacity-50 mt-4">
          <div>
            <span class="base-text text-white">
              © 2018 - {{ new Date().getUTCFullYear() }} {{ config.APP_NAME }} —
              ISC License
            </span>
          </div>
          <div class="flex flex-align-center">
            <div>
              <span class="base-text text-white">
                Релиз версии v{{ config.VERSION }}
                {{ config.TARGET }}
              </span>
            </div>
            <div>
              <!-- <IconGithub /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
