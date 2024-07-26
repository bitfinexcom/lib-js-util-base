'use strict'

const isEqual = require('./isEqual')

/**
 *
 * @param { Array } arr
 * @param { Array } values
 * @returns { Array }
 */
const difference = (arr, values) => {
  if (!Array.isArray(arr)) {
    return []
  }
  if (!Array.isArray(values)) {
    return arr
  }
  if (values.length === 0) {
    return arr
  }
  return arr.filter(el => !values.find(value => isEqual(el, value)))
}

module.exports = difference
