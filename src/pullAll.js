'use strict'

const isNil = require('./isNil')

const pullAll = (array, values) => {
  if (isNil(values) || !Array.isArray(array)) {
    return array
  }
  return array.filter(item => !values.includes(item))
}

module.exports = pullAll
