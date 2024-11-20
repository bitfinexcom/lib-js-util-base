'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { isUndefined } = require('../index')

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    assert.ok(isUndefined(undefined))
  })

  it('should return true for no param', () => {
    assert.ok(isUndefined())
  })
})
