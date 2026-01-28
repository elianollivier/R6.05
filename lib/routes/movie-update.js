'use strict';

const Joi = require('joi');

module.exports = {
    method: 'patch',
    path: '/movies/{id}',
    options: {
        auth: {
            scope: ['admin']
        },
        tags: ['api'],
        description: 'Modifier un film (admin uniquement)',
        validate: {
            params: Joi.object({
                id: Joi.number().integer().required().description('Id du film')
            }),
            payload: Joi.object({
                title: Joi.string().min(1).max(255).example('Inception').description('Titre du film'),
                description: Joi.string().min(1).example('Un voleur qui s\'infiltre dans les rêves...').description('Description du film'),
                releaseDate: Joi.date().example('2010-07-16').description('Date de sortie du film'),
                director: Joi.string().min(1).max(255).example('Christopher Nolan').description('Réalisateur du film')
            })
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.update(request.params.id, request.payload);
    }
};
