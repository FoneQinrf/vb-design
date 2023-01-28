const { series, src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');

const styleAutoprefixer = autoprefixer({
  overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', 'last 10 versions'],
  grid: true,
});

function compile() {
  return src('./components/**/*.scss').pipe(styleAutoprefixer).pipe(postcss([])).pipe(dest('./dist/components')); // 在当前目录下输出文件
}

exports.build = series(compile);
