'use strict'

/* eslint-env mocha */

const assert = require('assert')
const toPath = require('../src/util/toPath')

describe('toPath', () => {
  it('should convert array path', () => {
    const actual = toPath(['a', 0, 'b', null])
    assert.deepStrictEqual(actual, ['a', '0', 'b', 'null'])
  })

  it('should parse bracket notation with quoted keys containing dots', () => {
    const actual = toPath('a[["x.y"]]')
    assert.deepStrictEqual(actual, ['a', 'x.y'])
  })

  it('should handle simple dot paths', () => {
    const actual = toPath('a.b.c')
    assert.deepStrictEqual(actual, ['a', 'b', 'c'])
  })

  it('should handle "a[0].b.c"', () => {
    const actual = toPath('a[0].b.c')
    assert.deepStrictEqual(actual, ['a', '0', 'b', 'c'])
  })

  it('should handle path starting with dot', () => {
    const actual = toPath('.a.b')
    assert.deepStrictEqual(actual, ['', 'a', 'b'])
  })

  it('should handle negative number in brackets', () => {
    const actual = toPath('a[-1]')
    assert.deepStrictEqual(actual, ['a', '-1'])
  })

  it('should handle decimal number in brackets', () => {
    const actual = toPath('a[1.5]')
    assert.deepStrictEqual(actual, ['a', '1.5'])
  })

  it('should handle escaped characters in quoted strings', () => {
    const actual = toPath("a['x\\.y']")
    assert.deepStrictEqual(actual, ['a', 'x.y'])
  })

  it('should handle double quotes in path', () => {
    const actual = toPath('a["x.y"]')
    assert.deepStrictEqual(actual, ['a', 'x.y'])
  })

  it('should handle empty string path', () => {
    const actual = toPath('')
    assert.deepStrictEqual(actual, [])
  })

  it('should handle path with empty brackets', () => {
    const actual = toPath('a[]')
    assert.deepStrictEqual(actual, ['a', ''])
  })

  it('should handle complex nested path', () => {
    const actual = toPath("a[0]['b.c'].d")
    assert.deepStrictEqual(actual, ['a', '0', 'b.c', 'd'])
  })

  it('should handle path with escaped backslash in quoted string', () => {
    const actual = toPath("a['x\\\\y']")
    assert.deepStrictEqual(actual, ['a', 'x\\y'])
  })
})
