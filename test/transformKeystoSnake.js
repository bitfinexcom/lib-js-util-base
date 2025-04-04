'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { transformKeysToSnake } = require('../index')
const { itEach } = require('mocha-it-each')

describe('transformKeysToSnake', () => {
  describe('non recursive (default)', () => {
    itEach('should return input when it is not an object', [new Date(), null, false], (input) => {
      assert.equal(transformKeysToSnake(input), input)
    })

    it('should return input with snake case props recursively', () => {
      const input = {
        camelProp: 'true',
        nestedProp: {
          first_name: 'john',
          lastName: 'doe',
          tags: ['keepCamel']
        },
        someObjs: [
          { someProp: 'value' },
          { foo_bar: 'value', foo: 'value' }
        ]
      }
      const output = {
        camel_prop: 'true',
        nested_prop: {
          first_name: 'john',
          lastName: 'doe',
          tags: ['keepCamel']
        },
        some_objs: [
          { someProp: 'value' },
          { foo_bar: 'value', foo: 'value' }
        ]
      }
      assert.deepEqual(transformKeysToSnake(input), output)
    })

    it('should work with array mix of object and nested arrays', () => {
      const input = {
        mixedArray: [123, { someKey: 'value' }, [{ nestedArrayItem: 'test' }]]
      }
      const output = {
        mixed_array: [123, { someKey: 'value' }, [{ nestedArrayItem: 'test' }]]
      }
      assert.deepEqual(transformKeysToSnake(input), output)
    })
  })
  describe('recursive', () => {
    itEach('should return input when it is not an object', [new Date(), null, false], (input) => {
      assert.equal(transformKeysToSnake(input, { recursive: true }), input)
    })

    it('should return input with snake case props recursively', () => {
      const input = {
        camelProp: 'true',
        nestedProp: {
          first_name: 'john',
          lastName: 'doe',
          level2: {
            fooBar: 'x'
          },
          tags: ['keepCamel']
        },
        someObjs: [
          { someProp: 'value' },
          { foo_bar: 'value', foo: 'value' }
        ]
      }
      const output = {
        camel_prop: 'true',
        nested_prop: {
          first_name: 'john',
          last_name: 'doe',
          level2: {
            foo_bar: 'x'
          },
          tags: ['keepCamel']
        },
        some_objs: [
          { some_prop: 'value' },
          { foo_bar: 'value', foo: 'value' }
        ]
      }
      assert.deepEqual(transformKeysToSnake(input, { recursive: true }), output)
    })

    it('should work with array mix of object and nested arrays', () => {
      const input = {
        mixedArray: [123, { someKey: 'value' }, [{ nestedArrayItem: 'test' }]]
      }
      const output = {
        mixed_array: [123, { some_key: 'value' }, [{ nested_array_item: 'test' }]]
      }
      assert.deepEqual(transformKeysToSnake(input, { recursive: true }), output)
    })
  })
})
