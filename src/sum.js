'use strict'

const sumByIterateeFunc = require('./util/sumByIterateeFunc')

/**
 * 
 * @param {Array<number>} values 
 * @returns { number }
 */
const sum = (values) => {
  if (!Array.isArray(values) || values.length === 0) {
    return 0
  }
  return sumByIterateeFunc(values, (value) => value)
}

module.exports = sum
