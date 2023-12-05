'use strict'

const determineExtremumValue = require('./util/determineExtremumValue')

const min = (array) => {
  return determineExtremumValue(
    array,
    (value, other) => value > other
  )
}

module.exports = min
