'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { sumBy } = require('../index')

describe('sumBy', () => {
  it('should return a sum by iteratee function', () => {
    assert.strictEqual(sumBy([{ foo: 1 }, { foo: 2 }, { foo: 3 }], (i) => i.foo), 6)
  })

  it('should return a sum by iteratee shortcut', () => {
    assert.strictEqual(sumBy([{ foo: { bar: 4 } }, { foo: { bar: 5 } }, { foo: { bar: 6 } }], 'foo.bar'), 15)
  })

  it('should return 0 if iteratee argument is not a function or a string', () => {
    assert.strictEqual(sumBy([{ foo: 1 }, { foo: 2 }, { foo: 3 }], {}), 0)
    assert.strictEqual(sumBy([{ foo: 1 }, { foo: 2 }, { foo: 3 }], null), 0)
  })
})
