const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('../config');

const router = new express.Router();

router.use(
    '/api/gateway',
    createProxyMiddleware({
        target: config.app.proxy.gateway.host,
        secure: false, // TODO: start checking for production when they get a valid certificate
        changeOrigin: true,
        pathRewrite: { '^/api/gateway/': '/api/' },
        logLevel: 'debug',
        onProxyReq: (proxyReq, req, res) =>
            proxyReq.setHeader('Origin', config.app.proxy.gateway.host)
    })
);

if (config.app.proxy.mockServer.host) {
    router.use(
        '/mock/api',
        createProxyMiddleware({
            target: config.app.proxy.mockServer.host,
            changeOrigin: true,
            pathRewrite: { '^/mock/api/': '/' }
        })
    );
}

module.exports = router;
