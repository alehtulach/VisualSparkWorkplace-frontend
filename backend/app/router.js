const express = require('express');

const router = new express.Router();

router.use(require('./proxy/router'));

router.use(require('./routes/static/router'));

module.exports = router;
