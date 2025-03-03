'use strict'

const isUsingObjConstructor = (val) => Object.getPrototypeOf(val) === Object.prototype || Object.getPrototypeOf(val) === null
const isPlainObject = (val) => val !== null && typeof val === 'object' && isUsingObjConstructor(val)

module.exports = isPlainObject
