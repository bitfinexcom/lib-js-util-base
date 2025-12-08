'use strict'

/**
 * Checks if string starts with prefix
 * @param {string} str
 * @param {string} prefix
 * @returns {boolean}
 */
const startsWith = (str = '', prefix) => String(str).startsWith(prefix)

module.exports = startsWith
