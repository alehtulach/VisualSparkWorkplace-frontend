const express = require('express');

const config = require('../../config');
const logger = require('../../logger')('static');
const router = new express.Router();

logger.info(`Serving static resources from: ${config.app.buildPath}`);
// serve static resources
router.use(express.static(config.app.buildPath));

// handles any other requests as frontend routes
router.get('*', (req, res) =>
    res.sendFile(`${config.app.buildPath}/index.html`)
);

module.exports = router;
