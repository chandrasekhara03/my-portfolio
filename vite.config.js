import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // 👈 Wajib pakai format ini agar jalurnya mengarah ke folder repositori Anda di GitHub
})