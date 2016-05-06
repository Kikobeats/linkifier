/* global describe, it */

'use strict'

var should = require('should')
var dashify = require('..').dashify

describe('util', function () {
  it('dashify', function () {
    dashify('Acho').should.be.equal('acho')
    dashify('First Steps').should.be.equal('first-steps')
    dashify('Acho({Object} [options])').should.be.equal('achoobject-options')
    dashify('{Function} generateMessage').should.be.equal('function-generatemessage')
    dashify('Hello_World').should.be.equal('helloworld')
  })
})
