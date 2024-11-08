'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { clone } = require('../index')

describe('clone', () => {
  it('should return a shallow copy of the object', () => {
    const object = { a: 1, b: 2, c: { d: 3, e: { f: '5' } } }
    const cloned = clone(object)
    assert.deepStrictEqual(cloned, object)
    assert.notStrictEqual(cloned, object)
    assert.strictEqual(cloned.c, object.c)
    assert.strictEqual(cloned.c.e, object.c.e)
  })

  it('should handle edge cases', () => {
    assert.deepStrictEqual(clone(), {})
    assert.deepStrictEqual(clone(null), {})
    assert.deepStrictEqual(clone(undefined), {})
    assert.deepStrictEqual(clone(1), 1)
    assert.deepStrictEqual(clone('a'), 'a')
    assert.deepStrictEqual(clone(true), true)
    assert.deepStrictEqual(clone(false), false)
  })
})
