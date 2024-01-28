'use strict'

/* eslint-env mocha */

const assert = require('assert')
const last = require('../src/last')

describe('last', () => {
  it('should return the last from a collection', () => {
    const actual = last([4, null, 2, 8, 6])

    assert.strictEqual(actual, 6)
  })

  it('should return `undefined` without arguments', () => {
    const actual = last()

    assert.strictEqual(actual, undefined)
  })

  it('should return `undefined` for empty collections', () => {
    const sources = [null, undefined, false, 0, NaN, '', Symbol('a'), []]

    for (const source of sources) {
      const actual = last(source)

      assert.strictEqual(actual, undefined)
    }
  })
})
