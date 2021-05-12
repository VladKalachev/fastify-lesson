/**
 * 
 * @param {import('fastify').FastifyInstance} fastify 
 * @param {*} opts 
 */
export default async function(fastify, opts) {
  fastify.get('/test', async function(request, reply) {
    reply.code(200).send("Go to the test Route");
  })
}