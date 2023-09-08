import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass';


export default defineConfig({
  plugins: [react()],
  base: '/week3_hw/',
  css:{
    preprocessorOptions:{
      scss:{
        implementation: sass,
      }
    }
  }
})
