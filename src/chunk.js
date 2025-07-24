'use strict'

const isNumber = require('./isNumber')

const chunk = (anArray, chunkSize) => {
  if (!Array.isArray(anArray) || !isInteger(chunkSize)) return []
  const chunks = []
  for (let i = 0; i < anArray.length; i += chunkSize) {
    chunks.push(anArray.slice(i, i + chunkSize))
  }
  return chunks
}

const isInteger = (x) => {
  return isNumber(x) && Math.trunc(x) === x
}

module.exports = chunk
