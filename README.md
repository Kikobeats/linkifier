# html-linkify

<p align="center">
  <br>
  <img src="demo.gif" alt="html-linkify">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/html-linkify.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/html-linkify/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/html-linkify)
[![Dependency status](https://img.shields.io/david/Kikobeats/html-linkify.svg?style=flat-square)](https://david-dm.org/Kikobeats/html-linkify)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/html-linkify.svg?style=flat-square)](https://david-dm.org/Kikobeats/html-linkify#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/html-linkify.svg?style=flat-square)](https://www.npmjs.org/package/html-linkify)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> It converts HTML tags (like h1, h2, h3, h4, h5 & h6) into links.

## Install

```bash
$ npm install html-linkify --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install html-linkify --save
```

and later link in your HTML:

```html
<script src="bower_components/html-linkify/dist/html-linkify.js"></script>
```

## Usage

**Note:** You need to use a DOM Selector.

API and default values are:

```js
var linkify = require('html-linkify')
$('h2').linkify() // provide selector to create link wrapper
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
