import { Client } from 'cassandra-driver'
import { _ERR, LOG } from './'

let client = null

const init = async (opts, done) => {
  client = new Client(opts)
  await client.connect()
  return done(LOG('SCYLLA INIT'))
}

const close = async (fastify, done) => await client.shutdown(done)

const query = async (query, params = [], opts = {}) => {
  const res = await client.execute(query, params, opts).catch(_ERR('scylla'))
  return res.rows
}

// const stream = async (query, params = [], opts = {}) => client.stream(query, params, opts)
//
// const eachRow = (query, params, cb) => client.eachRow(query, params, { prepare: true }, cb)

export const scylla = {
  init,
  close,
  query
}
