var log4js = require('log4js');
let instance = null;
const projectName = "Node Clean Application";

class Logger {

    constructor() {
        this.value = Math.random(100);
        log4js.configure({
            appenders: {
                'console': { type: 'console' },
                'file': { type: 'file', filename: 'logs/app.log' }
            },
            categories: {
                default: { appenders: ['file', 'console'], level: 'DEBUG' },
            }
        });
    }

    printState = () => {
        console.log(this.value)
    }

    debug = (content) => {
        const logger = log4js.getLogger(projectName);
        logger.debug(content);
    }

    error = (content) => {
        const logger = log4js.getLogger(projectName);
        logger.error(content);
    }

    info = (content) => {
        const logger = log4js.getLogger(projectName);
        logger.info(content);
    }

    fatal = (content) => {
        const logger = log4js.getLogger();
        logger.fatal(content);
    }

    static getInstance() {
        if (!instance) {
            instance = new Logger()
        }
        return instance
    }
}

module.exports = Logger.getInstance();