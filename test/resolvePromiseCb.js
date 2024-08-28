'use strict'

/* eslint-env mocha */

const assert = require('assert')
const resolvePromiseCb = require('../src/resolvePromiseCb')

describe.only('resolvePromiseCb', () => {
  it('should handle callback errors', (done) => {
    resolvePromiseCb(new Error('foo'), null, (err) => {
      assert.strictEqual(err.message, 'foo')
      done()
    })
  })

  it('should handle promise rejections', async () => {
    await assert.rejects(resolvePromiseCb(new Error('foo')), { message: 'foo' })
  })

  it('should handle callback results', (done) => {
    resolvePromiseCb(null, 'foo', (err, res) => {
      assert.strictEqual(err, null)
      assert.strictEqual(res, 'foo')
      done()
    })
  })

  it('should handle promise resolves', async () => {
    const res = await resolvePromiseCb(null, 'foo')
    assert.strictEqual(res, 'foo')
  })
})
