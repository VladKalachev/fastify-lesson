import Fastify from 'fastify';

const fastify = Fastify();

fastify.register(import('./test/route.js'));

fastify.get('/', async function(request, reply) {
  return "Hello World";
});

fastify.listen(3000, () => {
  console.log('running on port 3000');
});