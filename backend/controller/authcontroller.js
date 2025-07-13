const Admin = require("../models/authmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async (req, res) => {
  const {
    FullName,
    Email,
    Password,
    ConfirmPassword,
    PhoneNumber,
    AlternateNumber,
    Address,
    Location,
  } = req.body;
  try {
    if (!FullName || !Email || !Password || !ConfirmPassword) {
      return res
        .status(400)
        .json({ message: "FullName, Email and Password fields are required" });
    }
    const existAdmin = await Admin.findOne({ Email });
    if (existAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    if (Password !== ConfirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    if (Password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const hashedPass = await bcrypt.hash(Password, 10);
    const newAdmin = new Admin({
      FullName,
      Email,
      Password: hashedPass,
      PhoneNumber,
      AlternateNumber,
      Address,
      Location,
    });
    await newAdmin.save();
    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        FullName: newAdmin.FullName,
        Email: newAdmin.Email,
        PhoneNumber: newAdmin.PhoneNumber,
        AlternateNumber: newAdmin.AlternateNumber,
        Address: newAdmin.Address,
        Location: newAdmin.Location,
        Role: newAdmin.Role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const LoginAdmin = async (req, res) => {
  const { Email, Password } = req.body;
  try {
    const admin = await Admin.findOne({ Email });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }
    const isMatch = await bcrypt.compare(Password, admin.Password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    admin.LastLogin = new Date();
    await admin.save();

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        FullName: admin.FullName,
        Email: admin.Email,
        PhoneNumber: admin.PhoneNumber,
        AlternateNumber: admin.AlternateNumber,
        Address: admin.Address,
        Location: admin.Location,
        Role: admin.Role,
        LastLogin: admin.LastLogin,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerAdmin,
  LoginAdmin,
};
