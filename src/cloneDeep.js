'use strict'

const isObject = require('./isObject')

const cloneDeep = (obj) => {
  if (!isObject(obj)) {
    return obj
  }

  return JSON.parse(JSON.stringify(obj))
}

module.exports = cloneDeep
