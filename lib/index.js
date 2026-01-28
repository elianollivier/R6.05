'use strict';

const HauteCouture = require('@hapipal/haute-couture');

exports.plugin = {
    pkg: require('../package.json'),
    register: async (server, options) => {

        await HauteCouture.compose(server, options);
    }
};
