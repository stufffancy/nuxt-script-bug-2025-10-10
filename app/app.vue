<script setup lang="ts">
const script = useScript({
  src: "https://checkout-sdk.onerway.com/v3/",
  crossorigin: false,
}, {
  // trigger: useScriptTriggerIdleTimeout({ timeout: 1000 })
});
</script>

<template>
  <div>Script status: {{ script.status.value }}</div>
</template>
