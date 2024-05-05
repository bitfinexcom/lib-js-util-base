'use strict'

/**
 * Inverts the key-value pairs of an object.
 *
 * @param {object} object - The object to invert.
 * @returns {object} - The new object with inverted key-value pairs.
 */
const invert = (object) =>
  Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))

module.exports = invert
