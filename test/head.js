'use strict'

/* eslint-env mocha */

const assert = require('assert')
const head = require('../src/head')

describe('head', () => {
  it('should return the head from a collection', () => {
    const actual = head([4, null, 2, 8, 6])

    assert.strictEqual(actual, 4)
  })

  it('should return `undefined` without arguments', () => {
    const actual = head()

    assert.strictEqual(actual, undefined)
  })

  it('should return `undefined` for empty collections', () => {
    const sources = [null, undefined, false, 0, NaN, '', Symbol('a'), []]

    for (const source of sources) {
      const actual = head(source)

      assert.strictEqual(actual, undefined)
    }
  })
})
