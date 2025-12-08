'use strict'

/* eslint-env mocha */

const assert = require('assert')
const slice = require('../src/slice')

describe('slice', () => {
  it('should slice array', () => {
    const arr = [1, 2, 3, 4, 5]
    const result = slice(arr, 1, 3)
    assert.deepStrictEqual(result, [2, 3])
  })

  it('should slice string', () => {
    const str = 'hello'
    const result = slice(str, 1, 3)
    assert.deepStrictEqual(result, ['e', 'l'])
  })

  it('should handle no arguments', () => {
    const arr = [1, 2, 3]
    const result = slice(arr)
    assert.deepStrictEqual(result, [1, 2, 3])
  })
})
