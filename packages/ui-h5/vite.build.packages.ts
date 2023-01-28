const config = require('./package.json');
const { build, defineConfig } = require('vite');
const { resolve, sep } = require('path');
const jsx = require('@vitejs/plugin-vue-jsx');
const vue = require('@vitejs/plugin-vue');
const glob = require('tiny-glob');

const banner = `/*!
* ${config.name} v${config.version} ${new Date()}
* (c) 2022 @mx
* Released under the MIT License.
*/
\n
`;

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [jsx(), vue()],
  resolve: {
    extensions: ['.tsx', '.ts', '.vue'],
    alias: {
      '@': resolve(__dirname),
    },
  },
});

const buildAll = async (name, file) => {
  await build({
    ...baseConfig,
    build: {
      minify: true,
      rollupOptions: {
        external: ['vue', '@tarojs/taro', '@/components/utils', 'lodash-es'],
        output: {
          banner,
          paths: {
            '@/components/utils': '../utils',
          },
        },
      },
      emptyOutDir: false,
      lib: {
        entry: file,
        fileName: () => `${name}.js`, // 输出文件名
        formats: ['es'],
      },
      outDir: resolve(__dirname, './dist/components'),
    },
  });
};

(async function () {
  const files = await glob(`${resolve(__dirname, 'components')}/**/index.tsx`);
  const taroFiles = await glob(`${resolve(__dirname, 'components')}/**/index.taro.tsx`);
  const input = {};
  files.forEach(item => {
    const name = item
      .split(sep)
      .join('/')
      .substr(item.lastIndexOf('components'))
      .match(/components\/(\S*)\/index/)[1];
    input[`${name}/index`] = item;
  });
  taroFiles.forEach(item => {
    const name = item
      .split(sep)
      .join('/')
      .substr(item.lastIndexOf('components'))
      .match(/components\/(\S*)\/index/)[1];
    input[`${name}/index.taro`] = item;
  });

  const opts = Object.assign(input, {
    'utils/index': resolve(__dirname, './components/utils/index.ts'),
  });

  for (const key in opts) {
    if (Object.prototype.hasOwnProperty.call(opts, key)) {
      buildAll(key, opts[key]);
    }
  }
})();
