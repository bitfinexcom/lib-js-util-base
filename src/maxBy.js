'use strict'

const getterFor = require('./util/getterFor')

/**
 * Gets the maximum value from a collection by iteratee
 * @param {Array} collection
 * @param {Function | string} iteratee
 * @returns {any}
 */
const maxBy = (collection = [], iteratee) => {
  const getValue = getterFor(iteratee)

  let maxItem, maxValue

  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    const value = getValue(item)

    if (maxItem === undefined || value > maxValue) {
      maxItem = item
      maxValue = value
    }
  }

  return maxItem
}

module.exports = maxBy
