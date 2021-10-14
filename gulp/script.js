const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

module.exports = function script() {
  return src('src/script/main.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(dest('build/script'))
    .pipe(browserSync.stream());
}