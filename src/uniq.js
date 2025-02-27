'use strict'

/**
 * @param {array<T>} array
 * @returns {array<T>}
 */
const uniq = (array) => {
  return Array.from(new Set(array))
}

module.exports = uniq
