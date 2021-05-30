export const logConfig = {
    appenders: {
        appLog: {
            type: 'file',
            filename: 'logs/app.log',
            pattern: 'yyyy-MM-dd',
            maxLogSize: 10485760,
            numBackups: 3,
            compress: true
        },
        errorLog: {
            type: 'file',
            filename: 'logs/error.log'
        },
        consoleLog: {
            type: 'stdout'
        },
        app: {
            type: 'logLevelFilter',
            level: 'DEBUG',
            appender: 'appLog'
        },
        error: {
            type: 'logLevelFilter',
            level: 'ERROR',
            appender: 'errorLog'
        },
        info: {
            type: 'logLevelFilter',
            level: 'TRACE',
            appender: 'consoleLog'
        }
    },
    categories: {
        default: { appenders: ['app', 'info', 'error'], level: 'WARN' }
    }
};
