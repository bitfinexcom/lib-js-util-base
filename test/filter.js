'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { filter } = require('../index')

const paolo = { user: 'paolo', age: 36, active: true }
const vladimir = { user: 'vladimir', age: 40, active: false }

const users = [paolo, vladimir]

describe('filter', () => {
  it('should return an empty array when input is null', () => {
    assert.deepStrictEqual(filter(null, null), [])
  })

  it('should return an array that matches function predicate', () => {
    const predicate = (o) => !o.active
    assert.deepStrictEqual(filter(users, predicate), [vladimir])
    assert.deepStrictEqual(filter(Object.assign({}, users), predicate), [vladimir])
  })

  it('should return an array that matches object predicate', () => {
    const predicate = { age: 36, active: true }
    assert.deepStrictEqual(filter(users, predicate), [paolo])
    assert.deepStrictEqual(filter(Object.assign({}, users), predicate), [paolo])
  })

  it('should return an array that matches array predicate', () => {
    const predicate = ['active', false]
    assert.deepStrictEqual(filter(users, predicate), [vladimir])
    assert.deepStrictEqual(filter(Object.assign({}, users), predicate), [vladimir])
  })

  it('should return an array that matches string predicate', () => {
    const predicate = 'active'
    assert.deepStrictEqual(filter(users, predicate), [paolo])
    assert.deepStrictEqual(filter(Object.assign({}, users), predicate), [paolo])
  })
})
