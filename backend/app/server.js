const express = require('express');

const app = express();

const logger = require('./logger')('server');
const router = require('./router');
const config = require('./config');

app.use('/', router);

logger.info('Starting the server ...');

app.listen(config.express.port, config.express.host, error => {
    if (error) {
        logger.error('Unable start the server: ', error);
        process.exit(10);
    }
    logger.info(
        `Express is listening on: ${config.express.host}:${config.express.port}`
    );
});
