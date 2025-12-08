'use strict'

const flatten = require('./flatten')

/**
 * Maps collection and flattens result one level deep
 * @param {Array} collection
 * @param {Function} iteratee
 * @returns {Array}
 */
const flatMap = (collection = [], iteratee) => (
  collection.flatMap ? collection.flatMap(iteratee) : flatten(collection.map(iteratee))
)

module.exports = flatMap
