'use strict'

# -- Dependencies --------------------------------------------------------------

gulp        = require 'gulp'
header      = require 'gulp-header'
uglify      = require 'gulp-uglify'
concat      = require 'gulp-concat'
browserify  = require 'browserify'
gutil       = require 'gulp-util'
pkg         = require './package.json'
source      = require 'vinyl-source-buffer'
browserSync = require 'browser-sync'
collapse    = require 'bundle-collapser/plugin'
reload      = browserSync.reload

PORT =
  BROWSERSYNC: 3000

# -- Files ---------------------------------------------------------------------

src =
  vanilla : './src/linkifier.js'
  jquery  : './src/linkifier.jquery.js'

dist =
  name     : pkg.name
  folder   : 'dist'

banner = [
           "/**"
           " * <%= pkg.name %> - <%= pkg.description %>"
           " * @version v<%= pkg.version %>"
           " * @link    <%= pkg.homepage %>"
           " * @license <%= pkg.license %>"
           " */"].join("\n")

# -- Tasks ---------------------------------------------------------------------

gulp.task 'vanilla', ->
  browserify(src.vanilla, {standalone: 'linkifier'})
    .plugin(collapse)
    .bundle()
  .pipe source 'linkifier.js'
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe gulp.dest dist.folder

gulp.task 'jquery', ->
  browserify(src.jquery)
    .plugin(collapse)
    .bundle()
  .pipe source 'linkifier.jquery.js'
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe gulp.dest dist.folder

gulp.task 'server', ->
  browserSync.init
    server: baseDir: './'
    open: false

gulp.task 'build', ['vanilla', 'jquery']

gulp.task 'default', ->
  gulp.start ['build', 'server']
  gulp.watch './src/**', ['build', reload]
