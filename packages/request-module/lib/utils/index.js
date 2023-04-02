/*
 * @Author: Fone`峰
 * @Date: 2021-11-15 14:53:33
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-12-17 10:55:13
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

const searchDto = function (obj = {}) {
  let str = [];
  const dto = function (object) {
    for (const key in object) {
      if (typeof object[key] !== 'string') {
        dto(object[key]);
      } else {
        str = object[key].split('/');
      }
    }
  };
  dto(obj);
  return str.length > 0 ? str[str.length - 1] : '';
};

module.exports.searchDto = searchDto;
