'use strict'

/**
 *
 * @param {*} err
 * @param {*} res
 * @param {Function} cb
 * @returns
 */
const resolvePromiseCb = (err, res, cb) => {
  const isCb = typeof cb === 'function'
  if (!err) return isCb ? cb(null, res) : Promise.resolve(res)
  if (isCb) return cb(err)
  return Promise.reject(err)
}

module.exports = resolvePromiseCb
