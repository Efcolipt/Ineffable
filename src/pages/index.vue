<script setup lang="ts">
const { auth } = useSupabaseAuthClient()
</script>

<template>
  <div>
    <button @click="auth.signInWithOAuth({ provider: 'github' })">
      Login github
    </button>
  </div>
</template>
