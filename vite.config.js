import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with the GitHub repo name you will create
export default defineConfig({
  plugins: [react()],
  base: '/Will-s-website-new/', 
})
