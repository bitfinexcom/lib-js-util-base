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
  for (let i = length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [clone[i], clone[index]] = [clone[index], clone[i]] // swap elements
  }

  return clone
}

module.exports = shuffle
