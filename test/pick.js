'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { pick } = require('../index')

describe('pick', () => {
  it('should return an empty object when input is null', () => {
    assert.deepStrictEqual(pick(null, ['key']), {})
  })

  it('should return an empty object when keys array is empty', () => {
    assert.deepStrictEqual(pick({ a: 1, b: 2 }, []), {})
  })

  it('should return a new object with the picked properties', () => {
    assert.deepStrictEqual(pick({ a: 1, b: 2, c: 3 }, ['a', 'c']), { a: 1, c: 3 })
  })

  it('should ignore properties that are not in the keys array', () => {
    assert.deepStrictEqual(pick({ a: 1, b: 2, c: 3 }, ['d', 'e']), {})
  })

  it('should return an empty object for an empty input object', () => {
    assert.deepStrictEqual(pick({}, ['a', 'b']), {})
  })

  it('should handle keys that are not strings', () => {
    assert.deepStrictEqual(pick({ 1: 'one', 2: 'two' }, ['1', '2']), { 1: 'one', 2: 'two' })
  })
  
  it('should allow single strings as key ', () => {
    assert.deepStrictEqual(pick({ a: 1, b: 2, c: 3 }, 'a'), { a: 1 })
  })
})
