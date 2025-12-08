'use strict'

/**
 * Creates a slice of array from start up to, but not including, end
 * @param {Array | string} value
 * @param {...number} args
 * @returns {Array | string}
 */
const slice = (value, ...args) => Array.prototype.slice.call(value, ...args)

module.exports = slice
