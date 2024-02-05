'use strict'

const isFinite = (val) => (typeof val === 'number' && Number.isFinite(val)) ||
  (val instanceof Number && Number.isFinite(val.valueOf()))

module.exports = isFinite
