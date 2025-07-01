const Admin = require("../models/authmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerAdmin = async (req, res) => {
  const { FullName, Email, Password, ConfirmPassword } = req.body;
  try {
    const existAdmin = await Admin.findOne({ Email });
    if (existAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }
    if (Password !== ConfirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    if (Password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }
    if (!FullName || !Email || !Password || !ConfirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const hashedPass = await bcrypt.hash(Password, 10);
    const newAdmin = new Admin({
      FullName,
      Email,
      Password: hashedPass,
      ConfirmPassword: hashedPass,
    });
    await newAdmin.save();
    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        FullName: newAdmin.FullName,
        Email: newAdmin.Email,
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
      return res.status(400).json({
        message: "Admin not found",
      });
    }
    const isMatch = await bcrypt.compare(Password, admin.Password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        FullName: admin.FullName,
        Email: admin.Email,
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
