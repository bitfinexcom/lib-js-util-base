'use strict'

/* eslint-env mocha */

const assert = require('assert')
const map = require('../src/map')

describe('map', () => {
  it('should map array elements', () => {
    const result = map([1, 2, 3], (n) => n * 2)
    assert.deepStrictEqual(result, [2, 4, 6])
  })

  it('should handle empty array', () => {
    const result = map([], (n) => n * 2)
    assert.deepStrictEqual(result, [])
  })

  it('should handle null', () => {
    const result = map(null, (n) => n * 2)
    assert.deepStrictEqual(result, [])
  })

  it('should handle undefined', () => {
    const result = map(undefined, (n) => n * 2)
    assert.deepStrictEqual(result, [])
  })
})
