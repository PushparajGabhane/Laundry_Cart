const express = require('express');

const model = require('../models/order');

const bodyParser=require("body-parser");

const router = express.Router()


// router.use(bodyParser.urlencoded({ extended: false }));

router.use(bodyParser.json())





/*  CREATE ORDER */

router.post('/selectorder', async (req, res) => {



    try {
        console.log(req.body)

        const user = new model(req.body);

        user.save().then(() => {

            res.json({
                status: "sucess",
                result: user

            })
        }).catch((e) => {
            res.json({
                status: "failed",
                result: e.message
            })
        })

    }
    


    
    catch (e) {

    res.send(e.message)
}
  

})


module.exports = router

