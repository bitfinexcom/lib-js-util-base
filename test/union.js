'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { union } = require('../index')

describe('union', () => {
  it('should return the union of the arrays', () => {
    assert.deepStrictEqual(union([2], [1, 2]), [2, 1])
    assert.deepStrictEqual(union([1, 2], [2, 3]), [1, 2, 3])
    assert.deepStrictEqual(union([1, 2], [3, 4]), [1, 2, 3, 4])
    assert.deepStrictEqual(union([1, 2], [3, 4], [5, 6]), [1, 2, 3, 4, 5, 6])
    assert.deepStrictEqual(union([1, 2], [2, 3], [3, 4]), [1, 2, 3, 4])
  })

  it('should return an empty array', () => {
    assert.deepStrictEqual(union(), [])
    assert.deepStrictEqual(union([]), [])
    assert.deepStrictEqual(union([], []), [])
  })

  it('should skip non array arguments', () => {
    assert.deepStrictEqual(union([1, 2], { a: 1 }, [3]), [1, 2, 3])
  })
})
