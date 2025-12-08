'use strict'

/* eslint-env mocha */

const assert = require('assert')
const every = require('../src/every')

describe('every', () => {
  it('should return true if all elements pass predicate', () => {
    const result = every([2, 4, 6], (n) => n % 2 === 0)
    assert.strictEqual(result, true)
  })

  it('should return false if any element fails predicate', () => {
    const result = every([2, 4, 5], (n) => n % 2 === 0)
    assert.strictEqual(result, false)
  })

  it('should return false for non-array', () => {
    const result = every(null, () => true)
    assert.strictEqual(result, false)
  })

  it('should return true for empty array', () => {
    const result = every([], () => false)
    assert.strictEqual(result, true)
  })
})
