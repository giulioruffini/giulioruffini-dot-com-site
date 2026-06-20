import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import contentCollections from '@content-collections/vite'

const config = defineConfig({
  plugins: [
    contentCollections(),
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    netlify(),
    tanstackStart(),
    viteReact(),
  ],
  server: {
    // Expose the dev server to the LAN and allow mDNS hostnames like
    // `k.local`. Vite's default host check blocks non-localhost Host
    // headers (DNS-rebinding guard); a leading dot matches the domain
    // and all subdomains, so `.local` covers any *.local name.
    host: true,
    allowedHosts: ['.local'],
  },
})

export default config
