'use strict'

/* eslint-env mocha */

const assert = require('assert')
const flatMap = require('../src/flatMap')

describe('flatMap', () => {
  it('should map and flatten array', () => {
    const result = flatMap([1, 2, 3], (n) => [n, n * 2])
    assert.deepStrictEqual(result, [1, 2, 2, 4, 3, 6])
  })

  it('should handle empty array', () => {
    const result = flatMap([], (n) => [n])
    assert.deepStrictEqual(result, [])
  })

  it('should handle function that returns single values', () => {
    const result = flatMap([1, 2, 3], (n) => n * 2)
    assert.deepStrictEqual(result, [2, 4, 6])
  })
})
