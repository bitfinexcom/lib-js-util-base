'use strict'

/* eslint-env mocha */

const assert = require('assert')
const isEqual = require('../src/isEqual')

describe('isEqual', () => {
  it('should return true for equal primitives', () => {
    assert.ok(isEqual(5, 5))
    assert.ok(isEqual('foo', 'foo'))
    assert.ok(isEqual(true, true))
    assert.ok(isEqual(null, null))
  })

  it('should return false for not equal values with the same type', () => {
    assert.ok(!isEqual(5, 6))
    assert.ok(!isEqual('foo', 'bar'))
    assert.ok(!isEqual(true, false))
  })

  it('should return true for the same oject reference', () => {
    const objToCompare = { foo: 'bar' }

    assert.ok(isEqual(objToCompare, objToCompare))
  })

  it('should return true for the equal objects', () => {
    const objToCompare = { foo: 'bar', baz: [1, 2, 3], qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 1 }] } }
    const otherObj = { foo: 'bar', baz: [1, 2, 3], qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 1 }] } }

    assert.ok(isEqual(objToCompare, otherObj))
  })

  it('should return false if objects are different', () => {
    const objToCompare = { foo: 'bar', baz: [1, 2, 3], qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 1 }] } }
    const otherObj = { foo: 'bar', baz: [1, 2, 3], qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 2 }] } }

    assert.ok(!isEqual(objToCompare, otherObj))
  })

  it('should return false if objects has different number of properties', () => {
    const objToCompare = { foo: 'bar', baz: [1, 2, 3], qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 1 }] } }
    const otherObj = { foo: 'bar', qux: { quux: 1, corge: 'grault', garply: ['waldo', 'fred', { plugh: 'xyzzy', thud: 1 }] } }

    assert.ok(!isEqual(objToCompare, otherObj))
  })

  it('should return true for equal flat arrays', () => {
    const arr1 = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz']
    const arr2 = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz']

    assert.ok(isEqual(arr1, arr2))
  })

  it('should return false for different arrays', () => {
    const arr1 = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz']
    const arr2 = ['foo', 'bar', 'baz', 'qux', 'quun', 'quuz']

    assert.ok(!isEqual(arr1, arr2))
  })

  it('should return false for arrays with different number of items', () => {
    const arr1 = ['foo', 'bar', 'baz', 'qux', 'quux', 'quuz']
    const arr2 = ['foo', 'bar', 'baz', 'qux', 'quun']

    assert.ok(!isEqual(arr1, arr2))
  })

  it('should return true for complexly arrays', () => {
    const arr1 = ['foo', ['bar'], ['baz', 'qux'], { quux: 1, quuz: [1, 'a', true] }]
    const arr2 = ['foo', ['bar'], ['baz', 'qux'], { quux: 1, quuz: [1, 'a', true] }]

    assert.ok(isEqual(arr1, arr2))
  })
})
