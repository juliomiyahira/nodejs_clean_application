const express = require("express");
const app = express();
const SqLiteDatabaseManager = require("./config/SqLiteDatabaseManager");
const userRoutes = require("./routes/UserRoutes");
const Logger = require("./utils/Logger");


app.get("/", (req, res) => {
    res.send("OI!!!");
})

app.get("/user", userRoutes);

module.exports = app;