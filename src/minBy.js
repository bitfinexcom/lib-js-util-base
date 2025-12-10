'use strict'

const getterFor = require('./util/getterFor')

/**
 * Gets the minimum value from a collection by iteratee
 * @param {Array} collection
 * @param {Function | string} iteratee
 * @returns {any}
 */
const minBy = (collection = [], iteratee) => {
  const getValue = getterFor(iteratee)
  let minItem, minValue

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    const value = getValue(item)

    if (minItem === undefined || value < minValue) {
      minItem = item
      minValue = value
    }
  }

  return minItem
}

module.exports = minBy
