'use strict'

/* eslint-env mocha */

const assert = require('assert')
const maxBy = require('../src/maxBy')

describe('maxBy', () => {
  it('should return item with maximum value by iteratee function', () => {
    const collection = [{ n: 1 }, { n: 2 }, { n: 3 }]
    const result = maxBy(collection, (item) => item.n)
    assert.strictEqual(result.n, 3)
  })

  it('should return item with maximum value by path string', () => {
    const collection = [{ n: 1 }, { n: 2 }, { n: 3 }]
    const result = maxBy(collection, 'n')
    assert.strictEqual(result.n, 3)
  })

  it('should return undefined for empty collection', () => {
    const result = maxBy([], 'n')
    assert.strictEqual(result, undefined)
  })

  it('should return first item when all values are equal', () => {
    const collection = [{ n: 1 }, { n: 1 }, { n: 1 }]
    const result = maxBy(collection, 'n')
    assert.strictEqual(result.n, 1)
  })
})
