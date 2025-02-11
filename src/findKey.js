'use strict'

const isNil = require('./isNil')

const isMatchDeep = (source, target) => {
  return Object.keys(target).every(key => {
    const sourceValue = source[key]
    const targetValue = target[key]

    if (typeof targetValue === 'object' && targetValue !== null) {
      if (typeof sourceValue !== 'object' || sourceValue === null) return false
      return isMatchDeep(sourceValue, targetValue)
    }

    return sourceValue === targetValue
  })
}

const findKey = (object, predicate) => {
  if (isNil(object) || isNil(predicate)) {
    return undefined
  }
  return Object.keys(object).find(key => {
    const value = object[key]
    return typeof predicate === 'function'
      ? predicate(value, key, object)
      : isMatchDeep(value, predicate)
  }) || undefined
}

module.exports = findKey
