const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("hello world!");
});

app.listen(3000);