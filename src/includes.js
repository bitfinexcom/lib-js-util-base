'use strict'

/**
 * Checks if collection includes value
 * @param {Array | Object | string} collection
 * @param {any} value
 * @returns {boolean}
 */
const includes = (collection, value) => {
  if (!collection) return false

  if (typeof collection === 'string' || Array.isArray(collection)) {
    return collection.includes(value)
  }

  if (typeof collection === 'object') {
    return Object.values(collection).includes(value)
  }

  return false
}

module.exports = includes
