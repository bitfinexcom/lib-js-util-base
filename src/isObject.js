'use strict'

const isObject = (verifiable) => {
  if (verifiable == null) return false
  const type = typeof verifiable
  return type === 'object' || type === 'function'
}

module.exports = isObject
