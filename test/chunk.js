'use strict'

/* eslint-env mocha */

const assert = require('assert')
const chunk = require('../src/chunk')

describe('chunk', () => {
  it('should chunk array into groups', () => {
    const result = chunk([1, 2, 3, 4, 5], 2)
    assert.deepStrictEqual(result, [[1, 2], [3, 4], [5]])
  })

  it('should handle default chunk size', () => {
    const result = chunk([1, 2, 3])
    assert.deepStrictEqual(result, [[1], [2], [3]])
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
})
