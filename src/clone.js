'use strict'

const isObject = require('./isObject')

/**
 * Clone the object
 *
 * @param {any} obj
 * @returns {any}
 */
const clone = (obj) => {
  if (Array.isArray(obj)) {
    return obj.slice()
  }
  if (isObject(obj)) {
    return Object.assign({}, obj)
  }
  return obj
}

module.exports = clone
