'use strict'

/**
 * Returns a new array with unique values from the argument array using strict equality.
 *
 * @param {array<T>} array
 * @returns {array<T>}
 */
const uniq = (array) => {
  return Array.from(new Set(array))
}

module.exports = uniq
