'use strict'
const isNumber = require('./isNumber')

const isFinite = (val) => isNumber(val) && Number.isFinite(val)

module.exports = isFinite
