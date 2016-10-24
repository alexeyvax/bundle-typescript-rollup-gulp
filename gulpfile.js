const gulp = require( 'gulp' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    rollup = require( 'gulp-rollup' ),
    rename = require( 'gulp-rename' ),
    ts = require( 'rollup-plugin-typescript' ),
    browserSync = require( 'browser-sync' ).create();

gulp.task( 'rollup', () =>
{
  gulp.src([
    './scripts/index.ts',
  ])
  .pipe( sourcemaps.init() )
  .pipe( rollup({
    plugins: [
      ts()
    ],
    format: 'iife'
  }))
  .pipe( rename( 'index.js' ) )
  .pipe( sourcemaps.write('.') )
  .pipe( gulp.dest( 'dist/' ) )
  .pipe( browserSync.reload({stream:true}) );
})

gulp.task( 'browserSync', () =>
{
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 3001,
    open: true,
    notify: false
  });
});

gulp.task( 'watch', () =>
	{
		gulp.watch( 'scripts/**/*.ts', ['rollup', 'browserSync'] )
	}
);

gulp.task( 'default', ['watch', 'browserSync'] );
