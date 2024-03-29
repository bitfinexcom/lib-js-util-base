'use strict'

/* eslint-env mocha */
/* eslint-disable no-new-wrappers */

const assert = require('assert')
const { isString } = require('../index')

describe('isString', () => {
  it('should return TRUE for a string', () => {
    assert.ok(isString('text'))
  })

  it('should return TRUE for an empty string', () => {
    assert.ok(isString(''))
  })

  it('should return FALSE for a constructed string ', () => {
    assert.ok(!isString(new String('text')))
  })

  it('should return FALSE for any other primitive', () => {
    assert.ok(!isString(45))
    assert.ok(!isString([1, 2, 3]))
    assert.ok(!isString(['1', '2', '3']))
    assert.ok(!isString({ key: 'value' }))
    assert.ok(!isString(true))
    assert.ok(!isString(null))
    assert.ok(!isString(undefined))
  })
})
