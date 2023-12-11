'use strict'

/**
 *
 * @param {string} path
 * @returns {Array<string>}
 */
const pathToArray = (path) => {
  if (Array.isArray(path)) return path
  return path.split(/\[|\]\.|\]\[|\.|\]/gm).filter((key) => key !== '')
}

module.exports = pathToArray
