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
  const isFnPredicate = typeof predicate === 'function'
  return Object.entries(object).find(([key, value]) => {
    return isFnPredicate
      ? predicate(value, key, object)
      : isMatchDeep(value, predicate)
  })?.[0]
}

module.exports = findKey
