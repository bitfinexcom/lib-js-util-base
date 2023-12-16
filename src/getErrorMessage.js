'use strict'

const getErrorMessage = (e) => {
  const msg = e && e.message ? e.message : ''
  const base = msg.match(/ERR_.*/)

  return base ? base[0] : msg
}

module.exports = getErrorMessage
