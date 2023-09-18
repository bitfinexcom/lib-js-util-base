'use strict'

const omit = (obj, keys) => {
  if (obj === null) {
    return {}
  }

  const result = {}

  for (const key in obj) {
    if (!keys.includes(key)) {
      result[key] = obj[key]
    }
  }

  return result
}

module.exports = omit
