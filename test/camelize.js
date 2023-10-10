'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { camelize } = require('../index')

describe('camelize', () => {
  it('should convert strings to camelCase', () => {
    assert.strictEqual(camelize('hello_world'), 'helloWorld')
    assert.strictEqual(camelize('Hello-world'), 'helloWorld')
    assert.strictEqual(camelize('hello world'), 'helloWorld')
  })

  it('should handle single words', () => {
    assert.strictEqual(camelize('hello'), 'hello')
    assert.strictEqual(camelize('Hello'), 'hello')
  })

  it('should handle empty strings', () => {
    assert.strictEqual(camelize(''), '')
  })

  it('should handle strings with numbers', () => {
    assert.strictEqual(camelize('hello1_world2'), 'hello1World2')
  })
})
