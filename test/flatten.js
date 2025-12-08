'use strict'

/* eslint-env mocha */

const assert = require('assert')
const flatten = require('../src/flatten')

describe('flatten', () => {
  it('should flatten array one level', () => {
    const result = flatten([1, [2, 3], [4, 5]])
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5])
  })

  it('should handle empty array', () => {
    const result = flatten([])
    assert.deepStrictEqual(result, [])
  })

  it('should handle already flat array', () => {
    const result = flatten([1, 2, 3])
    assert.deepStrictEqual(result, [1, 2, 3])
  })

  it('should handle nested arrays', () => {
    const result = flatten([[1, 2], [3, 4]])
    assert.deepStrictEqual(result, [1, 2, 3, 4])
  })
})
