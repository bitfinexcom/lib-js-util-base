'use strict'

const get = require('./get')

const getValue = (obj, path) => {
  if (
    obj === undefined ||
    obj === null
  ) {
    return obj
  }
  if (typeof path !== 'string') {
    return obj?.[path]
  }

  return get(obj, path)
}

/**
 * Creates an array of elements, sorted in ascending or descending
 * order by the results of running each element in a collection
 * through each iteratee. Allows specifying the sort orders of
 * the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of
 * 'desc' for descending or 'asc' for ascending sort order of
 * corresponding values
 * @param {Array<T> | Iterable<T>} collection The collection to iterate over
 * @param {Array<string | Function>} iteratees The iteratees to sort by
 * @param {Array<'asc' | 'desc'>} orders The sort orders of `iteratees`
 * @returns {Array<T>} Returns the new sorted array
 */
module.exports = (collection, iteratees = [], orders = []) => {
  // It's able to consider iterable objects as well
  // If iterable object is required, just create it after ordering, not here
  const copiedColl = [...collection]

  return copiedColl.sort((a, b) => {
    for (const [i, iteratee] of iteratees.entries()) {
      const direction = orders[i] === 'desc' ? -1 : 1
      const isIterateeFn = typeof iteratee === 'function'

      const valA = isIterateeFn
        ? iteratee(a)
        : getValue(a, iteratee)
      const valB = isIterateeFn
        ? iteratee(b)
        : getValue(b, iteratee)

      if (valA === valB) {
        continue
      }

      if (
        valA === undefined ||
        valA === null
      ) {
        return 1
      }
      if (
        valB === undefined ||
        valB === null
      ) {
        return -1
      }

      if (valA > valB) {
        return direction
      }
      if (valA < valB) {
        return -direction
      }
    }

    return 0
  })
}
