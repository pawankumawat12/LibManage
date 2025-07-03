
const express = require("express");
const router = express.Router();
const {registerAdmin, LoginAdmin} = require("../controller/authcontroller");
const {AddStudent, GetAllDataStudents} = require("../controller/studentcontroller");
const { AddBooks, GetAllBooks } = require("../controller/AddBookcontroller");

router.post("/register", registerAdmin);
router.post("/login", LoginAdmin);
router.post("/addstudent", AddStudent);
router.get("/studentalldata", GetAllDataStudents);
router.post("/addbook", AddBooks);
router.get('/getAllbooks', GetAllBooks);
module.exports = router;