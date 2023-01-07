const { resolve } = require('path');
const fs = require('fs-extra');

if (fs.existsSync(resolve(__dirname, '../packages/fite-ui-taro/dist'))) {
  fs.removeSync(resolve(__dirname, '../packages/fite-ui-taro/dist'));
}

fs.copySync(resolve(__dirname, '../packages/fite-ui/dist'), resolve(__dirname, '../packages/fite-ui-taro/dist'));
