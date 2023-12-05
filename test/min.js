'use strict'

/* eslint-env mocha */

const assert = require('assert')
const min = require('../src/min')

describe('min', () => {
  it('should return the smallest value from a collection', () => {
    const actual = min([4, 2, 8, 6])

    assert.strictEqual(actual, 2)
  })

  it('should return `undefined` without arguments', () => {
    const actual = min()

    assert.strictEqual(actual, undefined)
  })

  it('should return `undefined` for empty collections', () => {
    const sources = [null, undefined, false, 0, NaN, '', Symbol('a'), []]

    for (const source of sources) {
      const actual = min(source)

      assert.strictEqual(actual, undefined)
    }
  })
})
