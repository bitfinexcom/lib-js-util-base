'use strict'

/* eslint-env mocha */
/* eslint-disable no-new-wrappers */

const assert = require('assert')
const { isFinite } = require('../index')

describe('isFinite', () => {
  it('should return true for a positive number', () => {
    assert.ok(isFinite(42))
  })

  it('should return true for a negative number', () => {
    assert.ok(isFinite(-5))
  })

  it('should return true for zero', () => {
    assert.ok(isFinite(0))
  })

  it('should return true for a constructed number ', () => {
    assert.ok(isFinite(new Number(54)))
  })

  it('should return true for NaN', () => {
    assert.ok(!isFinite(NaN))
  })

  it('should return false for any other primitive', () => {
    assert.ok(!isFinite('hello'))
    assert.ok(!isFinite([1, 2, 3]))
    assert.ok(!isFinite({ key: 'value' }))
    assert.ok(!isFinite(true))
    assert.ok(!isFinite(null))
    assert.ok(!isFinite(undefined))
  })
})
