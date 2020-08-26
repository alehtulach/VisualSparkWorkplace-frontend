const path = require('path');

const config = {
    express: {
        port: process.env.EXPRESS_PORT || 8888,
        host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1'
    },
    app: {
        buildPath:
            process.env.BUILD_PATH ||
            path.join(__dirname, '../../frontend/public'),
        proxy: {
            gateway: {
                host: process.env.API_SERVER
            },
            mockServer: {
                host: process.env.MOCK_SERVER || 'http://localhost:3010'
            }
        }
    }
};

module.exports = config;
