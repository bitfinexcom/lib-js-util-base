'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { update } = require('../index')

describe('update', () => {
  it('should update the object with the updater', () => {
    const object = { a: 1, b: 2, c: { d: 3, e: { f: '5' } } }
    update(object, 'a', (n) => n + 1)
    assert.deepStrictEqual(object, { a: 2, b: 2, c: { d: 3, e: { f: '5' } } })
    update(object, 'b', (n) => n * 2)
    assert.deepStrictEqual(object, { a: 2, b: 4, c: { d: 3, e: { f: '5' } } })
    update(object, 'c.d', (n) => n - 1)
    assert.deepStrictEqual(object, { a: 2, b: 4, c: { d: 2, e: { f: '5' } } })
    update(object, 'c.e.f', (n) => Number(n))
    assert.deepStrictEqual(object, { a: 2, b: 4, c: { d: 2, e: { f: 5 } } })
  })

  it('should handle edge cases', () => {
    const object = { a: 1, b: 2, c: { d: 3, e: { f: '5' } } }
    update(object)
    assert.deepStrictEqual(object, { a: 1, b: 2, c: { d: 3, e: { f: '5' } } })
    update(object, 'a')
    update()
    assert.deepStrictEqual(object, { a: 1, b: 2, c: { d: 3, e: { f: '5' } } })
  })

  it('should handle the case when the object has no property', () => {
    const object = {}
    update(object, 'a.b.c', () => 7)
    assert.deepStrictEqual(object, { a: { b: { c: 7 } } })
  })
})
