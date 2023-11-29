'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { freezeDeep } = require('../index')

describe('freezeDeep', () => {
  it('should freeze a simple object', function () {
    const obj = { a: 1 }
    freezeDeep(obj)
    assert.throws(() => { obj.a = 2 }, TypeError)
  })

  it('should deeply freeze an object', function () {
    const obj = { a: { b: { c: 1 } } }
    freezeDeep(obj)
    assert.throws(() => { obj.a.b.c = 2 }, TypeError)
  })

  it('should not affect non-object properties', function () {
    const obj = { a: 1, b: 'test', c: true }
    freezeDeep(obj)
    assert.strictEqual(obj.a, 1)
    assert.strictEqual(obj.b, 'test')
    assert.strictEqual(obj.c, true)
  })

  it('should handle objects that are already frozen', function () {
    const obj = Object.freeze({ a: 1 })
    assert.doesNotThrow(() => freezeDeep(obj))
  })

  it('should handle null and undefined properties without errors', function () {
    const obj = { a: null, b: undefined }
    assert.doesNotThrow(() => freezeDeep(obj))
  })
})
