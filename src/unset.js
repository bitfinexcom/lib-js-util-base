'use strict'

const pathToArray = require('./util/pathToArray')
const isEmpty = require('./isEmpty')
const isPlainObject = require('./isPlainObject')

const _doUnset = (obj, path) => {
  const level = path.length - 1
  const key = path.shift()
  if (obj[key] !== undefined) {
    if (level > 0) _doUnset(obj[key], path)
    if (level === 0 || (isPlainObject(obj[key]) && isEmpty(obj[key]))) {
      try {
        return !Object.isFrozen(obj) && delete obj[key]
      } catch (err) {
        return false
      }
    }
  }
  return true
}

/**
 *
 * @param {any} object
 * @param {string | Array} path
 * @returns {boolean} true if the path was found and deleted, false otherwise
 */
const unset = (object, path) => {
  return _doUnset(object, pathToArray(path))
}

module.exports = unset