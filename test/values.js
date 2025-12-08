'use strict'

/* eslint-env mocha */

const assert = require('assert')
const values = require('../src/values')

describe('values', () => {
  it('should return values of object', () => {
    const obj = { a: 1, b: 2, c: 3 }
    const result = values(obj)
    assert.deepStrictEqual(result.sort(), [1, 2, 3])
  })

  it('should return empty array for null', () => {
    const result = values(null)
    assert.deepStrictEqual(result, [])
  })

  it('should return empty array for undefined', () => {
    const result = values(undefined)
    assert.deepStrictEqual(result, [])
  })

  it('should return empty array for empty object', () => {
    const result = values({})
    assert.deepStrictEqual(result, [])
  })
})
