'use strict';

const Joi = require('joi');

module.exports = {
    method: 'delete',
    path: '/movies/{id}',
    options: {
        auth: {
            scope: ['admin']
        },
        tags: ['api'],
        description: 'Supprimer un film (admin uniquement)',
        validate: {
            params: Joi.object({
                id: Joi.number().integer().required().description('Id du film')
            })
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        await movieService.delete(request.params.id);

        return '';
    }
};
