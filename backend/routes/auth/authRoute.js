const authRoute = require('express').Router();
const { register, signIn } = require('../../controllers/authController/authController')

authRoute.post('/register', register);
authRoute.post('/signIn', signIn);

module.exports = authRoute;