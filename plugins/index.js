import fp from 'fastify-plugin';
import faker from 'faker';

const genres = [...Array(20)].map((v, idx) => ({
  id: idx,
  genre: faker.music.genre()
}));

console.log(genres);

const plugin = fp(async function plagin(fastify, opts, done) {
  fastify.decorate("music", val => {
    if(val) {
      genres.push({ id: genres.length, genre: val })
    }
    return genres;
  })
})

export default plugin;