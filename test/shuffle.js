'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { shuffle } = require('../index')

describe('shuffle', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  it('should return a new array', () => {
    assert.ok(shuffle(array).some((x, i) => array[i] !== x))
  })

  it('should contain the same elements after a collection is shuffled', () => {
    assert.deepStrictEqual(shuffle(array).sort((a, b) => a - b), array)
  })
})
