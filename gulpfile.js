var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});
// var pug =  require('gulp-pug');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('pug',function(){
    gulp.src("./src/*.pug")
    .pipe(plumber({errorHanlder:notify.onError('Error:<%= error.message %>')}))
    .pipe($.pug({
        pretty:true
    }))
    .pipe(gulp.dest('./build'))
});

gulp.task('watch',function(){
    gulp.watch(['./src/*.pug','./src/*/*.pug'],['pug'])
})