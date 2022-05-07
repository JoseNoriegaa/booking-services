// External dependencies
const PluginLoader = require('fastify-plugin');
const serverFactory = require('@booking-services/web-sockets');

/** @type {import('fastify').FastifyPluginCallback} */
function websockets(fastify, _, next) {
  const io = serverFactory(fastify.server);

  fastify.decorate('io', io);
  next();
}

module.exports = PluginLoader(websockets);
