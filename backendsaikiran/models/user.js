const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Phone: { type: Number, required: true, unique: true }
    // State: { type: String, required: true },
    // District: { type: String, required: true },
    // Address: { type: String, required: true },
    // Pincode: { type: String, required: true },
    // Password: { type: String, required: true },
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;