'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/movies',
    options: {
        auth: false,
        tags: ['api'],
        description: 'Liste de tous les films'
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.findAll();
    }
};
