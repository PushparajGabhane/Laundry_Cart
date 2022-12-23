const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// For registration or signUp
exports.register = async (req, res, next) => {
    try {
        let user, email, phone, errorType = [];
        email = req.body.email;
        // console.log('email', email);;
        phone = req.body.phone;
        // console.log('phone', phone);
        email = await User.findOne({ email: email })
        // console.log('email', email);
        
        if (email != null) {
            errorType.push('email');
        }
        // if errrType = email, means email already exits 

        if(Number(phone)){
            phone = await User.findOne({ phone: phone })
        }
        if( phone != null){
            errorType.push('phone')
        }
        // console.log(errorType);
        if(errorType.length>0){
            return res.status(401).json({
                message:"Email or phone error",
                errorType
            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 11);
        user = await User.create(req.body);
        res.status(201).json({
            message: `Hello ${req.body.name}! your account has been created`,
            user: user,
        })
    } catch (error) {
        res.status(401).json({
            message: "Something went wrong on register!",
            error
        })
    }
}

// for login or signIn

exports.signIn = async (req, res, next) => {
    try {
        // console.log('sign in works');
        const { email_phone, password } = req.body;
        let user, errorType;

        if (typeof email_phone === 'string') {
            errorType = 'email';
            user = await User.findOne({ email: email_phone });
        } else if (typeof email_phone === 'number') {
            errorType = 'phone'
            user = await User.findOne({ phone: email_phone });
        }
        // console.log(user);
        if (!user) {
            return res.status(401).json({
                message: "Wrong credentials!",
                errorType
            })
        }

        const validated = await bcrypt.compare(password, user.password);

        if (!validated) {
            errorType = 'password';

            return res.status(400).json({
                message: "Password doesn't match!",
                errorType
            })
        }
        const token = await jwt.sign({ email_phone, _id: user.id }, process.env.PRIVATE_KEY, { expiresIn: "2h" });
        res.status(200).json({
            message: "Login succesfull!",
            token,
            user
        })
    } catch (error) {
        res.status(401).json({
            message: "Failure to signIn",
            error
        })
    }
}