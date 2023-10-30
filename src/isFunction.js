'use strict'

const isPlainObject = require('./isPlainObject')

const isFunction = (val) => !isPlainObject(val) && typeof val === 'function'

module.exports = isFunction
