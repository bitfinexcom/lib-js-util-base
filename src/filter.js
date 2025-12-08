'use strict'

/**
 * Filters collection elements
 * @param {Array} collection
 * @param {Function} predicate
 * @returns {Array}
 */
const filter = (collection = [], predicate) => (collection || []).filter(predicate)

module.exports = filter
