import { renderToString } from 'inferno-server'
import { App } from '../../../client'

const props = {
  style: {
    color: 'red'
  },
  name: 'SSR'
}

const html = () => renderToString(<App {...props} />)

export const SSR = (req, reply) => reply.type('text/html').code(200).send(html())
