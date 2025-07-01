const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema(
  {
    SeatNo: {
      type: Number,
      requied: true,
      unique: true,
      trim: true,
    },
    Course: {
      type: String,
      trim: true,
    },
    AadharNo: {
      type: String,
      required: true,
      trim: true
    },
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      unique: true,
      trim: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Fees: {
      type: Number,
      required: true,
      default: 1000,
    },
    Address: {
      type: String,
      trim: true,
    },
    DateOfBirth: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
