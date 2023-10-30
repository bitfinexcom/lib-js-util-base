'use strict'

const isNil = require('./isNil')

const isPlainObject = (val) => !isNil(val) && typeof val === 'object' && !Array.isArray(val)

module.exports = isPlainObject
