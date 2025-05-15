import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/HuaAutoElectrical/',  // <-- IMPORTANT: Use your repo name
  plugins: [vue()]
})
