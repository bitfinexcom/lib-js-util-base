'use strict'

/**
 * Converts a path string or array to an array of path segments
 * @param {string | Array} path
 * @returns {Array<string>}
 */
const toPath = (path) => {
  if (Array.isArray(path)) {
    return path.map(String)
  }

  const string = String(path)
  const result = []

  const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  const reEscapeChar = /\\(\\)?/g

  if (string.charCodeAt(0) === 46) { // '.'
    result.push('')
  }

  string.replace(rePropName, (match, number, quote, subString) => {
    let key
    if (quote) {
      key = subString.replace(reEscapeChar, '$1')
    } else {
      key = number !== undefined ? number : match
    }
    result.push(key)
  })

  return result
}

module.exports = toPath
