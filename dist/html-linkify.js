/**
 * html-linkify - It converts HTML headers (h1, h2, h3, h4, h5 & h6) into links.
 * @version v0.0.0
 * @link    https://github.com/Kikobeats/html-linkify
 * @license MIT
 */!function(e){function a(e){return e.replace(/[ \t]/g,"-").replace(/[^-a-zA-Z0-9]/g,"").toLowerCase()}e.linkify=function(t){e(t.selector).each(function(){var n=e(this),i=n.text(),r=a(i);n.html(""),n.attr("id",r),n.addClass(t.addClass||"deep-link"),n.append("<a href=#"+r+">"+i+"</a>")})}}($);