'use strict'

const freezeDeep = (obj) => {
  Object.freeze(obj)

  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) {
      freezeDeep(obj[prop])
    }
  })

  return obj
}

module.exports = freezeDeep
