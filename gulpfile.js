/* gulp modules */
var gulp = require("gulp");
var gutil = require("gulp-util");
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

/* webpack modules */
var webpack = require("webpack");
var webpackGlup = require("webpack-stream");
var webpackDevConfig = require("./webpack.dev.config.js");
var webpackProdConfig = require("./webpack.prod.config.js");

var config = require("./app-config.js");

/*
 * ----------------------------------------------------
 *  tasks
 * ----------------------------------------------------
 */
gulp.task('default',['webpack']);
gulp.task("watch", function() {
  browserSync.init({
    ghostMode: false,
    server: "./dest"
  })
  gulp.watch('dest/**/**.*', function() {
    browserSync.reload()
  })
});
gulp.task('build',['webpack:build']);
gulp.task('webpack', function() {
  return gulp.src(config.path.entry)
    .pipe(webpackGlup(webpackDevConfig))
    .pipe(gulp.dest('dest/'));
});
gulp.task('webpack:build',function () {
	return gulp.src(config.path.entry)
    .pipe(webpackGlup(webpackProdConfig))
    .pipe(gulp.dest('dest/'));
});