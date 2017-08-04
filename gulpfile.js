var gulp = require('gulp'),
	sass = require('gulp-sass');
	gulp.task('sass',function(){
		gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
	});
	gulp.watch('scss/*.scss',['sass']);
	gulp.task('default',['sass']);