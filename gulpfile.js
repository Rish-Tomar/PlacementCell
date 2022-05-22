const gulp = require('gulp')
const gulp_sass= require('gulp-sass')(require('sass'));
const gulp_cssnano = require('gulp-cssnano')
const rev=require('gulp-rev')


gulp.task('css',function(){
    console.log('minifying CSS')
    gulp.src('./assets/sass/**/*.scss')
    .pipe(gulp_sass())                    
    .pipe(gulp_cssnano())
    .pipe(gulp.dest('./assets.css'))

    return gulp.src('./assets/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest('./public/assets'))
    .pipe(rev.manifest({
        cwd:'public',
        merge:true
    })).pipe(gulp.dest('./public/assets'))
})