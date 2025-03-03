/* eslint-disable no-prototype-builtins */

'use strict'

const isObject = require('./isObject')

const cloneDeep = (obj, clones = new WeakMap()) => {
  if (obj instanceof Function) {
    return {}
  }
  if (!isObject(obj)) {
    return obj
  }

  if (clones.has(obj)) {
    return clones.get(obj)
  }

  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Map) {
    const newMap = new Map()
    clones.set(obj, newMap)
    obj.forEach((value, key) => {
      newMap.set(cloneDeep(key, clones), cloneDeep(value, clones))
    })
    return newMap
  }
  if (obj instanceof Set) {
    const newSet = new Set()
    clones.set(obj, newSet)
    obj.forEach(value => {
      newSet.add(cloneDeep(value, clones))
    })
    return newSet
  }

  const clonedObj = Array.isArray(obj) ? [] : {}
  clones.set(obj, clonedObj)

  if (Array.isArray(obj)) return obj.map(item => cloneDeep(item, clones))

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = cloneDeep(obj[key], clones)
    }
  }

  return clonedObj
}

module.exports = cloneDeep
