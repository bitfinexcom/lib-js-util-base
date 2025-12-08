'use strict'

/* eslint-env mocha */

const assert = require('assert')
const filter = require('../src/filter')

describe('filter', () => {
  it('should filter array elements', () => {
    const result = filter([1, 2, 3, 4], (n) => n % 2 === 0)
    assert.deepStrictEqual(result, [2, 4])
  })

  it('should handle empty array', () => {
    const result = filter([], (n) => n > 0)
    assert.deepStrictEqual(result, [])
  })

  it('should handle null', () => {
    const result = filter(null, () => true)
    assert.deepStrictEqual(result, [])
  })

  it('should handle undefined', () => {
    const result = filter(undefined, () => true)
    assert.deepStrictEqual(result, [])
  })
})
