'use strict'

/**
 * Splits array into chunks of specified size
 * @param {Array} collection
 * @param {number} chunkSize
 * @returns {Array<Array>}
 */
const chunk = (collection = [], chunkSize = 1) => {
  if (!Array.isArray(collection) || collection.length === 0) return []
  const sizeInt = Math.floor(Math.max(1, chunkSize))
  const result = []

  for (let i = 0; i < collection.length; i += sizeInt) {
    result.push(collection.slice(i, i + sizeInt))
  }

  return result
}

module.exports = chunk
