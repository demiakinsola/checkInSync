const express = require("express");
const router = express.Router();
const { newRefreshToken } = require("../controller/refreshTokenCtrl");

router.get("/refresh", newRefreshToken);

module.exports = router;