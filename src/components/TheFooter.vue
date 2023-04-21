<script setup lang="ts">
const config = useRuntimeConfig().public
</script>

<template>
  <footer class="mt-auto py-10">
    <!-- <div
      class="absolute left-1/2 -translate-x-1/2 flex justify-between max-w-4xl h-full w-full gap-5 top-full z-10 opacity-70"
    >
      <div class="h-[320px] w-full bg-pink blur-3xl rounded-full"></div>
      <div class="h-[420px] w-full bg-primary blur-3xl rounded-full"></div>
    </div> -->
    <div class="container">
      <div class="flex flex-col justify-center">
        <div class="flex justify-between items-center">
          <UILogo theme="white" />
          <div>
            <span class="base-text">
              <a href="javascipt:void(0)" class="underline">Скачать</a>
              приложение "{{ config.APP_NAME }}" на ваш компьютер
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center opacity-50 mt-4">
          <div>
            <span class="base-text">
              © 2018 - {{ new Date().getUTCFullYear() }} {{ config.APP_NAME }} —
              ISC License
            </span>
          </div>
          <div class="flex flex-align-center gap-4">
            <div>
              <span class="base-text">
                Релиз версии v{{ config.VERSION }}
                {{ config.TARGET }}
              </span>
            </div>
            <div>
              <UIIconBase name="github" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
