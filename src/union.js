'use strict'

/**
 * Returns the union of the given arrays.
 *
 * @param {...Array} arrays The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 */
const union = (...arrays) => {
  if (arrays.length === 0) return []
  const result = []
  arrays.forEach((array) => {
    Array.isArray(array) && array.forEach((value) => {
      if (!result.includes(value)) {
        result.push(value)
      }
    })
  })
  return result
}

module.exports = union
