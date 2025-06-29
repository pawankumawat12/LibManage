const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Password: {
      type: String,
      required: true,
      minlength: 6,
    },
    ConfirmPassword: {
      type: String,
      required: true,
      minlength: 6,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", AdminSchema);