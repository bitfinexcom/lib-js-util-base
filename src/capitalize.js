'use strict'

const capitalize = (string) => {
  if (typeof string === 'string') {
    const lower = string.toLowerCase()

    const head = lower.substring(0, 1).toUpperCase()
    const tail = lower.substring(1)
    return head + tail
  }
  return ''
}

module.exports = capitalize
