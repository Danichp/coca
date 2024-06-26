import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './src/assets',
  base: '/coca/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
        pricing: './src/pricing.html',
        contact: './src/contact.html',
        about: './src/about.html',
        blog: './src/blog.html',
        news: './src/news.html',
      },
    },
  },
  plugins: [
    ViteMinifyPlugin(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
    injectHTML(),
  ],
});
