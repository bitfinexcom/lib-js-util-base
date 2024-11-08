'use strict'

const pathToArray = require('./util/pathToArray')

/**
 * Update the object with the updater by path
 *
 * @param {object} object
 * @param {string} path
 * @param {function} updater
 */
const update = (object, path, updater) => {
  if (!object) return
  if (!path) return
  if (!updater) return
  const pathArray = pathToArray(path)
  const key = pathArray.pop()
  const target = pathArray.reduce((acc, key) => acc[key], object)
  target[key] = updater(target[key])
}

module.exports = update
