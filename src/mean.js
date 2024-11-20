'use strict'

/**
 * Returns the mean of an array of numbers.
 *
 * @param {Array<number>} arr
 * @returns {number}
 */
const mean = (arr) => {
  const length = arr ? arr.length : 0
  if (length === 0) {
    return NaN
  }
  return arr.reduce((acc, val) => +acc + +val, 0) / arr.length
}

module.exports = mean
