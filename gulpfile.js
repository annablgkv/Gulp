var gulp = require('gulp'),
		browserSync  = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		server: {baseDir: './dev'},
		notify: false
	});
});

gulp.task('default',['browser-sync'], function(){
	gulp.watch('./dev/css/*.css', browserSync.reload);
	gulp.watch('./dev/*.html', browserSync.reload);
	gulp.watch('./dev/js/**/*.js', browserSync.reload);
});