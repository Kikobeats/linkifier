/**
 * linkifier - It converts HTML headers (h1, h2, h3, h4, h5 & h6) into links.
 * @version v1.0.1
 * @link    https://github.com/Kikobeats/linkifier
 * @license MIT
 */var dashify=require("./dashify"),DEFAULTS=require("./defaults");!function(i){"use strict";function a(a){a=i.extend(DEFAULTS,a),this.each(function(){var t=i(this),e=t.text(),s=dashify(e);t.html(""),t.attr("id",s),t.addClass(a.class),t.append("<a href=#"+s+">"+e+"</a>")})}i.fn.linkifier=a}($);