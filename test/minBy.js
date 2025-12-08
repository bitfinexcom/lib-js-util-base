'use strict'

/* eslint-env mocha */

const assert = require('assert')
const minBy = require('../src/minBy')

describe('minBy', () => {
  it('should return item with minimum value by iteratee function', () => {
    const collection = [{ n: 1 }, { n: 2 }, { n: 0 }]
    const result = minBy(collection, (item) => item.n)
    assert.strictEqual(result.n, 0)
  })

  it('should return item with minimum value by path string', () => {
    const collection = [{ n: 1 }, { n: 2 }, { n: 0 }]
    const result = minBy(collection, 'n')
    assert.strictEqual(result.n, 0)
  })

  it('should return undefined for empty collection', () => {
    const result = minBy([], 'n')
    assert.strictEqual(result, undefined)
  })

  it('should return first item when all values are equal', () => {
    const collection = [{ n: 1 }, { n: 1 }, { n: 1 }]
    const result = minBy(collection, 'n')
    assert.strictEqual(result.n, 1)
  })
})
