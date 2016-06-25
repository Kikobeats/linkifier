# linkifier

<p align="center">
  <br>
  <img src="demo.gif" alt="linkifier">
  <br>
</p>

![Last version](https://img.shields.io/github/tag/Kikobeats/linkifier.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/linkifier/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/linkifier)
[![Dependency status](https://img.shields.io/david/Kikobeats/linkifier.svg?style=flat-square)](https://david-dm.org/Kikobeats/linkifier)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/linkifier.svg?style=flat-square)](https://david-dm.org/Kikobeats/linkifier#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/linkifier.svg?style=flat-square)](https://www.npmjs.org/package/linkifier)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> It converts HTML tags (like h1, h2, h3, h4, h5 & h6) into links.

## Install

```bash
$ npm install linkifier --save
```

If you want to use in the browser (powered by [Browserify](http://browserify.org/)):

```bash
$ bower install linkifier --save
```

and later link in your HTML:

```html
<script src="bower_components/linkifier/dist/linkifier.js"></script>
```

## Usage

**Note:** You need to use a DOM Selector.

API and default values are:

```js
var linkifier = require('linkifier')
$('h2').linkifier() // provide selector to create link wrapper
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
