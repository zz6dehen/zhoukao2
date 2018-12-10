var gulp =require('gulp');
var server=require('gulp-webserver');
gulp.task('server',function(){
	gulp.src('./src/周考2')
	.pipe(server({
		port:8000
	}))
})
