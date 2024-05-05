'use strict'

/**
 * Executes a series of functions in a pipeline, passing the result of each function as the argument to the next function.
 *
 * @param {Array<Function>} fns - An array of functions to be executed in order.
 * @returns {any} - The final result of the pipeline.
 * @throws {Error} - Throws an error if any element in the array is not a function.
 */
const flow = (fns = []) => {
  if (fns.find(fn => typeof fn !== 'function')) throw new Error('All elements should be functions')
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg)
}

module.exports = flow
