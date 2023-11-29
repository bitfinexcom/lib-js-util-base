'use-strict'

const objectsDeepEqual = require('./util/objectsDeepEqual')
const strictEqual = require('./util/strictEqual')

/**
 *
 * @param {any} item
 * @param {any} other
 * @returns {boolean}
 */
const isEqual = (item, other) => {
  if (!strictEqual(typeof item, typeof other)) return false
  if (strictEqual(typeof item, 'object')) {
    return objectsDeepEqual(item, other)
  }
  return strictEqual(item, other)
}

module.exports = isEqual
