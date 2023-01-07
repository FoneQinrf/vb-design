const { build, defineConfig } = require('vite');
const { resolve, sep } = require('path');
const postcsspxtoviewport = require('postcss-px-to-viewport');
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
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 375, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*', '!font-size', '!font-weight'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          landscape: false, // 是否处理横屏情况
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
