'use strict'

/* eslint-env mocha */

const assert = require('assert')
const startsWith = require('../src/startsWith')

describe('startsWith', () => {
  it('should return true if string starts with prefix', () => {
    assert.strictEqual(startsWith('hello', 'he'), true)
  })

  it('should return false if string does not start with prefix', () => {
    assert.strictEqual(startsWith('hello', 'lo'), false)
  })

  it('should handle empty string', () => {
    assert.strictEqual(startsWith('', ''), true)
  })

  it('should handle non-string input', () => {
    assert.strictEqual(startsWith(123, '1'), true)
  })
})
