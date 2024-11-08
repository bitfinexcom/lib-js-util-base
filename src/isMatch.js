'use strict'

/**
 * Checks if `object` is a match with `source`.
 *
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
const isMatch = (object, source) => {
  if (object === source) return true
  if (!object) return false
  if (typeof source === 'string') {
    if (typeof object === 'string') {
      return object.slice(0, source.length) === source
    }
    return false
  }
  if (Object.keys(source)?.length) {
    for (const key in source) {
      if (!isMatch(object[key], source[key])) return false
    }
    return true
  }
  return false
}

module.exports = isMatch
