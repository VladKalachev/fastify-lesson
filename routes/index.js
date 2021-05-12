export default async function(fastify, opts) {
  const genres = fastify.music();
  fastify.get('/', async function(request, reply) {
      return genres;
  })
}