// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/scripts'],
  scripts: {
    defaultScriptOptions: {
      trigger: {
        idleTimeout: 1000
      }
    }
  }
})