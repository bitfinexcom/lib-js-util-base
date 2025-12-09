'use strict'

/**
 * Checks if string ends with suffix
 * @param {string} str
 * @param {string} suffix
 * @param {number} [position=str.length]
 * @returns {boolean}
 */
const endsWith = (str = '', suffix, position) => {
  const string = String(str)
  const pos = position === undefined
    ? string.length
    : Math.min(Math.max(Number(position), 0), string.length)

  return string.slice(0, pos).endsWith(suffix)
}

module.exports = endsWith
