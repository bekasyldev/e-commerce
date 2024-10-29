// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
const resolve = (p: string) => fileURLToPath(new URL(p, import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
    },
  },
  alias: {
    '@': resolve('.'),
  },
  css: ['~/assets/css/index.css'],

})