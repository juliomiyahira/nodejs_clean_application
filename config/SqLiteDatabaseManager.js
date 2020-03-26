const sqlite3 = require('sqlite3').verbose();

let instance = null;

class SqLiteDatabaseManager {

    constructor() {
        this.value = Math.random(100)
    }

    printState() {
        console.log(this.value)
    }

    static getInstance() {
        if (!instance) {
            instance = new SqLiteDatabaseManager()
        }
        return instance
    }

    open = () => {
        this.db = new sqlite3.Database(':memory:', (err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Connected to the in-memory SQlite database.');
        });
    }

    close = () => {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }
}

module.exports = SqLiteDatabaseManager