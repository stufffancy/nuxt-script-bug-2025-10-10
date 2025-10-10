<script setup lang="ts">
const script = useScript({
  src: 'https://example.com/analytics.js',
}, {
  // https://scripts.nuxt.com/docs/api/use-script-trigger-idle-timeout
  trigger: useScriptTriggerIdleTimeout({ timeout: 5000 })
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
