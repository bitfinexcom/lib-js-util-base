'use strict'

/**
 * Checks if string ends with suffix
 * @param {string} str
 * @param {string} suffix
 * @returns {boolean}
 */
const endsWith = (str = '', suffix) => String(str).endsWith(suffix)

module.exports = endsWith
