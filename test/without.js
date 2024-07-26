'use strict'

/* eslint-env mocha */

const assert = require('assert')
const without = require('../src/without')

describe('without', () => {
  it('should return the same array if no values are provided', () => {
    const result = without([1, 2, 3])
    assert.deepStrictEqual(result, [1, 2, 3])
  })

  it('should return the original array if no values are provided', () => {
    const result = without([1, 2, 3], 4, 5, 6)
    assert.deepStrictEqual(result, [1, 2, 3])
  })

  it('should return an array without the provided values', () => {
    const result = without([1, 2, 3], 2, 3)
    assert.deepStrictEqual(result, [1])
  })

  it('should work with complex values', () => {
    const result = without([{ a: 1 }, { b: 2 }, { c: 3 }], { a: 1 }, { c: 3 })
    assert.deepStrictEqual(result, [{ b: 2 }])
  })

  it('should return an empty array if the first argument is not an array', () => {
    const result = without('string', 1, 2, 3)
    assert.deepStrictEqual(result, [])
  })
})
