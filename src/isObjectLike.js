'use strict'

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`
 */
const isObjectLike = (value) => {
  return typeof value === 'object' && value !== null
}

module.exports = isObjectLike
