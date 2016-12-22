var gulp = require('gulp');

gulp.task('fonts', function() {
  // we have to return because gulp.src() is an async function
  return gulp.src('./node_modules/font-awesome/fonts/*.*')
  .pipe(gulp.dest('./app/temp/fonts'));
});
