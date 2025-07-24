'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { chunk } = require('../index')

describe('chunk', () => {
  it('should chunk anArray in smaller arrays', () => {
    assert.deepEqual(chunk([1, 2], 2), [[1, 2]])
    assert.deepEqual(chunk([1, 2], 1), [[1], [2]])
  })

  it('should return empty array for invalid arguments', () => {
    assert.deepEqual(chunk('notAnArray', 1), [])
    assert.deepEqual(chunk([1, 2], 1.1), [])
    assert.deepEqual(chunk([1, 2], 'notANumber'), [])
  })
})
