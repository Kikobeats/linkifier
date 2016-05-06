/* global $ */

function dashify (str) {
  return str
    .replace(/[ \t]/g, '-')
    .replace(/[^-a-zA-Z0-9]/g, '')
    .toLowerCase()
}

function linkify (opts) {
  $(opts.selector).each(function () {
    var el = $(this)
    var text = el.text()
    var dashText = dashify(text)

    el.html('')
    el.attr('id', dashText)
    el.addClass(opts.addClass || 'deep-link')
    el.append('<a href=#' + dashText + '>' + text + '</a>')
  })
}

module.exports = linkify
module.exports.dashify = dashify
