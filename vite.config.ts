import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';
import path from 'path';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      imports: [
        "react",
        { from: "react", imports: ["createContext"] },        
        { from: "react", imports: ["ReactNode"], type: true },        
      ],
      dts: './auto-imports.d.ts',
    }),
    react(),
    Pages(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  }
});