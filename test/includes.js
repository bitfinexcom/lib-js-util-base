'use strict'

/* eslint-env mocha */

const assert = require('assert')
const includes = require('../src/includes')

describe('includes', () => {
  it('should return true if array includes value', () => {
    assert.strictEqual(includes([1, 2, 3], 2), true)
  })

  it('should return false if array does not include value', () => {
    assert.strictEqual(includes([1, 2, 3], 4), false)
  })

  it('should return true if string includes value', () => {
    assert.strictEqual(includes('hello', 'ell'), true)
  })

  it('should return true if object values include value', () => {
    assert.strictEqual(includes({ a: 1, b: 2 }, 2), true)
  })

  it('should return false for null', () => {
    assert.strictEqual(includes(null, 1), false)
  })

  it('should return false for undefined', () => {
    assert.strictEqual(includes(undefined, 1), false)
  })
})
