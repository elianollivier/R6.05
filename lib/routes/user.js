'use strict';

const Joi = require('joi');

module.exports = {
    method: 'post',
    path: '/user',
    options: {
        auth: false,
        tags: ['api'],
        validate: {
            payload: Joi.object({
                firstName: Joi.string().required().min(3).example('Elian').description('Prénom de l utilisateur'),
                lastName: Joi.string().required().min(3).example('Ollivier').description('Nom de l utilisateur'),
                username: Joi.string().required().min(3).example('elinaollivier').description('Nom d utilisateur'),
                password: Joi.string().required().min(8).example('password123').description('Mot de passe de l utilisateur'),
                mail: Joi.string().required().email().example('elianollivier@gmail.fr').description('Mail de l utilisateur'),
                scope: Joi.string().valid('user', 'admin').default('user').example('admin').description('Scope de l utilisateur (user ou admin)')
            })
        }
    },
    handler: async (request, h) => {

        const { userService } = request.services();

        return await userService.create(request.payload);
    }
};
