'use strict'

const isPlainObject = (val) => val !== null  && typeof val === 'object' && !Array.isArray(val)

module.exports = isPlainObject
