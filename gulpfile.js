var gulp = require('gulp');
  var ts = require('gulp-typescript');
  var exec = require('child_process').exec;
  var browserify = require("browserify");
  var source = require('vinyl-source-stream');
  var buffer = require('vinyl-buffer');
  var uglify = require('gulp-uglify');
  var watch = require('gulp-watch');
  var livereload = require('gulp-livereload');
  var sourcemaps = require('gulp-sourcemaps');
  var plumber = require('gulp-plumber');
  var connect = require('gulp-connect');

  var tsify = require("tsify");
  gulp.task('ng-build', function(cb) {
      console.log('running ng build...');
      exec('ng build', function (err, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);
          cb();
          return true;
      });
  });

  gulp.task('content-script', function() {
      return browserify({
              basedir: '.',
              debug: true,
              entries: 'src/content-script/index.ts'
          })
          .plugin(tsify)
          .bundle()
          .pipe(source('content-script.js'))
          .pipe(plumber())
          .pipe(buffer())
          .pipe(sourcemaps.init({loadMaps: true}))
          .pipe(uglify())
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('./dist'))
          .pipe(connect.reload());
  });

  gulp.task('connect', function() {
    connect.server({
      root: 'app',
      livereload: true
    });
  });

  gulp.task('watch', () => {
    livereload.listen();

    watch([
      'src/content-script/*.ts',
      'src/app/**/*.ts',
      'src/app/**/*.html',
      'src/app/**/*.scss',
      'src/manifest.json'
    ]).on('change', gulp.parallel('ng-build', 'content-script'));

    watch('src/app/styles.scss/**/*.scss', ['styles']);

    return true;
  });

gulp.task('default', gulp.parallel('ng-build', 'content-script'));