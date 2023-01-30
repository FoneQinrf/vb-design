const { resolve, sep } = require('path');
const fs = require('fs-extra');
const glob = require('tiny-glob');

const filterList = ['index.js', 'vb-ui.es.js', 'vb-ui.umd.js', 'vb-ui.d.ts', 'vb-ui.es.d.ts'];

if (fs.existsSync(resolve(__dirname, '../packages/ui-taro/dist'))) {
  fs.removeSync(resolve(__dirname, '../packages/ui-taro/dist'));
}

const fileList = [];

fs.copySync(resolve(__dirname, '../packages/ui-h5/dist'), resolve(__dirname, '../packages/ui-taro/dist'), {
  filter: file => {
    const arr = file.split(sep);
    const flag = arr[arr.length - 2] === 'utils' ? true : !filterList.includes(arr[arr.length - 1]);
    fileList.push(file);
    return flag;
  },
});

fileList.forEach(item => {
  const arr = item.split(sep);
  if (arr[arr.length - 1].indexOf('taro') !== -1) {
    fs.removeSync(item);
  }
});

(async function () {
  const files = await glob(`${resolve(__dirname, '../', 'packages/ui-taro/dist')}/**/**.js`);
  files.forEach(ele => {
    const str = fs.readFileSync(ele, 'utf-8');
    const context = str.replace(new RegExp('"div"', 'g'), '"view"');
    fs.writeFileSync(ele, context);
  });
})();
