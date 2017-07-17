# linkifier

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/linkifier.svg)](https://greenkeeper.io/)

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

## Usage

### Vanilla

```js
linkifier(document.getElementsByTagName('h2'))
```

### jQuery

```js
$('h2').linkifier()
```

## API

### linkifier(<elements>, [opts])

#### element

*Required*<br>
Type: `object`

Collection of Node Elements to wrap into links.

#### opts

##### class

Type: `string`<br>
Default: `'deep-link'`

A class to attach with the link wrapper.

## License

MIT © [Kiko Beats](http://kikobeats.com)
