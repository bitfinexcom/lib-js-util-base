'use strict'

const get = require('./get')

/**
 * Gets the value for a given iteratee
 * @param {Function | string} iteratee
 * @returns {Function}
 */
const getterFor = (iteratee) => {
  if (typeof iteratee === 'function') return iteratee
  return (item) => get(item, iteratee)
}

/**
 * Gets the minimum value from a collection by iteratee
 * @param {Array} collection
 * @param {Function | string} iteratee
 * @returns {any}
 */
const minBy = (collection = [], iteratee) => {
  const getValue = getterFor(iteratee)

  return collection.reduce((result, item) => {
    if (result === undefined) return item
    return getValue(item) < getValue(result) ? item : result
  }, undefined)
}

module.exports = minBy
