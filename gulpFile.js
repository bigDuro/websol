var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');


// Task to build component's css. 
gulp.task('sass:components', function() {
	var components = ['grid'];

	components.forEach(function(component){
		gulp.task('sass:' + component, function () {
		 return gulp.src('./' + component + '/sass/**/*.scss')
		  .pipe(sourcemaps.init())
		  .pipe(sass().on('error', sass.logError))
		  .pipe(sourcemaps.write('/maps/'))
		  .pipe(gulp.dest('./' + component + '/css/' ));
		});

		gulp.start('sass:' + component);

		gulp.task('sass:watch-' + component, function () {
		  gulp.watch('./' + component + '/sass/**/*.scss', ['sass:' + component]);
		});

		gulp.start('sass:watch-' + component);
		
	})
  console.log('default:');
});