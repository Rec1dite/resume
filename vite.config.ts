import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/site/",
  plugins: [svelte()],
  publicDir: 'src/public',
  server: {
    watch: {
      usePolling: true
    }
}
})