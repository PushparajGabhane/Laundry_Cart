const express=require("express")
const bodyparser=require("body-parser")
const bcrypt=require("bcrypt")
const expressvalidator=require("express-validator")
const userModel=require("../models/user")


const router=express.Router();

router.use(bodyparser.urlencoded({extended:false}));

const {check,validationResult}=expressvalidator

router.get("/",async(req,res)=>{

    try{
        const get=await userModel.find()
        res.send({
            getreq:get
        })
    }
    catch(e){
        res.send(e.message)
    }
   

})


router.post("/post",[check("name","length max 20").isLength({min:2,max:20}),check("email","max length is 20").isLength({min:5}),check("phone","number should be 10").isLength({min:10})], (req,res)=>{

    const error=validationResult(req)
   

    const { name, email, phone,password} = req.body;

    bcrypt.hash(password,10,async(err,hash)=>{
       
        if(err){
            res.send(err)
        }
try{
    const post=await user.create({ name, email, phone,password:hash})
 

    res.send({
        status:"sucess",
        result:post
    })


}
catch(e){
    res.send(e.message)
}
  
    

    })

})


module.exports=router;