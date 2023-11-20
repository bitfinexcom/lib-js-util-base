'use-strict'

const strictEqual = require('./strictEqual')

/**
 * Deep compare two arrays
 * @param {Array} arr1 Array to compare
 * @param {Array} arr2 compare with
 * @returns {boolean}
 */
const _arraysDeepEqual = (arr1, arr2) => {
  if (strictEqual(arr1, arr)) return true

  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    if (!strictEqual(arr1.length, arr2.length)) return false

    return arr1.every((item, i) => {
      if (strictEqual(typeof item, 'object')) {
        if (Array.isArray(item)) return _arraysDeepEqual(item, arr2[i])

        return objectsDeepEqual(item, arr2[i])
      }

      return strictEqual(item, arr2[i])
    })
  }

  return false
}

/**
 * Dep compare two objects
 * @param {object} obj1 Object to compare 
 * @param {object} obj2 compare with
 * @returns {boolean}
 */
const objectsDeepEqual = (obj1, obj2) => {
  if (strictEqual(obj1, obj2)) return true

  if (
    strictEqual(typeof obj1, 'object') &&
    strictEqual(typeof obj2, 'object') &&
    !strictEqual(obj1, null) &&
    !strictEqual(obj2, null)
  ) {
    if (Array.isArray(obj1) || Array.isArray(obj2)) return _arraysDeepEqual(obj1, obj2)

    const keysObj1 = Object.keys(obj1)
    const keysObj2 = Object.keys(obj2)

    if (!strictEqual(keysObj1.length, keysObj2.length) || !keysObj1.every(key => keysObj2.includes(key))) return false

    for (const key in obj1) {
      if (!objectsDeepEqual(obj1[key], obj2[key])) return false
    }

    return true
  }

  return false
}

module.exports = objectsDeepEqual
