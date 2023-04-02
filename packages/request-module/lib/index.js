/*
 * @Author: Fone`峰
 * @Date: 2021-11-15 11:55:06
 * @LastEditors: Fone`峰
 * @LastEditTime: 2022-01-04 17:44:11
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const Handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js_beautify;
const apiTemplate = fs.readFileSync(path.join(__dirname, './requstTemplate/axios.hbs'), 'utf-8');
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8');
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8');

Handlebars.registerPartial('methods', methods);
Handlebars.registerPartial('method', method);
Handlebars.registerHelper('toLowerCase', function (word) {
  return word.toLowerCase();
});
Handlebars.registerHelper('brackets', function (word) {
  return `{${word}}`;
});
Handlebars.registerHelper('brackets', function (word) {
  return `{${word}}`;
});

const codeApi = function (data) {
  let template = Handlebars.compile(apiTemplate)(data);
  template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 });
  return template;
};

module.exports.codeApi = codeApi;
