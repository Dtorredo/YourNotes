import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://localhost:4000',
        ws: true,
      }
    }
  },
  publicDir: 'public',
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
  }
});
