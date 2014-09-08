var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');


var config = {
  product: {
    scriptInput: 'src/*.js',
    scriptName:'app.js',
    styleInput: 'src/*.scss',
    styleName:'app.css'
  },
  dist:'dist/'
};

gulp.task('build-style', function () {

  if (!(config.product.styleInput && config.product.styleName)) {
    return;
  }

  return gulp.src(config.product.styleInput)
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass', style: 'compact'}))
    .pipe(gulp.dest(config.dist))
    .pipe(notify({
      message: 'build-style:complete'
    }));

});


//gulp.task('build-script', function () {
//
//  if (!(config.product.scriptInput && config.product.scriptName)) {
//    return;
//  }
//
//  gulp.src(config.product.scriptInput)
//    .pipe(concat(config.product.scriptName))
//    .pipe(gulp.dest(config.dist))
//    .pipe(rename({
//      suffix:'.min'
//    }))
//    .pipe(uglify())
//    .pipe(gulp.dest(config.dist))
//    .pipe(notify({
//      message: 'build-script:complete'
//    }));
//
//});


//gulp.task('build', function () {
//
//  //gulp.start('build-script', 'build-style');
//  gulp.start('build-style');
//});


gulp.task('default', function () {

  //gulp.start('build-script', 'build-style', 'document');
  gulp.start('build-style');
});
