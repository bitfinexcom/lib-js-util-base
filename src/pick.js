'use strict'

const pick = (obj, keys) => {
  if (obj === null) {
    return {}
  }

  const newObj = {}
  for (const key in obj) {
    if (keys.includes(key)) {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

module.exports = pick
