const config = require('./package.json');
const { build, defineConfig } = require('vite');
const { resolve, sep } = require('path');
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
  resolve: {
    extensions: ['.ts'],
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
        external: [],
        output: {
          banner,
        },
      },
      emptyOutDir: false,
      lib: {
        entry: file,
        fileName: () => `${name}.js`, // 输出文件名
        formats: ['es'],
      },
      outDir: resolve(__dirname, './dist/src'),
    },
  });
};

(async function () {
  const files = await glob(`${resolve(__dirname, 'src')}/*.ts`);
  const input = {};
  files.forEach(item => {
    const arr = item.split(sep);
    const name = arr[arr.length - 1].split('.ts')[0];
    input[`${name}`] = item;
  });
  for (const key in input) {
    if (Object.prototype.hasOwnProperty.call(input, key)) {
      buildAll(key, input[key]);
    }
  }
})();
