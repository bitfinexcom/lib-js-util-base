'use strict'

/* eslint-env mocha */

const assert = require('assert')
const each = require('../src/each')

describe('each', () => {
  it('should iterate over array', () => {
    const arr = [1, 2, 3]
    const result = []
    each(arr, (item) => {
      result.push(item * 2)
    })
    assert.deepStrictEqual(result, [2, 4, 6])
  })

  it('should iterate over object', () => {
    const obj = { a: 1, b: 2 }
    const result = []
    each(obj, (val, key) => {
      result.push(`${key}:${val}`)
    })
    assert.deepStrictEqual(result.sort(), ['a:1', 'b:2'])
  })

  it('should return collection', () => {
    const arr = [1, 2, 3]
    const result = each(arr, () => {})
    assert.strictEqual(result, arr)
  })

  it('should handle null', () => {
    const result = each(null, () => {})
    assert.strictEqual(result, null)
  })

  it('should handle undefined', () => {
    const result = each(undefined, () => {})
    assert.strictEqual(result, undefined)
  })
})
