const { task, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

const html = require('./gulp/html');
const scss = require('./gulp/scss');
const img = require('./gulp/img');
const webpImg = require('./gulp/webpImg');
const fonts = require('./gulp/fonts');
const script = require('./gulp/script');
const scriptLib = require('./gulp/scriptLib');
const svg = require('./gulp/svg');
const clean = require('./gulp/clean');

task('watch', () => {
  watch('src/**.html', series(html)).on('change', browserSync.reload);
  watch('src/style/**/*.scss', series(scss)).on('change', browserSync.reload);
  watch('src/img/**/*.{jpg,png}', series(img)).on('change', browserSync.reload);
  watch('src/img/**/*.{jpg,png}', series(webpImg)).on('change', browserSync.reload);
  watch('src/fonts/*', series(fonts)).on('change', browserSync.reload);
  watch('src/script/*.js', series(script)).on('change', browserSync.reload);
  watch('src/img/svg/*.svg', series(svg)).on('change', browserSync.reload);
});


task('browser-sync', function() {
  browserSync.init({
      server: 'build'
  });
});

task('default', series(clean, parallel(html, scss, img, webpImg, fonts, script, scriptLib, svg), parallel('watch', 'browser-sync')));
task('build', series(clean, parallel(html, scss, img, webpImg, fonts, script, scriptLib, svg)))
