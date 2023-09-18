'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { omitBy } = require('../index')

describe('omitBy', () => {
  it('should return an empty object when input is null', () => {
    assert.deepStrictEqual(omitBy(null, val => val > 1), {})
  })

  it('should return a new object with the properties that satisfy the predicate function', () => {
    assert.deepStrictEqual(omitBy({ a: 1, b: 2, c: 3 }, val => val > 1), { a: 1 })
  })

  it('should return the same object when no properties satisfy the predicate function', () => {
    assert.deepStrictEqual(omitBy({ a: 1, b: 2, c: 3 }, val => val > 3), { a: 1, b: 2, c: 3 })
  })

  it('should return an empty object for an empty input object', () => {
    assert.deepStrictEqual(omitBy({}, val => val > 1), {})
  })

  it('should consider both value and key in the predicate function', () => {
    assert.deepStrictEqual(omitBy({ a: 1, b: 2, c: 3 }, (val, key) => key === 'b' || val > 2), { a: 1 })
  })

  it('predicate could be simple constructor as well', () => {
    assert.deepStrictEqual(omitBy({ a: 1, b: 0, c: 3, d: null, e: false, f: true }, Boolean), { b: 0, d: null, e: false })
  })
})
