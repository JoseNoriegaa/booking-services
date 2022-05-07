// Internal dependencies
const { messageAdapters } = require('../../adapters');
const { listChatRoomsSchema, listChatMessagesSchema } = require('./schema');

/** @type {import('fastify').FastifyPluginCallback} */
function chatRouter(fastify, _options, done) {
  // Register routes
  fastify.get('/', {
    schema: listChatRoomsSchema,
    handler: messageAdapters.listUserChatRooms,
  });

  fastify.get('/:chatId/messages', {
    schema: listChatMessagesSchema,
    handler: messageAdapters.listChatMessages,
  });

  fastify.post('/', {
    handler: (request, reply) => {
      fastify.io.emit('message', 'something');

      reply.send('ok');
    },
  });

  done();
}

module.exports = chatRouter;
