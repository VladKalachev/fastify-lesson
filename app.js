import Fastify from 'fastify';
import Route from './test/route.js';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import AutoLoad from 'fastify-autoload';

const fastify = Fastify({ logger: true });
const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

export default async function(fastify, opts) {
  fastify.register(import('./plugins/index.js'));
  fastify.register(AutoLoad, {
    dir: join(_dirname, 'routes')
  });
  fastify.register(Route);

  // fastify.get('/', async function(request, reply) {
  //   return "Hello World";
  // });

  fastify.listen(3000, () => {
    console.log('running on port 3000');
  });
}
