var gulp = require('gulp');
var less = require('gulp-less');
var olumber = require('gulp-plumber');
var server = require('browser-sync');
/*var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');*/

gulp.task('less', function(){
  return gulp.src('less/style.less')
  /*.pipe(plumber())*/
  .pipe(less())
  /*.pipe(postcss([
    autoprefixer({browsers:[
      'last 1 version',
      'last 2 Chrome versions',
      'last 2 Firefox versions',
      'last 2 Opera versions',
      'last 2 Edge versions'
    ]})
  ]))*/
  .pipe(gulp.dest('css'));
  /*.pipe(server.reload({stream: true}));*/
});

/*gulp.task('serve', ['style'], function() {
  server.init({
    server: '.'
  });

  gulp.watch('less/**//**.less', ['style']);
  gulp.watch('*.html').on('change', server.reload);
});*/
