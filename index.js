const express = require("express");
const app = express();
const SqLiteDatabaseManager = require("./config/SqLiteDatabaseManager");
const userRoutes = require("./routes/UserRoutes");

app.use(express.urlencoded({extended: false}));
SqLiteDatabaseManager.getInstance().open();

app.get("/", (req, res) => {
    res.send("OI!!!");
})

app.get("/user", userRoutes);
app.listen(3001);