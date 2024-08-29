'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { snakeCase } = require('../index')

describe('snakeCase', () => {
  it('should work with empty string', () => {
    assert.equal(snakeCase(''), '')
  })

  it('should convert string from camel case to snake case', () => {
    assert.equal(snakeCase('camelCaseString'), 'camel_case_string')
  })

  it('should convert string separated with spaces to snake case', () => {
    assert.equal(snakeCase('camel Case STRING'), 'camel_case_string')
  })

  it('should convert dashes to underscore', () => {
    assert.equal(snakeCase('camel-case-string'), 'camel_case_string')
  })

  it('should do nothing when is already in snake case', () => {
    assert.equal(snakeCase('camel_case_string'), 'camel_case_string')
  })
})
