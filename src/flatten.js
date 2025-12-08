'use strict'

/**
 * Flattens array a single level deep
 * @param {Array} collection
 * @returns {Array}
 */
const flatten = (collection = []) => (collection.flat ? collection.flat() : [].concat(...collection))

module.exports = flatten
