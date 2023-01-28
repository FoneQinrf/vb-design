const { resolve, sep } = require('path');
const fs = require('fs-extra');

const filterList = ['index.js', 'fite-ui.es.js', 'fite-ui.umd.js', 'fite-ui.d.ts', 'fite-ui.es.d.ts'];

if (fs.existsSync(resolve(__dirname, '../packages/fite-ui-taro/dist'))) {
  fs.removeSync(resolve(__dirname, '../packages/fite-ui-taro/dist'));
}

const fileList = [];

fs.copySync(resolve(__dirname, '../packages/fite-ui/dist'), resolve(__dirname, '../packages/fite-ui-taro/dist'), {
  filter: file => {
    const arr = file.split(sep);
    fileList.push(file);
    return !filterList.includes(arr[arr.length - 1]);
  },
});

fileList.forEach(item => {
  const arr = item.split(sep);
  if (arr[arr.length - 1].indexOf('taro') !== -1) {
    fs.removeSync(item);
  }
});
