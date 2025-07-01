
const express = require("express");
const router = express.Router();
const {registerAdmin, LoginAdmin} = require("../controller/authcontroller");
const {AddStudent, GetAllDataStudents} = require("../controller/studentcontroller");
const { AddBooks, GetAllBooks } = require("../controller/AddBookcontroller");
const { MyDetail, getAllDetails } = require("../controller/MyDetailscontroller");

router.post("/register", registerAdmin);
router.post("/login", LoginAdmin);
router.post("/addstudent", AddStudent);
router.get("/studentalldata", GetAllDataStudents);
router.post("/addbook", AddBooks);
router.get('/getAllbooks', GetAllBooks);
router.post('/addMyDetails', MyDetail)
router.get("/getMyDetails", getAllDetails)
module.exports = router;