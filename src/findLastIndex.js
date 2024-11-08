'use strict'

/**
 * Returns the index of the last element in the array that satisfies the provided testing function.
 *
 * @param {Array} array
 * @param {Function} predicate
 * @returns {number}
 */
const findLastIndex = (array, predicate) => {
  let index = array.length
  while (index--) {
    if (predicate(array[index])) {
      return index
    }
  }
  return -1
}

module.exports = findLastIndex
