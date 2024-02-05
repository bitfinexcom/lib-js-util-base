'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isNumber } = require('../index')

describe('isNumber', () => {
  it('should return true for a positive number', () => {
    assert.ok(isNumber(42))
  })

  it('should return true for a negative number', () => {
    assert.ok(isNumber(-5))
  })

  it('should return true for zero', () => {
    assert.ok(isNumber(0))
  })

  it('should return true for NaN', () => {
    assert.ok(isNumber(NaN))
  })

  it('should return true for a constructed number ', () => {
    assert.ok(isNumber(new Number(54)))
  })

  it('should return false for any other primitive', () => {
    assert.ok(!isNumber('hello'))
    assert.ok(!isNumber([1, 2, 3]))
    assert.ok(!isNumber({ key: 'value' }))
    assert.ok(!isNumber(true))
    assert.ok(!isNumber(null))
    assert.ok(!isNumber(undefined))
  })
})
