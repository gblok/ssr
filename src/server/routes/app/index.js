import { Healthy, LoaderIo, LoaderIoToken, Main, SSR } from '../../controllers/app'

export const App = (f, opts, done) => {
  f
    .get('/', {}, Main)
    .get('/:page', Main)
    .get('/:page/:sub', Main)
    .get('/:page/:sub/:lvl', Main)
    .get('/healthy', {}, Healthy)
    .get(`/${LoaderIoToken}`, {}, LoaderIo)
    .get('/ssr', {}, SSR)
  
  return done()
}
