
var winston = require('winston');

winston.log('info', 'info Message.');
winston.log('info', 'info Message', { anything: 'metadata' });
winston.log('debug', 'debug message. %j', { id: '1234' }, {});
winston.log('warn', 'warn Message.');
winston.log('error', 'error Message.', { err_code: '500' });
 
winston.debug('debug Message');
winston.info('info Message');
winston.warn('warn Message');
winston.error('error Message');


/*
var winston = require('winston');

var logger = new winston.Logger({
    transports:
        [
            new winston.transports.Console({
                level: 'debug',
                silent: false,
                colorize: false,
                timestamp: false,
            }),
            new winston.transports.File({
                level: 'debug',
                silent: false,
                colorize: false,
                timestamp: true,
                filename: 'app-logging.log',
                maxsize: 1024,
                maxFiles: 3,
                json: true
            })
        ]
});

logger.log('info', 'info Message.');
logger.log('info', 'info Message', { anything: 'metadata' });
logger.log('debug', 'debug message. %j', { id: '1234' }, {});
logger.log('warn', 'warn Message.');
logger.log('error', 'error Message.', { err_code: '500' });

logger.debug('debug Message');
logger.info('info Message');
logger.warn('warn Message');
logger.error('error Message');
*/