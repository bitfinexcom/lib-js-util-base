'use strict'

const camelize = require('./src/camelize')
const capitalize = require('./src/capitalize')
const cloneDeep = require('./src/cloneDeep')
const freezeDeep = require('./src/freezeDeep')
const get = require('./src/get')
const getArrayHasIntersect = require('./src/getArrayHasIntersect')
const getArrayUniq = require('./src/getArrayUniq')
const getErrorMessage = require('./src/getErrorMessage')
const head = require('./src/head')
const isEmpty = require('./src/isEmpty')
const isEqual = require('./src/isEqual')
const isFunction = require('./src/isFunction')
const isNil = require('./src/isNil')
const isObject = require('./src/isObject')
const isPlainObject = require('./src/isPlainObject')
const last = require('./src/last')
const mapKeys = require('./src/mapKeys')
const max = require('./src/max')
const merge = require('./src/merge')
const min = require('./src/min')
const omit = require('./src/omit')
const omitBy = require('./src/omitBy')
const pick = require('./src/pick')
const pickBy = require('./src/pickBy')
const shuffle = require('./src/shuffle')

module.exports = {
  camelize,
  capitalize,
  cloneDeep,
  freezeDeep,
  get,
  getArrayHasIntersect,
  getArrayUniq,
  getErrorMessage,
  head,
  isEmpty,
  isEqual,
  isFunction,
  isNil,
  isObject,
  isPlainObject,
  last,
  mapKeys,
  max,
  merge,
  min,
  omit,
  omitBy,
  pick,
  pickBy,
  shuffle
}
