'use strict'

/**
 * @callback IComparator
 * @param {any} attrItem
 * @param {any} valuesItem
 * @returns {boolean}
 */

/** 
 * Returns the elements of `array` that are not present in other array
 * using a comparator function or strict equality.
 * 
 * @param {Array<any>} arr
 * @param {Array<any>} items
 * @param {IComparator} comparator
 * @returns
 */
const differenceWith = (arr, items, comparator) => {
  if (!Array.isArray(arr)) {
    return []
  }
  if (!Array.isArray(items) || items.length === 0) {
    return arr
  }
  const _comparator = typeof comparator !== 'function' ? (arrItem, valuesItem) => arrItem === valuesItem : comparator

  return arr.filter(el => !items.find(value => _comparator(el, value)))
}

module.exports = differenceWith
