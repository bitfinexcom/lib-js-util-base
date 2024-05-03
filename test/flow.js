'use strict'

/* eslint-env mocha */

const assert = require('assert')
const flow = require('../src/flow')

describe('flow', () => {
  it('should return the input argument if no functions are provided', () => {
    const result = flow()('input')
    assert.strictEqual(result, 'input')
  })

  it('should apply the provided functions in sequence', () => {
    const addOne = (num) => num + 1
    const double = (num) => num * 2
    const subtractFive = (num) => num - 5

    const result = flow([addOne, double, subtractFive])(10)
    assert.strictEqual(result, 11)
  })

  it('should throw an error if any element in the array is not a function', () => {
    const fn1 = () => { }
    const fn2 = 123
    const fn3 = () => { }

    assert.throws(() => flow([fn1, fn2, fn3]), Error)
  })
})
