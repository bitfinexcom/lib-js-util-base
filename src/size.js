'use strict'

/**
 * Gets the size of collection
 * @param {Array | Object | string} value
 * @returns {number}
 */
const size = (value) => {
  if (Array.isArray(value) || typeof value === 'string') return value.length
  if (value && typeof value === 'object') return Object.keys(value).length
  return 0
}

module.exports = size
