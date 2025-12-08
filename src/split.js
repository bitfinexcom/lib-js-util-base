'use strict'

/**
 * Splits string by separator
 * @param {string} str
 * @param {string} separator
 * @param {number} limit
 * @returns {Array<string>}
 */
const split = (str = '', separator, limit) => String(str).split(separator, limit)

module.exports = split
