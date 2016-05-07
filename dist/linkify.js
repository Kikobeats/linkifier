/**
 * linkify - It converts HTML headers (h1, h2, h3, h4, h5 & h6) into links.
 * @version v1.0.0
 * @link    https://github.com/Kikobeats/linkify
 * @license MIT
 */!function(t){"use strict";function e(t){return t.replace(/[ \t]/g,"-").replace(/[^-a-zA-Z0-9]/g,"").toLowerCase()}t.fn.linkify=function(){this.each(function(){var n=t(this),a=n.text(),i=e(a);n.html(""),n.attr("id",i),n.addClass("deep-link"),n.append("<a href=#"+i+">"+a+"</a>")})}}($);