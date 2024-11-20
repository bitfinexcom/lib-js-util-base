'use strict'

/* eslint-env mocha */
const assert = require('assert')
const isUndefined = require('../src/isUndefined')

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    assert.ok(isUndefined(undefined))
  })

  it('should return true for no param', () => {
    assert.ok(isUndefined())
  })

  it('should return false for empty object', () => {
    assert.equal(isUndefined({}), false)
  })

  it('should return false for empty array', () => {
    assert.equal(isUndefined([]), false)
  })

  it('should return false for null', () => {
    assert.equal(isUndefined(null), false)
  })

  it('should return false for false', () => {
    assert.equal(isUndefined(false), false)
  })

  it('should return false for empty string', () => {
    assert.equal(isUndefined(''), false)
  })

  it('should return false for zero', () => {
    assert.equal(isUndefined(0), false)
  })
})
