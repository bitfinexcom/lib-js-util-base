'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { getArrayUniq } = require('../index')

describe('getArrayUniq', () => {
  it('should return an array with unique elements', () => {
    const arr = [1, 2, 3, 4, 4, 3, 2, 1]
    const expected = [1, 2, 3, 4]
    assert.deepStrictEqual(getArrayUniq(arr), expected)
  })

  it('should return an empty array for an empty input array', () => {
    const arr = []
    const expected = []
    assert.deepStrictEqual(getArrayUniq(arr), expected)
  })

  it('should return the same array when all elements are unique', () => {
    const arr = [1, 2, 3, 4]
    const expected = [1, 2, 3, 4]
    assert.deepStrictEqual(getArrayUniq(arr), expected)
  })

  it('should handle arrays with elements of different types', () => {
    const arr = [1, '1', 2, '2', 1]
    const expected = [1, '1', 2, '2']
    assert.deepStrictEqual(getArrayUniq(arr), expected)
  })
})
