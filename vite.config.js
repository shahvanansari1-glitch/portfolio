import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps asset paths relative so the build works
// anywhere — GitHub Pages (shahvanansari1-glitch.github.io/portfolio),
// Netlify drop, or Vercel. No extra config needed per host.
export default defineConfig({
  plugins: [react()],
  base: './',
})
