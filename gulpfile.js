var gulp       = require('gulp');

/*gulp packages*/
var autoprefix = require('gulp-autoprefixer'),
concat         = require('gulp-concat'),
changed        = require('gulp-changed'),
connect        = require('gulp-connect'),
compass        = require('gulp-compass'),
jade           = require('gulp-jade'),
jshint         = require('gulp-jshint'),
minifyHTML     = require('gulp-minify-html'),
minifyCSS      = require('gulp-minify-css'),
plumber        = require('gulp-plumber'),
rename         = require('gulp-rename'),
sass           = require('gulp-sass'),
stylish        = require('jshint-stylish'),
watch          = require('gulp-watch'),
uglify         = require('gulp-uglify');

/** gulp task */

/** local server */
gulp.task('server', function(){
	connect.server({
		livereload: true
	})
});
/** Preprocessor */
//jade
gulp.task('jade', function(){
	var src = 'src/jade/**/*.jade',
		dest = 'build/';
	gulp.src(src)
		.pipe(changed(dest))
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(dest));
});
/** sass */ //use compass for mixin and grid
gulp.task('sass', function(){
	var src = 'src/scss/main.scss',
		dest = 'build/assets/css/';
	gulp.src(src)
		.pipe(changed(dest))
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefix())
		.pipe(gulp.dest(dest));
});

/** error linting */
//jshint
gulp.task('jshint', function(){
	var src = 'src/js/*.js';
	gulp.src(src)
		.pipe(changed('build/assets/js/**/*.js'))
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(uglify())
		.pipe(gulp.dest('build/assets/js/'));
});

/** frameworks */
//compass
gulp.task('compass',function(){
	var src='src/scss/*.scss',
		dest = 'build/assets/css/';
	gulp.src(src)
		.pipe(changed(dest))
		.pipe(plumber())
		.pipe(compass({
			config_file: 'config.rb',
			css: 'build/assets/css',
			sass: 'src/scss',
			require: ['susy', 'breakpoint']
		}))
		.pipe(autoprefix())
		.pipe(gulp.dest(dest))
});

/** watch task*/
gulp.task('watch', function(){
	gulp.watch('src/jade/**/*.jade',['jade'])
	gulp.watch('src/scss/**/*.scss',['compass'])
	gulp.watch('src/js/*.js',['jshint'])
});

/** livereload */
gulp.task('livereload', function(){
	watch(['./build/*.html', './build/assets/css/main.css','./build/assets/js/*.js'])
		.pipe(connect.reload());
});

/** Compiler */
gulp.task('compress',function(){
	gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(gulp.dest('build/assets/js/'))
});
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
gulp.task('default',['server', 'watch','livereload']);