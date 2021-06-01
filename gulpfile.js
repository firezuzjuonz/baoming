
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minicss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    react = require('gulp-react');
    browserify = require("browserify"),
    babelify = require("babelify"),
    source = require("vinyl-source-stream"),
    del = require('del'),
    server = require('./server');

server();


//清除文件
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/img'], cb);
});

//编译sass文件到 src/css
gulp.task('sass',function () {
    gulp.src(['src/scss/*.scss','!src/scss/size.scss','!src/scss/reset.scss']) //该任务针对的文件
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass({ style: 'expanded'})) //该任务调用的模块
        .pipe(gulp.dest('src/css'))
        .pipe(notify({ message: 'sass file complete' }));
});


// HTML处理
gulp.task('htmlWatch', function() {
    livereload.listen();
    gulp.watch('html/*.html').on('change', livereload.changed);
});

//模板处理

gulp.task('tplWatch', function() {
    livereload.listen();
    gulp.watch('template/*.tpl').on('change', livereload.changed);
});

//检测src/scss 目录下所有文件的变化
gulp.task('watchSass', function() {
    livereload.listen();
    gulp.watch('src/scss/*.scss',['sass']).on('change', livereload.changed);
});

//将 src/css 下的css文件压缩到 dist/css 中
gulp.task('miniCss',function(){
    gulp.src(['src/css/*.css'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(rename({suffix: '.min'}))
        .pipe(minicss())
        .pipe(gulp.dest('dist/css'));
});


//将 src/jsx文件夹下的js文件进行压缩
gulp.task('miniJs',function(){
    gulp.src(['src/js/*.js'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(concat('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

//检测src/js 目录下所有文件的变化
gulp.task('watchJs',function(){
    livereload.listen();
    gulp.watch('src/js/*.js').on('change', livereload.changed);
});

//定义默认任务
gulp.task('run',['clean','sass','watchSass','watchJs','htmlWatch','tplWatch']);

