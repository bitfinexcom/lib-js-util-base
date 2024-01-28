'use strict'

/* eslint-env mocha */

const { ok } = require('assert')
const { isArray } = require('../index')

describe('isArray', () => {
  it('should return `true` for array', () => {
    ok(isArray([]))
    ok(isArray([1, 2, 3]))
  })

  it('should return `false` for non-arrays', () => {
    ok(!isArray(true))
    ok(!isArray(new Date()))
    ok(!isArray(new Error()))
    ok(!isArray({ 0: 1, length: 1 }))
    ok(!isArray(1))
    ok(!isArray(/x/))
    ok(!isArray('a'))
  })
})
