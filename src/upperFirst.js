'use strict'

/**
 * Converts the first character of string to upper case
 * @param {string} str
 * @returns {string}
 */
const upperFirst = (str = '') => {
  if (typeof str !== 'string' && typeof str !== 'number') {
    return ''
  }
  const input = String(str)
  return input ? input[0].toUpperCase() + input.slice(1) : input
}

module.exports = upperFirst
