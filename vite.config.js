import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@src': path.resolve(__dirname, "src"),
      '@assets': path.resolve(__dirname, "src/assets"),
      '@datasource': path.resolve(__dirname, "src/datasource"),
      '@hooks': path.resolve(__dirname, "src/hooks"),
      '@layout': path.resolve(__dirname, "src/layout"),
      '@menu-items': path.resolve(__dirname, "src/menu-items"),
      '@routes': path.resolve(__dirname, "src/routes"),
      '@store': path.resolve(__dirname, "src/store"),
      '@themes': path.resolve(__dirname, "src/themes"),
      '@ui-component': path.resolve(__dirname, "src/ui-component"),
      '@utils': path.resolve(__dirname, "src/utils"),
      '@views': path.resolve(__dirname, "src/views"),
    }
  }

})
