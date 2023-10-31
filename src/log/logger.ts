import { createLogger, format, transports, config } from 'winston';
import { consoleFormat } from 'winston-console-format';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
    silly: 5,
    trace: 6,
    fatal: 7,
};

// Base logger configuration
const logger = createLogger({
    levels,
    level: 'silly', // top-level of severity
    format: format.combine(
        format.timestamp({ format: 'DD.MM.YYYY HH:mm:ss.SSS A' }),
        format.ms(),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    transports: [
        new transports.Console({
          format: format.combine(
            format.colorize({ all: true }),
            consoleFormat({
              showMeta: true,
              metaStrip: ['timestamp', 'service'],
              inspectOptions: {
                depth: Infinity,
                colors: true,
                maxArrayLength: Infinity,
                breakLength: 120,
                compact: Infinity,
              },
            })
          ),
        }),
    ],
});

export default logger;