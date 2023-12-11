'use strict'

const isNil = require('../isNil')

const determineExtremumValue = (array, comparator) => {
  if (
    !Array.isArray(array) ||
    array.length === 0
  ) {
    return
  }

  return array.reduce((prev, curr) => {
    if (isNil(curr)) {
      return prev
    }
    if (
      prev === undefined &&
      !Number.isNaN(curr) &&
      typeof curr !== 'symbol'
    ) {
      return curr
    }

    return comparator(curr, prev) ? curr : prev
  }, undefined)
}

module.exports = determineExtremumValue
