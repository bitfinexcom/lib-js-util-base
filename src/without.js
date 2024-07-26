'use strict'

const difference = require('./difference')

/**
 *
 * @param { Array } arr
 * @param { Array } values
 * @returns { Array }
 */
const without = (arr, ...values) => {
  return difference(arr, values)
}

module.exports = without
