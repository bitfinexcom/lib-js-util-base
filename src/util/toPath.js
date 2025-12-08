'use strict'

/**
 * Converts a path string or array to an array of path segments
 * @param {string | Array} path
 * @returns {Array<string>}
 */
const toPath = (path) => {
  if (Array.isArray(path)) {
    return path.filter(Boolean).map(String)
  }
  return String(path)
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .filter(Boolean)
}

module.exports = toPath
