'use strict'

/* eslint-env mocha */
/* eslint-disable no-template-curly-in-string */
const assert = require('assert')
const { findKey } = require('../index')
const { itEach } = require('mocha-it-each')

describe('findKey', () => {
  const users = {
    barney: { age: 36, active: true, address: { street: '5th Avenue', city: 'New York' } },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  }

  it('should return the key matching the predicate object', () => {
    assert.deepStrictEqual(findKey(users, { address: { street: '5th Avenue' } }), 'barney')
  })

  it('should return the key index when an array is given', () => {
    const indexOfBarney = '0'
    assert.deepStrictEqual(findKey(Object.values(users), { address: { street: '5th Avenue' } }), indexOfBarney)
  })

  it('should not return the key when the predicate object contains more properties than the input', () => {
    assert.deepStrictEqual(findKey(users, { address: { ...users.barney.address, country: 'USA' } }), undefined)
  })

  it('should return the key matching the predicate function', () => {
    assert.deepStrictEqual(findKey(users, (user) => user.age === 40), 'fred')
  })

  it('should not return the key with partial matching', () => {
    assert.deepStrictEqual(findKey(users, { address: { street: '5th Avenue', city: 'Madrid' } }), undefined)
  })

  itEach('should return undefined when ${value[0]}', [
    ['object is null', null, { foo: 'bar' }],
    ['predicate is null', { foo: 'bar' }, null],
    ['object and predicate arenull', null, null]
  ], ([_desc, obj, predicate]) => {
    assert.deepStrictEqual(findKey(obj, predicate), undefined)
  })
})
