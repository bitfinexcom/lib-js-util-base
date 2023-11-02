'use strict'

/**
 * Performs pseudo random shuffles on clone of the array
 *
 * @param {Array<any>} array
 * @returns {Array<any>}
 */
const shuffle = (array) => {
  const clone = [...array]
  const length = clone.length
  for (let i = 0; i < length; i++) {
    const mov = Math.floor(Math.random() * length)
    const tmp = clone[mov]
    clone[mov] = clone[i]
    clone[i] = tmp
  }

  return clone
}

module.exports = shuffle
