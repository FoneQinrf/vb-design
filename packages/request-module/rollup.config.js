/*
 * @Author: Fone`峰
 * @Date: 2021-12-17 10:37:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-12-17 11:07:06
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: './index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'lib/requstTemplate', dest: 'dist' },
        { src: 'lib/template', dest: 'dist' },
      ],
    }),
  ],
};
