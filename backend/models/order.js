const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    Product_Type: { type: String, required: true },
    Quantity:{type:Number,required:true},
    Wash_Type:{type:String,required:true},
    Price:{type:Number,required:true}
}, { timestamps: true });

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;