'use strict'

const isPlainObject = require('./isPlainObject')
const snakeCase = require('./snakeCase')

/**
 * Transform object keys to snake case
 * e.g. { fooBar: 1 } => { foo_bar: 1 }
 * @param {Object} obj
 * @returns {Object}
 */
const transformKeysToSnake = (obj, { recursive } = {}) => {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeysToSnake(item))
  }

  if (!isPlainObject(obj)) {
    return obj
  }

  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      snakeCase(k),
      recursive ? transformKeysToSnake(v) : v
    ])
  )
}

module.exports = transformKeysToSnake
