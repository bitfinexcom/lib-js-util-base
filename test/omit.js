'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { omit } = require('../index')

describe('omit', () => {
  it('should return an empty object when input is null', () => {
    assert.deepStrictEqual(omit(null, ['key']), {})
  })

  it('should return the same object when keys array is empty', () => {
    assert.deepStrictEqual(omit({ a: 1, b: 2 }, []), { a: 1, b: 2 })
  })

  it('should return a new object with the omitted properties', () => {
    assert.deepStrictEqual(omit({ a: 1, b: 2, c: 3 }, ['a', 'c']), { b: 2 })
  })

  it('should ignore properties that are not in the keys array', () => {
    assert.deepStrictEqual(omit({ a: 1, b: 2, c: 3 }, ['a', 'd', 'e']), { b: 2, c: 3 })
  })

  it('should return an empty object for an empty input object', () => {
    assert.deepStrictEqual(omit({}, ['a', 'b']), {})
  })

  it('should handle keys that are not strings', () => {
    assert.deepStrictEqual(omit({ 1: 'one', 2: 'two' }, ['1']), { 2: 'two' })
  })
  
  it('should allow single strings as key ', () => {
    assert.deepStrictEqual(omit({ a: 1, b: 2, c: 3 }, 'a'), { b: 2, c: 3 })
  })
})
