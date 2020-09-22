import { loki } from '../modules'

export const Loki = async (f, opts, done) => {
  f.addHook('onClose', loki.close)
  return await loki.init(opts, done)
}
