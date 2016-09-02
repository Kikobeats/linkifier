var addClass = require('dom101/add-class')
var DEFAULTS = require('./defaults')
var getText = require('dom101/text')
var dashify = require('./dashify')
var each = require('dom101/each')

function linkifier (elements, opts) {
  opts = Object.assign(DEFAULTS, opts)

  each(elements, function (el) {
    var text = getText(el)
    var dashText = dashify(text)

    el.innerHTML = ''
    el.setAttribute('id', dashText)
    el.setAttribute('id', dashText)
    addClass(el, opts.class)

    var child = document.createElement('a')
    child.innerHTML = text
    child.setAttribute('href', '#' + dashText)
    el.appendChild(child)
  })
}

module.exports = linkifier
