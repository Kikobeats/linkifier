/**
 * html-linkify - It converts HTML headers (h1, h2, h3, h4, h5 & h6) into links.
 * @version v0.0.0
 * @link    https://github.com/Kikobeats/html-linkify
 * @license MIT
 */require=function r(e,t,n){function o(a,u){if(!t[a]){if(!e[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[a]={exports:{}};e[a][0].call(s.exports,function(r){var t=e[a][1][r];return o(t?t:r)},s,s.exports,r,e,t,n)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({"html-linkify":[function(r,e,t){function n(r){return r.replace(/[ \t]/g,"-").replace(/[^-a-zA-Z0-9]/g,"").toLowerCase()}function o(r){$(r.selector).each(function(){var e=$(this),t=e.text(),o=n(t);e.html(""),e.attr("id",o),e.addClass(r.addClass||"deep-link"),e.append("<a href=#"+o+">"+t+"</a>")})}e.exports=o,e.exports.dashify=n},{}]},{},[]);