'use strict'

const camelize = require('./camelize')

/**
 * Converts string to camelCase
 * @param {string} str
 * @returns {string}
 */
const camelCase = (str = '') => camelize(str)

module.exports = camelCase
