import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy hacia el backend PHP que corre en XAMPP (http://localhost/cottullari).
    // Así el formulario puede hacer fetch('/registrar.php') sin problemas de CORS.
    proxy: {
      '/registrar.php': {
        target: 'http://localhost/cottullari',
        changeOrigin: true,
      },
    },
  },
})
