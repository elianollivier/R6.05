'use strict';

const Joi = require('joi');
const { Model } = require('@hapipal/schwifty');

module.exports = class User extends Model {

    static get tableName() {

        return 'user';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.number().integer().greater(0),
            firstName: Joi.string().min(3).example('Elian').description('Prénom de l utilisateur'),
            lastName: Joi.string().min(3).example('Ollivier').description('Nom de l utilisateur'),
            username: Joi.string().min(3).required().example('elinaollivier').description('Nom d utilisateur'),
            password: Joi.string().min(8).required().example('password').description('Mot de passe de l utilisateur'),
            mail: Joi.string().email().required().example('elianollivier@gmail.fr').description('Mail de l utilisateur'),
            scope: Joi.string().example('user').description('Scope de l utilisateur'),
            createdAt: Joi.date(),
            updatedAt: Joi.date()
        });
    }

    static get jsonAttributes() {

        return ['scope'];
    }

    $beforeInsert(queryContext) {

        this.updatedAt = new Date();
        this.createdAt = this.updatedAt;
        this.scope = this.scope || 'user';
    }

    $beforeUpdate(opt, queryContext) {

        this.updatedAt = new Date();
    }

};
