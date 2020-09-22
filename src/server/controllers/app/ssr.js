import { renderToString } from 'inferno-server'
import { App } from '../../../client'

const props = {
  style: {
    color: 'red'
  },
  name: 'SSR'
}

let dom = null

const html = () => {
  if (!dom) {
    dom = renderToString(<App {...props} />)
  }

  return dom
}

export const SSR = (req, reply) => reply.type('text/html').code(200).send(html())
