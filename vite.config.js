// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/clima-dashboard/', 
  plugins: [react()],
  server: {
    proxy: {
      '/gw/arctic': {
        target: 'https://global-warming.org',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/gw\/arctic/, '/api/arctic-api'),
        secure: true,
        timeout: 15000,
      },
    },
  },
});
