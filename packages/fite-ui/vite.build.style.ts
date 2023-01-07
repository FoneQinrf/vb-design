import { defineConfig } from 'vite';
import { resolve } from 'path';
import postcsspxtoviewport from 'postcss-px-to-viewport';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';

export default async () => {
  await fs.copySync(resolve(__dirname, 'style'), resolve(__dirname, 'dist/style'));
  return defineConfig({
    build: {
      outDir: resolve(__dirname, 'dist'),
      minify: true,
      lib: {
        entry: resolve(__dirname, './style/index.scss'),
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
    },
  });
};
