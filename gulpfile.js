/*
gulp plugins
 */
var gulp    = require('gulp');
/** local server */
var connect = require('gulp-connect');
/** compiler */
var jade    = require('gulp-jade'),
	sass    = require('gulp-sass');
/** Framework */
var	compass = require('gulp-compass');
/** utilities */
var changed = require('gulp-changed'),
	autoprefix = require('gulp-autoprefixer'),
	watch = require('gulp-watch');
/*
gulp task runner
 */

/** local server */
gulp.task('server', function(){
	connect.server({
		livereload: true
	})
});

/*
Compiler
 */
/** jade */
gulp.task('jade', function(){
	var src = './src/jade/**/*.jade';
	gulp.src(src)
		.pipe(changed(src))
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./build/'));
});
/** sass */ //use compass for mixin and grid
gulp.task('sass', function(){
	var src = './src/scss/main.scss';
	gulp.src(src)
		.pipe(changed(src))
		.pipe(sass())
		.pipe(autoprefix())
		.pipe(gulp.dest('./build/assets/css/'));
});
//////
/*
Framework
 */
gulp.task('compass',function(){
	var src='./src/scss/*.scss';
	gulp.src(src)
	  .pipe(changed(src))
	  .pipe(compass({
	  	config_file: './config.rb',
	  	css: 'build/assets/css',
	  	sass: 'src/scss',
	  	require: ['susy', 'breakpoint']
	  }))
	  .pipe(autoprefix())
	  .pipe(gulp.dest('./build/assets/css/'))
});
/////
/** watch task*/
gulp.task('watch', function(){
	gulp.watch('src/jade/*.jade',['jade'])
	gulp.watch('src/scss/**/*.scss',['compass'])
});

gulp.task('livereload', function(){
	watch(['./build/index.html', './build/assets/css/main.css'])
		.pipe(connect.reload());
});
/** gulp default run */
gulp.task('default',['server', 'watch', 'livereload']);