'use strict'

/* eslint-env mocha */

const assert = require('assert')
const camelCase = require('../src/camelCase')

describe('camelCase', () => {
  it('should convert string to camelCase', () => {
    assert.strictEqual(camelCase('foo bar'), 'fooBar')
  })

  it('should handle empty string', () => {
    assert.strictEqual(camelCase(''), '')
  })

  it('should handle kebab-case', () => {
    assert.strictEqual(camelCase('foo-bar'), 'fooBar')
  })

  it('should handle snake_case', () => {
    assert.strictEqual(camelCase('foo_bar'), 'fooBar')
  })
})
