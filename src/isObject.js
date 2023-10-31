'use strict'

const isObject = (verifiable) => {
  const type = typeof verifiable
  if (verifiable == null) return false
  return type === 'object' || type === 'function'
}

module.exports = isObject
