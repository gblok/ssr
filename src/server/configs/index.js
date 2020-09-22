import { inspect } from 'util'
import { PG_HOST, PG_NAME, PG_PASS, PG_PORT, PG_USER } from './'

inspect.defaultOptions = { depth: null }

export * from '../../shared/configs'

export const
  SERVER_OPTS = {
    logger: false,
    ignoreTrailingSlash: true
  }

export const API_V1_OPTS = { prefix: '/api', scope: 'v1' }
export const APP_OPTS = { prefix: '/', scope: 'app' }

export const SCYLLA_OPTS = {
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'ssr'
  // credentials: { username: 'user_name', password: 'p@ssword1' }
}

export const PG_OPTS = {
  connectionString: `postgres://${PG_USER}:${PG_PASS}@${PG_HOST}:${PG_PORT}/${PG_NAME}`
}

export const LOKI_OPTS = {
  env: 'NODEJS',
  verbose: true
}
