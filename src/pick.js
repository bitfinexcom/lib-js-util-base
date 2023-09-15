'use strict'

const pick = (obj, path) => {
  if (obj === null) {
    return {}
  }

  const keys = Array.isArray(path) ? path : [path];
  const newObj = {}
  for (const key in obj) {
    if (keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

module.exports = pick
