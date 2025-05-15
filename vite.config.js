import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/hua-auto-electrical/',  // <-- IMPORTANT: Use your repo name
  plugins: [vue()]
})
