'use strict';

const Glue = require('@hapi/glue');
const Manifest = require('./manifest');

exports.deployment = async (start) => {

    const manifest = Manifest.get('/');
    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    if (start) {
        await server.start();
        console.log(`Server started at ${server.info.uri}`);
    }

    return server;
};

if (require.main === module) {

    exports.deployment(true);

    process.on('unhandledRejection', (err) => {

        throw err;
    });
}
