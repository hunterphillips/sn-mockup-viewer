import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  server: {
    proxy: {
      '/api': 'https://ven03505.service-now.com/', // ServiceNow instance URL for data requests
    },
  },
  build: {
    assetsInlineLimit: 10000000,
  },
});
