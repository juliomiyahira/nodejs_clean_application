const express = require("express");
const router = express.Router();
const userAddResouce = require("../resource/UserAddResouce");

router.get("/add", userAddResouce.execute);

module.exports = router;