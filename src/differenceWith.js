'use strict'

const differenceWith = (arr, items, comparator) => {
  if (!Array.isArray(arr)) {
    return []
  }
  if (!Array.isArray(items) || items.length === 0) {
    return arr
  }
  const _comparator = typeof comparator !== 'function' ? (arrItem, valusItem) => arrItem === valusItem : comparator

  return arr.filter(el => !items.find(value => _comparator(el, value)))
}

module.exports = differenceWith
