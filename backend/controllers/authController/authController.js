const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// For registration or signUp
exports.register = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 11);
        const user = await User.create(req.body);
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
        const { email_phone, password } = req.body;
        let user;

        if (typeof email_phone === 'string') {
            user = await User.findOne({ email: email_phone });
        } else if (typeof email_phone === 'number') {
            user = await User.findOne({ phone: email_phone });
        }
        // console.log(user);
        if (!user) {
            return res.status(401).json({
                message: "Wrong credentials!",
            })
        }

        const validated = await bcrypt.compare(password, user.password);

        if (!validated) {
            return res.status(400).json({
                message: "Password doesn't match!"
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
            message:"Failure to signIn",
            error
        })
    }
}