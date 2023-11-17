'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { cloneDeep } = require('../index')

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
      assert.deepStrictEqual(obj, clone)
    }
  })
})
