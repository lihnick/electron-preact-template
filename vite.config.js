import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  esbuild: {
    loader: 'jsx',
  },
  base: './', // Base/leading public path when linking files
  build: {
    outDir: 'app/build',
  },
  plugins: [preact()],
})
