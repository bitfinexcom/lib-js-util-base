'use strict'

/**
 * Iterates over collection elements
 * @param {Array | Object} collection
 * @param {Function} iteratee
 * @returns {Array | Object}
 */
const each = (collection, iteratee) => {
  if (!collection) return collection

  if (Array.isArray(collection)) {
    collection.forEach((item, idx) => iteratee(item, idx))
    return collection
  }

  Object.entries(collection).forEach(([key, val]) => iteratee(val, key))
  return collection
}

module.exports = each
