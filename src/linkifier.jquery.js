/* global $ */

var dashify = require('./dashify')
var DEFAULTS = require('./defaults')

;(function ($) {
  'use strict'

  function linkifier (opts) {
    opts = $.extend(DEFAULTS, opts)

    this.each(function () {
      var el = $(this)
      var text = el.text()
      var dashText = dashify(text)
      el.html('')
      el.attr('id', dashText)
      el.addClass(opts.class)
      el.append('<a href=#' + dashText + '>' + text + '</a>')
    })
  }

  $.fn.linkifier = linkifier
})($)
