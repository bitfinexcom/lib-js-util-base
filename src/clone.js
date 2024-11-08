'use strict'

const isNil = require('./isNil')
const isObject = require('./isObject')

/**
 * Clone the object
 *
 * @param {any} obj
 * @returns {any}
 */
const clone = (obj) => {
  if (isNil(obj)) {
    return {}
  }
  if (Array.isArray(obj)) {
    return obj.slice()
  }
  if (isObject(obj)) {
    return Object.assign({}, obj)
  }
  return obj
}

module.exports = clone
