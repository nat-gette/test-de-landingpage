const { src, dest } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const browserSync = require('browser-sync').create();

module.exports = function html() {
  return src('src/**.html')
    .pipe(gulpif(argv.prod, htmlmin({ collapseWhitespace: true })))
    .pipe(dest('build'))
    .pipe(browserSync.stream());
};