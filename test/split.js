'use strict'

/* eslint-env mocha */

const assert = require('assert')
const split = require('../src/split')

describe('split', () => {
  it('should split string by separator', () => {
    const result = split('a,b,c', ',')
    assert.deepStrictEqual(result, ['a', 'b', 'c'])
  })

  it('should handle limit', () => {
    const result = split('a,b,c', ',', 2)
    assert.deepStrictEqual(result, ['a', 'b'])
  })

  it('should handle empty string', () => {
    const result = split('', ',')
    assert.deepStrictEqual(result, [''])
  })

  it('should handle non-string input', () => {
    const result = split(123, '')
    assert.deepStrictEqual(result, ['1', '2', '3'])
  })
})
