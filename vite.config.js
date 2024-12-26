import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root
        '..',
        // Allow serving files from the node_modules/@fontsource directory
        'node_modules/@fontsource'
      ]
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
