'use strict'

const toPath = require('./util/toPath')

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
  const pathArray = toPath(path)
  pathArray.reduce((parent, key, index) => {
    if (index === pathArray.length - 1) {
      parent[key] = updater(parent[key])
      return parent
    }
    if (!parent[key]) {
      parent[key] = {}
    }
    return parent[key]
  }, object)
}

module.exports = update
