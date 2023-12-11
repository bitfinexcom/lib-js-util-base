'use strict'

const pathToArray = require('./util/pathToArray')

/**
 *
 * @param {any} obj
 * @param {Array<string>} nextPath
 * @returns {any}
 */
const getDeeperProp = (obj, nextPath, defaults) => {
  const key = nextPath.shift()
  if (obj[key] !== undefined) {
    if (nextPath.length > 0) return getDeeperProp(obj[key], nextPath, defaults)

    return obj[key]
  }

  return defaults
}

/**
 *
 * @param {any} object
 * @param {string | Array} path
 * @param {any} defaults
 * @returns {any}
 */
const get = (object, path, defaults) => {
  if (typeof object !== 'object' || object === null) {
    return defaults
  }

  if (typeof path === 'string' && object[path] !== undefined) {
    return object[path]
  }

  return getDeeperProp(object, pathToArray(path), defaults)
}

module.exports = get
