'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { cloneDeep, isPlainObject } = require('../index')

describe('cloneDeep', () => {
  it('should deep clone objects', () => {
    const obj = { foo: 1, bar: { baz: 'a' } }
    const clone = cloneDeep(obj)
    assert.deepStrictEqual(obj, clone)
    assert.notStrictEqual(obj, clone)
  })

  it('should deep clone arrays', () => {
    const obj = [1, [2, 3]]
    const clone = cloneDeep(obj)
    assert.deepStrictEqual(obj, clone)
    assert.notStrictEqual(obj, clone)
  })

  it('should not throw an error when cloning non-objects', () => {
    const sources = [undefined, Symbol('a'), () => {}]

    for (const obj of sources) {
      const clone = cloneDeep(obj)

      if (obj instanceof Function) {
        assert.strictEqual(isPlainObject(clone), true)

        return
      }

      assert.deepStrictEqual(obj, clone)
    }
  })

  it('should deep clone objects with regular expressions', () => {
    const obj = { foo: /a/ }
    const clone = cloneDeep(obj)
    assert.deepEqual(obj.foo, clone.foo)
    assert.notStrictEqual(obj.foo, clone.foo)
  })

  it('should deep clone objects with dates', () => {
    const obj = { foo: new Date() }
    const clone = cloneDeep(obj)
    assert.deepEqual(obj.foo, clone.foo)
    assert.notStrictEqual(obj.foo, clone.foo)
  })

  it('should deep clone objects with maps', () => {
    const obj = { foo: new Map() }
    const clone = cloneDeep(obj)
    assert.deepEqual(obj.foo, clone.foo)
    assert.notStrictEqual(obj.foo, clone.foo)
  })

  it('should deep clone objects with sets', () => {
    const obj = { foo: new Set() }
    const clone = cloneDeep(obj)
    assert.deepEqual(obj.foo, clone.foo)
    assert.notStrictEqual(obj.foo, clone.foo)
  })

  it('should deep clone objects with circular references', () => {
    const obj = { foo: { bar: { baz: { } } } }
    obj.foo.bar.baz.qux = obj
    const clone = cloneDeep(obj)
    assert.deepEqual(obj.foo.bar.baz.qux, clone.foo.bar.baz.qux)
    assert.notStrictEqual(obj.foo.bar.baz.qux, clone.foo.bar.baz.qux)
  })
})
