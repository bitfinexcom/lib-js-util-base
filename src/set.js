'use strict'

const toPath = require('./util/toPath')

/**
 * Sets the value at path of object
 * @param {Object} obj
 * @param {string | Array} path
 * @param {any} value
 * @returns {Object}
 */
const set = (obj, path, value) => {
  const segments = toPath(path)
  let current = obj

  for (let i = 0; i < segments.length; i++) {
    const key = segments[i]

    if (i === segments.length - 1) {
      current[key] = value
      return obj
    }

    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }

    current = current[key]
  }

  return obj
}

module.exports = set
