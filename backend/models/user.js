const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
