'use strict'

const isEmpty = (val) => {
  if (!val) {
    return true
  }

  if (
    val instanceof Set ||
    val instanceof Map
  ) {
    return !val.size
  }
  if (
    Array.isArray(val) ||
    typeof val === 'string' ||
    (
      typeof val?.[Symbol.iterator] === 'function' &&
      Number.isFinite(val.length)
    )
  ) {
    return !val.length
  }

  for (const key in val) {
    if (
      Object.prototype.hasOwnProperty.call(val, key) &&
      key !== 'constructor'
    ) {
      return false
    }
  }

  return true
}

module.exports = isEmpty
