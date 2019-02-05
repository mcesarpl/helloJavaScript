'use strict';


const
    {createLogger, format, transports, addColors} = require('winston'),
    {combine, printf, colorize} = format,
    moment = require('moment'),
    fs = require('fs'),
    logDir = 'log';

if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir);
}

const myCustomLevels = {
    levels: {error: 0, warning: 1, info: 2, debug: 3},
    colors: {error: 'red', warning: 'yellow', info: 'green', debug: 'white'}
};

addColors(myCustomLevels.colors);

const 
    myConsoleFormat = printf(info => {
        return `${moment().format('YYYY-MM-DD HH:mm:ss').trim()} - [${info.level}] - ${info.message}`;
    }),
    myFileFormat = printf(info => {
        return `${moment().format('YYYY-MM-DD HH:mm:ss').trim()} - [${info.level.toUpperCase()}] - ${info.message}`;
    }),
    log = createLogger({
        transports:[
            new (transports.Console)({
                levels: myCustomLevels.levels,
                format: combine(colorize(), myConsoleFormat),
                level: 'debug'
            }),
            new (transports.File)({
                levels: myCustomLevels.levels,
                filename: `${logDir}/log.log`,
                format: combine(myFileFormat),
                level: 'info'
            })
        ]
    
    });

return 1;

module.exports = log;

//Use example :
// log.error('error logging');
// log.warn('warn logging');
// log.debug('debug logging');
 //log.info('info logging');