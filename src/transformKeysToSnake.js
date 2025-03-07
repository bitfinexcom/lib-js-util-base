'use strict'

const isPlainObject = require('./isPlainObject')
const snakeCase = require('./snakeCase')

/**
 * Transform object keys to snake case
 * e.g. { fooBar: 1 } => { foo_bar: 1 }
 * @param {Object} obj
 * @returns {Object}
 */
const transformKeysToSnakeCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeysToSnakeCase(item))
  }

  if (!isPlainObject(obj)) {
    return obj
  }

  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      snakeCase(k),
      transformKeysToSnakeCase(v)
    ])
  )
}

module.exports = transformKeysToSnakeCase
