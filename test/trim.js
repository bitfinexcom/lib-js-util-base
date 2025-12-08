'use strict'

/* eslint-env mocha */

const assert = require('assert')
const trim = require('../src/trim')

describe('trim', () => {
  it('should trim whitespace from string', () => {
    assert.strictEqual(trim('  hello  '), 'hello')
  })

  it('should handle empty string', () => {
    assert.strictEqual(trim(''), '')
  })

  it('should handle string with no whitespace', () => {
    assert.strictEqual(trim('hello'), 'hello')
  })

  it('should handle non-string input', () => {
    assert.strictEqual(trim(123), '123')
  })
})
