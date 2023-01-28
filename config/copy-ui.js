const { resolve, sep } = require('path');
const fs = require('fs-extra');

const filterList = ['index.js', 'vb-ui.es.js', 'vb-ui.umd.js', 'vb-ui.d.ts', 'vb-ui.es.d.ts'];

if (fs.existsSync(resolve(__dirname, '../packages/ui-taro/dist'))) {
  fs.removeSync(resolve(__dirname, '../packages/ui-taro/dist'));
}

const fileList = [];

fs.copySync(resolve(__dirname, '../packages/ui-h5/dist'), resolve(__dirname, '../packages/ui-taro/dist'), {
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
