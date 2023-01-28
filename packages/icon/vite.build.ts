import { resolve } from 'path';
import { defineConfig } from 'vite';
import jsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @fite-design/icon
* Released under the MIT License.
*/
\n
`;

export default defineConfig({
  root: resolve(__dirname, './'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    minify: true,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'FiteIcon',
      fileName: format => {
        return `icon.${format}.js`;
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue', 'lodash-es'],
      output: {
        banner,
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    jsx(),
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
      cleanVueFileName: false,
      outputDir: resolve(__dirname, './dist/types'),
      tsConfigFilePath: resolve(__dirname, './tsconfig.json'),
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.vue'],
    alias: {
      '@': resolve(__dirname),
    },
  },
});
