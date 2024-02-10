'use strict'

const get = require('./get')
const pathToArray = require('./util/pathToArray')

/**
 *
 * @param {any} nested
 * @param {Array<string>} path
 * @param {any} value
 * @returns
 */
const _setObjByPath = (nested, path, value) => {
  if (path.length === 1) {
    return Object.assign(nested, { [path[0]]: value })
  }

  const currentProp = path.shift()
  if (nested[currentProp] === undefined) {
    nested[currentProp] = {}
  }

  return _setObjByPath(nested[currentProp], path, value)
}

/**
 *
 * @param {object} src
 * @param {object} dest
 * @param {string | Array<string>} path
 * @returns
 */
const _pickByPath = (src, dest, path) => {
  const pathArr = pathToArray(path)

  const value = get(src, [...pathArr])
  if (value !== undefined) {
    _setObjByPath(dest, pathArr, value)
  }
  return dest
}

/**
 *
 * @param {any} obj
 * @param  {...(string | Array<string | Array<string>>)} pathes
 * @returns
 */
const pick = (obj, ...pathes) => {
  if (obj === null) {
    return {}
  }

  const newObj = {}
  for (const path of pathes) {
    if (typeof path === 'string') {
      _pickByPath(obj, newObj, path)
    }
    if (Array.isArray(path)) {
      for (const chunk of path) {
        _pickByPath(obj, newObj, chunk)
      }
    }
  }

  return newObj
}

module.exports = pick
