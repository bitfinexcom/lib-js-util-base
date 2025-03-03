'use strict'

const isMatch = require('./isMatch')

/**
 * Generates a function that makes a deep partial comparison on a given object with the source
 *
 * @param {object} src
 * @returns {boolean}
 */
const matches = (src) => (obj) => {
  return isMatch(obj, src)
}

module.exports = matches
