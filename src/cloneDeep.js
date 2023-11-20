'use strict'

const isObject = require('./isObject')

const cloneDeep = (obj) => {
  if (obj instanceof Function) {
    return {}
  }
  if (!isObject(obj)) {
    return obj
  }

  return JSON.parse(JSON.stringify(obj))
}

module.exports = cloneDeep
