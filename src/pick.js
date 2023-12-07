'use strict'

const merge = require('./merge')
const get = require('./get')
const pathToArray = require('./util/pathToArray')

/**
 * 
 * @param {any} root 
 * @param {Array<string>} path 
 * @param {any} value 
 * @returns 
 */
const makeObjByPath = (path, value) => {
  if (path.length === 0) return {}
  if (path.length === 1) {
    return { [path[0]]: value }
  }

  const currentProp = path.shift()

  return { [currentProp]: makeObjByPath(path, value) }
  
}

/**
 * 
 * @param {object} src 
 * @param {object} dest 
 * @param {string | Array<string>} path 
 * @returns 
 */
const pickByPath = (src, dest, path) => {
  const pathArr = pathToArray(path)

  const value = get(src, [...pathArr])
  if (value !== undefined) {
    return merge(dest, makeObjByPath(pathArr, value)) || {}
  }
  return dest
}

const pick = (obj, ...pathes) => {
  if (obj === null) {
    return {}
  }

  let newObj = {}
  for (const path of pathes) {
    if (typeof path === 'string') {
      newObj = pickByPath(obj, newObj, path)
    }
    if (Array.isArray(path)) {
      for (const chunk of path) {
        newObj = pickByPath(obj, newObj, chunk)
      }
    }
  }

  return newObj
}

module.exports = pick
