'use strict'

const determineExtremumValue = require('./util/determineExtremumValue')

const max = (array) => {
  return determineExtremumValue(
    array,
    (value, other) => value > other
  )
}

module.exports = max
