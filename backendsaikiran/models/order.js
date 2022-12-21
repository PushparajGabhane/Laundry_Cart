const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    productType: { type: String, required: true },
    quantity:{type:Number,required:true},
    washType:{type:String,required:true},
    price:{type:Number,required:true},
    status:{type:String}
}, { timestamps: true });

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
