const mongoose = require("mongoose");
const AddBookSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Author: {
      type: String,
      required: true,
      trim: true,
    },
    Description: {
      type: String,
      trim: true,
    },
    Price: {
      type: Number,
      required: true,
      trim: true,
    },
    Status: {
      type: String,
      enum: ["Available", "Not-Available"],
      trim: true,
      default: "Available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddBook", AddBookSchema);
