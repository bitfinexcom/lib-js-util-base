'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { sum } = require('../index')

describe('sum', () => {
  it('should return a sum of array items', () => {
    assert.strictEqual(sum([1, 2, 3]), 6)
  })

  it('should return 0 if argument is not array', () => {
    assert.strictEqual(sum({}), 0)
    assert.strictEqual(sum(null), 0)
    assert.strictEqual(sum(), 0)
    assert.strictEqual(sum('foo'), 0)
  })
})
