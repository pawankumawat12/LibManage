const mongoose = require("mongoose");
const MyDetailSchema = new mongoose.Schema({
    Email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    Address: {
        type: String,
        required: true,
        trim: true
    },
    Seats:{
        type: Number,
        required: true,
        trim: true,
    }
}, {timestamps: true})

module.exports = new mongoose.model("MyDetails", MyDetailSchema);
