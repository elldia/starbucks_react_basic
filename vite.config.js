import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/starbucks_react_basic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
