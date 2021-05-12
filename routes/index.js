export default async function(fastify, opts) {

  const genres = fastify.music();

  fastify.get('/', async function(request, reply) {
      return genres;
  });

  fastify.get('/:id', async function(request, reply) {
    try {
      const genre = genres.find(gen => gen.id === +request.params.id);
      return genre;
    } catch (error) {
      reply.code(404).send('Not there' + error);
    }
  });

  // {genre: 'some genre music'}
  fastify.post('/', async function(request, reply) {
      const { genre } = request.body;
      if(!genre) {
        reply.code(404).send('not found');
      }
      const listOfGenres = fastify.music(genre);
      return listOfGenres;
  });

}