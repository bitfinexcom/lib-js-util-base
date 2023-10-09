'use strict'

const camelize = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|-\w|_\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase()
  }).replace(/(\s|_|-)+/g, '')
}

module.exports = camelize
