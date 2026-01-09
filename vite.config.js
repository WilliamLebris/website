import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Will-s-website/',   // IMPORTANT for GitHub Pages
})
