import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@Storage' : path.resolve(__dirname, './src/Utils/Storage/index.web.js')
    },
  },
})
