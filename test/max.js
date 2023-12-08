'use strict'

/* eslint-env mocha */

const assert = require('assert')
const max = require('../src/max')

describe('max', () => {
  it('should return the largest value from a collection', () => {
    const actual = max([4, null, 2, 8, 6])

    assert.strictEqual(actual, 8)
  })

  it('should return `undefined` without arguments', () => {
    const actual = max()

    assert.strictEqual(actual, undefined)
  })

  it('should return `undefined` for empty collections', () => {
    const sources = [null, undefined, false, 0, NaN, '', Symbol('a'), []]

    for (const source of sources) {
      const actual = max(source)

      assert.strictEqual(actual, undefined)
    }
  })
})
