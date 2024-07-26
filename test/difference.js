'use strict'

/* eslint-env mocha */

const assert = require('assert')
const difference = require('../src/difference')

describe('difference', () => {
  it('should return the same array if values is not an array', () => {
    const result = difference([1, 2, 3], ['string'])
    assert.deepStrictEqual(result, [1, 2, 3])
  })

  it('should return the original array if values is an empty array', () => {
    const result = difference([1, 2, 3], [])
    assert.deepStrictEqual(result, [1, 2, 3])
  })

  it('should return an array of elements that are not in values', () => {
    const result = difference([1, 2, 3], [2, 3, 4])
    assert.deepStrictEqual(result, [1])
  })

  it('should work with complex values', () => {
    const result = difference([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { c: 3 }])
    assert.deepStrictEqual(result, [{ b: 2 }])
  })
})
