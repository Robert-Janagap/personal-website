var gulp       = require('gulp');

/*gulp packages*/

/** local server */
var connect    = require('gulp-connect');

/** preprocessor */
var jade       = require('gulp-jade'),
sass           = require('gulp-sass');

/** Framework */
var	compass    = require('gulp-compass');

/** utilities */
var changed    = require('gulp-changed'),
autoprefix     = require('gulp-autoprefixer'),
watch          = require('gulp-watch'),
rename         = require('gulp-rename');

/** Compiler */
var minifyHTML = require('gulp-minify-html'),
minifyCSS      = require('gulp-minify-css');

/*
GULP TASK
 */

/** local server */
gulp.task('server', function(){
	connect.server({
		livereload: true
	})
});

/** Preprocessor */
//jade
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

/*Framework*/
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

/** watch task*/
gulp.task('watch', function(){
	gulp.watch('src/jade/**/*.jade',['jade'])
	gulp.watch('src/scss/**/*.scss',['compass'])
});

/** livereload */
gulp.task('livereload', function(){
	watch(['./build/index.html', './build/assets/css/main.css'])
		.pipe(connect.reload());
});

/** Compiler */
gulp.task('minifyHTML', function(){
	gulp.src('./build/index.html')
		.pipe(minifyHTML())
		.pipe(rename('index.min.html'))
		.pipe(gulp.dest('./build/'))
});
gulp.task('minifyCSS', function(){
	gulp.src('./build/assets/css/main.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('./build/assets/css/'))
});

/** gulp default run */
gulp.task('default',['server', 'watch', 'livereload']);