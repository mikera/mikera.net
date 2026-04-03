import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://mikera.net',
  trailingSlash: 'always',
  server: {
    port: 3000
  },
  build: {
    format: 'directory'
  }
})
