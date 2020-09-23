/*
import { Pool } from 'pg'
import { LOG } from './'

let pool = null

const init = async (opts, done) => {
  pool = new Pool(opts)
  const client = await pool.connect()
  client.release()
  return done(LOG('PG INIT'))
}

const close = (fastify, done) => pool.end(done)

const query = async q => {
  const res = await pool.query(q)
  return res.rows
}

export const pg = {
  init,
  close,
  query
}
*/
