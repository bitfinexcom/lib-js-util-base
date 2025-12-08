'use strict'

/* eslint-env mocha */

const assert = require('assert')
const keys = require('../src/keys')

describe('keys', () => {
  it('should return keys of object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = keys(obj)
    assert.deepStrictEqual(result.sort(), ['a', 'b', 'c'])
  })

  it('should return empty array for null', () => {
    const result = keys(null)
    assert.deepStrictEqual(result, [])
  })

  it('should return empty array for undefined', () => {
    const result = keys(undefined)
    assert.deepStrictEqual(result, [])
  })

  it('should return empty array for empty object', () => {
    const result = keys({})
    assert.deepStrictEqual(result, [])
  })
})
