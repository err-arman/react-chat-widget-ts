import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";
const pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "${pathSrc}/scss";` 
      }
    }
  }
})
