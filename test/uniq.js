'use strict'

/* eslint-env mocha */

const uniq = require('../src/uniq.js')
const assert = require('assert')

describe('uniq', () => {
  it('should return an array with unique elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 6, 6, 6, 3, 2, 4, 1, 2]
    const result = uniq(arr)
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5, 6])
  })

  it('should return an empty array for an empty input array', () => {
    const arr = []
    const result = uniq(arr)
    assert.deepStrictEqual(result, [])
  })

  it('should return the same array when all elements are unique', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = uniq(arr)
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5])
  })
})
