'use strict'

const isFunction = require('./isFunction')
const isObject = require('./isObject')

/**
 *
 * @param {Array|Object} obj
 * @param  {Function|Object|Array<String>|String} predicate
 * @returns {Array}
 */
const filter = (obj, predicate) => {
  const result = []

  let _filter
  if (isFunction(predicate)) _filter = (_obj) => predicate(_obj)
  else if (typeof predicate === 'string') _filter = (_obj) => !!_obj[predicate]
  else if (Array.isArray(predicate)) {
    _filter = (_obj) => {
      for (let i = 0; i < predicate.length; i += 2) {
        if (_obj[predicate[i]] !== predicate[i + 1]) return false
      }
      return true
    }
  } else if (isObject(predicate)) {
    _filter = (_obj) => {
      for (const i in predicate) {
        if (_obj[i] !== predicate[i]) return false
      }
      return true
    }
  }

  if (!Array.isArray(obj)) {
    for (const i in obj) {
      if (_filter(obj[i])) result.push(obj[i])
    }
  } else {
    return obj.filter(value => _filter(value))
  }

  return result
}

module.exports = filter
