'use strict'

/* eslint-env mocha */

const assert = require('assert')
const find = require('../src/find')

describe('find', () => {
  it('should find first element matching predicate', () => {
    const result = find([1, 2, 3, 4], (n) => n > 2)
    assert.strictEqual(result, 3)
  })

  it('should return undefined if no match', () => {
    const result = find([1, 2, 3], (n) => n > 5)
    assert.strictEqual(result, undefined)
  })

  it('should handle empty array', () => {
    const result = find([], () => true)
    assert.strictEqual(result, undefined)
  })

  it('should handle null', () => {
    const result = find(null, () => true)
    assert.strictEqual(result, undefined)
  })

  it('should handle undefined', () => {
    const result = find(undefined, () => true)
    assert.strictEqual(result, undefined)
  })
})
