const fs = require('fs');
const chalk = require('chalk');

class Log {
    static getCurrentTime() {
        const date = new Date();
        return date.toLocaleTimeString();
    }

    static writeToFile(logMessage) {
        fs.appendFileSync('./output/log.txt', logMessage + '\n', 'utf8');
    }

    static success(message) {
        const currentTime = this.getCurrentTime();
        const logMessage = `[${currentTime}] [SUCCESS] ${message}`;
        console.log(chalk.magenta(`[${currentTime}]`) + chalk.green(' [SUCCESS] ') + chalk.white(message));
        this.writeToFile(logMessage);
    }

    static error(message) {
        const currentTime = this.getCurrentTime();
        const logMessage = `[${currentTime}] [ERROR] ${message}`;
        console.log(chalk.magenta(`[${currentTime}]`) + chalk.red(' [ERROR] ') + chalk.white(message));
        this.writeToFile(logMessage);
    }

    static info(message) {
        const currentTime = this.getCurrentTime();
        const logMessage = `[${currentTime}] [INFO] ${message}`;
        console.log(chalk.magenta(`[${currentTime}]`) + chalk.blue(' [INFO] ') + chalk.white(message));
        this.writeToFile(logMessage);
    }

    static warning(message) {
        const currentTime = this.getCurrentTime();
        const logMessage = `[${currentTime}] [WARNING] ${message}`;
        console.log(chalk.magenta(`[${currentTime}]`) + chalk.yellow(' [WARNING] ') + chalk.white(message));
        this.writeToFile(logMessage);
    }

    static debug(message) {
        const currentTime = this.getCurrentTime();
        const logMessage = `[${currentTime}] [DEBUG] ${message}`;
        console.log(chalk.magenta(`[${currentTime}]`) + chalk.gray(' [DEBUG] ') + chalk.white(message));
        this.writeToFile(logMessage);
    }
}
