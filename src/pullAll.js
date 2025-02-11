'use strict'

const isNil = require('./isNil')

const pullAll = (array, values) => {
  if (isNil(values) || !Array.isArray(array)) {
    return array
  }
  const isValuesArray = Array.isArray(values)
  return array.filter(item => isValuesArray ? !values.includes(item) : item !== values)
}

module.exports = pullAll
