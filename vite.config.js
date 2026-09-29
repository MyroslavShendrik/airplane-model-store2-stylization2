import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'airplane-model-store2-stylization2', //! <-- ім'я репозиторію
  //! Налаштування Аліасів для абсолютних шляхів імпортів
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
