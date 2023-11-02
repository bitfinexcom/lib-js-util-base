'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isObject } = require('../index')

describe('isObject', () => {
  it('should return true for plain object', () => {
    const object = { a: 'foo' }
    assert.ok(isObject(object))
  })

  it('should return true for array', () => {
    const object = []
    assert.ok(isObject(object))
  })

  it('should return true for result of any constructor', () => {
    assert.ok(isObject(new Set()))
    assert.ok(isObject(new Promise(() => {})))
    assert.ok(isObject(new Map()))
    assert.ok(isObject(new RegExp()))
  })

  it('should return false for null and primitives', () => {
    assert.ok(!isObject(null))
    assert.ok(!isObject('foo'))
    assert.ok(!isObject(123456))
    assert.ok(!isObject(true))
    assert.ok(!isObject(undefined))
  })
})
