'use strict'

const isPlainObject = require('./isPlainObject')
const snakeCase = require('./snakeCase')

/**
 * Transform object keys to snake case
 * e.g. { fooBar: 1 } => { foo_bar: 1 }
 * @param {Object} obj
 * @param {Object} [opts]
 * @param {boolean} [opts.recursive]
 * @returns {Object}
 */
const transformKeysToSnake = (obj, opts) => {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeysToSnake(item, opts))
  }

  if (!isPlainObject(obj)) {
    return obj
  }

  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [
      snakeCase(k),
      opts?.recursive ? transformKeysToSnake(v, opts) : v
    ])
  )
}

module.exports = transformKeysToSnake
