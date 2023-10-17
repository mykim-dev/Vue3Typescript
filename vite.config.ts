import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@containers': fileURLToPath(new URL('./src/containers', import.meta.url)),
      '@controls': fileURLToPath(new URL('./src/controls', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@screen': fileURLToPath(new URL('./src/screen', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  },
  css: {
    // loaderOptions: {
    //   sass: {
    //     sassOptions: {
    //       prependData: `@import" @/scss/variables.scss";`,
    //     }
    //   }
    // }
    preprocessorOptions: {
      sass: {
        additionalData: `@import " @/scss/_index.scss";`,
      }
    }
  }
})
