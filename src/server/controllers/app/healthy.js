export const Healthy = (req, reply) =>
  reply
    .send({
      uptime: process.uptime(),
      timestamp: Date.now(),
      message: 'healthy'
    })
