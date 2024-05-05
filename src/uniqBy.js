'use strict'

const get = require("./get")

/**
 * Get unique values of array by the iteratee function or property path.
 *
 * @param {Array} arr - The src array.
 * @param {Function|string} iteratee -  The iteratee function or property path to check the unique values.
 * @returns {Array} - The result array unique by iteratee.
 */
const uniqBy = (arr, iteratee) => {
  const set = new Set()
  const _iteratee = typeof iteratee === 'function' ? iteratee : (value) => get(value, iteratee)
  return arr.filter(el => {
    const val = iteratee ? _iteratee(el) : el
    if (set.has(val)) return false
    set.add(val)
    return true
  })
}

module.exports = uniqBy
