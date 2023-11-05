import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const keep_alive = require('./keep_alive.js')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
