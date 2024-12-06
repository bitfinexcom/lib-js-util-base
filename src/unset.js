'use strict'

const pathToArray = require('./util/pathToArray')
const isEmpty = require('./isEmpty')
const isPlainObject = require('./isPlainObject')
const get = require('./get')

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
 * Given a path to a property into an object, follow and unset the matching field at
 * any arbitrary depth removing any remnant empty object encountered. Returns true if
 * the path was successfully unset or it didn't exist. False if the path was found but could not
 * be unset (such as frozen objects or native properties)
 * @param {any} object
 * @param {string | Array} path
 * @returns {boolean} true if the path was found and deleted or did not exist, false otherwise
 */
const unset = (object, path) => {
  _doUnset(object, pathToArray(path))
  return get(object, path, undefined) === undefined
}

module.exports = unset
