'use strict';
const
    { createLogger, format, transports } = require('winston'),
    { combine, timestamp, printf, colorize } = format,
    fs = require('fs'),
    logDir = 'log';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const 
    myFormat = printf(info => {
        return `${info.timestamp} - [${info.level.toUpperCase()}] - ${info.message}`;
    }),
    logger = createLogger({
        transports: [
            new (transports.Console)({
                format: combine(colorize(), myFormat),
                level: 'debug'
            }),
            new (transports.File)({
                filename: `${logDir}/log.log`,
                format: combine(timestamp(),myFormat),
                level: 'info'
            })
        ]
    });

module.exports = logger;

logger.info('info logging');
logger.debug('debug logging');
logger.warn('warn logging');