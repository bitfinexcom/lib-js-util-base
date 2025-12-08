'use strict'

/**
 * Finds the first element in collection that matches predicate
 * @param {Array} collection
 * @param {Function} predicate
 * @returns {any}
 */
const find = (collection = [], predicate) => (collection || []).find(predicate)

module.exports = find
