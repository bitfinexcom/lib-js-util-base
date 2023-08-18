'use strict'

const pickBy = (obj, predicate) => {
  if (obj === null) {
    return {}
  }

  const newObj = {}
  for (const key in obj) {
    const val = obj[key]
    if (predicate(val, key)) {
      newObj[key] = val
    }
  }

  return newObj
}

module.exports = pickBy
