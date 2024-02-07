'use strict'
const isNumber = require('./isNumber')

// disclaimer: not valid for new Number(<FiniteNumber>)
const isFinite = (val) => isNumber(val) && Number.isFinite(val)

module.exports = isFinite
