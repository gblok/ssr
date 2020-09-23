import { APP_NAME, APP_VERSION, SERVER_PORT } from '../configs'

const info = `${String.fromCharCode(9763)} ${APP_NAME} v.${APP_VERSION} : ${SERVER_PORT}`
export const serverInit = err => (
  err
    ? console.error(err)
    : console.info(info)
)
