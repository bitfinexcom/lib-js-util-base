'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { capitalize } = require('../index')

describe('capitalize', () => {
  it('should capitalize strings', () => {
    assert.strictEqual(capitalize('foo'), 'Foo')
    assert.strictEqual(capitalize('foo bAr baZ'), 'Foo bar baz')
    assert.strictEqual(capitalize('FOo BAr BAz'), 'Foo bar baz')
  })

  it('should return empty string for non string argument', () => {
    assert.strictEqual(capitalize({}), '')
    assert.strictEqual(capitalize([]), '')
    assert.strictEqual(capitalize(null), '')
    assert.strictEqual(capitalize(123), '')
    assert.strictEqual(capitalize(NaN), '')
    assert.strictEqual(capitalize(undefined), '')
    assert.strictEqual(capitalize(false), '')
    assert.strictEqual(capitalize(new Map()), '')
  })
})
