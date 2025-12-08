'use strict'

/* eslint-env mocha */

const assert = require('assert')
const set = require('../src/set')

describe('set', () => {
  it('should set value at path', () => {
    const obj = {}
    const result = set(obj, 'a', 'foo')
    assert.strictEqual(result.a, 'foo')
    assert.strictEqual(result, obj)
  })

  it('should set nested value', () => {
    const obj = {}
    set(obj, 'a.b.c', 'foo')
    assert.strictEqual(obj.a.b.c, 'foo')
  })

  it('should set value with array path', () => {
    const obj = {}
    set(obj, ['a', 'b'], 'foo')
    assert.strictEqual(obj.a.b, 'foo')
  })

  it('should set value with bracket notation', () => {
    const obj = {}
    set(obj, 'a[b]', 'foo')
    assert.strictEqual(obj.a.b, 'foo')
  })

  it('should create intermediate objects', () => {
    const obj = {}
    set(obj, 'a.b.c', 'foo')
    assert.strictEqual(typeof obj.a, 'object')
    assert.strictEqual(typeof obj.a.b, 'object')
    assert.strictEqual(obj.a.b.c, 'foo')
  })
})
