'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isNil } = require('../index')

describe('isNil', () => {
  it('should return true for null', () => {
    assert.strictEqual(isNil(null), true)
  })

  it('should return true for undefined', () => {
    assert.strictEqual(isNil(undefined), true)
  })

  it('should return false for a number', () => {
    assert.strictEqual(isNil(42), false)
  })

  it('should return false for a string', () => {
    assert.strictEqual(isNil('test'), false)
  })

  it('should return false for an empty object', () => {
    assert.strictEqual(isNil({}), false)
  })

  it('should return false for an empty array', () => {
    assert.strictEqual(isNil([]), false)
  })

  it('should return false for a boolean value', () => {
    assert.strictEqual(isNil(true), false)
    assert.strictEqual(isNil(false), false)
  })

  it('should return false for a function', () => {
    assert.strictEqual(isNil(() => { }), false)
  })

  it('should return false for a symbol', () => {
    assert.strictEqual(isNil(Symbol('test')), false)
  })
})
