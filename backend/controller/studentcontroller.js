const Student = require("../models/studentmodel");
const AddStudent = async (req, res) => {
  const {
    SeatNo,
    Course,
    AadharNo,
    Name,
    Email,
    PhoneNumber,
    Fees,
    Address,
    DateOfBirth,
  } = req.body;
  try {
    const email = await Student.findOne({ Email });
    const phoneNumber = await Student.findOne({ PhoneNumber });

    if (email) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    if (phoneNumber) {
      return res.status(400).json({
        message: "PhoneNumber already exists",
      });
    }

    const newStudent = new Student({
      SeatNo,
      Course,
      AadharNo,
      Name,
      Email,
      PhoneNumber,
      Fees,
      Address,
      DateOfBirth,
    });
    await newStudent.save();
    res
      .status(201)
      .json({ message: "Student added successfully", student: newStudent });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const GetAllDataStudents = async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).json(studentsData);
  } catch (error) {
    res.status(400).json({ message: "Faild to get students data" });
  }
};
module.exports = { AddStudent, GetAllDataStudents };
