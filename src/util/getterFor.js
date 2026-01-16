const get = require('../get')

/**
 * Gets the value for a given iteratee
 * @param {Function | string} iteratee
 * @returns {Function}
 */
const getterFor = (iteratee) => {
  if (typeof iteratee === 'function') return iteratee
  return (item) => get(item, iteratee)
}

module.exports = getterFor
