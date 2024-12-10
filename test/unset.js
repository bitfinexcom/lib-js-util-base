'use strict'

/* eslint-env mocha */

const assert = require('assert')
const unset = require('../src/unset')
const { itEach } = require('mocha-it-each')

describe('unset', () => {
  itEach('should be able to unset an object an any arbitrary depth returning true on success',
    [
      [{ a: 'foo' }, 'a', {}],
      [{ b:  null }, 'b', {}],
      [{ d:  0 }, 'd', {}],
      [{ a: 'bar', b: { a: 'foo' } }, 'b.a', { a: 'bar' }],
      [{ a: 'bar', b: { a: 'foo', c: 'baz' } }, 'b.a', { a: 'bar', b: { c: 'baz' } }],
      [{ a: 'baz', b: { a: { c: 'baz' } } }, 'b.a.c', { a: 'baz' }],
      [{ a: 'baz', b: { a: { c: 'baz', d: 'koo' } } }, 'b.a.c', { a: 'baz', b: { a: { d: 'koo' } } }],
      [{ a: 'baz', b: { a: { c: 'baz', d: 'koo' } } }, 'b.a.d', { a: 'baz', b: { a: { c: 'baz' } } }],
      [{ a: 'baz', b: { a: { c: 'baz', d: 'koo' } } }, 'a', { b: { a: { c: 'baz', d: 'koo' } } }]
    ],
    async ([obj, path, expected]) => {
      const found = unset(obj, path)
      assert.deepStrictEqual(obj, expected)
      assert.strictEqual(found, true)
    })

  itEach('should return true even when target was not found ',
    [
      [{}, 'b'],
      [{}, 'b.f'],
      [{ a: 'foo' }, 'b'],
      [{ a: 'bar', b: { a: 'foo' } }, 'b.c'],
      [{ a: 'bar', b: { a: 'foo', c: 'baz' } }, 'b.d'],
      [{ a: 'baz', b: { a: { c: 'baz' } } }, 'b.a.k'],
      [{ a: 'baz', b: { a: { c: 'baz', d: 'koo' } } }, 'b.f.d']
    ],
    async ([obj, path]) => {
      assert.strictEqual(unset(obj, path), true)
    })

  itEach('should return false when target was found but could not be removed',
    [
      [Object.freeze({ a: 'foo' }), 'a'],
      [{ a: 'bar', b: Object.freeze({ a: 'foo' }) }, 'b.a'],
      [{ a: 'bar', b: Object.freeze({ a: 'foo', c: 'baz' }) }, 'b.c'],
      [{ a: 'baz', b: { a: Object.freeze({ c: 'baz' }) } }, 'b.a.c'],
      [Object.freeze({ a: 'baz', b: { a: { c: 'baz', d: 'koo' } } }), 'a']
    ],
    async ([obj, path]) => {
      assert.strictEqual(unset(obj, path), false)
    })
})
