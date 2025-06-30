
const express = require("express");
const router = express.Router();
const {registerAdmin, LoginAdmin} = require("../controller/authcontroller");
const {AddStudent, GetAllDataStudents} = require("../controller/studentcontroller");

router.post("/register", registerAdmin);
router.post("/login", LoginAdmin);
router.post("/addstudent", AddStudent);
router.get("/studentalldata", GetAllDataStudents);
module.exports = router;