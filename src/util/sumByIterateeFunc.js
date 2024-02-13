'use strict'

/**
 * 
 * @param { Array } values 
 * @param { Function } iteratee 
 * @returns { number }
 */
const sumByIterateeFunc = (values, iteratee) => { 
  return values.reduce((acc, value) => {
    const current = iteratee(value)
    if(!current) return acc
    return acc + current
  }, 0)
}

module.exports = sumByIterateeFunc
