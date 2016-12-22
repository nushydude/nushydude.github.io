var gulp = require('gulp');

// execute css post processing stuff
// won't do anything without plug-in packages
var postcss = require('gulp-postcss');

// one of the postcss plug-in packages.
// automatically add browser prefixes
// used in conjunction with the postcss
var autoprefixer = require('autoprefixer');

// one of the postcss plug-in packages.
// automatcally copies the value of the declared variables
// used in conjunction with the postcss
var simplevars = require('postcss-simple-vars');

// one of the postcss plug-in packages.
// supports writing nested css
// used in conjunction with the postcss
var nested = require('postcss-nested');

// one of the postcss plug-in packages.
// facilitates importing of css content
// used in conjunction with the postcss
var cssImport = require('postcss-import');

var mixins = require('postcss-mixins');

// all of the neat CSS features
gulp.task('styles', function() {
  // we have to return because gulp.src() is an async function
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, simplevars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      // if an error occurrs in our css post processing,
      // handle it gracefully
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
