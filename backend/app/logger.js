const log4js = require('log4js');

log4js.configure({
    appenders: {
        out: {
            type: 'console',
            layout: {
                type: 'basic'
            }
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info'
        }
    }
});

module.exports = name => log4js.getLogger(name);
