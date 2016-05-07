# linkify

<p align="center">
  <br>
  <img src="demo.gif" alt="linkify">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/linkify.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/linkify/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/linkify)
[![Dependency status](https://img.shields.io/david/Kikobeats/linkify.svg?style=flat-square)](https://david-dm.org/Kikobeats/linkify)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/linkify.svg?style=flat-square)](https://david-dm.org/Kikobeats/linkify#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/linkify.svg?style=flat-square)](https://www.npmjs.org/package/linkify)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> It converts HTML tags (like h1, h2, h3, h4, h5 & h6) into links.

## Install

```bash
$ npm install linkify --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install linkify --save
```

and later link in your HTML:

```html
<script src="bower_components/linkify/dist/linkify.js"></script>
```

## Usage

**Note:** You need to use a DOM Selector.

API and default values are:

```js
var linkify = require('linkify')
$('h2').linkify() // provide selector to create link wrapper
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
