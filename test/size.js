'use strict'

/* eslint-env mocha */

const assert = require('assert')
const size = require('../src/size')

describe('size', () => {
  it('should return length of array', () => {
    assert.strictEqual(size([1, 2, 3]), 3)
  })

  it('should return length of string', () => {
    assert.strictEqual(size('hello'), 5)
  })

  it('should return number of keys in object', () => {
    assert.strictEqual(size({ a: 1, b: 2, c: 3 }), 3)
  })

  it('should return 0 for empty array', () => {
    assert.strictEqual(size([]), 0)
  })

  it('should return 0 for empty object', () => {
    assert.strictEqual(size({}), 0)
  })

  it('should return 0 for null', () => {
    assert.strictEqual(size(null), 0)
  })
})
