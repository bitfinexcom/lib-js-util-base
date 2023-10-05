'use strict'

const isPlainObject = require('./isPlainObject')
const cloneDeep = require('./cloneDeep')

const _cloneObj = (obj) => {
  try {
    return cloneDeep(obj)
  } catch (error) {
    // If the stringify fails due to circular reference, the merge defaults
    return Object.assign({}, obj)
  }
}

/**
 * This method is like `assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object.
 * @param {Object} target The destination target.
 * @param {...Object} [sources] The source objects.
 */
function merge (target, ...sources) {
  if (!isPlainObject(target) || !Array.isArray(sources)) return sources

  const cloneObj = _cloneObj(target)

  sources.forEach((source) => {
    const keys = Object.keys(source)

    keys.forEach((key) => {
      const targetValue = cloneObj[key]
      const sourceValue = source[key]

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        cloneObj[key] = targetValue.map((value, i) => {
          if (sourceValue.length <= i) {
            return value
          } else {
            return merge(value, sourceValue[i])
          }
        })

        if (sourceValue.length > targetValue.length) {
          cloneObj[key] = cloneObj[key].concat(sourceValue.slice(targetValue.length))
        }
      } else if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
        cloneObj[key] = merge(_cloneObj(targetValue), sourceValue)
      } else {
        cloneObj[key] = sourceValue
      }
    })
  })

  return cloneObj
}

module.exports = merge
