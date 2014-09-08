var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    compass = require('gulp-compass'),
    notify = require('gulp-notify');


//var config = {
//  product: {
//    scriptInput: 'src/*.js',
//    scriptName:'app.js',
//    styleInput: 'src/*.scss',
//    styleName:'app.css'
//  },
//  dist:'dist/'
//};

// trying to create task just to compile foundation
//gulp.task('foundation', function(){
//  gulp.src('./src/foundation_customized.scss')
//    .pipe(compass({
//      config_file: './config.rb',
//      css: './dist',
//      sass: './bower_components/foundation/scss',
//      debut: true
//    }))
//    .pipe(gulp.dest('./dist/'))
//    .pipe(notify({
//      message: 'build-foundation:complete'
//    }))
//    .on('error', function(error) {
//      log(error)
//    });
//});

gulp.task('compass', function(){
  gulp.src('./src/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './dist',
      sass: './src',
      debut: true
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(notify({
      message: 'build-compass:complete'
    }))
    .on('error', function(error) {
      log(error)
    });
});

//gulp.task('build-style', function () {
//
//  if (!(config.product.styleInput && config.product.styleName)) {
//    return;
//  }
//
//  return gulp.src(config.product.styleInput)
//    .pipe(sass({sourceComments: 'map', sourceMap: 'sass', style: 'compact'}))
//    .pipe(gulp.dest(config.dist))
//    .pipe(notify({
//      message: 'build-style:complete'
//    }));
//
//});

gulp.task('default', function () {

  //gulp.start('build-script', 'build-style', 'document');
  gulp.start('compass');
});
