const express = require("express");
const Order = require("../models/order");
const app = express();

app.get("/orders/:userID", async (req, res) => {

    try {
        let data = await Order.find({ _id: req.params.userID });
        res.json(data);
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        });
    }
})