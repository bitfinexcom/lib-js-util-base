'use strict'

/**
 * Checks if all elements in collection pass predicate
 * @param {Array} collection
 * @param {Function} predicate
 * @returns {boolean}
 */
const every = (collection, predicate) => Array.isArray(collection) && collection.every(predicate)

module.exports = every
