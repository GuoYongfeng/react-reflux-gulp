var gulp = require('gulp'),
	connect = require('gulp-connect'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	browserSync = require('browser-sync'),
	port = process.env.port || 5000,
	es6transpiler = require('gulp-es6-module-transpiler');

gulp.task('browserify', function(){
	gulp.src(['./app/js/main.js', './app/js/app.js', './app/js/ko.js'])
	// .pipe(es6transpiler({
	// 	formatter: 'commonjs'
	// }))
	.pipe(browserify({
		transform: 'reactify',
	}))
	.pipe(gulp.dest('./dist/js'))
});

gulp.task('live', function(){
	browserSync({
    	files: ['app/**/*.js', '*.html', 'dist/js/', 'app/less/*.less'],
        server: {
            baseDir: "./"
        }
    });
})

gulp.task('less', function () {
    gulp.src('./app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
})

gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe( connect.reload() )
});

gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./app/**/*.html',['html']);
	gulp.watch('./app/**/*.less',['less']);
	gulp.watch('./app/js/**/*.js',['browserify']);
})

gulp.task('default',['browserify']);

gulp.task('serve',['browserify','live','watch']);
