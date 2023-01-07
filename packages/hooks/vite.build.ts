import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import config from './package.json';

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @mx
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
      name: 'MxHooks',
      fileName: format => {
        return `index.${format}.js`;
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: [],
      output: {
        banner,
      },
    },
    emptyOutDir: false,
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
      cleanVueFileName: false,
      outputDir: resolve(__dirname, './dist/types'),
      tsConfigFilePath: resolve(__dirname, './tsconfig.json'),
      // @ts-ignore
      beforeWriteFile: async (filePath: string, content: string) => {
        return {
          filePath,
          content,
        };
      },
    }),
  ],
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@': resolve(__dirname),
    },
  },
});
