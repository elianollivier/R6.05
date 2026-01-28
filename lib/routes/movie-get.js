'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/movies/{id}',
    options: {
        auth: false,
        tags: ['api'],
        description: 'Détails d\'un film',
        validate: {
            params: Joi.object({
                id: Joi.number().integer().required().description('Id du film')
            })
        }
    },
    handler: async (request, h) => {

        const { movieService } = request.services();
        const movie = await movieService.findById(request.params.id);

        if (!movie) {
            return h.response({ error: 'Film non trouvé' }).code(404);
        }

        return movie;
    }
};
