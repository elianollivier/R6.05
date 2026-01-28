'use strict';

const Joi = require('joi');

module.exports = {
    method: 'post',
    path: '/movies',
    options: {
        auth: {
            scope: ['admin']
        },
        tags: ['api'],
        description: 'Créer un film (admin uniquement)',
        validate: {
            payload: Joi.object({
                title: Joi.string().required().min(1).max(255).example('cars 2').description('Titre du film'),
                description: Joi.string().required().min(1).example('Un film de voiture...').description('Description du film'),
                releaseDate: Joi.date().required().example('2010-07-16').description('Date de sortie du film'),
                director: Joi.string().required().min(1).max(255).example('Elian').description('Réalisateur du film')
            })
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();

        return await movieService.create(request.payload);
    }
};
