'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isString } = require('../index')

describe('isString', () => {
  it('should return true for a string', () => {
    assert.ok(isString('text'))
  })

  it('should return true for a constructed string ', () => {
    assert.ok(isString(new String('text')))
  })

  it('should return true for an empty string', () => {
    assert.ok(isString(''))
  })

  it('should return false for any other primitive', () => {
    assert.ok(!isString(45))
    assert.ok(!isString([1, 2, 3]))
    assert.ok(!isString(['1', '2', '3']))
    assert.ok(!isString({ key: 'value' }))
    assert.ok(!isString(true))
    assert.ok(!isString(null))
    assert.ok(!isString(undefined))
  })
})
