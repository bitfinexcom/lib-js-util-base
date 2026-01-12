'use strict'

/* eslint-env mocha */

const assert = require('assert')
const upperFirst = require('../src/upperFirst')

describe('upperFirst', () => {
  it('should capitalize first character', () => {
    assert.strictEqual(upperFirst('foo'), 'Foo')
  })

  it('should handle empty string', () => {
    assert.strictEqual(upperFirst(''), '')
  })

  it('should handle already capitalized string', () => {
    assert.strictEqual(upperFirst('Foo'), 'Foo')
  })

  it('should handle single character', () => {
    assert.strictEqual(upperFirst('f'), 'F')
  })

  it('should handle number input', () => {
    assert.strictEqual(upperFirst(123), '123')
  })

  it('should handle object input', () => {
    assert.strictEqual(upperFirst({}), '')
  })

  it('should handle array input', () => {
    assert.strictEqual(upperFirst([]), '')
  })
})
