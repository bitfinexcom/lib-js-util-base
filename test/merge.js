'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { merge } = require('../index')

describe.only('merge', () => {
  it('should merge `source` into `object`', function () {
    const names = {
      characters: [
        { name: 'barney' },
        { name: 'fred' }
      ]
    }

    const ages = {
      characters: [
        { age: 36 },
        { age: 40 }
      ]
    }

    const heights = {
      characters: [
        { height: '5\'4"' },
        { height: '5\'5"' }
      ]
    }

    const expected = {
      characters: [
        { name: 'barney', age: 36, height: '5\'4"' },
        { name: 'fred', age: 40, height: '5\'5"' }
      ]
    }

    assert.deepStrictEqual(merge(names, ages, heights), expected)
  })

  it('should merge sources containing circular references', function () {
    const object = {
      foo: { a: 1 },
      bar: { a: 2 }
    }

    const source = {
      foo: { b: { c: { d: {} } } },
      bar: {}
    }

    source.foo.b.c.d = source
    source.bar.b = source.foo.b

    const actual = merge(object, source)

    assert.strictEqual(actual.bar.b, actual.foo.b)
    assert.strictEqual(actual.foo.b.c.d, actual.foo.b.c.d.foo.b.c.d)
  })

  it('should work with four arguments', function () {
    const expected = { a: 4 }
    const actual = merge({ a: 1 }, { a: 2 }, { a: 3 }, expected)

    assert.deepStrictEqual(actual, expected)
  })

  it('should assign `null` values', function () {
    const actual = merge({ a: 1 }, { a: null })
    assert.strictEqual(actual.a, null)
  })

  it('should not augment source objects', function () {
    const source1 = { a: [{ a: 1 }] }
    const source2 = { a: [{ b: 2 }] }
    const actual = merge({}, source1, source2)

    assert.deepStrictEqual(source1.a, [{ a: 1 }])
    assert.deepStrictEqual(source2.a, [{ b: 2 }])
    assert.deepStrictEqual(actual.a, [{ a: 1, b: 2 }])
  })
})
