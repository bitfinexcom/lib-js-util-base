'use strict'

/* eslint-env mocha */

const assert = require('assert')
const isBoolean = require('../src/isBoolean')

describe('isBoolean', () => {
  it('should return true for true', () => {
    assert.strictEqual(isBoolean(true), true)
  })

  it('should return true for false', () => {
    assert.strictEqual(isBoolean(false), true)
  })

  it('should return false for string', () => {
    assert.strictEqual(isBoolean('true'), false)
  })

  it('should return false for number', () => {
    assert.strictEqual(isBoolean(1), false)
  })

  it('should return false for null', () => {
    assert.strictEqual(isBoolean(null), false)
  })

  it('should return false for undefined', () => {
    assert.strictEqual(isBoolean(undefined), false)
  })
})
