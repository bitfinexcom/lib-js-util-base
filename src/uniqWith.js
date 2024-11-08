'use strict'
/**
 * Returns a new array with unique values, using a comparator function.
 *
 * @param {Array} array The array to inspect.
 * @param {Function} comparator The comparator function.
 * @returns {Array} Returns the new array of filtered values.
 */
const uniqWith = (array, comparator) => {
  if (!Array.isArray(array)) {
    return []
  }
  if (typeof comparator !== 'function') {
    return array
  }
  return array.filter((item, index) => {
    return array.findIndex((other) => comparator(item, other)) === index
  })
}

module.exports = uniqWith
