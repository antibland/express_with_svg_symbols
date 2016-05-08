var gulp       = require('gulp');
var svgSymbols = require('gulp-svg-symbols');

gulp.task('sprites', function () {
  return gulp.src('public/svg/*.svg')
    .pipe(svgSymbols())
    .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
  gulp.watch('public/svg/*.svg', ['sprites']);
});