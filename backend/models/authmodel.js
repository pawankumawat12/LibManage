const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    FullName: { type: String, required: true, trim: true },
    Email: { type: String, required: true, unique: true, trim: true },
    Password: { type: String, required: true, minlength: 6 },
    PhoneNumber: { type: String, trim: true },
    AlternateNumber: { type: String, trim: true },
    Address: { type: String, trim: true },
    Location: { type: String, trim: true },
    Role: { type: String, default: "admin" },
    LastLogin: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
