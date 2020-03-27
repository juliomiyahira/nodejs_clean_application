const app = require("./app");
const Logger = require("./utils/Logger");


var server = app.listen(3000, () => {
    Logger.info("oi!");
    Logger.info("oi!");
    Logger.info("oi!");
    Logger.fatal("oi!");
} );

app.listen(3001);