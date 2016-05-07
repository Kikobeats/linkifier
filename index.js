/* global $ */

;(function ($) {
  'use strict'

  function dashify (str) {
    return str
      .replace(/[ \t]/g, '-')
      .replace(/[^-a-zA-Z0-9]/g, '')
      .toLowerCase()
  }

  $.fn.linkify = function () {
    this.each(function () {
      var el = $(this)
      var text = el.text()
      var dashText = dashify(text)
      el.html('')
      el.attr('id', dashText)
      el.addClass('deep-link')
      el.append('<a href=#' + dashText + '>' + text + '</a>')
    })
  }
})(window.jQuery || window.Zepto)
