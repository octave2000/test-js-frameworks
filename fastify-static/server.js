const path = require('path');
const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

fastify.get('/health', async () => ({ ok: true }));

const port = process.env.PORT || 3000;
fastify.listen({ port, host: '0.0.0.0' }).catch((err) => {
  fastify.log.error(err);
  process.exit(1);
});
