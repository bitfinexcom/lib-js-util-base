'use strict'

/* eslint-env mocha */

const assert = require('assert')
const reduce = require('../src/reduce')

describe('reduce', () => {
  it('should reduce array', () => {
    const result = reduce([1, 2, 3], (acc, n) => acc + n, 0)
    assert.strictEqual(result, 6)
  })

  it('should reduce object', () => {
    const result = reduce({ a: 1, b: 2 }, (acc, val) => acc + val, 0)
    assert.strictEqual(result, 3)
  })

  it('should return accumulator for null', () => {
    const result = reduce(null, () => {}, 10)
    assert.strictEqual(result, 10)
  })

  it('should handle array with index', () => {
    const result = reduce([1, 2, 3], (acc, val, idx) => acc + idx, 0)
    assert.strictEqual(result, 3)
  })

  it('should handle object with key', () => {
    const result = reduce({ a: 1, b: 2 }, (acc, val, key) => acc + key, '')
    assert.strictEqual(result.length, 2)
  })
})
