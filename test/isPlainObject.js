'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isPlainObject } = require('../index')

describe('isPlainObject', () => {
  it('should return true for a plain object', () => {
    assert.strictEqual(isPlainObject({}), true)
    assert.strictEqual(isPlainObject({ key: 'value' }), true)
  })

  it('should return false for an array', () => {
    assert.strictEqual(isPlainObject([]), false)
  })

  it('should return false for a function', () => {
    assert.strictEqual(isPlainObject(() => { }), false)
  })

  it('should return false for a number', () => {
    assert.strictEqual(isPlainObject(42), false)
  })

  it('should return false for a string', () => {
    assert.strictEqual(isPlainObject('test'), false)
  })

  it('should return false for null', () => {
    assert.strictEqual(isPlainObject(null), false)
  })

  it('should return false for undefined', () => {
    assert.strictEqual(isPlainObject(undefined), false)
  })

  it('should return false for a boolean value', () => {
    assert.strictEqual(isPlainObject(true), false)
    assert.strictEqual(isPlainObject(false), false)
  })

  it('should return false for a symbol', () => {
    assert.strictEqual(isPlainObject(Symbol('test')), false)
  })
})
