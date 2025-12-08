'use strict'

/**
 * Maps collection elements
 * @param {Array} collection
 * @param {Function} iteratee
 * @returns {Array}
 */
const map = (collection = [], iteratee) => (collection || []).map(iteratee)

module.exports = map
