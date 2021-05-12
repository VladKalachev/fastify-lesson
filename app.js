import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', async function(request, reply) {
  return "Hello World1";
});

fastify.get('/test', async function(request, reply) {
  return "Test";
});

fastify.listen(3000, () => {
  console.log('running on port 3000');
});