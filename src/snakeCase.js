'use strict'

/**
 * Converts camel case and strings separated by spaces and dashes to underscores
 * @param {string} str
 * @returns {string}
 */
const snakeCase = (str) => {
  // Convert camelCase to snake_case by adding an underscore before each uppercase letter
  // and converting it to lowercase
  str = str.replace(/([a-z0-9])([A-Z])/g, '$1_$2')

  // Convert spaces and dashes to underscores
  str = str.replace(/[\s-]+/g, '_')

  return str.toLowerCase()
}

module.exports = snakeCase
