'use strict'

const cloneDeep = require('./src/cloneDeep')
const get = require('./src/get')
const getArrayHasIntersect = require('./src/getArrayHasIntersect')
const getArrayUniq = require('./src/getArrayUniq')
const isEmpty = require('./src/isEmpty')
const isNil = require('./src/isNil')
const isPlainObject = require('./src/isPlainObject')
const pick = require('./src/pick')
const pickBy = require('./src/pickBy')
const omit = require('./src/omit')
const omitBy = require('./src/omitBy')
const camelize = require('./src/camelize')
const merge = require('./src/merge')

module.exports = {
  cloneDeep,
  get,
  getArrayHasIntersect,
  getArrayUniq,
  isEmpty,
  isNil,
  isPlainObject,
  pick,
  pickBy,
  camelize,
  omit,
  omitBy,
  merge
}
