'use strict'

const omitBy = (obj, predicate) => {
  if (obj === null) {
    return {}
  }

  const result = {}
  for (const key in obj) {
    const val = obj[key]
    if (!predicate(val, key)) {
      result[key] = val
    }
  }

  return result
}

module.exports = omitBy
