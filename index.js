'use strict'

const camelize = require('./src/camelize')
const cloneDeep = require('./src/cloneDeep')
const freezeDeep = require('./src/freezeDeep')
const get = require('./src/get')
const getArrayHasIntersect = require('./src/getArrayHasIntersect')
const getArrayUniq = require('./src/getArrayUniq')
const isEmpty = require('./src/isEmpty')
const isEqual = require('./src/isEqual')
const isFunction = require('./src/isFunction')
const isNil = require('./src/isNil')
const isObject = require('./src/isObject')
const isPlainObject = require('./src/isPlainObject')
const merge = require('./src/merge')
const omit = require('./src/omit')
const omitBy = require('./src/omitBy')
const pick = require('./src/pick')
const pickBy = require('./src/pickBy')
const shuffle = require('./src/shuffle')

module.exports = {
  camelize,
  cloneDeep,
  freezeDeep,
  get,
  getArrayHasIntersect,
  getArrayUniq,
  isEmpty,
  isEqual,
  isFunction,
  isNil,
  isObject,
  isPlainObject,
  merge,
  omit,
  omitBy,
  pick,
  pickBy,
  shuffle
}
