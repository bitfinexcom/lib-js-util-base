'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { snakeCase } = require('../index')

describe('snakeCase', () => {
  it('should convert strings to snakeCase', () => {
    assert.strictEqual(snakeCase('hello_world'), 'hello_world')
    assert.strictEqual(snakeCase('Hello-world'), 'hello-world')
    assert.strictEqual(snakeCase('hello world'), 'hello_world')
  })

  it('should handle single words', () => {
    assert.strictEqual(snakeCase('hello'), 'hello')
    assert.strictEqual(snakeCase('Hello'), 'hello')
  })

  it('should handle empty strings', () => {
    assert.strictEqual(snakeCase(''), '')
  })

  it('should handle strings with numbers', () => {
    assert.strictEqual(snakeCase('hello1 World2'), 'hello1_world2')
  })
})
