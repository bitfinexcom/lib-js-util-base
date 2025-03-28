'use strict'

/**
 * Returns pseudo random element on the collection
 *
 * @template T
 * @param {Array<T>|Object<string, T>} list
 * @returns {T}
 */
const sample = (list) => {
  if (!list || typeof list !== 'object') {
    return
  }

  const values = Array.isArray(list) ? list : Object.values(list)
  const length = values.length
  if (!length) {
    return
  }

  return values[Math.floor(Math.random() * length)]
}

module.exports = sample
