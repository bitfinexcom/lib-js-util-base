'use strict'

/* eslint-env mocha */

const assert = require('assert')
const upperFirst = require('../src/upperFirst')

describe('upperFirst', () => {
  it('should capitalize first character', () => {
    assert.strictEqual(upperFirst('foo'), 'Foo')
  })

  it('should keep the string as is if already capitalized', () => {
    assert.strictEqual(upperFirst('FRED'), 'FRED')
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

  it('should handle array input', () => {
    assert.strictEqual(upperFirst([]), '')
  })

  it('should handle boolean input', () => {
    assert.strictEqual(upperFirst(true), 'True')
    assert.strictEqual(upperFirst(false), 'False')
  })

  it('should handle object input', () => {
    assert.strictEqual(upperFirst({}), '[object Object]')
  })

  it('should handle Set input', () => {
    assert.strictEqual(upperFirst(new Set()), '[object Set]')
  })

  it('should handle Symbol input', () => {
    assert.strictEqual(upperFirst(Symbol('abc')), 'Symbol(abc)')
  })
})
