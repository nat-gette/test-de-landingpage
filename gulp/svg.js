const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();

module.exports = function svg() {
  return src('src/img/svg/*.svg')
    .pipe(svgmin({
      js2svg: {
          pretty: true
      }
    }))
    .pipe(cheerio({
      run: ($) => {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true } 
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest('build/img/svg'))
    .pipe(browserSync.stream());
};