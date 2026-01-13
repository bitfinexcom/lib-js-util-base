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
})
