'use strict'

/**
 * Returns the index of the last element in the array that satisfies the provided testing function.
 *
 * @param {Array} array
 * @param {Function} predicate
 * @returns {number}
 */
const findLastIndex = (array, predicate, fromIndex) => {
  let index = fromIndex || array.length - 1
  while (index >= 0) {
    if (predicate(array[index])) {
      return index
    }
    index--
  }
  return -1
}

module.exports = findLastIndex
