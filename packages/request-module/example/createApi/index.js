/*
 * @Author: Fone`峰
 * @Date: 2021-11-15 13:37:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2022-05-26 10:03:05
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const Swagger = require('../../index');
const jsonData = require('../api-json.json');
const fs = require('fs');
const path = require('path');

// console.log(Swagger);

const opt = {
  swagger: jsonData,
};

const codeResult = Swagger.axiosApi(opt);

const writePath = `api.js`;
fs.writeFileSync(path.join(__dirname, writePath), codeResult);

// console.log(Swagger.axiosApi(opt));
