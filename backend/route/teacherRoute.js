const { signUp, logIn } = require("../controller/teacherController");
const express = require("express");
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', logIn);

module.exports = router;
