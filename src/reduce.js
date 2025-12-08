'use strict'

/**
 * Reduces collection to a single value
 * @param {Array | Object} collection
 * @param {Function} iteratee
 * @param {any} accumulator
 * @returns {any}
 */
const reduce = (collection, iteratee, accumulator) => {
  if (collection == null) return accumulator

  if (Array.isArray(collection)) {
    return collection.reduce(
      (acc, value, idx) => iteratee(acc, value, idx),
      accumulator
    )
  }

  return Object.keys(collection).reduce(
    (acc, key) => iteratee(acc, collection[key], key),
    accumulator
  )
}

module.exports = reduce
