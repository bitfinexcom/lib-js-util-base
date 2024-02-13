'use strict'

const get = require('./get')
const sumByIterateeFunc = require('./util/sumByIterateeFunc')

/**
 * 
 * @param { Array } values 
 * @param { Function | string } iteratee 
 * @returns { number }
 */
const sumBy = (values, iteratee) => {
  if (!Array.isArray(values) || values.length === 0) {
    return 0
  }

  if(typeof iteratee === 'function') {
    return sumByIterateeFunc(values, iteratee)
  }

  if(typeof iteratee === 'string') {
    return sumByIterateeFunc(values, (value) => get(value, iteratee, 0))
  }

  return 0
}

module.exports = sumBy
