'use strict';
const
    winston = require('winston'),
    fs = require('fs'),
    env = process.env.NODE_ENV || 'development',
    logDir = 'log';
    exports = module.exports = {};
// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleTimeString();
exports.logger = winston.createLogger({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new (winston.transports.File)({
      filename: `${logDir}/results.log`,
      timestamp: tsFormat,
      level: env === 'development' ? 'debug' : 'info'
    })
  ]
});
// logger.info('Hello world');
// logger.warn('Warning message');
// logger.debug('Debugging info');