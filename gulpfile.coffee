'use strict'

# -- Dependencies --------------------------------------------------------------

gulp   = require 'gulp'
header = require 'gulp-header'
uglify = require 'gulp-uglify'
concat = require 'gulp-concat'
pkg    = require './package.json'

# -- Files ---------------------------------------------------------------------

src =
  js: './index.js'

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

gulp.task 'js', ->
  gulp.src src.js
  .pipe concat '' + dist.name + '.js'
  .pipe uglify()
  .pipe header banner, pkg: pkg
  .pipe gulp.dest dist.folder
  return

gulp.task 'build', ['js']
gulp.task 'default', -> gulp.start ['build']
