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

  it('should pick properties by few path parameters', () => {
    assert.deepStrictEqual(pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'b'], 'd'), { a: 1, b: 2, d: 4 })
  })

  it('should pick nested properties by string or array path', () => {
    const src = { a: 1, b: { c: { d: 5, g: 2, h: 7 }, f: 6 }, e: 4 }
    const expected = { a: 1, b: { c: { d: 5, h: 7 } } }

    assert.deepStrictEqual(pick(src, ['a', 'b.c.d', 'b.c.h'], 'd'), expected)
    assert.deepStrictEqual(pick(src, ['a', ['b', 'c', 'd'], ['b', 'c', 'h']], 'd'), expected)
  })

  it('should return empty object if path is not specified', () => {
    const src = { a: 1, b: { c: { d: 5, g: 2, h: 7 }, f: 6 }, e: 4 }
    assert.deepStrictEqual(pick(src, ''), {})
  })
})
