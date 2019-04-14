var path       = require('path');
var del        = require('del');
var gulp       = require('gulp');
var sass       = require('gulp-sass');
var minifyCss  = require('gulp-minify-css');
var plumber    = require('gulp-plumber');
var $          = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'src/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

gulp.task('styles', function() {
  gulp.src(app + 'styles/_base/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: autoprefixerBrowsers}))
    .pipe(gulp.dest(dist + 'styles'))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'assets/images/**/*.{png,jpg,jpeg,gif}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'assets/images/'));
});

// copy images
gulp.task('fonts', function(cb) {
  return gulp.src(app + 'assets/fonts/**/*.{eot,svg,ttf,woff,woff2,otf}')
    .pipe($.size({ title : 'fonts' }))
    .pipe(gulp.dest(dist + 'assets/fonts/'));
});


// copy vendors
gulp.task('vendors', function(cb) {
  return gulp.src(app + 'vendors/dist/*.js')
    .pipe(gulp.dest(dist + 'js/'));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'styles/**/*.scss', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + '**/*.js', ['scripts']);
  gulp.watch(app + '**/*.jsx', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  return del([dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['images', 'fonts', 'vendors', 'html','scripts', 'styles', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images', 'html', 'scripts','styles']);
});
