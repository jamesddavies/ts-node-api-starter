import * as winston from 'winston'
import * as path from 'path'

var options = {
    file: {
        level: 'info',
        filename: path.resolve(__dirname, '../logs/app.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
        )
    },
    error: {
        level: 'error',
        filename: path.resolve(__dirname, '../logs/error.log'),
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5
    }
  };

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.File(options.error),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false
})

logger.stream = {
    write: function(message: any, encoding: any) {
        logger.info(message);
    }
}

export default logger