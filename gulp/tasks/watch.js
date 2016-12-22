var gulp = require('gulp');
var watch = require('gulp-watch');

// this package will automatically update the browserSync
// when the code is changed
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  // this will automatically start the web server
  // and open our site in the default browser
  browserSync.init({
    notify: false,
    server: {
      baseDir: '' //folder where our website lives
    }
  });

  // whenever a change to the index.html is detected
  watch('./app/index.html', function() {
    // automatically reload the webpage
    browserSync.reload();
  });

  // whenever a change to any of the CSS files is detected
  watch('./app/assets/styles/**/*.css', function() {
    // run the 'cssInject' task
    // 'styles' task will be added as a dependency to 'cssInject' task
    // where the dependencies will be executed before the main task
    gulp.start('cssInject');
  });
});


gulp.task('cssInject', ['styles'] /* dependencies */, function() {
  // we have to return because gulp.src() is an async function
  return gulp.src('./app/temp/styles')
  .pipe(browserSync.stream());
});
