/*
 * @Author: Fone`峰
 * @Date: 2021-11-15 11:55:06
 * @LastEditors: Fone`峰
 * @LastEditTime: 2022-01-20 10:09:29
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const parse = require('./lib/utils/parse.js');
const codegen = require('./lib/index');

module.exports.axiosApi = function (opt = {}) {
  const data = parse.parseApi(opt);
  console.log(data);
  const codeResult = codegen.codeApi(data);
  return codeResult;
};

module.exports.tsAxiosApi = function (opt = {}) {
  const data = parse.parseApi(opt);
  const codeResult = codegen.codeApi(data);
  return codeResult;
};
