'use strict'

/* eslint-env mocha */

const assert = require('assert')
const chunk = require('../src/chunk')

describe('chunk', () => {
  it('should chunk array into groups', () => {
    const result = chunk([1, 2, 3, 4, 5], 2)
    assert.deepStrictEqual(result, [[1, 2], [3, 4], [5]])
  })

  it('should chunk array into groups if chunk size is string number', () => {
    const result = chunk([1, 2, 3, 4, 5], '2')
    assert.deepStrictEqual(result, [[1, 2], [3, 4], [5]])
  })

  it('should return an empty array if the collection is not an array', () => {
    const result = chunk(null, 2)
    assert.deepStrictEqual(result, [])
  })

  it('should return an empty array if the chunk size is not a number', () => {
    const result = chunk([1, 2, 3], 'test')
    assert.deepStrictEqual(result, [])
  })

  it('should handle empty array', () => {
    const result = chunk([])
    assert.deepStrictEqual(result, [])
  })

  it('should handle chunk size larger than array', () => {
    const result = chunk([1, 2], 5)
    assert.deepStrictEqual(result, [[1, 2]])
  })

  it('should handle zero chunk size', () => {
    const result = chunk([1, 2, 3], 0)
    assert.deepStrictEqual(result, [[1], [2], [3]])
  })

  it('should handle default chunkSize parameter', () => {
    const result = chunk([1, 2, 3])
    assert.deepStrictEqual(result, [[1], [2], [3]])
  })

  it('should handle default collection parameter', () => {
    const result = chunk(undefined, 2)
    assert.deepStrictEqual(result, [])
  })
})
