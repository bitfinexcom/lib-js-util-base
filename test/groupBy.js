'use strict'

/* eslint-env mocha */

const assert = require('assert')
const { groupBy } = require('../index')

describe('groupBy', () => {
  it('should group items by string property key', () => {
    const items = [
      { id: 1, category: 'fruit', name: 'apple' },
      { id: 2, category: 'fruit', name: 'banana' },
      { id: 3, category: 'vegetable', name: 'carrot' },
      { id: 4, category: 'fruit', name: 'pear' },
      { id: 5, category: 'vegetable', name: 'lettuce' }
    ]

    const groupedItems = groupBy(items, 'category')

    assert.deepStrictEqual(groupedItems, {
      fruit: [
        { id: 1, category: 'fruit', name: 'apple' },
        { id: 2, category: 'fruit', name: 'banana' },
        { id: 4, category: 'fruit', name: 'pear' }
      ],
      vegetable: [
        { id: 3, category: 'vegetable', name: 'carrot' },
        { id: 5, category: 'vegetable', name: 'lettuce' }
      ]
    })
  })

  it('should group items by number property key', () => {
    const items = [
      { id: 1, age: 25 },
      { id: 2, age: 30 },
      { id: 3, age: 25 },
      { id: 4, age: 40 }
    ]

    const groupedItems = groupBy(items, 'age')

    assert.deepStrictEqual(groupedItems, {
      25: [
        { id: 1, age: 25 },
        { id: 3, age: 25 }
      ],
      30: [{ id: 2, age: 30 }],
      40: [{ id: 4, age: 40 }]
    })
  })

  it('should group items by computed key using a function', () => {
    const items = [
      { id: 1, category: 'fruit', name: 'apple' },
      { id: 2, category: 'fruit', name: 'banana' },
      { id: 3, category: 'vegetable', name: 'carrot' },
      { id: 4, category: 'fruit', name: 'pear' },
      { id: 5, category: 'vegetable', name: 'lettuce' }
    ]

    const groupedItems = groupBy(items, item => item.name.charAt(0))

    assert.deepStrictEqual(groupedItems, {
      a: [{ id: 1, category: 'fruit', name: 'apple' }],
      b: [{ id: 2, category: 'fruit', name: 'banana' }],
      c: [{ id: 3, category: 'vegetable', name: 'carrot' }],
      p: [{ id: 4, category: 'fruit', name: 'pear' }],
      l: [{ id: 5, category: 'vegetable', name: 'lettuce' }]
    })
  })

  it('should group items by function returning a number', () => {
    const items = [
      { id: 1, age: 25 },
      { id: 2, age: 30 },
      { id: 3, age: 25 },
      { id: 4, age: 40 }
    ]

    const groupedItems = groupBy(items, item => Math.floor(item.age / 10))

    console.log('GRE', groupedItems)

    assert.deepStrictEqual(groupedItems, {
      2: [
        { id: 1, age: 25 },
        { id: 3, age: 25 }
      ],
      3: [{ id: 2, age: 30 }],
      4: [{ id: 4, age: 40 }]
    })
  })

  it('should handle empty array', () => {
    const items = []
    const groupedItems = groupBy(items, 'category')

    assert.deepStrictEqual(groupedItems, {})
  })

  it('should handle array with one item', () => {
    const items = [{ id: 1, category: 'fruit', name: 'apple' }]
    const groupedItems = groupBy(items, 'category')

    assert.deepStrictEqual(groupedItems, {
      fruit: [{ id: 1, category: 'fruit', name: 'apple' }]
    })
  })
})
