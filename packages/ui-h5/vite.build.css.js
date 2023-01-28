const { build, defineConfig } = require('vite');
const { resolve, sep } = require('path');
const autoprefixer = require('autoprefixer');
const globs = require('tiny-glob');

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.vue'],
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
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/theme.scss";`,
      },
    },
  },
});

const buildAll = async (name, file) => {
  await build({
    ...baseConfig,
    build: {
      minify: true,
      emptyOutDir: false,
      lib: {
        entry: file,
        formats: ['es'],
        name: 'index',
        fileName: () => `style.mjs`,
      },
      outDir: resolve(__dirname, `./dist/components/${name}`),
    },
  });
};

(async function () {
  const res = await globs(`${resolve(__dirname, 'components')}/**/index.scss`);
  res.forEach(item => {
    const name = item
      .split(sep)
      .join('/')
      .substr(item.lastIndexOf('components'))
      .match(/components\/(\S*)\/index/)[1];
    buildAll(name, item);
  });
})();
