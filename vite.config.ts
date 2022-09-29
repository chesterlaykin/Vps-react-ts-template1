import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import {resolve} from 'path';

const config: UserConfig = {
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, './src'),
      "@@": resolve(__dirname, './src/components'), 
      "#root": __dirname,
    },
  },
  css: {
    preprocessorOptions: {
    scss: {
      additionalData: `@import "@/assets/scss/start-files/index.scss";`
    }
  }
}
}

export default config
