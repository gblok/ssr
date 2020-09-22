const LoaderIoToken = 'LoaderIo'

const LoaderIo = (req, reply) =>
  reply
    .type('text/html')
    .code(200)
    .send(LoaderIoToken)

export { LoaderIo, LoaderIoToken }
