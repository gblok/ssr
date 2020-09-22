export const Healthy = (req, reply) =>
  reply
    .type('application/json')
    .code(200)
    .send({
      uptime: process.uptime(),
      timestamp: Date.now(),
      message: 'healthy'
    })
