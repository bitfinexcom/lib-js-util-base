'use strict'

/* eslint-env mocha */

const assert = require('assert')
const endsWith = require('../src/endsWith')

describe('endsWith', () => {
  it('should return true if string ends with suffix', () => {
    assert.strictEqual(endsWith('hello', 'lo'), true)
  })

  it('should return false if string does not end with suffix', () => {
    assert.strictEqual(endsWith('hello', 'el'), false)
  })

  it('should handle empty string', () => {
    assert.strictEqual(endsWith('', ''), true)
  })

  it('should handle non-string input', () => {
    assert.strictEqual(endsWith(123, '3'), true)
  })

  it('should respect position argument', () => {
    assert.strictEqual(endsWith('abcde', 'c', 3), true)
    assert.strictEqual(endsWith('abcde', 'de', 4), false)
  })
})
