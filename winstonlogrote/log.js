'use strict';
const
    { createLogger, format, transports, addColors } = require('winston'),
    { combine, timestamp, printf, colorize, toUpperCase } = format,
    fs = require('fs'),
    logDir = 'log';


const myCustomLevels = {
  levels: { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 },
  colors: { error: 'red', warn: 'yellow', info: 'white', verbose: 'green', debug: 'gray', silly:'gray'}
};


if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

addColors(myCustomLevels.colors);

const 
    myConsoleFormat = printf(info => {
        return `${info.timestamp} - [${info.level}] - ${info.message}`;
    }),
    myFileFormat = printf(info => {
        return `${info.timestamp} - [${info.level.toUpperCase()}] - ${info.message}`;
    }),
    logger = createLogger({
        transports: [
            new (transports.Console)({
                levels: myCustomLevels.levels,
                format: combine(colorize(), timestamp(), myConsoleFormat),
                level: 'debug'
            }),
            new (transports.File)({
                filename: `${logDir}/log.log`,
                format: combine(timestamp(),myFileFormat),
                level: 'info'
            })
        ]
    
    });

module.exports = logger;

logger.error('error logging');
logger.info('info logging');
logger.debug('debug logging');
logger.warn('warn logging');