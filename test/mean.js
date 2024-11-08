'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { mean } = require('../index')

describe('mean', () => {
  it('should return the mean of an array of numbers', () => {
    assert.strictEqual(mean([2, 3, 4]), 3)
    assert.strictEqual(mean([2, 3, 4, 5]), 3.5)
  })

  it('should return NaN when the array is empty', () => {
    assert(isNaN(mean([])))
  })

  it('should return NaN when the array is null or undefined', () => {
    assert(isNaN(mean(null)))
    assert(isNaN(mean(undefined)))
  })
})
