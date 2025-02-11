'use strict'

/* eslint-env mocha */
/* eslint-disable no-template-curly-in-string */

const assert = require('assert')
const { pullAll } = require('../')
const { itEach } = require('mocha-it-each')

describe('pullAll', () => {
  const validInput = ['a', 'b', 'c', 1, '1']
  itEach('should ${value[0]}', [
    ['be case sensitive', validInput, ['1'], ['a', 'b', 'c', 1]],
    ['be case sensitive with multiple values', validInput, ['1', 1], ['a', 'b', 'c']],
    ['return null when input is null', null, ['1'], null],
    ['return undefined when input is undefined', undefined, ['1', 1, 'a', 'b'], undefined],
    ['return input when input is not array', 123, ['1', 1, 'a', 'b'], 123],
    ['return input with null filter', validInput, null, validInput],
    ['return input with undefined filter', validInput, undefined, validInput]
  ], ([_desc, input, filter, expectedOutput]) => {
    assert.deepStrictEqual(pullAll(input, filter), expectedOutput)
  })
})
