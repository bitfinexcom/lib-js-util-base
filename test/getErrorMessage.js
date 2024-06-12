'use strict'

/* eslint-env mocha */

const assert = require('assert')
const getErrorMessage = require('../src/getErrorMessage')

describe('getErrorMessage', () => {
  it('should return the error message when it exists', () => {
    const error = new Error('Something went wrong')
    const errorMessage = getErrorMessage(error)
    assert.strictEqual(errorMessage, 'Something went wrong')
  })

  it('should return an empty string when the error message is not provided', () => {
    const error = new Error()
    const errorMessage = getErrorMessage(error)
    assert.strictEqual(errorMessage, '')
  })

  it('should return the base error code when it exists', () => {
    const error = new Error('foo bar ERR_INVALID_INPUT')
    const errorMessage = getErrorMessage(error)
    assert.strictEqual(errorMessage, 'ERR_INVALID_INPUT')
  })

  it('should return the full error message when it does not match the base error code pattern', () => {
    const error = new Error('Some other error')
    const errorMessage = getErrorMessage(error)
    assert.strictEqual(errorMessage, 'Some other error')
  })
})
