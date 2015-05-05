var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var csslint = require('gulp-csslint');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
gulp.task("compile:css",function(){
	return gulp.src(["./src/scss/*.scss"])
	.pipe(sass())
	.pipe(csslint())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
		}))
	.pipe(connect.reload())
	.pipe(csslint.reporter())
	.pipe(gulp.dest("./src/css"));



});

gulp.task("connect",function(){
	connect.server({
		root:"src",
		livereload:true
		});
	});
gulp.task('html', function () {
  gulp.src('./src/index.html')
    .pipe(connect.reload());
});
gulp.task("watch",["compile:css"],function () {
	gulp.watch(["./src/scss/*.scss"],["compile:css"]);
	gulp.watch(["./src/index.html"],["html"]);
}
);
gulp.task("start",["connect","watch"]);








