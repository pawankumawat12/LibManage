const express = require("express");
const router = express.Router();
const {registerAdmin} = require("../controller/authcontroller");

router.post("/register", registerAdmin);
module.exports = router;