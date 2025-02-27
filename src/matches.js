'use strict'

const isMatch = require('./isMatch')

/**
 * 
 * @param {object} src 
 * @returns {boolean}
 */
const matches = (src) => (obj) => {
  return isMatch(obj, src)
}

module.exports = matches
