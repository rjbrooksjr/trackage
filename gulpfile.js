var gulp = require('gulp');
var exec = require('child_process').exec;
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var run = require('gulp-run-command').default;
var tsify = require("tsify");
var terser = require('gulp-terser');
const del = require('del');

  gulp.task('ng-build', function(cb) {
      console.log('running ng build...');
      exec('ng build --prod', function (_err, stdout, stderr) {
          console.log(stdout);
          console.log(stderr);
          if (stderr) {
            del(['node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__']);
          }
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
          .pipe(plumber())
          .pipe(source('content-script.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init({loadMaps: true}))
          .pipe(terser())
          .pipe(sourcemaps.write('./'))
          .pipe(gulp.dest('./dist'))
          .pipe(connect.reload());
  });

  gulp.task('background', function() {
      return browserify({
              basedir: '.',
              debug: true,
              entries: 'src/app/background.ts'
          })
          .plugin(tsify)
          .bundle()
          .pipe(plumber())
          .pipe(source('background.js'))
          .pipe(buffer())
          .pipe(sourcemaps.init({loadMaps: true}))
          .pipe(terser())
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
      'src/manifest.json',
      'src/styles.scss',
    ]).on('change', gulp.parallel('ng-build', 'content-script'));

    watch('src/app/styles.scss/**/*.scss', ['styles']);

    return true;
  });

  // todo how can we kill content script?
  gulp.task('clean', run('/usr/bin/pkill -f "ng build"', { ignoreErrors: true }));

gulp.task('default', gulp.series('clean', gulp.parallel('ng-build', 'content-script', 'background')));