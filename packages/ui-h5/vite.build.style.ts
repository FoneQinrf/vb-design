import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';

export default async () => {
  await fs.copySync(resolve(__dirname, 'style'), resolve(__dirname, 'dist/style'));
  return defineConfig({
    build: {
      outDir: resolve(__dirname, 'dist'),
      minify: true,
      lib: {
        entry: resolve(__dirname, './style.scss'),
        formats: ['es'],
        name: 'style',
        fileName: 'style',
      },
      emptyOutDir: false,
    },
    resolve: {
      extensions: ['.scss'],
      alias: {
        '@': resolve(__dirname),
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', 'last 10 versions'],
            grid: true,
          }),
        ],
      },
    },
  });
};
