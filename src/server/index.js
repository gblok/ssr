import server from 'fastify'

import { APP_OPTS, LOKI_OPTS, SERVER_BACKLOG, SERVER_HOST, SERVER_OPTS, SERVER_PORT } from './configs'

import { serverInit } from './modules'
import { Loki } from './plugins'
import { App } from './routes'

const app = server(SERVER_OPTS)

app.register(Loki, LOKI_OPTS).register(App, APP_OPTS).listen(SERVER_PORT, SERVER_HOST, SERVER_BACKLOG, serverInit)
