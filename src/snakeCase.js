'use strict'

const snakeCase = (str) => str.split(' ').join('_').toLowerCase()

module.exports = snakeCase
