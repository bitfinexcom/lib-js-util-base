'use strict'

const cloneDeep = require('../cloneDeep')

const cloneObj = (obj) => {
  try {
    return cloneDeep(obj)
  } catch (error) {
    // If the stringify fails due to circular reference, the merge defaults
    /* istanbul ignore next */
    return Object.assign({}, obj)
  }
}

module.exports = cloneObj
