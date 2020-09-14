import server from 'fastify'
import { renderToString } from 'inferno-server'
import { inspect } from 'util'
import { App } from '../client'

inspect.defaultOptions = { depth: null }

const { SERVER_PORT, SERVER_HOST, SERVER_BACKLOG, APP_NAME, APP_VERSION } = process.env

const app = server({
  logger: false,
  ignoreTrailingSlash: true
})

const initInfo = err =>
  err
    ? console.error(err)
    : console.info(`${String.fromCharCode(9763)} ${APP_NAME} v.${APP_VERSION} : ${SERVER_PORT}`)

const props = {
  style: {
    color: 'red',
    'background-color': 'black',
    'font-size': '2rem'
  },
  name: 'World!'
}

const handler = (req, reply) => reply.type('text/html').send(renderToString(App(props)))

app
  .get('/', handler)
  .listen(Number(SERVER_PORT), String(SERVER_HOST), Number(SERVER_BACKLOG), initInfo)
